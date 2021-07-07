/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateCurrentWeatherInput = {
  id?: string | null;
  city: string;
  description?: string | null;
  temperature?: string | null;
};

export type ModelCurrentWeatherConditionInput = {
  city?: ModelStringInput | null;
  description?: ModelStringInput | null;
  temperature?: ModelStringInput | null;
  and?: Array<ModelCurrentWeatherConditionInput | null> | null;
  or?: Array<ModelCurrentWeatherConditionInput | null> | null;
  not?: ModelCurrentWeatherConditionInput | null;
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

export type CurrentWeather = {
  __typename: "CurrentWeather";
  id: string;
  city: string;
  description?: string | null;
  temperature?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCurrentWeatherInput = {
  id: string;
  city?: string | null;
  description?: string | null;
  temperature?: string | null;
};

export type DeleteCurrentWeatherInput = {
  id: string;
};

export type ModelCurrentWeatherFilterInput = {
  id?: ModelIDInput | null;
  city?: ModelStringInput | null;
  description?: ModelStringInput | null;
  temperature?: ModelStringInput | null;
  and?: Array<ModelCurrentWeatherFilterInput | null> | null;
  or?: Array<ModelCurrentWeatherFilterInput | null> | null;
  not?: ModelCurrentWeatherFilterInput | null;
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

export type ModelCurrentWeatherConnection = {
  __typename: "ModelCurrentWeatherConnection";
  items?: Array<CurrentWeather | null> | null;
  nextToken?: string | null;
};

export type CreateCurrentWeatherMutation = {
  __typename: "CurrentWeather";
  id: string;
  city: string;
  description?: string | null;
  temperature?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateCurrentWeatherMutation = {
  __typename: "CurrentWeather";
  id: string;
  city: string;
  description?: string | null;
  temperature?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteCurrentWeatherMutation = {
  __typename: "CurrentWeather";
  id: string;
  city: string;
  description?: string | null;
  temperature?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetCurrentWeatherQuery = {
  __typename: "CurrentWeather";
  id: string;
  city: string;
  description?: string | null;
  temperature?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListCurrentWeathersQuery = {
  __typename: "ModelCurrentWeatherConnection";
  items?: Array<{
    __typename: "CurrentWeather";
    id: string;
    city: string;
    description?: string | null;
    temperature?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreateCurrentWeatherSubscription = {
  __typename: "CurrentWeather";
  id: string;
  city: string;
  description?: string | null;
  temperature?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateCurrentWeatherSubscription = {
  __typename: "CurrentWeather";
  id: string;
  city: string;
  description?: string | null;
  temperature?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteCurrentWeatherSubscription = {
  __typename: "CurrentWeather";
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
  async CreateCurrentWeather(
    input: CreateCurrentWeatherInput,
    condition?: ModelCurrentWeatherConditionInput
  ): Promise<CreateCurrentWeatherMutation> {
    const statement = `mutation CreateCurrentWeather($input: CreateCurrentWeatherInput!, $condition: ModelCurrentWeatherConditionInput) {
        createCurrentWeather(input: $input, condition: $condition) {
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
    return <CreateCurrentWeatherMutation>response.data.createCurrentWeather;
  }
  async UpdateCurrentWeather(
    input: UpdateCurrentWeatherInput,
    condition?: ModelCurrentWeatherConditionInput
  ): Promise<UpdateCurrentWeatherMutation> {
    const statement = `mutation UpdateCurrentWeather($input: UpdateCurrentWeatherInput!, $condition: ModelCurrentWeatherConditionInput) {
        updateCurrentWeather(input: $input, condition: $condition) {
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
    return <UpdateCurrentWeatherMutation>response.data.updateCurrentWeather;
  }
  async DeleteCurrentWeather(
    input: DeleteCurrentWeatherInput,
    condition?: ModelCurrentWeatherConditionInput
  ): Promise<DeleteCurrentWeatherMutation> {
    const statement = `mutation DeleteCurrentWeather($input: DeleteCurrentWeatherInput!, $condition: ModelCurrentWeatherConditionInput) {
        deleteCurrentWeather(input: $input, condition: $condition) {
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
    return <DeleteCurrentWeatherMutation>response.data.deleteCurrentWeather;
  }
  async GetCurrentWeather(id: string): Promise<GetCurrentWeatherQuery> {
    const statement = `query GetCurrentWeather($id: ID!) {
        getCurrentWeather(id: $id) {
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
    return <GetCurrentWeatherQuery>response.data.getCurrentWeather;
  }
  async ListCurrentWeathers(
    filter?: ModelCurrentWeatherFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCurrentWeathersQuery> {
    const statement = `query ListCurrentWeathers($filter: ModelCurrentWeatherFilterInput, $limit: Int, $nextToken: String) {
        listCurrentWeathers(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
    return <ListCurrentWeathersQuery>response.data.listCurrentWeathers;
  }
  OnCreateCurrentWeatherListener: Observable<
    SubscriptionResponse<OnCreateCurrentWeatherSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCurrentWeather {
        onCreateCurrentWeather {
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
  ) as Observable<SubscriptionResponse<OnCreateCurrentWeatherSubscription>>;

  OnUpdateCurrentWeatherListener: Observable<
    SubscriptionResponse<OnUpdateCurrentWeatherSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCurrentWeather {
        onUpdateCurrentWeather {
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
  ) as Observable<SubscriptionResponse<OnUpdateCurrentWeatherSubscription>>;

  OnDeleteCurrentWeatherListener: Observable<
    SubscriptionResponse<OnDeleteCurrentWeatherSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCurrentWeather {
        onDeleteCurrentWeather {
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
  ) as Observable<SubscriptionResponse<OnDeleteCurrentWeatherSubscription>>;
}
