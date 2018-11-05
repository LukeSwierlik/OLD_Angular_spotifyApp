import {Component, OnInit} from '@angular/core';
import IAlbum from '../../../../shared/interface/album.interface';
import {MusicSearchService} from '../../../../core/services/music-search/music-search.service';
import {ActivatedRoute} from '@angular/router';
import Navigation from '../../../../shared/enums/navigation.enum';

@Component({
    selector: 'app-album-details',
    templateUrl: './album-details.component.html',
    styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit {

    protected album: IAlbum;
    protected readonly sectionTitle = Navigation.TRACKS;

    constructor(private musicService: MusicSearchService,
                private activeRoute: ActivatedRoute) {
    }

    ngOnInit() {
        const id = this.activeRoute.snapshot.params['album_id'];

        this.musicService
            .getAlbum(id)
            .subscribe((album: IAlbum) => {
                console.log('album', album);
                this.album = album;
            });
    }

}
