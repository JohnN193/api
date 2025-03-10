// source: app/v1/app.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var tagger_v1_tagger_pb = require('../../tagger/v1/tagger_pb.js');
goog.object.extend(proto, tagger_v1_tagger_pb);
goog.exportSymbol('proto.viam.app.v1.AddRoleRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.AddRoleResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.Authorization', null, global);
goog.exportSymbol('proto.viam.app.v1.AuthorizedPermissions', null, global);
goog.exportSymbol('proto.viam.app.v1.ChangeRoleRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.ChangeRoleResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.CheckPermissionsRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.CheckPermissionsResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.CreateFragmentRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.CreateFragmentResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.CreateKeyRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.CreateKeyResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.CreateLocationRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.CreateLocationResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.CreateLocationSecretRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.CreateLocationSecretResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.CreateModuleRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.CreateModuleResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.CreateOrganizationInviteRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.CreateOrganizationInviteResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.CreateOrganizationRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.CreateOrganizationResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.CreateRobotPartSecretRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.CreateRobotPartSecretResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.DeleteFragmentRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.DeleteFragmentResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.DeleteLocationRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.DeleteLocationResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.DeleteLocationSecretRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.DeleteLocationSecretResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.DeleteOrganizationInviteRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.DeleteOrganizationInviteResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.DeleteOrganizationMemberRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.DeleteOrganizationMemberResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.DeleteOrganizationRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.DeleteOrganizationResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.DeleteRobotPartRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.DeleteRobotPartResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.DeleteRobotPartSecretRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.DeleteRobotPartSecretResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.DeleteRobotRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.DeleteRobotResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.Fragment', null, global);
goog.exportSymbol('proto.viam.app.v1.GetFragmentRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.GetFragmentResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.GetLocationRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.GetLocationResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.GetModuleRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.GetModuleResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.GetOrganizationNamespaceAvailabilityRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.GetOrganizationNamespaceAvailabilityResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.GetOrganizationRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.GetOrganizationResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.GetRobotPartHistoryRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.GetRobotPartHistoryResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.GetRobotPartLogsRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.GetRobotPartLogsResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.GetRobotPartRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.GetRobotPartResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.GetRobotPartsRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.GetRobotPartsResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.GetRobotRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.GetRobotResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.GetRoverRentalRobotsRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.GetRoverRentalRobotsResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.GetUserIDByEmailRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.GetUserIDByEmailResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.ListAuthorizationsRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.ListAuthorizationsResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.ListFragmentsRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.ListFragmentsResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.ListLocationsRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.ListLocationsResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.ListModulesRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.ListModulesResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.ListOrganizationMembersRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.ListOrganizationMembersResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.ListOrganizationsByUserRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.ListOrganizationsByUserResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.ListOrganizationsRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.ListOrganizationsResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.ListRobotsRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.ListRobotsResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.Location', null, global);
goog.exportSymbol('proto.viam.app.v1.LocationAuth', null, global);
goog.exportSymbol('proto.viam.app.v1.LocationAuthRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.LocationAuthResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.LocationOrganization', null, global);
goog.exportSymbol('proto.viam.app.v1.LogEntry', null, global);
goog.exportSymbol('proto.viam.app.v1.MarkPartAsMainRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.MarkPartAsMainResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.MarkPartForRestartRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.MarkPartForRestartResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.Model', null, global);
goog.exportSymbol('proto.viam.app.v1.Module', null, global);
goog.exportSymbol('proto.viam.app.v1.ModuleFileInfo', null, global);
goog.exportSymbol('proto.viam.app.v1.NewRobotPartRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.NewRobotPartResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.NewRobotRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.NewRobotResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.OrgDetails', null, global);
goog.exportSymbol('proto.viam.app.v1.Organization', null, global);
goog.exportSymbol('proto.viam.app.v1.OrganizationInvite', null, global);
goog.exportSymbol('proto.viam.app.v1.OrganizationMember', null, global);
goog.exportSymbol('proto.viam.app.v1.RemoveRoleRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.RemoveRoleResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.ResendOrganizationInviteRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.ResendOrganizationInviteResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.Robot', null, global);
goog.exportSymbol('proto.viam.app.v1.RobotPart', null, global);
goog.exportSymbol('proto.viam.app.v1.RobotPartHistoryEntry', null, global);
goog.exportSymbol('proto.viam.app.v1.RoverRentalRobot', null, global);
goog.exportSymbol('proto.viam.app.v1.ShareLocationRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.ShareLocationResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.SharedSecret', null, global);
goog.exportSymbol('proto.viam.app.v1.SharedSecret.State', null, global);
goog.exportSymbol('proto.viam.app.v1.StorageConfig', null, global);
goog.exportSymbol('proto.viam.app.v1.TailRobotPartLogsRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.TailRobotPartLogsResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.UnshareLocationRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.UnshareLocationResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.UpdateFragmentRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.UpdateFragmentResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.UpdateLocationRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.UpdateLocationResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.UpdateModuleRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.UpdateModuleResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.UpdateOrganizationRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.UpdateOrganizationResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.UpdateRobotPartRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.UpdateRobotPartResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.UpdateRobotRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.UpdateRobotResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.UploadModuleFileRequest', null, global);
goog.exportSymbol('proto.viam.app.v1.UploadModuleFileRequest.ModuleFileCase', null, global);
goog.exportSymbol('proto.viam.app.v1.UploadModuleFileResponse', null, global);
goog.exportSymbol('proto.viam.app.v1.Uploads', null, global);
goog.exportSymbol('proto.viam.app.v1.VersionHistory', null, global);
goog.exportSymbol('proto.viam.app.v1.Visibility', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.Robot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.Robot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.Robot.displayName = 'proto.viam.app.v1.Robot';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.RobotPart = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.v1.RobotPart.repeatedFields_, null);
};
goog.inherits(proto.viam.app.v1.RobotPart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.RobotPart.displayName = 'proto.viam.app.v1.RobotPart';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.RobotPartHistoryEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.RobotPartHistoryEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.RobotPartHistoryEntry.displayName = 'proto.viam.app.v1.RobotPartHistoryEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.ListOrganizationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.ListOrganizationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.ListOrganizationsRequest.displayName = 'proto.viam.app.v1.ListOrganizationsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.Organization = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.Organization, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.Organization.displayName = 'proto.viam.app.v1.Organization';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.OrganizationMember = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.v1.OrganizationMember.repeatedFields_, null);
};
goog.inherits(proto.viam.app.v1.OrganizationMember, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.OrganizationMember.displayName = 'proto.viam.app.v1.OrganizationMember';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.ListOrganizationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.v1.ListOrganizationsResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.app.v1.ListOrganizationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.ListOrganizationsResponse.displayName = 'proto.viam.app.v1.ListOrganizationsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.OrganizationInvite = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.OrganizationInvite, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.OrganizationInvite.displayName = 'proto.viam.app.v1.OrganizationInvite';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.CreateOrganizationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.CreateOrganizationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.CreateOrganizationRequest.displayName = 'proto.viam.app.v1.CreateOrganizationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.CreateOrganizationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.CreateOrganizationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.CreateOrganizationResponse.displayName = 'proto.viam.app.v1.CreateOrganizationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.GetOrganizationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.GetOrganizationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.GetOrganizationRequest.displayName = 'proto.viam.app.v1.GetOrganizationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.GetOrganizationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.GetOrganizationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.GetOrganizationResponse.displayName = 'proto.viam.app.v1.GetOrganizationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.GetOrganizationNamespaceAvailabilityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.GetOrganizationNamespaceAvailabilityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.GetOrganizationNamespaceAvailabilityRequest.displayName = 'proto.viam.app.v1.GetOrganizationNamespaceAvailabilityRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.GetOrganizationNamespaceAvailabilityResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.GetOrganizationNamespaceAvailabilityResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.GetOrganizationNamespaceAvailabilityResponse.displayName = 'proto.viam.app.v1.GetOrganizationNamespaceAvailabilityResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.UpdateOrganizationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.UpdateOrganizationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.UpdateOrganizationRequest.displayName = 'proto.viam.app.v1.UpdateOrganizationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.UpdateOrganizationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.UpdateOrganizationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.UpdateOrganizationResponse.displayName = 'proto.viam.app.v1.UpdateOrganizationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.DeleteOrganizationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.DeleteOrganizationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.DeleteOrganizationRequest.displayName = 'proto.viam.app.v1.DeleteOrganizationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.DeleteOrganizationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.DeleteOrganizationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.DeleteOrganizationResponse.displayName = 'proto.viam.app.v1.DeleteOrganizationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.ListOrganizationMembersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.ListOrganizationMembersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.ListOrganizationMembersRequest.displayName = 'proto.viam.app.v1.ListOrganizationMembersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.ListOrganizationMembersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.v1.ListOrganizationMembersResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.app.v1.ListOrganizationMembersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.ListOrganizationMembersResponse.displayName = 'proto.viam.app.v1.ListOrganizationMembersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.CreateOrganizationInviteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.v1.CreateOrganizationInviteRequest.repeatedFields_, null);
};
goog.inherits(proto.viam.app.v1.CreateOrganizationInviteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.CreateOrganizationInviteRequest.displayName = 'proto.viam.app.v1.CreateOrganizationInviteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.CreateOrganizationInviteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.CreateOrganizationInviteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.CreateOrganizationInviteResponse.displayName = 'proto.viam.app.v1.CreateOrganizationInviteResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest.repeatedFields_, null);
};
goog.inherits(proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest.displayName = 'proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsResponse.displayName = 'proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.DeleteOrganizationInviteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.DeleteOrganizationInviteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.DeleteOrganizationInviteRequest.displayName = 'proto.viam.app.v1.DeleteOrganizationInviteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.DeleteOrganizationInviteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.DeleteOrganizationInviteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.DeleteOrganizationInviteResponse.displayName = 'proto.viam.app.v1.DeleteOrganizationInviteResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.ResendOrganizationInviteRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.ResendOrganizationInviteRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.ResendOrganizationInviteRequest.displayName = 'proto.viam.app.v1.ResendOrganizationInviteRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.ResendOrganizationInviteResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.ResendOrganizationInviteResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.ResendOrganizationInviteResponse.displayName = 'proto.viam.app.v1.ResendOrganizationInviteResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.DeleteOrganizationMemberRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.DeleteOrganizationMemberRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.DeleteOrganizationMemberRequest.displayName = 'proto.viam.app.v1.DeleteOrganizationMemberRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.DeleteOrganizationMemberResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.DeleteOrganizationMemberResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.DeleteOrganizationMemberResponse.displayName = 'proto.viam.app.v1.DeleteOrganizationMemberResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.LocationOrganization = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.LocationOrganization, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.LocationOrganization.displayName = 'proto.viam.app.v1.LocationOrganization';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.LocationAuth = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.v1.LocationAuth.repeatedFields_, null);
};
goog.inherits(proto.viam.app.v1.LocationAuth, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.LocationAuth.displayName = 'proto.viam.app.v1.LocationAuth';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.StorageConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.StorageConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.StorageConfig.displayName = 'proto.viam.app.v1.StorageConfig';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.Location = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.v1.Location.repeatedFields_, null);
};
goog.inherits(proto.viam.app.v1.Location, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.Location.displayName = 'proto.viam.app.v1.Location';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.SharedSecret = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.SharedSecret, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.SharedSecret.displayName = 'proto.viam.app.v1.SharedSecret';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.CreateLocationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.CreateLocationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.CreateLocationRequest.displayName = 'proto.viam.app.v1.CreateLocationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.CreateLocationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.CreateLocationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.CreateLocationResponse.displayName = 'proto.viam.app.v1.CreateLocationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.GetLocationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.GetLocationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.GetLocationRequest.displayName = 'proto.viam.app.v1.GetLocationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.GetLocationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.GetLocationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.GetLocationResponse.displayName = 'proto.viam.app.v1.GetLocationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.UpdateLocationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.UpdateLocationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.UpdateLocationRequest.displayName = 'proto.viam.app.v1.UpdateLocationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.UpdateLocationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.UpdateLocationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.UpdateLocationResponse.displayName = 'proto.viam.app.v1.UpdateLocationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.DeleteLocationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.DeleteLocationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.DeleteLocationRequest.displayName = 'proto.viam.app.v1.DeleteLocationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.DeleteLocationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.DeleteLocationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.DeleteLocationResponse.displayName = 'proto.viam.app.v1.DeleteLocationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.ListLocationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.ListLocationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.ListLocationsRequest.displayName = 'proto.viam.app.v1.ListLocationsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.ShareLocationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.ShareLocationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.ShareLocationRequest.displayName = 'proto.viam.app.v1.ShareLocationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.ShareLocationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.ShareLocationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.ShareLocationResponse.displayName = 'proto.viam.app.v1.ShareLocationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.UnshareLocationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.UnshareLocationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.UnshareLocationRequest.displayName = 'proto.viam.app.v1.UnshareLocationRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.UnshareLocationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.UnshareLocationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.UnshareLocationResponse.displayName = 'proto.viam.app.v1.UnshareLocationResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.ListLocationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.v1.ListLocationsResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.app.v1.ListLocationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.ListLocationsResponse.displayName = 'proto.viam.app.v1.ListLocationsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.CreateLocationSecretRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.CreateLocationSecretRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.CreateLocationSecretRequest.displayName = 'proto.viam.app.v1.CreateLocationSecretRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.CreateLocationSecretResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.CreateLocationSecretResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.CreateLocationSecretResponse.displayName = 'proto.viam.app.v1.CreateLocationSecretResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.DeleteLocationSecretRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.DeleteLocationSecretRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.DeleteLocationSecretRequest.displayName = 'proto.viam.app.v1.DeleteLocationSecretRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.DeleteLocationSecretResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.DeleteLocationSecretResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.DeleteLocationSecretResponse.displayName = 'proto.viam.app.v1.DeleteLocationSecretResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.LocationAuthRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.LocationAuthRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.LocationAuthRequest.displayName = 'proto.viam.app.v1.LocationAuthRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.LocationAuthResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.LocationAuthResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.LocationAuthResponse.displayName = 'proto.viam.app.v1.LocationAuthResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.GetRobotRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.GetRobotRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.GetRobotRequest.displayName = 'proto.viam.app.v1.GetRobotRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.GetRoverRentalRobotsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.GetRoverRentalRobotsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.GetRoverRentalRobotsRequest.displayName = 'proto.viam.app.v1.GetRoverRentalRobotsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.RoverRentalRobot = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.RoverRentalRobot, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.RoverRentalRobot.displayName = 'proto.viam.app.v1.RoverRentalRobot';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.GetRoverRentalRobotsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.v1.GetRoverRentalRobotsResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.app.v1.GetRoverRentalRobotsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.GetRoverRentalRobotsResponse.displayName = 'proto.viam.app.v1.GetRoverRentalRobotsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.GetRobotResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.GetRobotResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.GetRobotResponse.displayName = 'proto.viam.app.v1.GetRobotResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.GetRobotPartsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.GetRobotPartsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.GetRobotPartsRequest.displayName = 'proto.viam.app.v1.GetRobotPartsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.GetRobotPartsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.v1.GetRobotPartsResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.app.v1.GetRobotPartsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.GetRobotPartsResponse.displayName = 'proto.viam.app.v1.GetRobotPartsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.GetRobotPartRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.GetRobotPartRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.GetRobotPartRequest.displayName = 'proto.viam.app.v1.GetRobotPartRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.GetRobotPartResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.GetRobotPartResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.GetRobotPartResponse.displayName = 'proto.viam.app.v1.GetRobotPartResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.GetRobotPartLogsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.GetRobotPartLogsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.GetRobotPartLogsRequest.displayName = 'proto.viam.app.v1.GetRobotPartLogsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.LogEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.v1.LogEntry.repeatedFields_, null);
};
goog.inherits(proto.viam.app.v1.LogEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.LogEntry.displayName = 'proto.viam.app.v1.LogEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.GetRobotPartLogsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.v1.GetRobotPartLogsResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.app.v1.GetRobotPartLogsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.GetRobotPartLogsResponse.displayName = 'proto.viam.app.v1.GetRobotPartLogsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.TailRobotPartLogsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.TailRobotPartLogsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.TailRobotPartLogsRequest.displayName = 'proto.viam.app.v1.TailRobotPartLogsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.TailRobotPartLogsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.v1.TailRobotPartLogsResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.app.v1.TailRobotPartLogsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.TailRobotPartLogsResponse.displayName = 'proto.viam.app.v1.TailRobotPartLogsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.GetRobotPartHistoryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.GetRobotPartHistoryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.GetRobotPartHistoryRequest.displayName = 'proto.viam.app.v1.GetRobotPartHistoryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.GetRobotPartHistoryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.v1.GetRobotPartHistoryResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.app.v1.GetRobotPartHistoryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.GetRobotPartHistoryResponse.displayName = 'proto.viam.app.v1.GetRobotPartHistoryResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.UpdateRobotPartRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.UpdateRobotPartRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.UpdateRobotPartRequest.displayName = 'proto.viam.app.v1.UpdateRobotPartRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.UpdateRobotPartResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.UpdateRobotPartResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.UpdateRobotPartResponse.displayName = 'proto.viam.app.v1.UpdateRobotPartResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.NewRobotPartRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.NewRobotPartRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.NewRobotPartRequest.displayName = 'proto.viam.app.v1.NewRobotPartRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.NewRobotPartResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.NewRobotPartResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.NewRobotPartResponse.displayName = 'proto.viam.app.v1.NewRobotPartResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.DeleteRobotPartRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.DeleteRobotPartRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.DeleteRobotPartRequest.displayName = 'proto.viam.app.v1.DeleteRobotPartRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.DeleteRobotPartResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.DeleteRobotPartResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.DeleteRobotPartResponse.displayName = 'proto.viam.app.v1.DeleteRobotPartResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.Fragment = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.Fragment, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.Fragment.displayName = 'proto.viam.app.v1.Fragment';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.ListFragmentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.ListFragmentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.ListFragmentsRequest.displayName = 'proto.viam.app.v1.ListFragmentsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.ListFragmentsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.v1.ListFragmentsResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.app.v1.ListFragmentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.ListFragmentsResponse.displayName = 'proto.viam.app.v1.ListFragmentsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.GetFragmentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.GetFragmentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.GetFragmentRequest.displayName = 'proto.viam.app.v1.GetFragmentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.GetFragmentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.GetFragmentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.GetFragmentResponse.displayName = 'proto.viam.app.v1.GetFragmentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.CreateFragmentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.CreateFragmentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.CreateFragmentRequest.displayName = 'proto.viam.app.v1.CreateFragmentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.CreateFragmentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.CreateFragmentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.CreateFragmentResponse.displayName = 'proto.viam.app.v1.CreateFragmentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.UpdateFragmentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.UpdateFragmentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.UpdateFragmentRequest.displayName = 'proto.viam.app.v1.UpdateFragmentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.UpdateFragmentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.UpdateFragmentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.UpdateFragmentResponse.displayName = 'proto.viam.app.v1.UpdateFragmentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.DeleteFragmentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.DeleteFragmentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.DeleteFragmentRequest.displayName = 'proto.viam.app.v1.DeleteFragmentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.DeleteFragmentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.DeleteFragmentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.DeleteFragmentResponse.displayName = 'proto.viam.app.v1.DeleteFragmentResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.ListRobotsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.ListRobotsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.ListRobotsRequest.displayName = 'proto.viam.app.v1.ListRobotsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.ListRobotsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.v1.ListRobotsResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.app.v1.ListRobotsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.ListRobotsResponse.displayName = 'proto.viam.app.v1.ListRobotsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.NewRobotRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.NewRobotRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.NewRobotRequest.displayName = 'proto.viam.app.v1.NewRobotRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.NewRobotResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.NewRobotResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.NewRobotResponse.displayName = 'proto.viam.app.v1.NewRobotResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.UpdateRobotRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.UpdateRobotRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.UpdateRobotRequest.displayName = 'proto.viam.app.v1.UpdateRobotRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.UpdateRobotResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.UpdateRobotResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.UpdateRobotResponse.displayName = 'proto.viam.app.v1.UpdateRobotResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.DeleteRobotRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.DeleteRobotRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.DeleteRobotRequest.displayName = 'proto.viam.app.v1.DeleteRobotRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.DeleteRobotResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.DeleteRobotResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.DeleteRobotResponse.displayName = 'proto.viam.app.v1.DeleteRobotResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.MarkPartAsMainRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.MarkPartAsMainRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.MarkPartAsMainRequest.displayName = 'proto.viam.app.v1.MarkPartAsMainRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.MarkPartAsMainResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.MarkPartAsMainResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.MarkPartAsMainResponse.displayName = 'proto.viam.app.v1.MarkPartAsMainResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.MarkPartForRestartRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.MarkPartForRestartRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.MarkPartForRestartRequest.displayName = 'proto.viam.app.v1.MarkPartForRestartRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.MarkPartForRestartResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.MarkPartForRestartResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.MarkPartForRestartResponse.displayName = 'proto.viam.app.v1.MarkPartForRestartResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.CreateRobotPartSecretRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.CreateRobotPartSecretRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.CreateRobotPartSecretRequest.displayName = 'proto.viam.app.v1.CreateRobotPartSecretRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.CreateRobotPartSecretResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.CreateRobotPartSecretResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.CreateRobotPartSecretResponse.displayName = 'proto.viam.app.v1.CreateRobotPartSecretResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.DeleteRobotPartSecretRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.DeleteRobotPartSecretRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.DeleteRobotPartSecretRequest.displayName = 'proto.viam.app.v1.DeleteRobotPartSecretRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.DeleteRobotPartSecretResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.DeleteRobotPartSecretResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.DeleteRobotPartSecretResponse.displayName = 'proto.viam.app.v1.DeleteRobotPartSecretResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.Authorization = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.Authorization, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.Authorization.displayName = 'proto.viam.app.v1.Authorization';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.AddRoleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.AddRoleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.AddRoleRequest.displayName = 'proto.viam.app.v1.AddRoleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.AddRoleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.AddRoleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.AddRoleResponse.displayName = 'proto.viam.app.v1.AddRoleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.RemoveRoleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.RemoveRoleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.RemoveRoleRequest.displayName = 'proto.viam.app.v1.RemoveRoleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.RemoveRoleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.RemoveRoleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.RemoveRoleResponse.displayName = 'proto.viam.app.v1.RemoveRoleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.ChangeRoleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.ChangeRoleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.ChangeRoleRequest.displayName = 'proto.viam.app.v1.ChangeRoleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.ChangeRoleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.ChangeRoleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.ChangeRoleResponse.displayName = 'proto.viam.app.v1.ChangeRoleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.ListAuthorizationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.v1.ListAuthorizationsRequest.repeatedFields_, null);
};
goog.inherits(proto.viam.app.v1.ListAuthorizationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.ListAuthorizationsRequest.displayName = 'proto.viam.app.v1.ListAuthorizationsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.ListAuthorizationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.v1.ListAuthorizationsResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.app.v1.ListAuthorizationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.ListAuthorizationsResponse.displayName = 'proto.viam.app.v1.ListAuthorizationsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.CheckPermissionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.v1.CheckPermissionsRequest.repeatedFields_, null);
};
goog.inherits(proto.viam.app.v1.CheckPermissionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.CheckPermissionsRequest.displayName = 'proto.viam.app.v1.CheckPermissionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.AuthorizedPermissions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.v1.AuthorizedPermissions.repeatedFields_, null);
};
goog.inherits(proto.viam.app.v1.AuthorizedPermissions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.AuthorizedPermissions.displayName = 'proto.viam.app.v1.AuthorizedPermissions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.CheckPermissionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.v1.CheckPermissionsResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.app.v1.CheckPermissionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.CheckPermissionsResponse.displayName = 'proto.viam.app.v1.CheckPermissionsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.CreateModuleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.CreateModuleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.CreateModuleRequest.displayName = 'proto.viam.app.v1.CreateModuleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.CreateModuleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.CreateModuleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.CreateModuleResponse.displayName = 'proto.viam.app.v1.CreateModuleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.UpdateModuleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.v1.UpdateModuleRequest.repeatedFields_, null);
};
goog.inherits(proto.viam.app.v1.UpdateModuleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.UpdateModuleRequest.displayName = 'proto.viam.app.v1.UpdateModuleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.UpdateModuleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.UpdateModuleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.UpdateModuleResponse.displayName = 'proto.viam.app.v1.UpdateModuleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.Model = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.Model, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.Model.displayName = 'proto.viam.app.v1.Model';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.ModuleFileInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.ModuleFileInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.ModuleFileInfo.displayName = 'proto.viam.app.v1.ModuleFileInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.UploadModuleFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.viam.app.v1.UploadModuleFileRequest.oneofGroups_);
};
goog.inherits(proto.viam.app.v1.UploadModuleFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.UploadModuleFileRequest.displayName = 'proto.viam.app.v1.UploadModuleFileRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.UploadModuleFileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.UploadModuleFileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.UploadModuleFileResponse.displayName = 'proto.viam.app.v1.UploadModuleFileResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.GetModuleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.GetModuleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.GetModuleRequest.displayName = 'proto.viam.app.v1.GetModuleRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.GetModuleResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.GetModuleResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.GetModuleResponse.displayName = 'proto.viam.app.v1.GetModuleResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.Module = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.v1.Module.repeatedFields_, null);
};
goog.inherits(proto.viam.app.v1.Module, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.Module.displayName = 'proto.viam.app.v1.Module';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.VersionHistory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.v1.VersionHistory.repeatedFields_, null);
};
goog.inherits(proto.viam.app.v1.VersionHistory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.VersionHistory.displayName = 'proto.viam.app.v1.VersionHistory';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.Uploads = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.Uploads, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.Uploads.displayName = 'proto.viam.app.v1.Uploads';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.ListModulesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.ListModulesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.ListModulesRequest.displayName = 'proto.viam.app.v1.ListModulesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.ListModulesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.v1.ListModulesResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.app.v1.ListModulesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.ListModulesResponse.displayName = 'proto.viam.app.v1.ListModulesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.GetUserIDByEmailRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.GetUserIDByEmailRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.GetUserIDByEmailRequest.displayName = 'proto.viam.app.v1.GetUserIDByEmailRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.GetUserIDByEmailResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.GetUserIDByEmailResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.GetUserIDByEmailResponse.displayName = 'proto.viam.app.v1.GetUserIDByEmailResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.ListOrganizationsByUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.ListOrganizationsByUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.ListOrganizationsByUserRequest.displayName = 'proto.viam.app.v1.ListOrganizationsByUserRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.OrgDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.OrgDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.OrgDetails.displayName = 'proto.viam.app.v1.OrgDetails';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.ListOrganizationsByUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.v1.ListOrganizationsByUserResponse.repeatedFields_, null);
};
goog.inherits(proto.viam.app.v1.ListOrganizationsByUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.ListOrganizationsByUserResponse.displayName = 'proto.viam.app.v1.ListOrganizationsByUserResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.CreateKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.viam.app.v1.CreateKeyRequest.repeatedFields_, null);
};
goog.inherits(proto.viam.app.v1.CreateKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.CreateKeyRequest.displayName = 'proto.viam.app.v1.CreateKeyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.viam.app.v1.CreateKeyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.viam.app.v1.CreateKeyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.viam.app.v1.CreateKeyResponse.displayName = 'proto.viam.app.v1.CreateKeyResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.Robot.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.Robot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.Robot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.Robot.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    location: jspb.Message.getFieldWithDefault(msg, 3, ""),
    lastAccess: (f = msg.getLastAccess()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    createdOn: (f = msg.getCreatedOn()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.Robot}
 */
proto.viam.app.v1.Robot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.Robot;
  return proto.viam.app.v1.Robot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.Robot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.Robot}
 */
proto.viam.app.v1.Robot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastAccess(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedOn(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.Robot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.Robot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.Robot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.Robot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLocation();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLastAccess();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCreatedOn();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.viam.app.v1.Robot.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.Robot} returns this
 */
proto.viam.app.v1.Robot.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.viam.app.v1.Robot.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.Robot} returns this
 */
proto.viam.app.v1.Robot.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string location = 3;
 * @return {string}
 */
proto.viam.app.v1.Robot.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.Robot} returns this
 */
