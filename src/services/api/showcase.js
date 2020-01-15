import gql from 'graphql-tag';

export const showCase = gql`
  query allCategoiesSearch {
    allCategory {
      title
      id
    }
  }
`;
export const PRODUCTS = gql`
  query poc($id: ID!, $categoryId: Int, $search: String) {
    poc(id: $id) {
      id
      products(categoryId: $categoryId, search: $search) {
        id
        title
        rgb
        images {
          url
        }
        productVariants {
          availableDate
          productVariantId
          price
          subtitle
        }
      }
    }
  }
`;
