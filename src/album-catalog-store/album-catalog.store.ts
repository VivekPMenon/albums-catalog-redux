import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import mainReducer from '../album-catalog-reducers/index';

const logger = new createLogger();
const albumCatalogStore = createStore(
    mainReducer,
    applyMiddleware(thunk, promise, logger)
);

export default albumCatalogStore;
