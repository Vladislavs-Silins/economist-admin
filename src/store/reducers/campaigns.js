const campaignsReducerDefaultState = [];

export default (state = campaignsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_CAMPAIGN':
            return [
                ...state,
                action.campaign
            ];
        case 'SET_CAMPAIGNS':
            return [
                ...action.campaigns
            ];
        case 'REMOVE_CAMPAIGN':
            return state.filter(({ code }) => code !== action.code);
        case 'EDIT_CAMPAIGN':
            return state.map((campaign) => {
                if (campaign.code === action.code) {
                    return {
                        ...campaign,
                        ...action.updates
                    };
                } else {
                    return campaign;
                }
            });
        default:
            return state;
    }
};