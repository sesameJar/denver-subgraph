# :stars: Star Relay Subgraph :stars:

🌟 Welcome to Star Relay 🌟

Star Relay is a decentralized application on Ethereum and IPFS for challenging your friends to do cool stuff during this boring COVID while potentially fundraising for charity causes you believe in. Upload a video of you doing 10-clap-push-ups and start a challenge relay to invite your friends to do the same! Soon you will be able to OWN a challenge as an NFT. How cool is it to own the _2014 ALS Ice Bucket Challenge_ or a series of videos of cool dance moves from _ETHDenver 2021_? Keep in tune!

## Entities at Quick Glance
Here's a quick summary of the entities indexed. Next to come: Tags and ChallengeSearch for better discoverability of the platform content! You can also play around with the data in the Graph's explorer here: https://thegraph.com/explorer/subgraph/ehsueh/star-relay 

### Contract

Summary entity for showing an overview of platform statistics like total number of challenges, challengers, videos .... etc.

### Challenge

Challenge entity includes immutable data set by the person who started the challenge and mutable data that changes as other users jump in and join the challenge with their video submissions.

### Account

Account entity is the collection of all ethereum addresses (EOA) seen by the platform so far. The platform _sees_ your account when: 
  - you started a challenge
  - you jumped in an existing challenge
  - you got invited by some one to a challenge

### Video

Video entity represents the video submissions uploaded to the IPFS from the platform!

### Invitation

Invitations entity capture _Invitation_ events from the contract emitted when a challenge participant challenge another user to participate in a specific challenge.


## Example Queries

Get an overview of the global stats:
```
{
  contracts() {
    id
    numChallenges
    numChallengers
    numVideos
    numInvitations
    totalFund
  }
}
```

Get ten most recent video submissions:
```
{
  videos(first: 10, orderBy: uploadTimestamp, orderDirection: desc) {
    id
    uploadTxnHash
    uploadTimestamp
  }
}
```

Get a list of active challenges:
```
{
  challenges(where: {isActive: true}) {
    id
    title
    description
    totalFund
    numChallengers
  }
}
```

## For Devs!!!

### Deploy the graph to rinkeby:
1. Generate subgraph yaml for rinkeby: `yarn run prep:rinkeby`
2. Deploy the subgraph: `graph deploy --node https://api.thegraph.com/deploy/ --ipfs https://api.thegraph.com/ipfs/ username/star-relay --access-token copy-from-your-dashboard`
_Note:_ if you want to deploy to another network, you can add a config json in `./network/` and run step one with the name of your json file. E.g. add `./network/mainnet.json` and `yarn run prep:mainnet` to pay expensive gas! 😃