import { Injectable, Inject} from '@angular/core';
import { Http } from '@angular/http';
import { Subject, Observable } from 'rxjs';

export interface Playlist {
    name: string,
    tracks: any[],
    color: string,
    favorite: boolean
}

@Injectable()
export class PlaylistsService {
    
    playlists = [];
    playlistsStrem$ = new Subject<Playlist[]>();
    server_url = 'http://localhost:3000/playlists/';

    constructor(private http: Http){
    }

    savePlaylist(playlist){
        let request;

        if(playlist.id){
            request = this.http.put(this.server_url + playlist.id, playlist);
        }
        else{
            request = this.http.post(this.server_url, playlist);
        }

        return request.map(response => response.json())
            .do(playlist =>{
                this.getPlaylists();
            });
    }

    createPlaylist(): Playlist{
        return {
            name: '',
            tracks: [],
            color: '#000',
            favorite: false
        };
    }

    getPlaylists(){
        return this.http.get(this.server_url)
            .map(response => response.json())
            .subscribe(playlists => {
                this.playlists = playlists;
                this.playlistsStrem$.next(this.playlists);
            })
    }

    getPlaylistsStream(){
        if(!this.playlists.length){
            this.getPlaylists();
        }

        return this.playlistsStrem$.startWith(this.playlists);
    }

    getPlaylist(id){
        return this.http.get(this.server_url + id)
            .map(response => response.json());
    }

    addToPlaylist(playlistId, track){
        let playlist = this.playlists.find(playlist => playlist.id == playlistId);

        playlist.tracks.push(track);

        this.savePlaylist(playlist)
            .subscribe(() => {
                //...
            });
    }
}