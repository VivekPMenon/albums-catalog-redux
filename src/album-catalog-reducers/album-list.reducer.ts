///<reference path="../../typings/lodash/lodash.d.ts" />
import _ from 'lodash';
import  * as Actions from '../album-catalog-actions/index';
import albumCatalogJson from '../album-catalog-data/album-catalog.json!json';

function albumList(state: Actions.IAlbum[] = [], action: Actions.IAction): Actions.IAlbum[] {
    switch (action.type) {
        case Actions.ACTION_SUBMIT_EDITS:
            const submitEditsAction = action as Actions.ISubmitEditsAction;                        
            return state.map((album) => {
                if (album.id === submitEditsAction.album.id)
                    return <Actions.IAlbum>_.assign({}, submitEditsAction.album);
                else
                    return album;                
            });
            
        case Actions.ACTION_LOAD_ALBUMS:
            return albumCatalogJson.albumList;
            
        case Actions.ACTION_ADD_NEW_ALBUM:
            const addAlbumAction = action as Actions.IAddAlbumAction;
            return [...state, addAlbumAction.album];
        default:
            return state;
    }
}

export default albumList;
