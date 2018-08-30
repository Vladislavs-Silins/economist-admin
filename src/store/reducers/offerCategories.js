const offerCategoriesReducerDefaultState = [];

export default (state = offerCategoriesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_OFFERCATEGORY':
            return [
                ...state,
                action.offerCategory
            ];
        case 'SET_OFFERCATEGORIES':
            return [
                ...action.offerCategories
            ];
        case 'REMOVE_OFFERCATEGORY':
            return state.filter(({ code }) => code !== action.code);
        case 'EDIT_OFFERCATEGORY':
            return state.map((offerCategory) => {
                if (offerCategory.code === action.code) {
                    return {
                        ...offerCategory,
                        ...action.updates
                    };
                } else {
                    return offerCategory;
                }
            });
        default:
            return state;
    }
};