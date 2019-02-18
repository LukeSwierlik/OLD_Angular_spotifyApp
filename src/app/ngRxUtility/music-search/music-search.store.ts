import IAlbum from '../../shared/interface/album.interface';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';


export interface IAlbumState extends EntityState<IAlbum> {}

export const albumAdapter: EntityAdapter<IAlbum> = createEntityAdapter<IAlbum>({
    selectId: (album: IAlbum) => album.id
});

export const AlbumState: IAlbumState = albumAdapter.getInitialState();

