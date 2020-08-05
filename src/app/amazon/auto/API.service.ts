/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import { Observable } from "zen-observable-ts";

export type mutationCreateDoctorWorkSlotInput = {
  doctor_id: string;
  start_time: string;
  end_time: string;
  allowed_sessions: Array<SessionType | null>;
  capacity: number;
};

export enum SessionType {
  AUDIO = "AUDIO",
  VIDEO = "VIDEO",
  TEXT = "TEXT"
}

export type mutationUpdateDoctorWorkSlotInput = {
  id: string;
  doctor_id: string;
  start_time: string;
  end_time: string;
  allowed_sessions: Array<SessionType | null>;
  capacity: number;
};

export type mutationCreateSessionInput = {
  doctor_id: string;
  patient_id: string;
  start_time: string;
  end_time: string;
  status: SessionStatus;
  type: SessionType;
};

export enum SessionStatus {
  REQUESTED = "REQUESTED",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
  CANCELED = "CANCELED",
  SUCCESSFUL = "SUCCESSFUL",
  DISPUTED = "DISPUTED"
}

export type mutationUpdateSessionInput = {
  id: string;
  doctor_id: string;
  patient_id: string;
  start_time: string;
  end_time: string;
  status: SessionStatus;
  type: SessionType;
};

export type CreateUserInput = {
  id?: string | null;
  name: string;
  date_of_birth?: string | null;
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null;
  date_of_birth?: ModelStringInput | null;
  and?: Array<ModelUserConditionInput | null> | null;
  or?: Array<ModelUserConditionInput | null> | null;
  not?: ModelUserConditionInput | null;
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

export type UpdateUserInput = {
  id: string;
  name?: string | null;
  date_of_birth?: string | null;
};

export type DeleteUserInput = {
  id?: string | null;
};

export type CreatePatientInput = {
  id?: string | null;
  name: string;
};

export type ModelPatientConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelPatientConditionInput | null> | null;
  or?: Array<ModelPatientConditionInput | null> | null;
  not?: ModelPatientConditionInput | null;
};

export type UpdatePatientInput = {
  id: string;
  name?: string | null;
};

export type DeletePatientInput = {
  id: string;
};

export type CreateDoctorInput = {
  id?: string | null;
  insurance?: Array<string | null> | null;
  description?: string | null;
  specializations?: Array<string | null> | null;
  name: string;
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

export type ModelUserFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  date_of_birth?: ModelStringInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
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

export type ModelPatientFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelPatientFilterInput | null> | null;
  or?: Array<ModelPatientFilterInput | null> | null;
  not?: ModelPatientFilterInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

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
  doctor_id?: ModelIDInput | null;
  start_time?: ModelStringInput | null;
  end_time?: ModelStringInput | null;
  allowed_sessions?: ModelSessionTypeListInput | null;
  capacity?: ModelIntInput | null;
  and?: Array<ModelDoctorWorkSlotFilterInput | null> | null;
  or?: Array<ModelDoctorWorkSlotFilterInput | null> | null;
  not?: ModelDoctorWorkSlotFilterInput | null;
};

