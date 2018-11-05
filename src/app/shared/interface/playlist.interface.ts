import ITrack from './track.interface';

export default interface IPlaylist {
    id: number;
    name: string;
    tracks: Array<ITrack>;
    color: string;
    favourite: boolean;
}
