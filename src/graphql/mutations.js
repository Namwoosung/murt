export const mutations = {
    createCustomer: `
      mutation CreateCustomer($input: CreateCustomerInput!) {
        createCustomer(input: $input) {
          id
          nickname
          email
        }
      }
    `,
  
    createAccountBook: `
      mutation CreateAccountBook($input: CreateAccountBookInput!) {
        createAccountBook(input: $input) {
          id
          name
          date
          mart {
            name
            location
          }
          products {
            product {
              name
              price
            }
            amount
          }
        }
      }
    `,
  
    createProduct: `
      mutation CreateProduct($input: CreateProductInput!) {
        createProduct(input: $input) {
          id
          name
          price
          timestamp
          mart {
            name
            location
          }
        }
      }
    `,
  
    createMart: `
      mutation CreateMart($input: CreateMartInput!) {
        createMart(input: $input) {
          id
          name
          location
        }
      }
    `,
  
    addToWishlist: `
      mutation AddToWishlist($customerId: ID!, $productId: ID!) {
        addToWishlist(customerId: $customerId, productId: $productId)
      }
    `,
  
    updateProductPrice: `
      mutation UpdateProductPrice($productId: ID!, $input: UpdatePriceInput!) {
        updateProductPrice(productId: $productId, input: $input) {
          id
          price
        }
      }
    `,
  
    updateAccountBookProductPrice: `
      mutation UpdateAccountBookProductPrice(
        $accountBookId: ID!
        $productId: ID!
        $input: UpdatePriceInput!
      ) {
        updateAccountBookProductPrice(
          accountBookId: $accountBookId
          productId: $productId
          input: $input
        ) {
          product {
            id
            name
          }
          price
        }
      }
    `,
  
    updateAccountBook: `
      mutation UpdateAccountBook($accountBookId: ID!, $input: UpdateAccountBookInput!) {
        updateAccountBook(accountBookId: $accountBookId, input: $input) {
          id
          name
          date
        }
      }
    `,
  
    deleteAccountBook: `
      mutation DeleteAccountBook($accountBookId: ID!) {
        deleteAccountBook(accountBookId: $accountBookId)
      }
    `,
  
    deleteProductFromAccountBook: `
      mutation DeleteProductFromAccountBook($accountBookId: ID!, $productId: ID!) {
        deleteProductFromAccountBook(accountBookId: $accountBookId, productId: $productId)
      }
    `
  };
