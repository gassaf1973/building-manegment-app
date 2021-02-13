const isTestEnvironment = process.env.BABEL_ENV === 'test';
const store = isTestEnvironment ? null : require('../../App');

export const getState = () => {
    if (store.default) {
        return store ? store.default.getState() : null;
    }
    return null;
};

export default getState;
