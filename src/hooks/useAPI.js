import { API, graphqlOperation } from 'aws-amplify';
import { Cache } from 'aws-amplify';

// Query
const getCustomer = `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
      id
      nickname
      email
      accountBooks {
        items {
          id
          name
          date
        }
      }
      wishlist {
        items {
          id
          name
          price
        }
      }
    }
  }
`;

const getProduct = `
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
`;

const getProductsByName = `
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
`;

const getProductsByMart = `
  query GetProductsByMart($martId: ID!) {
    getProductsByMart(martId: $martId) {
      id
      name
      price
    }
  }
`;

const getCustomersByWishlistProduct = `
  query GetCustomersByWishlistProduct($productId: ID!) {
    getCustomersByWishlistProduct(productId: $productId) {
      id
      nickname
      email
    }
  }
`;

const getMart = `
  query GetMart($id: ID!) {
    getMart(id: $id) {
      id
      name
      location
      products {
        items {
          id
          name
          price
        }
      }
    }
  }
`;

const getAccountBook = `
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
        items {
          product {
            id
            name
            price
          }
          amount
        }
      }
    }
  }
`;

// Mutation
const createCustomer = `
  mutation CreateCustomer($input: CreateCustomerInput!) {
    createCustomer(input: $input) {
      id
      nickname
      email
    }
  }
`;

const createAccountBook = `
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
        items {
          product {
            name
            price
          }
          amount
        }
      }
    }
  }
`;

const createProduct = `
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
`;

const createMart = `
  mutation CreateMart($input: CreateMartInput!) {
    createMart(input: $input) {
      id
      name
      location
    }
  }
`;

const addToWishlist = `
  mutation AddToWishlist($customerId: ID!, $productId: ID!) {
    addToWishlist(customerId: $customerId, productId: $productId)
  }
`;

const updateProductPrice = `
  mutation UpdateProductPrice($productId: ID!, $input: UpdatePriceInput!) {
    updateProductPrice(productId: $productId, input: $input) {
      id
      price
    }
  }
`;

const updateAccountBookProductPrice = `
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
`;

const updateAccountBook = `
  mutation UpdateAccountBook($accountBookId: ID!, $input: UpdateAccountBookInput!) {
    updateAccountBook(accountBookId: $accountBookId, input: $input) {
      id
      name
      date
    }
  }
`;

const deleteAccountBook = `
  mutation DeleteAccountBook($accountBookId: ID!) {
    deleteAccountBook(accountBookId: $accountBookId)
  }
`;

const deleteProductFromAccountBook = `
  mutation DeleteProductFromAccountBook($accountBookId: ID!, $productId: ID!) {
    deleteProductFromAccountBook(accountBookId: $accountBookId, productId: $productId)
  }
`;

