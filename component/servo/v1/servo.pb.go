// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        (unknown)
// source: component/servo/v1/servo.proto

package v1

import (
	v1 "go.viam.com/api/common/v1"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	structpb "google.golang.org/protobuf/types/known/structpb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type MoveRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// the name of the servo, as registered
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// the degrees by which to rotate the servo. Accepted values are between 0 and 180
	AngleDeg uint32 `protobuf:"varint,2,opt,name=angle_deg,json=angleDeg,proto3" json:"angle_deg,omitempty"`
	// Additional arguments to the method
	Extra *structpb.Struct `protobuf:"bytes,99,opt,name=extra,proto3" json:"extra,omitempty"`
}

func (x *MoveRequest) Reset() {
	*x = MoveRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_component_servo_v1_servo_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *MoveRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MoveRequest) ProtoMessage() {}

func (x *MoveRequest) ProtoReflect() protoreflect.Message {
	mi := &file_component_servo_v1_servo_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MoveRequest.ProtoReflect.Descriptor instead.
func (*MoveRequest) Descriptor() ([]byte, []int) {
	return file_component_servo_v1_servo_proto_rawDescGZIP(), []int{0}
}

func (x *MoveRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *MoveRequest) GetAngleDeg() uint32 {
	if x != nil {
		return x.AngleDeg
	}
	return 0
}

func (x *MoveRequest) GetExtra() *structpb.Struct {
	if x != nil {
		return x.Extra
	}
	return nil
}

type MoveResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *MoveResponse) Reset() {
	*x = MoveResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_component_servo_v1_servo_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *MoveResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MoveResponse) ProtoMessage() {}

func (x *MoveResponse) ProtoReflect() protoreflect.Message {
	mi := &file_component_servo_v1_servo_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MoveResponse.ProtoReflect.Descriptor instead.
func (*MoveResponse) Descriptor() ([]byte, []int) {
	return file_component_servo_v1_servo_proto_rawDescGZIP(), []int{1}
}

type GetPositionRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// the name of the servo, as registered
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Additional arguments to the method
	Extra *structpb.Struct `protobuf:"bytes,99,opt,name=extra,proto3" json:"extra,omitempty"`
}

func (x *GetPositionRequest) Reset() {
	*x = GetPositionRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_component_servo_v1_servo_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetPositionRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetPositionRequest) ProtoMessage() {}

func (x *GetPositionRequest) ProtoReflect() protoreflect.Message {
	mi := &file_component_servo_v1_servo_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetPositionRequest.ProtoReflect.Descriptor instead.
func (*GetPositionRequest) Descriptor() ([]byte, []int) {
	return file_component_servo_v1_servo_proto_rawDescGZIP(), []int{2}
}

func (x *GetPositionRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *GetPositionRequest) GetExtra() *structpb.Struct {
	if x != nil {
		return x.Extra
	}
	return nil
}

type GetPositionResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// the degrees from neutral by which the servo is currently rotated. Values are between 0 and 180
	PositionDeg uint32 `protobuf:"varint,1,opt,name=position_deg,json=positionDeg,proto3" json:"position_deg,omitempty"`
}

func (x *GetPositionResponse) Reset() {
	*x = GetPositionResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_component_servo_v1_servo_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetPositionResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetPositionResponse) ProtoMessage() {}

func (x *GetPositionResponse) ProtoReflect() protoreflect.Message {
	mi := &file_component_servo_v1_servo_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetPositionResponse.ProtoReflect.Descriptor instead.
func (*GetPositionResponse) Descriptor() ([]byte, []int) {
	return file_component_servo_v1_servo_proto_rawDescGZIP(), []int{3}
}

func (x *GetPositionResponse) GetPositionDeg() uint32 {
	if x != nil {
		return x.PositionDeg
	}
	return 0
}

type StopRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// Name of a servo
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	// Additional arguments to the method
	Extra *structpb.Struct `protobuf:"bytes,99,opt,name=extra,proto3" json:"extra,omitempty"`
}

