// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Contract extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Contract entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Contract entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Contract", id.toString(), this);
  }

  static load(id: string): Contract | null {
    return store.get("Contract", id) as Contract | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get numChallenges(): BigInt {
    let value = this.get("numChallenges");
    return value.toBigInt();
  }

  set numChallenges(value: BigInt) {
    this.set("numChallenges", Value.fromBigInt(value));
  }

  get numChallengers(): BigInt {
    let value = this.get("numChallengers");
    return value.toBigInt();
  }

  set numChallengers(value: BigInt) {
    this.set("numChallengers", Value.fromBigInt(value));
  }

  get numVideos(): BigInt {
    let value = this.get("numVideos");
    return value.toBigInt();
  }

  set numVideos(value: BigInt) {
    this.set("numVideos", Value.fromBigInt(value));
  }

  get numInvitations(): BigInt {
    let value = this.get("numInvitations");
    return value.toBigInt();
  }

  set numInvitations(value: BigInt) {
    this.set("numInvitations", Value.fromBigInt(value));
  }

  get totalFund(): BigInt {
    let value = this.get("totalFund");
    return value.toBigInt();
  }

  set totalFund(value: BigInt) {
    this.set("totalFund", Value.fromBigInt(value));
  }
}

export class Challenge extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Challenge entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Challenge entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Challenge", id.toString(), this);
  }

  static load(id: string): Challenge | null {
    return store.get("Challenge", id) as Challenge | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get creator(): Bytes {
    let value = this.get("creator");
    return value.toBytes();
  }

  set creator(value: Bytes) {
    this.set("creator", Value.fromBytes(value));
  }

  get startTxnHash(): string {
    let value = this.get("startTxnHash");
    return value.toString();
  }

  set startTxnHash(value: string) {
    this.set("startTxnHash", Value.fromString(value));
  }

  get startTimestamp(): BigInt {
    let value = this.get("startTimestamp");
    return value.toBigInt();
  }

  set startTimestamp(value: BigInt) {
    this.set("startTimestamp", Value.fromBigInt(value));
  }

  get title(): string | null {
    let value = this.get("title");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set title(value: string | null) {
    if (value === null) {
      this.unset("title");
    } else {
      this.set("title", Value.fromString(value as string));
    }
  }

  get description(): string | null {
    let value = this.get("description");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set description(value: string | null) {
    if (value === null) {
      this.unset("description");
    } else {
      this.set("description", Value.fromString(value as string));
    }
  }

  get beneficiary(): Bytes {
    let value = this.get("beneficiary");
    return value.toBytes();
  }

  set beneficiary(value: Bytes) {
    this.set("beneficiary", Value.fromBytes(value));
  }

  get isPublic(): boolean {
    let value = this.get("isPublic");
    return value.toBoolean();
  }

  set isPublic(value: boolean) {
    this.set("isPublic", Value.fromBoolean(value));
  }

  get endTimestamp(): BigInt {
    let value = this.get("endTimestamp");
    return value.toBigInt();
  }

  set endTimestamp(value: BigInt) {
    this.set("endTimestamp", Value.fromBigInt(value));
  }

  get minEntryFee(): BigInt {
    let value = this.get("minEntryFee");
    return value.toBigInt();
  }

  set minEntryFee(value: BigInt) {
    this.set("minEntryFee", Value.fromBigInt(value));
  }

  get videos(): Array<string> {
    let value = this.get("videos");
    return value.toStringArray();
  }

  set videos(value: Array<string>) {
    this.set("videos", Value.fromStringArray(value));
  }

  get invitations(): Array<string> | null {
    let value = this.get("invitations");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set invitations(value: Array<string> | null) {
    if (value === null) {
      this.unset("invitations");
    } else {
      this.set("invitations", Value.fromStringArray(value as Array<string>));
    }
  }

  get challengers(): Array<string> {
    let value = this.get("challengers");
    return value.toStringArray();
  }

  set challengers(value: Array<string>) {
    this.set("challengers", Value.fromStringArray(value));
  }

  get numChallengers(): BigInt {
    let value = this.get("numChallengers");
    return value.toBigInt();
  }

  set numChallengers(value: BigInt) {
    this.set("numChallengers", Value.fromBigInt(value));
  }

  get totalFund(): BigInt {
    let value = this.get("totalFund");
    return value.toBigInt();
  }

  set totalFund(value: BigInt) {
    this.set("totalFund", Value.fromBigInt(value));
  }

  get resolveTimestamp(): BigInt | null {
    let value = this.get("resolveTimestamp");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set resolveTimestamp(value: BigInt | null) {
    if (value === null) {
      this.unset("resolveTimestamp");
    } else {
      this.set("resolveTimestamp", Value.fromBigInt(value as BigInt));
    }
  }

  get resolveTxnHash(): string | null {
    let value = this.get("resolveTxnHash");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set resolveTxnHash(value: string | null) {
    if (value === null) {
      this.unset("resolveTxnHash");
    } else {
      this.set("resolveTxnHash", Value.fromString(value as string));
    }
  }

  get winner(): string | null {
    let value = this.get("winner");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set winner(value: string | null) {
    if (value === null) {
      this.unset("winner");
    } else {
      this.set("winner", Value.fromString(value as string));
    }
  }

  get isActive(): boolean {
    let value = this.get("isActive");
    return value.toBoolean();
  }

  set isActive(value: boolean) {
    this.set("isActive", Value.fromBoolean(value));
  }
}

export class Account extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Account entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Account entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Account", id.toString(), this);
  }

  static load(id: string): Account | null {
    return store.get("Account", id) as Account | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get numChallenges(): BigInt {
    let value = this.get("numChallenges");
    return value.toBigInt();
  }

  set numChallenges(value: BigInt) {
    this.set("numChallenges", Value.fromBigInt(value));
  }

  get challenges(): Array<string> | null {
    let value = this.get("challenges");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set challenges(value: Array<string> | null) {
    if (value === null) {
      this.unset("challenges");
    } else {
      this.set("challenges", Value.fromStringArray(value as Array<string>));
    }
  }

  get totalFund(): BigInt {
    let value = this.get("totalFund");
    return value.toBigInt();
  }

  set totalFund(value: BigInt) {
    this.set("totalFund", Value.fromBigInt(value));
  }

  get wins(): Array<string> | null {
    let value = this.get("wins");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set wins(value: Array<string> | null) {
    if (value === null) {
      this.unset("wins");
    } else {
      this.set("wins", Value.fromStringArray(value as Array<string>));
    }
  }
}

export class Video extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Video entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Video entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Video", id.toString(), this);
  }

  static load(id: string): Video | null {
    return store.get("Video", id) as Video | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get creator(): string {
    let value = this.get("creator");
    return value.toString();
  }

  set creator(value: string) {
    this.set("creator", Value.fromString(value));
  }

  get challenge(): string {
    let value = this.get("challenge");
    return value.toString();
  }

  set challenge(value: string) {
    this.set("challenge", Value.fromString(value));
  }

  get uploadTxnHash(): string {
    let value = this.get("uploadTxnHash");
    return value.toString();
  }

  set uploadTxnHash(value: string) {
    this.set("uploadTxnHash", Value.fromString(value));
  }

  get uploadTimestamp(): BigInt {
    let value = this.get("uploadTimestamp");
    return value.toBigInt();
  }

  set uploadTimestamp(value: BigInt) {
    this.set("uploadTimestamp", Value.fromBigInt(value));
  }
}

export class Invitation extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Invitation entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Invitation entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Invitation", id.toString(), this);
  }

  static load(id: string): Invitation | null {
    return store.get("Invitation", id) as Invitation | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get challenge(): string {
    let value = this.get("challenge");
    return value.toString();
  }

  set challenge(value: string) {
    this.set("challenge", Value.fromString(value));
  }

  get challenger(): string {
    let value = this.get("challenger");
    return value.toString();
  }

  set challenger(value: string) {
    this.set("challenger", Value.fromString(value));
  }

  get invitee(): string {
    let value = this.get("invitee");
    return value.toString();
  }

  set invitee(value: string) {
    this.set("invitee", Value.fromString(value));
  }

  get inviteTxnHash(): string {
    let value = this.get("inviteTxnHash");
    return value.toString();
  }

  set inviteTxnHash(value: string) {
    this.set("inviteTxnHash", Value.fromString(value));
  }

  get inviteTimestamp(): BigInt {
    let value = this.get("inviteTimestamp");
    return value.toBigInt();
  }

  set inviteTimestamp(value: BigInt) {
    this.set("inviteTimestamp", Value.fromBigInt(value));
  }
}

export class Tags extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Tags entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Tags entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Tags", id.toString(), this);
  }

  static load(id: string): Tags | null {
    return store.get("Tags", id) as Tags | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get numVideos(): BigInt {
    let value = this.get("numVideos");
    return value.toBigInt();
  }

  set numVideos(value: BigInt) {
    this.set("numVideos", Value.fromBigInt(value));
  }

  get numChallenges(): BigInt {
    let value = this.get("numChallenges");
    return value.toBigInt();
  }

  set numChallenges(value: BigInt) {
    this.set("numChallenges", Value.fromBigInt(value));
  }
}
