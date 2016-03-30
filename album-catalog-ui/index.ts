import angular from 'angular';
import LayoutComponent from './layout.component';
import RecentEditsComponent from './recent-edits.component';
import EditAlbumComponent from './edit-album.component';
import AlbumSummaryComponent from './album-summary.component';

const AlbumCatalogUIModule = angular
                                .module('albumCatalogUI', [])
                                .component('layout', LayoutComponent)
                                .component('recentEdits', RecentEditsComponent)
                                .component('editAlbum', EditAlbumComponent)
                                .component('albumSummary', AlbumSummaryComponent);

export default AlbumCatalogUIModule;
