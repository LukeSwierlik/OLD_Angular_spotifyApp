import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PlaylistsModule } from './modules/playlists/playlists.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MusicSearchModule } from './modules/music-search/music-search.module';
import { AuthInterceptor } from './core/interceptor/AuthInterceptor';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { routerModule } from './app.routing';
import { PlaylistsService } from './core/services/playlists/playlists.service';
import { MusicSharedModule } from './shared/modules/music-shared/music-shared.module';
import { PlaylistSelectionService } from './core/services/playlist-selection/playlist-selection.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './ngRxUtility/reducers';
import { environment } from '../environments/environment';
import { MusicSearchEffects } from './ngRxUtility/music-search/music-search.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        PlaylistsModule,
        MusicSearchModule,
        routerModule,
        MusicSharedModule,
        StoreModule.forRoot(reducers),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        EffectsModule.forRoot([ MusicSearchEffects ]),
    ],
    providers: [
        PlaylistsService,
        PlaylistSelectionService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
