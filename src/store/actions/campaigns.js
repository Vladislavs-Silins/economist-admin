import { Campaign } from "model/Campaign";

// SET_CAMPAIGNS
export const setCampaigns = (
    {
        campaigns = []
    } = {}
) => ({
    type: 'SET_CAMPAIGNS',
    campaigns
});

// ADD_CAMPAIGN
export const addCampaign = (
    {
        campaign = new Campaign()
    } = {}
) => ({
    type: 'ADD_CAMPAIGN',
    campaign
});

// REMOVE_CAMPAIGN
export const removeCampaign = ({ code } = {}) => ({
    type: 'REMOVE_CAMPAIGN',
    code
});

// EDIT_CAMPAIGN
export const editCampaign = (code, updates) => ({
    type: 'EDIT_CAMPAIGN',
    code,
    updates
});
