import { Challenge } from "../generated/schema"
import { BigInt } from "@graphprotocol/graph-ts"

export function isNewChallenger(challengers: string[], newChallenger: string): string[] {
  if (!challengers.includes(newChallenger)) {
    challengers.push(newChallenger)
    challenge.numChallengers = challenge.numChallengers.plus(BigInt.fromI32(1))
  }
  return 
}