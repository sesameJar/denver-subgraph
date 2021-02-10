import { BigInt } from "@graphprotocol/graph-ts"
import {
  StarRelay,
  ChainlinkCancelled,
  ChainlinkFulfilled,
  ChainlinkRequested,
  ChallengeResolved,
  FundsSplitted,
  NewChallengeStarted,
  NewChallengerJumpedIn,
  Invitation,
  Test
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
  
  // Create a new challenge
  let challengeId = event.params.challengeId
  let starRelay = StarRelay.bind(event.address)

  let challenge = loadOrCreateChallenge(starRelay, challengeId)
  let challengeStruct = starRelay.challenges(challengeId)
  challenge.creator = event.params.creator
  challenge.startTxnHash = event.transaction.hash.toHexString()
  challenge.startTimestamp = event.block.timestamp
  challenge.beneficiary = event.params.beneficiary
  challenge.challengers = [event.params.creator.toHexString()]
  challenge.isPublic = challengeStruct.value0 
  challenge.isActive = challengeStruct.value1
  challenge.endTimestamp = event.params.endTimestamp
  challenge.minEntryFee = challengeStruct.value3
  challenge.totalFund = challengeStruct.value2
  challenge.save()

  // Update the account
  let creator = loadOrCreateAccount(starRelay, event.params.creator.toHexString())
  creator.numChallenges = creator.numChallenges.plus(BigInt.fromI32(1))
  let challenges = creator.challenges
  challenges.push(challengeId.toString())
  creator.challenges = challenges
  creator.totalFund = creator.totalFund.plus(event.transaction.value)
  creator.save()

  // Create the video
  let video = loadOrCreateVideo(starRelay, event.params.ipfsHash)
  video.creator = creator.id
  video.challenge = challengeId.toString()
  video.uploadTxnHash = event.transaction.hash.toHexString()
  video.uploadTimestamp = event.block.timestamp
  video.save()

}

export function handleNewChallengerJumpedIn(
  event: NewChallengerJumpedIn
): void {

  let starRelay = StarRelay.bind(event.address)

  // Create the video
  let video = loadOrCreateVideo(starRelay, event.params.ipfsHash)
  video.creator = event.params.challenger.toString()
  video.challenge = event.params.challengeId.toString()
  video.uploadTxnHash = event.transaction.hash.toHexString()
  video.uploadTimestamp = event.block.timestamp
  video.save()

  // Update the challenge
  let challenge = loadOrCreateChallenge(starRelay, event.params.challengeId)
  challenge.totalFund = event.params.totalFund
  let challengers = challenge.challengers
  let newChallenger = loadOrCreateAccount(starRelay, video.creator)
  if (!challengers.includes(newChallenger.id)) {
    challenge.numChallengers = challenge.numChallengers.plus(BigInt.fromI32(1))

    // Update the account
    let challenges = newChallenger.challenges
    challenges.push(challenge.id)
    newChallenger.challenges = challenges
    newChallenger.numChallenges = newChallenger.numChallenges.plus(BigInt.fromI32(1))
    newChallenger.totalFund = newChallenger.totalFund.plus(event.transaction.value)
    newChallenger.save()
  }
  challenge.save()

}

export function handleInvitation(event: Invitation): void {

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

export function handleTest(event: Test): void {}