func (x *StopRequest) Reset() {
	*x = StopRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_component_servo_v1_servo_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *StopRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*StopRequest) ProtoMessage() {}

func (x *StopRequest) ProtoReflect() protoreflect.Message {
	mi := &file_component_servo_v1_servo_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use StopRequest.ProtoReflect.Descriptor instead.
func (*StopRequest) Descriptor() ([]byte, []int) {
	return file_component_servo_v1_servo_proto_rawDescGZIP(), []int{4}
}

func (x *StopRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *StopRequest) GetExtra() *structpb.Struct {
	if x != nil {
		return x.Extra
	}
	return nil
}

type StopResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields
}

func (x *StopResponse) Reset() {
	*x = StopResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_component_servo_v1_servo_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *StopResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*StopResponse) ProtoMessage() {}

func (x *StopResponse) ProtoReflect() protoreflect.Message {
	mi := &file_component_servo_v1_servo_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use StopResponse.ProtoReflect.Descriptor instead.
func (*StopResponse) Descriptor() ([]byte, []int) {
	return file_component_servo_v1_servo_proto_rawDescGZIP(), []int{5}
}

type Status struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PositionDeg uint32 `protobuf:"varint,1,opt,name=position_deg,json=positionDeg,proto3" json:"position_deg,omitempty"`
	IsMoving    bool   `protobuf:"varint,2,opt,name=is_moving,json=isMoving,proto3" json:"is_moving,omitempty"`
}

func (x *Status) Reset() {
	*x = Status{}
	if protoimpl.UnsafeEnabled {
		mi := &file_component_servo_v1_servo_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Status) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Status) ProtoMessage() {}

func (x *Status) ProtoReflect() protoreflect.Message {
	mi := &file_component_servo_v1_servo_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Status.ProtoReflect.Descriptor instead.
func (*Status) Descriptor() ([]byte, []int) {
	return file_component_servo_v1_servo_proto_rawDescGZIP(), []int{6}
}

func (x *Status) GetPositionDeg() uint32 {
	if x != nil {
		return x.PositionDeg
	}
	return 0
}

func (x *Status) GetIsMoving() bool {
	if x != nil {
		return x.IsMoving
	}
	return false
}

type IsMovingRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *IsMovingRequest) Reset() {
	*x = IsMovingRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_component_servo_v1_servo_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *IsMovingRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*IsMovingRequest) ProtoMessage() {}

func (x *IsMovingRequest) ProtoReflect() protoreflect.Message {
	mi := &file_component_servo_v1_servo_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use IsMovingRequest.ProtoReflect.Descriptor instead.
func (*IsMovingRequest) Descriptor() ([]byte, []int) {
	return file_component_servo_v1_servo_proto_rawDescGZIP(), []int{7}
}

func (x *IsMovingRequest) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

type IsMovingResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	IsMoving bool `protobuf:"varint,1,opt,name=is_moving,json=isMoving,proto3" json:"is_moving,omitempty"`
}

func (x *IsMovingResponse) Reset() {
	*x = IsMovingResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_component_servo_v1_servo_proto_msgTypes[8]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *IsMovingResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*IsMovingResponse) ProtoMessage() {}

