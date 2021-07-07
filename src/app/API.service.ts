/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateCurrentWeatherInfoInput = {
  id?: string | null;
  city: string;
  description?: string | null;
  temperature?: string | null;
};

export type ModelCurrentWeatherInfoConditionInput = {
  city?: ModelStringInput | null;
  description?: ModelStringInput | null;
  temperature?: ModelStringInput | null;
  and?: Array<ModelCurrentWeatherInfoConditionInput | null> | null;
  or?: Array<ModelCurrentWeatherInfoConditionInput | null> | null;
  not?: ModelCurrentWeatherInfoConditionInput | null;
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

export type CurrentWeatherInfo = {
  __typename: "CurrentWeatherInfo";
  id: string;
  city: string;
  description?: string | null;
  temperature?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCurrentWeatherInfoInput = {
  id: string;
  city?: string | null;
  description?: string | null;
  temperature?: string | null;
};

export type DeleteCurrentWeatherInfoInput = {
  id: string;
};

export type ModelCurrentWeatherInfoFilterInput = {
  id?: ModelIDInput | null;
  city?: ModelStringInput | null;
  description?: ModelStringInput | null;
  temperature?: ModelStringInput | null;
  and?: Array<ModelCurrentWeatherInfoFilterInput | null> | null;
  or?: Array<ModelCurrentWeatherInfoFilterInput | null> | null;
  not?: ModelCurrentWeatherInfoFilterInput | null;
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

export type ModelCurrentWeatherInfoConnection = {
  __typename: "ModelCurrentWeatherInfoConnection";
  items?: Array<CurrentWeatherInfo | null> | null;
  nextToken?: string | null;
};

export type CreateCurrentWeatherInfoMutation = {
  __typename: "CurrentWeatherInfo";
  id: string;
  city: string;
  description?: string | null;
  temperature?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCurrentWeatherInfoMutation = {
  __typename: "CurrentWeatherInfo";
  id: string;
  city: string;
  description?: string | null;
  temperature?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCurrentWeatherInfoMutation = {
  __typename: "CurrentWeatherInfo";
  id: string;
  city: string;
  description?: string | null;
  temperature?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetCurrentWeatherInfoQuery = {
  __typename: "CurrentWeatherInfo";
  id: string;
  city: string;
  description?: string | null;
  temperature?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListCurrentWeatherInfosQuery = {
  __typename: "ModelCurrentWeatherInfoConnection";
  items?: Array<{
    __typename: "CurrentWeatherInfo";
    id: string;
    city: string;
    description?: string | null;
    temperature?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateCurrentWeatherInfoSubscription = {
  __typename: "CurrentWeatherInfo";
  id: string;
  city: string;
  description?: string | null;
  temperature?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCurrentWeatherInfoSubscription = {
  __typename: "CurrentWeatherInfo";
  id: string;
  city: string;
  description?: string | null;
  temperature?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCurrentWeatherInfoSubscription = {
  __typename: "CurrentWeatherInfo";
  id: string;
  city: string;
  description?: string | null;
  temperature?: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateCurrentWeatherInfo(
    input: CreateCurrentWeatherInfoInput,
    condition?: ModelCurrentWeatherInfoConditionInput
  ): Promise<CreateCurrentWeatherInfoMutation> {
    const statement = `mutation CreateCurrentWeatherInfo($input: CreateCurrentWeatherInfoInput!, $condition: ModelCurrentWeatherInfoConditionInput) {
        createCurrentWeatherInfo(input: $input, condition: $condition) {
          __typename
          id
          city
          description
          temperature
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
    return <CreateCurrentWeatherInfoMutation>(
      response.data.createCurrentWeatherInfo
    );
  }
  async UpdateCurrentWeatherInfo(
    input: UpdateCurrentWeatherInfoInput,
    condition?: ModelCurrentWeatherInfoConditionInput
  ): Promise<UpdateCurrentWeatherInfoMutation> {
    const statement = `mutation UpdateCurrentWeatherInfo($input: UpdateCurrentWeatherInfoInput!, $condition: ModelCurrentWeatherInfoConditionInput) {
        updateCurrentWeatherInfo(input: $input, condition: $condition) {
          __typename
          id
          city
          description
          temperature
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
    return <UpdateCurrentWeatherInfoMutation>(
      response.data.updateCurrentWeatherInfo
    );
  }
  async DeleteCurrentWeatherInfo(
    input: DeleteCurrentWeatherInfoInput,
    condition?: ModelCurrentWeatherInfoConditionInput
  ): Promise<DeleteCurrentWeatherInfoMutation> {
    const statement = `mutation DeleteCurrentWeatherInfo($input: DeleteCurrentWeatherInfoInput!, $condition: ModelCurrentWeatherInfoConditionInput) {
        deleteCurrentWeatherInfo(input: $input, condition: $condition) {
          __typename
          id
          city
          description
          temperature
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
    return <DeleteCurrentWeatherInfoMutation>(
      response.data.deleteCurrentWeatherInfo
    );
  }
  async GetCurrentWeatherInfo(id: string): Promise<GetCurrentWeatherInfoQuery> {
    const statement = `query GetCurrentWeatherInfo($id: ID!) {
        getCurrentWeatherInfo(id: $id) {
          __typename
          id
          city
          description
          temperature
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
    return <GetCurrentWeatherInfoQuery>response.data.getCurrentWeatherInfo;
  }
  async ListCurrentWeatherInfos(
    filter?: ModelCurrentWeatherInfoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCurrentWeatherInfosQuery> {
    const statement = `query ListCurrentWeatherInfos($filter: ModelCurrentWeatherInfoFilterInput, $limit: Int, $nextToken: String) {
        listCurrentWeatherInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            city
            description
            temperature
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
    return <ListCurrentWeatherInfosQuery>response.data.listCurrentWeatherInfos;
  }
  OnCreateCurrentWeatherInfoListener: Observable<
    SubscriptionResponse<OnCreateCurrentWeatherInfoSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCurrentWeatherInfo {
        onCreateCurrentWeatherInfo {
          __typename
          id
          city
          description
          temperature
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCurrentWeatherInfoSubscription>>;

  OnUpdateCurrentWeatherInfoListener: Observable<
    SubscriptionResponse<OnUpdateCurrentWeatherInfoSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCurrentWeatherInfo {
        onUpdateCurrentWeatherInfo {
          __typename
          id
          city
          description
          temperature
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCurrentWeatherInfoSubscription>>;

  OnDeleteCurrentWeatherInfoListener: Observable<
    SubscriptionResponse<OnDeleteCurrentWeatherInfoSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCurrentWeatherInfo {
        onDeleteCurrentWeatherInfo {
          __typename
          id
          city
          description
          temperature
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCurrentWeatherInfoSubscription>>;
}
