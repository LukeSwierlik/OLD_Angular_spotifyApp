import IImage from './image.interface';

export default interface IAlbum {
    id: String;
    name: String;
    images: Array<IImage>;
}
