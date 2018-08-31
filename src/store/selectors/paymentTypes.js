export default (paymentTypes, { code }) => {
    return paymentTypes.filter((paymentType) => {
        const codeMatch = typeof code !== 'string' || code === '' || paymentType.code === code;
        return codeMatch;
    });
};
