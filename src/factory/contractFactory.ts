import { Contract } from "../../generated/schema";
import { BigInt } from "@graphprotocol/graph-ts"

export function loadOrCreateContract(
  contractId: string
): Contract {
  
  let contract = Contract.load(contractId)
  if (contract == null) {
    contract = new Contract(contractId)
    contract.numChallengers = BigInt.fromI32(0)
    contract.numChallenges = BigInt.fromI32(0)
    contract.numInvitations = BigInt.fromI32(0)
    contract.numVideos = BigInt.fromI32(0)
    contract.totalFund = BigInt.fromI32(0)
  }
  return contract as Contract
  
}