proto.viam.app.v1.Robot.prototype.setLocation = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp last_access = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.viam.app.v1.Robot.prototype.getLastAccess = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.viam.app.v1.Robot} returns this
*/
proto.viam.app.v1.Robot.prototype.setLastAccess = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.Robot} returns this
 */
proto.viam.app.v1.Robot.prototype.clearLastAccess = function() {
  return this.setLastAccess(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.Robot.prototype.hasLastAccess = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp created_on = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.viam.app.v1.Robot.prototype.getCreatedOn = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.viam.app.v1.Robot} returns this
*/
proto.viam.app.v1.Robot.prototype.setCreatedOn = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.Robot} returns this
 */
proto.viam.app.v1.Robot.prototype.clearCreatedOn = function() {
  return this.setCreatedOn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.Robot.prototype.hasCreatedOn = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.v1.RobotPart.repeatedFields_ = [14];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.RobotPart.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.RobotPart.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.RobotPart} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.RobotPart.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dnsName: jspb.Message.getFieldWithDefault(msg, 10, ""),
    secret: jspb.Message.getFieldWithDefault(msg, 3, ""),
    robot: jspb.Message.getFieldWithDefault(msg, 4, ""),
    locationId: jspb.Message.getFieldWithDefault(msg, 12, ""),
    robotConfig: (f = msg.getRobotConfig()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    lastAccess: (f = msg.getLastAccess()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    userSuppliedInfo: (f = msg.getUserSuppliedInfo()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    mainPart: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    fqdn: jspb.Message.getFieldWithDefault(msg, 9, ""),
    localFqdn: jspb.Message.getFieldWithDefault(msg, 11, ""),
    createdOn: (f = msg.getCreatedOn()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    secretsList: jspb.Message.toObjectList(msg.getSecretsList(),
    proto.viam.app.v1.SharedSecret.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.RobotPart}
 */
proto.viam.app.v1.RobotPart.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.RobotPart;
  return proto.viam.app.v1.RobotPart.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.RobotPart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.RobotPart}
 */
proto.viam.app.v1.RobotPart.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setDnsName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecret(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRobot(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocationId(value);
      break;
    case 5:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setRobotConfig(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastAccess(value);
      break;
    case 7:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setUserSuppliedInfo(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMainPart(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setFqdn(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocalFqdn(value);
      break;
    case 13:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedOn(value);
      break;
    case 14:
      var value = new proto.viam.app.v1.SharedSecret;
      reader.readMessage(value,proto.viam.app.v1.SharedSecret.deserializeBinaryFromReader);
      msg.addSecrets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.RobotPart.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.RobotPart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.RobotPart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.RobotPart.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDnsName();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getSecret();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRobot();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getLocationId();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getRobotConfig();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getLastAccess();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUserSuppliedInfo();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getMainPart();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getFqdn();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getLocalFqdn();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getCreatedOn();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSecretsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      proto.viam.app.v1.SharedSecret.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.viam.app.v1.RobotPart.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.RobotPart} returns this
 */
proto.viam.app.v1.RobotPart.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.viam.app.v1.RobotPart.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.RobotPart} returns this
 */
proto.viam.app.v1.RobotPart.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string dns_name = 10;
 * @return {string}
 */
proto.viam.app.v1.RobotPart.prototype.getDnsName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.RobotPart} returns this
 */
proto.viam.app.v1.RobotPart.prototype.setDnsName = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string secret = 3;
 * @return {string}
 */
proto.viam.app.v1.RobotPart.prototype.getSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.RobotPart} returns this
 */
proto.viam.app.v1.RobotPart.prototype.setSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string robot = 4;
 * @return {string}
 */
proto.viam.app.v1.RobotPart.prototype.getRobot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.RobotPart} returns this
 */
proto.viam.app.v1.RobotPart.prototype.setRobot = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string location_id = 12;
 * @return {string}
 */
proto.viam.app.v1.RobotPart.prototype.getLocationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.RobotPart} returns this
 */
proto.viam.app.v1.RobotPart.prototype.setLocationId = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional google.protobuf.Struct robot_config = 5;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.app.v1.RobotPart.prototype.getRobotConfig = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 5));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.app.v1.RobotPart} returns this
*/
proto.viam.app.v1.RobotPart.prototype.setRobotConfig = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.RobotPart} returns this
 */
proto.viam.app.v1.RobotPart.prototype.clearRobotConfig = function() {
  return this.setRobotConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.RobotPart.prototype.hasRobotConfig = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp last_access = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.viam.app.v1.RobotPart.prototype.getLastAccess = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.viam.app.v1.RobotPart} returns this
*/
proto.viam.app.v1.RobotPart.prototype.setLastAccess = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.RobotPart} returns this
 */
proto.viam.app.v1.RobotPart.prototype.clearLastAccess = function() {
  return this.setLastAccess(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.RobotPart.prototype.hasLastAccess = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Struct user_supplied_info = 7;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.app.v1.RobotPart.prototype.getUserSuppliedInfo = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 7));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.app.v1.RobotPart} returns this
*/
proto.viam.app.v1.RobotPart.prototype.setUserSuppliedInfo = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.RobotPart} returns this
 */
proto.viam.app.v1.RobotPart.prototype.clearUserSuppliedInfo = function() {
  return this.setUserSuppliedInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.RobotPart.prototype.hasUserSuppliedInfo = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool main_part = 8;
 * @return {boolean}
 */
proto.viam.app.v1.RobotPart.prototype.getMainPart = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.viam.app.v1.RobotPart} returns this
 */
proto.viam.app.v1.RobotPart.prototype.setMainPart = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional string fqdn = 9;
 * @return {string}
 */
proto.viam.app.v1.RobotPart.prototype.getFqdn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.RobotPart} returns this
 */
proto.viam.app.v1.RobotPart.prototype.setFqdn = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string local_fqdn = 11;
 * @return {string}
 */
proto.viam.app.v1.RobotPart.prototype.getLocalFqdn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.RobotPart} returns this
 */
proto.viam.app.v1.RobotPart.prototype.setLocalFqdn = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional google.protobuf.Timestamp created_on = 13;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.viam.app.v1.RobotPart.prototype.getCreatedOn = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 13));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.viam.app.v1.RobotPart} returns this
*/
proto.viam.app.v1.RobotPart.prototype.setCreatedOn = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.RobotPart} returns this
 */
proto.viam.app.v1.RobotPart.prototype.clearCreatedOn = function() {
  return this.setCreatedOn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.RobotPart.prototype.hasCreatedOn = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * repeated SharedSecret secrets = 14;
 * @return {!Array<!proto.viam.app.v1.SharedSecret>}
 */
proto.viam.app.v1.RobotPart.prototype.getSecretsList = function() {
  return /** @type{!Array<!proto.viam.app.v1.SharedSecret>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.v1.SharedSecret, 14));
};


/**
 * @param {!Array<!proto.viam.app.v1.SharedSecret>} value
 * @return {!proto.viam.app.v1.RobotPart} returns this
*/
proto.viam.app.v1.RobotPart.prototype.setSecretsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.viam.app.v1.SharedSecret=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.v1.SharedSecret}
 */
proto.viam.app.v1.RobotPart.prototype.addSecrets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.viam.app.v1.SharedSecret, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.v1.RobotPart} returns this
 */
proto.viam.app.v1.RobotPart.prototype.clearSecretsList = function() {
  return this.setSecretsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.RobotPartHistoryEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.RobotPartHistoryEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.RobotPartHistoryEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.RobotPartHistoryEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    part: jspb.Message.getFieldWithDefault(msg, 1, ""),
    robot: jspb.Message.getFieldWithDefault(msg, 2, ""),
    when: (f = msg.getWhen()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    old: (f = msg.getOld()) && proto.viam.app.v1.RobotPart.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.RobotPartHistoryEntry}
 */
proto.viam.app.v1.RobotPartHistoryEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.RobotPartHistoryEntry;
  return proto.viam.app.v1.RobotPartHistoryEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.RobotPartHistoryEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.RobotPartHistoryEntry}
 */
proto.viam.app.v1.RobotPartHistoryEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPart(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRobot(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setWhen(value);
      break;
    case 4:
      var value = new proto.viam.app.v1.RobotPart;
      reader.readMessage(value,proto.viam.app.v1.RobotPart.deserializeBinaryFromReader);
      msg.setOld(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.RobotPartHistoryEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.RobotPartHistoryEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.RobotPartHistoryEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.RobotPartHistoryEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPart();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRobot();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWhen();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getOld();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.viam.app.v1.RobotPart.serializeBinaryToWriter
    );
  }
};


/**
 * optional string part = 1;
 * @return {string}
 */
proto.viam.app.v1.RobotPartHistoryEntry.prototype.getPart = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.RobotPartHistoryEntry} returns this
 */
proto.viam.app.v1.RobotPartHistoryEntry.prototype.setPart = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string robot = 2;
 * @return {string}
 */
proto.viam.app.v1.RobotPartHistoryEntry.prototype.getRobot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.RobotPartHistoryEntry} returns this
 */
proto.viam.app.v1.RobotPartHistoryEntry.prototype.setRobot = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp when = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.viam.app.v1.RobotPartHistoryEntry.prototype.getWhen = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.viam.app.v1.RobotPartHistoryEntry} returns this
*/
proto.viam.app.v1.RobotPartHistoryEntry.prototype.setWhen = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.RobotPartHistoryEntry} returns this
 */
proto.viam.app.v1.RobotPartHistoryEntry.prototype.clearWhen = function() {
  return this.setWhen(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.RobotPartHistoryEntry.prototype.hasWhen = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional RobotPart old = 4;
 * @return {?proto.viam.app.v1.RobotPart}
 */
proto.viam.app.v1.RobotPartHistoryEntry.prototype.getOld = function() {
  return /** @type{?proto.viam.app.v1.RobotPart} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.v1.RobotPart, 4));
};


/**
 * @param {?proto.viam.app.v1.RobotPart|undefined} value
 * @return {!proto.viam.app.v1.RobotPartHistoryEntry} returns this
*/
proto.viam.app.v1.RobotPartHistoryEntry.prototype.setOld = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.RobotPartHistoryEntry} returns this
 */
proto.viam.app.v1.RobotPartHistoryEntry.prototype.clearOld = function() {
  return this.setOld(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.RobotPartHistoryEntry.prototype.hasOld = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.ListOrganizationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.ListOrganizationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.ListOrganizationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ListOrganizationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.ListOrganizationsRequest}
 */
proto.viam.app.v1.ListOrganizationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.ListOrganizationsRequest;
  return proto.viam.app.v1.ListOrganizationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.ListOrganizationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.ListOrganizationsRequest}
 */
proto.viam.app.v1.ListOrganizationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.ListOrganizationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.ListOrganizationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.ListOrganizationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ListOrganizationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.Organization.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.Organization.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.Organization} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.Organization.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    createdOn: (f = msg.getCreatedOn()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    publicNamespace: jspb.Message.getFieldWithDefault(msg, 4, ""),
    defaultRegion: jspb.Message.getFieldWithDefault(msg, 5, ""),
    cid: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.Organization}
 */
proto.viam.app.v1.Organization.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.Organization;
  return proto.viam.app.v1.Organization.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.Organization} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.Organization}
 */
proto.viam.app.v1.Organization.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedOn(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicNamespace(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultRegion(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.Organization.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.Organization.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.Organization} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.Organization.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCreatedOn();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPublicNamespace();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDefaultRegion();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.viam.app.v1.Organization.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.Organization} returns this
 */
proto.viam.app.v1.Organization.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.viam.app.v1.Organization.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.Organization} returns this
 */
proto.viam.app.v1.Organization.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp created_on = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.viam.app.v1.Organization.prototype.getCreatedOn = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.viam.app.v1.Organization} returns this
*/
proto.viam.app.v1.Organization.prototype.setCreatedOn = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.Organization} returns this
 */
proto.viam.app.v1.Organization.prototype.clearCreatedOn = function() {
  return this.setCreatedOn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.Organization.prototype.hasCreatedOn = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string public_namespace = 4;
 * @return {string}
 */
proto.viam.app.v1.Organization.prototype.getPublicNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.Organization} returns this
 */
proto.viam.app.v1.Organization.prototype.setPublicNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string default_region = 5;
 * @return {string}
 */
proto.viam.app.v1.Organization.prototype.getDefaultRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.Organization} returns this
 */
proto.viam.app.v1.Organization.prototype.setDefaultRegion = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string cid = 6;
 * @return {string}
 */
proto.viam.app.v1.Organization.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.Organization} returns this
 */
proto.viam.app.v1.Organization.prototype.setCid = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.app.v1.Organization} returns this
 */
proto.viam.app.v1.Organization.prototype.clearCid = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.Organization.prototype.hasCid = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.v1.OrganizationMember.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.OrganizationMember.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.OrganizationMember.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.OrganizationMember} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.OrganizationMember.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    emailsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    dateAdded: (f = msg.getDateAdded()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    lastLogin: (f = msg.getLastLogin()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.OrganizationMember}
 */
proto.viam.app.v1.OrganizationMember.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.OrganizationMember;
  return proto.viam.app.v1.OrganizationMember.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.OrganizationMember} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.OrganizationMember}
 */
proto.viam.app.v1.OrganizationMember.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addEmails(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateAdded(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastLogin(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.OrganizationMember.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.OrganizationMember.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.OrganizationMember} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.OrganizationMember.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmailsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getDateAdded();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLastLogin();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.viam.app.v1.OrganizationMember.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.OrganizationMember} returns this
 */
proto.viam.app.v1.OrganizationMember.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string emails = 2;
 * @return {!Array<string>}
 */
proto.viam.app.v1.OrganizationMember.prototype.getEmailsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.viam.app.v1.OrganizationMember} returns this
 */
proto.viam.app.v1.OrganizationMember.prototype.setEmailsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.viam.app.v1.OrganizationMember} returns this
 */
proto.viam.app.v1.OrganizationMember.prototype.addEmails = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.v1.OrganizationMember} returns this
 */
proto.viam.app.v1.OrganizationMember.prototype.clearEmailsList = function() {
  return this.setEmailsList([]);
};


/**
 * optional google.protobuf.Timestamp date_added = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.viam.app.v1.OrganizationMember.prototype.getDateAdded = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.viam.app.v1.OrganizationMember} returns this
*/
proto.viam.app.v1.OrganizationMember.prototype.setDateAdded = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.OrganizationMember} returns this
 */
proto.viam.app.v1.OrganizationMember.prototype.clearDateAdded = function() {
  return this.setDateAdded(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.OrganizationMember.prototype.hasDateAdded = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Timestamp last_login = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.viam.app.v1.OrganizationMember.prototype.getLastLogin = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.viam.app.v1.OrganizationMember} returns this
*/
proto.viam.app.v1.OrganizationMember.prototype.setLastLogin = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.OrganizationMember} returns this
 */
proto.viam.app.v1.OrganizationMember.prototype.clearLastLogin = function() {
  return this.setLastLogin(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.OrganizationMember.prototype.hasLastLogin = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.v1.ListOrganizationsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.ListOrganizationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.ListOrganizationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.ListOrganizationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ListOrganizationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationsList: jspb.Message.toObjectList(msg.getOrganizationsList(),
    proto.viam.app.v1.Organization.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.ListOrganizationsResponse}
 */
proto.viam.app.v1.ListOrganizationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.ListOrganizationsResponse;
  return proto.viam.app.v1.ListOrganizationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.ListOrganizationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.ListOrganizationsResponse}
 */
proto.viam.app.v1.ListOrganizationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.Organization;
      reader.readMessage(value,proto.viam.app.v1.Organization.deserializeBinaryFromReader);
      msg.addOrganizations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.ListOrganizationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.ListOrganizationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.ListOrganizationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ListOrganizationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.app.v1.Organization.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Organization organizations = 1;
 * @return {!Array<!proto.viam.app.v1.Organization>}
 */
proto.viam.app.v1.ListOrganizationsResponse.prototype.getOrganizationsList = function() {
  return /** @type{!Array<!proto.viam.app.v1.Organization>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.v1.Organization, 1));
};


/**
 * @param {!Array<!proto.viam.app.v1.Organization>} value
 * @return {!proto.viam.app.v1.ListOrganizationsResponse} returns this
*/
proto.viam.app.v1.ListOrganizationsResponse.prototype.setOrganizationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.app.v1.Organization=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.v1.Organization}
 */
proto.viam.app.v1.ListOrganizationsResponse.prototype.addOrganizations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.app.v1.Organization, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.v1.ListOrganizationsResponse} returns this
 */
proto.viam.app.v1.ListOrganizationsResponse.prototype.clearOrganizationsList = function() {
  return this.setOrganizationsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.OrganizationInvite.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.OrganizationInvite.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.OrganizationInvite} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.OrganizationInvite.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    email: jspb.Message.getFieldWithDefault(msg, 2, ""),
    createdOn: (f = msg.getCreatedOn()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    robotCount: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.OrganizationInvite}
 */
proto.viam.app.v1.OrganizationInvite.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.OrganizationInvite;
  return proto.viam.app.v1.OrganizationInvite.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.OrganizationInvite} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.OrganizationInvite}
 */
proto.viam.app.v1.OrganizationInvite.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedOn(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRobotCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.OrganizationInvite.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.OrganizationInvite.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.OrganizationInvite} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.OrganizationInvite.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCreatedOn();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getRobotCount();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.viam.app.v1.OrganizationInvite.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.OrganizationInvite} returns this
 */
proto.viam.app.v1.OrganizationInvite.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.viam.app.v1.OrganizationInvite.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.OrganizationInvite} returns this
 */
proto.viam.app.v1.OrganizationInvite.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp created_on = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.viam.app.v1.OrganizationInvite.prototype.getCreatedOn = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.viam.app.v1.OrganizationInvite} returns this
*/
proto.viam.app.v1.OrganizationInvite.prototype.setCreatedOn = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.OrganizationInvite} returns this
 */
proto.viam.app.v1.OrganizationInvite.prototype.clearCreatedOn = function() {
  return this.setCreatedOn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.OrganizationInvite.prototype.hasCreatedOn = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 robot_count = 4;
 * @return {number}
 */
proto.viam.app.v1.OrganizationInvite.prototype.getRobotCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.viam.app.v1.OrganizationInvite} returns this
 */
proto.viam.app.v1.OrganizationInvite.prototype.setRobotCount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.CreateOrganizationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.CreateOrganizationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.CreateOrganizationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.CreateOrganizationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.CreateOrganizationRequest}
 */
proto.viam.app.v1.CreateOrganizationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.CreateOrganizationRequest;
  return proto.viam.app.v1.CreateOrganizationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.CreateOrganizationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.CreateOrganizationRequest}
 */
proto.viam.app.v1.CreateOrganizationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.CreateOrganizationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.CreateOrganizationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.CreateOrganizationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.CreateOrganizationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.viam.app.v1.CreateOrganizationRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.CreateOrganizationRequest} returns this
 */
proto.viam.app.v1.CreateOrganizationRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.CreateOrganizationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.CreateOrganizationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.CreateOrganizationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.CreateOrganizationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    organization: (f = msg.getOrganization()) && proto.viam.app.v1.Organization.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.CreateOrganizationResponse}
 */
proto.viam.app.v1.CreateOrganizationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.CreateOrganizationResponse;
  return proto.viam.app.v1.CreateOrganizationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.CreateOrganizationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.CreateOrganizationResponse}
 */
proto.viam.app.v1.CreateOrganizationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.Organization;
      reader.readMessage(value,proto.viam.app.v1.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.CreateOrganizationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.CreateOrganizationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.CreateOrganizationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.CreateOrganizationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.app.v1.Organization.serializeBinaryToWriter
    );
  }
};


/**
 * optional Organization organization = 1;
 * @return {?proto.viam.app.v1.Organization}
 */
proto.viam.app.v1.CreateOrganizationResponse.prototype.getOrganization = function() {
  return /** @type{?proto.viam.app.v1.Organization} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.v1.Organization, 1));
};


/**
 * @param {?proto.viam.app.v1.Organization|undefined} value
 * @return {!proto.viam.app.v1.CreateOrganizationResponse} returns this
*/
proto.viam.app.v1.CreateOrganizationResponse.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.CreateOrganizationResponse} returns this
 */
proto.viam.app.v1.CreateOrganizationResponse.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.CreateOrganizationResponse.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.GetOrganizationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.GetOrganizationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.GetOrganizationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetOrganizationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.GetOrganizationRequest}
 */
proto.viam.app.v1.GetOrganizationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.GetOrganizationRequest;
  return proto.viam.app.v1.GetOrganizationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.GetOrganizationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.GetOrganizationRequest}
 */
proto.viam.app.v1.GetOrganizationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.GetOrganizationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.GetOrganizationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.GetOrganizationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetOrganizationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.viam.app.v1.GetOrganizationRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.GetOrganizationRequest} returns this
 */
proto.viam.app.v1.GetOrganizationRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.GetOrganizationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.GetOrganizationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.GetOrganizationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetOrganizationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    organization: (f = msg.getOrganization()) && proto.viam.app.v1.Organization.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.GetOrganizationResponse}
 */
proto.viam.app.v1.GetOrganizationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.GetOrganizationResponse;
  return proto.viam.app.v1.GetOrganizationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.GetOrganizationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.GetOrganizationResponse}
 */
proto.viam.app.v1.GetOrganizationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.Organization;
      reader.readMessage(value,proto.viam.app.v1.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.GetOrganizationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.GetOrganizationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.GetOrganizationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetOrganizationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.app.v1.Organization.serializeBinaryToWriter
    );
  }
};


/**
 * optional Organization organization = 1;
 * @return {?proto.viam.app.v1.Organization}
 */
proto.viam.app.v1.GetOrganizationResponse.prototype.getOrganization = function() {
  return /** @type{?proto.viam.app.v1.Organization} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.v1.Organization, 1));
};


/**
 * @param {?proto.viam.app.v1.Organization|undefined} value
 * @return {!proto.viam.app.v1.GetOrganizationResponse} returns this
*/
proto.viam.app.v1.GetOrganizationResponse.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.GetOrganizationResponse} returns this
 */
proto.viam.app.v1.GetOrganizationResponse.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.GetOrganizationResponse.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.GetOrganizationNamespaceAvailabilityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.GetOrganizationNamespaceAvailabilityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.GetOrganizationNamespaceAvailabilityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetOrganizationNamespaceAvailabilityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    publicNamespace: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.GetOrganizationNamespaceAvailabilityRequest}
 */
proto.viam.app.v1.GetOrganizationNamespaceAvailabilityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.GetOrganizationNamespaceAvailabilityRequest;
  return proto.viam.app.v1.GetOrganizationNamespaceAvailabilityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.GetOrganizationNamespaceAvailabilityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.GetOrganizationNamespaceAvailabilityRequest}
 */
proto.viam.app.v1.GetOrganizationNamespaceAvailabilityRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicNamespace(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.GetOrganizationNamespaceAvailabilityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.GetOrganizationNamespaceAvailabilityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.GetOrganizationNamespaceAvailabilityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetOrganizationNamespaceAvailabilityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublicNamespace();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string public_namespace = 1;
 * @return {string}
 */
proto.viam.app.v1.GetOrganizationNamespaceAvailabilityRequest.prototype.getPublicNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.GetOrganizationNamespaceAvailabilityRequest} returns this
 */
proto.viam.app.v1.GetOrganizationNamespaceAvailabilityRequest.prototype.setPublicNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.GetOrganizationNamespaceAvailabilityResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.GetOrganizationNamespaceAvailabilityResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.GetOrganizationNamespaceAvailabilityResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetOrganizationNamespaceAvailabilityResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    available: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.GetOrganizationNamespaceAvailabilityResponse}
 */
proto.viam.app.v1.GetOrganizationNamespaceAvailabilityResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.GetOrganizationNamespaceAvailabilityResponse;
  return proto.viam.app.v1.GetOrganizationNamespaceAvailabilityResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.GetOrganizationNamespaceAvailabilityResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.GetOrganizationNamespaceAvailabilityResponse}
 */
proto.viam.app.v1.GetOrganizationNamespaceAvailabilityResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAvailable(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.GetOrganizationNamespaceAvailabilityResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.GetOrganizationNamespaceAvailabilityResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.GetOrganizationNamespaceAvailabilityResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetOrganizationNamespaceAvailabilityResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAvailable();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool available = 1;
 * @return {boolean}
 */
proto.viam.app.v1.GetOrganizationNamespaceAvailabilityResponse.prototype.getAvailable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.viam.app.v1.GetOrganizationNamespaceAvailabilityResponse} returns this
 */
proto.viam.app.v1.GetOrganizationNamespaceAvailabilityResponse.prototype.setAvailable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.UpdateOrganizationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.UpdateOrganizationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.UpdateOrganizationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.UpdateOrganizationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    publicNamespace: jspb.Message.getFieldWithDefault(msg, 3, ""),
    region: jspb.Message.getFieldWithDefault(msg, 4, ""),
    cid: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.UpdateOrganizationRequest}
 */
proto.viam.app.v1.UpdateOrganizationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.UpdateOrganizationRequest;
  return proto.viam.app.v1.UpdateOrganizationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.UpdateOrganizationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.UpdateOrganizationRequest}
 */
proto.viam.app.v1.UpdateOrganizationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicNamespace(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.UpdateOrganizationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.UpdateOrganizationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.UpdateOrganizationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.UpdateOrganizationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.viam.app.v1.UpdateOrganizationRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.UpdateOrganizationRequest} returns this
 */
proto.viam.app.v1.UpdateOrganizationRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.viam.app.v1.UpdateOrganizationRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.UpdateOrganizationRequest} returns this
 */
proto.viam.app.v1.UpdateOrganizationRequest.prototype.setName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.app.v1.UpdateOrganizationRequest} returns this
 */
proto.viam.app.v1.UpdateOrganizationRequest.prototype.clearName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.UpdateOrganizationRequest.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string public_namespace = 3;
 * @return {string}
 */
proto.viam.app.v1.UpdateOrganizationRequest.prototype.getPublicNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.UpdateOrganizationRequest} returns this
 */
proto.viam.app.v1.UpdateOrganizationRequest.prototype.setPublicNamespace = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.app.v1.UpdateOrganizationRequest} returns this
 */
proto.viam.app.v1.UpdateOrganizationRequest.prototype.clearPublicNamespace = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.UpdateOrganizationRequest.prototype.hasPublicNamespace = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string region = 4;
 * @return {string}
 */
proto.viam.app.v1.UpdateOrganizationRequest.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.UpdateOrganizationRequest} returns this
 */
proto.viam.app.v1.UpdateOrganizationRequest.prototype.setRegion = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.app.v1.UpdateOrganizationRequest} returns this
 */
proto.viam.app.v1.UpdateOrganizationRequest.prototype.clearRegion = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.UpdateOrganizationRequest.prototype.hasRegion = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string cid = 5;
 * @return {string}
 */
proto.viam.app.v1.UpdateOrganizationRequest.prototype.getCid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.UpdateOrganizationRequest} returns this
 */
proto.viam.app.v1.UpdateOrganizationRequest.prototype.setCid = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.app.v1.UpdateOrganizationRequest} returns this
 */
proto.viam.app.v1.UpdateOrganizationRequest.prototype.clearCid = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.UpdateOrganizationRequest.prototype.hasCid = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.UpdateOrganizationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.UpdateOrganizationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.UpdateOrganizationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.UpdateOrganizationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    organization: (f = msg.getOrganization()) && proto.viam.app.v1.Organization.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.UpdateOrganizationResponse}
 */
proto.viam.app.v1.UpdateOrganizationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.UpdateOrganizationResponse;
  return proto.viam.app.v1.UpdateOrganizationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.UpdateOrganizationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.UpdateOrganizationResponse}
 */
