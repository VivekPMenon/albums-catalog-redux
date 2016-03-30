
import _ from 'lodash';
import {IAlbum, IAction, IEditAlbumAction, ACTION_EDIT_ALBUM} from '../album-catalog-actions/index';

function editAlbum(state: IAlbum = {}, action: IAction): IAlbum {
    switch (action.type) {
        case ACTION_EDIT_ALBUM:
            var editAlbumAction = action as IEditAlbumAction;
            return <IAlbum>_.assign({}, editAlbumAction.album);            
        default:
            return state;
    }
}

export default editAlbum;
