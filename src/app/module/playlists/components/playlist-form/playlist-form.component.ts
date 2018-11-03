import {Component, OnInit} from '@angular/core';
import IPlaylist from '../../../../shared/interface/playlist.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {PlaylistsService} from '../../../../core/services/playlists/playlists.service';

@Component({
    selector: 'app-playlist-form',
    templateUrl: './playlist-form.component.html',
    styleUrls: ['./playlist-form.component.css']
})
export class PlaylistFormComponent implements OnInit {

    protected categories: Array<string> = [
        'Filmowa', 'Rockowa', 'Inne'
    ];

    protected playlist: IPlaylist;

    constructor(private activeRoute: ActivatedRoute,
                private playlistsService: PlaylistsService,
                private router: Router) {
    }

    ngOnInit() {
        this.activeRoute.params
            .subscribe(params => {
                const id = parseInt(params['id'], 10);

                if (id) {
                    this.playlistsService
                        .getPlaylist(id)
                        .subscribe((playlist: IPlaylist) => {
                            this.playlist = Object.assign({}, playlist);
                        });
                } else {
                    this.playlist = this.playlistsService.createPlaylist();
                }
            });
    }

    public save(valid, playlist) {
       if (!valid) {
           return;
       }

       this.playlistsService
           .savePlaylist(playlist)
           .subscribe((playlistElement: IPlaylist) => {
               this.router.navigate([
                   'playlist',
                   playlistElement.id
               ]);
           });
    }
}
