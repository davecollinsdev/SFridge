/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFridgeReading = /* GraphQL */ `
  mutation CreateFridgeReading(
    $input: CreateFridgeReadingInput!
    $condition: ModelFridgeReadingConditionInput
  ) {
    createFridgeReading(input: $input, condition: $condition) {
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
export const updateFridgeReading = /* GraphQL */ `
  mutation UpdateFridgeReading(
    $input: UpdateFridgeReadingInput!
    $condition: ModelFridgeReadingConditionInput
  ) {
    updateFridgeReading(input: $input, condition: $condition) {
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
export const deleteFridgeReading = /* GraphQL */ `
  mutation DeleteFridgeReading(
    $input: DeleteFridgeReadingInput!
    $condition: ModelFridgeReadingConditionInput
  ) {
    deleteFridgeReading(input: $input, condition: $condition) {
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
