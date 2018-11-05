import IImage from './image.interface';

export default interface IAlbum {
    album_type: string;
    artists: Array<object>;
    available_markets: Array<string>;
    external_ids:  Array<object>;
    external_urls:  Array<object>;
    genres: Array<any>;
    href: string;
    id: string;
    images: Array<IImage>;
    label: string;
    name: string;
    popularity: number;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    tracks: {
        items: Array<object>;
    };
    type: string;
    uri: string;
}
