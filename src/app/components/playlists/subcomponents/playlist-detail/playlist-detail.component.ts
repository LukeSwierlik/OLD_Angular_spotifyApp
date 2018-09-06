import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaylistsService, Playlist } from '../../service/playlists.service';

@Component({
    selector: 'playlist-detail',
    templateUrl: './playlist-detail.component.html',
    styleUrls: ['./playlist-detail.component.css']
})


export class PlaylistDetailComponent implements OnInit {

    playlist;

    constructor(private activeRoute: ActivatedRoute, private playlistsService: PlaylistsService, private router: Router) { }

    ngOnInit() {
        this.activeRoute.params.subscribe(params => {
            let id = parseInt(params['id']);
            
            if(id){
                this.playlistsService.getPlaylist(id)
                    .subscribe((playlist: Playlist) => {
                        this.playlist = playlist;
                    })
            }
        });
    }

    edit(playlist){
        this.router.navigate(['playlist', playlist.id, 'edit']);
    }

}
