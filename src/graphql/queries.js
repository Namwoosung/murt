export const queries = {
    getCustomer: `
      query GetCustomer($id: ID!) {
        getCustomer(id: $id) {
          id
          nickname
          email
          accountBooks {
            id
            name
            date
          }
          wishlist {
            id
            name
            price
          }
        }
      }
    `,
  
    getProduct: `
      query GetProduct($id: ID!) {
        getProduct(id: $id) {
          id
          name
          price
          timestamp
          mart {
            id
            name
            location
          }
        }
      }
    `,
  
    getProductsByName: `
      query GetProductsByName($name: String!) {
        getProductsByName(name: $name) {
          id
          name
          price
          mart {
            id
            name
            location
          }
        }
      }
    `,
  
    getProductsByMart: `
      query GetProductsByMart($martId: ID!) {
        getProductsByMart(martId: $martId) {
          id
          name
          price
        }
      }
    `,
  
    getCustomersByWishlistProduct: `
      query GetCustomersByWishlistProduct($productId: ID!) {
        getCustomersByWishlistProduct(productId: $productId) {
          id
          nickname
          email
        }
      }
    `,
  
    getMart: `
      query GetMart($id: ID!) {
        getMart(id: $id) {
          id
          name
          location
          products {
            id
            name
            price
          }
        }
      }
    `,
  
    getAccountBook: `
      query GetAccountBook($id: ID!) {
        getAccountBook(id: $id) {
          id
          name
          date
          customer {
            id
            nickname
          }
          products {
            product {
              id
              name
              price
            }
            amount
          }
        }
      }
    `
  };
