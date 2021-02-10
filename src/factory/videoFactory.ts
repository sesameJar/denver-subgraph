import { BigInt } from "@graphprotocol/graph-ts"
import { Video } from "../../generated/schema"
import { StarRelay } from "../../generated/StarRelay/StarRelay"
import { loadOrCreateContract } from "./contractFactory"

export function loadOrCreateVideo(
  starRelay: StarRelay,
  videoId: string
): Video {
  
  let video = Video.load(videoId)
  if (video == null) {
    video = new Video(videoId)
    let contract = loadOrCreateContract(starRelay._address.toHexString())
    contract.numVideos = contract.numVideos.plus(BigInt.fromI32(1))
    contract.save()
  }
  return video as Video
  
}