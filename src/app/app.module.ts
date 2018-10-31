import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import { PlaylistsComponent } from './containers/playlists/playlists.component';
import { ContentCardComponent } from './components/content-card/content-card.component';
import { PlaylistsListComponent } from './components/playlists-list/playlists-list.component';
import { PlaylistFormComponent } from './components/playlist-form/playlist-form.component';
import { PlaylistDetailComponent } from './components/playlist-detail/playlist-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        PlaylistsComponent,
        ContentCardComponent,
        PlaylistsListComponent,
        PlaylistFormComponent,
        PlaylistDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