proto.viam.app.v1.UpdateOrganizationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.Organization;
      reader.readMessage(value,proto.viam.app.v1.Organization.deserializeBinaryFromReader);
      msg.setOrganization(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.UpdateOrganizationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.UpdateOrganizationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.UpdateOrganizationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.UpdateOrganizationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganization();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.app.v1.Organization.serializeBinaryToWriter
    );
  }
};


/**
 * optional Organization organization = 1;
 * @return {?proto.viam.app.v1.Organization}
 */
proto.viam.app.v1.UpdateOrganizationResponse.prototype.getOrganization = function() {
  return /** @type{?proto.viam.app.v1.Organization} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.v1.Organization, 1));
};


/**
 * @param {?proto.viam.app.v1.Organization|undefined} value
 * @return {!proto.viam.app.v1.UpdateOrganizationResponse} returns this
*/
proto.viam.app.v1.UpdateOrganizationResponse.prototype.setOrganization = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.UpdateOrganizationResponse} returns this
 */
proto.viam.app.v1.UpdateOrganizationResponse.prototype.clearOrganization = function() {
  return this.setOrganization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.UpdateOrganizationResponse.prototype.hasOrganization = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.DeleteOrganizationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.DeleteOrganizationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.DeleteOrganizationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.DeleteOrganizationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.DeleteOrganizationRequest}
 */
proto.viam.app.v1.DeleteOrganizationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.DeleteOrganizationRequest;
  return proto.viam.app.v1.DeleteOrganizationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.DeleteOrganizationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.DeleteOrganizationRequest}
 */
proto.viam.app.v1.DeleteOrganizationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.DeleteOrganizationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.DeleteOrganizationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.DeleteOrganizationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.DeleteOrganizationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.viam.app.v1.DeleteOrganizationRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.DeleteOrganizationRequest} returns this
 */
proto.viam.app.v1.DeleteOrganizationRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.DeleteOrganizationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.DeleteOrganizationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.DeleteOrganizationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.DeleteOrganizationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.DeleteOrganizationResponse}
 */
proto.viam.app.v1.DeleteOrganizationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.DeleteOrganizationResponse;
  return proto.viam.app.v1.DeleteOrganizationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.DeleteOrganizationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.DeleteOrganizationResponse}
 */
proto.viam.app.v1.DeleteOrganizationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.DeleteOrganizationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.DeleteOrganizationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.DeleteOrganizationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.DeleteOrganizationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.ListOrganizationMembersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.ListOrganizationMembersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.ListOrganizationMembersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ListOrganizationMembersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.ListOrganizationMembersRequest}
 */
proto.viam.app.v1.ListOrganizationMembersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.ListOrganizationMembersRequest;
  return proto.viam.app.v1.ListOrganizationMembersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.ListOrganizationMembersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.ListOrganizationMembersRequest}
 */
proto.viam.app.v1.ListOrganizationMembersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.ListOrganizationMembersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.ListOrganizationMembersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.ListOrganizationMembersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ListOrganizationMembersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.viam.app.v1.ListOrganizationMembersRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.ListOrganizationMembersRequest} returns this
 */
proto.viam.app.v1.ListOrganizationMembersRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.v1.ListOrganizationMembersResponse.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.ListOrganizationMembersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.ListOrganizationMembersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.ListOrganizationMembersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ListOrganizationMembersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    membersList: jspb.Message.toObjectList(msg.getMembersList(),
    proto.viam.app.v1.OrganizationMember.toObject, includeInstance),
    invitesList: jspb.Message.toObjectList(msg.getInvitesList(),
    proto.viam.app.v1.OrganizationInvite.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.ListOrganizationMembersResponse}
 */
proto.viam.app.v1.ListOrganizationMembersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.ListOrganizationMembersResponse;
  return proto.viam.app.v1.ListOrganizationMembersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.ListOrganizationMembersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.ListOrganizationMembersResponse}
 */
proto.viam.app.v1.ListOrganizationMembersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = new proto.viam.app.v1.OrganizationMember;
      reader.readMessage(value,proto.viam.app.v1.OrganizationMember.deserializeBinaryFromReader);
      msg.addMembers(value);
      break;
    case 3:
      var value = new proto.viam.app.v1.OrganizationInvite;
      reader.readMessage(value,proto.viam.app.v1.OrganizationInvite.deserializeBinaryFromReader);
      msg.addInvites(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.ListOrganizationMembersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.ListOrganizationMembersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.ListOrganizationMembersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ListOrganizationMembersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMembersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.viam.app.v1.OrganizationMember.serializeBinaryToWriter
    );
  }
  f = message.getInvitesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.viam.app.v1.OrganizationInvite.serializeBinaryToWriter
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.viam.app.v1.ListOrganizationMembersResponse.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.ListOrganizationMembersResponse} returns this
 */
proto.viam.app.v1.ListOrganizationMembersResponse.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated OrganizationMember members = 2;
 * @return {!Array<!proto.viam.app.v1.OrganizationMember>}
 */
proto.viam.app.v1.ListOrganizationMembersResponse.prototype.getMembersList = function() {
  return /** @type{!Array<!proto.viam.app.v1.OrganizationMember>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.v1.OrganizationMember, 2));
};


/**
 * @param {!Array<!proto.viam.app.v1.OrganizationMember>} value
 * @return {!proto.viam.app.v1.ListOrganizationMembersResponse} returns this
*/
proto.viam.app.v1.ListOrganizationMembersResponse.prototype.setMembersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.viam.app.v1.OrganizationMember=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.v1.OrganizationMember}
 */
proto.viam.app.v1.ListOrganizationMembersResponse.prototype.addMembers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.viam.app.v1.OrganizationMember, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.v1.ListOrganizationMembersResponse} returns this
 */
proto.viam.app.v1.ListOrganizationMembersResponse.prototype.clearMembersList = function() {
  return this.setMembersList([]);
};


/**
 * repeated OrganizationInvite invites = 3;
 * @return {!Array<!proto.viam.app.v1.OrganizationInvite>}
 */
proto.viam.app.v1.ListOrganizationMembersResponse.prototype.getInvitesList = function() {
  return /** @type{!Array<!proto.viam.app.v1.OrganizationInvite>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.v1.OrganizationInvite, 3));
};


/**
 * @param {!Array<!proto.viam.app.v1.OrganizationInvite>} value
 * @return {!proto.viam.app.v1.ListOrganizationMembersResponse} returns this
*/
proto.viam.app.v1.ListOrganizationMembersResponse.prototype.setInvitesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.viam.app.v1.OrganizationInvite=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.v1.OrganizationInvite}
 */
proto.viam.app.v1.ListOrganizationMembersResponse.prototype.addInvites = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.viam.app.v1.OrganizationInvite, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.v1.ListOrganizationMembersResponse} returns this
 */
proto.viam.app.v1.ListOrganizationMembersResponse.prototype.clearInvitesList = function() {
  return this.setInvitesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.v1.CreateOrganizationInviteRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.CreateOrganizationInviteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.CreateOrganizationInviteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.CreateOrganizationInviteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.CreateOrganizationInviteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    email: jspb.Message.getFieldWithDefault(msg, 2, ""),
    authorizationsList: jspb.Message.toObjectList(msg.getAuthorizationsList(),
    proto.viam.app.v1.Authorization.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.CreateOrganizationInviteRequest}
 */
proto.viam.app.v1.CreateOrganizationInviteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.CreateOrganizationInviteRequest;
  return proto.viam.app.v1.CreateOrganizationInviteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.CreateOrganizationInviteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.CreateOrganizationInviteRequest}
 */
proto.viam.app.v1.CreateOrganizationInviteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 3:
      var value = new proto.viam.app.v1.Authorization;
      reader.readMessage(value,proto.viam.app.v1.Authorization.deserializeBinaryFromReader);
      msg.addAuthorizations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.CreateOrganizationInviteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.CreateOrganizationInviteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.CreateOrganizationInviteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.CreateOrganizationInviteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAuthorizationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.viam.app.v1.Authorization.serializeBinaryToWriter
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.viam.app.v1.CreateOrganizationInviteRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.CreateOrganizationInviteRequest} returns this
 */
proto.viam.app.v1.CreateOrganizationInviteRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.viam.app.v1.CreateOrganizationInviteRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.CreateOrganizationInviteRequest} returns this
 */
proto.viam.app.v1.CreateOrganizationInviteRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Authorization authorizations = 3;
 * @return {!Array<!proto.viam.app.v1.Authorization>}
 */
proto.viam.app.v1.CreateOrganizationInviteRequest.prototype.getAuthorizationsList = function() {
  return /** @type{!Array<!proto.viam.app.v1.Authorization>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.v1.Authorization, 3));
};


/**
 * @param {!Array<!proto.viam.app.v1.Authorization>} value
 * @return {!proto.viam.app.v1.CreateOrganizationInviteRequest} returns this
*/
proto.viam.app.v1.CreateOrganizationInviteRequest.prototype.setAuthorizationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.viam.app.v1.Authorization=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.v1.Authorization}
 */
proto.viam.app.v1.CreateOrganizationInviteRequest.prototype.addAuthorizations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.viam.app.v1.Authorization, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.v1.CreateOrganizationInviteRequest} returns this
 */
proto.viam.app.v1.CreateOrganizationInviteRequest.prototype.clearAuthorizationsList = function() {
  return this.setAuthorizationsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.CreateOrganizationInviteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.CreateOrganizationInviteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.CreateOrganizationInviteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.CreateOrganizationInviteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    invite: (f = msg.getInvite()) && proto.viam.app.v1.OrganizationInvite.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.CreateOrganizationInviteResponse}
 */
proto.viam.app.v1.CreateOrganizationInviteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.CreateOrganizationInviteResponse;
  return proto.viam.app.v1.CreateOrganizationInviteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.CreateOrganizationInviteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.CreateOrganizationInviteResponse}
 */
proto.viam.app.v1.CreateOrganizationInviteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.OrganizationInvite;
      reader.readMessage(value,proto.viam.app.v1.OrganizationInvite.deserializeBinaryFromReader);
      msg.setInvite(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.CreateOrganizationInviteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.CreateOrganizationInviteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.CreateOrganizationInviteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.CreateOrganizationInviteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvite();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.app.v1.OrganizationInvite.serializeBinaryToWriter
    );
  }
};


/**
 * optional OrganizationInvite invite = 1;
 * @return {?proto.viam.app.v1.OrganizationInvite}
 */
proto.viam.app.v1.CreateOrganizationInviteResponse.prototype.getInvite = function() {
  return /** @type{?proto.viam.app.v1.OrganizationInvite} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.v1.OrganizationInvite, 1));
};


/**
 * @param {?proto.viam.app.v1.OrganizationInvite|undefined} value
 * @return {!proto.viam.app.v1.CreateOrganizationInviteResponse} returns this
*/
proto.viam.app.v1.CreateOrganizationInviteResponse.prototype.setInvite = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.CreateOrganizationInviteResponse} returns this
 */
proto.viam.app.v1.CreateOrganizationInviteResponse.prototype.clearInvite = function() {
  return this.setInvite(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.CreateOrganizationInviteResponse.prototype.hasInvite = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest.repeatedFields_ = [3,4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    email: jspb.Message.getFieldWithDefault(msg, 2, ""),
    addAuthorizationsList: jspb.Message.toObjectList(msg.getAddAuthorizationsList(),
    proto.viam.app.v1.Authorization.toObject, includeInstance),
    removeAuthorizationsList: jspb.Message.toObjectList(msg.getRemoveAuthorizationsList(),
    proto.viam.app.v1.Authorization.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest}
 */
proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest;
  return proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest}
 */
proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 3:
      var value = new proto.viam.app.v1.Authorization;
      reader.readMessage(value,proto.viam.app.v1.Authorization.deserializeBinaryFromReader);
      msg.addAddAuthorizations(value);
      break;
    case 4:
      var value = new proto.viam.app.v1.Authorization;
      reader.readMessage(value,proto.viam.app.v1.Authorization.deserializeBinaryFromReader);
      msg.addRemoveAuthorizations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAddAuthorizationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.viam.app.v1.Authorization.serializeBinaryToWriter
    );
  }
  f = message.getRemoveAuthorizationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.viam.app.v1.Authorization.serializeBinaryToWriter
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest} returns this
 */
proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest} returns this
 */
proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Authorization add_authorizations = 3;
 * @return {!Array<!proto.viam.app.v1.Authorization>}
 */
proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest.prototype.getAddAuthorizationsList = function() {
  return /** @type{!Array<!proto.viam.app.v1.Authorization>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.v1.Authorization, 3));
};


/**
 * @param {!Array<!proto.viam.app.v1.Authorization>} value
 * @return {!proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest} returns this
*/
proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest.prototype.setAddAuthorizationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.viam.app.v1.Authorization=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.v1.Authorization}
 */
proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest.prototype.addAddAuthorizations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.viam.app.v1.Authorization, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest} returns this
 */
proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest.prototype.clearAddAuthorizationsList = function() {
  return this.setAddAuthorizationsList([]);
};


/**
 * repeated Authorization remove_authorizations = 4;
 * @return {!Array<!proto.viam.app.v1.Authorization>}
 */
proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest.prototype.getRemoveAuthorizationsList = function() {
  return /** @type{!Array<!proto.viam.app.v1.Authorization>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.v1.Authorization, 4));
};


/**
 * @param {!Array<!proto.viam.app.v1.Authorization>} value
 * @return {!proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest} returns this
*/
proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest.prototype.setRemoveAuthorizationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.viam.app.v1.Authorization=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.v1.Authorization}
 */
proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest.prototype.addRemoveAuthorizations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.viam.app.v1.Authorization, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest} returns this
 */
proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsRequest.prototype.clearRemoveAuthorizationsList = function() {
  return this.setRemoveAuthorizationsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    invite: (f = msg.getInvite()) && proto.viam.app.v1.OrganizationInvite.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsResponse}
 */
proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsResponse;
  return proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsResponse}
 */
proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.OrganizationInvite;
      reader.readMessage(value,proto.viam.app.v1.OrganizationInvite.deserializeBinaryFromReader);
      msg.setInvite(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvite();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.app.v1.OrganizationInvite.serializeBinaryToWriter
    );
  }
};


/**
 * optional OrganizationInvite invite = 1;
 * @return {?proto.viam.app.v1.OrganizationInvite}
 */
proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsResponse.prototype.getInvite = function() {
  return /** @type{?proto.viam.app.v1.OrganizationInvite} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.v1.OrganizationInvite, 1));
};


/**
 * @param {?proto.viam.app.v1.OrganizationInvite|undefined} value
 * @return {!proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsResponse} returns this
*/
proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsResponse.prototype.setInvite = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsResponse} returns this
 */
proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsResponse.prototype.clearInvite = function() {
  return this.setInvite(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.UpdateOrganizationInviteAuthorizationsResponse.prototype.hasInvite = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.DeleteOrganizationInviteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.DeleteOrganizationInviteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.DeleteOrganizationInviteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.DeleteOrganizationInviteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    email: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.DeleteOrganizationInviteRequest}
 */
proto.viam.app.v1.DeleteOrganizationInviteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.DeleteOrganizationInviteRequest;
  return proto.viam.app.v1.DeleteOrganizationInviteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.DeleteOrganizationInviteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.DeleteOrganizationInviteRequest}
 */
proto.viam.app.v1.DeleteOrganizationInviteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.DeleteOrganizationInviteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.DeleteOrganizationInviteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.DeleteOrganizationInviteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.DeleteOrganizationInviteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.viam.app.v1.DeleteOrganizationInviteRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.DeleteOrganizationInviteRequest} returns this
 */
proto.viam.app.v1.DeleteOrganizationInviteRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.viam.app.v1.DeleteOrganizationInviteRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.DeleteOrganizationInviteRequest} returns this
 */
proto.viam.app.v1.DeleteOrganizationInviteRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.DeleteOrganizationInviteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.DeleteOrganizationInviteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.DeleteOrganizationInviteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.DeleteOrganizationInviteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.DeleteOrganizationInviteResponse}
 */
proto.viam.app.v1.DeleteOrganizationInviteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.DeleteOrganizationInviteResponse;
  return proto.viam.app.v1.DeleteOrganizationInviteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.DeleteOrganizationInviteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.DeleteOrganizationInviteResponse}
 */
proto.viam.app.v1.DeleteOrganizationInviteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.DeleteOrganizationInviteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.DeleteOrganizationInviteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.DeleteOrganizationInviteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.DeleteOrganizationInviteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.ResendOrganizationInviteRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.ResendOrganizationInviteRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.ResendOrganizationInviteRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ResendOrganizationInviteRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    email: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.ResendOrganizationInviteRequest}
 */
proto.viam.app.v1.ResendOrganizationInviteRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.ResendOrganizationInviteRequest;
  return proto.viam.app.v1.ResendOrganizationInviteRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.ResendOrganizationInviteRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.ResendOrganizationInviteRequest}
 */
proto.viam.app.v1.ResendOrganizationInviteRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.ResendOrganizationInviteRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.ResendOrganizationInviteRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.ResendOrganizationInviteRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ResendOrganizationInviteRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.viam.app.v1.ResendOrganizationInviteRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.ResendOrganizationInviteRequest} returns this
 */
proto.viam.app.v1.ResendOrganizationInviteRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.viam.app.v1.ResendOrganizationInviteRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.ResendOrganizationInviteRequest} returns this
 */
proto.viam.app.v1.ResendOrganizationInviteRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.ResendOrganizationInviteResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.ResendOrganizationInviteResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.ResendOrganizationInviteResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ResendOrganizationInviteResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    invite: (f = msg.getInvite()) && proto.viam.app.v1.OrganizationInvite.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.ResendOrganizationInviteResponse}
 */
proto.viam.app.v1.ResendOrganizationInviteResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.ResendOrganizationInviteResponse;
  return proto.viam.app.v1.ResendOrganizationInviteResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.ResendOrganizationInviteResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.ResendOrganizationInviteResponse}
 */
proto.viam.app.v1.ResendOrganizationInviteResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.OrganizationInvite;
      reader.readMessage(value,proto.viam.app.v1.OrganizationInvite.deserializeBinaryFromReader);
      msg.setInvite(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.ResendOrganizationInviteResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.ResendOrganizationInviteResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.ResendOrganizationInviteResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ResendOrganizationInviteResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInvite();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.app.v1.OrganizationInvite.serializeBinaryToWriter
    );
  }
};


/**
 * optional OrganizationInvite invite = 1;
 * @return {?proto.viam.app.v1.OrganizationInvite}
 */
proto.viam.app.v1.ResendOrganizationInviteResponse.prototype.getInvite = function() {
  return /** @type{?proto.viam.app.v1.OrganizationInvite} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.v1.OrganizationInvite, 1));
};


/**
 * @param {?proto.viam.app.v1.OrganizationInvite|undefined} value
 * @return {!proto.viam.app.v1.ResendOrganizationInviteResponse} returns this
*/
proto.viam.app.v1.ResendOrganizationInviteResponse.prototype.setInvite = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.ResendOrganizationInviteResponse} returns this
 */
proto.viam.app.v1.ResendOrganizationInviteResponse.prototype.clearInvite = function() {
  return this.setInvite(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.ResendOrganizationInviteResponse.prototype.hasInvite = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.DeleteOrganizationMemberRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.DeleteOrganizationMemberRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.DeleteOrganizationMemberRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.DeleteOrganizationMemberRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.DeleteOrganizationMemberRequest}
 */
proto.viam.app.v1.DeleteOrganizationMemberRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.DeleteOrganizationMemberRequest;
  return proto.viam.app.v1.DeleteOrganizationMemberRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.DeleteOrganizationMemberRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.DeleteOrganizationMemberRequest}
 */
proto.viam.app.v1.DeleteOrganizationMemberRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.DeleteOrganizationMemberRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.DeleteOrganizationMemberRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.DeleteOrganizationMemberRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.DeleteOrganizationMemberRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.viam.app.v1.DeleteOrganizationMemberRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.DeleteOrganizationMemberRequest} returns this
 */
proto.viam.app.v1.DeleteOrganizationMemberRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string user_id = 2;
 * @return {string}
 */
proto.viam.app.v1.DeleteOrganizationMemberRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.DeleteOrganizationMemberRequest} returns this
 */
proto.viam.app.v1.DeleteOrganizationMemberRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.DeleteOrganizationMemberResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.DeleteOrganizationMemberResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.DeleteOrganizationMemberResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.DeleteOrganizationMemberResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.DeleteOrganizationMemberResponse}
 */
proto.viam.app.v1.DeleteOrganizationMemberResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.DeleteOrganizationMemberResponse;
  return proto.viam.app.v1.DeleteOrganizationMemberResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.DeleteOrganizationMemberResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.DeleteOrganizationMemberResponse}
 */
proto.viam.app.v1.DeleteOrganizationMemberResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.DeleteOrganizationMemberResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.DeleteOrganizationMemberResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.DeleteOrganizationMemberResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.DeleteOrganizationMemberResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.LocationOrganization.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.LocationOrganization.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.LocationOrganization} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.LocationOrganization.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    primary: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.LocationOrganization}
 */
proto.viam.app.v1.LocationOrganization.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.LocationOrganization;
  return proto.viam.app.v1.LocationOrganization.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.LocationOrganization} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.LocationOrganization}
 */
proto.viam.app.v1.LocationOrganization.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPrimary(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.LocationOrganization.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.LocationOrganization.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.LocationOrganization} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.LocationOrganization.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPrimary();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.viam.app.v1.LocationOrganization.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.LocationOrganization} returns this
 */
proto.viam.app.v1.LocationOrganization.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool primary = 2;
 * @return {boolean}
 */
proto.viam.app.v1.LocationOrganization.prototype.getPrimary = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.viam.app.v1.LocationOrganization} returns this
 */
proto.viam.app.v1.LocationOrganization.prototype.setPrimary = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.v1.LocationAuth.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.LocationAuth.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.LocationAuth.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.LocationAuth} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.LocationAuth.toObject = function(includeInstance, msg) {
  var f, obj = {
    secret: jspb.Message.getFieldWithDefault(msg, 1, ""),
    locationId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    secretsList: jspb.Message.toObjectList(msg.getSecretsList(),
    proto.viam.app.v1.SharedSecret.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.LocationAuth}
 */
proto.viam.app.v1.LocationAuth.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.LocationAuth;
  return proto.viam.app.v1.LocationAuth.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.LocationAuth} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.LocationAuth}
 */
proto.viam.app.v1.LocationAuth.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecret(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocationId(value);
      break;
    case 3:
      var value = new proto.viam.app.v1.SharedSecret;
      reader.readMessage(value,proto.viam.app.v1.SharedSecret.deserializeBinaryFromReader);
      msg.addSecrets(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.LocationAuth.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.LocationAuth.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.LocationAuth} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.LocationAuth.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSecret();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLocationId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSecretsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.viam.app.v1.SharedSecret.serializeBinaryToWriter
    );
  }
};


/**
 * optional string secret = 1;
 * @return {string}
 */
proto.viam.app.v1.LocationAuth.prototype.getSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.LocationAuth} returns this
 */
proto.viam.app.v1.LocationAuth.prototype.setSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string location_id = 2;
 * @return {string}
 */
proto.viam.app.v1.LocationAuth.prototype.getLocationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.LocationAuth} returns this
 */
proto.viam.app.v1.LocationAuth.prototype.setLocationId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated SharedSecret secrets = 3;
 * @return {!Array<!proto.viam.app.v1.SharedSecret>}
 */
proto.viam.app.v1.LocationAuth.prototype.getSecretsList = function() {
  return /** @type{!Array<!proto.viam.app.v1.SharedSecret>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.v1.SharedSecret, 3));
};


/**
 * @param {!Array<!proto.viam.app.v1.SharedSecret>} value
 * @return {!proto.viam.app.v1.LocationAuth} returns this
*/
proto.viam.app.v1.LocationAuth.prototype.setSecretsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.viam.app.v1.SharedSecret=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.v1.SharedSecret}
 */
proto.viam.app.v1.LocationAuth.prototype.addSecrets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.viam.app.v1.SharedSecret, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.v1.LocationAuth} returns this
 */
proto.viam.app.v1.LocationAuth.prototype.clearSecretsList = function() {
  return this.setSecretsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.StorageConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.StorageConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.StorageConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.StorageConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    region: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.StorageConfig}
 */
proto.viam.app.v1.StorageConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.StorageConfig;
  return proto.viam.app.v1.StorageConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.StorageConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.StorageConfig}
 */
proto.viam.app.v1.StorageConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.StorageConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.StorageConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.StorageConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.StorageConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRegion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string region = 1;
 * @return {string}
 */
proto.viam.app.v1.StorageConfig.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.StorageConfig} returns this
 */
proto.viam.app.v1.StorageConfig.prototype.setRegion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.v1.Location.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.Location.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.Location.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.Location} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.Location.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    parentLocationId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    auth: (f = msg.getAuth()) && proto.viam.app.v1.LocationAuth.toObject(includeInstance, f),
    organizationsList: jspb.Message.toObjectList(msg.getOrganizationsList(),
    proto.viam.app.v1.LocationOrganization.toObject, includeInstance),
    createdOn: (f = msg.getCreatedOn()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    robotCount: jspb.Message.getFieldWithDefault(msg, 7, 0),
    config: (f = msg.getConfig()) && proto.viam.app.v1.StorageConfig.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.Location}
 */
proto.viam.app.v1.Location.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.Location;
  return proto.viam.app.v1.Location.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.Location} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.Location}
 */
proto.viam.app.v1.Location.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentLocationId(value);
      break;
    case 5:
      var value = new proto.viam.app.v1.LocationAuth;
      reader.readMessage(value,proto.viam.app.v1.LocationAuth.deserializeBinaryFromReader);
      msg.setAuth(value);
      break;
    case 6:
      var value = new proto.viam.app.v1.LocationOrganization;
      reader.readMessage(value,proto.viam.app.v1.LocationOrganization.deserializeBinaryFromReader);
      msg.addOrganizations(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedOn(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRobotCount(value);
      break;
    case 8:
      var value = new proto.viam.app.v1.StorageConfig;
      reader.readMessage(value,proto.viam.app.v1.StorageConfig.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.Location.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.Location.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.Location} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.Location.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getParentLocationId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAuth();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.viam.app.v1.LocationAuth.serializeBinaryToWriter
    );
  }
  f = message.getOrganizationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.viam.app.v1.LocationOrganization.serializeBinaryToWriter
    );
  }
  f = message.getCreatedOn();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getRobotCount();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.viam.app.v1.StorageConfig.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.viam.app.v1.Location.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.Location} returns this
 */
proto.viam.app.v1.Location.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.viam.app.v1.Location.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.Location} returns this
 */
proto.viam.app.v1.Location.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string parent_location_id = 4;
 * @return {string}
 */
proto.viam.app.v1.Location.prototype.getParentLocationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.Location} returns this
 */
proto.viam.app.v1.Location.prototype.setParentLocationId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional LocationAuth auth = 5;
 * @return {?proto.viam.app.v1.LocationAuth}
 */
proto.viam.app.v1.Location.prototype.getAuth = function() {
  return /** @type{?proto.viam.app.v1.LocationAuth} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.v1.LocationAuth, 5));
};


/**
 * @param {?proto.viam.app.v1.LocationAuth|undefined} value
 * @return {!proto.viam.app.v1.Location} returns this
*/
proto.viam.app.v1.Location.prototype.setAuth = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.Location} returns this
 */
