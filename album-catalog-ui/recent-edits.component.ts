///<reference path="../../typings/angularjs/angular.d.ts" />
import template from './recent-edits.component.html!text'; 
import {albumCatalogStore} from '../album-catalog-store/index'; 
import {IRecentEdits} from '../album-catalog-actions/index'; 

class Controller{
    
    recentEditsList:IRecentEdits[];
    
    constructor(){
        albumCatalogStore.subscribe(()=>{
            this.load();
        });
    }    
    
    load():void{
       this.recentEditsList =  albumCatalogStore.getState().recentEdits;
    }
}

const component:ng.IComponentOptions = {
    controllerAs:'vm',
    template: template,
    controller: Controller
}

export default component;
