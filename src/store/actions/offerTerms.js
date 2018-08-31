import { OfferTerm } from "model/OfferTerm";

// SET_OFFERTERMS
export const setOfferTerms = (
    {
        offerTerms = []
    } = {}
) => ({
    type: 'SET_OFFERTERMS',
    offerTerms
});

// ADD_OFFERTERM
export const addOfferTerm = (
    {
        offerTerm = new OfferTerm()
    } = {}
) => ({
    type: 'ADD_OFFERTERM',
    offerTerm
});

// REMOVE_OFFERTERM
export const removeOfferTerm = ({ code } = {}) => ({
    type: 'REMOVE_OFFERTERM',
    code
});

// EDIT_OFFERTERM
export const editOfferTerm = (code, updates) => ({
    type: 'EDIT_OFFERTERM',
    code,
    updates
});
