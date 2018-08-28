const promotionsReducerDefaultState = [];

export default (state = promotionsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_PROMOTION':
            return [
                ...state,
                action.promotion
            ];
        case 'SET_PROMOTIONS':
            return [
                ...action.promotions
            ];
        case 'REMOVE_PROMOTION':
            return state.filter(({ code }) => code !== action.code);
        case 'EDIT_PROMOTION':
            return state.map((promotion) => {
                if (promotion.code === action.code) {
                    return {
                        ...promotion,
                        ...action.updates
                    };
                } else {
                    return promotion;
                }
            });
        default:
            return state;
    }
};