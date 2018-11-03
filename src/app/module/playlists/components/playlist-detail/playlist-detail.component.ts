import {Component, OnInit} from '@angular/core';
import IPlaylist from '../../../../shared/interface/playlist.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {PlaylistsService} from '../../../../core/services/playlists/playlists.service';

@Component({
    selector: 'app-playlist-detail',
    templateUrl: './playlist-detail.component.html'
})
export class PlaylistDetailComponent implements OnInit {

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
                    this.playlistsService.getPlaylist(id)
                        .subscribe( (playlist: IPlaylist) => {
                            this.playlist = playlist;
                        });
                }
            });
    }

    edit(playlist) {
        this.router.navigate(['playlist', playlist.id, 'edit']);
    }
}