proto.viam.app.v1.Location.prototype.clearAuth = function() {
  return this.setAuth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.Location.prototype.hasAuth = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated LocationOrganization organizations = 6;
 * @return {!Array<!proto.viam.app.v1.LocationOrganization>}
 */
proto.viam.app.v1.Location.prototype.getOrganizationsList = function() {
  return /** @type{!Array<!proto.viam.app.v1.LocationOrganization>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.v1.LocationOrganization, 6));
};


/**
 * @param {!Array<!proto.viam.app.v1.LocationOrganization>} value
 * @return {!proto.viam.app.v1.Location} returns this
*/
proto.viam.app.v1.Location.prototype.setOrganizationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.viam.app.v1.LocationOrganization=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.v1.LocationOrganization}
 */
proto.viam.app.v1.Location.prototype.addOrganizations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.viam.app.v1.LocationOrganization, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.v1.Location} returns this
 */
proto.viam.app.v1.Location.prototype.clearOrganizationsList = function() {
  return this.setOrganizationsList([]);
};


/**
 * optional google.protobuf.Timestamp created_on = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.viam.app.v1.Location.prototype.getCreatedOn = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.viam.app.v1.Location} returns this
*/
proto.viam.app.v1.Location.prototype.setCreatedOn = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.Location} returns this
 */
proto.viam.app.v1.Location.prototype.clearCreatedOn = function() {
  return this.setCreatedOn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.Location.prototype.hasCreatedOn = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 robot_count = 7;
 * @return {number}
 */
proto.viam.app.v1.Location.prototype.getRobotCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.viam.app.v1.Location} returns this
 */
proto.viam.app.v1.Location.prototype.setRobotCount = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional StorageConfig config = 8;
 * @return {?proto.viam.app.v1.StorageConfig}
 */
proto.viam.app.v1.Location.prototype.getConfig = function() {
  return /** @type{?proto.viam.app.v1.StorageConfig} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.v1.StorageConfig, 8));
};


/**
 * @param {?proto.viam.app.v1.StorageConfig|undefined} value
 * @return {!proto.viam.app.v1.Location} returns this
*/
proto.viam.app.v1.Location.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.Location} returns this
 */
proto.viam.app.v1.Location.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.Location.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 8) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.SharedSecret.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.SharedSecret.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.SharedSecret} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.SharedSecret.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    secret: jspb.Message.getFieldWithDefault(msg, 2, ""),
    createdOn: (f = msg.getCreatedOn()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    state: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.SharedSecret}
 */
proto.viam.app.v1.SharedSecret.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.SharedSecret;
  return proto.viam.app.v1.SharedSecret.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.SharedSecret} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.SharedSecret}
 */
proto.viam.app.v1.SharedSecret.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecret(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedOn(value);
      break;
    case 4:
      var value = /** @type {!proto.viam.app.v1.SharedSecret.State} */ (reader.readEnum());
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.SharedSecret.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.SharedSecret.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.SharedSecret} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.SharedSecret.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSecret();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCreatedOn();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.viam.app.v1.SharedSecret.State = {
  STATE_UNSPECIFIED: 0,
  STATE_ENABLED: 1,
  STATE_DISABLED: 2
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.viam.app.v1.SharedSecret.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.SharedSecret} returns this
 */
proto.viam.app.v1.SharedSecret.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string secret = 2;
 * @return {string}
 */
proto.viam.app.v1.SharedSecret.prototype.getSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.SharedSecret} returns this
 */
proto.viam.app.v1.SharedSecret.prototype.setSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp created_on = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.viam.app.v1.SharedSecret.prototype.getCreatedOn = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.viam.app.v1.SharedSecret} returns this
*/
proto.viam.app.v1.SharedSecret.prototype.setCreatedOn = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.SharedSecret} returns this
 */
proto.viam.app.v1.SharedSecret.prototype.clearCreatedOn = function() {
  return this.setCreatedOn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.SharedSecret.prototype.hasCreatedOn = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional State state = 4;
 * @return {!proto.viam.app.v1.SharedSecret.State}
 */
proto.viam.app.v1.SharedSecret.prototype.getState = function() {
  return /** @type {!proto.viam.app.v1.SharedSecret.State} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.viam.app.v1.SharedSecret.State} value
 * @return {!proto.viam.app.v1.SharedSecret} returns this
 */
proto.viam.app.v1.SharedSecret.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.CreateLocationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.CreateLocationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.CreateLocationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.CreateLocationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    parentLocationId: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.CreateLocationRequest}
 */
proto.viam.app.v1.CreateLocationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.CreateLocationRequest;
  return proto.viam.app.v1.CreateLocationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.CreateLocationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.CreateLocationRequest}
 */
proto.viam.app.v1.CreateLocationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentLocationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.CreateLocationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.CreateLocationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.CreateLocationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.CreateLocationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.viam.app.v1.CreateLocationRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.CreateLocationRequest} returns this
 */
proto.viam.app.v1.CreateLocationRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.viam.app.v1.CreateLocationRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.CreateLocationRequest} returns this
 */
proto.viam.app.v1.CreateLocationRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string parent_location_id = 3;
 * @return {string}
 */
proto.viam.app.v1.CreateLocationRequest.prototype.getParentLocationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.CreateLocationRequest} returns this
 */
proto.viam.app.v1.CreateLocationRequest.prototype.setParentLocationId = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.app.v1.CreateLocationRequest} returns this
 */
proto.viam.app.v1.CreateLocationRequest.prototype.clearParentLocationId = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.CreateLocationRequest.prototype.hasParentLocationId = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.CreateLocationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.CreateLocationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.CreateLocationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.CreateLocationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.viam.app.v1.Location.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.CreateLocationResponse}
 */
proto.viam.app.v1.CreateLocationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.CreateLocationResponse;
  return proto.viam.app.v1.CreateLocationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.CreateLocationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.CreateLocationResponse}
 */
proto.viam.app.v1.CreateLocationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.Location;
      reader.readMessage(value,proto.viam.app.v1.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.CreateLocationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.CreateLocationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.CreateLocationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.CreateLocationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.app.v1.Location.serializeBinaryToWriter
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.viam.app.v1.Location}
 */
proto.viam.app.v1.CreateLocationResponse.prototype.getLocation = function() {
  return /** @type{?proto.viam.app.v1.Location} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.v1.Location, 1));
};


/**
 * @param {?proto.viam.app.v1.Location|undefined} value
 * @return {!proto.viam.app.v1.CreateLocationResponse} returns this
*/
proto.viam.app.v1.CreateLocationResponse.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.CreateLocationResponse} returns this
 */
proto.viam.app.v1.CreateLocationResponse.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.CreateLocationResponse.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.GetLocationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.GetLocationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.GetLocationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetLocationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    locationId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.GetLocationRequest}
 */
proto.viam.app.v1.GetLocationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.GetLocationRequest;
  return proto.viam.app.v1.GetLocationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.GetLocationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.GetLocationRequest}
 */
proto.viam.app.v1.GetLocationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.GetLocationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.GetLocationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.GetLocationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetLocationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string location_id = 1;
 * @return {string}
 */
proto.viam.app.v1.GetLocationRequest.prototype.getLocationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.GetLocationRequest} returns this
 */
proto.viam.app.v1.GetLocationRequest.prototype.setLocationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.GetLocationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.GetLocationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.GetLocationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetLocationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.viam.app.v1.Location.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.GetLocationResponse}
 */
proto.viam.app.v1.GetLocationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.GetLocationResponse;
  return proto.viam.app.v1.GetLocationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.GetLocationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.GetLocationResponse}
 */
proto.viam.app.v1.GetLocationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.Location;
      reader.readMessage(value,proto.viam.app.v1.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.GetLocationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.GetLocationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.GetLocationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetLocationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.app.v1.Location.serializeBinaryToWriter
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.viam.app.v1.Location}
 */
proto.viam.app.v1.GetLocationResponse.prototype.getLocation = function() {
  return /** @type{?proto.viam.app.v1.Location} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.v1.Location, 1));
};


/**
 * @param {?proto.viam.app.v1.Location|undefined} value
 * @return {!proto.viam.app.v1.GetLocationResponse} returns this
*/
proto.viam.app.v1.GetLocationResponse.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.GetLocationResponse} returns this
 */
proto.viam.app.v1.GetLocationResponse.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.GetLocationResponse.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.UpdateLocationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.UpdateLocationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.UpdateLocationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.UpdateLocationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    locationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    parentLocationId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    region: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.UpdateLocationRequest}
 */
proto.viam.app.v1.UpdateLocationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.UpdateLocationRequest;
  return proto.viam.app.v1.UpdateLocationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.UpdateLocationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.UpdateLocationRequest}
 */
proto.viam.app.v1.UpdateLocationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentLocationId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.UpdateLocationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.UpdateLocationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.UpdateLocationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.UpdateLocationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string location_id = 1;
 * @return {string}
 */
proto.viam.app.v1.UpdateLocationRequest.prototype.getLocationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.UpdateLocationRequest} returns this
 */
proto.viam.app.v1.UpdateLocationRequest.prototype.setLocationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.viam.app.v1.UpdateLocationRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.UpdateLocationRequest} returns this
 */
proto.viam.app.v1.UpdateLocationRequest.prototype.setName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.app.v1.UpdateLocationRequest} returns this
 */
proto.viam.app.v1.UpdateLocationRequest.prototype.clearName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.UpdateLocationRequest.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string parent_location_id = 3;
 * @return {string}
 */
proto.viam.app.v1.UpdateLocationRequest.prototype.getParentLocationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.UpdateLocationRequest} returns this
 */
proto.viam.app.v1.UpdateLocationRequest.prototype.setParentLocationId = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.app.v1.UpdateLocationRequest} returns this
 */
proto.viam.app.v1.UpdateLocationRequest.prototype.clearParentLocationId = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.UpdateLocationRequest.prototype.hasParentLocationId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string region = 4;
 * @return {string}
 */
proto.viam.app.v1.UpdateLocationRequest.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.UpdateLocationRequest} returns this
 */
proto.viam.app.v1.UpdateLocationRequest.prototype.setRegion = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.app.v1.UpdateLocationRequest} returns this
 */
proto.viam.app.v1.UpdateLocationRequest.prototype.clearRegion = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.UpdateLocationRequest.prototype.hasRegion = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.UpdateLocationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.UpdateLocationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.UpdateLocationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.UpdateLocationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    location: (f = msg.getLocation()) && proto.viam.app.v1.Location.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.UpdateLocationResponse}
 */
proto.viam.app.v1.UpdateLocationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.UpdateLocationResponse;
  return proto.viam.app.v1.UpdateLocationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.UpdateLocationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.UpdateLocationResponse}
 */
proto.viam.app.v1.UpdateLocationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.Location;
      reader.readMessage(value,proto.viam.app.v1.Location.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.UpdateLocationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.UpdateLocationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.UpdateLocationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.UpdateLocationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.app.v1.Location.serializeBinaryToWriter
    );
  }
};


/**
 * optional Location location = 1;
 * @return {?proto.viam.app.v1.Location}
 */
proto.viam.app.v1.UpdateLocationResponse.prototype.getLocation = function() {
  return /** @type{?proto.viam.app.v1.Location} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.v1.Location, 1));
};


/**
 * @param {?proto.viam.app.v1.Location|undefined} value
 * @return {!proto.viam.app.v1.UpdateLocationResponse} returns this
*/
proto.viam.app.v1.UpdateLocationResponse.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.UpdateLocationResponse} returns this
 */
proto.viam.app.v1.UpdateLocationResponse.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.UpdateLocationResponse.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.DeleteLocationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.DeleteLocationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.DeleteLocationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.DeleteLocationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    locationId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.DeleteLocationRequest}
 */
proto.viam.app.v1.DeleteLocationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.DeleteLocationRequest;
  return proto.viam.app.v1.DeleteLocationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.DeleteLocationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.DeleteLocationRequest}
 */
proto.viam.app.v1.DeleteLocationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.DeleteLocationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.DeleteLocationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.DeleteLocationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.DeleteLocationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string location_id = 1;
 * @return {string}
 */
proto.viam.app.v1.DeleteLocationRequest.prototype.getLocationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.DeleteLocationRequest} returns this
 */
proto.viam.app.v1.DeleteLocationRequest.prototype.setLocationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.DeleteLocationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.DeleteLocationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.DeleteLocationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.DeleteLocationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.DeleteLocationResponse}
 */
proto.viam.app.v1.DeleteLocationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.DeleteLocationResponse;
  return proto.viam.app.v1.DeleteLocationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.DeleteLocationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.DeleteLocationResponse}
 */
proto.viam.app.v1.DeleteLocationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.DeleteLocationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.DeleteLocationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.DeleteLocationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.DeleteLocationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.ListLocationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.ListLocationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.ListLocationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ListLocationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.ListLocationsRequest}
 */
proto.viam.app.v1.ListLocationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.ListLocationsRequest;
  return proto.viam.app.v1.ListLocationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.ListLocationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.ListLocationsRequest}
 */
proto.viam.app.v1.ListLocationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.ListLocationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.ListLocationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.ListLocationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ListLocationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.viam.app.v1.ListLocationsRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.ListLocationsRequest} returns this
 */
proto.viam.app.v1.ListLocationsRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.ShareLocationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.ShareLocationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.ShareLocationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ShareLocationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    locationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    organizationId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.ShareLocationRequest}
 */
proto.viam.app.v1.ShareLocationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.ShareLocationRequest;
  return proto.viam.app.v1.ShareLocationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.ShareLocationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.ShareLocationRequest}
 */
proto.viam.app.v1.ShareLocationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.ShareLocationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.ShareLocationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.ShareLocationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ShareLocationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string location_id = 1;
 * @return {string}
 */
proto.viam.app.v1.ShareLocationRequest.prototype.getLocationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.ShareLocationRequest} returns this
 */
proto.viam.app.v1.ShareLocationRequest.prototype.setLocationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string organization_id = 2;
 * @return {string}
 */
proto.viam.app.v1.ShareLocationRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.ShareLocationRequest} returns this
 */
proto.viam.app.v1.ShareLocationRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.ShareLocationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.ShareLocationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.ShareLocationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ShareLocationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.ShareLocationResponse}
 */
proto.viam.app.v1.ShareLocationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.ShareLocationResponse;
  return proto.viam.app.v1.ShareLocationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.ShareLocationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.ShareLocationResponse}
 */
proto.viam.app.v1.ShareLocationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.ShareLocationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.ShareLocationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.ShareLocationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ShareLocationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.UnshareLocationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.UnshareLocationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.UnshareLocationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.UnshareLocationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    locationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    organizationId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.UnshareLocationRequest}
 */
proto.viam.app.v1.UnshareLocationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.UnshareLocationRequest;
  return proto.viam.app.v1.UnshareLocationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.UnshareLocationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.UnshareLocationRequest}
 */
proto.viam.app.v1.UnshareLocationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.UnshareLocationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.UnshareLocationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.UnshareLocationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.UnshareLocationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string location_id = 1;
 * @return {string}
 */
proto.viam.app.v1.UnshareLocationRequest.prototype.getLocationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.UnshareLocationRequest} returns this
 */
proto.viam.app.v1.UnshareLocationRequest.prototype.setLocationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string organization_id = 2;
 * @return {string}
 */
proto.viam.app.v1.UnshareLocationRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.UnshareLocationRequest} returns this
 */
proto.viam.app.v1.UnshareLocationRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.UnshareLocationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.UnshareLocationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.UnshareLocationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.UnshareLocationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.UnshareLocationResponse}
 */
proto.viam.app.v1.UnshareLocationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.UnshareLocationResponse;
  return proto.viam.app.v1.UnshareLocationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.UnshareLocationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.UnshareLocationResponse}
 */
proto.viam.app.v1.UnshareLocationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.UnshareLocationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.UnshareLocationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.UnshareLocationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.UnshareLocationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.v1.ListLocationsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.ListLocationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.ListLocationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.ListLocationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ListLocationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    locationsList: jspb.Message.toObjectList(msg.getLocationsList(),
    proto.viam.app.v1.Location.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.ListLocationsResponse}
 */
proto.viam.app.v1.ListLocationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.ListLocationsResponse;
  return proto.viam.app.v1.ListLocationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.ListLocationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.ListLocationsResponse}
 */
proto.viam.app.v1.ListLocationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.Location;
      reader.readMessage(value,proto.viam.app.v1.Location.deserializeBinaryFromReader);
      msg.addLocations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.ListLocationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.ListLocationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.ListLocationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ListLocationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.app.v1.Location.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Location locations = 1;
 * @return {!Array<!proto.viam.app.v1.Location>}
 */
proto.viam.app.v1.ListLocationsResponse.prototype.getLocationsList = function() {
  return /** @type{!Array<!proto.viam.app.v1.Location>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.v1.Location, 1));
};


/**
 * @param {!Array<!proto.viam.app.v1.Location>} value
 * @return {!proto.viam.app.v1.ListLocationsResponse} returns this
*/
proto.viam.app.v1.ListLocationsResponse.prototype.setLocationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.app.v1.Location=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.v1.Location}
 */
proto.viam.app.v1.ListLocationsResponse.prototype.addLocations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.app.v1.Location, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.v1.ListLocationsResponse} returns this
 */
proto.viam.app.v1.ListLocationsResponse.prototype.clearLocationsList = function() {
  return this.setLocationsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.CreateLocationSecretRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.CreateLocationSecretRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.CreateLocationSecretRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.CreateLocationSecretRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    locationId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.CreateLocationSecretRequest}
 */
proto.viam.app.v1.CreateLocationSecretRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.CreateLocationSecretRequest;
  return proto.viam.app.v1.CreateLocationSecretRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.CreateLocationSecretRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.CreateLocationSecretRequest}
 */
proto.viam.app.v1.CreateLocationSecretRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.CreateLocationSecretRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.CreateLocationSecretRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.CreateLocationSecretRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.CreateLocationSecretRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string location_id = 1;
 * @return {string}
 */
proto.viam.app.v1.CreateLocationSecretRequest.prototype.getLocationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.CreateLocationSecretRequest} returns this
 */
proto.viam.app.v1.CreateLocationSecretRequest.prototype.setLocationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.CreateLocationSecretResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.CreateLocationSecretResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.CreateLocationSecretResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.CreateLocationSecretResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    auth: (f = msg.getAuth()) && proto.viam.app.v1.LocationAuth.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.CreateLocationSecretResponse}
 */
proto.viam.app.v1.CreateLocationSecretResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.CreateLocationSecretResponse;
  return proto.viam.app.v1.CreateLocationSecretResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.CreateLocationSecretResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.CreateLocationSecretResponse}
 */
proto.viam.app.v1.CreateLocationSecretResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.LocationAuth;
      reader.readMessage(value,proto.viam.app.v1.LocationAuth.deserializeBinaryFromReader);
      msg.setAuth(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.CreateLocationSecretResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.CreateLocationSecretResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.CreateLocationSecretResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.CreateLocationSecretResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuth();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.app.v1.LocationAuth.serializeBinaryToWriter
    );
  }
};


/**
 * optional LocationAuth auth = 1;
 * @return {?proto.viam.app.v1.LocationAuth}
 */
proto.viam.app.v1.CreateLocationSecretResponse.prototype.getAuth = function() {
  return /** @type{?proto.viam.app.v1.LocationAuth} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.v1.LocationAuth, 1));
};


/**
 * @param {?proto.viam.app.v1.LocationAuth|undefined} value
 * @return {!proto.viam.app.v1.CreateLocationSecretResponse} returns this
*/
proto.viam.app.v1.CreateLocationSecretResponse.prototype.setAuth = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.CreateLocationSecretResponse} returns this
 */
proto.viam.app.v1.CreateLocationSecretResponse.prototype.clearAuth = function() {
  return this.setAuth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.CreateLocationSecretResponse.prototype.hasAuth = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.DeleteLocationSecretRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.DeleteLocationSecretRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.DeleteLocationSecretRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.DeleteLocationSecretRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    locationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    secretId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.DeleteLocationSecretRequest}
 */
proto.viam.app.v1.DeleteLocationSecretRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.DeleteLocationSecretRequest;
  return proto.viam.app.v1.DeleteLocationSecretRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.DeleteLocationSecretRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.DeleteLocationSecretRequest}
 */
proto.viam.app.v1.DeleteLocationSecretRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecretId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.DeleteLocationSecretRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.DeleteLocationSecretRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.DeleteLocationSecretRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.DeleteLocationSecretRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSecretId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string location_id = 1;
 * @return {string}
 */
proto.viam.app.v1.DeleteLocationSecretRequest.prototype.getLocationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.DeleteLocationSecretRequest} returns this
 */
proto.viam.app.v1.DeleteLocationSecretRequest.prototype.setLocationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string secret_id = 2;
 * @return {string}
 */
proto.viam.app.v1.DeleteLocationSecretRequest.prototype.getSecretId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.DeleteLocationSecretRequest} returns this
 */
proto.viam.app.v1.DeleteLocationSecretRequest.prototype.setSecretId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.DeleteLocationSecretResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.DeleteLocationSecretResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.DeleteLocationSecretResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.DeleteLocationSecretResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.DeleteLocationSecretResponse}
 */
proto.viam.app.v1.DeleteLocationSecretResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.DeleteLocationSecretResponse;
  return proto.viam.app.v1.DeleteLocationSecretResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.DeleteLocationSecretResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.DeleteLocationSecretResponse}
 */
proto.viam.app.v1.DeleteLocationSecretResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.DeleteLocationSecretResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.DeleteLocationSecretResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.DeleteLocationSecretResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.DeleteLocationSecretResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.LocationAuthRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.LocationAuthRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.LocationAuthRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.LocationAuthRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    locationId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.LocationAuthRequest}
 */
proto.viam.app.v1.LocationAuthRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.LocationAuthRequest;
  return proto.viam.app.v1.LocationAuthRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.LocationAuthRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.LocationAuthRequest}
 */
proto.viam.app.v1.LocationAuthRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.LocationAuthRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.LocationAuthRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.LocationAuthRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.LocationAuthRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string location_id = 1;
 * @return {string}
 */
proto.viam.app.v1.LocationAuthRequest.prototype.getLocationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.LocationAuthRequest} returns this
 */
proto.viam.app.v1.LocationAuthRequest.prototype.setLocationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.LocationAuthResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.LocationAuthResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.LocationAuthResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.LocationAuthResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    auth: (f = msg.getAuth()) && proto.viam.app.v1.LocationAuth.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.LocationAuthResponse}
 */
proto.viam.app.v1.LocationAuthResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.LocationAuthResponse;
  return proto.viam.app.v1.LocationAuthResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.LocationAuthResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.LocationAuthResponse}
 */
proto.viam.app.v1.LocationAuthResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.LocationAuth;
      reader.readMessage(value,proto.viam.app.v1.LocationAuth.deserializeBinaryFromReader);
      msg.setAuth(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.LocationAuthResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.LocationAuthResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.LocationAuthResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.LocationAuthResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuth();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.app.v1.LocationAuth.serializeBinaryToWriter
    );
  }
};


/**
 * optional LocationAuth auth = 1;
 * @return {?proto.viam.app.v1.LocationAuth}
 */
proto.viam.app.v1.LocationAuthResponse.prototype.getAuth = function() {
  return /** @type{?proto.viam.app.v1.LocationAuth} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.v1.LocationAuth, 1));
};


/**
 * @param {?proto.viam.app.v1.LocationAuth|undefined} value
 * @return {!proto.viam.app.v1.LocationAuthResponse} returns this
*/
proto.viam.app.v1.LocationAuthResponse.prototype.setAuth = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.LocationAuthResponse} returns this
 */
proto.viam.app.v1.LocationAuthResponse.prototype.clearAuth = function() {
  return this.setAuth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.LocationAuthResponse.prototype.hasAuth = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.GetRobotRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.GetRobotRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.GetRobotRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetRobotRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.GetRobotRequest}
 */
proto.viam.app.v1.GetRobotRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.GetRobotRequest;
  return proto.viam.app.v1.GetRobotRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.GetRobotRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.GetRobotRequest}
 */
proto.viam.app.v1.GetRobotRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.GetRobotRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.GetRobotRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.GetRobotRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetRobotRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.viam.app.v1.GetRobotRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.GetRobotRequest} returns this
 */
proto.viam.app.v1.GetRobotRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.GetRoverRentalRobotsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.GetRoverRentalRobotsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.GetRoverRentalRobotsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetRoverRentalRobotsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.GetRoverRentalRobotsRequest}
 */
proto.viam.app.v1.GetRoverRentalRobotsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.GetRoverRentalRobotsRequest;
  return proto.viam.app.v1.GetRoverRentalRobotsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.GetRoverRentalRobotsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.GetRoverRentalRobotsRequest}
 */
proto.viam.app.v1.GetRoverRentalRobotsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.GetRoverRentalRobotsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.GetRoverRentalRobotsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.GetRoverRentalRobotsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetRoverRentalRobotsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.viam.app.v1.GetRoverRentalRobotsRequest.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.GetRoverRentalRobotsRequest} returns this
 */
proto.viam.app.v1.GetRoverRentalRobotsRequest.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.RoverRentalRobot.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.RoverRentalRobot.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.RoverRentalRobot} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.RoverRentalRobot.toObject = function(includeInstance, msg) {
  var f, obj = {
    robotId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    locationId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    robotName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    robotMainPartId: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.RoverRentalRobot}
 */
proto.viam.app.v1.RoverRentalRobot.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.RoverRentalRobot;
  return proto.viam.app.v1.RoverRentalRobot.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.RoverRentalRobot} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.RoverRentalRobot}
 */
proto.viam.app.v1.RoverRentalRobot.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRobotId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocationId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRobotName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRobotMainPartId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.RoverRentalRobot.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.RoverRentalRobot.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.RoverRentalRobot} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.RoverRentalRobot.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRobotId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLocationId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRobotName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRobotMainPartId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string robot_id = 1;
 * @return {string}
 */
proto.viam.app.v1.RoverRentalRobot.prototype.getRobotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.RoverRentalRobot} returns this
 */
proto.viam.app.v1.RoverRentalRobot.prototype.setRobotId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string location_id = 2;
 * @return {string}
 */
proto.viam.app.v1.RoverRentalRobot.prototype.getLocationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.RoverRentalRobot} returns this
 */
proto.viam.app.v1.RoverRentalRobot.prototype.setLocationId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string robot_name = 3;
 * @return {string}
 */
proto.viam.app.v1.RoverRentalRobot.prototype.getRobotName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.RoverRentalRobot} returns this
 */
proto.viam.app.v1.RoverRentalRobot.prototype.setRobotName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string robot_main_part_id = 4;
 * @return {string}
 */
proto.viam.app.v1.RoverRentalRobot.prototype.getRobotMainPartId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.RoverRentalRobot} returns this
 */
proto.viam.app.v1.RoverRentalRobot.prototype.setRobotMainPartId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.v1.GetRoverRentalRobotsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.GetRoverRentalRobotsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.GetRoverRentalRobotsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.GetRoverRentalRobotsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetRoverRentalRobotsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    robotsList: jspb.Message.toObjectList(msg.getRobotsList(),
    proto.viam.app.v1.RoverRentalRobot.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.GetRoverRentalRobotsResponse}
 */
proto.viam.app.v1.GetRoverRentalRobotsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.GetRoverRentalRobotsResponse;
  return proto.viam.app.v1.GetRoverRentalRobotsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.GetRoverRentalRobotsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.GetRoverRentalRobotsResponse}
 */
proto.viam.app.v1.GetRoverRentalRobotsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.RoverRentalRobot;
      reader.readMessage(value,proto.viam.app.v1.RoverRentalRobot.deserializeBinaryFromReader);
      msg.addRobots(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.GetRoverRentalRobotsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.GetRoverRentalRobotsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.GetRoverRentalRobotsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetRoverRentalRobotsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRobotsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.app.v1.RoverRentalRobot.serializeBinaryToWriter
    );
  }
};


/**
 * repeated RoverRentalRobot robots = 1;
 * @return {!Array<!proto.viam.app.v1.RoverRentalRobot>}
 */
