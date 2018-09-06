import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'album-card',
    templateUrl: './album-card.component.html',
    styleUrls: ['./album-card.component.css']
})


export class AlbumCardComponent implements OnInit {

    album;
    image;

    @Input('album')
    set setAlbum(album) {
        this.album = album;
        this.image = album.images[0];
    }

    constructor() { }

    ngOnInit() {
    }

}
