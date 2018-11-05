import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TrackListComponent} from './components/track-list/track-list.component';
import { PlaylistSelectorComponent } from './components/playlist-selector/playlist-selector.component';
import {FormsModule} from '@angular/forms';
import {SectionTitleComponent} from './components/section-title/section-title.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        TrackListComponent,
        PlaylistSelectorComponent,
        SectionTitleComponent
    ],
    exports: [
        PlaylistSelectorComponent,
        TrackListComponent,
        SectionTitleComponent
    ]
})
export class MusicSharedModule {
}