proto.viam.app.v1.GetRoverRentalRobotsResponse.prototype.getRobotsList = function() {
  return /** @type{!Array<!proto.viam.app.v1.RoverRentalRobot>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.v1.RoverRentalRobot, 1));
};


/**
 * @param {!Array<!proto.viam.app.v1.RoverRentalRobot>} value
 * @return {!proto.viam.app.v1.GetRoverRentalRobotsResponse} returns this
*/
proto.viam.app.v1.GetRoverRentalRobotsResponse.prototype.setRobotsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.app.v1.RoverRentalRobot=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.v1.RoverRentalRobot}
 */
proto.viam.app.v1.GetRoverRentalRobotsResponse.prototype.addRobots = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.app.v1.RoverRentalRobot, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.v1.GetRoverRentalRobotsResponse} returns this
 */
proto.viam.app.v1.GetRoverRentalRobotsResponse.prototype.clearRobotsList = function() {
  return this.setRobotsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.GetRobotResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.GetRobotResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.GetRobotResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetRobotResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    robot: (f = msg.getRobot()) && proto.viam.app.v1.Robot.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.GetRobotResponse}
 */
proto.viam.app.v1.GetRobotResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.GetRobotResponse;
  return proto.viam.app.v1.GetRobotResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.GetRobotResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.GetRobotResponse}
 */
proto.viam.app.v1.GetRobotResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.Robot;
      reader.readMessage(value,proto.viam.app.v1.Robot.deserializeBinaryFromReader);
      msg.setRobot(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.GetRobotResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.GetRobotResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.GetRobotResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetRobotResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRobot();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.app.v1.Robot.serializeBinaryToWriter
    );
  }
};


/**
 * optional Robot robot = 1;
 * @return {?proto.viam.app.v1.Robot}
 */
proto.viam.app.v1.GetRobotResponse.prototype.getRobot = function() {
  return /** @type{?proto.viam.app.v1.Robot} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.v1.Robot, 1));
};


/**
 * @param {?proto.viam.app.v1.Robot|undefined} value
 * @return {!proto.viam.app.v1.GetRobotResponse} returns this
*/
proto.viam.app.v1.GetRobotResponse.prototype.setRobot = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.GetRobotResponse} returns this
 */
proto.viam.app.v1.GetRobotResponse.prototype.clearRobot = function() {
  return this.setRobot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.GetRobotResponse.prototype.hasRobot = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.GetRobotPartsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.GetRobotPartsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.GetRobotPartsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetRobotPartsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    robotId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.GetRobotPartsRequest}
 */
proto.viam.app.v1.GetRobotPartsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.GetRobotPartsRequest;
  return proto.viam.app.v1.GetRobotPartsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.GetRobotPartsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.GetRobotPartsRequest}
 */
proto.viam.app.v1.GetRobotPartsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRobotId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.GetRobotPartsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.GetRobotPartsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.GetRobotPartsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetRobotPartsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRobotId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string robot_id = 1;
 * @return {string}
 */
proto.viam.app.v1.GetRobotPartsRequest.prototype.getRobotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.GetRobotPartsRequest} returns this
 */
proto.viam.app.v1.GetRobotPartsRequest.prototype.setRobotId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.v1.GetRobotPartsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.GetRobotPartsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.GetRobotPartsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.GetRobotPartsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetRobotPartsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    partsList: jspb.Message.toObjectList(msg.getPartsList(),
    proto.viam.app.v1.RobotPart.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.GetRobotPartsResponse}
 */
proto.viam.app.v1.GetRobotPartsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.GetRobotPartsResponse;
  return proto.viam.app.v1.GetRobotPartsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.GetRobotPartsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.GetRobotPartsResponse}
 */
proto.viam.app.v1.GetRobotPartsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.RobotPart;
      reader.readMessage(value,proto.viam.app.v1.RobotPart.deserializeBinaryFromReader);
      msg.addParts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.GetRobotPartsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.GetRobotPartsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.GetRobotPartsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetRobotPartsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.app.v1.RobotPart.serializeBinaryToWriter
    );
  }
};


/**
 * repeated RobotPart parts = 1;
 * @return {!Array<!proto.viam.app.v1.RobotPart>}
 */
proto.viam.app.v1.GetRobotPartsResponse.prototype.getPartsList = function() {
  return /** @type{!Array<!proto.viam.app.v1.RobotPart>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.v1.RobotPart, 1));
};


/**
 * @param {!Array<!proto.viam.app.v1.RobotPart>} value
 * @return {!proto.viam.app.v1.GetRobotPartsResponse} returns this
*/
proto.viam.app.v1.GetRobotPartsResponse.prototype.setPartsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.app.v1.RobotPart=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.v1.RobotPart}
 */
proto.viam.app.v1.GetRobotPartsResponse.prototype.addParts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.app.v1.RobotPart, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.v1.GetRobotPartsResponse} returns this
 */
proto.viam.app.v1.GetRobotPartsResponse.prototype.clearPartsList = function() {
  return this.setPartsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.GetRobotPartRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.GetRobotPartRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.GetRobotPartRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetRobotPartRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.GetRobotPartRequest}
 */
proto.viam.app.v1.GetRobotPartRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.GetRobotPartRequest;
  return proto.viam.app.v1.GetRobotPartRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.GetRobotPartRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.GetRobotPartRequest}
 */
proto.viam.app.v1.GetRobotPartRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.GetRobotPartRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.GetRobotPartRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.GetRobotPartRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetRobotPartRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.viam.app.v1.GetRobotPartRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.GetRobotPartRequest} returns this
 */
proto.viam.app.v1.GetRobotPartRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.GetRobotPartResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.GetRobotPartResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.GetRobotPartResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetRobotPartResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    part: (f = msg.getPart()) && proto.viam.app.v1.RobotPart.toObject(includeInstance, f),
    configJson: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.GetRobotPartResponse}
 */
proto.viam.app.v1.GetRobotPartResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.GetRobotPartResponse;
  return proto.viam.app.v1.GetRobotPartResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.GetRobotPartResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.GetRobotPartResponse}
 */
proto.viam.app.v1.GetRobotPartResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.RobotPart;
      reader.readMessage(value,proto.viam.app.v1.RobotPart.deserializeBinaryFromReader);
      msg.setPart(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setConfigJson(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.GetRobotPartResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.GetRobotPartResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.GetRobotPartResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetRobotPartResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPart();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.app.v1.RobotPart.serializeBinaryToWriter
    );
  }
  f = message.getConfigJson();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional RobotPart part = 1;
 * @return {?proto.viam.app.v1.RobotPart}
 */
proto.viam.app.v1.GetRobotPartResponse.prototype.getPart = function() {
  return /** @type{?proto.viam.app.v1.RobotPart} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.v1.RobotPart, 1));
};


/**
 * @param {?proto.viam.app.v1.RobotPart|undefined} value
 * @return {!proto.viam.app.v1.GetRobotPartResponse} returns this
*/
proto.viam.app.v1.GetRobotPartResponse.prototype.setPart = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.GetRobotPartResponse} returns this
 */
proto.viam.app.v1.GetRobotPartResponse.prototype.clearPart = function() {
  return this.setPart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.GetRobotPartResponse.prototype.hasPart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string config_json = 2;
 * @return {string}
 */
proto.viam.app.v1.GetRobotPartResponse.prototype.getConfigJson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.GetRobotPartResponse} returns this
 */
proto.viam.app.v1.GetRobotPartResponse.prototype.setConfigJson = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.GetRobotPartLogsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.GetRobotPartLogsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.GetRobotPartLogsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetRobotPartLogsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    errorsOnly: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    filter: jspb.Message.getFieldWithDefault(msg, 3, ""),
    pageToken: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.GetRobotPartLogsRequest}
 */
proto.viam.app.v1.GetRobotPartLogsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.GetRobotPartLogsRequest;
  return proto.viam.app.v1.GetRobotPartLogsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.GetRobotPartLogsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.GetRobotPartLogsRequest}
 */
proto.viam.app.v1.GetRobotPartLogsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setErrorsOnly(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.GetRobotPartLogsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.GetRobotPartLogsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.GetRobotPartLogsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetRobotPartLogsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getErrorsOnly();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.viam.app.v1.GetRobotPartLogsRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.GetRobotPartLogsRequest} returns this
 */
proto.viam.app.v1.GetRobotPartLogsRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool errors_only = 2;
 * @return {boolean}
 */
proto.viam.app.v1.GetRobotPartLogsRequest.prototype.getErrorsOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.viam.app.v1.GetRobotPartLogsRequest} returns this
 */
proto.viam.app.v1.GetRobotPartLogsRequest.prototype.setErrorsOnly = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string filter = 3;
 * @return {string}
 */
proto.viam.app.v1.GetRobotPartLogsRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.GetRobotPartLogsRequest} returns this
 */
proto.viam.app.v1.GetRobotPartLogsRequest.prototype.setFilter = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.app.v1.GetRobotPartLogsRequest} returns this
 */
proto.viam.app.v1.GetRobotPartLogsRequest.prototype.clearFilter = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.GetRobotPartLogsRequest.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.viam.app.v1.GetRobotPartLogsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.GetRobotPartLogsRequest} returns this
 */
proto.viam.app.v1.GetRobotPartLogsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.app.v1.GetRobotPartLogsRequest} returns this
 */
proto.viam.app.v1.GetRobotPartLogsRequest.prototype.clearPageToken = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.GetRobotPartLogsRequest.prototype.hasPageToken = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.v1.LogEntry.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.LogEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.LogEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.LogEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.LogEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    host: jspb.Message.getFieldWithDefault(msg, 1, ""),
    level: jspb.Message.getFieldWithDefault(msg, 2, ""),
    time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    loggerName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    message: jspb.Message.getFieldWithDefault(msg, 5, ""),
    caller: (f = msg.getCaller()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    stack: jspb.Message.getFieldWithDefault(msg, 7, ""),
    fieldsList: jspb.Message.toObjectList(msg.getFieldsList(),
    google_protobuf_struct_pb.Struct.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.LogEntry}
 */
proto.viam.app.v1.LogEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.LogEntry;
  return proto.viam.app.v1.LogEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.LogEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.LogEntry}
 */
proto.viam.app.v1.LogEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHost(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLevel(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLoggerName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 6:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setCaller(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setStack(value);
      break;
    case 8:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.addFields(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.LogEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.LogEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.LogEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.LogEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHost();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLevel();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLoggerName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCaller();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getStack();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string host = 1;
 * @return {string}
 */
proto.viam.app.v1.LogEntry.prototype.getHost = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.LogEntry} returns this
 */
proto.viam.app.v1.LogEntry.prototype.setHost = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string level = 2;
 * @return {string}
 */
proto.viam.app.v1.LogEntry.prototype.getLevel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.LogEntry} returns this
 */
proto.viam.app.v1.LogEntry.prototype.setLevel = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.viam.app.v1.LogEntry.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.viam.app.v1.LogEntry} returns this
*/
proto.viam.app.v1.LogEntry.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.LogEntry} returns this
 */
proto.viam.app.v1.LogEntry.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.LogEntry.prototype.hasTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string logger_name = 4;
 * @return {string}
 */
proto.viam.app.v1.LogEntry.prototype.getLoggerName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.LogEntry} returns this
 */
proto.viam.app.v1.LogEntry.prototype.setLoggerName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.viam.app.v1.LogEntry.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.LogEntry} returns this
 */
proto.viam.app.v1.LogEntry.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional google.protobuf.Struct caller = 6;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.app.v1.LogEntry.prototype.getCaller = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 6));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.app.v1.LogEntry} returns this
*/
proto.viam.app.v1.LogEntry.prototype.setCaller = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.LogEntry} returns this
 */
proto.viam.app.v1.LogEntry.prototype.clearCaller = function() {
  return this.setCaller(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.LogEntry.prototype.hasCaller = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string stack = 7;
 * @return {string}
 */
proto.viam.app.v1.LogEntry.prototype.getStack = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.LogEntry} returns this
 */
proto.viam.app.v1.LogEntry.prototype.setStack = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated google.protobuf.Struct fields = 8;
 * @return {!Array<!proto.google.protobuf.Struct>}
 */
proto.viam.app.v1.LogEntry.prototype.getFieldsList = function() {
  return /** @type{!Array<!proto.google.protobuf.Struct>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_struct_pb.Struct, 8));
};


/**
 * @param {!Array<!proto.google.protobuf.Struct>} value
 * @return {!proto.viam.app.v1.LogEntry} returns this
*/
proto.viam.app.v1.LogEntry.prototype.setFieldsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.google.protobuf.Struct=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.Struct}
 */
proto.viam.app.v1.LogEntry.prototype.addFields = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.google.protobuf.Struct, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.v1.LogEntry} returns this
 */
proto.viam.app.v1.LogEntry.prototype.clearFieldsList = function() {
  return this.setFieldsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.v1.GetRobotPartLogsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.GetRobotPartLogsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.GetRobotPartLogsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.GetRobotPartLogsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetRobotPartLogsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    logsList: jspb.Message.toObjectList(msg.getLogsList(),
    proto.viam.app.v1.LogEntry.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.GetRobotPartLogsResponse}
 */
proto.viam.app.v1.GetRobotPartLogsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.GetRobotPartLogsResponse;
  return proto.viam.app.v1.GetRobotPartLogsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.GetRobotPartLogsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.GetRobotPartLogsResponse}
 */
proto.viam.app.v1.GetRobotPartLogsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.LogEntry;
      reader.readMessage(value,proto.viam.app.v1.LogEntry.deserializeBinaryFromReader);
      msg.addLogs(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.GetRobotPartLogsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.GetRobotPartLogsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.GetRobotPartLogsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetRobotPartLogsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLogsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.app.v1.LogEntry.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated LogEntry logs = 1;
 * @return {!Array<!proto.viam.app.v1.LogEntry>}
 */
proto.viam.app.v1.GetRobotPartLogsResponse.prototype.getLogsList = function() {
  return /** @type{!Array<!proto.viam.app.v1.LogEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.v1.LogEntry, 1));
};


/**
 * @param {!Array<!proto.viam.app.v1.LogEntry>} value
 * @return {!proto.viam.app.v1.GetRobotPartLogsResponse} returns this
*/
proto.viam.app.v1.GetRobotPartLogsResponse.prototype.setLogsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.app.v1.LogEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.v1.LogEntry}
 */
proto.viam.app.v1.GetRobotPartLogsResponse.prototype.addLogs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.app.v1.LogEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.v1.GetRobotPartLogsResponse} returns this
 */
proto.viam.app.v1.GetRobotPartLogsResponse.prototype.clearLogsList = function() {
  return this.setLogsList([]);
};


/**
 * optional string next_page_token = 2;
 * @return {string}
 */
proto.viam.app.v1.GetRobotPartLogsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.GetRobotPartLogsResponse} returns this
 */
proto.viam.app.v1.GetRobotPartLogsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.TailRobotPartLogsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.TailRobotPartLogsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.TailRobotPartLogsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.TailRobotPartLogsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    errorsOnly: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    filter: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.TailRobotPartLogsRequest}
 */
proto.viam.app.v1.TailRobotPartLogsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.TailRobotPartLogsRequest;
  return proto.viam.app.v1.TailRobotPartLogsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.TailRobotPartLogsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.TailRobotPartLogsRequest}
 */
proto.viam.app.v1.TailRobotPartLogsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setErrorsOnly(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.TailRobotPartLogsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.TailRobotPartLogsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.TailRobotPartLogsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.TailRobotPartLogsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getErrorsOnly();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.viam.app.v1.TailRobotPartLogsRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.TailRobotPartLogsRequest} returns this
 */
proto.viam.app.v1.TailRobotPartLogsRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool errors_only = 2;
 * @return {boolean}
 */
proto.viam.app.v1.TailRobotPartLogsRequest.prototype.getErrorsOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.viam.app.v1.TailRobotPartLogsRequest} returns this
 */
proto.viam.app.v1.TailRobotPartLogsRequest.prototype.setErrorsOnly = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string filter = 3;
 * @return {string}
 */
proto.viam.app.v1.TailRobotPartLogsRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.TailRobotPartLogsRequest} returns this
 */
proto.viam.app.v1.TailRobotPartLogsRequest.prototype.setFilter = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.app.v1.TailRobotPartLogsRequest} returns this
 */
proto.viam.app.v1.TailRobotPartLogsRequest.prototype.clearFilter = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.TailRobotPartLogsRequest.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.v1.TailRobotPartLogsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.TailRobotPartLogsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.TailRobotPartLogsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.TailRobotPartLogsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.TailRobotPartLogsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    logsList: jspb.Message.toObjectList(msg.getLogsList(),
    proto.viam.app.v1.LogEntry.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.TailRobotPartLogsResponse}
 */
proto.viam.app.v1.TailRobotPartLogsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.TailRobotPartLogsResponse;
  return proto.viam.app.v1.TailRobotPartLogsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.TailRobotPartLogsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.TailRobotPartLogsResponse}
 */
proto.viam.app.v1.TailRobotPartLogsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.LogEntry;
      reader.readMessage(value,proto.viam.app.v1.LogEntry.deserializeBinaryFromReader);
      msg.addLogs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.TailRobotPartLogsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.TailRobotPartLogsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.TailRobotPartLogsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.TailRobotPartLogsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLogsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.app.v1.LogEntry.serializeBinaryToWriter
    );
  }
};


/**
 * repeated LogEntry logs = 1;
 * @return {!Array<!proto.viam.app.v1.LogEntry>}
 */
proto.viam.app.v1.TailRobotPartLogsResponse.prototype.getLogsList = function() {
  return /** @type{!Array<!proto.viam.app.v1.LogEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.v1.LogEntry, 1));
};


/**
 * @param {!Array<!proto.viam.app.v1.LogEntry>} value
 * @return {!proto.viam.app.v1.TailRobotPartLogsResponse} returns this
*/
proto.viam.app.v1.TailRobotPartLogsResponse.prototype.setLogsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.app.v1.LogEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.v1.LogEntry}
 */
proto.viam.app.v1.TailRobotPartLogsResponse.prototype.addLogs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.app.v1.LogEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.v1.TailRobotPartLogsResponse} returns this
 */
proto.viam.app.v1.TailRobotPartLogsResponse.prototype.clearLogsList = function() {
  return this.setLogsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.GetRobotPartHistoryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.GetRobotPartHistoryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.GetRobotPartHistoryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetRobotPartHistoryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.GetRobotPartHistoryRequest}
 */
proto.viam.app.v1.GetRobotPartHistoryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.GetRobotPartHistoryRequest;
  return proto.viam.app.v1.GetRobotPartHistoryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.GetRobotPartHistoryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.GetRobotPartHistoryRequest}
 */
proto.viam.app.v1.GetRobotPartHistoryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.GetRobotPartHistoryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.GetRobotPartHistoryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.GetRobotPartHistoryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetRobotPartHistoryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.viam.app.v1.GetRobotPartHistoryRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.GetRobotPartHistoryRequest} returns this
 */
proto.viam.app.v1.GetRobotPartHistoryRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.v1.GetRobotPartHistoryResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.GetRobotPartHistoryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.GetRobotPartHistoryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.GetRobotPartHistoryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetRobotPartHistoryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    historyList: jspb.Message.toObjectList(msg.getHistoryList(),
    proto.viam.app.v1.RobotPartHistoryEntry.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.GetRobotPartHistoryResponse}
 */
proto.viam.app.v1.GetRobotPartHistoryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.GetRobotPartHistoryResponse;
  return proto.viam.app.v1.GetRobotPartHistoryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.GetRobotPartHistoryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.GetRobotPartHistoryResponse}
 */
proto.viam.app.v1.GetRobotPartHistoryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.RobotPartHistoryEntry;
      reader.readMessage(value,proto.viam.app.v1.RobotPartHistoryEntry.deserializeBinaryFromReader);
      msg.addHistory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.GetRobotPartHistoryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.GetRobotPartHistoryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.GetRobotPartHistoryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetRobotPartHistoryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHistoryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.app.v1.RobotPartHistoryEntry.serializeBinaryToWriter
    );
  }
};


/**
 * repeated RobotPartHistoryEntry history = 1;
 * @return {!Array<!proto.viam.app.v1.RobotPartHistoryEntry>}
 */
proto.viam.app.v1.GetRobotPartHistoryResponse.prototype.getHistoryList = function() {
  return /** @type{!Array<!proto.viam.app.v1.RobotPartHistoryEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.v1.RobotPartHistoryEntry, 1));
};


/**
 * @param {!Array<!proto.viam.app.v1.RobotPartHistoryEntry>} value
 * @return {!proto.viam.app.v1.GetRobotPartHistoryResponse} returns this
*/
proto.viam.app.v1.GetRobotPartHistoryResponse.prototype.setHistoryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.app.v1.RobotPartHistoryEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.v1.RobotPartHistoryEntry}
 */
proto.viam.app.v1.GetRobotPartHistoryResponse.prototype.addHistory = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.app.v1.RobotPartHistoryEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.v1.GetRobotPartHistoryResponse} returns this
 */
proto.viam.app.v1.GetRobotPartHistoryResponse.prototype.clearHistoryList = function() {
  return this.setHistoryList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.UpdateRobotPartRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.UpdateRobotPartRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.UpdateRobotPartRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.UpdateRobotPartRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    robotConfig: (f = msg.getRobotConfig()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.UpdateRobotPartRequest}
 */
proto.viam.app.v1.UpdateRobotPartRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.UpdateRobotPartRequest;
  return proto.viam.app.v1.UpdateRobotPartRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.UpdateRobotPartRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.UpdateRobotPartRequest}
 */
proto.viam.app.v1.UpdateRobotPartRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setRobotConfig(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.UpdateRobotPartRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.UpdateRobotPartRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.UpdateRobotPartRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.UpdateRobotPartRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRobotConfig();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.viam.app.v1.UpdateRobotPartRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.UpdateRobotPartRequest} returns this
 */
proto.viam.app.v1.UpdateRobotPartRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.viam.app.v1.UpdateRobotPartRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.UpdateRobotPartRequest} returns this
 */
proto.viam.app.v1.UpdateRobotPartRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct robot_config = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.app.v1.UpdateRobotPartRequest.prototype.getRobotConfig = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.app.v1.UpdateRobotPartRequest} returns this
*/
proto.viam.app.v1.UpdateRobotPartRequest.prototype.setRobotConfig = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.UpdateRobotPartRequest} returns this
 */
proto.viam.app.v1.UpdateRobotPartRequest.prototype.clearRobotConfig = function() {
  return this.setRobotConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.UpdateRobotPartRequest.prototype.hasRobotConfig = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.UpdateRobotPartResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.UpdateRobotPartResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.UpdateRobotPartResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.UpdateRobotPartResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    part: (f = msg.getPart()) && proto.viam.app.v1.RobotPart.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.UpdateRobotPartResponse}
 */
proto.viam.app.v1.UpdateRobotPartResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.UpdateRobotPartResponse;
  return proto.viam.app.v1.UpdateRobotPartResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.UpdateRobotPartResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.UpdateRobotPartResponse}
 */
proto.viam.app.v1.UpdateRobotPartResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.RobotPart;
      reader.readMessage(value,proto.viam.app.v1.RobotPart.deserializeBinaryFromReader);
      msg.setPart(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.UpdateRobotPartResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.UpdateRobotPartResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.UpdateRobotPartResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.UpdateRobotPartResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPart();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.app.v1.RobotPart.serializeBinaryToWriter
    );
  }
};


/**
 * optional RobotPart part = 1;
 * @return {?proto.viam.app.v1.RobotPart}
 */
proto.viam.app.v1.UpdateRobotPartResponse.prototype.getPart = function() {
  return /** @type{?proto.viam.app.v1.RobotPart} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.v1.RobotPart, 1));
};


/**
 * @param {?proto.viam.app.v1.RobotPart|undefined} value
 * @return {!proto.viam.app.v1.UpdateRobotPartResponse} returns this
*/
proto.viam.app.v1.UpdateRobotPartResponse.prototype.setPart = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.UpdateRobotPartResponse} returns this
 */
proto.viam.app.v1.UpdateRobotPartResponse.prototype.clearPart = function() {
  return this.setPart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.UpdateRobotPartResponse.prototype.hasPart = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.NewRobotPartRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.NewRobotPartRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.NewRobotPartRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.NewRobotPartRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    robotId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    partName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.NewRobotPartRequest}
 */
proto.viam.app.v1.NewRobotPartRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.NewRobotPartRequest;
  return proto.viam.app.v1.NewRobotPartRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.NewRobotPartRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.NewRobotPartRequest}
 */
proto.viam.app.v1.NewRobotPartRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRobotId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.NewRobotPartRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.NewRobotPartRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.NewRobotPartRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.NewRobotPartRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRobotId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPartName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string robot_id = 1;
 * @return {string}
 */
proto.viam.app.v1.NewRobotPartRequest.prototype.getRobotId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.NewRobotPartRequest} returns this
 */
proto.viam.app.v1.NewRobotPartRequest.prototype.setRobotId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string part_name = 2;
 * @return {string}
 */
proto.viam.app.v1.NewRobotPartRequest.prototype.getPartName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.NewRobotPartRequest} returns this
 */
proto.viam.app.v1.NewRobotPartRequest.prototype.setPartName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.NewRobotPartResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.NewRobotPartResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.NewRobotPartResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.NewRobotPartResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    partId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.NewRobotPartResponse}
 */
proto.viam.app.v1.NewRobotPartResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.NewRobotPartResponse;
  return proto.viam.app.v1.NewRobotPartResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.NewRobotPartResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.NewRobotPartResponse}
 */
proto.viam.app.v1.NewRobotPartResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.NewRobotPartResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.NewRobotPartResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.NewRobotPartResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.NewRobotPartResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string part_id = 1;
 * @return {string}
 */
proto.viam.app.v1.NewRobotPartResponse.prototype.getPartId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.NewRobotPartResponse} returns this
 */
proto.viam.app.v1.NewRobotPartResponse.prototype.setPartId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.DeleteRobotPartRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.DeleteRobotPartRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.DeleteRobotPartRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.DeleteRobotPartRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    partId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.DeleteRobotPartRequest}
 */
proto.viam.app.v1.DeleteRobotPartRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.DeleteRobotPartRequest;
  return proto.viam.app.v1.DeleteRobotPartRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.DeleteRobotPartRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.DeleteRobotPartRequest}
 */
proto.viam.app.v1.DeleteRobotPartRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.DeleteRobotPartRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.DeleteRobotPartRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.DeleteRobotPartRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.DeleteRobotPartRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string part_id = 1;
 * @return {string}
 */
proto.viam.app.v1.DeleteRobotPartRequest.prototype.getPartId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.DeleteRobotPartRequest} returns this
 */
proto.viam.app.v1.DeleteRobotPartRequest.prototype.setPartId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.DeleteRobotPartResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.DeleteRobotPartResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.DeleteRobotPartResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.DeleteRobotPartResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.DeleteRobotPartResponse}
 */
proto.viam.app.v1.DeleteRobotPartResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.DeleteRobotPartResponse;
  return proto.viam.app.v1.DeleteRobotPartResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.DeleteRobotPartResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.DeleteRobotPartResponse}
 */
proto.viam.app.v1.DeleteRobotPartResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.DeleteRobotPartResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.DeleteRobotPartResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.DeleteRobotPartResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.DeleteRobotPartResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.Fragment.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.Fragment.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.Fragment} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.Fragment.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fragment: (f = msg.getFragment()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    organizationOwner: jspb.Message.getFieldWithDefault(msg, 4, ""),
    pb_public: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    createdOn: (f = msg.getCreatedOn()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    organizationName: jspb.Message.getFieldWithDefault(msg, 7, ""),
    robotPartCount: jspb.Message.getFieldWithDefault(msg, 9, 0),
    organizationCount: jspb.Message.getFieldWithDefault(msg, 10, 0),
    onlyUsedByOwner: jspb.Message.getBooleanFieldWithDefault(msg, 11, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.Fragment}
 */
proto.viam.app.v1.Fragment.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.Fragment;
  return proto.viam.app.v1.Fragment.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.Fragment} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.Fragment}
 */
