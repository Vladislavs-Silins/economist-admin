const paymentTypesReducerDefaultState = [];

export default (state = paymentTypesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_PAYMENTTYPE':
            return [
                ...state,
                action.paymentType
            ];
        case 'SET_PAYMENTTYPES':
            return [
                ...action.paymentTypes
            ];
        case 'REMOVE_PAYMENTTYPE':
            return state.filter(({ code }) => code !== action.code);
        case 'EDIT_PAYMENTTYPE':
            return state.map((paymentType) => {
                if (paymentType.code === action.code) {
                    return {
                        ...paymentType,
                        ...action.updates
                    };
                } else {
                    return paymentType;
                }
            });
        default:
            return state;
    }
};