const filtersReducerDefaultState = {
    campaignCode: '',
    promotionCode: ''
};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_CAMPAIGN_CODE':
            return {
                ...state,
                campaignCode: action.code
            };
        case 'SET_PROMOTION_CODE':
            return {
                ...state,
                promotionCode: action.code
            };
        default:
            return state;
    }
};
