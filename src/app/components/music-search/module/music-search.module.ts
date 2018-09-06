import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MusicSearchComponent } from '../music-search.component';
import { AlbumListComponent } from '../subcomponents/album-list/album-list.component';
import { AlbumCardComponent } from '../subcomponents/album-card/album-card.component';
import { MusicSearchService } from '../service/music-search.service';
import { AlbumSearchFormComponent } from '../subcomponents/album-search-form/album-search-form.component';

import { routerModule } from '../routing/music-search.routing';
import { AlbumDetailsComponent } from '../subcomponents/album-details/album-details.component';

import { MusicSharedModule } from '../../music-shared/music-shared.module';


@NgModule({
    imports: [
        CommonModule,
        HttpModule,
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
        MusicSearchService
    ]
})


export class MusicSearchModule{
    
}