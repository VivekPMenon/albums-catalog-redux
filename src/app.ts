import 'bootstrap/css/bootstrap.css!css';

import angular from 'angular';
import AlbumCatalogUIModule from './album-catalog-ui/index';
import {albumCatalogStore} from './album-catalog-store/index';
import {loadAlbums} from './album-catalog-actions/index';

angular
    .module('albumCatalog', [
        AlbumCatalogUIModule.name
    ])
    .run(runBlock);

function runBlock() {
    albumCatalogStore.dispatch(loadAlbums());
}
