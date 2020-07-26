/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import { Observable } from "zen-observable-ts";

export type CreatePatientInput = {
  id?: string | null;
  name?: string | null;
};

export type ModelPatientConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelPatientConditionInput | null> | null;
  or?: Array<ModelPatientConditionInput | null> | null;
  not?: ModelPatientConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdatePatientInput = {
  id: string;
  name?: string | null;
};

export type DeletePatientInput = {
  id?: string | null;
};

export type CreateDoctorInput = {
  id?: string | null;
  insurance?: Array<string | null> | null;
  description?: string | null;
  specializations?: Array<string | null> | null;
  name?: string | null;
};

export type ModelDoctorConditionInput = {
  insurance?: ModelStringInput | null;
  description?: ModelStringInput | null;
  specializations?: ModelStringInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelDoctorConditionInput | null> | null;
  or?: Array<ModelDoctorConditionInput | null> | null;
  not?: ModelDoctorConditionInput | null;
};

export type UpdateDoctorInput = {
  id: string;
  insurance?: Array<string | null> | null;
  description?: string | null;
  specializations?: Array<string | null> | null;
  name?: string | null;
};

export type DeleteDoctorInput = {
  id?: string | null;
};

export type CreateDoctorWorkSlotInput = {
  id?: string | null;
  doctorID: string;
  start_time?: string | null;
  end_time?: string | null;
  capacity?: number | null;
  doctorWorkSlotDoctorId: string;
};

