import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MusicSearchComponent} from './containers/music-search/music-search.component';
import {AlbumListComponent} from './components/album-list/album-list.component';
import {AlbumCardComponent} from './components/album-card/album-card.component';
import {MusicSearchService} from '../../core/services/music-search/music-search.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        MusicSearchComponent,
        AlbumListComponent,
        AlbumCardComponent,
    ],
    exports: [
        MusicSearchComponent
    ],
    providers: [
        MusicSearchService
    ]
})
export class MusicSearchModule {
}
