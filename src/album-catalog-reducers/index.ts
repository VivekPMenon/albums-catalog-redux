import { combineReducers } from 'redux';
import albumListReducer from './album-list.reducer';
import editAlbumReducer from './edit-album.reducer';
import recentEditsReducer from './recent-edits.reducer';
import uiStateReducer from './ui-state.reducer';

const mainReducer = combineReducers({
    albumList: albumListReducer,
    currentlyEdited: editAlbumReducer,
    recentEdits: recentEditsReducer,
    uiState: uiStateReducer
});

export default mainReducer;
