const productsReducerDefaultState = [];

export default (state = productsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [
                ...state,
                action.product
            ];
        case 'SET_PRODUCTS':
            return [
                ...action.products
            ];
        case 'REMOVE_PRODUCT':
            return state.filter(({ code }) => code !== action.code);
        case 'EDIT_PRODUCT':
            return state.map((product) => {
                if (product.code === action.code) {
                    return {
                        ...product,
                        ...action.updates
                    };
                } else {
                    return product;
                }
            });
        default:
            return state;
    }
};