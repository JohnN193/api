// package: viam.app.v1
// file: app/v1/app.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as tagger_v1_tagger_pb from "../../tagger/v1/tagger_pb";

export class Robot extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getLocation(): string;
  setLocation(value: string): void;

  hasLastAccess(): boolean;
  clearLastAccess(): void;
  getLastAccess(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastAccess(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasCreatedOn(): boolean;
  clearCreatedOn(): void;
  getCreatedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedOn(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Robot.AsObject;
  static toObject(includeInstance: boolean, msg: Robot): Robot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Robot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Robot;
  static deserializeBinaryFromReader(message: Robot, reader: jspb.BinaryReader): Robot;
}

export namespace Robot {
  export type AsObject = {
    id: string,
    name: string,
    location: string,
    lastAccess?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    createdOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class RobotPart extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDnsName(): string;
  setDnsName(value: string): void;

  getSecret(): string;
  setSecret(value: string): void;

  getRobot(): string;
  setRobot(value: string): void;

  getLocationId(): string;
  setLocationId(value: string): void;

  hasRobotConfig(): boolean;
  clearRobotConfig(): void;
  getRobotConfig(): google_protobuf_struct_pb.Struct | undefined;
  setRobotConfig(value?: google_protobuf_struct_pb.Struct): void;

  hasLastAccess(): boolean;
  clearLastAccess(): void;
  getLastAccess(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastAccess(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUserSuppliedInfo(): boolean;
  clearUserSuppliedInfo(): void;
  getUserSuppliedInfo(): google_protobuf_struct_pb.Struct | undefined;
  setUserSuppliedInfo(value?: google_protobuf_struct_pb.Struct): void;

  getMainPart(): boolean;
  setMainPart(value: boolean): void;

  getFqdn(): string;
  setFqdn(value: string): void;

  getLocalFqdn(): string;
  setLocalFqdn(value: string): void;

  hasCreatedOn(): boolean;
  clearCreatedOn(): void;
  getCreatedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedOn(value?: google_protobuf_timestamp_pb.Timestamp): void;

  clearSecretsList(): void;
  getSecretsList(): Array<SharedSecret>;
  setSecretsList(value: Array<SharedSecret>): void;
  addSecrets(value?: SharedSecret, index?: number): SharedSecret;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RobotPart.AsObject;
  static toObject(includeInstance: boolean, msg: RobotPart): RobotPart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RobotPart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RobotPart;
  static deserializeBinaryFromReader(message: RobotPart, reader: jspb.BinaryReader): RobotPart;
}

export namespace RobotPart {
  export type AsObject = {
    id: string,
    name: string,
    dnsName: string,
    secret: string,
    robot: string,
    locationId: string,
    robotConfig?: google_protobuf_struct_pb.Struct.AsObject,
    lastAccess?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    userSuppliedInfo?: google_protobuf_struct_pb.Struct.AsObject,
    mainPart: boolean,
    fqdn: string,
    localFqdn: string,
    createdOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    secretsList: Array<SharedSecret.AsObject>,
  }
}

export class RobotPartHistoryEntry extends jspb.Message {
  getPart(): string;
  setPart(value: string): void;

  getRobot(): string;
  setRobot(value: string): void;

  hasWhen(): boolean;
  clearWhen(): void;
  getWhen(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setWhen(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasOld(): boolean;
  clearOld(): void;
  getOld(): RobotPart | undefined;
  setOld(value?: RobotPart): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RobotPartHistoryEntry.AsObject;
  static toObject(includeInstance: boolean, msg: RobotPartHistoryEntry): RobotPartHistoryEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RobotPartHistoryEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RobotPartHistoryEntry;
  static deserializeBinaryFromReader(message: RobotPartHistoryEntry, reader: jspb.BinaryReader): RobotPartHistoryEntry;
}

export namespace RobotPartHistoryEntry {
  export type AsObject = {
    part: string,
    robot: string,
    when?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    old?: RobotPart.AsObject,
  }
}

export class ListOrganizationsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrganizationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrganizationsRequest): ListOrganizationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrganizationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrganizationsRequest;
  static deserializeBinaryFromReader(message: ListOrganizationsRequest, reader: jspb.BinaryReader): ListOrganizationsRequest;
}

export namespace ListOrganizationsRequest {
  export type AsObject = {
  }
}

export class Organization extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasCreatedOn(): boolean;
  clearCreatedOn(): void;
  getCreatedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedOn(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getPublicNamespace(): string;
  setPublicNamespace(value: string): void;

  getDefaultRegion(): string;
  setDefaultRegion(value: string): void;

  hasCid(): boolean;
  clearCid(): void;
  getCid(): string;
  setCid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Organization.AsObject;
  static toObject(includeInstance: boolean, msg: Organization): Organization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Organization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Organization;
  static deserializeBinaryFromReader(message: Organization, reader: jspb.BinaryReader): Organization;
}

export namespace Organization {
  export type AsObject = {
    id: string,
    name: string,
    createdOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    publicNamespace: string,
    defaultRegion: string,
    cid: string,
  }
}

export class OrganizationMember extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  clearEmailsList(): void;
  getEmailsList(): Array<string>;
  setEmailsList(value: Array<string>): void;
  addEmails(value: string, index?: number): string;

  hasDateAdded(): boolean;
  clearDateAdded(): void;
  getDateAdded(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDateAdded(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasLastLogin(): boolean;
  clearLastLogin(): void;
  getLastLogin(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastLogin(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationMember.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationMember): OrganizationMember.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrganizationMember, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationMember;
  static deserializeBinaryFromReader(message: OrganizationMember, reader: jspb.BinaryReader): OrganizationMember;
}

export namespace OrganizationMember {
  export type AsObject = {
    userId: string,
    emailsList: Array<string>,
    dateAdded?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    lastLogin?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListOrganizationsResponse extends jspb.Message {
  clearOrganizationsList(): void;
  getOrganizationsList(): Array<Organization>;
  setOrganizationsList(value: Array<Organization>): void;
  addOrganizations(value?: Organization, index?: number): Organization;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrganizationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrganizationsResponse): ListOrganizationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrganizationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrganizationsResponse;
  static deserializeBinaryFromReader(message: ListOrganizationsResponse, reader: jspb.BinaryReader): ListOrganizationsResponse;
}

export namespace ListOrganizationsResponse {
  export type AsObject = {
    organizationsList: Array<Organization.AsObject>,
  }
}

export class OrganizationInvite extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  hasCreatedOn(): boolean;
  clearCreatedOn(): void;
  getCreatedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedOn(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getRobotCount(): number;
  setRobotCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationInvite.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationInvite): OrganizationInvite.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrganizationInvite, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationInvite;
  static deserializeBinaryFromReader(message: OrganizationInvite, reader: jspb.BinaryReader): OrganizationInvite;
}

export namespace OrganizationInvite {
  export type AsObject = {
    organizationId: string,
    email: string,
    createdOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    robotCount: number,
  }
}

export class CreateOrganizationRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrganizationRequest): CreateOrganizationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrganizationRequest;
  static deserializeBinaryFromReader(message: CreateOrganizationRequest, reader: jspb.BinaryReader): CreateOrganizationRequest;
}

export namespace CreateOrganizationRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateOrganizationResponse extends jspb.Message {
  hasOrganization(): boolean;
  clearOrganization(): void;
  getOrganization(): Organization | undefined;
  setOrganization(value?: Organization): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrganizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrganizationResponse): CreateOrganizationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOrganizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrganizationResponse;
  static deserializeBinaryFromReader(message: CreateOrganizationResponse, reader: jspb.BinaryReader): CreateOrganizationResponse;
}

export namespace CreateOrganizationResponse {
  export type AsObject = {
    organization?: Organization.AsObject,
  }
}

export class GetOrganizationRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationRequest): GetOrganizationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationRequest;
  static deserializeBinaryFromReader(message: GetOrganizationRequest, reader: jspb.BinaryReader): GetOrganizationRequest;
}

export namespace GetOrganizationRequest {
  export type AsObject = {
    organizationId: string,
  }
}

export class GetOrganizationResponse extends jspb.Message {
  hasOrganization(): boolean;
  clearOrganization(): void;
  getOrganization(): Organization | undefined;
  setOrganization(value?: Organization): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationResponse): GetOrganizationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrganizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationResponse;
  static deserializeBinaryFromReader(message: GetOrganizationResponse, reader: jspb.BinaryReader): GetOrganizationResponse;
}

export namespace GetOrganizationResponse {
  export type AsObject = {
    organization?: Organization.AsObject,
  }
}

export class GetOrganizationNamespaceAvailabilityRequest extends jspb.Message {
  getPublicNamespace(): string;
  setPublicNamespace(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationNamespaceAvailabilityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationNamespaceAvailabilityRequest): GetOrganizationNamespaceAvailabilityRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrganizationNamespaceAvailabilityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationNamespaceAvailabilityRequest;
  static deserializeBinaryFromReader(message: GetOrganizationNamespaceAvailabilityRequest, reader: jspb.BinaryReader): GetOrganizationNamespaceAvailabilityRequest;
}

export namespace GetOrganizationNamespaceAvailabilityRequest {
  export type AsObject = {
    publicNamespace: string,
  }
}

export class GetOrganizationNamespaceAvailabilityResponse extends jspb.Message {
  getAvailable(): boolean;
  setAvailable(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationNamespaceAvailabilityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationNamespaceAvailabilityResponse): GetOrganizationNamespaceAvailabilityResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetOrganizationNamespaceAvailabilityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationNamespaceAvailabilityResponse;
  static deserializeBinaryFromReader(message: GetOrganizationNamespaceAvailabilityResponse, reader: jspb.BinaryReader): GetOrganizationNamespaceAvailabilityResponse;
}

export namespace GetOrganizationNamespaceAvailabilityResponse {
  export type AsObject = {
    available: boolean,
  }
}

export class UpdateOrganizationRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  hasPublicNamespace(): boolean;
  clearPublicNamespace(): void;
  getPublicNamespace(): string;
  setPublicNamespace(value: string): void;

  hasRegion(): boolean;
  clearRegion(): void;
  getRegion(): string;
  setRegion(value: string): void;

  hasCid(): boolean;
  clearCid(): void;
  getCid(): string;
  setCid(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOrganizationRequest): UpdateOrganizationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOrganizationRequest;
  static deserializeBinaryFromReader(message: UpdateOrganizationRequest, reader: jspb.BinaryReader): UpdateOrganizationRequest;
}

