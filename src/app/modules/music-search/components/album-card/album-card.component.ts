import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import IAlbum from '../../../../shared/interface/album.interface';
import IImage from '../../../../shared/interface/image.interface';

@Component({
    selector: 'app-album-card',
    templateUrl: './album-card.component.html',
    styleUrls: ['./album-card.component.css']
})
export class AlbumCardComponent implements OnChanges {
    protected album: IAlbum;
    protected image: IImage;

    @Input('album')
    set setAlbum(album: IAlbum) {
        this.album = album;
        this.image = album.images[0];
    }

    constructor() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('THIS ALBUM', this.album);
    }


}
