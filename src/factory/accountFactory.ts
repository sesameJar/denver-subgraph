import { BigInt } from "@graphprotocol/graph-ts"
import { Account } from "../../generated/schema"
import { StarRelay } from "../../generated/StarRelay/StarRelay"
import { loadOrCreateContract } from "./contractFactory"

export function loadOrCreateAccount(
  starRelay: StarRelay,
  accountId: string
): Account {
  
  let account = Account.load(accountId)
  if (account == null) {
    account = new Account(accountId)
    account.numChallenges = BigInt.fromI32(0)
    account.challenges = []
    account.totalFund = BigInt.fromI32(0)
    let contract = loadOrCreateContract(starRelay._address.toHexString())
    contract.numChallengers = contract.numChallengers.plus(BigInt.fromI32(1))
    contract.save()
  }
  return account as Account
}