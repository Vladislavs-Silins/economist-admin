export default (offerTerms, { code }) => {
    return offerTerms.filter((offerTerm) => {
        const codeMatch = typeof code !== 'string' || code === '' || offerTerm.code === code;
        return codeMatch;
    });
};
