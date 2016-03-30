///<reference path="../../typings/angularjs/angular.d.ts" />
import template from './layout.component.html!text';
import {albumCatalogStore} from '../album-catalog-store/index';
import {IAlbum} from '../album-catalog-actions/index';

class Controller {
    albumList: IAlbum[] = [];

    static $inject = ['$timeout'];

    constructor($timeout: ng.ITimeoutService) {
        albumCatalogStore.subscribe(() => {
            this.load();
        });
        
        this.load();
    }
    
    load():void{
        this.albumList = albumCatalogStore.getState().albumList;
    }
}

const component: ng.IComponentOptions = {
    controllerAs: 'vm',
    template: template,
    controller: Controller
}

export default component;
