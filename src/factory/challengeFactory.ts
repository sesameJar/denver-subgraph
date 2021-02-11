import { BigInt, ipfs, JSONValue, Result, json, Bytes } from "@graphprotocol/graph-ts"
import { Challenge } from "../../generated/schema"
import { StarRelay } from "../../generated/StarRelay/StarRelay"
import { loadOrCreateContract } from "./contractFactory"
import { loadOrCreateVideo } from "./videoFactory"

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

export function fillIPFSMetaData(starRelay: StarRelay, challenge: Challenge): void {

  let data = ipfs.cat('/ipfs/' + challenge.metadataIPFSHash)
  if (data === null) {
    // Try again
    data = ipfs.cat('/ipfs/' + challenge.metadataIPFSHash)
  }
  if (data !== null) {
    let result: Result<JSONValue, boolean> = json.try_fromBytes(data as Bytes)
    if (result.isOk) {
      let jsonData = result.value;
      let jsonObject = jsonData.toObject();
      challenge.title = jsonObject.get('name').toString()
      challenge.description = jsonObject.get('description').toString()
      challenge.firstVideoIpfsHash = jsonObject.get('videoUri').toString()
      challenge.save()
    }
  }

}