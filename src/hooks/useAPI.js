// src/hooks/useAPI.js
import { API, graphqlOperation, Cache } from 'aws-amplify';
import { Amplify } from 'aws-amplify';
import { amplifyConfig } from '../config/amplify';
import { queries } from '../graphql/queries';
import { mutations } from '../graphql/mutations';

Amplify.configure(amplifyConfig);

export const useAPI = () => {
  // Query implementations
  const fetchCustomer = async (id) => {
    try {
      const cachedData = await Cache.getItem(`customer-${id}`);
      if (cachedData) {
        return cachedData;
      }

      const response = await API.graphql(
        graphqlOperation(queries.getCustomer, { id })
      );
      
      if (!response.data.getCustomer) {
        throw new Error('Customer not found');
      }

      const customerData = response.data.getCustomer;
      await Cache.setItem(`customer-${id}`, customerData, { expires: 3600 });
      return customerData;
    } catch (error) {
      console.error('Error fetching customer:', error);
      if (error.message === 'Customer not found') {
        throw error;
      }
      throw new Error('Failed to fetch customer data');
    }
  };

  const fetchProduct = async (id) => {
    try {
      const cachedData = await Cache.getItem(`product-${id}`);
      if (cachedData) {
        return cachedData;
      }

      const response = await API.graphql(
        graphqlOperation(queries.getProduct, { id })
      );

      if (!response.data.getProduct) {
        throw new Error('Product not found');
      }

      const productData = response.data.getProduct;
      await Cache.setItem(`product-${id}`, productData, { expires: 3600 });
      return productData;
    } catch (error) {
      console.error('Error fetching product:', error);
      if (error.message === 'Product not found') {
        throw error;
      }
      throw new Error('Failed to fetch product data');
    }
  };

  const searchProductsByName = async (name) => {
    try {
      const response = await API.graphql(
        graphqlOperation(queries.getProductsByName, { name })
      );

      if (!response.data.getProductsByName) {
        return [];
      }

      return response.data.getProductsByName;
    } catch (error) {
      console.error('Error searching products:', error);
      throw new Error('Failed to search products');
    }
  };

  const fetchProductsByMart = async (martId) => {
    try {
      const cachedData = await Cache.getItem(`mart-products-${martId}`);
      if (cachedData) {
        return cachedData;
      }

      const response = await API.graphql(
        graphqlOperation(queries.getProductsByMart, { martId })
      );

      if (!response.data.getProductsByMart) {
        return [];
      }

      const productsData = response.data.getProductsByMart;
      await Cache.setItem(`mart-products-${martId}`, productsData, { expires: 3600 });
      return productsData;
    } catch (error) {
      console.error('Error fetching mart products:', error);
      throw new Error('Failed to fetch mart products');
    }
  };

  const fetchCustomersByWishlistProduct = async (productId) => {
    try {
      const response = await API.graphql(
        graphqlOperation(queries.getCustomersByWishlistProduct, { productId })
      );

      if (!response.data.getCustomersByWishlistProduct) {
        return [];
      }

      return response.data.getCustomersByWishlistProduct;
    } catch (error) {
      console.error('Error fetching customers by wishlist:', error);
      throw new Error('Failed to fetch customers by wishlist');
    }
  };

  const fetchMart = async (id) => {
    try {
      const cachedData = await Cache.getItem(`mart-${id}`);
      if (cachedData) {
        return cachedData;
      }

      const response = await API.graphql(
        graphqlOperation(queries.getMart, { id })
      );

      if (!response.data.getMart) {
        throw new Error('Mart not found');
      }

      const martData = response.data.getMart;
      await Cache.setItem(`mart-${id}`, martData, { expires: 3600 });
      return martData;
    } catch (error) {
      console.error('Error fetching mart:', error);
      if (error.message === 'Mart not found') {
        throw error;
      }
      throw new Error('Failed to fetch mart data');
    }
  };

  const fetchAccountBook = async (id) => {
    try {
      const cachedData = await Cache.getItem(`accountbook-${id}`);
      if (cachedData) {
        return cachedData;
      }

      const response = await API.graphql(
        graphqlOperation(queries.getAccountBook, { id })
      );

      if (!response.data.getAccountBook) {
        throw new Error('Account book not found');
      }

      const accountBookData = response.data.getAccountBook;
      await Cache.setItem(`accountbook-${id}`, accountBookData, { expires: 3600 });
      return accountBookData;
    } catch (error) {
      console.error('Error fetching account book:', error);
      if (error.message === 'Account book not found') {
        throw error;
      }
      throw new Error('Failed to fetch account book data');
    }
  };

  // Mutation implementations
  const createNewCustomer = async (customerData) => {
    try {
      const response = await API.graphql(
        graphqlOperation(mutations.createCustomer, { input: customerData })
      );

      if (!response.data.createCustomer) {
        throw new Error('Failed to create customer');
      }

      return response.data.createCustomer;
    } catch (error) {
      console.error('Error creating customer:', error);
      throw new Error('Failed to create customer');
    }
  };

  const createNewAccountBook = async (accountBookData) => {
    try {
      const response = await API.graphql(
        graphqlOperation(mutations.createAccountBook, { input: accountBookData })
      );

      if (!response.data.createAccountBook) {
        throw new Error('Failed to create account book');
      }

      return response.data.createAccountBook;
    } catch (error) {
      console.error('Error creating account book:', error);
      throw new Error('Failed to create account book');
    }
  };

  const createNewProduct = async (productData) => {
    try {
      const response = await API.graphql(
        graphqlOperation(mutations.createProduct, { input: productData })
      );

      if (!response.data.createProduct) {
        throw new Error('Failed to create product');
      }

      return response.data.createProduct;
    } catch (error) {
      console.error('Error creating product:', error);
      throw new Error('Failed to create product');
    }
  };

  const createNewMart = async (martData) => {
    try {
      const response = await API.graphql(
        graphqlOperation(mutations.createMart, { input: martData })
      );

      if (!response.data.createMart) {
        throw new Error('Failed to create mart');
      }

      return response.data.createMart;
    } catch (error) {
      console.error('Error creating mart:', error);
      throw new Error('Failed to create mart');
    }
  };

  const addProductToWishlist = async (customerId, productId) => {
    try {
      const response = await API.graphql(
        graphqlOperation(mutations.addToWishlist, { customerId, productId })
      );

      return response.data.addToWishlist;
    } catch (error) {
      console.error('Error adding to wishlist:', error);
      throw new Error('Failed to add product to wishlist');
    }
  };

  const updateProductPriceById = async (productId, priceData) => {
    try {
      const response = await API.graphql(
        graphqlOperation(mutations.updateProductPrice, { productId, input: priceData })
      );

      if (!response.data.updateProductPrice) {
        throw new Error('Failed to update product price');
      }

      // Invalidate cache
      await Cache.removeItem(`product-${productId}`);

      return response.data.updateProductPrice;
    } catch (error) {
      console.error('Error updating product price:', error);
      throw new Error('Failed to update product price');
    }
  };

  const updateAccountBookProductPriceById = async (accountBookId, productId, priceData) => {
    try {
      const response = await API.graphql(
        graphqlOperation(mutations.updateAccountBookProductPrice, {
          accountBookId,
          productId,
          input: priceData
        })
      );

      if (!response.data.updateAccountBookProductPrice) {
        throw new Error('Failed to update account book product price');
      }

      // Invalidate cache
      await Cache.removeItem(`accountbook-${accountBookId}`);

      return response.data.updateAccountBookProductPrice;
    } catch (error) {
      console.error('Error updating account book product price:', error);
      throw new Error('Failed to update account book product price');
    }
  };

  const updateAccountBookById = async (accountBookId, accountBookData) => {
    try {
      const response = await API.graphql(
        graphqlOperation(mutations.updateAccountBook, {
          accountBookId,
          input: accountBookData
        })
      );

      if (!response.data.updateAccountBook) {
        throw new Error('Failed to update account book');
      }

      // Invalidate cache
      await Cache.removeItem(`accountbook-${accountBookId}`);

      return response.data.updateAccountBook;
    } catch (error) {
      console.error('Error updating account book:', error);
      throw new Error('Failed to update account book');
    }
  };

  const deleteAccountBookById = async (accountBookId) => {
    try {
      const response = await API.graphql(
        graphqlOperation(mutations.deleteAccountBook, { accountBookId })
      );

      // Invalidate cache
      await Cache.removeItem(`accountbook-${accountBookId}`);

      return response.data.deleteAccountBook;
    } catch (error) {
      console.error('Error deleting account book:', error);
      throw new Error('Failed to delete account book');
    }
  };

  const deleteProductFromAccountBookById = async (accountBookId, productId) => {
    try {
      const response = await API.graphql(
        graphqlOperation(mutations.deleteProductFromAccountBook, { accountBookId, productId })
      );

      // Invalidate cache
      await Cache.removeItem(`accountbook-${accountBookId}`);

      return response.data.deleteProductFromAccountBook;
    } catch (error) {
      console.error('Error deleting product from account book:', error);
      throw new Error('Failed to delete product from account book');
    }
  };

  return {
    // Queries
    fetchCustomer,
    fetchProduct,
    searchProductsByName,
    fetchProductsByMart,
    fetchCustomersByWishlistProduct,
    fetchMart,
    fetchAccountBook,

    // Mutations
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