export namespace UpdateOrganizationRequest {
  export type AsObject = {
    organizationId: string,
    name: string,
    publicNamespace: string,
    region: string,
    cid: string,
  }
}

export class UpdateOrganizationResponse extends jspb.Message {
  hasOrganization(): boolean;
  clearOrganization(): void;
  getOrganization(): Organization | undefined;
  setOrganization(value?: Organization): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOrganizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOrganizationResponse): UpdateOrganizationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOrganizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOrganizationResponse;
  static deserializeBinaryFromReader(message: UpdateOrganizationResponse, reader: jspb.BinaryReader): UpdateOrganizationResponse;
}

export namespace UpdateOrganizationResponse {
  export type AsObject = {
    organization?: Organization.AsObject,
  }
}

export class DeleteOrganizationRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOrganizationRequest): DeleteOrganizationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOrganizationRequest;
  static deserializeBinaryFromReader(message: DeleteOrganizationRequest, reader: jspb.BinaryReader): DeleteOrganizationRequest;
}

export namespace DeleteOrganizationRequest {
  export type AsObject = {
    organizationId: string,
  }
}

export class DeleteOrganizationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOrganizationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOrganizationResponse): DeleteOrganizationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteOrganizationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOrganizationResponse;
  static deserializeBinaryFromReader(message: DeleteOrganizationResponse, reader: jspb.BinaryReader): DeleteOrganizationResponse;
}

export namespace DeleteOrganizationResponse {
  export type AsObject = {
  }
}

export class ListOrganizationMembersRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrganizationMembersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrganizationMembersRequest): ListOrganizationMembersRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrganizationMembersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrganizationMembersRequest;
  static deserializeBinaryFromReader(message: ListOrganizationMembersRequest, reader: jspb.BinaryReader): ListOrganizationMembersRequest;
}

export namespace ListOrganizationMembersRequest {
  export type AsObject = {
    organizationId: string,
  }
}

export class ListOrganizationMembersResponse extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  clearMembersList(): void;
  getMembersList(): Array<OrganizationMember>;
  setMembersList(value: Array<OrganizationMember>): void;
  addMembers(value?: OrganizationMember, index?: number): OrganizationMember;

  clearInvitesList(): void;
  getInvitesList(): Array<OrganizationInvite>;
  setInvitesList(value: Array<OrganizationInvite>): void;
  addInvites(value?: OrganizationInvite, index?: number): OrganizationInvite;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrganizationMembersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrganizationMembersResponse): ListOrganizationMembersResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrganizationMembersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrganizationMembersResponse;
  static deserializeBinaryFromReader(message: ListOrganizationMembersResponse, reader: jspb.BinaryReader): ListOrganizationMembersResponse;
}

export namespace ListOrganizationMembersResponse {
  export type AsObject = {
    organizationId: string,
    membersList: Array<OrganizationMember.AsObject>,
    invitesList: Array<OrganizationInvite.AsObject>,
  }
}

export class CreateOrganizationInviteRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  clearAuthorizationsList(): void;
  getAuthorizationsList(): Array<Authorization>;
  setAuthorizationsList(value: Array<Authorization>): void;
  addAuthorizations(value?: Authorization, index?: number): Authorization;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrganizationInviteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrganizationInviteRequest): CreateOrganizationInviteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOrganizationInviteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrganizationInviteRequest;
  static deserializeBinaryFromReader(message: CreateOrganizationInviteRequest, reader: jspb.BinaryReader): CreateOrganizationInviteRequest;
}

export namespace CreateOrganizationInviteRequest {
  export type AsObject = {
    organizationId: string,
    email: string,
    authorizationsList: Array<Authorization.AsObject>,
  }
}

export class CreateOrganizationInviteResponse extends jspb.Message {
  hasInvite(): boolean;
  clearInvite(): void;
  getInvite(): OrganizationInvite | undefined;
  setInvite(value?: OrganizationInvite): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrganizationInviteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrganizationInviteResponse): CreateOrganizationInviteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateOrganizationInviteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrganizationInviteResponse;
  static deserializeBinaryFromReader(message: CreateOrganizationInviteResponse, reader: jspb.BinaryReader): CreateOrganizationInviteResponse;
}

export namespace CreateOrganizationInviteResponse {
  export type AsObject = {
    invite?: OrganizationInvite.AsObject,
  }
}

export class UpdateOrganizationInviteAuthorizationsRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  clearAddAuthorizationsList(): void;
  getAddAuthorizationsList(): Array<Authorization>;
  setAddAuthorizationsList(value: Array<Authorization>): void;
  addAddAuthorizations(value?: Authorization, index?: number): Authorization;

  clearRemoveAuthorizationsList(): void;
  getRemoveAuthorizationsList(): Array<Authorization>;
  setRemoveAuthorizationsList(value: Array<Authorization>): void;
  addRemoveAuthorizations(value?: Authorization, index?: number): Authorization;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOrganizationInviteAuthorizationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOrganizationInviteAuthorizationsRequest): UpdateOrganizationInviteAuthorizationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOrganizationInviteAuthorizationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOrganizationInviteAuthorizationsRequest;
  static deserializeBinaryFromReader(message: UpdateOrganizationInviteAuthorizationsRequest, reader: jspb.BinaryReader): UpdateOrganizationInviteAuthorizationsRequest;
}

export namespace UpdateOrganizationInviteAuthorizationsRequest {
  export type AsObject = {
    organizationId: string,
    email: string,
    addAuthorizationsList: Array<Authorization.AsObject>,
    removeAuthorizationsList: Array<Authorization.AsObject>,
  }
}

export class UpdateOrganizationInviteAuthorizationsResponse extends jspb.Message {
  hasInvite(): boolean;
  clearInvite(): void;
  getInvite(): OrganizationInvite | undefined;
  setInvite(value?: OrganizationInvite): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOrganizationInviteAuthorizationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOrganizationInviteAuthorizationsResponse): UpdateOrganizationInviteAuthorizationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateOrganizationInviteAuthorizationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOrganizationInviteAuthorizationsResponse;
  static deserializeBinaryFromReader(message: UpdateOrganizationInviteAuthorizationsResponse, reader: jspb.BinaryReader): UpdateOrganizationInviteAuthorizationsResponse;
}

export namespace UpdateOrganizationInviteAuthorizationsResponse {
  export type AsObject = {
    invite?: OrganizationInvite.AsObject,
  }
}

export class DeleteOrganizationInviteRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOrganizationInviteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOrganizationInviteRequest): DeleteOrganizationInviteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteOrganizationInviteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOrganizationInviteRequest;
  static deserializeBinaryFromReader(message: DeleteOrganizationInviteRequest, reader: jspb.BinaryReader): DeleteOrganizationInviteRequest;
}

export namespace DeleteOrganizationInviteRequest {
  export type AsObject = {
    organizationId: string,
    email: string,
  }
}

export class DeleteOrganizationInviteResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOrganizationInviteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOrganizationInviteResponse): DeleteOrganizationInviteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteOrganizationInviteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOrganizationInviteResponse;
  static deserializeBinaryFromReader(message: DeleteOrganizationInviteResponse, reader: jspb.BinaryReader): DeleteOrganizationInviteResponse;
}

export namespace DeleteOrganizationInviteResponse {
  export type AsObject = {
  }
}

export class ResendOrganizationInviteRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResendOrganizationInviteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResendOrganizationInviteRequest): ResendOrganizationInviteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResendOrganizationInviteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResendOrganizationInviteRequest;
  static deserializeBinaryFromReader(message: ResendOrganizationInviteRequest, reader: jspb.BinaryReader): ResendOrganizationInviteRequest;
}

export namespace ResendOrganizationInviteRequest {
  export type AsObject = {
    organizationId: string,
    email: string,
  }
}

export class ResendOrganizationInviteResponse extends jspb.Message {
  hasInvite(): boolean;
  clearInvite(): void;
  getInvite(): OrganizationInvite | undefined;
  setInvite(value?: OrganizationInvite): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResendOrganizationInviteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResendOrganizationInviteResponse): ResendOrganizationInviteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ResendOrganizationInviteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResendOrganizationInviteResponse;
  static deserializeBinaryFromReader(message: ResendOrganizationInviteResponse, reader: jspb.BinaryReader): ResendOrganizationInviteResponse;
}

export namespace ResendOrganizationInviteResponse {
  export type AsObject = {
    invite?: OrganizationInvite.AsObject,
  }
}

export class DeleteOrganizationMemberRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOrganizationMemberRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOrganizationMemberRequest): DeleteOrganizationMemberRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteOrganizationMemberRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOrganizationMemberRequest;
  static deserializeBinaryFromReader(message: DeleteOrganizationMemberRequest, reader: jspb.BinaryReader): DeleteOrganizationMemberRequest;
}

export namespace DeleteOrganizationMemberRequest {
  export type AsObject = {
    organizationId: string,
    userId: string,
  }
}

export class DeleteOrganizationMemberResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteOrganizationMemberResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteOrganizationMemberResponse): DeleteOrganizationMemberResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteOrganizationMemberResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteOrganizationMemberResponse;
  static deserializeBinaryFromReader(message: DeleteOrganizationMemberResponse, reader: jspb.BinaryReader): DeleteOrganizationMemberResponse;
}

export namespace DeleteOrganizationMemberResponse {
  export type AsObject = {
  }
}

export class LocationOrganization extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  getPrimary(): boolean;
  setPrimary(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationOrganization.AsObject;
  static toObject(includeInstance: boolean, msg: LocationOrganization): LocationOrganization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationOrganization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationOrganization;
  static deserializeBinaryFromReader(message: LocationOrganization, reader: jspb.BinaryReader): LocationOrganization;
}

export namespace LocationOrganization {
  export type AsObject = {
    organizationId: string,
    primary: boolean,
  }
}

