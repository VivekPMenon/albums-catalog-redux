
import _ from 'lodash';
import {IUIState, IEditAlbumAction, IAction, ACTION_EDIT_ALBUM, ACTION_SUBMIT_EDITS} from '../album-catalog-actions/index';

function editAlbum(state: IUIState = {mode:'add'}, action: IAction): IUIState {
    switch (action.type) {
        case ACTION_EDIT_ALBUM:
            return <IUIState>{mode:'edit'};      
            
        case ACTION_SUBMIT_EDITS:
            return <IUIState>{mode:'add'};  
                   
        default:
            return state;
    }
}

export default editAlbum;
