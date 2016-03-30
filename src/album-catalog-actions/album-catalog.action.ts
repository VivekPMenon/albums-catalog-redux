
import {IAlbum} from './interface-album';
import {ACTION_EDIT_ALBUM, ACTION_SUBMIT_EDITS, ACTION_DELETE_RECENT_EDIT, ACTION_LOAD_ALBUMS, ACTION_ADD_NEW_ALBUM} from './constants';

interface IAction {
    type:string;
} 

interface IActionOnAlbum extends IAction{
    album:IAlbum;
}

interface ISubmitEditsAction extends IActionOnAlbum{    
} 

interface IEditAlbumAction extends IActionOnAlbum {    
} 

interface IAddAlbumAction extends IActionOnAlbum {
} 

interface IDeleteRecentEditAction extends IAction {
    id:number;
}

function editAlbum(album:IAlbum):IEditAlbumAction{
    return {
        type:ACTION_EDIT_ALBUM, 
        album
    };
}

function submitEdits(album:IAlbum):ISubmitEditsAction{
    return {
        type:ACTION_SUBMIT_EDITS, 
        album
    };
}

function deleteRecentEdit(id:number):IDeleteRecentEditAction{
    return {
        type:ACTION_DELETE_RECENT_EDIT, 
        id
    };
}

function loadAlbums():IAction{
    return {
        type: ACTION_LOAD_ALBUMS
    };
}

function addAlbum(album:IAlbum):IAddAlbumAction{
    return {
        type: ACTION_ADD_NEW_ALBUM,
        album: album
    };
}

export {
    editAlbum,
    submitEdits,
    deleteRecentEdit,
    loadAlbums,
    addAlbum,
    IAction,
    ISubmitEditsAction,
    IEditAlbumAction,
    IDeleteRecentEditAction,
    IAddAlbumAction,
    IActionOnAlbum
}
