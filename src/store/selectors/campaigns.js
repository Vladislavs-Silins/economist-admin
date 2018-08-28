export default (campaigns, { campaignCode }) => {
    return campaigns.filter((campaign) => {
        const codeMatch = typeof campaignCode !== 'string' || campaignCode === '' || campaign.code === campaignCode;
        return codeMatch;
    });
};