export type ModelSessionTypeListInput = {
  eq?: Array<SessionType | null> | null;
  ne?: Array<SessionType | null> | null;
  contains?: SessionType | null;
  notContains?: SessionType | null;
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

export type ModelSessionFilterInput = {
  id?: ModelIDInput | null;
  doctor_id?: ModelIDInput | null;
  patient_id?: ModelIDInput | null;
  start_time?: ModelStringInput | null;
  end_time?: ModelStringInput | null;
  status?: ModelSessionStatusInput | null;
  type?: ModelSessionTypeInput | null;
  and?: Array<ModelSessionFilterInput | null> | null;
  or?: Array<ModelSessionFilterInput | null> | null;
  not?: ModelSessionFilterInput | null;
};

export type ModelSessionStatusInput = {
  eq?: SessionStatus | null;
  ne?: SessionStatus | null;
};

export type ModelSessionTypeInput = {
  eq?: SessionType | null;
  ne?: SessionType | null;
};

export type CreateDoctorWorkSlotMutation = {
  __typename: "DoctorWorkSlot";
  id: string;
  doctor_id: string;
  doctor: {
    __typename: "Doctor";
    id: string;
    insurance: Array<string | null> | null;
    description: string | null;
    specializations: Array<string | null> | null;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  start_time: string;
  end_time: string;
  allowed_sessions: Array<SessionType | null>;
  capacity: number;
  createdAt: string;
  updatedAt: string;
};

export type UpdateDoctorWorkSlotMutation = {
  __typename: "DoctorWorkSlot";
  id: string;
  doctor_id: string;
  doctor: {
    __typename: "Doctor";
    id: string;
    insurance: Array<string | null> | null;
    description: string | null;
    specializations: Array<string | null> | null;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  start_time: string;
  end_time: string;
  allowed_sessions: Array<SessionType | null>;
  capacity: number;
  createdAt: string;
  updatedAt: string;
};

export type CreateSessionMutation = {
  __typename: "Session";
  id: string;
  doctor_id: string;
  doctor: {
    __typename: "Doctor";
    id: string;
    insurance: Array<string | null> | null;
    description: string | null;
    specializations: Array<string | null> | null;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  patient_id: string;
  patient: {
    __typename: "Patient";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  start_time: string;
  end_time: string;
  status: SessionStatus;
  type: SessionType;
  createdAt: string;
  updatedAt: string;
};

export type UpdateSessionMutation = {
  __typename: "Session";
  id: string;
  doctor_id: string;
  doctor: {
    __typename: "Doctor";
    id: string;
    insurance: Array<string | null> | null;
    description: string | null;
    specializations: Array<string | null> | null;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  patient_id: string;
  patient: {
    __typename: "Patient";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  start_time: string;
  end_time: string;
  status: SessionStatus;
  type: SessionType;
  createdAt: string;
  updatedAt: string;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  name: string;
  date_of_birth: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  name: string;
  date_of_birth: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  name: string;
  date_of_birth: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreatePatientMutation = {
  __typename: "Patient";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdatePatientMutation = {
  __typename: "Patient";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type DeletePatientMutation = {
  __typename: "Patient";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateDoctorMutation = {
  __typename: "Doctor";
  id: string;
  insurance: Array<string | null> | null;
  description: string | null;
  specializations: Array<string | null> | null;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateDoctorMutation = {
  __typename: "Doctor";
  id: string;
  insurance: Array<string | null> | null;
  description: string | null;
  specializations: Array<string | null> | null;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteDoctorMutation = {
  __typename: "Doctor";
  id: string;
  insurance: Array<string | null> | null;
  description: string | null;
  specializations: Array<string | null> | null;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  name: string;
  date_of_birth: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    name: string;
    date_of_birth: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetPatientQuery = {
  __typename: "Patient";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type ListPatientsQuery = {
  __typename: "ModelPatientConnection";
  items: Array<{
    __typename: "Patient";
    id: string;
    name: string;
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
  name: string;
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
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetDoctorWorkSlotQuery = {
  __typename: "DoctorWorkSlot";
  id: string;
  doctor_id: string;
  doctor: {
    __typename: "Doctor";
    id: string;
    insurance: Array<string | null> | null;
    description: string | null;
    specializations: Array<string | null> | null;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  start_time: string;
  end_time: string;
  allowed_sessions: Array<SessionType | null>;
  capacity: number;
  createdAt: string;
  updatedAt: string;
};

export type ListDoctorWorkSlotsQuery = {
  __typename: "ModelDoctorWorkSlotConnection";
  items: Array<{
    __typename: "DoctorWorkSlot";
    id: string;
    doctor_id: string;
    doctor: {
      __typename: "Doctor";
      id: string;
      insurance: Array<string | null> | null;
      description: string | null;
      specializations: Array<string | null> | null;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
    start_time: string;
    end_time: string;
    allowed_sessions: Array<SessionType | null>;
    capacity: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetSessionQuery = {
  __typename: "Session";
  id: string;
  doctor_id: string;
  doctor: {
    __typename: "Doctor";
    id: string;
    insurance: Array<string | null> | null;
    description: string | null;
    specializations: Array<string | null> | null;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  patient_id: string;
  patient: {
    __typename: "Patient";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  };
  start_time: string;
  end_time: string;
  status: SessionStatus;
  type: SessionType;
  createdAt: string;
  updatedAt: string;
};

export type ListSessionsQuery = {
  __typename: "ModelSessionConnection";
  items: Array<{
    __typename: "Session";
    id: string;
    doctor_id: string;
    doctor: {
      __typename: "Doctor";
      id: string;
      insurance: Array<string | null> | null;
      description: string | null;
      specializations: Array<string | null> | null;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
    patient_id: string;
    patient: {
      __typename: "Patient";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
    start_time: string;
    end_time: string;
    status: SessionStatus;
    type: SessionType;
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
    doctor_id: string;
    doctor: {
      __typename: "Doctor";
      id: string;
      insurance: Array<string | null> | null;
      description: string | null;
      specializations: Array<string | null> | null;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
    start_time: string;
    end_time: string;
    allowed_sessions: Array<SessionType | null>;
    capacity: number;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type SessionByDoctorQuery = {
  __typename: "ModelSessionConnection";
  items: Array<{
    __typename: "Session";
    id: string;
    doctor_id: string;
    doctor: {
      __typename: "Doctor";
      id: string;
      insurance: Array<string | null> | null;
      description: string | null;
      specializations: Array<string | null> | null;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
    patient_id: string;
    patient: {
      __typename: "Patient";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
    start_time: string;
    end_time: string;
    status: SessionStatus;
    type: SessionType;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type SessionByPatientQuery = {
  __typename: "ModelSessionConnection";
  items: Array<{
    __typename: "Session";
    id: string;
    doctor_id: string;
    doctor: {
      __typename: "Doctor";
      id: string;
      insurance: Array<string | null> | null;
      description: string | null;
      specializations: Array<string | null> | null;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
    patient_id: string;
    patient: {
      __typename: "Patient";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
    start_time: string;
    end_time: string;
    status: SessionStatus;
    type: SessionType;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type SessionByTypeQuery = {
  __typename: "ModelSessionConnection";
  items: Array<{
    __typename: "Session";
    id: string;
    doctor_id: string;
    doctor: {
      __typename: "Doctor";
      id: string;
      insurance: Array<string | null> | null;
      description: string | null;
      specializations: Array<string | null> | null;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
    patient_id: string;
    patient: {
      __typename: "Patient";
      id: string;
      name: string;
      createdAt: string;
      updatedAt: string;
    };
    start_time: string;
    end_time: string;
    status: SessionStatus;
    type: SessionType;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  name: string;
  date_of_birth: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  name: string;
  date_of_birth: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  name: string;
  date_of_birth: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreatePatientSubscription = {
  __typename: "Patient";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdatePatientSubscription = {
  __typename: "Patient";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeletePatientSubscription = {
  __typename: "Patient";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateDoctorSubscription = {
  __typename: "Doctor";
  id: string;
  insurance: Array<string | null> | null;
  description: string | null;
  specializations: Array<string | null> | null;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateDoctorSubscription = {
  __typename: "Doctor";
  id: string;
  insurance: Array<string | null> | null;
  description: string | null;
  specializations: Array<string | null> | null;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteDoctorSubscription = {
  __typename: "Doctor";
  id: string;
  insurance: Array<string | null> | null;
  description: string | null;
  specializations: Array<string | null> | null;
  name: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateDoctorWorkSlot(
    input?: mutationCreateDoctorWorkSlotInput
  ): Promise<CreateDoctorWorkSlotMutation> {
    const statement = `mutation CreateDoctorWorkSlot($input: mutationCreateDoctorWorkSlotInput) {
        createDoctorWorkSlot(input: $input) {
          __typename
          id
          doctor_id
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
          allowed_sessions
          capacity
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (input) {
      gqlAPIServiceArguments.input = input;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDoctorWorkSlotMutation>response.data.createDoctorWorkSlot;
  }
  async UpdateDoctorWorkSlot(
    input?: mutationUpdateDoctorWorkSlotInput
  ): Promise<UpdateDoctorWorkSlotMutation> {
    const statement = `mutation UpdateDoctorWorkSlot($input: mutationUpdateDoctorWorkSlotInput) {
        updateDoctorWorkSlot(input: $input) {
          __typename
          id
          doctor_id
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
          allowed_sessions
          capacity
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (input) {
      gqlAPIServiceArguments.input = input;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDoctorWorkSlotMutation>response.data.updateDoctorWorkSlot;
  }
  async DeleteDoctorWorkSlot(id: string): Promise<boolean | null> {
    const statement = `mutation DeleteDoctorWorkSlot($id: ID!) {
        deleteDoctorWorkSlot(id: $id)
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <boolean | null>response.data.deleteDoctorWorkSlot;
  }
  async CreateSession(
    input?: mutationCreateSessionInput
  ): Promise<CreateSessionMutation> {
    const statement = `mutation CreateSession($input: mutationCreateSessionInput) {
        createSession(input: $input) {
          __typename
          id
          doctor_id
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
          patient_id
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
          type
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (input) {
      gqlAPIServiceArguments.input = input;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateSessionMutation>response.data.createSession;
  }
  async UpdateSession(
    input?: mutationUpdateSessionInput
  ): Promise<UpdateSessionMutation> {
    const statement = `mutation UpdateSession($input: mutationUpdateSessionInput) {
        updateSession(input: $input) {
          __typename
          id
          doctor_id
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
          patient_id
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
          type
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (input) {
      gqlAPIServiceArguments.input = input;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateSessionMutation>response.data.updateSession;
  }
  async CreateUser(
    input: CreateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!, $condition: ModelUserConditionInput) {
        createUser(input: $input, condition: $condition) {
          __typename
          id
          name
          date_of_birth
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
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(
    input: UpdateUserInput,
    condition?: ModelUserConditionInput
  ): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!, $condition: ModelUserConditionInput) {
        updateUser(input: $input, condition: $condition) {
          __typename
          id
          name
          date_of_birth
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
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(
    input: DeleteUserInput,
    condition?: ModelUserConditionInput
  ): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!, $condition: ModelUserConditionInput) {
        deleteUser(input: $input, condition: $condition) {
          __typename
          id
          name
          date_of_birth
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
    return <DeleteUserMutation>response.data.deleteUser;
  }
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
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          name
          date_of_birth
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
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            date_of_birth
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
    return <ListUsersQuery>response.data.listUsers;
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
    id?: string,
    filter?: ModelPatientFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListPatientsQuery> {
    const statement = `query ListPatients($id: ID, $filter: ModelPatientFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listPatients(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
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
    if (id) {
      gqlAPIServiceArguments.id = id;
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
          doctor_id
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
          allowed_sessions
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
            doctor_id
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
            allowed_sessions
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
  async GetSession(id: string): Promise<GetSessionQuery> {
    const statement = `query GetSession($id: ID!) {
        getSession(id: $id) {
          __typename
          id
          doctor_id
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
          patient_id
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
          type
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
    return <GetSessionQuery>response.data.getSession;
  }
  async ListSessions(
    id?: string,
    filter?: ModelSessionFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListSessionsQuery> {
    const statement = `query ListSessions($id: ID, $filter: ModelSessionFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listSessions(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            doctor_id
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
            patient_id
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
            type
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
    return <ListSessionsQuery>response.data.listSessions;
  }
  async DoctorWorkSlotByDoctor(
    doctor_id?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelDoctorWorkSlotFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<DoctorWorkSlotByDoctorQuery> {
    const statement = `query DoctorWorkSlotByDoctor($doctor_id: ID, $sortDirection: ModelSortDirection, $filter: ModelDoctorWorkSlotFilterInput, $limit: Int, $nextToken: String) {
        doctorWorkSlotByDoctor(doctor_id: $doctor_id, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            doctor_id
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
            allowed_sessions
            capacity
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (doctor_id) {
      gqlAPIServiceArguments.doctor_id = doctor_id;
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
  async SessionByDoctor(
    doctor_id?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelSessionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<SessionByDoctorQuery> {
    const statement = `query SessionByDoctor($doctor_id: ID, $sortDirection: ModelSortDirection, $filter: ModelSessionFilterInput, $limit: Int, $nextToken: String) {
        sessionByDoctor(doctor_id: $doctor_id, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            doctor_id
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
            patient_id
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
            type
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (doctor_id) {
      gqlAPIServiceArguments.doctor_id = doctor_id;
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
    return <SessionByDoctorQuery>response.data.sessionByDoctor;
  }
  async SessionByPatient(
    patient_id?: string,
    sortDirection?: ModelSortDirection,
    filter?: ModelSessionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<SessionByPatientQuery> {
    const statement = `query SessionByPatient($patient_id: ID, $sortDirection: ModelSortDirection, $filter: ModelSessionFilterInput, $limit: Int, $nextToken: String) {
        sessionByPatient(patient_id: $patient_id, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            doctor_id
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
            patient_id
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
            type
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (patient_id) {
      gqlAPIServiceArguments.patient_id = patient_id;
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
    return <SessionByPatientQuery>response.data.sessionByPatient;
  }
  async SessionByType(
    type?: SessionType,
    sortDirection?: ModelSortDirection,
    filter?: ModelSessionFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<SessionByTypeQuery> {
    const statement = `query SessionByType($type: SessionType, $sortDirection: ModelSortDirection, $filter: ModelSessionFilterInput, $limit: Int, $nextToken: String) {
        sessionByType(type: $type, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            doctor_id
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
            patient_id
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
            type
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (type) {
      gqlAPIServiceArguments.type = type;
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
    return <SessionByTypeQuery>response.data.sessionByType;
  }
  OnCreateUserListener: Observable<OnCreateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser($id: String) {
        onCreateUser(id: $id) {
          __typename
          id
          name
          date_of_birth
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnCreateUserSubscription>;

  OnUpdateUserListener: Observable<OnUpdateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser($id: String) {
        onUpdateUser(id: $id) {
          __typename
          id
          name
          date_of_birth
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnUpdateUserSubscription>;

  OnDeleteUserListener: Observable<OnDeleteUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser($id: String) {
        onDeleteUser(id: $id) {
          __typename
          id
          name
          date_of_birth
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<OnDeleteUserSubscription>;

  OnCreatePatientListener: Observable<
    OnCreatePatientSubscription
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePatient($id: String) {
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
      `subscription OnUpdatePatient($id: String) {
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
      `subscription OnDeletePatient($id: String) {
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
}