export class LocationAuth extends jspb.Message {
  getSecret(): string;
  setSecret(value: string): void;

  getLocationId(): string;
  setLocationId(value: string): void;

  clearSecretsList(): void;
  getSecretsList(): Array<SharedSecret>;
  setSecretsList(value: Array<SharedSecret>): void;
  addSecrets(value?: SharedSecret, index?: number): SharedSecret;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationAuth.AsObject;
  static toObject(includeInstance: boolean, msg: LocationAuth): LocationAuth.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationAuth, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationAuth;
  static deserializeBinaryFromReader(message: LocationAuth, reader: jspb.BinaryReader): LocationAuth;
}

export namespace LocationAuth {
  export type AsObject = {
    secret: string,
    locationId: string,
    secretsList: Array<SharedSecret.AsObject>,
  }
}

export class StorageConfig extends jspb.Message {
  getRegion(): string;
  setRegion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageConfig.AsObject;
  static toObject(includeInstance: boolean, msg: StorageConfig): StorageConfig.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageConfig;
  static deserializeBinaryFromReader(message: StorageConfig, reader: jspb.BinaryReader): StorageConfig;
}

export namespace StorageConfig {
  export type AsObject = {
    region: string,
  }
}

export class Location extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getParentLocationId(): string;
  setParentLocationId(value: string): void;

  hasAuth(): boolean;
  clearAuth(): void;
  getAuth(): LocationAuth | undefined;
  setAuth(value?: LocationAuth): void;

  clearOrganizationsList(): void;
  getOrganizationsList(): Array<LocationOrganization>;
  setOrganizationsList(value: Array<LocationOrganization>): void;
  addOrganizations(value?: LocationOrganization, index?: number): LocationOrganization;

  hasCreatedOn(): boolean;
  clearCreatedOn(): void;
  getCreatedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedOn(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getRobotCount(): number;
  setRobotCount(value: number): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): StorageConfig | undefined;
  setConfig(value?: StorageConfig): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Location.AsObject;
  static toObject(includeInstance: boolean, msg: Location): Location.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Location, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Location;
  static deserializeBinaryFromReader(message: Location, reader: jspb.BinaryReader): Location;
}

export namespace Location {
  export type AsObject = {
    id: string,
    name: string,
    parentLocationId: string,
    auth?: LocationAuth.AsObject,
    organizationsList: Array<LocationOrganization.AsObject>,
    createdOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    robotCount: number,
    config?: StorageConfig.AsObject,
  }
}

export class SharedSecret extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getSecret(): string;
  setSecret(value: string): void;

  hasCreatedOn(): boolean;
  clearCreatedOn(): void;
  getCreatedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedOn(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getState(): SharedSecret.StateMap[keyof SharedSecret.StateMap];
  setState(value: SharedSecret.StateMap[keyof SharedSecret.StateMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SharedSecret.AsObject;
  static toObject(includeInstance: boolean, msg: SharedSecret): SharedSecret.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SharedSecret, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SharedSecret;
  static deserializeBinaryFromReader(message: SharedSecret, reader: jspb.BinaryReader): SharedSecret;
}

export namespace SharedSecret {
  export type AsObject = {
    id: string,
    secret: string,
    createdOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    state: SharedSecret.StateMap[keyof SharedSecret.StateMap],
  }

  export interface StateMap {
    STATE_UNSPECIFIED: 0;
    STATE_ENABLED: 1;
    STATE_DISABLED: 2;
  }

  export const State: StateMap;
}

export class CreateLocationRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasParentLocationId(): boolean;
  clearParentLocationId(): void;
  getParentLocationId(): string;
  setParentLocationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLocationRequest): CreateLocationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateLocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLocationRequest;
  static deserializeBinaryFromReader(message: CreateLocationRequest, reader: jspb.BinaryReader): CreateLocationRequest;
}

export namespace CreateLocationRequest {
  export type AsObject = {
    organizationId: string,
    name: string,
    parentLocationId: string,
  }
}

export class CreateLocationResponse extends jspb.Message {
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLocationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLocationResponse): CreateLocationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateLocationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLocationResponse;
  static deserializeBinaryFromReader(message: CreateLocationResponse, reader: jspb.BinaryReader): CreateLocationResponse;
}

export namespace CreateLocationResponse {
  export type AsObject = {
    location?: Location.AsObject,
  }
}

export class GetLocationRequest extends jspb.Message {
  getLocationId(): string;
  setLocationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLocationRequest): GetLocationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLocationRequest;
  static deserializeBinaryFromReader(message: GetLocationRequest, reader: jspb.BinaryReader): GetLocationRequest;
}

export namespace GetLocationRequest {
  export type AsObject = {
    locationId: string,
  }
}

export class GetLocationResponse extends jspb.Message {
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLocationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLocationResponse): GetLocationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetLocationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLocationResponse;
  static deserializeBinaryFromReader(message: GetLocationResponse, reader: jspb.BinaryReader): GetLocationResponse;
}

export namespace GetLocationResponse {
  export type AsObject = {
    location?: Location.AsObject,
  }
}

export class UpdateLocationRequest extends jspb.Message {
  getLocationId(): string;
  setLocationId(value: string): void;

  hasName(): boolean;
  clearName(): void;
  getName(): string;
  setName(value: string): void;

  hasParentLocationId(): boolean;
  clearParentLocationId(): void;
  getParentLocationId(): string;
  setParentLocationId(value: string): void;

  hasRegion(): boolean;
  clearRegion(): void;
  getRegion(): string;
  setRegion(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLocationRequest): UpdateLocationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateLocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLocationRequest;
  static deserializeBinaryFromReader(message: UpdateLocationRequest, reader: jspb.BinaryReader): UpdateLocationRequest;
}

export namespace UpdateLocationRequest {
  export type AsObject = {
    locationId: string,
    name: string,
    parentLocationId: string,
    region: string,
  }
}

export class UpdateLocationResponse extends jspb.Message {
  hasLocation(): boolean;
  clearLocation(): void;
  getLocation(): Location | undefined;
  setLocation(value?: Location): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLocationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLocationResponse): UpdateLocationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateLocationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLocationResponse;
  static deserializeBinaryFromReader(message: UpdateLocationResponse, reader: jspb.BinaryReader): UpdateLocationResponse;
}

export namespace UpdateLocationResponse {
  export type AsObject = {
    location?: Location.AsObject,
  }
}

export class DeleteLocationRequest extends jspb.Message {
  getLocationId(): string;
  setLocationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLocationRequest): DeleteLocationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteLocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLocationRequest;
  static deserializeBinaryFromReader(message: DeleteLocationRequest, reader: jspb.BinaryReader): DeleteLocationRequest;
}

export namespace DeleteLocationRequest {
  export type AsObject = {
    locationId: string,
  }
}

export class DeleteLocationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLocationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLocationResponse): DeleteLocationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteLocationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLocationResponse;
  static deserializeBinaryFromReader(message: DeleteLocationResponse, reader: jspb.BinaryReader): DeleteLocationResponse;
}

export namespace DeleteLocationResponse {
  export type AsObject = {
  }
}

export class ListLocationsRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLocationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLocationsRequest): ListLocationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListLocationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLocationsRequest;
  static deserializeBinaryFromReader(message: ListLocationsRequest, reader: jspb.BinaryReader): ListLocationsRequest;
}

export namespace ListLocationsRequest {
  export type AsObject = {
    organizationId: string,
  }
}

export class ShareLocationRequest extends jspb.Message {
  getLocationId(): string;
  setLocationId(value: string): void;

  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareLocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ShareLocationRequest): ShareLocationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShareLocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareLocationRequest;
  static deserializeBinaryFromReader(message: ShareLocationRequest, reader: jspb.BinaryReader): ShareLocationRequest;
}

export namespace ShareLocationRequest {
  export type AsObject = {
    locationId: string,
    organizationId: string,
  }
}

export class ShareLocationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareLocationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ShareLocationResponse): ShareLocationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShareLocationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareLocationResponse;
  static deserializeBinaryFromReader(message: ShareLocationResponse, reader: jspb.BinaryReader): ShareLocationResponse;
}

export namespace ShareLocationResponse {
  export type AsObject = {
  }
}

export class UnshareLocationRequest extends jspb.Message {
  getLocationId(): string;
  setLocationId(value: string): void;

  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnshareLocationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UnshareLocationRequest): UnshareLocationRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnshareLocationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnshareLocationRequest;
  static deserializeBinaryFromReader(message: UnshareLocationRequest, reader: jspb.BinaryReader): UnshareLocationRequest;
}

export namespace UnshareLocationRequest {
  export type AsObject = {
    locationId: string,
    organizationId: string,
  }
}

export class UnshareLocationResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnshareLocationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UnshareLocationResponse): UnshareLocationResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UnshareLocationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnshareLocationResponse;
  static deserializeBinaryFromReader(message: UnshareLocationResponse, reader: jspb.BinaryReader): UnshareLocationResponse;
}

export namespace UnshareLocationResponse {
  export type AsObject = {
  }
}

export class ListLocationsResponse extends jspb.Message {
  clearLocationsList(): void;
  getLocationsList(): Array<Location>;
  setLocationsList(value: Array<Location>): void;
  addLocations(value?: Location, index?: number): Location;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLocationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLocationsResponse): ListLocationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListLocationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLocationsResponse;
  static deserializeBinaryFromReader(message: ListLocationsResponse, reader: jspb.BinaryReader): ListLocationsResponse;
}

export namespace ListLocationsResponse {
  export type AsObject = {
    locationsList: Array<Location.AsObject>,
  }
}

export class CreateLocationSecretRequest extends jspb.Message {
  getLocationId(): string;
  setLocationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLocationSecretRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLocationSecretRequest): CreateLocationSecretRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateLocationSecretRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLocationSecretRequest;
  static deserializeBinaryFromReader(message: CreateLocationSecretRequest, reader: jspb.BinaryReader): CreateLocationSecretRequest;
}

export namespace CreateLocationSecretRequest {
  export type AsObject = {
    locationId: string,
  }
}

