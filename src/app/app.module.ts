import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AuthService} from './core/services/auth/auth.service';
import {PlaylistsModule} from './module/playlists/playlists.module';
import {HttpModule} from '@angular/http';
import {MusicSearchModule} from './module/music-search/music-search.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        PlaylistsModule,
        MusicSearchModule
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {

    constructor(private auth: AuthService) {
        this.auth.getToken();
    }
}
