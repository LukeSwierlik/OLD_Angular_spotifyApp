import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {PlaylistsModule} from './module/playlists/playlists.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {MusicSearchModule} from './module/music-search/music-search.module';
import {AuthInterceptor} from './core/interceptor/AuthInterceptor';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import {routerModule} from './app.routing';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        PlaylistsModule,
        MusicSearchModule,
        routerModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
