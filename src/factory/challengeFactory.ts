import { BigInt } from "@graphprotocol/graph-ts"
import { Challenge } from "../../generated/schema"
import { StarRelay } from "../../generated/StarRelay/StarRelay"
import { loadOrCreateContract } from "./contractFactory"

export function loadOrCreateChallenge(
  starRelay: StarRelay,
  challengeId: BigInt
): Challenge {
  let challenge = Challenge.load(challengeId.toString())
  if (challenge == null) {
    challenge = new Challenge(challengeId.toString())
    challenge.numChallengers = BigInt.fromI32(1) // challenge creator counts as a challenger
    let contract = loadOrCreateContract(starRelay._address.toHexString())
    contract.numChallenges = contract.numChallenges.plus(BigInt.fromI32(1))
    contract.save()
  }
  return challenge as Challenge
  
}
