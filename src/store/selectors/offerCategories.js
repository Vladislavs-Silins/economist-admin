export default (offerCategory, { code }) => {
    return offerCategory.filter((offerCategory) => {
        const codeMatch = typeof code !== 'string' || code === '' || offerCategory.code === code;
        return codeMatch;
    });
};
