import { OfferCategory } from "model/OfferCategory";

// SET_OFFERCATEGORIES
export const setOfferCategories = (
    {
        offerCategories = []
    } = {}
) => ({
    type: 'SET_OFFERCATEGORIES',
    offerCategories
});

// ADD_OFFERCATEGORY
export const addOfferCategory = (
    {
        product = new OfferCategory()
    } = {}
) => ({
    type: 'ADD_OFFERCATEGORY',
    product
});

// REMOVE_OFFERCATEGORY
export const removeOfferCategory = ({ code } = {}) => ({
    type: 'REMOVE_OFFERCATEGORY',
    code
});

// EDIT_OFFERCATEGORY
export const editOfferCategory = (code, updates) => ({
    type: 'EDIT_OFFERCATEGORY',
    code,
    updates
});
