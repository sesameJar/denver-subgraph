import { BigInt } from "@graphprotocol/graph-ts"
import { Invitation } from "../../generated/schema"
import { StarRelay } from "../../generated/StarRelay/StarRelay"
import { loadOrCreateContract } from "./contractFactory"

export function loadOrCreateInvitation(
  starRelay: StarRelay,
  inviteId: string
): Invitation {
  
  let invite = Invitation.load(inviteId.toString())
  if (invite == null) {
    invite = new Invitation(inviteId.toString())
    let contract = loadOrCreateContract(starRelay._address.toHexString())
    contract.numInvitations = contract.numInvitations.plus(BigInt.fromI32(1))
    contract.save()
  }
  return invite as Invitation
  
}