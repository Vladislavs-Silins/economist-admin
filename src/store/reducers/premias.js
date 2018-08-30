const premiasReducerDefaultState = [];

export default (state = premiasReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_PREMIA':
            return [
                ...state,
                action.premia
            ];
        case 'SET_PREMIAS':
            return [
                ...action.premias
            ];
        case 'REMOVE_PREMIA':
            return state.filter(({ code }) => code !== action.code);
        case 'EDIT_PREMIA':
            return state.map((premia) => {
                if (premia.code === action.code) {
                    return {
                        ...premia,
                        ...action.updates
                    };
                } else {
                    return premia;
                }
            });
        default:
            return state;
    }
};