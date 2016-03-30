///<reference path="../../typings/angularjs/angular.d.ts" />
///<reference path="../../typings/lodash/lodash.d.ts" />
import _ from 'lodash';
import template from './edit-album.component.html!text';
import {albumCatalogStore} from '../album-catalog-store/index'; 
import {IAlbum, submitEdits, addAlbum} from '../album-catalog-actions/index';

class Controller{
    album:IAlbum;
    mode:string;
    
    constructor(){
        albumCatalogStore.subscribe(()=>{
            this.load();
        });
        
        this.load();
    }
    
    load():void{
        this.album = albumCatalogStore.getState().currentlyEdited;
        this.mode = albumCatalogStore.getState().uiState.mode;
    }
    
    submit():void{
        if(this.mode === 'add'){
            this.album.id = _.random(1000,2000);
            albumCatalogStore.dispatch(addAlbum(this.album));
        }        
        else        
            albumCatalogStore.dispatch(submitEdits(this.album));
        this.album = {};
    }
}

const component:ng.IComponentOptions = {
    controllerAs:'vm',
    template: template,
    controller: Controller
}

export default component;
