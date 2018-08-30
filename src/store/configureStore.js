import { createStore, combineReducers } from 'redux';
import campaignsReducer from './reducers/campaigns';
import promotionsReducer from './reducers/promotions';
import premiasReducer from './reducers/premias';
import filtersReducer from './reducers/filters';

export default () => {
    const store = createStore(
        combineReducers({
            campaigns: campaignsReducer,
            promotions: promotionsReducer,
            premias: premiasReducer,
            filters: filtersReducer
        })
    );

    return store;
};