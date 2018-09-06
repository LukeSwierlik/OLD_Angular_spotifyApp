import { Component, OnInit } from '@angular/core';
import { MusicSearchService } from '../../service/music-search.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'album-details',
    templateUrl: './album-details.component.html',
    styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

    album;

    constructor(private musicService: MusicSearchService, private activeRoute: ActivatedRoute) { }

    ngOnInit() {
        let id = this.activeRoute.snapshot.params['album_id'];

        this.musicService.getAlbum(id)
            .subscribe(album => {
                this.album = album;
            });
    }
}
