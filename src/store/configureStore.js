import { createStore, combineReducers } from 'redux';
import campaignsReducer from './reducers/campaigns';
import promotionsReducer from './reducers/promotions';
import filtersReducer from './reducers/filters';

export default () => {
    const store = createStore(
        combineReducers({
            campaigns: campaignsReducer,
            promotions: promotionsReducer,
            filters: filtersReducer
        })
    );

    return store;
};