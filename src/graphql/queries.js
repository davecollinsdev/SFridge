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
      createdAt
      _version
      _deleted
      _lastChangedAt
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
        createdAt
        datetime
        _version
        _deleted
        _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
