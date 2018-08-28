export default (promotions, { code }) => {
    return promotions.filter((promotion) => {
        const codeMatch = typeof code !== 'string' || code === '' || promotion.code === code;
        return codeMatch;
    });
};