func (x *IsMovingResponse) ProtoReflect() protoreflect.Message {
	mi := &file_component_servo_v1_servo_proto_msgTypes[8]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use IsMovingResponse.ProtoReflect.Descriptor instead.
func (*IsMovingResponse) Descriptor() ([]byte, []int) {
	return file_component_servo_v1_servo_proto_rawDescGZIP(), []int{8}
}

func (x *IsMovingResponse) GetIsMoving() bool {
	if x != nil {
		return x.IsMoving
	}
	return false
}

var File_component_servo_v1_servo_proto protoreflect.FileDescriptor

var file_component_servo_v1_servo_proto_rawDesc = []byte{
	0x0a, 0x1e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2f, 0x73, 0x65, 0x72, 0x76,
	0x6f, 0x2f, 0x76, 0x31, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x6f, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x12, 0x17, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74,
	0x2e, 0x73, 0x65, 0x72, 0x76, 0x6f, 0x2e, 0x76, 0x31, 0x1a, 0x16, 0x63, 0x6f, 0x6d, 0x6d, 0x6f,
	0x6e, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x1a, 0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x61, 0x6e,
	0x6e, 0x6f, 0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a,
	0x1c, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66,
	0x2f, 0x73, 0x74, 0x72, 0x75, 0x63, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x6d, 0x0a,
	0x0b, 0x4d, 0x6f, 0x76, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x12, 0x1b, 0x0a, 0x09, 0x61, 0x6e, 0x67, 0x6c, 0x65, 0x5f, 0x64, 0x65, 0x67, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x0d, 0x52, 0x08, 0x61, 0x6e, 0x67, 0x6c, 0x65, 0x44, 0x65, 0x67, 0x12, 0x2d, 0x0a,
	0x05, 0x65, 0x78, 0x74, 0x72, 0x61, 0x18, 0x63, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x67,
	0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x53,
	0x74, 0x72, 0x75, 0x63, 0x74, 0x52, 0x05, 0x65, 0x78, 0x74, 0x72, 0x61, 0x22, 0x0e, 0x0a, 0x0c,
	0x4d, 0x6f, 0x76, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x57, 0x0a, 0x12,
	0x47, 0x65, 0x74, 0x50, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x2d, 0x0a, 0x05, 0x65, 0x78, 0x74, 0x72, 0x61, 0x18,
	0x63, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x17, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x53, 0x74, 0x72, 0x75, 0x63, 0x74, 0x52, 0x05,
	0x65, 0x78, 0x74, 0x72, 0x61, 0x22, 0x38, 0x0a, 0x13, 0x47, 0x65, 0x74, 0x50, 0x6f, 0x73, 0x69,
	0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x21, 0x0a, 0x0c,
	0x70, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x64, 0x65, 0x67, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x0d, 0x52, 0x0b, 0x70, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x65, 0x67, 0x22,
	0x50, 0x0a, 0x0b, 0x53, 0x74, 0x6f, 0x70, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12,
	0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x12, 0x2d, 0x0a, 0x05, 0x65, 0x78, 0x74, 0x72, 0x61, 0x18, 0x63, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x17, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x62, 0x75, 0x66, 0x2e, 0x53, 0x74, 0x72, 0x75, 0x63, 0x74, 0x52, 0x05, 0x65, 0x78, 0x74, 0x72,
	0x61, 0x22, 0x0e, 0x0a, 0x0c, 0x53, 0x74, 0x6f, 0x70, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x22, 0x48, 0x0a, 0x06, 0x53, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x21, 0x0a, 0x0c, 0x70,
	0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x64, 0x65, 0x67, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x0d, 0x52, 0x0b, 0x70, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x65, 0x67, 0x12, 0x1b,
	0x0a, 0x09, 0x69, 0x73, 0x5f, 0x6d, 0x6f, 0x76, 0x69, 0x6e, 0x67, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x08, 0x52, 0x08, 0x69, 0x73, 0x4d, 0x6f, 0x76, 0x69, 0x6e, 0x67, 0x22, 0x25, 0x0a, 0x0f, 0x49,
	0x73, 0x4d, 0x6f, 0x76, 0x69, 0x6e, 0x67, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12,
	0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x22, 0x2f, 0x0a, 0x10, 0x49, 0x73, 0x4d, 0x6f, 0x76, 0x69, 0x6e, 0x67, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x1b, 0x0a, 0x09, 0x69, 0x73, 0x5f, 0x6d, 0x6f, 0x76,
	0x69, 0x6e, 0x67, 0x18, 0x01, 0x20, 0x01, 0x28, 0x08, 0x52, 0x08, 0x69, 0x73, 0x4d, 0x6f, 0x76,
	0x69, 0x6e, 0x67, 0x32, 0xfe, 0x06, 0x0a, 0x0c, 0x53, 0x65, 0x72, 0x76, 0x6f, 0x53, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x12, 0x89, 0x01, 0x0a, 0x04, 0x4d, 0x6f, 0x76, 0x65, 0x12, 0x24, 0x2e,
	0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2e, 0x73,
	0x65, 0x72, 0x76, 0x6f, 0x2e, 0x76, 0x31, 0x2e, 0x4d, 0x6f, 0x76, 0x65, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x1a, 0x25, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f,
	0x6e, 0x65, 0x6e, 0x74, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x6f, 0x2e, 0x76, 0x31, 0x2e, 0x4d, 0x6f,
	0x76, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x34, 0xa0, 0x92, 0x29, 0x01,
	0x82, 0xd3, 0xe4, 0x93, 0x02, 0x2a, 0x1a, 0x28, 0x2f, 0x76, 0x69, 0x61, 0x6d, 0x2f, 0x61, 0x70,
	0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2f, 0x73,
	0x65, 0x72, 0x76, 0x6f, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x7d, 0x2f, 0x6d, 0x6f, 0x76, 0x65,
	0x12, 0x9e, 0x01, 0x0a, 0x0b, 0x47, 0x65, 0x74, 0x50, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e,
	0x12, 0x2b, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e,
	0x74, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x6f, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x50, 0x6f,
	0x73, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2c, 0x2e,
	0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2e, 0x73,
	0x65, 0x72, 0x76, 0x6f, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x50, 0x6f, 0x73, 0x69, 0x74,
	0x69, 0x6f, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x34, 0x82, 0xd3, 0xe4,
	0x93, 0x02, 0x2e, 0x12, 0x2c, 0x2f, 0x76, 0x69, 0x61, 0x6d, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76,
	0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2f, 0x73, 0x65, 0x72, 0x76,
	0x6f, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x7d, 0x2f, 0x70, 0x6f, 0x73, 0x69, 0x74, 0x69, 0x6f,
	0x6e, 0x12, 0x85, 0x01, 0x0a, 0x04, 0x53, 0x74, 0x6f, 0x70, 0x12, 0x24, 0x2e, 0x76, 0x69, 0x61,
	0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2e, 0x73, 0x65, 0x72, 0x76,
	0x6f, 0x2e, 0x76, 0x31, 0x2e, 0x53, 0x74, 0x6f, 0x70, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x25, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e,
	0x74, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x6f, 0x2e, 0x76, 0x31, 0x2e, 0x53, 0x74, 0x6f, 0x70, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x30, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x2a, 0x22,
	0x28, 0x2f, 0x76, 0x69, 0x61, 0x6d, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f,
	0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x6f, 0x2f, 0x7b, 0x6e,
	0x61, 0x6d, 0x65, 0x7d, 0x2f, 0x73, 0x74, 0x6f, 0x70, 0x12, 0x96, 0x01, 0x0a, 0x08, 0x49, 0x73,
	0x4d, 0x6f, 0x76, 0x69, 0x6e, 0x67, 0x12, 0x28, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f,
	0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x6f, 0x2e, 0x76, 0x31,
	0x2e, 0x49, 0x73, 0x4d, 0x6f, 0x76, 0x69, 0x6e, 0x67, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x29, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e,
	0x74, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x6f, 0x2e, 0x76, 0x31, 0x2e, 0x49, 0x73, 0x4d, 0x6f, 0x76,
	0x69, 0x6e, 0x67, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x35, 0x82, 0xd3, 0xe4,
	0x93, 0x02, 0x2f, 0x12, 0x2d, 0x2f, 0x76, 0x69, 0x61, 0x6d, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76,
	0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2f, 0x73, 0x65, 0x72, 0x76,
	0x6f, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x7d, 0x2f, 0x69, 0x73, 0x5f, 0x6d, 0x6f, 0x76, 0x69,
	0x6e, 0x67, 0x12, 0x88, 0x01, 0x0a, 0x09, 0x44, 0x6f, 0x43, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64,
	0x12, 0x20, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x76,
	0x31, 0x2e, 0x44, 0x6f, 0x43, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x21, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e,
	0x2e, 0x76, 0x31, 0x2e, 0x44, 0x6f, 0x43, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x36, 0x82, 0xd3, 0xe4, 0x93, 0x02, 0x30, 0x22, 0x2e, 0x2f,
	0x76, 0x69, 0x61, 0x6d, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x70,
	0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x6f, 0x2f, 0x7b, 0x6e, 0x61, 0x6d,
	0x65, 0x7d, 0x2f, 0x64, 0x6f, 0x5f, 0x63, 0x6f, 0x6d, 0x6d, 0x61, 0x6e, 0x64, 0x12, 0x94, 0x01,
	0x0a, 0x0d, 0x47, 0x65, 0x74, 0x47, 0x65, 0x6f, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x65, 0x73, 0x12,
	0x24, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x76, 0x31,
	0x2e, 0x47, 0x65, 0x74, 0x47, 0x65, 0x6f, 0x6d, 0x65, 0x74, 0x72, 0x69, 0x65, 0x73, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x25, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d,
	0x6d, 0x6f, 0x6e, 0x2e, 0x76, 0x31, 0x2e, 0x47, 0x65, 0x74, 0x47, 0x65, 0x6f, 0x6d, 0x65, 0x74,
	0x72, 0x69, 0x65, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x36, 0x82, 0xd3,
	0xe4, 0x93, 0x02, 0x30, 0x12, 0x2e, 0x2f, 0x76, 0x69, 0x61, 0x6d, 0x2f, 0x61, 0x70, 0x69, 0x2f,
	0x76, 0x31, 0x2f, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2f, 0x73, 0x65, 0x72,
	0x76, 0x6f, 0x2f, 0x7b, 0x6e, 0x61, 0x6d, 0x65, 0x7d, 0x2f, 0x67, 0x65, 0x6f, 0x6d, 0x65, 0x74,
	0x72, 0x69, 0x65, 0x73, 0x42, 0x41, 0x0a, 0x1b, 0x63, 0x6f, 0x6d, 0x2e, 0x76, 0x69, 0x61, 0x6d,
	0x2e, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x6f,
	0x2e, 0x76, 0x31, 0x5a, 0x22, 0x67, 0x6f, 0x2e, 0x76, 0x69, 0x61, 0x6d, 0x2e, 0x63, 0x6f, 0x6d,
	0x2f, 0x61, 0x70, 0x69, 0x2f, 0x63, 0x6f, 0x6d, 0x70, 0x6f, 0x6e, 0x65, 0x6e, 0x74, 0x2f, 0x73,
	0x65, 0x72, 0x76, 0x6f, 0x2f, 0x76, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_component_servo_v1_servo_proto_rawDescOnce sync.Once
	file_component_servo_v1_servo_proto_rawDescData = file_component_servo_v1_servo_proto_rawDesc
)

func file_component_servo_v1_servo_proto_rawDescGZIP() []byte {
	file_component_servo_v1_servo_proto_rawDescOnce.Do(func() {
		file_component_servo_v1_servo_proto_rawDescData = protoimpl.X.CompressGZIP(file_component_servo_v1_servo_proto_rawDescData)
	})
	return file_component_servo_v1_servo_proto_rawDescData
}

var file_component_servo_v1_servo_proto_msgTypes = make([]protoimpl.MessageInfo, 9)
var file_component_servo_v1_servo_proto_goTypes = []interface{}{
	(*MoveRequest)(nil),              // 0: viam.component.servo.v1.MoveRequest
	(*MoveResponse)(nil),             // 1: viam.component.servo.v1.MoveResponse
	(*GetPositionRequest)(nil),       // 2: viam.component.servo.v1.GetPositionRequest
	(*GetPositionResponse)(nil),      // 3: viam.component.servo.v1.GetPositionResponse
	(*StopRequest)(nil),              // 4: viam.component.servo.v1.StopRequest
	(*StopResponse)(nil),             // 5: viam.component.servo.v1.StopResponse
	(*Status)(nil),                   // 6: viam.component.servo.v1.Status
	(*IsMovingRequest)(nil),          // 7: viam.component.servo.v1.IsMovingRequest
	(*IsMovingResponse)(nil),         // 8: viam.component.servo.v1.IsMovingResponse
	(*structpb.Struct)(nil),          // 9: google.protobuf.Struct
	(*v1.DoCommandRequest)(nil),      // 10: viam.common.v1.DoCommandRequest
	(*v1.GetGeometriesRequest)(nil),  // 11: viam.common.v1.GetGeometriesRequest
	(*v1.DoCommandResponse)(nil),     // 12: viam.common.v1.DoCommandResponse
	(*v1.GetGeometriesResponse)(nil), // 13: viam.common.v1.GetGeometriesResponse
}
var file_component_servo_v1_servo_proto_depIdxs = []int32{
	9,  // 0: viam.component.servo.v1.MoveRequest.extra:type_name -> google.protobuf.Struct
	9,  // 1: viam.component.servo.v1.GetPositionRequest.extra:type_name -> google.protobuf.Struct
	9,  // 2: viam.component.servo.v1.StopRequest.extra:type_name -> google.protobuf.Struct
	0,  // 3: viam.component.servo.v1.ServoService.Move:input_type -> viam.component.servo.v1.MoveRequest
	2,  // 4: viam.component.servo.v1.ServoService.GetPosition:input_type -> viam.component.servo.v1.GetPositionRequest
	4,  // 5: viam.component.servo.v1.ServoService.Stop:input_type -> viam.component.servo.v1.StopRequest
	7,  // 6: viam.component.servo.v1.ServoService.IsMoving:input_type -> viam.component.servo.v1.IsMovingRequest
	10, // 7: viam.component.servo.v1.ServoService.DoCommand:input_type -> viam.common.v1.DoCommandRequest
	11, // 8: viam.component.servo.v1.ServoService.GetGeometries:input_type -> viam.common.v1.GetGeometriesRequest
	1,  // 9: viam.component.servo.v1.ServoService.Move:output_type -> viam.component.servo.v1.MoveResponse
	3,  // 10: viam.component.servo.v1.ServoService.GetPosition:output_type -> viam.component.servo.v1.GetPositionResponse
	5,  // 11: viam.component.servo.v1.ServoService.Stop:output_type -> viam.component.servo.v1.StopResponse
	8,  // 12: viam.component.servo.v1.ServoService.IsMoving:output_type -> viam.component.servo.v1.IsMovingResponse
	12, // 13: viam.component.servo.v1.ServoService.DoCommand:output_type -> viam.common.v1.DoCommandResponse
	13, // 14: viam.component.servo.v1.ServoService.GetGeometries:output_type -> viam.common.v1.GetGeometriesResponse
	9,  // [9:15] is the sub-list for method output_type
	3,  // [3:9] is the sub-list for method input_type
	3,  // [3:3] is the sub-list for extension type_name
	3,  // [3:3] is the sub-list for extension extendee
	0,  // [0:3] is the sub-list for field type_name
}

func init() { file_component_servo_v1_servo_proto_init() }
func file_component_servo_v1_servo_proto_init() {
	if File_component_servo_v1_servo_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_component_servo_v1_servo_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*MoveRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_component_servo_v1_servo_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*MoveResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_component_servo_v1_servo_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetPositionRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_component_servo_v1_servo_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetPositionResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_component_servo_v1_servo_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*StopRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_component_servo_v1_servo_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*StopResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_component_servo_v1_servo_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Status); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_component_servo_v1_servo_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*IsMovingRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_component_servo_v1_servo_proto_msgTypes[8].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*IsMovingResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_component_servo_v1_servo_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   9,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_component_servo_v1_servo_proto_goTypes,
		DependencyIndexes: file_component_servo_v1_servo_proto_depIdxs,
		MessageInfos:      file_component_servo_v1_servo_proto_msgTypes,
	}.Build()
	File_component_servo_v1_servo_proto = out.File
	file_component_servo_v1_servo_proto_rawDesc = nil
	file_component_servo_v1_servo_proto_goTypes = nil
	file_component_servo_v1_servo_proto_depIdxs = nil
}
