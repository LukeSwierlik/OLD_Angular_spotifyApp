import IImage from './image.interface';

export default interface IAlbum {
    name: String;
    images: Array<IImage>;
}
