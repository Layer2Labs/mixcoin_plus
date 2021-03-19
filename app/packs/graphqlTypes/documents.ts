import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
};

/** Autogenerated input type of AdminLoginMutation */
export type AdminLoginMutationInput = {
  name: Scalars['String'];
  password: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

export type Administrator = {
  __typename?: 'Administrator';
  createdAt: Scalars['ISO8601DateTime'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};


export type Mutation = {
  __typename?: 'Mutation';
  adminLogin?: Maybe<Scalars['Boolean']>;
  switchLocale?: Maybe<Scalars['Boolean']>;
};


export type MutationAdminLoginArgs = {
  input: AdminLoginMutationInput;
};


export type MutationSwitchLocaleArgs = {
  input: SwitchLocaleMutationInput;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  adminUserConnection: UserConnection;
  currentAdmin: Administrator;
};


export type QueryAdminUserConnectionArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** Autogenerated input type of SwitchLocaleMutation */
export type SwitchLocaleMutationInput = {
  locale: Scalars['String'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  avatar: Scalars['String'];
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  mixinId: Scalars['String'];
  mixinUuid: Scalars['String'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['ISO8601DateTime']>;
};

/** The connection type for User. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<User>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String'];
  /** The item at the end of the edge. */
  node?: Maybe<User>;
};

export type AdminLoginMutationVariables = Exact<{
  input: AdminLoginMutationInput;
}>;


export type AdminLoginMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'adminLogin'>
);

export type AdminUserConnectionQueryVariables = Exact<{
  after?: Maybe<Scalars['String']>;
}>;


export type AdminUserConnectionQuery = (
  { __typename?: 'Query' }
  & { adminUserConnection: (
    { __typename?: 'UserConnection' }
    & { nodes?: Maybe<Array<Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'name' | 'avatar' | 'mixinId' | 'mixinUuid'>
    )>>>, pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage' | 'endCursor'>
    ) }
  ) }
);

export type CurrentAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentAdminQuery = (
  { __typename?: 'Query' }
  & { currentAdmin: (
    { __typename?: 'Administrator' }
    & Pick<Administrator, 'name'>
  ) }
);

export type SwitchLocaleMutationVariables = Exact<{
  input: SwitchLocaleMutationInput;
}>;


export type SwitchLocaleMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'switchLocale'>
);


export const AdminLoginDocument = gql`
    mutation AdminLogin($input: AdminLoginMutationInput!) {
  adminLogin(input: $input)
}
    `;
export type AdminLoginMutationFn = Apollo.MutationFunction<AdminLoginMutation, AdminLoginMutationVariables>;

/**
 * __useAdminLoginMutation__
 *
 * To run a mutation, you first call `useAdminLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAdminLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [adminLoginMutation, { data, loading, error }] = useAdminLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAdminLoginMutation(baseOptions?: Apollo.MutationHookOptions<AdminLoginMutation, AdminLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AdminLoginMutation, AdminLoginMutationVariables>(AdminLoginDocument, options);
      }
export type AdminLoginMutationHookResult = ReturnType<typeof useAdminLoginMutation>;
export type AdminLoginMutationResult = Apollo.MutationResult<AdminLoginMutation>;
export type AdminLoginMutationOptions = Apollo.BaseMutationOptions<AdminLoginMutation, AdminLoginMutationVariables>;
export const AdminUserConnectionDocument = gql`
    query AdminUserConnection($after: String) {
  adminUserConnection(after: $after) {
    nodes {
      name
      avatar
      mixinId
      mixinUuid
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
    `;

/**
 * __useAdminUserConnectionQuery__
 *
 * To run a query within a React component, call `useAdminUserConnectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminUserConnectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminUserConnectionQuery({
 *   variables: {
 *      after: // value for 'after'
 *   },
 * });
 */
export function useAdminUserConnectionQuery(baseOptions?: Apollo.QueryHookOptions<AdminUserConnectionQuery, AdminUserConnectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdminUserConnectionQuery, AdminUserConnectionQueryVariables>(AdminUserConnectionDocument, options);
      }
export function useAdminUserConnectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminUserConnectionQuery, AdminUserConnectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdminUserConnectionQuery, AdminUserConnectionQueryVariables>(AdminUserConnectionDocument, options);
        }
export type AdminUserConnectionQueryHookResult = ReturnType<typeof useAdminUserConnectionQuery>;
export type AdminUserConnectionLazyQueryHookResult = ReturnType<typeof useAdminUserConnectionLazyQuery>;
export type AdminUserConnectionQueryResult = Apollo.QueryResult<AdminUserConnectionQuery, AdminUserConnectionQueryVariables>;
export const CurrentAdminDocument = gql`
    query CurrentAdmin {
  currentAdmin {
    name
  }
}
    `;

/**
 * __useCurrentAdminQuery__
 *
 * To run a query within a React component, call `useCurrentAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentAdminQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentAdminQuery(baseOptions?: Apollo.QueryHookOptions<CurrentAdminQuery, CurrentAdminQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentAdminQuery, CurrentAdminQueryVariables>(CurrentAdminDocument, options);
      }
export function useCurrentAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentAdminQuery, CurrentAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentAdminQuery, CurrentAdminQueryVariables>(CurrentAdminDocument, options);
        }
export type CurrentAdminQueryHookResult = ReturnType<typeof useCurrentAdminQuery>;
export type CurrentAdminLazyQueryHookResult = ReturnType<typeof useCurrentAdminLazyQuery>;
export type CurrentAdminQueryResult = Apollo.QueryResult<CurrentAdminQuery, CurrentAdminQueryVariables>;
export const SwitchLocaleDocument = gql`
    mutation SwitchLocale($input: SwitchLocaleMutationInput!) {
  switchLocale(input: $input)
}
    `;
export type SwitchLocaleMutationFn = Apollo.MutationFunction<SwitchLocaleMutation, SwitchLocaleMutationVariables>;

/**
 * __useSwitchLocaleMutation__
 *
 * To run a mutation, you first call `useSwitchLocaleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSwitchLocaleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [switchLocaleMutation, { data, loading, error }] = useSwitchLocaleMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSwitchLocaleMutation(baseOptions?: Apollo.MutationHookOptions<SwitchLocaleMutation, SwitchLocaleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SwitchLocaleMutation, SwitchLocaleMutationVariables>(SwitchLocaleDocument, options);
      }
export type SwitchLocaleMutationHookResult = ReturnType<typeof useSwitchLocaleMutation>;
export type SwitchLocaleMutationResult = Apollo.MutationResult<SwitchLocaleMutation>;
export type SwitchLocaleMutationOptions = Apollo.BaseMutationOptions<SwitchLocaleMutation, SwitchLocaleMutationVariables>;