export const useAPI = () => {
  // Query
  const fetchCustomer = async (id) => {
    try {
      const response = await API.graphql(graphqlOperation(getCustomer, { id }));
      return response.data.getCustomer;
    } catch (error) {
      console.error('Error fetching customer:', error);
      throw error;
    }
  };

  const fetchProduct = async (id) => {
    try {
      const response = await API.graphql(graphqlOperation(getProduct, { id }));
      return response.data.getProduct;
    } catch (error) {
      console.error('Error fetching product:', error);
      throw error;
    }
  };

  const searchProductsByName = async (name) => {
    try {
      const response = await API.graphql(graphqlOperation(getProductsByName, { name }));
      return response.data.getProductsByName;
    } catch (error) {
      console.error('Error searching products:', error);
      throw error;
    }
  };

  const fetchProductsByMart = async (martId) => {
    try {
      const response = await API.graphql(graphqlOperation(getProductsByMart, { martId }));
      return response.data.getProductsByMart;
    } catch (error) {
      console.error('Error fetching mart products:', error);
      throw error;
    }
  };

  const fetchCustomersByWishlistProduct = async (productId) => {
    try {
      const response = await API.graphql(
        graphqlOperation(getCustomersByWishlistProduct, { productId })
      );
      return response.data.getCustomersByWishlistProduct;
    } catch (error) {
      console.error('Error fetching customers by wishlist:', error);
      throw error;
    }
  };

  const fetchMart = async (id) => {
    try {
      const response = await API.graphql(graphqlOperation(getMart, { id }));
      return response.data.getMart;
    } catch (error) {
      console.error('Error fetching mart:', error);
      throw error;
    }
  };

  const fetchAccountBook = async (id) => {
    try {
      const response = await API.graphql(graphqlOperation(getAccountBook, { id }));
      return response.data.getAccountBook;
    } catch (error) {
      console.error('Error fetching account book:', error);
      throw error;
    }
  };

  // Mutation
  const createNewCustomer = async (customerData) => {
    try {
      const response = await API.graphql(
        graphqlOperation(createCustomer, { input: customerData })
      );
      return response.data.createCustomer;
    } catch (error) {
      console.error('Error creating customer:', error);
      throw error;
    }
  };

  const createNewAccountBook = async (accountBookData) => {
    try {
      const response = await API.graphql(
        graphqlOperation(createAccountBook, { input: accountBookData })
      );
      return response.data.createAccountBook;
    } catch (error) {
      console.error('Error creating account book:', error);
      throw error;
    }
  };

  const createNewProduct = async (productData) => {
    try {
      const response = await API.graphql(
        graphqlOperation(createProduct, { input: productData })
      );
      return response.data.createProduct;
    } catch (error) {
      console.error('Error creating product:', error);
      throw error;
    }
  };

  const createNewMart = async (martData) => {
    try {
      const response = await API.graphql(
        graphqlOperation(createMart, { input: martData })
      );
      return response.data.createMart;
    } catch (error) {
      console.error('Error creating mart:', error);
      throw error;
    }
  };

  const addProductToWishlist = async (customerId, productId) => {
    try {
      const response = await API.graphql(
        graphqlOperation(addToWishlist, { customerId, productId })
      );
      return response.data.addToWishlist;
    } catch (error) {
      console.error('Error adding to wishlist:', error);
      throw error;
    }
  };

  const updateProductPriceById = async (productId, priceData) => {
    try {
      const response = await API.graphql(
        graphqlOperation(updateProductPrice, { productId, input: priceData })
      );
      return response.data.updateProductPrice;
    } catch (error) {
      console.error('Error updating product price:', error);
      throw error;
    }
  };

  const updateAccountBookProductPriceById = async (accountBookId, productId, priceData) => {
    try {
      const response = await API.graphql(
        graphqlOperation(updateAccountBookProductPrice, {
          accountBookId,
          productId,
          input: priceData
        })
      );
      return response.data.updateAccountBookProductPrice;
    } catch (error) {
      console.error('Error updating account book product price:', error);
      throw error;
    }
  };

  const updateAccountBookById = async (accountBookId, accountBookData) => {
    try {
      const response = await API.graphql(
        graphqlOperation(updateAccountBook, {
          accountBookId,
          input: accountBookData
        })
      );
      return response.data.updateAccountBook;
    } catch (error) {
      console.error('Error updating account book:', error);
      throw error;
    }
  };

  const deleteAccountBookById = async (accountBookId) => {
    try {
      const response = await API.graphql(
        graphqlOperation(deleteAccountBook, { accountBookId })
      );
      return response.data.deleteAccountBook;
    } catch (error) {
      console.error('Error deleting account book:', error);
      throw error;
    }
  };

  const deleteProductFromAccountBookById = async (accountBookId, productId) => {
    try {
      const response = await API.graphql(
        graphqlOperation(deleteProductFromAccountBook, { accountBookId, productId })
      );
      return response.data.deleteProductFromAccountBook;
    } catch (error) {
      console.error('Error deleting product from account book:', error);
      throw error;
    }
  };

  return {
    // Querie
    fetchCustomer,
    fetchProduct,
    searchProductsByName,
    fetchProductsByMart,
    fetchCustomersByWishlistProduct,
    fetchMart,
    fetchAccountBook,

    // Mutation
    createNewCustomer,
    createNewAccountBook,
    createNewProduct,
    createNewMart,
    addProductToWishlist,
    updateProductPriceById,
    updateAccountBookProductPriceById,
    updateAccountBookById,
    deleteAccountBookById,
    deleteProductFromAccountBookById
  };
};