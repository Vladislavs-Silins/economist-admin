import { Promotion } from "model/Promotion";

// SET_PROMOTIONS
export const setPromotions = (
    {
        promotions = []
    } = {}
) => ({
        type: 'SET_PROMOTIONS',
    promotions
    });

// ADD_PROMOTION
export const addPromotion = (
    {
        promotion = new Promotion()
    } = {}
) => ({
    type: 'ADD_PROMOTION',
    promotion
});

// REMOVE_PROMOTION
export const removePromotion = ({ code } = {}) => ({
    type: 'REMOVE_PROMOTION',
    code
});

// EDIT_PROMOTION
export const editPromotion = (code, updates) => ({
    type: 'EDIT_PROMOTION',
    code,
    updates
});