export type ModelDoctorWorkSlotConditionInput = {
  start_time?: ModelStringInput | null;
  end_time?: ModelStringInput | null;
  capacity?: ModelIntInput | null;
  and?: Array<ModelDoctorWorkSlotConditionInput | null> | null;
  or?: Array<ModelDoctorWorkSlotConditionInput | null> | null;
  not?: ModelDoctorWorkSlotConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateDoctorWorkSlotInput = {
  id: string;
  doctorID?: string | null;
  start_time?: string | null;
  end_time?: string | null;
  capacity?: number | null;
  doctorWorkSlotDoctorId?: string | null;
};

export type DeleteDoctorWorkSlotInput = {
  id?: string | null;
};

export type CreateDoctorVideoSessionInput = {
  id?: string | null;
  doctorID: string;
  patientID: string;
  start_time?: string | null;
  end_time?: string | null;
  status?: SessionStatus | null;
};

export enum SessionStatus {
  REQUESTED = "REQUESTED",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED"
}

export type ModelDoctorVideoSessionConditionInput = {
  start_time?: ModelStringInput | null;
  end_time?: ModelStringInput | null;
  status?: ModelSessionStatusInput | null;
  and?: Array<ModelDoctorVideoSessionConditionInput | null> | null;
  or?: Array<ModelDoctorVideoSessionConditionInput | null> | null;
  not?: ModelDoctorVideoSessionConditionInput | null;
};

export type ModelSessionStatusInput = {
  eq?: SessionStatus | null;
  ne?: SessionStatus | null;
};

export type UpdateDoctorVideoSessionInput = {
  id: string;
  doctorID: string;
  patientID: string;
  start_time?: string | null;
  end_time?: string | null;
  status?: SessionStatus | null;
};

export type DeleteDoctorVideoSessionInput = {
  id: string;
  doctorID: string;
  patientID: string;
};

export type CreateDoctorTextSessionInput = {
  id?: string | null;
  doctorID: string;
  patientID: string;
  start_time?: string | null;
  end_time?: string | null;
  status?: SessionStatus | null;
};

export type ModelDoctorTextSessionConditionInput = {
  start_time?: ModelStringInput | null;
  end_time?: ModelStringInput | null;
  status?: ModelSessionStatusInput | null;
  and?: Array<ModelDoctorTextSessionConditionInput | null> | null;
  or?: Array<ModelDoctorTextSessionConditionInput | null> | null;
  not?: ModelDoctorTextSessionConditionInput | null;
};

export type UpdateDoctorTextSessionInput = {
  id: string;
  doctorID: string;
  patientID: string;
  start_time?: string | null;
  end_time?: string | null;
  status?: SessionStatus | null;
};

export type DeleteDoctorTextSessionInput = {
  id: string;
  doctorID: string;
  patientID: string;
};

export type CreateDoctorAudioSessionInput = {
  id?: string | null;
  doctorID: string;
  patientID: string;
  start_time?: string | null;
  end_time?: string | null;
  status?: SessionStatus | null;
};

export type ModelDoctorAudioSessionConditionInput = {
  start_time?: ModelStringInput | null;
  end_time?: ModelStringInput | null;
  status?: ModelSessionStatusInput | null;
  and?: Array<ModelDoctorAudioSessionConditionInput | null> | null;
  or?: Array<ModelDoctorAudioSessionConditionInput | null> | null;
  not?: ModelDoctorAudioSessionConditionInput | null;
};

export type UpdateDoctorAudioSessionInput = {
  id: string;
  doctorID: string;
  patientID: string;
  start_time?: string | null;
  end_time?: string | null;
  status?: SessionStatus | null;
};

export type DeleteDoctorAudioSessionInput = {
  id: string;
  doctorID: string;
  patientID: string;
};

export type ModelPatientFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelPatientFilterInput | null> | null;
  or?: Array<ModelPatientFilterInput | null> | null;
  not?: ModelPatientFilterInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type ModelDoctorFilterInput = {
  id?: ModelIDInput | null;
  insurance?: ModelStringInput | null;
  description?: ModelStringInput | null;
  specializations?: ModelStringInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelDoctorFilterInput | null> | null;
  or?: Array<ModelDoctorFilterInput | null> | null;
  not?: ModelDoctorFilterInput | null;
};

export type ModelDoctorWorkSlotFilterInput = {
  id?: ModelIDInput | null;
  doctorID?: ModelIDInput | null;
  start_time?: ModelStringInput | null;
  end_time?: ModelStringInput | null;
  capacity?: ModelIntInput | null;
  and?: Array<ModelDoctorWorkSlotFilterInput | null> | null;
  or?: Array<ModelDoctorWorkSlotFilterInput | null> | null;
  not?: ModelDoctorWorkSlotFilterInput | null;
};

export type ModelDoctorVideoSessionPrimaryCompositeKeyConditionInput = {
  eq?: ModelDoctorVideoSessionPrimaryCompositeKeyInput | null;
  le?: ModelDoctorVideoSessionPrimaryCompositeKeyInput | null;
  lt?: ModelDoctorVideoSessionPrimaryCompositeKeyInput | null;
  ge?: ModelDoctorVideoSessionPrimaryCompositeKeyInput | null;
  gt?: ModelDoctorVideoSessionPrimaryCompositeKeyInput | null;
  between?: Array<ModelDoctorVideoSessionPrimaryCompositeKeyInput | null> | null;
  beginsWith?: ModelDoctorVideoSessionPrimaryCompositeKeyInput | null;
};

export type ModelDoctorVideoSessionPrimaryCompositeKeyInput = {
  doctorID?: string | null;
  patientID?: string | null;
};

export type ModelDoctorVideoSessionFilterInput = {
  id?: ModelIDInput | null;
  doctorID?: ModelIDInput | null;
  patientID?: ModelIDInput | null;
  start_time?: ModelStringInput | null;
  end_time?: ModelStringInput | null;
  status?: ModelSessionStatusInput | null;
  and?: Array<ModelDoctorVideoSessionFilterInput | null> | null;
  or?: Array<ModelDoctorVideoSessionFilterInput | null> | null;
  not?: ModelDoctorVideoSessionFilterInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelDoctorTextSessionPrimaryCompositeKeyConditionInput = {
  eq?: ModelDoctorTextSessionPrimaryCompositeKeyInput | null;
  le?: ModelDoctorTextSessionPrimaryCompositeKeyInput | null;
  lt?: ModelDoctorTextSessionPrimaryCompositeKeyInput | null;
  ge?: ModelDoctorTextSessionPrimaryCompositeKeyInput | null;
  gt?: ModelDoctorTextSessionPrimaryCompositeKeyInput | null;
  between?: Array<ModelDoctorTextSessionPrimaryCompositeKeyInput | null> | null;
  beginsWith?: ModelDoctorTextSessionPrimaryCompositeKeyInput | null;
};

export type ModelDoctorTextSessionPrimaryCompositeKeyInput = {
  doctorID?: string | null;
  patientID?: string | null;
};

export type ModelDoctorTextSessionFilterInput = {
  id?: ModelIDInput | null;
  doctorID?: ModelIDInput | null;
  patientID?: ModelIDInput | null;
  start_time?: ModelStringInput | null;
  end_time?: ModelStringInput | null;
  status?: ModelSessionStatusInput | null;
  and?: Array<ModelDoctorTextSessionFilterInput | null> | null;
  or?: Array<ModelDoctorTextSessionFilterInput | null> | null;
  not?: ModelDoctorTextSessionFilterInput | null;
};

export type ModelDoctorAudioSessionPrimaryCompositeKeyConditionInput = {
  eq?: ModelDoctorAudioSessionPrimaryCompositeKeyInput | null;
  le?: ModelDoctorAudioSessionPrimaryCompositeKeyInput | null;
  lt?: ModelDoctorAudioSessionPrimaryCompositeKeyInput | null;
  ge?: ModelDoctorAudioSessionPrimaryCompositeKeyInput | null;
  gt?: ModelDoctorAudioSessionPrimaryCompositeKeyInput | null;
  between?: Array<ModelDoctorAudioSessionPrimaryCompositeKeyInput | null> | null;
  beginsWith?: ModelDoctorAudioSessionPrimaryCompositeKeyInput | null;
};

export type ModelDoctorAudioSessionPrimaryCompositeKeyInput = {
  doctorID?: string | null;
  patientID?: string | null;
};

export type ModelDoctorAudioSessionFilterInput = {
  id?: ModelIDInput | null;
  doctorID?: ModelIDInput | null;
  patientID?: ModelIDInput | null;
  start_time?: ModelStringInput | null;
  end_time?: ModelStringInput | null;
  status?: ModelSessionStatusInput | null;
  and?: Array<ModelDoctorAudioSessionFilterInput | null> | null;
  or?: Array<ModelDoctorAudioSessionFilterInput | null> | null;
  not?: ModelDoctorAudioSessionFilterInput | null;
};

export type CreatePatientMutation = {
  __typename: "Patient";
  id: string;
  name: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePatientMutation = {
  __typename: "Patient";
  id: string;
  name: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeletePatientMutation = {
  __typename: "Patient";
  id: string;
  name: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateDoctorMutation = {
  __typename: "Doctor";
  id: string;
  insurance: Array<string | null> | null;
  description: string | null;
  specializations: Array<string | null> | null;
  name: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateDoctorMutation = {
  __typename: "Doctor";
  id: string;
  insurance: Array<string | null> | null;
  description: string | null;
  specializations: Array<string | null> | null;
  name: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteDoctorMutation = {
  __typename: "Doctor";
  id: string;
  insurance: Array<string | null> | null;
  description: string | null;
  specializations: Array<string | null> | null;
  name: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateDoctorWorkSlotMutation = {
  __typename: "DoctorWorkSlot";
  id: string;
  doctorID: string;
  doctor: {
    __typename: "Doctor";
    id: string;
    insurance: Array<string | null> | null;
    description: string | null;
    specializations: Array<string | null> | null;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  start_time: string | null;
  end_time: string | null;
  capacity: number | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateDoctorWorkSlotMutation = {
  __typename: "DoctorWorkSlot";
  id: string;
  doctorID: string;
  doctor: {
    __typename: "Doctor";
    id: string;
    insurance: Array<string | null> | null;
    description: string | null;
    specializations: Array<string | null> | null;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  start_time: string | null;
  end_time: string | null;
  capacity: number | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteDoctorWorkSlotMutation = {
  __typename: "DoctorWorkSlot";
  id: string;
  doctorID: string;
  doctor: {
    __typename: "Doctor";
    id: string;
    insurance: Array<string | null> | null;
    description: string | null;
    specializations: Array<string | null> | null;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  start_time: string | null;
  end_time: string | null;
  capacity: number | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateDoctorVideoSessionMutation = {
  __typename: "DoctorVideoSession";
  id: string;
  doctorID: string;
  doctor: {
    __typename: "Doctor";
    id: string;
    insurance: Array<string | null> | null;
    description: string | null;
    specializations: Array<string | null> | null;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  patientID: string;
  patient: {
    __typename: "Patient";
    id: string;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  start_time: string | null;
  end_time: string | null;
  status: SessionStatus | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateDoctorVideoSessionMutation = {
  __typename: "DoctorVideoSession";
  id: string;
  doctorID: string;
  doctor: {
    __typename: "Doctor";
    id: string;
    insurance: Array<string | null> | null;
    description: string | null;
    specializations: Array<string | null> | null;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  patientID: string;
  patient: {
    __typename: "Patient";
    id: string;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  start_time: string | null;
  end_time: string | null;
  status: SessionStatus | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteDoctorVideoSessionMutation = {
  __typename: "DoctorVideoSession";
  id: string;
  doctorID: string;
  doctor: {
    __typename: "Doctor";
    id: string;
    insurance: Array<string | null> | null;
    description: string | null;
    specializations: Array<string | null> | null;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  patientID: string;
  patient: {
    __typename: "Patient";
    id: string;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  start_time: string | null;
  end_time: string | null;
  status: SessionStatus | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateDoctorTextSessionMutation = {
  __typename: "DoctorTextSession";
  id: string;
  doctorID: string;
  doctor: {
    __typename: "Doctor";
    id: string;
    insurance: Array<string | null> | null;
    description: string | null;
    specializations: Array<string | null> | null;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  patientID: string;
  patient: {
    __typename: "Patient";
    id: string;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  start_time: string | null;
  end_time: string | null;
  status: SessionStatus | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateDoctorTextSessionMutation = {
  __typename: "DoctorTextSession";
  id: string;
  doctorID: string;
  doctor: {
    __typename: "Doctor";
    id: string;
    insurance: Array<string | null> | null;
    description: string | null;
    specializations: Array<string | null> | null;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  patientID: string;
  patient: {
    __typename: "Patient";
    id: string;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  start_time: string | null;
  end_time: string | null;
  status: SessionStatus | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteDoctorTextSessionMutation = {
  __typename: "DoctorTextSession";
  id: string;
  doctorID: string;
  doctor: {
    __typename: "Doctor";
    id: string;
    insurance: Array<string | null> | null;
    description: string | null;
    specializations: Array<string | null> | null;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  patientID: string;
  patient: {
    __typename: "Patient";
    id: string;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  start_time: string | null;
  end_time: string | null;
  status: SessionStatus | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateDoctorAudioSessionMutation = {
  __typename: "DoctorAudioSession";
  id: string;
  doctorID: string;
  doctor: {
    __typename: "Doctor";
    id: string;
    insurance: Array<string | null> | null;
    description: string | null;
    specializations: Array<string | null> | null;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  patientID: string;
  patient: {
    __typename: "Patient";
    id: string;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  start_time: string | null;
  end_time: string | null;
  status: SessionStatus | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateDoctorAudioSessionMutation = {
  __typename: "DoctorAudioSession";
  id: string;
  doctorID: string;
  doctor: {
    __typename: "Doctor";
    id: string;
    insurance: Array<string | null> | null;
    description: string | null;
    specializations: Array<string | null> | null;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  patientID: string;
  patient: {
    __typename: "Patient";
    id: string;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  start_time: string | null;
  end_time: string | null;
  status: SessionStatus | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteDoctorAudioSessionMutation = {
  __typename: "DoctorAudioSession";
  id: string;
  doctorID: string;
  doctor: {
    __typename: "Doctor";
    id: string;
    insurance: Array<string | null> | null;
    description: string | null;
    specializations: Array<string | null> | null;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  patientID: string;
  patient: {
    __typename: "Patient";
    id: string;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  start_time: string | null;
  end_time: string | null;
  status: SessionStatus | null;
  createdAt: string;
  updatedAt: string;
};

export type GetPatientQuery = {
  __typename: "Patient";
  id: string;
  name: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListPatientsQuery = {
  __typename: "ModelPatientConnection";
  items: Array<{
    __typename: "Patient";
    id: string;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetDoctorQuery = {
  __typename: "Doctor";
  id: string;
  insurance: Array<string | null> | null;
  description: string | null;
  specializations: Array<string | null> | null;
  name: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListDoctorsQuery = {
  __typename: "ModelDoctorConnection";
  items: Array<{
    __typename: "Doctor";
    id: string;
    insurance: Array<string | null> | null;
    description: string | null;
    specializations: Array<string | null> | null;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetDoctorWorkSlotQuery = {
  __typename: "DoctorWorkSlot";
  id: string;
  doctorID: string;
  doctor: {
    __typename: "Doctor";
    id: string;
    insurance: Array<string | null> | null;
    description: string | null;
    specializations: Array<string | null> | null;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  start_time: string | null;
  end_time: string | null;
  capacity: number | null;
  createdAt: string;
  updatedAt: string;
};

export type ListDoctorWorkSlotsQuery = {
  __typename: "ModelDoctorWorkSlotConnection";
  items: Array<{
    __typename: "DoctorWorkSlot";
    id: string;
    doctorID: string;
    start_time: string | null;
    end_time: string | null;
    capacity: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetDoctorVideoSessionQuery = {
  __typename: "DoctorVideoSession";
  id: string;
  doctorID: string;
  doctor: {
    __typename: "Doctor";
    id: string;
    insurance: Array<string | null> | null;
    description: string | null;
    specializations: Array<string | null> | null;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  patientID: string;
  patient: {
    __typename: "Patient";
    id: string;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  start_time: string | null;
  end_time: string | null;
  status: SessionStatus | null;
  createdAt: string;
  updatedAt: string;
};

export type ListDoctorVideoSessionsQuery = {
  __typename: "ModelDoctorVideoSessionConnection";
  items: Array<{
    __typename: "DoctorVideoSession";
    id: string;
    doctorID: string;
    patientID: string;
    start_time: string | null;
    end_time: string | null;
    status: SessionStatus | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetDoctorTextSessionQuery = {
  __typename: "DoctorTextSession";
  id: string;
  doctorID: string;
  doctor: {
    __typename: "Doctor";
    id: string;
    insurance: Array<string | null> | null;
    description: string | null;
    specializations: Array<string | null> | null;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  patientID: string;
  patient: {
    __typename: "Patient";
    id: string;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  start_time: string | null;
  end_time: string | null;
  status: SessionStatus | null;
  createdAt: string;
  updatedAt: string;
};

export type ListDoctorTextSessionsQuery = {
  __typename: "ModelDoctorTextSessionConnection";
  items: Array<{
    __typename: "DoctorTextSession";
    id: string;
    doctorID: string;
    patientID: string;
    start_time: string | null;
    end_time: string | null;
    status: SessionStatus | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetDoctorAudioSessionQuery = {
  __typename: "DoctorAudioSession";
  id: string;
  doctorID: string;
  doctor: {
    __typename: "Doctor";
    id: string;
    insurance: Array<string | null> | null;
    description: string | null;
    specializations: Array<string | null> | null;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  patientID: string;
  patient: {
    __typename: "Patient";
    id: string;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  start_time: string | null;
  end_time: string | null;
  status: SessionStatus | null;
  createdAt: string;
  updatedAt: string;
};

export type ListDoctorAudioSessionsQuery = {
  __typename: "ModelDoctorAudioSessionConnection";
  items: Array<{
    __typename: "DoctorAudioSession";
    id: string;
    doctorID: string;
    patientID: string;
    start_time: string | null;
    end_time: string | null;
    status: SessionStatus | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type DoctorWorkSlotByDoctorQuery = {
  __typename: "ModelDoctorWorkSlotConnection";
  items: Array<{
    __typename: "DoctorWorkSlot";
    id: string;
    doctorID: string;
    start_time: string | null;
    end_time: string | null;
    capacity: number | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type DoctorVideoSessionByDoctorQuery = {
  __typename: "ModelDoctorVideoSessionConnection";
  items: Array<{
    __typename: "DoctorVideoSession";
    id: string;
    doctorID: string;
    patientID: string;
    start_time: string | null;
    end_time: string | null;
    status: SessionStatus | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type DoctorVideoSessionByPatientQuery = {
  __typename: "ModelDoctorVideoSessionConnection";
  items: Array<{
    __typename: "DoctorVideoSession";
    id: string;
    doctorID: string;
    patientID: string;
    start_time: string | null;
    end_time: string | null;
    status: SessionStatus | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type DoctorTextSessionByDoctorQuery = {
  __typename: "ModelDoctorTextSessionConnection";
  items: Array<{
    __typename: "DoctorTextSession";
    id: string;
    doctorID: string;
    patientID: string;
    start_time: string | null;
    end_time: string | null;
    status: SessionStatus | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type DoctorTextSessionByPatientQuery = {
  __typename: "ModelDoctorTextSessionConnection";
  items: Array<{
    __typename: "DoctorTextSession";
    id: string;
    doctorID: string;
    patientID: string;
    start_time: string | null;
    end_time: string | null;
    status: SessionStatus | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type DoctorAudioSessionByDoctorQuery = {
  __typename: "ModelDoctorAudioSessionConnection";
  items: Array<{
    __typename: "DoctorAudioSession";
    id: string;
    doctorID: string;
    patientID: string;
    start_time: string | null;
    end_time: string | null;
    status: SessionStatus | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type DoctorAudioSessionByPatientQuery = {
  __typename: "ModelDoctorAudioSessionConnection";
  items: Array<{
    __typename: "DoctorAudioSession";
    id: string;
    doctorID: string;
    patientID: string;
    start_time: string | null;
    end_time: string | null;
    status: SessionStatus | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreatePatientSubscription = {
  __typename: "Patient";
  id: string;
  name: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePatientSubscription = {
  __typename: "Patient";
  id: string;
  name: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePatientSubscription = {
  __typename: "Patient";
  id: string;
  name: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateDoctorSubscription = {
  __typename: "Doctor";
  id: string;
  insurance: Array<string | null> | null;
  description: string | null;
  specializations: Array<string | null> | null;
  name: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateDoctorSubscription = {
  __typename: "Doctor";
  id: string;
  insurance: Array<string | null> | null;
  description: string | null;
  specializations: Array<string | null> | null;
  name: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteDoctorSubscription = {
  __typename: "Doctor";
  id: string;
  insurance: Array<string | null> | null;
  description: string | null;
  specializations: Array<string | null> | null;
  name: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateDoctorWorkSlotSubscription = {
  __typename: "DoctorWorkSlot";
  id: string;
  doctorID: string;
  doctor: {
    __typename: "Doctor";
    id: string;
    insurance: Array<string | null> | null;
    description: string | null;
    specializations: Array<string | null> | null;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  start_time: string | null;
  end_time: string | null;
  capacity: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateDoctorWorkSlotSubscription = {
  __typename: "DoctorWorkSlot";
  id: string;
  doctorID: string;
  doctor: {
    __typename: "Doctor";
    id: string;
    insurance: Array<string | null> | null;
    description: string | null;
    specializations: Array<string | null> | null;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  start_time: string | null;
  end_time: string | null;
  capacity: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteDoctorWorkSlotSubscription = {
  __typename: "DoctorWorkSlot";
  id: string;
  doctorID: string;
  doctor: {
    __typename: "Doctor";
    id: string;
    insurance: Array<string | null> | null;
    description: string | null;
    specializations: Array<string | null> | null;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  start_time: string | null;
  end_time: string | null;
  capacity: number | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateDoctorVideoSessionSubscription = {
  __typename: "DoctorVideoSession";
  id: string;
  doctorID: string;
  doctor: {
    __typename: "Doctor";
    id: string;
    insurance: Array<string | null> | null;
    description: string | null;
    specializations: Array<string | null> | null;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  patientID: string;
  patient: {
    __typename: "Patient";
    id: string;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  start_time: string | null;
  end_time: string | null;
  status: SessionStatus | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateDoctorVideoSessionSubscription = {
  __typename: "DoctorVideoSession";
  id: string;
  doctorID: string;
  doctor: {
    __typename: "Doctor";
    id: string;
    insurance: Array<string | null> | null;
    description: string | null;
    specializations: Array<string | null> | null;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  patientID: string;
  patient: {
    __typename: "Patient";
    id: string;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  start_time: string | null;
  end_time: string | null;
  status: SessionStatus | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteDoctorVideoSessionSubscription = {
  __typename: "DoctorVideoSession";
  id: string;
  doctorID: string;
  doctor: {
    __typename: "Doctor";
    id: string;
    insurance: Array<string | null> | null;
    description: string | null;
    specializations: Array<string | null> | null;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  patientID: string;
  patient: {
    __typename: "Patient";
    id: string;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  start_time: string | null;
  end_time: string | null;
  status: SessionStatus | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateDoctorTextSessionSubscription = {
  __typename: "DoctorTextSession";
  id: string;
  doctorID: string;
  doctor: {
    __typename: "Doctor";
    id: string;
    insurance: Array<string | null> | null;
    description: string | null;
    specializations: Array<string | null> | null;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  patientID: string;
  patient: {
    __typename: "Patient";
    id: string;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  start_time: string | null;
  end_time: string | null;
  status: SessionStatus | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateDoctorTextSessionSubscription = {
  __typename: "DoctorTextSession";
  id: string;
  doctorID: string;
  doctor: {
    __typename: "Doctor";
    id: string;
    insurance: Array<string | null> | null;
    description: string | null;
    specializations: Array<string | null> | null;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  patientID: string;
  patient: {
    __typename: "Patient";
    id: string;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  start_time: string | null;
  end_time: string | null;
  status: SessionStatus | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteDoctorTextSessionSubscription = {
  __typename: "DoctorTextSession";
  id: string;
  doctorID: string;
  doctor: {
    __typename: "Doctor";
    id: string;
    insurance: Array<string | null> | null;
    description: string | null;
    specializations: Array<string | null> | null;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  patientID: string;
  patient: {
    __typename: "Patient";
    id: string;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  start_time: string | null;
  end_time: string | null;
  status: SessionStatus | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateDoctorAudioSessionSubscription = {
  __typename: "DoctorAudioSession";
  id: string;
  doctorID: string;
  doctor: {
    __typename: "Doctor";
    id: string;
    insurance: Array<string | null> | null;
    description: string | null;
    specializations: Array<string | null> | null;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  patientID: string;
  patient: {
    __typename: "Patient";
    id: string;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  start_time: string | null;
  end_time: string | null;
  status: SessionStatus | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateDoctorAudioSessionSubscription = {
  __typename: "DoctorAudioSession";
  id: string;
  doctorID: string;
  doctor: {
    __typename: "Doctor";
    id: string;
    insurance: Array<string | null> | null;
    description: string | null;
    specializations: Array<string | null> | null;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  patientID: string;
  patient: {
    __typename: "Patient";
    id: string;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  start_time: string | null;
  end_time: string | null;
  status: SessionStatus | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteDoctorAudioSessionSubscription = {
  __typename: "DoctorAudioSession";
  id: string;
  doctorID: string;
  doctor: {
    __typename: "Doctor";
    id: string;
    insurance: Array<string | null> | null;
    description: string | null;
    specializations: Array<string | null> | null;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  patientID: string;
  patient: {
    __typename: "Patient";
    id: string;
    name: string | null;
    createdAt: string;
    updatedAt: string;
  };
  start_time: string | null;
  end_time: string | null;
  status: SessionStatus | null;
  createdAt: string;
  updatedAt: string;
};

export class APIService {
  async CreatePatient(
    input: CreatePatientInput,
    condition?: ModelPatientConditionInput
  ): Promise<CreatePatientMutation> {
    const statement = `mutation CreatePatient($input: CreatePatientInput!, $condition: ModelPatientConditionInput) {
        createPatient(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePatientMutation>response.data.createPatient;
  }
  async UpdatePatient(
    input: UpdatePatientInput,
    condition?: ModelPatientConditionInput
  ): Promise<UpdatePatientMutation> {
    const statement = `mutation UpdatePatient($input: UpdatePatientInput!, $condition: ModelPatientConditionInput) {
        updatePatient(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePatientMutation>response.data.updatePatient;
  }
  async DeletePatient(
    input: DeletePatientInput,
    condition?: ModelPatientConditionInput
  ): Promise<DeletePatientMutation> {
    const statement = `mutation DeletePatient($input: DeletePatientInput!, $condition: ModelPatientConditionInput) {
        deletePatient(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePatientMutation>response.data.deletePatient;
  }
  async CreateDoctor(
    input: CreateDoctorInput,
    condition?: ModelDoctorConditionInput
  ): Promise<CreateDoctorMutation> {
    const statement = `mutation CreateDoctor($input: CreateDoctorInput!, $condition: ModelDoctorConditionInput) {
        createDoctor(input: $input, condition: $condition) {
          __typename
          id
          insurance
          description
          specializations
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDoctorMutation>response.data.createDoctor;
  }
  async UpdateDoctor(
    input: UpdateDoctorInput,
    condition?: ModelDoctorConditionInput
  ): Promise<UpdateDoctorMutation> {
    const statement = `mutation UpdateDoctor($input: UpdateDoctorInput!, $condition: ModelDoctorConditionInput) {
        updateDoctor(input: $input, condition: $condition) {
          __typename
          id
          insurance
          description
          specializations
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDoctorMutation>response.data.updateDoctor;
  }
  async DeleteDoctor(
    input: DeleteDoctorInput,
    condition?: ModelDoctorConditionInput
  ): Promise<DeleteDoctorMutation> {
    const statement = `mutation DeleteDoctor($input: DeleteDoctorInput!, $condition: ModelDoctorConditionInput) {
        deleteDoctor(input: $input, condition: $condition) {
          __typename
          id
          insurance
          description
          specializations
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDoctorMutation>response.data.deleteDoctor;
  }
  async CreateDoctorWorkSlot(
    input: CreateDoctorWorkSlotInput,
    condition?: ModelDoctorWorkSlotConditionInput
  ): Promise<CreateDoctorWorkSlotMutation> {
    const statement = `mutation CreateDoctorWorkSlot($input: CreateDoctorWorkSlotInput!, $condition: ModelDoctorWorkSlotConditionInput) {
        createDoctorWorkSlot(input: $input, condition: $condition) {
          __typename
          id
          doctorID
          doctor {
            __typename
            id
            insurance
            description
            specializations
            name
            createdAt
            updatedAt
          }
          start_time
          end_time
          capacity
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDoctorWorkSlotMutation>response.data.createDoctorWorkSlot;
  }
  async UpdateDoctorWorkSlot(
    input: UpdateDoctorWorkSlotInput,
    condition?: ModelDoctorWorkSlotConditionInput
  ): Promise<UpdateDoctorWorkSlotMutation> {
    const statement = `mutation UpdateDoctorWorkSlot($input: UpdateDoctorWorkSlotInput!, $condition: ModelDoctorWorkSlotConditionInput) {
        updateDoctorWorkSlot(input: $input, condition: $condition) {
          __typename
          id
          doctorID
          doctor {
            __typename
            id
            insurance
            description
            specializations
            name
            createdAt
            updatedAt
          }
          start_time
          end_time
          capacity
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDoctorWorkSlotMutation>response.data.updateDoctorWorkSlot;
  }
  async DeleteDoctorWorkSlot(
    input: DeleteDoctorWorkSlotInput,
    condition?: ModelDoctorWorkSlotConditionInput
  ): Promise<DeleteDoctorWorkSlotMutation> {
    const statement = `mutation DeleteDoctorWorkSlot($input: DeleteDoctorWorkSlotInput!, $condition: ModelDoctorWorkSlotConditionInput) {
        deleteDoctorWorkSlot(input: $input, condition: $condition) {
          __typename
          id
          doctorID
          doctor {
            __typename
            id
            insurance
            description
            specializations
            name
            createdAt
            updatedAt
          }
          start_time
          end_time
          capacity
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDoctorWorkSlotMutation>response.data.deleteDoctorWorkSlot;
  }
  async CreateDoctorVideoSession(
    input: CreateDoctorVideoSessionInput,
    condition?: ModelDoctorVideoSessionConditionInput
  ): Promise<CreateDoctorVideoSessionMutation> {
    const statement = `mutation CreateDoctorVideoSession($input: CreateDoctorVideoSessionInput!, $condition: ModelDoctorVideoSessionConditionInput) {
        createDoctorVideoSession(input: $input, condition: $condition) {
          __typename
          id
          doctorID
          doctor {
            __typename
            id
            insurance
            description
            specializations
            name
            createdAt
            updatedAt
          }
          patientID
          patient {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          start_time
          end_time
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDoctorVideoSessionMutation>(
      response.data.createDoctorVideoSession
    );
  }
  async UpdateDoctorVideoSession(
    input: UpdateDoctorVideoSessionInput,
    condition?: ModelDoctorVideoSessionConditionInput
  ): Promise<UpdateDoctorVideoSessionMutation> {
    const statement = `mutation UpdateDoctorVideoSession($input: UpdateDoctorVideoSessionInput!, $condition: ModelDoctorVideoSessionConditionInput) {
        updateDoctorVideoSession(input: $input, condition: $condition) {
          __typename
          id
          doctorID
          doctor {
            __typename
            id
            insurance
            description
            specializations
            name
            createdAt
            updatedAt
          }
          patientID
          patient {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          start_time
          end_time
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDoctorVideoSessionMutation>(
      response.data.updateDoctorVideoSession
    );
  }
  async DeleteDoctorVideoSession(
    input: DeleteDoctorVideoSessionInput,
    condition?: ModelDoctorVideoSessionConditionInput
  ): Promise<DeleteDoctorVideoSessionMutation> {
    const statement = `mutation DeleteDoctorVideoSession($input: DeleteDoctorVideoSessionInput!, $condition: ModelDoctorVideoSessionConditionInput) {
        deleteDoctorVideoSession(input: $input, condition: $condition) {
          __typename
          id
          doctorID
          doctor {
            __typename
            id
            insurance
            description
            specializations
            name
            createdAt
            updatedAt
          }
          patientID
          patient {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          start_time
          end_time
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDoctorVideoSessionMutation>(
      response.data.deleteDoctorVideoSession
    );
  }
  async CreateDoctorTextSession(
    input: CreateDoctorTextSessionInput,
    condition?: ModelDoctorTextSessionConditionInput
  ): Promise<CreateDoctorTextSessionMutation> {
    const statement = `mutation CreateDoctorTextSession($input: CreateDoctorTextSessionInput!, $condition: ModelDoctorTextSessionConditionInput) {
        createDoctorTextSession(input: $input, condition: $condition) {
          __typename
          id
          doctorID
          doctor {
            __typename
            id
            insurance
            description
            specializations
            name
            createdAt
            updatedAt
          }
          patientID
          patient {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          start_time
          end_time
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDoctorTextSessionMutation>(
      response.data.createDoctorTextSession
    );
  }
  async UpdateDoctorTextSession(
    input: UpdateDoctorTextSessionInput,
    condition?: ModelDoctorTextSessionConditionInput
  ): Promise<UpdateDoctorTextSessionMutation> {
    const statement = `mutation UpdateDoctorTextSession($input: UpdateDoctorTextSessionInput!, $condition: ModelDoctorTextSessionConditionInput) {
        updateDoctorTextSession(input: $input, condition: $condition) {
          __typename
          id
          doctorID
          doctor {
            __typename
            id
            insurance
            description
            specializations
            name
            createdAt
            updatedAt
          }
          patientID
          patient {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          start_time
          end_time
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDoctorTextSessionMutation>(
      response.data.updateDoctorTextSession
    );
  }
  async DeleteDoctorTextSession(
    input: DeleteDoctorTextSessionInput,
    condition?: ModelDoctorTextSessionConditionInput
  ): Promise<DeleteDoctorTextSessionMutation> {
    const statement = `mutation DeleteDoctorTextSession($input: DeleteDoctorTextSessionInput!, $condition: ModelDoctorTextSessionConditionInput) {
        deleteDoctorTextSession(input: $input, condition: $condition) {
          __typename
          id
          doctorID
          doctor {
            __typename
            id
            insurance
            description
            specializations
            name
            createdAt
            updatedAt
          }
          patientID
          patient {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          start_time
          end_time
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDoctorTextSessionMutation>(
      response.data.deleteDoctorTextSession
    );
  }
  async CreateDoctorAudioSession(
    input: CreateDoctorAudioSessionInput,
    condition?: ModelDoctorAudioSessionConditionInput
  ): Promise<CreateDoctorAudioSessionMutation> {
    const statement = `mutation CreateDoctorAudioSession($input: CreateDoctorAudioSessionInput!, $condition: ModelDoctorAudioSessionConditionInput) {
        createDoctorAudioSession(input: $input, condition: $condition) {
          __typename
          id
          doctorID
          doctor {
            __typename
            id
            insurance
            description
            specializations
            name
            createdAt
            updatedAt
          }
          patientID
          patient {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          start_time
          end_time
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDoctorAudioSessionMutation>(
      response.data.createDoctorAudioSession
    );
  }
  async UpdateDoctorAudioSession(
    input: UpdateDoctorAudioSessionInput,
    condition?: ModelDoctorAudioSessionConditionInput
  ): Promise<UpdateDoctorAudioSessionMutation> {
    const statement = `mutation UpdateDoctorAudioSession($input: UpdateDoctorAudioSessionInput!, $condition: ModelDoctorAudioSessionConditionInput) {
        updateDoctorAudioSession(input: $input, condition: $condition) {
          __typename
          id
          doctorID
          doctor {
            __typename
            id
            insurance
            description
            specializations
            name
            createdAt
            updatedAt
          }
          patientID
          patient {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          start_time
          end_time
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDoctorAudioSessionMutation>(
      response.data.updateDoctorAudioSession
    );
  }
  async DeleteDoctorAudioSession(
    input: DeleteDoctorAudioSessionInput,
    condition?: ModelDoctorAudioSessionConditionInput
  ): Promise<DeleteDoctorAudioSessionMutation> {
    const statement = `mutation DeleteDoctorAudioSession($input: DeleteDoctorAudioSessionInput!, $condition: ModelDoctorAudioSessionConditionInput) {
        deleteDoctorAudioSession(input: $input, condition: $condition) {
          __typename
          id
          doctorID
          doctor {
            __typename
            id
            insurance
            description
            specializations
            name
            createdAt
            updatedAt
          }
          patientID
          patient {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          start_time
          end_time
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDoctorAudioSessionMutation>(
      response.data.deleteDoctorAudioSession
    );
  }
  async GetPatient(id: string): Promise<GetPatientQuery> {
    const statement = `query GetPatient($id: ID!) {
        getPatient(id: $id) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPatientQuery>response.data.getPatient;
  }
  async ListPatients(
    filter?: ModelPatientFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPatientsQuery> {
    const statement = `query ListPatients($filter: ModelPatientFilterInput, $limit: Int, $nextToken: String) {
        listPatients(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPatientsQuery>response.data.listPatients;
  }
  async GetDoctor(id: string): Promise<GetDoctorQuery> {
    const statement = `query GetDoctor($id: ID!) {
        getDoctor(id: $id) {
          __typename
          id
          insurance
          description
          specializations
          name
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDoctorQuery>response.data.getDoctor;
  }
  async ListDoctors(
    filter?: ModelDoctorFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDoctorsQuery> {
    const statement = `query ListDoctors($filter: ModelDoctorFilterInput, $limit: Int, $nextToken: String) {
        listDoctors(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            insurance
            description
            specializations
            name
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDoctorsQuery>response.data.listDoctors;
  }
  async GetDoctorWorkSlot(id: string): Promise<GetDoctorWorkSlotQuery> {
    const statement = `query GetDoctorWorkSlot($id: ID!) {
        getDoctorWorkSlot(id: $id) {
          __typename
          id
          doctorID
          doctor {
            __typename
            id
            insurance
            description
            specializations
            name
            createdAt
            updatedAt
          }
          start_time
          end_time
          capacity
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDoctorWorkSlotQuery>response.data.getDoctorWorkSlot;
  }
  async ListDoctorWorkSlots(
    filter?: ModelDoctorWorkSlotFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDoctorWorkSlotsQuery> {
    const statement = `query ListDoctorWorkSlots($filter: ModelDoctorWorkSlotFilterInput, $limit: Int, $nextToken: String) {
        listDoctorWorkSlots(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            doctorID
            start_time
            end_time
            capacity
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDoctorWorkSlotsQuery>response.data.listDoctorWorkSlots;
  }
  async GetDoctorVideoSession(
    id: string,
    doctorID: string,
    patientID: string
  ): Promise<GetDoctorVideoSessionQuery> {
    const statement = `query GetDoctorVideoSession($id: ID!, $doctorID: ID!, $patientID: ID!) {
        getDoctorVideoSession(id: $id, doctorID: $doctorID, patientID: $patientID) {
          __typename
          id
          doctorID
          doctor {
            __typename
            id
            insurance
            description
            specializations
            name
            createdAt
            updatedAt
          }
          patientID
          patient {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          start_time
          end_time
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
      doctorID,
      patientID
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDoctorVideoSessionQuery>response.data.getDoctorVideoSession;
  }
  async ListDoctorVideoSessions(
    id?: string,
    doctorIDPatientID?: ModelDoctorVideoSessionPrimaryCompositeKeyConditionInput,
    filter?: ModelDoctorVideoSessionFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListDoctorVideoSessionsQuery> {
    const statement = `query ListDoctorVideoSessions($id: ID, $doctorIDPatientID: ModelDoctorVideoSessionPrimaryCompositeKeyConditionInput, $filter: ModelDoctorVideoSessionFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listDoctorVideoSessions(id: $id, doctorIDPatientID: $doctorIDPatientID, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            doctorID
            patientID
            start_time
            end_time
            status
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (doctorIDPatientID) {
      gqlAPIServiceArguments.doctorIDPatientID = doctorIDPatientID;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDoctorVideoSessionsQuery>response.data.listDoctorVideoSessions;
  }
  async GetDoctorTextSession(
    id: string,
    doctorID: string,
    patientID: string
  ): Promise<GetDoctorTextSessionQuery> {
    const statement = `query GetDoctorTextSession($id: ID!, $doctorID: ID!, $patientID: ID!) {
        getDoctorTextSession(id: $id, doctorID: $doctorID, patientID: $patientID) {
          __typename
          id
          doctorID
          doctor {
            __typename
            id
            insurance
            description
            specializations
            name
            createdAt
            updatedAt
          }
          patientID
          patient {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          start_time
          end_time
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
      doctorID,
      patientID
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDoctorTextSessionQuery>response.data.getDoctorTextSession;
  }
  async ListDoctorTextSessions(
    id?: string,
    doctorIDPatientID?: ModelDoctorTextSessionPrimaryCompositeKeyConditionInput,
    filter?: ModelDoctorTextSessionFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListDoctorTextSessionsQuery> {
    const statement = `query ListDoctorTextSessions($id: ID, $doctorIDPatientID: ModelDoctorTextSessionPrimaryCompositeKeyConditionInput, $filter: ModelDoctorTextSessionFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listDoctorTextSessions(id: $id, doctorIDPatientID: $doctorIDPatientID, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            doctorID
            patientID
            start_time
            end_time
            status
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (doctorIDPatientID) {
      gqlAPIServiceArguments.doctorIDPatientID = doctorIDPatientID;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDoctorTextSessionsQuery>response.data.listDoctorTextSessions;
  }
  async GetDoctorAudioSession(
    id: string,
    doctorID: string,
    patientID: string
  ): Promise<GetDoctorAudioSessionQuery> {
    const statement = `query GetDoctorAudioSession($id: ID!, $doctorID: ID!, $patientID: ID!) {
        getDoctorAudioSession(id: $id, doctorID: $doctorID, patientID: $patientID) {
          __typename
          id
          doctorID
          doctor {
            __typename
            id
            insurance
            description
            specializations
            name
            createdAt
            updatedAt
          }
          patientID
          patient {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          start_time
          end_time
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id,
      doctorID,
      patientID
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDoctorAudioSessionQuery>response.data.getDoctorAudioSession;
  }
  async ListDoctorAudioSessions(
    id?: string,
    doctorIDPatientID?: ModelDoctorAudioSessionPrimaryCompositeKeyConditionInput,
    filter?: ModelDoctorAudioSessionFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListDoctorAudioSessionsQuery> {
    const statement = `query ListDoctorAudioSessions($id: ID, $doctorIDPatientID: ModelDoctorAudioSessionPrimaryCompositeKeyConditionInput, $filter: ModelDoctorAudioSessionFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listDoctorAudioSessions(id: $id, doctorIDPatientID: $doctorIDPatientID, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            doctorID
            patientID
            start_time
            end_time
            status
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (doctorIDPatientID) {
      gqlAPIServiceArguments.doctorIDPatientID = doctorIDPatientID;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDoctorAudioSessionsQuery>response.data.listDoctorAudioSessions;
  }
  async DoctorWorkSlotByDoctor(
    doctorID?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelDoctorWorkSlotFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<DoctorWorkSlotByDoctorQuery> {
    const statement = `query DoctorWorkSlotByDoctor($doctorID: ID, $sortDirection: ModelSortDirection, $filter: ModelDoctorWorkSlotFilterInput, $limit: Int, $nextToken: String) {
        doctorWorkSlotByDoctor(doctorID: $doctorID, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            doctorID
            start_time
            end_time
            capacity
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (doctorID) {
      gqlAPIServiceArguments.doctorID = doctorID;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DoctorWorkSlotByDoctorQuery>response.data.doctorWorkSlotByDoctor;
  }
  async DoctorVideoSessionByDoctor(
    doctorID?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelDoctorVideoSessionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<DoctorVideoSessionByDoctorQuery> {
    const statement = `query DoctorVideoSessionByDoctor($doctorID: ID, $sortDirection: ModelSortDirection, $filter: ModelDoctorVideoSessionFilterInput, $limit: Int, $nextToken: String) {
        doctorVideoSessionByDoctor(doctorID: $doctorID, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            doctorID
            patientID
            start_time
            end_time
            status
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (doctorID) {
      gqlAPIServiceArguments.doctorID = doctorID;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DoctorVideoSessionByDoctorQuery>(
      response.data.doctorVideoSessionByDoctor
    );
  }
  async DoctorVideoSessionByPatient(
    patientID?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelDoctorVideoSessionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<DoctorVideoSessionByPatientQuery> {
    const statement = `query DoctorVideoSessionByPatient($patientID: ID, $sortDirection: ModelSortDirection, $filter: ModelDoctorVideoSessionFilterInput, $limit: Int, $nextToken: String) {
        doctorVideoSessionByPatient(patientID: $patientID, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            doctorID
            patientID
            start_time
            end_time
            status
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (patientID) {
      gqlAPIServiceArguments.patientID = patientID;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DoctorVideoSessionByPatientQuery>(
      response.data.doctorVideoSessionByPatient
    );
  }
  async DoctorTextSessionByDoctor(
    doctorID?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelDoctorTextSessionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<DoctorTextSessionByDoctorQuery> {
    const statement = `query DoctorTextSessionByDoctor($doctorID: ID, $sortDirection: ModelSortDirection, $filter: ModelDoctorTextSessionFilterInput, $limit: Int, $nextToken: String) {
        doctorTextSessionByDoctor(doctorID: $doctorID, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            doctorID
            patientID
            start_time
            end_time
            status
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (doctorID) {
      gqlAPIServiceArguments.doctorID = doctorID;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DoctorTextSessionByDoctorQuery>(
      response.data.doctorTextSessionByDoctor
    );
  }
  async DoctorTextSessionByPatient(
    patientID?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelDoctorTextSessionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<DoctorTextSessionByPatientQuery> {
    const statement = `query DoctorTextSessionByPatient($patientID: ID, $sortDirection: ModelSortDirection, $filter: ModelDoctorTextSessionFilterInput, $limit: Int, $nextToken: String) {
        doctorTextSessionByPatient(patientID: $patientID, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            doctorID
            patientID
            start_time
            end_time
            status
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (patientID) {
      gqlAPIServiceArguments.patientID = patientID;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DoctorTextSessionByPatientQuery>(
      response.data.doctorTextSessionByPatient
    );
  }
  async DoctorAudioSessionByDoctor(
    doctorID?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelDoctorAudioSessionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<DoctorAudioSessionByDoctorQuery> {
    const statement = `query DoctorAudioSessionByDoctor($doctorID: ID, $sortDirection: ModelSortDirection, $filter: ModelDoctorAudioSessionFilterInput, $limit: Int, $nextToken: String) {
        doctorAudioSessionByDoctor(doctorID: $doctorID, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            doctorID
            patientID
            start_time
            end_time
            status
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (doctorID) {
      gqlAPIServiceArguments.doctorID = doctorID;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DoctorAudioSessionByDoctorQuery>(
      response.data.doctorAudioSessionByDoctor
    );
  }
  async DoctorAudioSessionByPatient(
    patientID?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelDoctorAudioSessionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<DoctorAudioSessionByPatientQuery> {
    const statement = `query DoctorAudioSessionByPatient($patientID: ID, $sortDirection: ModelSortDirection, $filter: ModelDoctorAudioSessionFilterInput, $limit: Int, $nextToken: String) {
        doctorAudioSessionByPatient(patientID: $patientID, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            doctorID
            patientID
            start_time
            end_time
            status
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (patientID) {
      gqlAPIServiceArguments.patientID = patientID;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DoctorAudioSessionByPatientQuery>(
      response.data.doctorAudioSessionByPatient
    );
  }
  OnCreatePatientListener: Observable<
    OnCreatePatientSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePatient($id: String!) {
        onCreatePatient(id: $id) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreatePatientSubscription>;

  OnUpdatePatientListener: Observable<
    OnUpdatePatientSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePatient($id: String!) {
        onUpdatePatient(id: $id) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdatePatientSubscription>;

  OnDeletePatientListener: Observable<
    OnDeletePatientSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePatient($id: String!) {
        onDeletePatient(id: $id) {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeletePatientSubscription>;

  OnCreateDoctorListener: Observable<OnCreateDoctorSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateDoctor {
        onCreateDoctor {
          __typename
          id
          insurance
          description
          specializations
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateDoctorSubscription>;

  OnUpdateDoctorListener: Observable<OnUpdateDoctorSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateDoctor {
        onUpdateDoctor {
          __typename
          id
          insurance
          description
          specializations
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateDoctorSubscription>;

  OnDeleteDoctorListener: Observable<OnDeleteDoctorSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteDoctor {
        onDeleteDoctor {
          __typename
          id
          insurance
          description
          specializations
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteDoctorSubscription>;

  OnCreateDoctorWorkSlotListener: Observable<
    OnCreateDoctorWorkSlotSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateDoctorWorkSlot($doctorID: String) {
        onCreateDoctorWorkSlot(doctorID: $doctorID) {
          __typename
          id
          doctorID
          doctor {
            __typename
            id
            insurance
            description
            specializations
            name
            createdAt
            updatedAt
          }
          start_time
          end_time
          capacity
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateDoctorWorkSlotSubscription>;

  OnUpdateDoctorWorkSlotListener: Observable<
    OnUpdateDoctorWorkSlotSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateDoctorWorkSlot($doctorID: String) {
        onUpdateDoctorWorkSlot(doctorID: $doctorID) {
          __typename
          id
          doctorID
          doctor {
            __typename
            id
            insurance
            description
            specializations
            name
            createdAt
            updatedAt
          }
          start_time
          end_time
          capacity
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateDoctorWorkSlotSubscription>;

  OnDeleteDoctorWorkSlotListener: Observable<
    OnDeleteDoctorWorkSlotSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteDoctorWorkSlot($doctorID: String) {
        onDeleteDoctorWorkSlot(doctorID: $doctorID) {
          __typename
          id
          doctorID
          doctor {
            __typename
            id
            insurance
            description
            specializations
            name
            createdAt
            updatedAt
          }
          start_time
          end_time
          capacity
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteDoctorWorkSlotSubscription>;

  OnCreateDoctorVideoSessionListener: Observable<
    OnCreateDoctorVideoSessionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateDoctorVideoSession($patientID: String!) {
        onCreateDoctorVideoSession(patientID: $patientID) {
          __typename
          id
          doctorID
          doctor {
            __typename
            id
            insurance
            description
            specializations
            name
            createdAt
            updatedAt
          }
          patientID
          patient {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          start_time
          end_time
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateDoctorVideoSessionSubscription>;

  OnUpdateDoctorVideoSessionListener: Observable<
    OnUpdateDoctorVideoSessionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateDoctorVideoSession($patientID: String!) {
        onUpdateDoctorVideoSession(patientID: $patientID) {
          __typename
          id
          doctorID
          doctor {
            __typename
            id
            insurance
            description
            specializations
            name
            createdAt
            updatedAt
          }
          patientID
          patient {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          start_time
          end_time
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateDoctorVideoSessionSubscription>;

  OnDeleteDoctorVideoSessionListener: Observable<
    OnDeleteDoctorVideoSessionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteDoctorVideoSession($patientID: String!) {
        onDeleteDoctorVideoSession(patientID: $patientID) {
          __typename
          id
          doctorID
          doctor {
            __typename
            id
            insurance
            description
            specializations
            name
            createdAt
            updatedAt
          }
          patientID
          patient {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          start_time
          end_time
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteDoctorVideoSessionSubscription>;

  OnCreateDoctorTextSessionListener: Observable<
    OnCreateDoctorTextSessionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateDoctorTextSession($patientID: String!) {
        onCreateDoctorTextSession(patientID: $patientID) {
          __typename
          id
          doctorID
          doctor {
            __typename
            id
            insurance
            description
            specializations
            name
            createdAt
            updatedAt
          }
          patientID
          patient {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          start_time
          end_time
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateDoctorTextSessionSubscription>;

  OnUpdateDoctorTextSessionListener: Observable<
    OnUpdateDoctorTextSessionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateDoctorTextSession($patientID: String!) {
        onUpdateDoctorTextSession(patientID: $patientID) {
          __typename
          id
          doctorID
          doctor {
            __typename
            id
            insurance
            description
            specializations
            name
            createdAt
            updatedAt
          }
          patientID
          patient {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          start_time
          end_time
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateDoctorTextSessionSubscription>;

  OnDeleteDoctorTextSessionListener: Observable<
    OnDeleteDoctorTextSessionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteDoctorTextSession($patientID: String!) {
        onDeleteDoctorTextSession(patientID: $patientID) {
          __typename
          id
          doctorID
          doctor {
            __typename
            id
            insurance
            description
            specializations
            name
            createdAt
            updatedAt
          }
          patientID
          patient {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          start_time
          end_time
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteDoctorTextSessionSubscription>;

  OnCreateDoctorAudioSessionListener: Observable<
    OnCreateDoctorAudioSessionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateDoctorAudioSession($patientID: String!) {
        onCreateDoctorAudioSession(patientID: $patientID) {
          __typename
          id
          doctorID
          doctor {
            __typename
            id
            insurance
            description
            specializations
            name
            createdAt
            updatedAt
          }
          patientID
          patient {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          start_time
          end_time
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateDoctorAudioSessionSubscription>;

  OnUpdateDoctorAudioSessionListener: Observable<
    OnUpdateDoctorAudioSessionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateDoctorAudioSession($patientID: String!) {
        onUpdateDoctorAudioSession(patientID: $patientID) {
          __typename
          id
          doctorID
          doctor {
            __typename
            id
            insurance
            description
            specializations
            name
            createdAt
            updatedAt
          }
          patientID
          patient {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          start_time
          end_time
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateDoctorAudioSessionSubscription>;

  OnDeleteDoctorAudioSessionListener: Observable<
    OnDeleteDoctorAudioSessionSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteDoctorAudioSession($patientID: String!) {
        onDeleteDoctorAudioSession(patientID: $patientID) {
          __typename
          id
          doctorID
          doctor {
            __typename
            id
            insurance
            description
            specializations
            name
            createdAt
            updatedAt
          }
          patientID
          patient {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          start_time
          end_time
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteDoctorAudioSessionSubscription>;
}
