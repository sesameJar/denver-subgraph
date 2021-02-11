import { BigInt, ipfs, JSONValue, Result, json, Bytes, log } from "@graphprotocol/graph-ts"

import {
  StarRelay,
  ChainlinkCancelled,
  ChainlinkFulfilled,
  ChainlinkRequested,
  ChallengeResolved,
  FundsSplitted,
  NewChallengeStarted,
  NewChallengerJumpedIn,
  Invitation
} from "../generated/StarRelay/StarRelay"
import { loadOrCreateAccount } from "./factory/accountFactory"
import { loadOrCreateChallenge } from "./factory/challengeFactory"
import { loadOrCreateInvitation } from "./factory/invitationFactory"
import { loadOrCreateVideo } from "./factory/videoFactory"

// It is also possible to access smart contracts from mappings. For
// example, the contract that has emitted the event can be connected to
// with:
//
// let starRelay = StarRelay.bind(event.address)
//
// The following functions can then be called on this contract to access
// state variables and other data:
//
// - starRelay.beneficiaryPercentage(...)
// - starRelay.challenges(...)
// - starRelay.creatorPercentage(...)
// - starRelay.fee(...)
// - starRelay.jobId(...)
// - starRelay.numChallenges(...)
// - starRelay.oracle(...)
// - starRelay.videos(...)
// - starRelay.volume(...)
// - starRelay.winnerPercentage(...)
// - starRelay.requestVolumeData(...)

export function handleChainlinkCancelled(event: ChainlinkCancelled): void {}

export function handleChainlinkFulfilled(event: ChainlinkFulfilled): void {}

export function handleChainlinkRequested(event: ChainlinkRequested): void {}

export function handleChallengeResolved(event: ChallengeResolved): void {

  let starRelay = StarRelay.bind(event.address)
  let challengeId = event.params.challengeId
  
  // Update winning account
  let winner = loadOrCreateAccount(starRelay, event.params.winner.toHexString())
  let wins = winner.wins
  wins.push(challengeId.toString())
  winner.wins = wins
  winner.save()
  
  // Update challenge
  let challenge = loadOrCreateChallenge(starRelay, challengeId)
  challenge.resolveTxnHash = event.transaction.hash.toHexString()
  challenge.resolveTimestamp = event.block.timestamp
  challenge.totalFund = event.params.totalFund
  challenge.winner = winner.id
  challenge.save()
  
}

export function handleFundsSplitted(event: FundsSplitted): void {}

export function handleNewChallengeStarted(event: NewChallengeStarted): void {
  
  log.debug("[handleNewChallengeStarted] ", [event.transaction.hash.toHexString()])

  // Create a new challenge
  let challengeId = event.params.challengeId
  let starRelay = StarRelay.bind(event.address)
  let challenge = loadOrCreateChallenge(starRelay, challengeId)
  let challengeStruct = starRelay.challenges(challengeId)
  challenge.creator = event.params.creator
  challenge.metadataIpfsHash = event.params.ipfsHash
  challenge.startTxnHash = event.transaction.hash.toHexString()
  challenge.startTimestamp = event.block.timestamp
  challenge.beneficiary = event.params.beneficiary
  challenge.isPublic = challengeStruct.value0 
  challenge.isActive = challengeStruct.value1
  challenge.endTimestamp = event.params.endTimestamp
  challenge.minEntryFee = challengeStruct.value3
  challenge.totalFund = challengeStruct.value2

  // Fill metadata from IPFS
  let data = ipfs.cat('/ipfs/' + challenge.metadataIpfsHash)
  log.debug("[fillIpfsMetadata] {}", [data.toString()])
  if (data === null) {
    // Try again
    data = ipfs.cat('/ipfs/' + challenge.metadataIpfsHash)
  }
  if (data !== null) {
    let result: Result<JSONValue, boolean> = json.try_fromBytes(data as Bytes)
    if (result.isOk) {
      let jsonData = result.value;
      let jsonObject = jsonData.toObject();
      challenge.title = jsonObject.get('title').toString()
      challenge.description = jsonObject.get('description').toString()
      challenge.firstVideoIpfsHash = jsonObject.get('videoUri').toString()
    }
  }
  challenge.save()
  log.debug("[handleNewChallengeStarted] updated challenge entity: {} {} {}", [challengeId.toString(), challenge.metadataIpfsHash, challenge.totalFund.toString()])

  // Update the account
  let creator = loadOrCreateAccount(starRelay, event.params.creator.toHexString())
  creator.numChallenges = creator.numChallenges.plus(BigInt.fromI32(1))
  let challenges = creator.challenges
  challenges.push(challengeId.toString())
  creator.challenges = challenges
  creator.totalFund = creator.totalFund.plus(event.transaction.value)
  creator.save()
  log.debug("[handleNewChallengeStarted] updated account entity: {} {}", [creator.id.toString(), creator.totalFund.toString()])

  // Create the video
  let video = loadOrCreateVideo(starRelay, challenge.firstVideoIpfsHash)
  video.creator = creator.id
  video.challenge = challengeId.toString()
  video.uploadTxnHash = event.transaction.hash.toHexString()
  video.uploadTimestamp = event.block.timestamp
  video.save()
  log.debug("[handleNewChallengeStarted] updated video entity: {} {}", [video.id.toString(), creator.id.toString()])

}

export function handleNewChallengerJumpedIn(
  event: NewChallengerJumpedIn
): void {

  log.debug("[handleNewChallengerJumpedIn] {}", [event.transaction.hash.toHexString()])

  let starRelay = StarRelay.bind(event.address)

  // Create the video
  let video = loadOrCreateVideo(starRelay, event.params.ipfsHash)
  video.creator = event.params.challenger.toHexString()
  video.challenge = event.params.challengeId.toString()
  video.uploadTxnHash = event.transaction.hash.toHexString()
  video.uploadTimestamp = event.block.timestamp
  video.save()
  // Update the challenge
  log.warning("test {}", ["1"])
  let challenge = loadOrCreateChallenge(starRelay, event.params.challengeId)
  log.warning("test {}", ["1.2"])
  challenge.totalFund = event.params.totalFund
  let challengers = challenge.challengers
  let newChallenger = loadOrCreateAccount(starRelay, video.creator)
  log.warning("test {}", ["1.5"]) 
  if (!challengers.includes(newChallenger.id)) {
    challenge.numChallengers = challenge.numChallengers.plus(BigInt.fromI32(1))
    log.warning("test {}", ["2"])

    // Update the account
    let challenges = newChallenger.challenges
    challenges.push(challenge.id)
    newChallenger.challenges = challenges
    newChallenger.numChallenges = newChallenger.numChallenges.plus(BigInt.fromI32(1))
    newChallenger.totalFund = newChallenger.totalFund.plus(event.transaction.value)
    newChallenger.save()
  }
  challenge.save()
  log.warning("test {}", ["3"])

}

export function handleInvitation(event: Invitation): void {

  log.debug("[handleInvitation] {}", [event.transaction.hash.toHexString()])

  let starRelay = StarRelay.bind(event.address)

  let inviteId = event.params.challengeId.toString().concat(event.params.challenger.toHexString()).concat(event.params.invitee.toHexString())
  let invite = loadOrCreateInvitation(starRelay, inviteId)
  invite.challenge = event.params.challengeId.toString()
  invite.challenger = event.params.challenger.toHexString()
  invite.invitee = event.params.invitee.toHexString()
  invite.inviteTxnHash = event.transaction.hash.toHexString()
  invite.inviteTimestamp = event.block.timestamp
  invite.save()

}