export class CreateLocationSecretResponse extends jspb.Message {
  hasAuth(): boolean;
  clearAuth(): void;
  getAuth(): LocationAuth | undefined;
  setAuth(value?: LocationAuth): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLocationSecretResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLocationSecretResponse): CreateLocationSecretResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateLocationSecretResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLocationSecretResponse;
  static deserializeBinaryFromReader(message: CreateLocationSecretResponse, reader: jspb.BinaryReader): CreateLocationSecretResponse;
}

export namespace CreateLocationSecretResponse {
  export type AsObject = {
    auth?: LocationAuth.AsObject,
  }
}

export class DeleteLocationSecretRequest extends jspb.Message {
  getLocationId(): string;
  setLocationId(value: string): void;

  getSecretId(): string;
  setSecretId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLocationSecretRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLocationSecretRequest): DeleteLocationSecretRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteLocationSecretRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLocationSecretRequest;
  static deserializeBinaryFromReader(message: DeleteLocationSecretRequest, reader: jspb.BinaryReader): DeleteLocationSecretRequest;
}

export namespace DeleteLocationSecretRequest {
  export type AsObject = {
    locationId: string,
    secretId: string,
  }
}

export class DeleteLocationSecretResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLocationSecretResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLocationSecretResponse): DeleteLocationSecretResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteLocationSecretResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLocationSecretResponse;
  static deserializeBinaryFromReader(message: DeleteLocationSecretResponse, reader: jspb.BinaryReader): DeleteLocationSecretResponse;
}

export namespace DeleteLocationSecretResponse {
  export type AsObject = {
  }
}

export class LocationAuthRequest extends jspb.Message {
  getLocationId(): string;
  setLocationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationAuthRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LocationAuthRequest): LocationAuthRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationAuthRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationAuthRequest;
  static deserializeBinaryFromReader(message: LocationAuthRequest, reader: jspb.BinaryReader): LocationAuthRequest;
}

export namespace LocationAuthRequest {
  export type AsObject = {
    locationId: string,
  }
}

export class LocationAuthResponse extends jspb.Message {
  hasAuth(): boolean;
  clearAuth(): void;
  getAuth(): LocationAuth | undefined;
  setAuth(value?: LocationAuth): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationAuthResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LocationAuthResponse): LocationAuthResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LocationAuthResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationAuthResponse;
  static deserializeBinaryFromReader(message: LocationAuthResponse, reader: jspb.BinaryReader): LocationAuthResponse;
}

export namespace LocationAuthResponse {
  export type AsObject = {
    auth?: LocationAuth.AsObject,
  }
}

export class GetRobotRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRobotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRobotRequest): GetRobotRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRobotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRobotRequest;
  static deserializeBinaryFromReader(message: GetRobotRequest, reader: jspb.BinaryReader): GetRobotRequest;
}

export namespace GetRobotRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetRoverRentalRobotsRequest extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoverRentalRobotsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoverRentalRobotsRequest): GetRoverRentalRobotsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRoverRentalRobotsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoverRentalRobotsRequest;
  static deserializeBinaryFromReader(message: GetRoverRentalRobotsRequest, reader: jspb.BinaryReader): GetRoverRentalRobotsRequest;
}

export namespace GetRoverRentalRobotsRequest {
  export type AsObject = {
    orgId: string,
  }
}

export class RoverRentalRobot extends jspb.Message {
  getRobotId(): string;
  setRobotId(value: string): void;

  getLocationId(): string;
  setLocationId(value: string): void;

  getRobotName(): string;
  setRobotName(value: string): void;

  getRobotMainPartId(): string;
  setRobotMainPartId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RoverRentalRobot.AsObject;
  static toObject(includeInstance: boolean, msg: RoverRentalRobot): RoverRentalRobot.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RoverRentalRobot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RoverRentalRobot;
  static deserializeBinaryFromReader(message: RoverRentalRobot, reader: jspb.BinaryReader): RoverRentalRobot;
}

export namespace RoverRentalRobot {
  export type AsObject = {
    robotId: string,
    locationId: string,
    robotName: string,
    robotMainPartId: string,
  }
}

export class GetRoverRentalRobotsResponse extends jspb.Message {
  clearRobotsList(): void;
  getRobotsList(): Array<RoverRentalRobot>;
  setRobotsList(value: Array<RoverRentalRobot>): void;
  addRobots(value?: RoverRentalRobot, index?: number): RoverRentalRobot;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoverRentalRobotsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoverRentalRobotsResponse): GetRoverRentalRobotsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRoverRentalRobotsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoverRentalRobotsResponse;
  static deserializeBinaryFromReader(message: GetRoverRentalRobotsResponse, reader: jspb.BinaryReader): GetRoverRentalRobotsResponse;
}

export namespace GetRoverRentalRobotsResponse {
  export type AsObject = {
    robotsList: Array<RoverRentalRobot.AsObject>,
  }
}

export class GetRobotResponse extends jspb.Message {
  hasRobot(): boolean;
  clearRobot(): void;
  getRobot(): Robot | undefined;
  setRobot(value?: Robot): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRobotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRobotResponse): GetRobotResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRobotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRobotResponse;
  static deserializeBinaryFromReader(message: GetRobotResponse, reader: jspb.BinaryReader): GetRobotResponse;
}

export namespace GetRobotResponse {
  export type AsObject = {
    robot?: Robot.AsObject,
  }
}

export class GetRobotPartsRequest extends jspb.Message {
  getRobotId(): string;
  setRobotId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRobotPartsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRobotPartsRequest): GetRobotPartsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRobotPartsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRobotPartsRequest;
  static deserializeBinaryFromReader(message: GetRobotPartsRequest, reader: jspb.BinaryReader): GetRobotPartsRequest;
}

export namespace GetRobotPartsRequest {
  export type AsObject = {
    robotId: string,
  }
}

export class GetRobotPartsResponse extends jspb.Message {
  clearPartsList(): void;
  getPartsList(): Array<RobotPart>;
  setPartsList(value: Array<RobotPart>): void;
  addParts(value?: RobotPart, index?: number): RobotPart;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRobotPartsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRobotPartsResponse): GetRobotPartsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRobotPartsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRobotPartsResponse;
  static deserializeBinaryFromReader(message: GetRobotPartsResponse, reader: jspb.BinaryReader): GetRobotPartsResponse;
}

export namespace GetRobotPartsResponse {
  export type AsObject = {
    partsList: Array<RobotPart.AsObject>,
  }
}

export class GetRobotPartRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRobotPartRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRobotPartRequest): GetRobotPartRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRobotPartRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRobotPartRequest;
  static deserializeBinaryFromReader(message: GetRobotPartRequest, reader: jspb.BinaryReader): GetRobotPartRequest;
}

export namespace GetRobotPartRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetRobotPartResponse extends jspb.Message {
  hasPart(): boolean;
  clearPart(): void;
  getPart(): RobotPart | undefined;
  setPart(value?: RobotPart): void;

  getConfigJson(): string;
  setConfigJson(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRobotPartResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRobotPartResponse): GetRobotPartResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRobotPartResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRobotPartResponse;
  static deserializeBinaryFromReader(message: GetRobotPartResponse, reader: jspb.BinaryReader): GetRobotPartResponse;
}

export namespace GetRobotPartResponse {
  export type AsObject = {
    part?: RobotPart.AsObject,
    configJson: string,
  }
}

export class GetRobotPartLogsRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getErrorsOnly(): boolean;
  setErrorsOnly(value: boolean): void;

  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): string;
  setFilter(value: string): void;

  hasPageToken(): boolean;
  clearPageToken(): void;
  getPageToken(): string;
  setPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRobotPartLogsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRobotPartLogsRequest): GetRobotPartLogsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRobotPartLogsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRobotPartLogsRequest;
  static deserializeBinaryFromReader(message: GetRobotPartLogsRequest, reader: jspb.BinaryReader): GetRobotPartLogsRequest;
}

export namespace GetRobotPartLogsRequest {
  export type AsObject = {
    id: string,
    errorsOnly: boolean,
    filter: string,
    pageToken: string,
  }
}

export class LogEntry extends jspb.Message {
  getHost(): string;
  setHost(value: string): void;

  getLevel(): string;
  setLevel(value: string): void;

  hasTime(): boolean;
  clearTime(): void;
  getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getLoggerName(): string;
  setLoggerName(value: string): void;

  getMessage(): string;
  setMessage(value: string): void;

  hasCaller(): boolean;
  clearCaller(): void;
  getCaller(): google_protobuf_struct_pb.Struct | undefined;
  setCaller(value?: google_protobuf_struct_pb.Struct): void;

  getStack(): string;
  setStack(value: string): void;

  clearFieldsList(): void;
  getFieldsList(): Array<google_protobuf_struct_pb.Struct>;
  setFieldsList(value: Array<google_protobuf_struct_pb.Struct>): void;
  addFields(value?: google_protobuf_struct_pb.Struct, index?: number): google_protobuf_struct_pb.Struct;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogEntry.AsObject;
  static toObject(includeInstance: boolean, msg: LogEntry): LogEntry.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: LogEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogEntry;
  static deserializeBinaryFromReader(message: LogEntry, reader: jspb.BinaryReader): LogEntry;
}

export namespace LogEntry {
  export type AsObject = {
    host: string,
    level: string,
    time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    loggerName: string,
    message: string,
    caller?: google_protobuf_struct_pb.Struct.AsObject,
    stack: string,
    fieldsList: Array<google_protobuf_struct_pb.Struct.AsObject>,
  }
}

export class GetRobotPartLogsResponse extends jspb.Message {
  clearLogsList(): void;
  getLogsList(): Array<LogEntry>;
  setLogsList(value: Array<LogEntry>): void;
  addLogs(value?: LogEntry, index?: number): LogEntry;

  getNextPageToken(): string;
  setNextPageToken(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRobotPartLogsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRobotPartLogsResponse): GetRobotPartLogsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRobotPartLogsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRobotPartLogsResponse;
  static deserializeBinaryFromReader(message: GetRobotPartLogsResponse, reader: jspb.BinaryReader): GetRobotPartLogsResponse;
}

