import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MusicSearchComponent} from './containers/music-search/music-search.component';
import {AlbumListComponent} from './components/album-list/album-list.component';
import {AlbumCardComponent} from './components/album-card/album-card.component';
import {MusicSearchService} from '../../core/services/music-search/music-search.service';
import { HttpClientModule } from '@angular/common/http';
import { AlbumSearchFormComponent } from './components/album-search-form/album-search-form.component';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {routerModule} from './music-search.routing';
import {MusicSharedModule} from '../../shared/modules/music-shared/music-shared.module';
import { MusicSearchFacade } from '../../ngRxUtility/music-search/music-search.facade';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        routerModule,
        MusicSharedModule
    ],
    declarations: [
        MusicSearchComponent,
        AlbumListComponent,
        AlbumCardComponent,
        AlbumSearchFormComponent,
        AlbumDetailsComponent
    ],
    exports: [
        MusicSearchComponent
    ],
    providers: [
        MusicSearchService,
        MusicSearchFacade
    ]
})
export class MusicSearchModule {
}
