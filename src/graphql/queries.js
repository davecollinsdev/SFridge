/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFridgeReading = /* GraphQL */ `
  query GetFridgeReading($id: ID!) {
    getFridgeReading(id: $id) {
      id
      temperature
      humidity
      datetime
      type
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listFridgeReadings = /* GraphQL */ `
  query ListFridgeReadings(
    $filter: ModelFridgeReadingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFridgeReadings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        temperature
        humidity
        datetime
        type
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const fridgeReadingsByDateTime = /* GraphQL */ `
  query FridgeReadingsByDateTime(
    $type: String
    $datetime: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelFridgeReadingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    fridgeReadingsByDateTime(
      type: $type
      datetime: $datetime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        temperature
        humidity
        datetime
        type
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFridgeReadings = /* GraphQL */ `
  query SyncFridgeReadings(
    $filter: ModelFridgeReadingFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFridgeReadings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        temperature
        humidity
        datetime
        type
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
