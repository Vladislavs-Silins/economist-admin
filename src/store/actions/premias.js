import { Premia } from "model/Premia";

// SET_PREMIAS
export const setPremias = (
    {
        premias = []
    } = {}
) => ({
    type: 'SET_PREMIAS',
    premias
});

// ADD_PREMIA
export const addPremia = (
    {
        premia = new Premia()
    } = {}
) => ({
    type: 'ADD_PREMIA',
    premia
});

// REMOVE_PREMIA
export const removePremia = ({ code } = {}) => ({
    type: 'REMOVE_PREMIA',
    code
});

// EDIT_PREMIA
export const editPremia = (code, updates) => ({
    type: 'EDIT_PREMIA',
    code,
    updates
});
