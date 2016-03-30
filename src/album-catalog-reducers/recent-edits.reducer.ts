///<reference path="../../typings/lodash/lodash.d.ts" />
//import _ from 'lodash';
import {IAction, IAlbum, IRecentEdits, IActionOnAlbum, ACTION_SUBMIT_EDITS, ACTION_ADD_NEW_ALBUM} from '../album-catalog-actions/index';

function recentEdits(state: IRecentEdits[] = [], action: IAction): IRecentEdits[] {
    switch (action.type) {
        case ACTION_ADD_NEW_ALBUM:
        case ACTION_SUBMIT_EDITS://TODO.. this is lot of statemtns for calculating new state
            let submitEditsAction = action as IActionOnAlbum;            
            const newEdit = createRecentEdits(submitEditsAction.album);
            
            if (state.length === 0)
                return [newEdit];
                            
            let newState: IRecentEdits[] = _.clone(state) as IRecentEdits[];            
            if(!_.find(newState, (recentEdits) => recentEdits.id === submitEditsAction.album.id))
                newState.push(newEdit);            
            return newState;
        
        default:
            return state;
    }
}

function createRecentEdits(album: IAlbum): IRecentEdits {
    return {
        id: album.id,
        text: '"'+ album.title + ' by '+ album.artist+ '" has been updated. Click here for detais (not supported).'
    }
}

export default recentEdits;
