import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlaylistsComponent } from '../playlists.component';
import { ContentCardComponent } from '../subcomponents/content-card/content-card.component';
import { PlaylistFormComponent } from '../subcomponents/playlist-form/playlist-form.component';
import { PlaylistListComponent } from '../subcomponents/playlist-list/playlist-list.component';
import { PlaylistDetailComponent } from '../subcomponents/playlist-detail/playlist-detail.component';

import playlistsData from '../data/playlists.data';

import { routerModule } from '../routing/playlists.routing';

import { MusicSharedModule } from '../../music-shared/music-shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        routerModule,
        MusicSharedModule
    ],
    declarations: [
        PlaylistsComponent,
        ContentCardComponent,
        PlaylistFormComponent,
        PlaylistListComponent,
        PlaylistDetailComponent
    ],
    exports: [
        PlaylistListComponent
    ]
})

export class PlaylistsModule{

}