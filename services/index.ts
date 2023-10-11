import { request, gql } from "graphql-request";

const Master_URL =
  "https://api-ap-south-1.hygraph.com/v2/clnlaxsr05yl501t4agp18x4b/master";

export const getCarList = async () => {
  const carQuery = gql`
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
  const result = await request({ url: Master_URL, document: carQuery });
  return result;
};

export const bookingMutation = async (formValues: any) => {
  const bookingMutation =
    gql`
    mutation bookingMutation {
      createBooking(
        data: {
          pickUpDate: "` +
    formValues.pickUpDate +
    `"
          pickUpTime: "` +
    formValues.pickUpTime +
    `"
          dropOffDate: "` +
    formValues.dropOffDate +
    `"
          dropOffTime: "` +
    formValues.dropOffTime +
    `"
    contactNumber:"` +
    formValues.contactNumber +
    `"
        }
      ) {
        id
      }
    }
  `;
  const result = await request({ url: Master_URL, document: bookingMutation });
  return result;
};
