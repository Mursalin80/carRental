import { gql } from "@apollo/client";

// query
export const carQuery = gql`
  query CarLists {
    carLists {
      carAvg
      createdAt
      id
      name
      price
      updatedAt
      carBrand
      carType
      publishedAt
      image {
        url
      }
    }
  }
`;

// mutation

export const Car_Mutation = gql`
  mutation Booking(
    $location: String
    $pickUpDate: String
    $dropOffDate: String
    $pickUpTime: String
    $dropOffTime: String
    $contactNumber: String
    $carId: ID
  ) {
    createBooking(
      data: {
        location: $location
        pickUpDate: $pickUpDate
        dropOffDate: $dropOffDate
        pickUpTime: $pickUpTime
        dropOffTime: $dropOffTime
        contactNumber: $contactNumber
        carId: { connect: { id: $carId } }
      }
    ) {
      id
    }
  }
`;
