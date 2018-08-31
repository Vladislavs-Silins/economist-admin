const offerTermsReducerDefaultState = [];

export default (state = offerTermsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_OFFERTERM':
            return [
                ...state,
                action.offerTerm
            ];
        case 'SET_OFFERTERMS':
            return [
                ...action.offerTerms
            ];
        case 'REMOVE_OFFERTERM':
            return state.filter(({ code }) => code !== action.code);
        case 'EDIT_OFFERTERM':
            return state.map((offerTerm) => {
                if (offerTerm.code === action.code) {
                    return {
                        ...offerTerm,
                        ...action.updates
                    };
                } else {
                    return offerTerm;
                }
            });
        default:
            return state;
    }
};