export namespace GetRobotPartLogsResponse {
  export type AsObject = {
    logsList: Array<LogEntry.AsObject>,
    nextPageToken: string,
  }
}

export class TailRobotPartLogsRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getErrorsOnly(): boolean;
  setErrorsOnly(value: boolean): void;

  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): string;
  setFilter(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TailRobotPartLogsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TailRobotPartLogsRequest): TailRobotPartLogsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TailRobotPartLogsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TailRobotPartLogsRequest;
  static deserializeBinaryFromReader(message: TailRobotPartLogsRequest, reader: jspb.BinaryReader): TailRobotPartLogsRequest;
}

export namespace TailRobotPartLogsRequest {
  export type AsObject = {
    id: string,
    errorsOnly: boolean,
    filter: string,
  }
}

export class TailRobotPartLogsResponse extends jspb.Message {
  clearLogsList(): void;
  getLogsList(): Array<LogEntry>;
  setLogsList(value: Array<LogEntry>): void;
  addLogs(value?: LogEntry, index?: number): LogEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TailRobotPartLogsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TailRobotPartLogsResponse): TailRobotPartLogsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TailRobotPartLogsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TailRobotPartLogsResponse;
  static deserializeBinaryFromReader(message: TailRobotPartLogsResponse, reader: jspb.BinaryReader): TailRobotPartLogsResponse;
}

export namespace TailRobotPartLogsResponse {
  export type AsObject = {
    logsList: Array<LogEntry.AsObject>,
  }
}

export class GetRobotPartHistoryRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRobotPartHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRobotPartHistoryRequest): GetRobotPartHistoryRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRobotPartHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRobotPartHistoryRequest;
  static deserializeBinaryFromReader(message: GetRobotPartHistoryRequest, reader: jspb.BinaryReader): GetRobotPartHistoryRequest;
}

export namespace GetRobotPartHistoryRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetRobotPartHistoryResponse extends jspb.Message {
  clearHistoryList(): void;
  getHistoryList(): Array<RobotPartHistoryEntry>;
  setHistoryList(value: Array<RobotPartHistoryEntry>): void;
  addHistory(value?: RobotPartHistoryEntry, index?: number): RobotPartHistoryEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRobotPartHistoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetRobotPartHistoryResponse): GetRobotPartHistoryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetRobotPartHistoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRobotPartHistoryResponse;
  static deserializeBinaryFromReader(message: GetRobotPartHistoryResponse, reader: jspb.BinaryReader): GetRobotPartHistoryResponse;
}

export namespace GetRobotPartHistoryResponse {
  export type AsObject = {
    historyList: Array<RobotPartHistoryEntry.AsObject>,
  }
}

export class UpdateRobotPartRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasRobotConfig(): boolean;
  clearRobotConfig(): void;
  getRobotConfig(): google_protobuf_struct_pb.Struct | undefined;
  setRobotConfig(value?: google_protobuf_struct_pb.Struct): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRobotPartRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRobotPartRequest): UpdateRobotPartRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateRobotPartRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRobotPartRequest;
  static deserializeBinaryFromReader(message: UpdateRobotPartRequest, reader: jspb.BinaryReader): UpdateRobotPartRequest;
}

export namespace UpdateRobotPartRequest {
  export type AsObject = {
    id: string,
    name: string,
    robotConfig?: google_protobuf_struct_pb.Struct.AsObject,
  }
}

export class UpdateRobotPartResponse extends jspb.Message {
  hasPart(): boolean;
  clearPart(): void;
  getPart(): RobotPart | undefined;
  setPart(value?: RobotPart): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRobotPartResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRobotPartResponse): UpdateRobotPartResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateRobotPartResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRobotPartResponse;
  static deserializeBinaryFromReader(message: UpdateRobotPartResponse, reader: jspb.BinaryReader): UpdateRobotPartResponse;
}

export namespace UpdateRobotPartResponse {
  export type AsObject = {
    part?: RobotPart.AsObject,
  }
}

export class NewRobotPartRequest extends jspb.Message {
  getRobotId(): string;
  setRobotId(value: string): void;

  getPartName(): string;
  setPartName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewRobotPartRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NewRobotPartRequest): NewRobotPartRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewRobotPartRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewRobotPartRequest;
  static deserializeBinaryFromReader(message: NewRobotPartRequest, reader: jspb.BinaryReader): NewRobotPartRequest;
}

export namespace NewRobotPartRequest {
  export type AsObject = {
    robotId: string,
    partName: string,
  }
}

export class NewRobotPartResponse extends jspb.Message {
  getPartId(): string;
  setPartId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewRobotPartResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NewRobotPartResponse): NewRobotPartResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewRobotPartResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewRobotPartResponse;
  static deserializeBinaryFromReader(message: NewRobotPartResponse, reader: jspb.BinaryReader): NewRobotPartResponse;
}

export namespace NewRobotPartResponse {
  export type AsObject = {
    partId: string,
  }
}

export class DeleteRobotPartRequest extends jspb.Message {
  getPartId(): string;
  setPartId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRobotPartRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRobotPartRequest): DeleteRobotPartRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRobotPartRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRobotPartRequest;
  static deserializeBinaryFromReader(message: DeleteRobotPartRequest, reader: jspb.BinaryReader): DeleteRobotPartRequest;
}

export namespace DeleteRobotPartRequest {
  export type AsObject = {
    partId: string,
  }
}

export class DeleteRobotPartResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRobotPartResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRobotPartResponse): DeleteRobotPartResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRobotPartResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRobotPartResponse;
  static deserializeBinaryFromReader(message: DeleteRobotPartResponse, reader: jspb.BinaryReader): DeleteRobotPartResponse;
}

export namespace DeleteRobotPartResponse {
  export type AsObject = {
  }
}

export class Fragment extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasFragment(): boolean;
  clearFragment(): void;
  getFragment(): google_protobuf_struct_pb.Struct | undefined;
  setFragment(value?: google_protobuf_struct_pb.Struct): void;

  getOrganizationOwner(): string;
  setOrganizationOwner(value: string): void;

  getPublic(): boolean;
  setPublic(value: boolean): void;

  hasCreatedOn(): boolean;
  clearCreatedOn(): void;
  getCreatedOn(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedOn(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getOrganizationName(): string;
  setOrganizationName(value: string): void;

  getRobotPartCount(): number;
  setRobotPartCount(value: number): void;

  getOrganizationCount(): number;
  setOrganizationCount(value: number): void;

  getOnlyUsedByOwner(): boolean;
  setOnlyUsedByOwner(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Fragment.AsObject;
  static toObject(includeInstance: boolean, msg: Fragment): Fragment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Fragment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Fragment;
  static deserializeBinaryFromReader(message: Fragment, reader: jspb.BinaryReader): Fragment;
}

export namespace Fragment {
  export type AsObject = {
    id: string,
    name: string,
    fragment?: google_protobuf_struct_pb.Struct.AsObject,
    organizationOwner: string,
    pb_public: boolean,
    createdOn?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    organizationName: string,
    robotPartCount: number,
    organizationCount: number,
    onlyUsedByOwner: boolean,
  }
}

export class ListFragmentsRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  getShowPublic(): boolean;
  setShowPublic(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFragmentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFragmentsRequest): ListFragmentsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFragmentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFragmentsRequest;
  static deserializeBinaryFromReader(message: ListFragmentsRequest, reader: jspb.BinaryReader): ListFragmentsRequest;
}

export namespace ListFragmentsRequest {
  export type AsObject = {
    organizationId: string,
    showPublic: boolean,
  }
}

export class ListFragmentsResponse extends jspb.Message {
  clearFragmentsList(): void;
  getFragmentsList(): Array<Fragment>;
  setFragmentsList(value: Array<Fragment>): void;
  addFragments(value?: Fragment, index?: number): Fragment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFragmentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFragmentsResponse): ListFragmentsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListFragmentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFragmentsResponse;
  static deserializeBinaryFromReader(message: ListFragmentsResponse, reader: jspb.BinaryReader): ListFragmentsResponse;
}

export namespace ListFragmentsResponse {
  export type AsObject = {
    fragmentsList: Array<Fragment.AsObject>,
  }
}

export class GetFragmentRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFragmentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFragmentRequest): GetFragmentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFragmentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFragmentRequest;
  static deserializeBinaryFromReader(message: GetFragmentRequest, reader: jspb.BinaryReader): GetFragmentRequest;
}

export namespace GetFragmentRequest {
  export type AsObject = {
    id: string,
  }
}

export class GetFragmentResponse extends jspb.Message {
  hasFragment(): boolean;
  clearFragment(): void;
  getFragment(): Fragment | undefined;
  setFragment(value?: Fragment): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFragmentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFragmentResponse): GetFragmentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetFragmentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFragmentResponse;
  static deserializeBinaryFromReader(message: GetFragmentResponse, reader: jspb.BinaryReader): GetFragmentResponse;
}

export namespace GetFragmentResponse {
  export type AsObject = {
    fragment?: Fragment.AsObject,
  }
}

export class CreateFragmentRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): google_protobuf_struct_pb.Struct | undefined;
  setConfig(value?: google_protobuf_struct_pb.Struct): void;

  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFragmentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFragmentRequest): CreateFragmentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFragmentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFragmentRequest;
  static deserializeBinaryFromReader(message: CreateFragmentRequest, reader: jspb.BinaryReader): CreateFragmentRequest;
}

export namespace CreateFragmentRequest {
  export type AsObject = {
    name: string,
    config?: google_protobuf_struct_pb.Struct.AsObject,
    organizationId: string,
  }
}

export class CreateFragmentResponse extends jspb.Message {
  hasFragment(): boolean;
  clearFragment(): void;
  getFragment(): Fragment | undefined;
  setFragment(value?: Fragment): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFragmentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFragmentResponse): CreateFragmentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateFragmentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFragmentResponse;
  static deserializeBinaryFromReader(message: CreateFragmentResponse, reader: jspb.BinaryReader): CreateFragmentResponse;
}

export namespace CreateFragmentResponse {
  export type AsObject = {
    fragment?: Fragment.AsObject,
  }
}