proto.viam.app.v1.Fragment.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setFragment(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationOwner(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPublic(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedOn(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationName(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRobotPartCount(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOrganizationCount(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOnlyUsedByOwner(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.Fragment.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.Fragment.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.Fragment} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.Fragment.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFragment();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getOrganizationOwner();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPublic();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getCreatedOn();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getOrganizationName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getRobotPartCount();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getOrganizationCount();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getOnlyUsedByOwner();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.viam.app.v1.Fragment.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.Fragment} returns this
 */
proto.viam.app.v1.Fragment.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.viam.app.v1.Fragment.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.Fragment} returns this
 */
proto.viam.app.v1.Fragment.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct fragment = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.app.v1.Fragment.prototype.getFragment = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.app.v1.Fragment} returns this
*/
proto.viam.app.v1.Fragment.prototype.setFragment = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.Fragment} returns this
 */
proto.viam.app.v1.Fragment.prototype.clearFragment = function() {
  return this.setFragment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.Fragment.prototype.hasFragment = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string organization_owner = 4;
 * @return {string}
 */
proto.viam.app.v1.Fragment.prototype.getOrganizationOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.Fragment} returns this
 */
proto.viam.app.v1.Fragment.prototype.setOrganizationOwner = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool public = 5;
 * @return {boolean}
 */
proto.viam.app.v1.Fragment.prototype.getPublic = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.viam.app.v1.Fragment} returns this
 */
proto.viam.app.v1.Fragment.prototype.setPublic = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp created_on = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.viam.app.v1.Fragment.prototype.getCreatedOn = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.viam.app.v1.Fragment} returns this
*/
proto.viam.app.v1.Fragment.prototype.setCreatedOn = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.Fragment} returns this
 */
proto.viam.app.v1.Fragment.prototype.clearCreatedOn = function() {
  return this.setCreatedOn(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.Fragment.prototype.hasCreatedOn = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string organization_name = 7;
 * @return {string}
 */
proto.viam.app.v1.Fragment.prototype.getOrganizationName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.Fragment} returns this
 */
proto.viam.app.v1.Fragment.prototype.setOrganizationName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int32 robot_part_count = 9;
 * @return {number}
 */
proto.viam.app.v1.Fragment.prototype.getRobotPartCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.viam.app.v1.Fragment} returns this
 */
proto.viam.app.v1.Fragment.prototype.setRobotPartCount = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int32 organization_count = 10;
 * @return {number}
 */
proto.viam.app.v1.Fragment.prototype.getOrganizationCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.viam.app.v1.Fragment} returns this
 */
proto.viam.app.v1.Fragment.prototype.setOrganizationCount = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional bool only_used_by_owner = 11;
 * @return {boolean}
 */
proto.viam.app.v1.Fragment.prototype.getOnlyUsedByOwner = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.viam.app.v1.Fragment} returns this
 */
proto.viam.app.v1.Fragment.prototype.setOnlyUsedByOwner = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.ListFragmentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.ListFragmentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.ListFragmentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ListFragmentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    showPublic: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.ListFragmentsRequest}
 */
proto.viam.app.v1.ListFragmentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.ListFragmentsRequest;
  return proto.viam.app.v1.ListFragmentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.ListFragmentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.ListFragmentsRequest}
 */
proto.viam.app.v1.ListFragmentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setShowPublic(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.ListFragmentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.ListFragmentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.ListFragmentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ListFragmentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getShowPublic();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.viam.app.v1.ListFragmentsRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.ListFragmentsRequest} returns this
 */
proto.viam.app.v1.ListFragmentsRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool show_public = 2;
 * @return {boolean}
 */
proto.viam.app.v1.ListFragmentsRequest.prototype.getShowPublic = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.viam.app.v1.ListFragmentsRequest} returns this
 */
proto.viam.app.v1.ListFragmentsRequest.prototype.setShowPublic = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.v1.ListFragmentsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.ListFragmentsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.ListFragmentsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.ListFragmentsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ListFragmentsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    fragmentsList: jspb.Message.toObjectList(msg.getFragmentsList(),
    proto.viam.app.v1.Fragment.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.ListFragmentsResponse}
 */
proto.viam.app.v1.ListFragmentsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.ListFragmentsResponse;
  return proto.viam.app.v1.ListFragmentsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.ListFragmentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.ListFragmentsResponse}
 */
proto.viam.app.v1.ListFragmentsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.Fragment;
      reader.readMessage(value,proto.viam.app.v1.Fragment.deserializeBinaryFromReader);
      msg.addFragments(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.ListFragmentsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.ListFragmentsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.ListFragmentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ListFragmentsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFragmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.app.v1.Fragment.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Fragment fragments = 1;
 * @return {!Array<!proto.viam.app.v1.Fragment>}
 */
proto.viam.app.v1.ListFragmentsResponse.prototype.getFragmentsList = function() {
  return /** @type{!Array<!proto.viam.app.v1.Fragment>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.v1.Fragment, 1));
};


/**
 * @param {!Array<!proto.viam.app.v1.Fragment>} value
 * @return {!proto.viam.app.v1.ListFragmentsResponse} returns this
*/
proto.viam.app.v1.ListFragmentsResponse.prototype.setFragmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.app.v1.Fragment=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.v1.Fragment}
 */
proto.viam.app.v1.ListFragmentsResponse.prototype.addFragments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.app.v1.Fragment, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.v1.ListFragmentsResponse} returns this
 */
proto.viam.app.v1.ListFragmentsResponse.prototype.clearFragmentsList = function() {
  return this.setFragmentsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.GetFragmentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.GetFragmentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.GetFragmentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetFragmentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.GetFragmentRequest}
 */
proto.viam.app.v1.GetFragmentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.GetFragmentRequest;
  return proto.viam.app.v1.GetFragmentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.GetFragmentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.GetFragmentRequest}
 */
proto.viam.app.v1.GetFragmentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.GetFragmentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.GetFragmentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.GetFragmentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetFragmentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.viam.app.v1.GetFragmentRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.GetFragmentRequest} returns this
 */
proto.viam.app.v1.GetFragmentRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.GetFragmentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.GetFragmentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.GetFragmentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetFragmentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    fragment: (f = msg.getFragment()) && proto.viam.app.v1.Fragment.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.GetFragmentResponse}
 */
proto.viam.app.v1.GetFragmentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.GetFragmentResponse;
  return proto.viam.app.v1.GetFragmentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.GetFragmentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.GetFragmentResponse}
 */
proto.viam.app.v1.GetFragmentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.Fragment;
      reader.readMessage(value,proto.viam.app.v1.Fragment.deserializeBinaryFromReader);
      msg.setFragment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.GetFragmentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.GetFragmentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.GetFragmentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetFragmentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFragment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.app.v1.Fragment.serializeBinaryToWriter
    );
  }
};


/**
 * optional Fragment fragment = 1;
 * @return {?proto.viam.app.v1.Fragment}
 */
proto.viam.app.v1.GetFragmentResponse.prototype.getFragment = function() {
  return /** @type{?proto.viam.app.v1.Fragment} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.v1.Fragment, 1));
};


/**
 * @param {?proto.viam.app.v1.Fragment|undefined} value
 * @return {!proto.viam.app.v1.GetFragmentResponse} returns this
*/
proto.viam.app.v1.GetFragmentResponse.prototype.setFragment = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.GetFragmentResponse} returns this
 */
proto.viam.app.v1.GetFragmentResponse.prototype.clearFragment = function() {
  return this.setFragment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.GetFragmentResponse.prototype.hasFragment = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.CreateFragmentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.CreateFragmentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.CreateFragmentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.CreateFragmentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    config: (f = msg.getConfig()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    organizationId: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.CreateFragmentRequest}
 */
proto.viam.app.v1.CreateFragmentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.CreateFragmentRequest;
  return proto.viam.app.v1.CreateFragmentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.CreateFragmentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.CreateFragmentRequest}
 */
proto.viam.app.v1.CreateFragmentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.CreateFragmentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.CreateFragmentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.CreateFragmentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.CreateFragmentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.viam.app.v1.CreateFragmentRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.CreateFragmentRequest} returns this
 */
proto.viam.app.v1.CreateFragmentRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Struct config = 2;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.app.v1.CreateFragmentRequest.prototype.getConfig = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 2));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.app.v1.CreateFragmentRequest} returns this
*/
proto.viam.app.v1.CreateFragmentRequest.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.CreateFragmentRequest} returns this
 */
proto.viam.app.v1.CreateFragmentRequest.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.CreateFragmentRequest.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string organization_id = 3;
 * @return {string}
 */
proto.viam.app.v1.CreateFragmentRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.CreateFragmentRequest} returns this
 */
proto.viam.app.v1.CreateFragmentRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.CreateFragmentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.CreateFragmentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.CreateFragmentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.CreateFragmentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    fragment: (f = msg.getFragment()) && proto.viam.app.v1.Fragment.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.CreateFragmentResponse}
 */
proto.viam.app.v1.CreateFragmentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.CreateFragmentResponse;
  return proto.viam.app.v1.CreateFragmentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.CreateFragmentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.CreateFragmentResponse}
 */
proto.viam.app.v1.CreateFragmentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.Fragment;
      reader.readMessage(value,proto.viam.app.v1.Fragment.deserializeBinaryFromReader);
      msg.setFragment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.CreateFragmentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.CreateFragmentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.CreateFragmentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.CreateFragmentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFragment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.app.v1.Fragment.serializeBinaryToWriter
    );
  }
};


/**
 * optional Fragment fragment = 1;
 * @return {?proto.viam.app.v1.Fragment}
 */
proto.viam.app.v1.CreateFragmentResponse.prototype.getFragment = function() {
  return /** @type{?proto.viam.app.v1.Fragment} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.v1.Fragment, 1));
};


/**
 * @param {?proto.viam.app.v1.Fragment|undefined} value
 * @return {!proto.viam.app.v1.CreateFragmentResponse} returns this
*/
proto.viam.app.v1.CreateFragmentResponse.prototype.setFragment = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.CreateFragmentResponse} returns this
 */
proto.viam.app.v1.CreateFragmentResponse.prototype.clearFragment = function() {
  return this.setFragment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.CreateFragmentResponse.prototype.hasFragment = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.UpdateFragmentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.UpdateFragmentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.UpdateFragmentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.UpdateFragmentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    config: (f = msg.getConfig()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    pb_public: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.UpdateFragmentRequest}
 */
proto.viam.app.v1.UpdateFragmentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.UpdateFragmentRequest;
  return proto.viam.app.v1.UpdateFragmentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.UpdateFragmentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.UpdateFragmentRequest}
 */
proto.viam.app.v1.UpdateFragmentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setConfig(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPublic(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.UpdateFragmentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.UpdateFragmentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.UpdateFragmentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.UpdateFragmentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getConfig();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.viam.app.v1.UpdateFragmentRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.UpdateFragmentRequest} returns this
 */
proto.viam.app.v1.UpdateFragmentRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.viam.app.v1.UpdateFragmentRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.UpdateFragmentRequest} returns this
 */
proto.viam.app.v1.UpdateFragmentRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct config = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.viam.app.v1.UpdateFragmentRequest.prototype.getConfig = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.viam.app.v1.UpdateFragmentRequest} returns this
*/
proto.viam.app.v1.UpdateFragmentRequest.prototype.setConfig = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.UpdateFragmentRequest} returns this
 */
proto.viam.app.v1.UpdateFragmentRequest.prototype.clearConfig = function() {
  return this.setConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.UpdateFragmentRequest.prototype.hasConfig = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool public = 4;
 * @return {boolean}
 */
proto.viam.app.v1.UpdateFragmentRequest.prototype.getPublic = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.viam.app.v1.UpdateFragmentRequest} returns this
 */
proto.viam.app.v1.UpdateFragmentRequest.prototype.setPublic = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.app.v1.UpdateFragmentRequest} returns this
 */
proto.viam.app.v1.UpdateFragmentRequest.prototype.clearPublic = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.UpdateFragmentRequest.prototype.hasPublic = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.UpdateFragmentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.UpdateFragmentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.UpdateFragmentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.UpdateFragmentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    fragment: (f = msg.getFragment()) && proto.viam.app.v1.Fragment.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.UpdateFragmentResponse}
 */
proto.viam.app.v1.UpdateFragmentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.UpdateFragmentResponse;
  return proto.viam.app.v1.UpdateFragmentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.UpdateFragmentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.UpdateFragmentResponse}
 */
proto.viam.app.v1.UpdateFragmentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.Fragment;
      reader.readMessage(value,proto.viam.app.v1.Fragment.deserializeBinaryFromReader);
      msg.setFragment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.UpdateFragmentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.UpdateFragmentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.UpdateFragmentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.UpdateFragmentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFragment();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.app.v1.Fragment.serializeBinaryToWriter
    );
  }
};


/**
 * optional Fragment fragment = 1;
 * @return {?proto.viam.app.v1.Fragment}
 */
proto.viam.app.v1.UpdateFragmentResponse.prototype.getFragment = function() {
  return /** @type{?proto.viam.app.v1.Fragment} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.v1.Fragment, 1));
};


/**
 * @param {?proto.viam.app.v1.Fragment|undefined} value
 * @return {!proto.viam.app.v1.UpdateFragmentResponse} returns this
*/
proto.viam.app.v1.UpdateFragmentResponse.prototype.setFragment = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.UpdateFragmentResponse} returns this
 */
proto.viam.app.v1.UpdateFragmentResponse.prototype.clearFragment = function() {
  return this.setFragment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.UpdateFragmentResponse.prototype.hasFragment = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.DeleteFragmentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.DeleteFragmentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.DeleteFragmentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.DeleteFragmentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.DeleteFragmentRequest}
 */
proto.viam.app.v1.DeleteFragmentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.DeleteFragmentRequest;
  return proto.viam.app.v1.DeleteFragmentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.DeleteFragmentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.DeleteFragmentRequest}
 */
proto.viam.app.v1.DeleteFragmentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.DeleteFragmentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.DeleteFragmentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.DeleteFragmentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.DeleteFragmentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.viam.app.v1.DeleteFragmentRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.DeleteFragmentRequest} returns this
 */
proto.viam.app.v1.DeleteFragmentRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.DeleteFragmentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.DeleteFragmentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.DeleteFragmentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.DeleteFragmentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.DeleteFragmentResponse}
 */
proto.viam.app.v1.DeleteFragmentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.DeleteFragmentResponse;
  return proto.viam.app.v1.DeleteFragmentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.DeleteFragmentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.DeleteFragmentResponse}
 */
proto.viam.app.v1.DeleteFragmentResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.DeleteFragmentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.DeleteFragmentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.DeleteFragmentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.DeleteFragmentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.ListRobotsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.ListRobotsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.ListRobotsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ListRobotsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    locationId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.ListRobotsRequest}
 */
proto.viam.app.v1.ListRobotsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.ListRobotsRequest;
  return proto.viam.app.v1.ListRobotsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.ListRobotsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.ListRobotsRequest}
 */
proto.viam.app.v1.ListRobotsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.ListRobotsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.ListRobotsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.ListRobotsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ListRobotsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLocationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string location_id = 1;
 * @return {string}
 */
proto.viam.app.v1.ListRobotsRequest.prototype.getLocationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.ListRobotsRequest} returns this
 */
proto.viam.app.v1.ListRobotsRequest.prototype.setLocationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.v1.ListRobotsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.ListRobotsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.ListRobotsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.ListRobotsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ListRobotsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    robotsList: jspb.Message.toObjectList(msg.getRobotsList(),
    proto.viam.app.v1.Robot.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.ListRobotsResponse}
 */
proto.viam.app.v1.ListRobotsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.ListRobotsResponse;
  return proto.viam.app.v1.ListRobotsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.ListRobotsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.ListRobotsResponse}
 */
proto.viam.app.v1.ListRobotsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.Robot;
      reader.readMessage(value,proto.viam.app.v1.Robot.deserializeBinaryFromReader);
      msg.addRobots(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.ListRobotsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.ListRobotsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.ListRobotsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ListRobotsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRobotsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.app.v1.Robot.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Robot robots = 1;
 * @return {!Array<!proto.viam.app.v1.Robot>}
 */
proto.viam.app.v1.ListRobotsResponse.prototype.getRobotsList = function() {
  return /** @type{!Array<!proto.viam.app.v1.Robot>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.v1.Robot, 1));
};


/**
 * @param {!Array<!proto.viam.app.v1.Robot>} value
 * @return {!proto.viam.app.v1.ListRobotsResponse} returns this
*/
proto.viam.app.v1.ListRobotsResponse.prototype.setRobotsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.app.v1.Robot=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.v1.Robot}
 */
proto.viam.app.v1.ListRobotsResponse.prototype.addRobots = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.app.v1.Robot, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.v1.ListRobotsResponse} returns this
 */
proto.viam.app.v1.ListRobotsResponse.prototype.clearRobotsList = function() {
  return this.setRobotsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.NewRobotRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.NewRobotRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.NewRobotRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.NewRobotRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    location: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.NewRobotRequest}
 */
proto.viam.app.v1.NewRobotRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.NewRobotRequest;
  return proto.viam.app.v1.NewRobotRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.NewRobotRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.NewRobotRequest}
 */
proto.viam.app.v1.NewRobotRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.NewRobotRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.NewRobotRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.NewRobotRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.NewRobotRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLocation();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.viam.app.v1.NewRobotRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.NewRobotRequest} returns this
 */
proto.viam.app.v1.NewRobotRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string location = 2;
 * @return {string}
 */
proto.viam.app.v1.NewRobotRequest.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.NewRobotRequest} returns this
 */
proto.viam.app.v1.NewRobotRequest.prototype.setLocation = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.NewRobotResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.NewRobotResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.NewRobotResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.NewRobotResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.NewRobotResponse}
 */
proto.viam.app.v1.NewRobotResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.NewRobotResponse;
  return proto.viam.app.v1.NewRobotResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.NewRobotResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.NewRobotResponse}
 */
proto.viam.app.v1.NewRobotResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.NewRobotResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.NewRobotResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.NewRobotResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.NewRobotResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.viam.app.v1.NewRobotResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.NewRobotResponse} returns this
 */
proto.viam.app.v1.NewRobotResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.UpdateRobotRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.UpdateRobotRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.UpdateRobotRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.UpdateRobotRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    location: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.UpdateRobotRequest}
 */
proto.viam.app.v1.UpdateRobotRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.UpdateRobotRequest;
  return proto.viam.app.v1.UpdateRobotRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.UpdateRobotRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.UpdateRobotRequest}
 */
proto.viam.app.v1.UpdateRobotRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.UpdateRobotRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.UpdateRobotRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.UpdateRobotRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.UpdateRobotRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLocation();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.viam.app.v1.UpdateRobotRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.UpdateRobotRequest} returns this
 */
proto.viam.app.v1.UpdateRobotRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.viam.app.v1.UpdateRobotRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.UpdateRobotRequest} returns this
 */
proto.viam.app.v1.UpdateRobotRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string location = 3;
 * @return {string}
 */
proto.viam.app.v1.UpdateRobotRequest.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.UpdateRobotRequest} returns this
 */
proto.viam.app.v1.UpdateRobotRequest.prototype.setLocation = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.UpdateRobotResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.UpdateRobotResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.UpdateRobotResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.UpdateRobotResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    robot: (f = msg.getRobot()) && proto.viam.app.v1.Robot.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.UpdateRobotResponse}
 */
proto.viam.app.v1.UpdateRobotResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.UpdateRobotResponse;
  return proto.viam.app.v1.UpdateRobotResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.UpdateRobotResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.UpdateRobotResponse}
 */
proto.viam.app.v1.UpdateRobotResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.Robot;
      reader.readMessage(value,proto.viam.app.v1.Robot.deserializeBinaryFromReader);
      msg.setRobot(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.UpdateRobotResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.UpdateRobotResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.UpdateRobotResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.UpdateRobotResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRobot();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.app.v1.Robot.serializeBinaryToWriter
    );
  }
};


/**
 * optional Robot robot = 1;
 * @return {?proto.viam.app.v1.Robot}
 */
proto.viam.app.v1.UpdateRobotResponse.prototype.getRobot = function() {
  return /** @type{?proto.viam.app.v1.Robot} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.v1.Robot, 1));
};


/**
 * @param {?proto.viam.app.v1.Robot|undefined} value
 * @return {!proto.viam.app.v1.UpdateRobotResponse} returns this
*/
proto.viam.app.v1.UpdateRobotResponse.prototype.setRobot = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.UpdateRobotResponse} returns this
 */
proto.viam.app.v1.UpdateRobotResponse.prototype.clearRobot = function() {
  return this.setRobot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.UpdateRobotResponse.prototype.hasRobot = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.DeleteRobotRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.DeleteRobotRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.DeleteRobotRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.DeleteRobotRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.DeleteRobotRequest}
 */
proto.viam.app.v1.DeleteRobotRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.DeleteRobotRequest;
  return proto.viam.app.v1.DeleteRobotRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.DeleteRobotRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.DeleteRobotRequest}
 */
proto.viam.app.v1.DeleteRobotRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.DeleteRobotRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.DeleteRobotRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.DeleteRobotRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.DeleteRobotRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.viam.app.v1.DeleteRobotRequest.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.DeleteRobotRequest} returns this
 */
proto.viam.app.v1.DeleteRobotRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.DeleteRobotResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.DeleteRobotResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.DeleteRobotResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.DeleteRobotResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.DeleteRobotResponse}
 */
proto.viam.app.v1.DeleteRobotResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.DeleteRobotResponse;
  return proto.viam.app.v1.DeleteRobotResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.DeleteRobotResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.DeleteRobotResponse}
 */
proto.viam.app.v1.DeleteRobotResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.DeleteRobotResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.DeleteRobotResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.DeleteRobotResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.DeleteRobotResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.MarkPartAsMainRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.MarkPartAsMainRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.MarkPartAsMainRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.MarkPartAsMainRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    partId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.MarkPartAsMainRequest}
 */
proto.viam.app.v1.MarkPartAsMainRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.MarkPartAsMainRequest;
  return proto.viam.app.v1.MarkPartAsMainRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.MarkPartAsMainRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.MarkPartAsMainRequest}
 */
proto.viam.app.v1.MarkPartAsMainRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.MarkPartAsMainRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.MarkPartAsMainRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.MarkPartAsMainRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.MarkPartAsMainRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string part_id = 1;
 * @return {string}
 */
proto.viam.app.v1.MarkPartAsMainRequest.prototype.getPartId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.MarkPartAsMainRequest} returns this
 */
proto.viam.app.v1.MarkPartAsMainRequest.prototype.setPartId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.MarkPartAsMainResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.MarkPartAsMainResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.MarkPartAsMainResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.MarkPartAsMainResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.MarkPartAsMainResponse}
 */
proto.viam.app.v1.MarkPartAsMainResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.MarkPartAsMainResponse;
  return proto.viam.app.v1.MarkPartAsMainResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.MarkPartAsMainResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.MarkPartAsMainResponse}
 */
proto.viam.app.v1.MarkPartAsMainResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.MarkPartAsMainResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.MarkPartAsMainResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.MarkPartAsMainResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.MarkPartAsMainResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.MarkPartForRestartRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.MarkPartForRestartRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.MarkPartForRestartRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.MarkPartForRestartRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    partId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.MarkPartForRestartRequest}
 */
proto.viam.app.v1.MarkPartForRestartRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.MarkPartForRestartRequest;
  return proto.viam.app.v1.MarkPartForRestartRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.MarkPartForRestartRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.MarkPartForRestartRequest}
 */
proto.viam.app.v1.MarkPartForRestartRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.MarkPartForRestartRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.MarkPartForRestartRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.MarkPartForRestartRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.MarkPartForRestartRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string part_id = 1;
 * @return {string}
 */
proto.viam.app.v1.MarkPartForRestartRequest.prototype.getPartId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.MarkPartForRestartRequest} returns this
 */
proto.viam.app.v1.MarkPartForRestartRequest.prototype.setPartId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.MarkPartForRestartResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.MarkPartForRestartResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.MarkPartForRestartResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.MarkPartForRestartResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.MarkPartForRestartResponse}
 */
proto.viam.app.v1.MarkPartForRestartResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.MarkPartForRestartResponse;
  return proto.viam.app.v1.MarkPartForRestartResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.MarkPartForRestartResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.MarkPartForRestartResponse}
 */
proto.viam.app.v1.MarkPartForRestartResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.MarkPartForRestartResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.MarkPartForRestartResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.MarkPartForRestartResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.MarkPartForRestartResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.CreateRobotPartSecretRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.CreateRobotPartSecretRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.CreateRobotPartSecretRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.CreateRobotPartSecretRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    partId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.CreateRobotPartSecretRequest}
 */
proto.viam.app.v1.CreateRobotPartSecretRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.CreateRobotPartSecretRequest;
  return proto.viam.app.v1.CreateRobotPartSecretRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.CreateRobotPartSecretRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.CreateRobotPartSecretRequest}
 */
proto.viam.app.v1.CreateRobotPartSecretRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.CreateRobotPartSecretRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.CreateRobotPartSecretRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.CreateRobotPartSecretRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.CreateRobotPartSecretRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string part_id = 1;
 * @return {string}
 */
proto.viam.app.v1.CreateRobotPartSecretRequest.prototype.getPartId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.CreateRobotPartSecretRequest} returns this
 */
proto.viam.app.v1.CreateRobotPartSecretRequest.prototype.setPartId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.CreateRobotPartSecretResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.CreateRobotPartSecretResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.CreateRobotPartSecretResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.CreateRobotPartSecretResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    part: (f = msg.getPart()) && proto.viam.app.v1.RobotPart.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.CreateRobotPartSecretResponse}
 */
proto.viam.app.v1.CreateRobotPartSecretResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.CreateRobotPartSecretResponse;
  return proto.viam.app.v1.CreateRobotPartSecretResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.CreateRobotPartSecretResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.CreateRobotPartSecretResponse}
 */
proto.viam.app.v1.CreateRobotPartSecretResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.RobotPart;
      reader.readMessage(value,proto.viam.app.v1.RobotPart.deserializeBinaryFromReader);
      msg.setPart(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.CreateRobotPartSecretResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.CreateRobotPartSecretResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.CreateRobotPartSecretResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.CreateRobotPartSecretResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPart();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.app.v1.RobotPart.serializeBinaryToWriter
    );
  }
};


/**
 * optional RobotPart part = 1;
 * @return {?proto.viam.app.v1.RobotPart}
 */
proto.viam.app.v1.CreateRobotPartSecretResponse.prototype.getPart = function() {
  return /** @type{?proto.viam.app.v1.RobotPart} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.v1.RobotPart, 1));
};


/**
 * @param {?proto.viam.app.v1.RobotPart|undefined} value
 * @return {!proto.viam.app.v1.CreateRobotPartSecretResponse} returns this
*/
proto.viam.app.v1.CreateRobotPartSecretResponse.prototype.setPart = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.CreateRobotPartSecretResponse} returns this
 */
proto.viam.app.v1.CreateRobotPartSecretResponse.prototype.clearPart = function() {
  return this.setPart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.CreateRobotPartSecretResponse.prototype.hasPart = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.DeleteRobotPartSecretRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.DeleteRobotPartSecretRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.DeleteRobotPartSecretRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.DeleteRobotPartSecretRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    partId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    secretId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.DeleteRobotPartSecretRequest}
 */
proto.viam.app.v1.DeleteRobotPartSecretRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.DeleteRobotPartSecretRequest;
  return proto.viam.app.v1.DeleteRobotPartSecretRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.DeleteRobotPartSecretRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.DeleteRobotPartSecretRequest}
 */
