import { createStore, combineReducers, compose } from 'redux';
import campaignsReducer from './reducers/campaigns';
import promotionsReducer from './reducers/promotions';
import premiasReducer from './reducers/premias';
import productsReducer from './reducers/products';
import paymentTypesReducer from './reducers/paymentTypes';
import offerCategoryReducer from './reducers/offerCategories';
import offerTermReducer from './reducers/offerTerms';
import filtersReducer from './reducers/filters';

export default () => {
    const finalCreateStore = compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )(createStore);
    const store = finalCreateStore(
        combineReducers({
            campaigns: campaignsReducer,
            promotions: promotionsReducer,
            premias: premiasReducer,
            products: productsReducer,
            paymentTypes: paymentTypesReducer,
            offerCategories: offerCategoryReducer,
            offerTerms: offerTermReducer,
            filters: filtersReducer
        })
    );

    return store;
};