export class UpdateFragmentRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  hasConfig(): boolean;
  clearConfig(): void;
  getConfig(): google_protobuf_struct_pb.Struct | undefined;
  setConfig(value?: google_protobuf_struct_pb.Struct): void;

  hasPublic(): boolean;
  clearPublic(): void;
  getPublic(): boolean;
  setPublic(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFragmentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFragmentRequest): UpdateFragmentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateFragmentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFragmentRequest;
  static deserializeBinaryFromReader(message: UpdateFragmentRequest, reader: jspb.BinaryReader): UpdateFragmentRequest;
}

export namespace UpdateFragmentRequest {
  export type AsObject = {
    id: string,
    name: string,
    config?: google_protobuf_struct_pb.Struct.AsObject,
    pb_public: boolean,
  }
}

export class UpdateFragmentResponse extends jspb.Message {
  hasFragment(): boolean;
  clearFragment(): void;
  getFragment(): Fragment | undefined;
  setFragment(value?: Fragment): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFragmentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFragmentResponse): UpdateFragmentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateFragmentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFragmentResponse;
  static deserializeBinaryFromReader(message: UpdateFragmentResponse, reader: jspb.BinaryReader): UpdateFragmentResponse;
}

export namespace UpdateFragmentResponse {
  export type AsObject = {
    fragment?: Fragment.AsObject,
  }
}

export class DeleteFragmentRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFragmentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFragmentRequest): DeleteFragmentRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteFragmentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFragmentRequest;
  static deserializeBinaryFromReader(message: DeleteFragmentRequest, reader: jspb.BinaryReader): DeleteFragmentRequest;
}

export namespace DeleteFragmentRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteFragmentResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFragmentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFragmentResponse): DeleteFragmentResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteFragmentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFragmentResponse;
  static deserializeBinaryFromReader(message: DeleteFragmentResponse, reader: jspb.BinaryReader): DeleteFragmentResponse;
}

export namespace DeleteFragmentResponse {
  export type AsObject = {
  }
}

export class ListRobotsRequest extends jspb.Message {
  getLocationId(): string;
  setLocationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRobotsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRobotsRequest): ListRobotsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRobotsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRobotsRequest;
  static deserializeBinaryFromReader(message: ListRobotsRequest, reader: jspb.BinaryReader): ListRobotsRequest;
}

export namespace ListRobotsRequest {
  export type AsObject = {
    locationId: string,
  }
}

export class ListRobotsResponse extends jspb.Message {
  clearRobotsList(): void;
  getRobotsList(): Array<Robot>;
  setRobotsList(value: Array<Robot>): void;
  addRobots(value?: Robot, index?: number): Robot;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRobotsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRobotsResponse): ListRobotsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRobotsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRobotsResponse;
  static deserializeBinaryFromReader(message: ListRobotsResponse, reader: jspb.BinaryReader): ListRobotsResponse;
}

export namespace ListRobotsResponse {
  export type AsObject = {
    robotsList: Array<Robot.AsObject>,
  }
}

export class NewRobotRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getLocation(): string;
  setLocation(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewRobotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NewRobotRequest): NewRobotRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewRobotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewRobotRequest;
  static deserializeBinaryFromReader(message: NewRobotRequest, reader: jspb.BinaryReader): NewRobotRequest;
}

export namespace NewRobotRequest {
  export type AsObject = {
    name: string,
    location: string,
  }
}

export class NewRobotResponse extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NewRobotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NewRobotResponse): NewRobotResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: NewRobotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NewRobotResponse;
  static deserializeBinaryFromReader(message: NewRobotResponse, reader: jspb.BinaryReader): NewRobotResponse;
}

export namespace NewRobotResponse {
  export type AsObject = {
    id: string,
  }
}

export class UpdateRobotRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getLocation(): string;
  setLocation(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRobotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRobotRequest): UpdateRobotRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateRobotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRobotRequest;
  static deserializeBinaryFromReader(message: UpdateRobotRequest, reader: jspb.BinaryReader): UpdateRobotRequest;
}

export namespace UpdateRobotRequest {
  export type AsObject = {
    id: string,
    name: string,
    location: string,
  }
}

export class UpdateRobotResponse extends jspb.Message {
  hasRobot(): boolean;
  clearRobot(): void;
  getRobot(): Robot | undefined;
  setRobot(value?: Robot): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRobotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRobotResponse): UpdateRobotResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateRobotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRobotResponse;
  static deserializeBinaryFromReader(message: UpdateRobotResponse, reader: jspb.BinaryReader): UpdateRobotResponse;
}

export namespace UpdateRobotResponse {
  export type AsObject = {
    robot?: Robot.AsObject,
  }
}

export class DeleteRobotRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRobotRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRobotRequest): DeleteRobotRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRobotRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRobotRequest;
  static deserializeBinaryFromReader(message: DeleteRobotRequest, reader: jspb.BinaryReader): DeleteRobotRequest;
}

export namespace DeleteRobotRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteRobotResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRobotResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRobotResponse): DeleteRobotResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRobotResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRobotResponse;
  static deserializeBinaryFromReader(message: DeleteRobotResponse, reader: jspb.BinaryReader): DeleteRobotResponse;
}

export namespace DeleteRobotResponse {
  export type AsObject = {
  }
}

export class MarkPartAsMainRequest extends jspb.Message {
  getPartId(): string;
  setPartId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarkPartAsMainRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarkPartAsMainRequest): MarkPartAsMainRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarkPartAsMainRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarkPartAsMainRequest;
  static deserializeBinaryFromReader(message: MarkPartAsMainRequest, reader: jspb.BinaryReader): MarkPartAsMainRequest;
}

export namespace MarkPartAsMainRequest {
  export type AsObject = {
    partId: string,
  }
}

export class MarkPartAsMainResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarkPartAsMainResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MarkPartAsMainResponse): MarkPartAsMainResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarkPartAsMainResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarkPartAsMainResponse;
  static deserializeBinaryFromReader(message: MarkPartAsMainResponse, reader: jspb.BinaryReader): MarkPartAsMainResponse;
}

export namespace MarkPartAsMainResponse {
  export type AsObject = {
  }
}

export class MarkPartForRestartRequest extends jspb.Message {
  getPartId(): string;
  setPartId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarkPartForRestartRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarkPartForRestartRequest): MarkPartForRestartRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarkPartForRestartRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarkPartForRestartRequest;
  static deserializeBinaryFromReader(message: MarkPartForRestartRequest, reader: jspb.BinaryReader): MarkPartForRestartRequest;
}

export namespace MarkPartForRestartRequest {
  export type AsObject = {
    partId: string,
  }
}

export class MarkPartForRestartResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarkPartForRestartResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MarkPartForRestartResponse): MarkPartForRestartResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MarkPartForRestartResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarkPartForRestartResponse;
  static deserializeBinaryFromReader(message: MarkPartForRestartResponse, reader: jspb.BinaryReader): MarkPartForRestartResponse;
}

export namespace MarkPartForRestartResponse {
  export type AsObject = {
  }
}

export class CreateRobotPartSecretRequest extends jspb.Message {
  getPartId(): string;
  setPartId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRobotPartSecretRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRobotPartSecretRequest): CreateRobotPartSecretRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRobotPartSecretRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRobotPartSecretRequest;
  static deserializeBinaryFromReader(message: CreateRobotPartSecretRequest, reader: jspb.BinaryReader): CreateRobotPartSecretRequest;
}

export namespace CreateRobotPartSecretRequest {
  export type AsObject = {
    partId: string,
  }
}

export class CreateRobotPartSecretResponse extends jspb.Message {
  hasPart(): boolean;
  clearPart(): void;
  getPart(): RobotPart | undefined;
  setPart(value?: RobotPart): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRobotPartSecretResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRobotPartSecretResponse): CreateRobotPartSecretResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRobotPartSecretResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRobotPartSecretResponse;
  static deserializeBinaryFromReader(message: CreateRobotPartSecretResponse, reader: jspb.BinaryReader): CreateRobotPartSecretResponse;
}

export namespace CreateRobotPartSecretResponse {
  export type AsObject = {
    part?: RobotPart.AsObject,
  }
}

export class DeleteRobotPartSecretRequest extends jspb.Message {
  getPartId(): string;
  setPartId(value: string): void;

  getSecretId(): string;
  setSecretId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRobotPartSecretRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRobotPartSecretRequest): DeleteRobotPartSecretRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRobotPartSecretRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRobotPartSecretRequest;
  static deserializeBinaryFromReader(message: DeleteRobotPartSecretRequest, reader: jspb.BinaryReader): DeleteRobotPartSecretRequest;
}

export namespace DeleteRobotPartSecretRequest {
  export type AsObject = {
    partId: string,
    secretId: string,
  }
}

export class DeleteRobotPartSecretResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRobotPartSecretResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRobotPartSecretResponse): DeleteRobotPartSecretResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRobotPartSecretResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRobotPartSecretResponse;
  static deserializeBinaryFromReader(message: DeleteRobotPartSecretResponse, reader: jspb.BinaryReader): DeleteRobotPartSecretResponse;
}

export namespace DeleteRobotPartSecretResponse {
  export type AsObject = {
  }
}

export class Authorization extends jspb.Message {
  getAuthorizationType(): string;
  setAuthorizationType(value: string): void;

  getAuthorizationId(): string;
  setAuthorizationId(value: string): void;

  getResourceType(): string;
  setResourceType(value: string): void;

  getResourceId(): string;
  setResourceId(value: string): void;

  getIdentityId(): string;
  setIdentityId(value: string): void;

  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  getIdentityType(): string;
  setIdentityType(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Authorization.AsObject;
  static toObject(includeInstance: boolean, msg: Authorization): Authorization.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Authorization, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Authorization;
  static deserializeBinaryFromReader(message: Authorization, reader: jspb.BinaryReader): Authorization;
}

export namespace Authorization {
  export type AsObject = {
    authorizationType: string,
    authorizationId: string,
    resourceType: string,
    resourceId: string,
    identityId: string,
    organizationId: string,
    identityType: string,
  }
}

export class AddRoleRequest extends jspb.Message {
  hasAuthorization(): boolean;
  clearAuthorization(): void;
  getAuthorization(): Authorization | undefined;
  setAuthorization(value?: Authorization): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddRoleRequest): AddRoleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddRoleRequest;
  static deserializeBinaryFromReader(message: AddRoleRequest, reader: jspb.BinaryReader): AddRoleRequest;
}