proto.viam.app.v1.DeleteRobotPartSecretRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPartId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecretId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.DeleteRobotPartSecretRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.DeleteRobotPartSecretRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.DeleteRobotPartSecretRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.DeleteRobotPartSecretRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSecretId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string part_id = 1;
 * @return {string}
 */
proto.viam.app.v1.DeleteRobotPartSecretRequest.prototype.getPartId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.DeleteRobotPartSecretRequest} returns this
 */
proto.viam.app.v1.DeleteRobotPartSecretRequest.prototype.setPartId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string secret_id = 2;
 * @return {string}
 */
proto.viam.app.v1.DeleteRobotPartSecretRequest.prototype.getSecretId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.DeleteRobotPartSecretRequest} returns this
 */
proto.viam.app.v1.DeleteRobotPartSecretRequest.prototype.setSecretId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.DeleteRobotPartSecretResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.DeleteRobotPartSecretResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.DeleteRobotPartSecretResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.DeleteRobotPartSecretResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.DeleteRobotPartSecretResponse}
 */
proto.viam.app.v1.DeleteRobotPartSecretResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.DeleteRobotPartSecretResponse;
  return proto.viam.app.v1.DeleteRobotPartSecretResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.DeleteRobotPartSecretResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.DeleteRobotPartSecretResponse}
 */
proto.viam.app.v1.DeleteRobotPartSecretResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.DeleteRobotPartSecretResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.DeleteRobotPartSecretResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.DeleteRobotPartSecretResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.DeleteRobotPartSecretResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.Authorization.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.Authorization.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.Authorization} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.Authorization.toObject = function(includeInstance, msg) {
  var f, obj = {
    authorizationType: jspb.Message.getFieldWithDefault(msg, 1, ""),
    authorizationId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    resourceType: jspb.Message.getFieldWithDefault(msg, 3, ""),
    resourceId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    identityId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    organizationId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    identityType: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.Authorization}
 */
proto.viam.app.v1.Authorization.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.Authorization;
  return proto.viam.app.v1.Authorization.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.Authorization} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.Authorization}
 */
proto.viam.app.v1.Authorization.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthorizationType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAuthorizationId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentityId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentityType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.Authorization.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.Authorization.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.Authorization} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.Authorization.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthorizationType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAuthorizationId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getResourceType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getResourceId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getIdentityId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getIdentityType();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string authorization_type = 1;
 * @return {string}
 */
proto.viam.app.v1.Authorization.prototype.getAuthorizationType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.Authorization} returns this
 */
proto.viam.app.v1.Authorization.prototype.setAuthorizationType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string authorization_id = 2;
 * @return {string}
 */
proto.viam.app.v1.Authorization.prototype.getAuthorizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.Authorization} returns this
 */
proto.viam.app.v1.Authorization.prototype.setAuthorizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string resource_type = 3;
 * @return {string}
 */
proto.viam.app.v1.Authorization.prototype.getResourceType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.Authorization} returns this
 */
proto.viam.app.v1.Authorization.prototype.setResourceType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string resource_id = 4;
 * @return {string}
 */
proto.viam.app.v1.Authorization.prototype.getResourceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.Authorization} returns this
 */
proto.viam.app.v1.Authorization.prototype.setResourceId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string identity_id = 5;
 * @return {string}
 */
proto.viam.app.v1.Authorization.prototype.getIdentityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.Authorization} returns this
 */
proto.viam.app.v1.Authorization.prototype.setIdentityId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string organization_id = 6;
 * @return {string}
 */
proto.viam.app.v1.Authorization.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.Authorization} returns this
 */
proto.viam.app.v1.Authorization.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string identity_type = 7;
 * @return {string}
 */
proto.viam.app.v1.Authorization.prototype.getIdentityType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.Authorization} returns this
 */
proto.viam.app.v1.Authorization.prototype.setIdentityType = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.AddRoleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.AddRoleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.AddRoleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.AddRoleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    authorization: (f = msg.getAuthorization()) && proto.viam.app.v1.Authorization.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.AddRoleRequest}
 */
proto.viam.app.v1.AddRoleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.AddRoleRequest;
  return proto.viam.app.v1.AddRoleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.AddRoleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.AddRoleRequest}
 */
proto.viam.app.v1.AddRoleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.Authorization;
      reader.readMessage(value,proto.viam.app.v1.Authorization.deserializeBinaryFromReader);
      msg.setAuthorization(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.AddRoleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.AddRoleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.AddRoleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.AddRoleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthorization();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.app.v1.Authorization.serializeBinaryToWriter
    );
  }
};


/**
 * optional Authorization authorization = 1;
 * @return {?proto.viam.app.v1.Authorization}
 */
proto.viam.app.v1.AddRoleRequest.prototype.getAuthorization = function() {
  return /** @type{?proto.viam.app.v1.Authorization} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.v1.Authorization, 1));
};


/**
 * @param {?proto.viam.app.v1.Authorization|undefined} value
 * @return {!proto.viam.app.v1.AddRoleRequest} returns this
*/
proto.viam.app.v1.AddRoleRequest.prototype.setAuthorization = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.AddRoleRequest} returns this
 */
proto.viam.app.v1.AddRoleRequest.prototype.clearAuthorization = function() {
  return this.setAuthorization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.AddRoleRequest.prototype.hasAuthorization = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.AddRoleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.AddRoleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.AddRoleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.AddRoleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.AddRoleResponse}
 */
proto.viam.app.v1.AddRoleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.AddRoleResponse;
  return proto.viam.app.v1.AddRoleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.AddRoleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.AddRoleResponse}
 */
proto.viam.app.v1.AddRoleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.AddRoleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.AddRoleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.AddRoleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.AddRoleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.RemoveRoleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.RemoveRoleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.RemoveRoleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.RemoveRoleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    authorization: (f = msg.getAuthorization()) && proto.viam.app.v1.Authorization.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.RemoveRoleRequest}
 */
proto.viam.app.v1.RemoveRoleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.RemoveRoleRequest;
  return proto.viam.app.v1.RemoveRoleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.RemoveRoleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.RemoveRoleRequest}
 */
proto.viam.app.v1.RemoveRoleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.Authorization;
      reader.readMessage(value,proto.viam.app.v1.Authorization.deserializeBinaryFromReader);
      msg.setAuthorization(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.RemoveRoleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.RemoveRoleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.RemoveRoleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.RemoveRoleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthorization();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.app.v1.Authorization.serializeBinaryToWriter
    );
  }
};


/**
 * optional Authorization authorization = 1;
 * @return {?proto.viam.app.v1.Authorization}
 */
proto.viam.app.v1.RemoveRoleRequest.prototype.getAuthorization = function() {
  return /** @type{?proto.viam.app.v1.Authorization} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.v1.Authorization, 1));
};


/**
 * @param {?proto.viam.app.v1.Authorization|undefined} value
 * @return {!proto.viam.app.v1.RemoveRoleRequest} returns this
*/
proto.viam.app.v1.RemoveRoleRequest.prototype.setAuthorization = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.RemoveRoleRequest} returns this
 */
proto.viam.app.v1.RemoveRoleRequest.prototype.clearAuthorization = function() {
  return this.setAuthorization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.RemoveRoleRequest.prototype.hasAuthorization = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.RemoveRoleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.RemoveRoleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.RemoveRoleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.RemoveRoleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.RemoveRoleResponse}
 */
proto.viam.app.v1.RemoveRoleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.RemoveRoleResponse;
  return proto.viam.app.v1.RemoveRoleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.RemoveRoleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.RemoveRoleResponse}
 */
proto.viam.app.v1.RemoveRoleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.RemoveRoleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.RemoveRoleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.RemoveRoleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.RemoveRoleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.ChangeRoleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.ChangeRoleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.ChangeRoleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ChangeRoleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    oldAuthorization: (f = msg.getOldAuthorization()) && proto.viam.app.v1.Authorization.toObject(includeInstance, f),
    newAuthorization: (f = msg.getNewAuthorization()) && proto.viam.app.v1.Authorization.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.ChangeRoleRequest}
 */
proto.viam.app.v1.ChangeRoleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.ChangeRoleRequest;
  return proto.viam.app.v1.ChangeRoleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.ChangeRoleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.ChangeRoleRequest}
 */
proto.viam.app.v1.ChangeRoleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.Authorization;
      reader.readMessage(value,proto.viam.app.v1.Authorization.deserializeBinaryFromReader);
      msg.setOldAuthorization(value);
      break;
    case 2:
      var value = new proto.viam.app.v1.Authorization;
      reader.readMessage(value,proto.viam.app.v1.Authorization.deserializeBinaryFromReader);
      msg.setNewAuthorization(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.ChangeRoleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.ChangeRoleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.ChangeRoleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ChangeRoleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOldAuthorization();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.app.v1.Authorization.serializeBinaryToWriter
    );
  }
  f = message.getNewAuthorization();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.viam.app.v1.Authorization.serializeBinaryToWriter
    );
  }
};


/**
 * optional Authorization old_authorization = 1;
 * @return {?proto.viam.app.v1.Authorization}
 */
proto.viam.app.v1.ChangeRoleRequest.prototype.getOldAuthorization = function() {
  return /** @type{?proto.viam.app.v1.Authorization} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.v1.Authorization, 1));
};


/**
 * @param {?proto.viam.app.v1.Authorization|undefined} value
 * @return {!proto.viam.app.v1.ChangeRoleRequest} returns this
*/
proto.viam.app.v1.ChangeRoleRequest.prototype.setOldAuthorization = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.ChangeRoleRequest} returns this
 */
proto.viam.app.v1.ChangeRoleRequest.prototype.clearOldAuthorization = function() {
  return this.setOldAuthorization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.ChangeRoleRequest.prototype.hasOldAuthorization = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Authorization new_authorization = 2;
 * @return {?proto.viam.app.v1.Authorization}
 */
proto.viam.app.v1.ChangeRoleRequest.prototype.getNewAuthorization = function() {
  return /** @type{?proto.viam.app.v1.Authorization} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.v1.Authorization, 2));
};


/**
 * @param {?proto.viam.app.v1.Authorization|undefined} value
 * @return {!proto.viam.app.v1.ChangeRoleRequest} returns this
*/
proto.viam.app.v1.ChangeRoleRequest.prototype.setNewAuthorization = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.ChangeRoleRequest} returns this
 */
proto.viam.app.v1.ChangeRoleRequest.prototype.clearNewAuthorization = function() {
  return this.setNewAuthorization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.ChangeRoleRequest.prototype.hasNewAuthorization = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.ChangeRoleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.ChangeRoleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.ChangeRoleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ChangeRoleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.ChangeRoleResponse}
 */
proto.viam.app.v1.ChangeRoleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.ChangeRoleResponse;
  return proto.viam.app.v1.ChangeRoleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.ChangeRoleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.ChangeRoleResponse}
 */
proto.viam.app.v1.ChangeRoleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.ChangeRoleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.ChangeRoleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.ChangeRoleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ChangeRoleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.v1.ListAuthorizationsRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.ListAuthorizationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.ListAuthorizationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.ListAuthorizationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ListAuthorizationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    resourceIdsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.ListAuthorizationsRequest}
 */
proto.viam.app.v1.ListAuthorizationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.ListAuthorizationsRequest;
  return proto.viam.app.v1.ListAuthorizationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.ListAuthorizationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.ListAuthorizationsRequest}
 */
proto.viam.app.v1.ListAuthorizationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addResourceIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.ListAuthorizationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.ListAuthorizationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.ListAuthorizationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ListAuthorizationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResourceIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.viam.app.v1.ListAuthorizationsRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.ListAuthorizationsRequest} returns this
 */
proto.viam.app.v1.ListAuthorizationsRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string resource_ids = 2;
 * @return {!Array<string>}
 */
proto.viam.app.v1.ListAuthorizationsRequest.prototype.getResourceIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.viam.app.v1.ListAuthorizationsRequest} returns this
 */
proto.viam.app.v1.ListAuthorizationsRequest.prototype.setResourceIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.viam.app.v1.ListAuthorizationsRequest} returns this
 */
proto.viam.app.v1.ListAuthorizationsRequest.prototype.addResourceIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.v1.ListAuthorizationsRequest} returns this
 */
proto.viam.app.v1.ListAuthorizationsRequest.prototype.clearResourceIdsList = function() {
  return this.setResourceIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.v1.ListAuthorizationsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.ListAuthorizationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.ListAuthorizationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.ListAuthorizationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ListAuthorizationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    authorizationsList: jspb.Message.toObjectList(msg.getAuthorizationsList(),
    proto.viam.app.v1.Authorization.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.ListAuthorizationsResponse}
 */
proto.viam.app.v1.ListAuthorizationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.ListAuthorizationsResponse;
  return proto.viam.app.v1.ListAuthorizationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.ListAuthorizationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.ListAuthorizationsResponse}
 */
proto.viam.app.v1.ListAuthorizationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.Authorization;
      reader.readMessage(value,proto.viam.app.v1.Authorization.deserializeBinaryFromReader);
      msg.addAuthorizations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.ListAuthorizationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.ListAuthorizationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.ListAuthorizationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ListAuthorizationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthorizationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.app.v1.Authorization.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Authorization authorizations = 1;
 * @return {!Array<!proto.viam.app.v1.Authorization>}
 */
proto.viam.app.v1.ListAuthorizationsResponse.prototype.getAuthorizationsList = function() {
  return /** @type{!Array<!proto.viam.app.v1.Authorization>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.v1.Authorization, 1));
};


/**
 * @param {!Array<!proto.viam.app.v1.Authorization>} value
 * @return {!proto.viam.app.v1.ListAuthorizationsResponse} returns this
*/
proto.viam.app.v1.ListAuthorizationsResponse.prototype.setAuthorizationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.app.v1.Authorization=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.v1.Authorization}
 */
proto.viam.app.v1.ListAuthorizationsResponse.prototype.addAuthorizations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.app.v1.Authorization, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.v1.ListAuthorizationsResponse} returns this
 */
proto.viam.app.v1.ListAuthorizationsResponse.prototype.clearAuthorizationsList = function() {
  return this.setAuthorizationsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.v1.CheckPermissionsRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.CheckPermissionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.CheckPermissionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.CheckPermissionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.CheckPermissionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    permissionsList: jspb.Message.toObjectList(msg.getPermissionsList(),
    proto.viam.app.v1.AuthorizedPermissions.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.CheckPermissionsRequest}
 */
proto.viam.app.v1.CheckPermissionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.CheckPermissionsRequest;
  return proto.viam.app.v1.CheckPermissionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.CheckPermissionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.CheckPermissionsRequest}
 */
proto.viam.app.v1.CheckPermissionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.AuthorizedPermissions;
      reader.readMessage(value,proto.viam.app.v1.AuthorizedPermissions.deserializeBinaryFromReader);
      msg.addPermissions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.CheckPermissionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.CheckPermissionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.CheckPermissionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.CheckPermissionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPermissionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.app.v1.AuthorizedPermissions.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AuthorizedPermissions permissions = 1;
 * @return {!Array<!proto.viam.app.v1.AuthorizedPermissions>}
 */
proto.viam.app.v1.CheckPermissionsRequest.prototype.getPermissionsList = function() {
  return /** @type{!Array<!proto.viam.app.v1.AuthorizedPermissions>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.v1.AuthorizedPermissions, 1));
};


/**
 * @param {!Array<!proto.viam.app.v1.AuthorizedPermissions>} value
 * @return {!proto.viam.app.v1.CheckPermissionsRequest} returns this
*/
proto.viam.app.v1.CheckPermissionsRequest.prototype.setPermissionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.app.v1.AuthorizedPermissions=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.v1.AuthorizedPermissions}
 */
proto.viam.app.v1.CheckPermissionsRequest.prototype.addPermissions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.app.v1.AuthorizedPermissions, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.v1.CheckPermissionsRequest} returns this
 */
proto.viam.app.v1.CheckPermissionsRequest.prototype.clearPermissionsList = function() {
  return this.setPermissionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.v1.AuthorizedPermissions.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.AuthorizedPermissions.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.AuthorizedPermissions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.AuthorizedPermissions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.AuthorizedPermissions.toObject = function(includeInstance, msg) {
  var f, obj = {
    resourceType: jspb.Message.getFieldWithDefault(msg, 1, ""),
    resourceId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    permissionsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.AuthorizedPermissions}
 */
proto.viam.app.v1.AuthorizedPermissions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.AuthorizedPermissions;
  return proto.viam.app.v1.AuthorizedPermissions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.AuthorizedPermissions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.AuthorizedPermissions}
 */
proto.viam.app.v1.AuthorizedPermissions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addPermissions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.AuthorizedPermissions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.AuthorizedPermissions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.AuthorizedPermissions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.AuthorizedPermissions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResourceType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getResourceId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPermissionsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional string resource_type = 1;
 * @return {string}
 */
proto.viam.app.v1.AuthorizedPermissions.prototype.getResourceType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.AuthorizedPermissions} returns this
 */
proto.viam.app.v1.AuthorizedPermissions.prototype.setResourceType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string resource_id = 2;
 * @return {string}
 */
proto.viam.app.v1.AuthorizedPermissions.prototype.getResourceId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.AuthorizedPermissions} returns this
 */
proto.viam.app.v1.AuthorizedPermissions.prototype.setResourceId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string permissions = 3;
 * @return {!Array<string>}
 */
proto.viam.app.v1.AuthorizedPermissions.prototype.getPermissionsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.viam.app.v1.AuthorizedPermissions} returns this
 */
proto.viam.app.v1.AuthorizedPermissions.prototype.setPermissionsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.viam.app.v1.AuthorizedPermissions} returns this
 */
proto.viam.app.v1.AuthorizedPermissions.prototype.addPermissions = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.v1.AuthorizedPermissions} returns this
 */
proto.viam.app.v1.AuthorizedPermissions.prototype.clearPermissionsList = function() {
  return this.setPermissionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.v1.CheckPermissionsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.CheckPermissionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.CheckPermissionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.CheckPermissionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.CheckPermissionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    authorizedPermissionsList: jspb.Message.toObjectList(msg.getAuthorizedPermissionsList(),
    proto.viam.app.v1.AuthorizedPermissions.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.CheckPermissionsResponse}
 */
proto.viam.app.v1.CheckPermissionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.CheckPermissionsResponse;
  return proto.viam.app.v1.CheckPermissionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.CheckPermissionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.CheckPermissionsResponse}
 */
proto.viam.app.v1.CheckPermissionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.AuthorizedPermissions;
      reader.readMessage(value,proto.viam.app.v1.AuthorizedPermissions.deserializeBinaryFromReader);
      msg.addAuthorizedPermissions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.CheckPermissionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.CheckPermissionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.CheckPermissionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.CheckPermissionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthorizedPermissionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.app.v1.AuthorizedPermissions.serializeBinaryToWriter
    );
  }
};


/**
 * repeated AuthorizedPermissions authorized_permissions = 1;
 * @return {!Array<!proto.viam.app.v1.AuthorizedPermissions>}
 */
proto.viam.app.v1.CheckPermissionsResponse.prototype.getAuthorizedPermissionsList = function() {
  return /** @type{!Array<!proto.viam.app.v1.AuthorizedPermissions>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.v1.AuthorizedPermissions, 1));
};


/**
 * @param {!Array<!proto.viam.app.v1.AuthorizedPermissions>} value
 * @return {!proto.viam.app.v1.CheckPermissionsResponse} returns this
*/
proto.viam.app.v1.CheckPermissionsResponse.prototype.setAuthorizedPermissionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.app.v1.AuthorizedPermissions=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.v1.AuthorizedPermissions}
 */
proto.viam.app.v1.CheckPermissionsResponse.prototype.addAuthorizedPermissions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.app.v1.AuthorizedPermissions, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.v1.CheckPermissionsResponse} returns this
 */
proto.viam.app.v1.CheckPermissionsResponse.prototype.clearAuthorizedPermissionsList = function() {
  return this.setAuthorizedPermissionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.CreateModuleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.CreateModuleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.CreateModuleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.CreateModuleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.CreateModuleRequest}
 */
proto.viam.app.v1.CreateModuleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.CreateModuleRequest;
  return proto.viam.app.v1.CreateModuleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.CreateModuleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.CreateModuleRequest}
 */
proto.viam.app.v1.CreateModuleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.CreateModuleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.CreateModuleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.CreateModuleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.CreateModuleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.viam.app.v1.CreateModuleRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.CreateModuleRequest} returns this
 */
proto.viam.app.v1.CreateModuleRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.viam.app.v1.CreateModuleRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.CreateModuleRequest} returns this
 */
proto.viam.app.v1.CreateModuleRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.CreateModuleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.CreateModuleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.CreateModuleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.CreateModuleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    moduleId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    url: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.CreateModuleResponse}
 */
proto.viam.app.v1.CreateModuleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.CreateModuleResponse;
  return proto.viam.app.v1.CreateModuleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.CreateModuleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.CreateModuleResponse}
 */
proto.viam.app.v1.CreateModuleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModuleId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.CreateModuleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.CreateModuleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.CreateModuleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.CreateModuleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModuleId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string module_id = 1;
 * @return {string}
 */
proto.viam.app.v1.CreateModuleResponse.prototype.getModuleId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.CreateModuleResponse} returns this
 */
proto.viam.app.v1.CreateModuleResponse.prototype.setModuleId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.viam.app.v1.CreateModuleResponse.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.CreateModuleResponse} returns this
 */
proto.viam.app.v1.CreateModuleResponse.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.v1.UpdateModuleRequest.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.UpdateModuleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.UpdateModuleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.UpdateModuleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.UpdateModuleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    moduleId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    organizationId: jspb.Message.getFieldWithDefault(msg, 7, ""),
    visibility: jspb.Message.getFieldWithDefault(msg, 2, 0),
    url: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    modelsList: jspb.Message.toObjectList(msg.getModelsList(),
    proto.viam.app.v1.Model.toObject, includeInstance),
    entrypoint: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.UpdateModuleRequest}
 */
proto.viam.app.v1.UpdateModuleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.UpdateModuleRequest;
  return proto.viam.app.v1.UpdateModuleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.UpdateModuleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.UpdateModuleRequest}
 */
proto.viam.app.v1.UpdateModuleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModuleId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {!proto.viam.app.v1.Visibility} */ (reader.readEnum());
      msg.setVisibility(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = new proto.viam.app.v1.Model;
      reader.readMessage(value,proto.viam.app.v1.Model.deserializeBinaryFromReader);
      msg.addModels(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntrypoint(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.UpdateModuleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.UpdateModuleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.UpdateModuleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.UpdateModuleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModuleId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getVisibility();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getModelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.viam.app.v1.Model.serializeBinaryToWriter
    );
  }
  f = message.getEntrypoint();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string module_id = 1;
 * @return {string}
 */
proto.viam.app.v1.UpdateModuleRequest.prototype.getModuleId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.UpdateModuleRequest} returns this
 */
proto.viam.app.v1.UpdateModuleRequest.prototype.setModuleId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string organization_id = 7;
 * @return {string}
 */
proto.viam.app.v1.UpdateModuleRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.UpdateModuleRequest} returns this
 */
proto.viam.app.v1.UpdateModuleRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.app.v1.UpdateModuleRequest} returns this
 */
proto.viam.app.v1.UpdateModuleRequest.prototype.clearOrganizationId = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.UpdateModuleRequest.prototype.hasOrganizationId = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Visibility visibility = 2;
 * @return {!proto.viam.app.v1.Visibility}
 */
proto.viam.app.v1.UpdateModuleRequest.prototype.getVisibility = function() {
  return /** @type {!proto.viam.app.v1.Visibility} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.viam.app.v1.Visibility} value
 * @return {!proto.viam.app.v1.UpdateModuleRequest} returns this
 */
proto.viam.app.v1.UpdateModuleRequest.prototype.setVisibility = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string url = 3;
 * @return {string}
 */
proto.viam.app.v1.UpdateModuleRequest.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.UpdateModuleRequest} returns this
 */
proto.viam.app.v1.UpdateModuleRequest.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.viam.app.v1.UpdateModuleRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.UpdateModuleRequest} returns this
 */
proto.viam.app.v1.UpdateModuleRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated Model models = 5;
 * @return {!Array<!proto.viam.app.v1.Model>}
 */
proto.viam.app.v1.UpdateModuleRequest.prototype.getModelsList = function() {
  return /** @type{!Array<!proto.viam.app.v1.Model>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.v1.Model, 5));
};


/**
 * @param {!Array<!proto.viam.app.v1.Model>} value
 * @return {!proto.viam.app.v1.UpdateModuleRequest} returns this
*/
proto.viam.app.v1.UpdateModuleRequest.prototype.setModelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.viam.app.v1.Model=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.v1.Model}
 */
proto.viam.app.v1.UpdateModuleRequest.prototype.addModels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.viam.app.v1.Model, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.v1.UpdateModuleRequest} returns this
 */
proto.viam.app.v1.UpdateModuleRequest.prototype.clearModelsList = function() {
  return this.setModelsList([]);
};


/**
 * optional string entrypoint = 6;
 * @return {string}
 */
proto.viam.app.v1.UpdateModuleRequest.prototype.getEntrypoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.UpdateModuleRequest} returns this
 */
proto.viam.app.v1.UpdateModuleRequest.prototype.setEntrypoint = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.UpdateModuleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.UpdateModuleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.UpdateModuleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.UpdateModuleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.UpdateModuleResponse}
 */
proto.viam.app.v1.UpdateModuleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.UpdateModuleResponse;
  return proto.viam.app.v1.UpdateModuleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.UpdateModuleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.UpdateModuleResponse}
 */
proto.viam.app.v1.UpdateModuleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.UpdateModuleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.UpdateModuleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.UpdateModuleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.UpdateModuleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.viam.app.v1.UpdateModuleResponse.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.UpdateModuleResponse} returns this
 */
proto.viam.app.v1.UpdateModuleResponse.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.Model.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.Model.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.Model} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.Model.toObject = function(includeInstance, msg) {
  var f, obj = {
    api: jspb.Message.getFieldWithDefault(msg, 1, ""),
    model: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.Model}
 */
proto.viam.app.v1.Model.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.Model;
  return proto.viam.app.v1.Model.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.Model} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.Model}
 */
proto.viam.app.v1.Model.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setApi(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.Model.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.Model.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.Model} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.Model.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApi();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModel();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string api = 1;
 * @return {string}
 */
proto.viam.app.v1.Model.prototype.getApi = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.Model} returns this
 */
proto.viam.app.v1.Model.prototype.setApi = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string model = 2;
 * @return {string}
 */
proto.viam.app.v1.Model.prototype.getModel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.Model} returns this
 */
proto.viam.app.v1.Model.prototype.setModel = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.ModuleFileInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.ModuleFileInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.ModuleFileInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ModuleFileInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    moduleId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    organizationId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    version: jspb.Message.getFieldWithDefault(msg, 2, ""),
    platform: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.ModuleFileInfo}
 */
proto.viam.app.v1.ModuleFileInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.ModuleFileInfo;
  return proto.viam.app.v1.ModuleFileInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.ModuleFileInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.ModuleFileInfo}
 */
proto.viam.app.v1.ModuleFileInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModuleId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatform(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.ModuleFileInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.ModuleFileInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.ModuleFileInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ModuleFileInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModuleId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPlatform();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string module_id = 1;
 * @return {string}
 */
proto.viam.app.v1.ModuleFileInfo.prototype.getModuleId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.ModuleFileInfo} returns this
 */
proto.viam.app.v1.ModuleFileInfo.prototype.setModuleId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string organization_id = 4;
 * @return {string}
 */
proto.viam.app.v1.ModuleFileInfo.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.ModuleFileInfo} returns this
 */
proto.viam.app.v1.ModuleFileInfo.prototype.setOrganizationId = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.app.v1.ModuleFileInfo} returns this
 */
proto.viam.app.v1.ModuleFileInfo.prototype.clearOrganizationId = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.ModuleFileInfo.prototype.hasOrganizationId = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string version = 2;
 * @return {string}
 */
proto.viam.app.v1.ModuleFileInfo.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.ModuleFileInfo} returns this
 */
proto.viam.app.v1.ModuleFileInfo.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string platform = 3;
 * @return {string}
 */
