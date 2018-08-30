import { Product } from "model/Product";

// SET_PRODUCTS
export const setProducts = (
    {
        products = []
    } = {}
) => ({
    type: 'SET_PRODUCTS',
    products
});

// ADD_PRODUCT
export const addProduct = (
    {
        product = new Product()
    } = {}
) => ({
    type: 'ADD_PRODUCT',
    product
});

// REMOVE_PRODUCT
export const removeProduct = ({ code } = {}) => ({
    type: 'REMOVE_PRODUCT',
    code
});

// EDIT_PRODUCT
export const editProduct = (code, updates) => ({
    type: 'EDIT_PRODUCT',
    code,
    updates
});