export namespace AddRoleRequest {
  export type AsObject = {
    authorization?: Authorization.AsObject,
  }
}

export class AddRoleResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddRoleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddRoleResponse): AddRoleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddRoleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddRoleResponse;
  static deserializeBinaryFromReader(message: AddRoleResponse, reader: jspb.BinaryReader): AddRoleResponse;
}

export namespace AddRoleResponse {
  export type AsObject = {
  }
}

export class RemoveRoleRequest extends jspb.Message {
  hasAuthorization(): boolean;
  clearAuthorization(): void;
  getAuthorization(): Authorization | undefined;
  setAuthorization(value?: Authorization): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveRoleRequest): RemoveRoleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveRoleRequest;
  static deserializeBinaryFromReader(message: RemoveRoleRequest, reader: jspb.BinaryReader): RemoveRoleRequest;
}

export namespace RemoveRoleRequest {
  export type AsObject = {
    authorization?: Authorization.AsObject,
  }
}

export class RemoveRoleResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoveRoleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RemoveRoleResponse): RemoveRoleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoveRoleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoveRoleResponse;
  static deserializeBinaryFromReader(message: RemoveRoleResponse, reader: jspb.BinaryReader): RemoveRoleResponse;
}

export namespace RemoveRoleResponse {
  export type AsObject = {
  }
}

export class ChangeRoleRequest extends jspb.Message {
  hasOldAuthorization(): boolean;
  clearOldAuthorization(): void;
  getOldAuthorization(): Authorization | undefined;
  setOldAuthorization(value?: Authorization): void;

  hasNewAuthorization(): boolean;
  clearNewAuthorization(): void;
  getNewAuthorization(): Authorization | undefined;
  setNewAuthorization(value?: Authorization): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeRoleRequest): ChangeRoleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeRoleRequest;
  static deserializeBinaryFromReader(message: ChangeRoleRequest, reader: jspb.BinaryReader): ChangeRoleRequest;
}

export namespace ChangeRoleRequest {
  export type AsObject = {
    oldAuthorization?: Authorization.AsObject,
    newAuthorization?: Authorization.AsObject,
  }
}

export class ChangeRoleResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangeRoleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChangeRoleResponse): ChangeRoleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ChangeRoleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangeRoleResponse;
  static deserializeBinaryFromReader(message: ChangeRoleResponse, reader: jspb.BinaryReader): ChangeRoleResponse;
}

export namespace ChangeRoleResponse {
  export type AsObject = {
  }
}

export class ListAuthorizationsRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  clearResourceIdsList(): void;
  getResourceIdsList(): Array<string>;
  setResourceIdsList(value: Array<string>): void;
  addResourceIds(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAuthorizationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAuthorizationsRequest): ListAuthorizationsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAuthorizationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAuthorizationsRequest;
  static deserializeBinaryFromReader(message: ListAuthorizationsRequest, reader: jspb.BinaryReader): ListAuthorizationsRequest;
}

export namespace ListAuthorizationsRequest {
  export type AsObject = {
    organizationId: string,
    resourceIdsList: Array<string>,
  }
}

export class ListAuthorizationsResponse extends jspb.Message {
  clearAuthorizationsList(): void;
  getAuthorizationsList(): Array<Authorization>;
  setAuthorizationsList(value: Array<Authorization>): void;
  addAuthorizations(value?: Authorization, index?: number): Authorization;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAuthorizationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAuthorizationsResponse): ListAuthorizationsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListAuthorizationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAuthorizationsResponse;
  static deserializeBinaryFromReader(message: ListAuthorizationsResponse, reader: jspb.BinaryReader): ListAuthorizationsResponse;
}

export namespace ListAuthorizationsResponse {
  export type AsObject = {
    authorizationsList: Array<Authorization.AsObject>,
  }
}

export class CheckPermissionsRequest extends jspb.Message {
  clearPermissionsList(): void;
  getPermissionsList(): Array<AuthorizedPermissions>;
  setPermissionsList(value: Array<AuthorizedPermissions>): void;
  addPermissions(value?: AuthorizedPermissions, index?: number): AuthorizedPermissions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckPermissionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckPermissionsRequest): CheckPermissionsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckPermissionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckPermissionsRequest;
  static deserializeBinaryFromReader(message: CheckPermissionsRequest, reader: jspb.BinaryReader): CheckPermissionsRequest;
}

export namespace CheckPermissionsRequest {
  export type AsObject = {
    permissionsList: Array<AuthorizedPermissions.AsObject>,
  }
}

export class AuthorizedPermissions extends jspb.Message {
  getResourceType(): string;
  setResourceType(value: string): void;

  getResourceId(): string;
  setResourceId(value: string): void;

  clearPermissionsList(): void;
  getPermissionsList(): Array<string>;
  setPermissionsList(value: Array<string>): void;
  addPermissions(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthorizedPermissions.AsObject;
  static toObject(includeInstance: boolean, msg: AuthorizedPermissions): AuthorizedPermissions.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AuthorizedPermissions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthorizedPermissions;
  static deserializeBinaryFromReader(message: AuthorizedPermissions, reader: jspb.BinaryReader): AuthorizedPermissions;
}

export namespace AuthorizedPermissions {
  export type AsObject = {
    resourceType: string,
    resourceId: string,
    permissionsList: Array<string>,
  }
}

export class CheckPermissionsResponse extends jspb.Message {
  clearAuthorizedPermissionsList(): void;
  getAuthorizedPermissionsList(): Array<AuthorizedPermissions>;
  setAuthorizedPermissionsList(value: Array<AuthorizedPermissions>): void;
  addAuthorizedPermissions(value?: AuthorizedPermissions, index?: number): AuthorizedPermissions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckPermissionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckPermissionsResponse): CheckPermissionsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CheckPermissionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckPermissionsResponse;
  static deserializeBinaryFromReader(message: CheckPermissionsResponse, reader: jspb.BinaryReader): CheckPermissionsResponse;
}

export namespace CheckPermissionsResponse {
  export type AsObject = {
    authorizedPermissionsList: Array<AuthorizedPermissions.AsObject>,
  }
}

export class CreateModuleRequest extends jspb.Message {
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModuleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModuleRequest): CreateModuleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateModuleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModuleRequest;
  static deserializeBinaryFromReader(message: CreateModuleRequest, reader: jspb.BinaryReader): CreateModuleRequest;
}

export namespace CreateModuleRequest {
  export type AsObject = {
    organizationId: string,
    name: string,
  }
}

export class CreateModuleResponse extends jspb.Message {
  getModuleId(): string;
  setModuleId(value: string): void;

  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModuleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModuleResponse): CreateModuleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateModuleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModuleResponse;
  static deserializeBinaryFromReader(message: CreateModuleResponse, reader: jspb.BinaryReader): CreateModuleResponse;
}

export namespace CreateModuleResponse {
  export type AsObject = {
    moduleId: string,
    url: string,
  }
}

export class UpdateModuleRequest extends jspb.Message {
  getModuleId(): string;
  setModuleId(value: string): void;

  hasOrganizationId(): boolean;
  clearOrganizationId(): void;
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  getVisibility(): VisibilityMap[keyof VisibilityMap];
  setVisibility(value: VisibilityMap[keyof VisibilityMap]): void;

  getUrl(): string;
  setUrl(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearModelsList(): void;
  getModelsList(): Array<Model>;
  setModelsList(value: Array<Model>): void;
  addModels(value?: Model, index?: number): Model;

  getEntrypoint(): string;
  setEntrypoint(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateModuleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateModuleRequest): UpdateModuleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateModuleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateModuleRequest;
  static deserializeBinaryFromReader(message: UpdateModuleRequest, reader: jspb.BinaryReader): UpdateModuleRequest;
}

export namespace UpdateModuleRequest {
  export type AsObject = {
    moduleId: string,
    organizationId: string,
    visibility: VisibilityMap[keyof VisibilityMap],
    url: string,
    description: string,
    modelsList: Array<Model.AsObject>,
    entrypoint: string,
  }
}

export class UpdateModuleResponse extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateModuleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateModuleResponse): UpdateModuleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateModuleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateModuleResponse;
  static deserializeBinaryFromReader(message: UpdateModuleResponse, reader: jspb.BinaryReader): UpdateModuleResponse;
}

export namespace UpdateModuleResponse {
  export type AsObject = {
    url: string,
  }
}

export class Model extends jspb.Message {
  getApi(): string;
  setApi(value: string): void;

  getModel(): string;
  setModel(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Model.AsObject;
  static toObject(includeInstance: boolean, msg: Model): Model.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Model, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Model;
  static deserializeBinaryFromReader(message: Model, reader: jspb.BinaryReader): Model;
}

export namespace Model {
  export type AsObject = {
    api: string,
    model: string,
  }
}

export class ModuleFileInfo extends jspb.Message {
  getModuleId(): string;
  setModuleId(value: string): void;

  hasOrganizationId(): boolean;
  clearOrganizationId(): void;
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  getVersion(): string;
  setVersion(value: string): void;

  getPlatform(): string;
  setPlatform(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleFileInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleFileInfo): ModuleFileInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ModuleFileInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleFileInfo;
  static deserializeBinaryFromReader(message: ModuleFileInfo, reader: jspb.BinaryReader): ModuleFileInfo;
}

export namespace ModuleFileInfo {
  export type AsObject = {
    moduleId: string,
    organizationId: string,
    version: string,
    platform: string,
  }
}

export class UploadModuleFileRequest extends jspb.Message {
  hasModuleFileInfo(): boolean;
  clearModuleFileInfo(): void;
  getModuleFileInfo(): ModuleFileInfo | undefined;
  setModuleFileInfo(value?: ModuleFileInfo): void;

  hasFile(): boolean;
  clearFile(): void;
  getFile(): Uint8Array | string;
  getFile_asU8(): Uint8Array;
  getFile_asB64(): string;
  setFile(value: Uint8Array | string): void;

