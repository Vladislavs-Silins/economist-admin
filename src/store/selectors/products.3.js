export default (products, { code }) => {
    return products.filter((product) => {
        const codeMatch = typeof code !== 'string' || code === '' || product.code === code;
        return codeMatch;
    });
};
