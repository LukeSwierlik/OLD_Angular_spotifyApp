import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaylistsService, Playlist } from '../../service/playlists.service';

@Component({
    selector: 'playlist-form',
    templateUrl: './playlist-form.component.html',
    styleUrls: ['./playlist-form.component.css']
})


export class PlaylistFormComponent implements OnInit {

    @Input()
    playlist;
    
    categories = [
        'Filmowa',
        'Rockowa',
        'Inne'
    ];

    constructor(private activeRoute: ActivatedRoute, private playlistsService: PlaylistsService, private router: Router) { }

    ngOnInit() {
        this.activeRoute.params.subscribe(params => {
            let id = parseInt(params['id']);
            
            if(id){
                this.playlistsService.getPlaylist(id)
                .subscribe((playlist: Playlist) => {
                    this.playlist = playlist;
                    this.playlist = Object.assign({}, playlist);
                })
            }
            else{
                this.playlist = this.playlistsService.createPlaylist();
            }
        });
    }

    save(valid, playlist){
        if(!valid){
            return;
        }

        this.playlistsService.savePlaylist(playlist)
            .subscribe(playlist => {
                this.router.navigate(['playlist', playlist.id]);
            })
    }
}
