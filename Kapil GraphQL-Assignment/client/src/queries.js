import { gql } from '@apollo/client';

export const GET_PEOPLE_AND_CARS = gql`
  {
    people {
      id
      firstName
      lastName
    }
    cars {
      id
      year
      make
      model
      price
      personId
    }
  }
`;

/* Queries for people */

export const GET_PEOPLE = gql`
  {
    people {
      id
      firstName
      lastName
    }
  }
`;

export const GET_PERSON_WITH_CARS = gql`
  query Person($personId: String!) {
    person(id: $personId) {
      id
      firstName
      lastName
    }
    people {
      id
      firstName
      lastName
    }
    cars {
      id
      year
      make
      model
      price
      personId
    }
  }
`;

export const ADD_PERSON = gql`
  mutation AddPerson($id: String!, $firstName: String!, $lastName: String!) {
    addPeople(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`

export const UPDATE_PERSON = gql`
  mutation updatePeople(
    $id: String!
    $firstName: String!
    $lastName: String!
  ) {
    updatePeople(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`;

export const REMOVE_PERSON = gql`
  mutation RemovePerson($id: String!) {
    removePeople(id: $id) {
      id
      firstName
      lastName
    }
  }
`

/* Queries for cars */

export const GET_CARS = gql`
  {
    cars {
      id
      year
      make
      model
      price
      personId
    }
  }
`;

export const ADD_CAR = gql`
  mutation AddAllCar($id: String!, $year: Int!, $make: String!, $model: String!, $price: Float!, $personId: String!) {
    addAllCar(id: $id, year: $year, make: $make, model: $model, price: $price, personId: $personId) {
      id
      year
      make
      model
      price
      personId
    }
  }
`;

export const REMOVE_CAR = gql`
  mutation removeAllCar($id: String!) {
    removeAllCar(id: $id) {
      id
      year
      make
      model
      price
      personId
    }
  }
`;

export const UPDATE_CAR = gql`
  mutation updateAllCar(
    $id: String!
    $year: Int
    $make: String
    $model: String
    $price: Float
    $personId: String
  ) {
    updateAllCar(
      id: $id
      year: $year
      make: $make
      model: $model
      price: $price
      personId: $personId
    ) {
      id
      year
      make
      model
      price
      personId
    }
  }
`;