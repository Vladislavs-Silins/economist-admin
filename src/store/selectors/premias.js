export default (premias, { code }) => {
    return premias.filter((premia) => {
        const codeMatch = typeof code !== 'string' || code === '' || premia.code === code;
        return codeMatch;
    });
};
