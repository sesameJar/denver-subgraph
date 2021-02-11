// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ChainlinkCancelled extends ethereum.Event {
  get params(): ChainlinkCancelled__Params {
    return new ChainlinkCancelled__Params(this);
  }
}

export class ChainlinkCancelled__Params {
  _event: ChainlinkCancelled;

  constructor(event: ChainlinkCancelled) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class ChainlinkFulfilled extends ethereum.Event {
  get params(): ChainlinkFulfilled__Params {
    return new ChainlinkFulfilled__Params(this);
  }
}

export class ChainlinkFulfilled__Params {
  _event: ChainlinkFulfilled;

  constructor(event: ChainlinkFulfilled) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class ChainlinkRequested extends ethereum.Event {
  get params(): ChainlinkRequested__Params {
    return new ChainlinkRequested__Params(this);
  }
}

export class ChainlinkRequested__Params {
  _event: ChainlinkRequested;

  constructor(event: ChainlinkRequested) {
    this._event = event;
  }

  get id(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class ChallengeResolved extends ethereum.Event {
  get params(): ChallengeResolved__Params {
    return new ChallengeResolved__Params(this);
  }
}

export class ChallengeResolved__Params {
  _event: ChallengeResolved;

  constructor(event: ChallengeResolved) {
    this._event = event;
  }

  get challengeId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get winner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get ipfsHash(): string {
    return this._event.parameters[2].value.toString();
  }

  get totalFund(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class FundsSplitted extends ethereum.Event {
  get params(): FundsSplitted__Params {
    return new FundsSplitted__Params(this);
  }
}

export class FundsSplitted__Params {
  _event: FundsSplitted;

  constructor(event: FundsSplitted) {
    this._event = event;
  }

  get beneficiary(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get creator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get winner(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get totalFund(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Invitation extends ethereum.Event {
  get params(): Invitation__Params {
    return new Invitation__Params(this);
  }
}

export class Invitation__Params {
  _event: Invitation;

  constructor(event: Invitation) {
    this._event = event;
  }

  get challengeId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get challenger(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get invitee(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class NewChallengeStarted extends ethereum.Event {
  get params(): NewChallengeStarted__Params {
    return new NewChallengeStarted__Params(this);
  }
}

export class NewChallengeStarted__Params {
  _event: NewChallengeStarted;

  constructor(event: NewChallengeStarted) {
    this._event = event;
  }

  get challengeId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get creator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get beneficiary(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get endTimestamp(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get ipfsHash(): string {
    return this._event.parameters[4].value.toString();
  }
}

export class NewChallengerJumpedIn extends ethereum.Event {
  get params(): NewChallengerJumpedIn__Params {
    return new NewChallengerJumpedIn__Params(this);
  }
}

export class NewChallengerJumpedIn__Params {
  _event: NewChallengerJumpedIn;

  constructor(event: NewChallengerJumpedIn) {
    this._event = event;
  }

  get challengeId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get challenger(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get ipfsHash(): string {
    return this._event.parameters[2].value.toString();
  }

  get totalFund(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class StarRelay__challengesResult {
  value0: boolean;
  value1: boolean;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: Address;
  value6: Address;
  value7: Address;
  value8: string;

  constructor(
    value0: boolean,
    value1: boolean,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: Address,
    value6: Address,
    value7: Address,
    value8: string
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromBoolean(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromAddress(this.value5));
    map.set("value6", ethereum.Value.fromAddress(this.value6));
    map.set("value7", ethereum.Value.fromAddress(this.value7));
    map.set("value8", ethereum.Value.fromString(this.value8));
    return map;
  }
}

export class StarRelay__videosResult {
  value0: string;
  value1: Address;
  value2: BigInt;

  constructor(value0: string, value1: Address, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }
}

export class StarRelay extends ethereum.SmartContract {
  static bind(address: Address): StarRelay {
    return new StarRelay("StarRelay", address);
  }

  beneficiaryPercentage(): BigInt {
    let result = super.call(
      "beneficiaryPercentage",
      "beneficiaryPercentage():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_beneficiaryPercentage(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "beneficiaryPercentage",
      "beneficiaryPercentage():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  challenges(param0: BigInt): StarRelay__challengesResult {
    let result = super.call(
      "challenges",
      "challenges(uint256):(bool,bool,uint256,uint256,uint256,address,address,address,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new StarRelay__challengesResult(
      result[0].toBoolean(),
      result[1].toBoolean(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toAddress(),
      result[6].toAddress(),
      result[7].toAddress(),
      result[8].toString()
    );
  }

  try_challenges(
    param0: BigInt
  ): ethereum.CallResult<StarRelay__challengesResult> {
    let result = super.tryCall(
      "challenges",
      "challenges(uint256):(bool,bool,uint256,uint256,uint256,address,address,address,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new StarRelay__challengesResult(
        value[0].toBoolean(),
        value[1].toBoolean(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toAddress(),
        value[6].toAddress(),
        value[7].toAddress(),
        value[8].toString()
      )
    );
  }

  creatorPercentage(): BigInt {
    let result = super.call(
      "creatorPercentage",
      "creatorPercentage():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_creatorPercentage(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "creatorPercentage",
      "creatorPercentage():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  numChallenges(): BigInt {
    let result = super.call("numChallenges", "numChallenges():(uint256)", []);

    return result[0].toBigInt();
  }

  try_numChallenges(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "numChallenges",
      "numChallenges():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  videos(param0: string): StarRelay__videosResult {
    let result = super.call(
      "videos",
      "videos(string):(string,address,uint256)",
      [ethereum.Value.fromString(param0)]
    );

    return new StarRelay__videosResult(
      result[0].toString(),
      result[1].toAddress(),
      result[2].toBigInt()
    );
  }

  try_videos(param0: string): ethereum.CallResult<StarRelay__videosResult> {
    let result = super.tryCall(
      "videos",
      "videos(string):(string,address,uint256)",
      [ethereum.Value.fromString(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new StarRelay__videosResult(
        value[0].toString(),
        value[1].toAddress(),
        value[2].toBigInt()
      )
    );
  }

  winnerPercentage(): BigInt {
    let result = super.call(
      "winnerPercentage",
      "winnerPercentage():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_winnerPercentage(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "winnerPercentage",
      "winnerPercentage():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class StartChallengeCall extends ethereum.Call {
  get inputs(): StartChallengeCall__Inputs {
    return new StartChallengeCall__Inputs(this);
  }

  get outputs(): StartChallengeCall__Outputs {
    return new StartChallengeCall__Outputs(this);
  }
}

export class StartChallengeCall__Inputs {
  _call: StartChallengeCall;

  constructor(call: StartChallengeCall) {
    this._call = call;
  }

  get _beneficiary(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _invitedAddresses(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get _endTimestamp(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _minEntryFee(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _ipfsHash(): string {
    return this._call.inputValues[4].value.toString();
  }
}

export class StartChallengeCall__Outputs {
  _call: StartChallengeCall;

  constructor(call: StartChallengeCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class JumpInCall extends ethereum.Call {
  get inputs(): JumpInCall__Inputs {
    return new JumpInCall__Inputs(this);
  }

  get outputs(): JumpInCall__Outputs {
    return new JumpInCall__Outputs(this);
  }
}

export class JumpInCall__Inputs {
  _call: JumpInCall;

  constructor(call: JumpInCall) {
    this._call = call;
  }

  get _challengeId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _invitedAddresses(): Array<Address> {
    return this._call.inputValues[1].value.toAddressArray();
  }

  get _ipfsHash(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class JumpInCall__Outputs {
  _call: JumpInCall;

  constructor(call: JumpInCall) {
    this._call = call;
  }
}

export class ResolveChallengeCall extends ethereum.Call {
  get inputs(): ResolveChallengeCall__Inputs {
    return new ResolveChallengeCall__Inputs(this);
  }

  get outputs(): ResolveChallengeCall__Outputs {
    return new ResolveChallengeCall__Outputs(this);
  }
}

export class ResolveChallengeCall__Inputs {
  _call: ResolveChallengeCall;

  constructor(call: ResolveChallengeCall) {
    this._call = call;
  }

  get _challengeId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ResolveChallengeCall__Outputs {
  _call: ResolveChallengeCall;

  constructor(call: ResolveChallengeCall) {
    this._call = call;
  }
}
