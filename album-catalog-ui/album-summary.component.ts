///<reference path="../../typings/angularjs/angular.d.ts" />
import template from './album-summary.component.html!text';
import {albumCatalogStore} from '../album-catalog-store/index'; 
import {editAlbum, IAlbum} from '../album-catalog-actions/index'; 

class Controller{
    album:IAlbum;
    
    constructor(){
        
    }
    
    edit():void{
        albumCatalogStore.dispatch(editAlbum(this.album));
    }
}

const component:ng.IComponentOptions = {
    bindings:{
        album: '='
    },
    controllerAs:'vm',
    template: template,
    controller: Controller
}

export default component;
