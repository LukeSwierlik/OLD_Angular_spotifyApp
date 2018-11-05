import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TrackListComponent} from './components/track-list/track-list.component';
import { PlaylistSelectorComponent } from './components/playlist-selector/playlist-selector.component';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        TrackListComponent,
        PlaylistSelectorComponent,
    ],
    exports: [
        PlaylistSelectorComponent,
        TrackListComponent
    ]
})
export class MusicSharedModule {
}
