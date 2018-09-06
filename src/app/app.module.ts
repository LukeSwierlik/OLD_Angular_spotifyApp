import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PlaylistsModule } from './components/playlists/module/playlists.module';
import { MusicSearchModule } from './components/music-search/module/music-search.module';
import { AppComponent } from './app.component';
import { PlaylistsComponent } from './components/playlists/playlists.component';
import { MusicSearchComponent } from './components/music-search/music-search.component';

import { AuthService } from './service/auth.service';
import { routerModule } from './app.routing';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { PlaylistsService } from './components/playlists/service/playlists.service';
import { PlaylistSelectionService } from './components/music-shared/playlist-selection.service';

import { MusicSharedModule } from './components/music-shared/music-shared.module';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        PlaylistsModule,
        MusicSearchModule,
        routerModule,
        MusicSharedModule
    ],
    providers: [
        AuthService,
        PlaylistsService,
        PlaylistSelectionService
    ],
    bootstrap: [AppComponent]
})


export class AppModule {
    constructor(private auth: AuthService) {
        this.auth.getToken();
    }
}
