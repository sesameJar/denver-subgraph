import { BigInt } from "@graphprotocol/graph-ts"
import { Contract } from "../generated/schema"
import {
  StarRelay,
  ChainlinkCancelled,
  ChainlinkFulfilled,
  ChainlinkRequested,
  ChallengeResolved,
  FundsSplitted,
  NewChallengeStarted,
  NewChallengerJumpedIn,
  Test
} from "../generated/StarRelay/StarRelay"
import { loadOrCreateAccount } from "./factory/accountFactory"
import { loadOrCreateChallenge } from "./factory/challengeFactory"
import { loadOrCreateVideo } from "./factory/videoFactory"

// It is also possible to access smart contracts from mappings. For
// example, the contract that has emitted the event can be connected to
// with:
//
// let contract = StarRelay.bind(event.address)
//
// The following functions can then be called on this contract to access
// state variables and other data:
//
// - contract.beneficiaryPercentage(...)
// - contract.challenges(...)
// - contract.creatorPercentage(...)
// - contract.fee(...)
// - contract.jobId(...)
// - contract.numChallenges(...)
// - contract.oracle(...)
// - contract.videos(...)
// - contract.volume(...)
// - contract.winnerPercentage(...)
// - contract.requestVolumeData(...)

export function handleChainlinkCancelled(event: ChainlinkCancelled): void {}

export function handleChainlinkFulfilled(event: ChainlinkFulfilled): void {}

export function handleChainlinkRequested(event: ChainlinkRequested): void {}

export function handleChallengeResolved(event: ChallengeResolved): void {

  let starRelay = StarRelay.bind(event.address)

  // Update challenge
  let challengeId = event.params.challengeId
  let challenge = loadOrCreateChallenge(starRelay, challengeId)
  challenge.resolveTxnHash = event.transaction.hash.toHexString()
  challenge.resolveTimestamp = event.block.timestamp
  challenge.totalFund = event.params.totalFund

  let winner = loadOrCreateAccount(starRelay, event.params.winner.toHexString())
  let wins = winner.wins
  wins.push(challengeId.toString())
  winner.wins = wins
  winner.save()

  challenge.winner = winner
  challenge.save()
  
}

export function handleFundsSplitted(event: FundsSplitted): void {}

export function handleNewChallengeStarted(event: NewChallengeStarted): void {
  
  // Create a new challenge
  let challengeId = event.params.challengeId
  let contract = StarRelay.bind(event.address)
  let challenge = loadOrCreateChallenge(contract, challengeId)
  let challengeStruct = contract.challenges(challengeId)
  challenge.creator = event.params.creator
  challenge.startTxnHash = event.transaction.hash.toHexString()
  challenge.startTimestamp = event.block.timestamp
  challenge.beneficiary = event.params.beneficiary
  challenge.invitedAddresses = challengeStruct.toMap().entries.filter(res => res.value.toBoolean())
  challenge.challengers = [event.params.creator.toHexString()]
  challenge.isPublic = challengeStruct.value0 
  challenge.isActive = challengeStruct.value1
  challenge.endTimestamp = event.params.endTimestamp
  challenge.minEntryFee = challengeStruct.value3
  challenge.totalFund = challengeStruct.value2
  challenge.save()

  // Create the video
  let video = loadOrCreateVideo(event.params.ipfsHash)
  video.creator = event.params.creator
  video.challenge = challengeId.toString()
  video.uploadTxnHash = event.transaction.hash.toHexString()
  video.uploadTimestamp = event.block.timestamp
  video.save()

}

export function handleNewChallengerJumpedIn(
  event: NewChallengerJumpedIn
): void {

  // Create the video
  let video = loadOrCreateVideo(event.params.ipfsHash)
  video.creator = event.params.challenger
  video.challenge = event.params.challengeId.toString()
  video.uploadTxnHash = event.transaction.hash.toHexString()
  video.uploadTimestamp = event.block.timestamp
  video.save()

  // Update the challenge
  let challenge = loadOrCreateChallenge(event.params.challengeId)
  challenge.totalFund = event.params.totalFunds
  // challenge.invitedAddresses = 
  let challengers = challenge.challengers
  if (!challengers.includes(video.creator.toHexString())) {
    challengers.push(video.creator.toHexString())
    challenge.numChallengers = challenge.numChallengers.plus(BigInt.fromI32(1))
  }

  // Update the platform
  let platform = Contract.load(event.address.toHexString())
  if (platform == null) {
    new Contract(event.address.toHexString())
    platform.numChallengers = BigInt.fromI32(1)
  }

  // let platformChallengers = challenge.challengers
  // if (!challengers.includes(video.creator.toHexString())) {
  //   challengers.push(video.creator.toHexString())
  //   challenge.numChallengers = challenge.numChallengers.plus(BigInt.fromI32(1))
  // }

}

export function handleTest(event: Test): void {}