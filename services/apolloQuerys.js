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

// export const bookingMutation =
//   gql`
//     mutation bookingMutation {
//       createBooking(
//         data: {
//           pickUpDate: "` +
//   formValues.pickUpDate +
//   `"
//           pickUpTime: "` +
//   formValues.pickUpTime +
//   `"
//           dropOffDate: "` +
//   formValues.dropOffDate +
//   `"
//           dropOffTime: "` +
//   formValues.dropOffTime +
//   `"
//     contactNumber:"` +
//   formValues.contactNumber +
//   `"
//         }
//       ) {
//         id
//       }
//     }
//   `;