proto.viam.app.v1.ModuleFileInfo.prototype.getPlatform = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.ModuleFileInfo} returns this
 */
proto.viam.app.v1.ModuleFileInfo.prototype.setPlatform = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.viam.app.v1.UploadModuleFileRequest.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.viam.app.v1.UploadModuleFileRequest.ModuleFileCase = {
  MODULE_FILE_NOT_SET: 0,
  MODULE_FILE_INFO: 1,
  FILE: 2
};

/**
 * @return {proto.viam.app.v1.UploadModuleFileRequest.ModuleFileCase}
 */
proto.viam.app.v1.UploadModuleFileRequest.prototype.getModuleFileCase = function() {
  return /** @type {proto.viam.app.v1.UploadModuleFileRequest.ModuleFileCase} */(jspb.Message.computeOneofCase(this, proto.viam.app.v1.UploadModuleFileRequest.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.UploadModuleFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.UploadModuleFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.UploadModuleFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.UploadModuleFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    moduleFileInfo: (f = msg.getModuleFileInfo()) && proto.viam.app.v1.ModuleFileInfo.toObject(includeInstance, f),
    file: msg.getFile_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.UploadModuleFileRequest}
 */
proto.viam.app.v1.UploadModuleFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.UploadModuleFileRequest;
  return proto.viam.app.v1.UploadModuleFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.UploadModuleFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.UploadModuleFileRequest}
 */
proto.viam.app.v1.UploadModuleFileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.ModuleFileInfo;
      reader.readMessage(value,proto.viam.app.v1.ModuleFileInfo.deserializeBinaryFromReader);
      msg.setModuleFileInfo(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setFile(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.UploadModuleFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.UploadModuleFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.UploadModuleFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.UploadModuleFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModuleFileInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.app.v1.ModuleFileInfo.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional ModuleFileInfo module_file_info = 1;
 * @return {?proto.viam.app.v1.ModuleFileInfo}
 */
proto.viam.app.v1.UploadModuleFileRequest.prototype.getModuleFileInfo = function() {
  return /** @type{?proto.viam.app.v1.ModuleFileInfo} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.v1.ModuleFileInfo, 1));
};


/**
 * @param {?proto.viam.app.v1.ModuleFileInfo|undefined} value
 * @return {!proto.viam.app.v1.UploadModuleFileRequest} returns this
*/
proto.viam.app.v1.UploadModuleFileRequest.prototype.setModuleFileInfo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.viam.app.v1.UploadModuleFileRequest.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.UploadModuleFileRequest} returns this
 */
proto.viam.app.v1.UploadModuleFileRequest.prototype.clearModuleFileInfo = function() {
  return this.setModuleFileInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.UploadModuleFileRequest.prototype.hasModuleFileInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes file = 2;
 * @return {string}
 */
proto.viam.app.v1.UploadModuleFileRequest.prototype.getFile = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes file = 2;
 * This is a type-conversion wrapper around `getFile()`
 * @return {string}
 */
proto.viam.app.v1.UploadModuleFileRequest.prototype.getFile_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getFile()));
};


/**
 * optional bytes file = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getFile()`
 * @return {!Uint8Array}
 */
proto.viam.app.v1.UploadModuleFileRequest.prototype.getFile_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getFile()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.viam.app.v1.UploadModuleFileRequest} returns this
 */
proto.viam.app.v1.UploadModuleFileRequest.prototype.setFile = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.viam.app.v1.UploadModuleFileRequest.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.app.v1.UploadModuleFileRequest} returns this
 */
proto.viam.app.v1.UploadModuleFileRequest.prototype.clearFile = function() {
  return jspb.Message.setOneofField(this, 2, proto.viam.app.v1.UploadModuleFileRequest.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.UploadModuleFileRequest.prototype.hasFile = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.UploadModuleFileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.UploadModuleFileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.UploadModuleFileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.UploadModuleFileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.UploadModuleFileResponse}
 */
proto.viam.app.v1.UploadModuleFileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.UploadModuleFileResponse;
  return proto.viam.app.v1.UploadModuleFileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.UploadModuleFileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.UploadModuleFileResponse}
 */
proto.viam.app.v1.UploadModuleFileResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.UploadModuleFileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.UploadModuleFileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.UploadModuleFileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.UploadModuleFileResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.viam.app.v1.UploadModuleFileResponse.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.UploadModuleFileResponse} returns this
 */
proto.viam.app.v1.UploadModuleFileResponse.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.GetModuleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.GetModuleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.GetModuleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetModuleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    moduleId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    organizationId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.GetModuleRequest}
 */
proto.viam.app.v1.GetModuleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.GetModuleRequest;
  return proto.viam.app.v1.GetModuleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.GetModuleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.GetModuleRequest}
 */
proto.viam.app.v1.GetModuleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModuleId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.GetModuleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.GetModuleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.GetModuleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetModuleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModuleId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string module_id = 1;
 * @return {string}
 */
proto.viam.app.v1.GetModuleRequest.prototype.getModuleId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.GetModuleRequest} returns this
 */
proto.viam.app.v1.GetModuleRequest.prototype.setModuleId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string organization_id = 2;
 * @return {string}
 */
proto.viam.app.v1.GetModuleRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.GetModuleRequest} returns this
 */
proto.viam.app.v1.GetModuleRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.app.v1.GetModuleRequest} returns this
 */
proto.viam.app.v1.GetModuleRequest.prototype.clearOrganizationId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.GetModuleRequest.prototype.hasOrganizationId = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.GetModuleResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.GetModuleResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.GetModuleResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetModuleResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    module: (f = msg.getModule()) && proto.viam.app.v1.Module.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.GetModuleResponse}
 */
proto.viam.app.v1.GetModuleResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.GetModuleResponse;
  return proto.viam.app.v1.GetModuleResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.GetModuleResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.GetModuleResponse}
 */
proto.viam.app.v1.GetModuleResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.Module;
      reader.readMessage(value,proto.viam.app.v1.Module.deserializeBinaryFromReader);
      msg.setModule(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.GetModuleResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.GetModuleResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.GetModuleResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetModuleResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModule();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.viam.app.v1.Module.serializeBinaryToWriter
    );
  }
};


/**
 * optional Module module = 1;
 * @return {?proto.viam.app.v1.Module}
 */
proto.viam.app.v1.GetModuleResponse.prototype.getModule = function() {
  return /** @type{?proto.viam.app.v1.Module} */ (
    jspb.Message.getWrapperField(this, proto.viam.app.v1.Module, 1));
};


/**
 * @param {?proto.viam.app.v1.Module|undefined} value
 * @return {!proto.viam.app.v1.GetModuleResponse} returns this
*/
proto.viam.app.v1.GetModuleResponse.prototype.setModule = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.GetModuleResponse} returns this
 */
proto.viam.app.v1.GetModuleResponse.prototype.clearModule = function() {
  return this.setModule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.GetModuleResponse.prototype.hasModule = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.v1.Module.repeatedFields_ = [4,7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.Module.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.Module.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.Module} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.Module.toObject = function(includeInstance, msg) {
  var f, obj = {
    moduleId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    visibility: jspb.Message.getFieldWithDefault(msg, 3, 0),
    versionsList: jspb.Message.toObjectList(msg.getVersionsList(),
    proto.viam.app.v1.VersionHistory.toObject, includeInstance),
    url: jspb.Message.getFieldWithDefault(msg, 5, ""),
    description: jspb.Message.getFieldWithDefault(msg, 6, ""),
    modelsList: jspb.Message.toObjectList(msg.getModelsList(),
    proto.viam.app.v1.Model.toObject, includeInstance),
    totalRobotUsage: jspb.Message.getFieldWithDefault(msg, 8, 0),
    totalOrganizationUsage: jspb.Message.getFieldWithDefault(msg, 9, 0),
    organizationId: jspb.Message.getFieldWithDefault(msg, 10, ""),
    entrypoint: jspb.Message.getFieldWithDefault(msg, 11, ""),
    publicNamespace: jspb.Message.getFieldWithDefault(msg, 12, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.Module}
 */
proto.viam.app.v1.Module.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.Module;
  return proto.viam.app.v1.Module.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.Module} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.Module}
 */
proto.viam.app.v1.Module.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModuleId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {!proto.viam.app.v1.Visibility} */ (reader.readEnum());
      msg.setVisibility(value);
      break;
    case 4:
      var value = new proto.viam.app.v1.VersionHistory;
      reader.readMessage(value,proto.viam.app.v1.VersionHistory.deserializeBinaryFromReader);
      msg.addVersions(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 7:
      var value = new proto.viam.app.v1.Model;
      reader.readMessage(value,proto.viam.app.v1.Model.deserializeBinaryFromReader);
      msg.addModels(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalRobotUsage(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalOrganizationUsage(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntrypoint(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicNamespace(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.Module.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.Module.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.Module} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.Module.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModuleId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVisibility();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getVersionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.viam.app.v1.VersionHistory.serializeBinaryToWriter
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getModelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.viam.app.v1.Model.serializeBinaryToWriter
    );
  }
  f = message.getTotalRobotUsage();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getTotalOrganizationUsage();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getOrganizationId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getEntrypoint();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getPublicNamespace();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string module_id = 1;
 * @return {string}
 */
proto.viam.app.v1.Module.prototype.getModuleId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.Module} returns this
 */
proto.viam.app.v1.Module.prototype.setModuleId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.viam.app.v1.Module.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.Module} returns this
 */
proto.viam.app.v1.Module.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Visibility visibility = 3;
 * @return {!proto.viam.app.v1.Visibility}
 */
proto.viam.app.v1.Module.prototype.getVisibility = function() {
  return /** @type {!proto.viam.app.v1.Visibility} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.viam.app.v1.Visibility} value
 * @return {!proto.viam.app.v1.Module} returns this
 */
proto.viam.app.v1.Module.prototype.setVisibility = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * repeated VersionHistory versions = 4;
 * @return {!Array<!proto.viam.app.v1.VersionHistory>}
 */
proto.viam.app.v1.Module.prototype.getVersionsList = function() {
  return /** @type{!Array<!proto.viam.app.v1.VersionHistory>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.v1.VersionHistory, 4));
};


/**
 * @param {!Array<!proto.viam.app.v1.VersionHistory>} value
 * @return {!proto.viam.app.v1.Module} returns this
*/
proto.viam.app.v1.Module.prototype.setVersionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.viam.app.v1.VersionHistory=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.v1.VersionHistory}
 */
proto.viam.app.v1.Module.prototype.addVersions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.viam.app.v1.VersionHistory, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.v1.Module} returns this
 */
proto.viam.app.v1.Module.prototype.clearVersionsList = function() {
  return this.setVersionsList([]);
};


/**
 * optional string url = 5;
 * @return {string}
 */
proto.viam.app.v1.Module.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.Module} returns this
 */
proto.viam.app.v1.Module.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string description = 6;
 * @return {string}
 */
proto.viam.app.v1.Module.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.Module} returns this
 */
proto.viam.app.v1.Module.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated Model models = 7;
 * @return {!Array<!proto.viam.app.v1.Model>}
 */
proto.viam.app.v1.Module.prototype.getModelsList = function() {
  return /** @type{!Array<!proto.viam.app.v1.Model>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.v1.Model, 7));
};


/**
 * @param {!Array<!proto.viam.app.v1.Model>} value
 * @return {!proto.viam.app.v1.Module} returns this
*/
proto.viam.app.v1.Module.prototype.setModelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.viam.app.v1.Model=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.v1.Model}
 */
proto.viam.app.v1.Module.prototype.addModels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.viam.app.v1.Model, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.v1.Module} returns this
 */
proto.viam.app.v1.Module.prototype.clearModelsList = function() {
  return this.setModelsList([]);
};


/**
 * optional int64 total_robot_usage = 8;
 * @return {number}
 */
proto.viam.app.v1.Module.prototype.getTotalRobotUsage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.viam.app.v1.Module} returns this
 */
proto.viam.app.v1.Module.prototype.setTotalRobotUsage = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int64 total_organization_usage = 9;
 * @return {number}
 */
proto.viam.app.v1.Module.prototype.getTotalOrganizationUsage = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.viam.app.v1.Module} returns this
 */
proto.viam.app.v1.Module.prototype.setTotalOrganizationUsage = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string organization_id = 10;
 * @return {string}
 */
proto.viam.app.v1.Module.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.Module} returns this
 */
proto.viam.app.v1.Module.prototype.setOrganizationId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string entrypoint = 11;
 * @return {string}
 */
proto.viam.app.v1.Module.prototype.getEntrypoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.Module} returns this
 */
proto.viam.app.v1.Module.prototype.setEntrypoint = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string public_namespace = 12;
 * @return {string}
 */
proto.viam.app.v1.Module.prototype.getPublicNamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.Module} returns this
 */
proto.viam.app.v1.Module.prototype.setPublicNamespace = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.v1.VersionHistory.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.VersionHistory.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.VersionHistory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.VersionHistory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.VersionHistory.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, ""),
    filesList: jspb.Message.toObjectList(msg.getFilesList(),
    proto.viam.app.v1.Uploads.toObject, includeInstance),
    modelsList: jspb.Message.toObjectList(msg.getModelsList(),
    proto.viam.app.v1.Model.toObject, includeInstance),
    entrypoint: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.VersionHistory}
 */
proto.viam.app.v1.VersionHistory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.VersionHistory;
  return proto.viam.app.v1.VersionHistory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.VersionHistory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.VersionHistory}
 */
proto.viam.app.v1.VersionHistory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    case 2:
      var value = new proto.viam.app.v1.Uploads;
      reader.readMessage(value,proto.viam.app.v1.Uploads.deserializeBinaryFromReader);
      msg.addFiles(value);
      break;
    case 3:
      var value = new proto.viam.app.v1.Model;
      reader.readMessage(value,proto.viam.app.v1.Model.deserializeBinaryFromReader);
      msg.addModels(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntrypoint(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.VersionHistory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.VersionHistory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.VersionHistory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.VersionHistory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFilesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.viam.app.v1.Uploads.serializeBinaryToWriter
    );
  }
  f = message.getModelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.viam.app.v1.Model.serializeBinaryToWriter
    );
  }
  f = message.getEntrypoint();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string version = 1;
 * @return {string}
 */
proto.viam.app.v1.VersionHistory.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.VersionHistory} returns this
 */
proto.viam.app.v1.VersionHistory.prototype.setVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Uploads files = 2;
 * @return {!Array<!proto.viam.app.v1.Uploads>}
 */
proto.viam.app.v1.VersionHistory.prototype.getFilesList = function() {
  return /** @type{!Array<!proto.viam.app.v1.Uploads>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.v1.Uploads, 2));
};


/**
 * @param {!Array<!proto.viam.app.v1.Uploads>} value
 * @return {!proto.viam.app.v1.VersionHistory} returns this
*/
proto.viam.app.v1.VersionHistory.prototype.setFilesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.viam.app.v1.Uploads=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.v1.Uploads}
 */
proto.viam.app.v1.VersionHistory.prototype.addFiles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.viam.app.v1.Uploads, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.v1.VersionHistory} returns this
 */
proto.viam.app.v1.VersionHistory.prototype.clearFilesList = function() {
  return this.setFilesList([]);
};


/**
 * repeated Model models = 3;
 * @return {!Array<!proto.viam.app.v1.Model>}
 */
proto.viam.app.v1.VersionHistory.prototype.getModelsList = function() {
  return /** @type{!Array<!proto.viam.app.v1.Model>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.v1.Model, 3));
};


/**
 * @param {!Array<!proto.viam.app.v1.Model>} value
 * @return {!proto.viam.app.v1.VersionHistory} returns this
*/
proto.viam.app.v1.VersionHistory.prototype.setModelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.viam.app.v1.Model=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.v1.Model}
 */
proto.viam.app.v1.VersionHistory.prototype.addModels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.viam.app.v1.Model, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.v1.VersionHistory} returns this
 */
proto.viam.app.v1.VersionHistory.prototype.clearModelsList = function() {
  return this.setModelsList([]);
};


/**
 * optional string entrypoint = 4;
 * @return {string}
 */
proto.viam.app.v1.VersionHistory.prototype.getEntrypoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.VersionHistory} returns this
 */
proto.viam.app.v1.VersionHistory.prototype.setEntrypoint = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.Uploads.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.Uploads.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.Uploads} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.Uploads.toObject = function(includeInstance, msg) {
  var f, obj = {
    platform: jspb.Message.getFieldWithDefault(msg, 1, ""),
    uploadedAt: (f = msg.getUploadedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.Uploads}
 */
proto.viam.app.v1.Uploads.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.Uploads;
  return proto.viam.app.v1.Uploads.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.Uploads} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.Uploads}
 */
proto.viam.app.v1.Uploads.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlatform(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUploadedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.Uploads.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.Uploads.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.Uploads} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.Uploads.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlatform();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUploadedAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string platform = 1;
 * @return {string}
 */
proto.viam.app.v1.Uploads.prototype.getPlatform = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.Uploads} returns this
 */
proto.viam.app.v1.Uploads.prototype.setPlatform = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp uploaded_at = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.viam.app.v1.Uploads.prototype.getUploadedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.viam.app.v1.Uploads} returns this
*/
proto.viam.app.v1.Uploads.prototype.setUploadedAt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.viam.app.v1.Uploads} returns this
 */
proto.viam.app.v1.Uploads.prototype.clearUploadedAt = function() {
  return this.setUploadedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.Uploads.prototype.hasUploadedAt = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.ListModulesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.ListModulesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.ListModulesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ListModulesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    organizationId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.ListModulesRequest}
 */
proto.viam.app.v1.ListModulesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.ListModulesRequest;
  return proto.viam.app.v1.ListModulesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.ListModulesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.ListModulesRequest}
 */
proto.viam.app.v1.ListModulesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.ListModulesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.ListModulesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.ListModulesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ListModulesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string organization_id = 1;
 * @return {string}
 */
proto.viam.app.v1.ListModulesRequest.prototype.getOrganizationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.ListModulesRequest} returns this
 */
proto.viam.app.v1.ListModulesRequest.prototype.setOrganizationId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.viam.app.v1.ListModulesRequest} returns this
 */
proto.viam.app.v1.ListModulesRequest.prototype.clearOrganizationId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.viam.app.v1.ListModulesRequest.prototype.hasOrganizationId = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.v1.ListModulesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.ListModulesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.ListModulesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.ListModulesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ListModulesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    modulesList: jspb.Message.toObjectList(msg.getModulesList(),
    proto.viam.app.v1.Module.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.ListModulesResponse}
 */
proto.viam.app.v1.ListModulesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.ListModulesResponse;
  return proto.viam.app.v1.ListModulesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.ListModulesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.ListModulesResponse}
 */
proto.viam.app.v1.ListModulesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.Module;
      reader.readMessage(value,proto.viam.app.v1.Module.deserializeBinaryFromReader);
      msg.addModules(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.ListModulesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.ListModulesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.ListModulesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ListModulesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.app.v1.Module.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Module modules = 1;
 * @return {!Array<!proto.viam.app.v1.Module>}
 */
proto.viam.app.v1.ListModulesResponse.prototype.getModulesList = function() {
  return /** @type{!Array<!proto.viam.app.v1.Module>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.v1.Module, 1));
};


/**
 * @param {!Array<!proto.viam.app.v1.Module>} value
 * @return {!proto.viam.app.v1.ListModulesResponse} returns this
*/
proto.viam.app.v1.ListModulesResponse.prototype.setModulesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.app.v1.Module=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.v1.Module}
 */
proto.viam.app.v1.ListModulesResponse.prototype.addModules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.app.v1.Module, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.v1.ListModulesResponse} returns this
 */
proto.viam.app.v1.ListModulesResponse.prototype.clearModulesList = function() {
  return this.setModulesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.GetUserIDByEmailRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.GetUserIDByEmailRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.GetUserIDByEmailRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetUserIDByEmailRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    email: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.GetUserIDByEmailRequest}
 */
proto.viam.app.v1.GetUserIDByEmailRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.GetUserIDByEmailRequest;
  return proto.viam.app.v1.GetUserIDByEmailRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.GetUserIDByEmailRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.GetUserIDByEmailRequest}
 */
proto.viam.app.v1.GetUserIDByEmailRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.GetUserIDByEmailRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.GetUserIDByEmailRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.GetUserIDByEmailRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetUserIDByEmailRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string email = 1;
 * @return {string}
 */
proto.viam.app.v1.GetUserIDByEmailRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.GetUserIDByEmailRequest} returns this
 */
proto.viam.app.v1.GetUserIDByEmailRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.GetUserIDByEmailResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.GetUserIDByEmailResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.GetUserIDByEmailResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetUserIDByEmailResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.GetUserIDByEmailResponse}
 */
proto.viam.app.v1.GetUserIDByEmailResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.GetUserIDByEmailResponse;
  return proto.viam.app.v1.GetUserIDByEmailResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.GetUserIDByEmailResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.GetUserIDByEmailResponse}
 */
proto.viam.app.v1.GetUserIDByEmailResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.GetUserIDByEmailResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.GetUserIDByEmailResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.GetUserIDByEmailResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.GetUserIDByEmailResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.viam.app.v1.GetUserIDByEmailResponse.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.GetUserIDByEmailResponse} returns this
 */
proto.viam.app.v1.GetUserIDByEmailResponse.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.ListOrganizationsByUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.ListOrganizationsByUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.ListOrganizationsByUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ListOrganizationsByUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.ListOrganizationsByUserRequest}
 */
proto.viam.app.v1.ListOrganizationsByUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.ListOrganizationsByUserRequest;
  return proto.viam.app.v1.ListOrganizationsByUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.ListOrganizationsByUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.ListOrganizationsByUserRequest}
 */
proto.viam.app.v1.ListOrganizationsByUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.ListOrganizationsByUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.ListOrganizationsByUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.ListOrganizationsByUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ListOrganizationsByUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.viam.app.v1.ListOrganizationsByUserRequest.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.ListOrganizationsByUserRequest} returns this
 */
proto.viam.app.v1.ListOrganizationsByUserRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.OrgDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.OrgDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.OrgDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.OrgDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    orgName: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.OrgDetails}
 */
proto.viam.app.v1.OrgDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.OrgDetails;
  return proto.viam.app.v1.OrgDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.OrgDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.OrgDetails}
 */
proto.viam.app.v1.OrgDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.OrgDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.OrgDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.OrgDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.OrgDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getOrgName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string org_id = 1;
 * @return {string}
 */
proto.viam.app.v1.OrgDetails.prototype.getOrgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.OrgDetails} returns this
 */
proto.viam.app.v1.OrgDetails.prototype.setOrgId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string org_name = 2;
 * @return {string}
 */
proto.viam.app.v1.OrgDetails.prototype.getOrgName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.OrgDetails} returns this
 */
proto.viam.app.v1.OrgDetails.prototype.setOrgName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.v1.ListOrganizationsByUserResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.ListOrganizationsByUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.ListOrganizationsByUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.ListOrganizationsByUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ListOrganizationsByUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    orgsList: jspb.Message.toObjectList(msg.getOrgsList(),
    proto.viam.app.v1.OrgDetails.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.ListOrganizationsByUserResponse}
 */
proto.viam.app.v1.ListOrganizationsByUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.ListOrganizationsByUserResponse;
  return proto.viam.app.v1.ListOrganizationsByUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.ListOrganizationsByUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.ListOrganizationsByUserResponse}
 */
proto.viam.app.v1.ListOrganizationsByUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.OrgDetails;
      reader.readMessage(value,proto.viam.app.v1.OrgDetails.deserializeBinaryFromReader);
      msg.addOrgs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.ListOrganizationsByUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.ListOrganizationsByUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.ListOrganizationsByUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.ListOrganizationsByUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrgsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.app.v1.OrgDetails.serializeBinaryToWriter
    );
  }
};


/**
 * repeated OrgDetails orgs = 1;
 * @return {!Array<!proto.viam.app.v1.OrgDetails>}
 */
proto.viam.app.v1.ListOrganizationsByUserResponse.prototype.getOrgsList = function() {
  return /** @type{!Array<!proto.viam.app.v1.OrgDetails>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.v1.OrgDetails, 1));
};


/**
 * @param {!Array<!proto.viam.app.v1.OrgDetails>} value
 * @return {!proto.viam.app.v1.ListOrganizationsByUserResponse} returns this
*/
proto.viam.app.v1.ListOrganizationsByUserResponse.prototype.setOrgsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.app.v1.OrgDetails=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.v1.OrgDetails}
 */
proto.viam.app.v1.ListOrganizationsByUserResponse.prototype.addOrgs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.app.v1.OrgDetails, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.v1.ListOrganizationsByUserResponse} returns this
 */
proto.viam.app.v1.ListOrganizationsByUserResponse.prototype.clearOrgsList = function() {
  return this.setOrgsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.viam.app.v1.CreateKeyRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.CreateKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.CreateKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.CreateKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.CreateKeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    authorizationsList: jspb.Message.toObjectList(msg.getAuthorizationsList(),
    proto.viam.app.v1.Authorization.toObject, includeInstance),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.CreateKeyRequest}
 */
proto.viam.app.v1.CreateKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.CreateKeyRequest;
  return proto.viam.app.v1.CreateKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.CreateKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.CreateKeyRequest}
 */
proto.viam.app.v1.CreateKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.viam.app.v1.Authorization;
      reader.readMessage(value,proto.viam.app.v1.Authorization.deserializeBinaryFromReader);
      msg.addAuthorizations(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.CreateKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.CreateKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.CreateKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.CreateKeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthorizationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.viam.app.v1.Authorization.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * repeated Authorization authorizations = 1;
 * @return {!Array<!proto.viam.app.v1.Authorization>}
 */
proto.viam.app.v1.CreateKeyRequest.prototype.getAuthorizationsList = function() {
  return /** @type{!Array<!proto.viam.app.v1.Authorization>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.viam.app.v1.Authorization, 1));
};


/**
 * @param {!Array<!proto.viam.app.v1.Authorization>} value
 * @return {!proto.viam.app.v1.CreateKeyRequest} returns this
*/
proto.viam.app.v1.CreateKeyRequest.prototype.setAuthorizationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.viam.app.v1.Authorization=} opt_value
 * @param {number=} opt_index
 * @return {!proto.viam.app.v1.Authorization}
 */
proto.viam.app.v1.CreateKeyRequest.prototype.addAuthorizations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.viam.app.v1.Authorization, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.viam.app.v1.CreateKeyRequest} returns this
 */
proto.viam.app.v1.CreateKeyRequest.prototype.clearAuthorizationsList = function() {
  return this.setAuthorizationsList([]);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.viam.app.v1.CreateKeyRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.CreateKeyRequest} returns this
 */
proto.viam.app.v1.CreateKeyRequest.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.viam.app.v1.CreateKeyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.viam.app.v1.CreateKeyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.viam.app.v1.CreateKeyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.CreateKeyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.viam.app.v1.CreateKeyResponse}
 */
proto.viam.app.v1.CreateKeyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.viam.app.v1.CreateKeyResponse;
  return proto.viam.app.v1.CreateKeyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.viam.app.v1.CreateKeyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.viam.app.v1.CreateKeyResponse}
 */
proto.viam.app.v1.CreateKeyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.viam.app.v1.CreateKeyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.viam.app.v1.CreateKeyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.viam.app.v1.CreateKeyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.viam.app.v1.CreateKeyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.viam.app.v1.CreateKeyResponse.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.CreateKeyResponse} returns this
 */
proto.viam.app.v1.CreateKeyResponse.prototype.setKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.viam.app.v1.CreateKeyResponse.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.viam.app.v1.CreateKeyResponse} returns this
 */
proto.viam.app.v1.CreateKeyResponse.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.viam.app.v1.Visibility = {
  VISIBILITY_UNSPECIFIED: 0,
  VISIBILITY_PRIVATE: 1,
  VISIBILITY_PUBLIC: 2
};

goog.object.extend(exports, proto.viam.app.v1);
