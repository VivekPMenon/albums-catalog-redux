import {createStore} from 'redux';
import mainReducer from '../album-catalog-reducers/index';

const albumCatalogStore = createStore(mainReducer);

export default albumCatalogStore;
