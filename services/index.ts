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
