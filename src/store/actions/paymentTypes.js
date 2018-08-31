import { PaymentType } from "model/PaymentType";

// SET_PAYMENTTYPES
export const setPaymentTypes = (
    {
        paymentTypes = []
    } = {}
) => ({
    type: 'SET_PAYMENTTYPES',
    paymentTypes
});

// ADD_PAYMENTTYPE
export const addPaymentType = (
    {
        paymentType = new PaymentType()
    } = {}
) => ({
    type: 'ADD_PAYMENTTYPE',
    paymentType
});

// REMOVE_PAYMENTTYPE
export const removePaymentType = ({ code } = {}) => ({
    type: 'REMOVE_PAYMENTTYPE',
    code
});

// EDIT_PAYMENTTYPE
export const editPaymentType = (code, updates) => ({
    type: 'EDIT_PAYMENTTYPE',
    code,
    updates
});