  getModuleFileCase(): UploadModuleFileRequest.ModuleFileCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadModuleFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadModuleFileRequest): UploadModuleFileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadModuleFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadModuleFileRequest;
  static deserializeBinaryFromReader(message: UploadModuleFileRequest, reader: jspb.BinaryReader): UploadModuleFileRequest;
}

export namespace UploadModuleFileRequest {
  export type AsObject = {
    moduleFileInfo?: ModuleFileInfo.AsObject,
    file: Uint8Array | string,
  }

  export enum ModuleFileCase {
    MODULE_FILE_NOT_SET = 0,
    MODULE_FILE_INFO = 1,
    FILE = 2,
  }
}

export class UploadModuleFileResponse extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadModuleFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadModuleFileResponse): UploadModuleFileResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadModuleFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadModuleFileResponse;
  static deserializeBinaryFromReader(message: UploadModuleFileResponse, reader: jspb.BinaryReader): UploadModuleFileResponse;
}

export namespace UploadModuleFileResponse {
  export type AsObject = {
    url: string,
  }
}

export class GetModuleRequest extends jspb.Message {
  getModuleId(): string;
  setModuleId(value: string): void;

  hasOrganizationId(): boolean;
  clearOrganizationId(): void;
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModuleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModuleRequest): GetModuleRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetModuleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModuleRequest;
  static deserializeBinaryFromReader(message: GetModuleRequest, reader: jspb.BinaryReader): GetModuleRequest;
}

export namespace GetModuleRequest {
  export type AsObject = {
    moduleId: string,
    organizationId: string,
  }
}

export class GetModuleResponse extends jspb.Message {
  hasModule(): boolean;
  clearModule(): void;
  getModule(): Module | undefined;
  setModule(value?: Module): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModuleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetModuleResponse): GetModuleResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetModuleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModuleResponse;
  static deserializeBinaryFromReader(message: GetModuleResponse, reader: jspb.BinaryReader): GetModuleResponse;
}

export namespace GetModuleResponse {
  export type AsObject = {
    module?: Module.AsObject,
  }
}

export class Module extends jspb.Message {
  getModuleId(): string;
  setModuleId(value: string): void;

  getName(): string;
  setName(value: string): void;

  getVisibility(): VisibilityMap[keyof VisibilityMap];
  setVisibility(value: VisibilityMap[keyof VisibilityMap]): void;

  clearVersionsList(): void;
  getVersionsList(): Array<VersionHistory>;
  setVersionsList(value: Array<VersionHistory>): void;
  addVersions(value?: VersionHistory, index?: number): VersionHistory;

  getUrl(): string;
  setUrl(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  clearModelsList(): void;
  getModelsList(): Array<Model>;
  setModelsList(value: Array<Model>): void;
  addModels(value?: Model, index?: number): Model;

  getTotalRobotUsage(): number;
  setTotalRobotUsage(value: number): void;

  getTotalOrganizationUsage(): number;
  setTotalOrganizationUsage(value: number): void;

  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  getEntrypoint(): string;
  setEntrypoint(value: string): void;

  getPublicNamespace(): string;
  setPublicNamespace(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Module.AsObject;
  static toObject(includeInstance: boolean, msg: Module): Module.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Module, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Module;
  static deserializeBinaryFromReader(message: Module, reader: jspb.BinaryReader): Module;
}

export namespace Module {
  export type AsObject = {
    moduleId: string,
    name: string,
    visibility: VisibilityMap[keyof VisibilityMap],
    versionsList: Array<VersionHistory.AsObject>,
    url: string,
    description: string,
    modelsList: Array<Model.AsObject>,
    totalRobotUsage: number,
    totalOrganizationUsage: number,
    organizationId: string,
    entrypoint: string,
    publicNamespace: string,
  }
}

export class VersionHistory extends jspb.Message {
  getVersion(): string;
  setVersion(value: string): void;

  clearFilesList(): void;
  getFilesList(): Array<Uploads>;
  setFilesList(value: Array<Uploads>): void;
  addFiles(value?: Uploads, index?: number): Uploads;

  clearModelsList(): void;
  getModelsList(): Array<Model>;
  setModelsList(value: Array<Model>): void;
  addModels(value?: Model, index?: number): Model;

  getEntrypoint(): string;
  setEntrypoint(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VersionHistory.AsObject;
  static toObject(includeInstance: boolean, msg: VersionHistory): VersionHistory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: VersionHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VersionHistory;
  static deserializeBinaryFromReader(message: VersionHistory, reader: jspb.BinaryReader): VersionHistory;
}

export namespace VersionHistory {
  export type AsObject = {
    version: string,
    filesList: Array<Uploads.AsObject>,
    modelsList: Array<Model.AsObject>,
    entrypoint: string,
  }
}

export class Uploads extends jspb.Message {
  getPlatform(): string;
  setPlatform(value: string): void;

  hasUploadedAt(): boolean;
  clearUploadedAt(): void;
  getUploadedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUploadedAt(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Uploads.AsObject;
  static toObject(includeInstance: boolean, msg: Uploads): Uploads.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Uploads, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Uploads;
  static deserializeBinaryFromReader(message: Uploads, reader: jspb.BinaryReader): Uploads;
}

export namespace Uploads {
  export type AsObject = {
    platform: string,
    uploadedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class ListModulesRequest extends jspb.Message {
  hasOrganizationId(): boolean;
  clearOrganizationId(): void;
  getOrganizationId(): string;
  setOrganizationId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModulesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModulesRequest): ListModulesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListModulesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModulesRequest;
  static deserializeBinaryFromReader(message: ListModulesRequest, reader: jspb.BinaryReader): ListModulesRequest;
}

export namespace ListModulesRequest {
  export type AsObject = {
    organizationId: string,
  }
}

export class ListModulesResponse extends jspb.Message {
  clearModulesList(): void;
  getModulesList(): Array<Module>;
  setModulesList(value: Array<Module>): void;
  addModules(value?: Module, index?: number): Module;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModulesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListModulesResponse): ListModulesResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListModulesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModulesResponse;
  static deserializeBinaryFromReader(message: ListModulesResponse, reader: jspb.BinaryReader): ListModulesResponse;
}

export namespace ListModulesResponse {
  export type AsObject = {
    modulesList: Array<Module.AsObject>,
  }
}

export class GetUserIDByEmailRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserIDByEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserIDByEmailRequest): GetUserIDByEmailRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserIDByEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserIDByEmailRequest;
  static deserializeBinaryFromReader(message: GetUserIDByEmailRequest, reader: jspb.BinaryReader): GetUserIDByEmailRequest;
}

export namespace GetUserIDByEmailRequest {
  export type AsObject = {
    email: string,
  }
}

export class GetUserIDByEmailResponse extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserIDByEmailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserIDByEmailResponse): GetUserIDByEmailResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetUserIDByEmailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserIDByEmailResponse;
  static deserializeBinaryFromReader(message: GetUserIDByEmailResponse, reader: jspb.BinaryReader): GetUserIDByEmailResponse;
}

export namespace GetUserIDByEmailResponse {
  export type AsObject = {
    userId: string,
  }
}

export class ListOrganizationsByUserRequest extends jspb.Message {
  getUserId(): string;
  setUserId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrganizationsByUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrganizationsByUserRequest): ListOrganizationsByUserRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrganizationsByUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrganizationsByUserRequest;
  static deserializeBinaryFromReader(message: ListOrganizationsByUserRequest, reader: jspb.BinaryReader): ListOrganizationsByUserRequest;
}

export namespace ListOrganizationsByUserRequest {
  export type AsObject = {
    userId: string,
  }
}

export class OrgDetails extends jspb.Message {
  getOrgId(): string;
  setOrgId(value: string): void;

  getOrgName(): string;
  setOrgName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrgDetails.AsObject;
  static toObject(includeInstance: boolean, msg: OrgDetails): OrgDetails.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrgDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrgDetails;
  static deserializeBinaryFromReader(message: OrgDetails, reader: jspb.BinaryReader): OrgDetails;
}

export namespace OrgDetails {
  export type AsObject = {
    orgId: string,
    orgName: string,
  }
}

export class ListOrganizationsByUserResponse extends jspb.Message {
  clearOrgsList(): void;
  getOrgsList(): Array<OrgDetails>;
  setOrgsList(value: Array<OrgDetails>): void;
  addOrgs(value?: OrgDetails, index?: number): OrgDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListOrganizationsByUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListOrganizationsByUserResponse): ListOrganizationsByUserResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListOrganizationsByUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListOrganizationsByUserResponse;
  static deserializeBinaryFromReader(message: ListOrganizationsByUserResponse, reader: jspb.BinaryReader): ListOrganizationsByUserResponse;
}

export namespace ListOrganizationsByUserResponse {
  export type AsObject = {
    orgsList: Array<OrgDetails.AsObject>,
  }
}

export class CreateKeyRequest extends jspb.Message {
  clearAuthorizationsList(): void;
  getAuthorizationsList(): Array<Authorization>;
  setAuthorizationsList(value: Array<Authorization>): void;
  addAuthorizations(value?: Authorization, index?: number): Authorization;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateKeyRequest): CreateKeyRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateKeyRequest;
  static deserializeBinaryFromReader(message: CreateKeyRequest, reader: jspb.BinaryReader): CreateKeyRequest;
}

export namespace CreateKeyRequest {
  export type AsObject = {
    authorizationsList: Array<Authorization.AsObject>,
    name: string,
  }
}

export class CreateKeyResponse extends jspb.Message {
  getKey(): string;
  setKey(value: string): void;

  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateKeyResponse): CreateKeyResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateKeyResponse;
  static deserializeBinaryFromReader(message: CreateKeyResponse, reader: jspb.BinaryReader): CreateKeyResponse;
}

export namespace CreateKeyResponse {
  export type AsObject = {
    key: string,
    id: string,
  }
}

export interface VisibilityMap {
  VISIBILITY_UNSPECIFIED: 0;
  VISIBILITY_PRIVATE: 1;
  VISIBILITY_PUBLIC: 2;
}

export const Visibility: VisibilityMap;

