import { ActionType } from 'typesafe-actions';
import { getAlbumsArtistNameAsync, getAlbumsAlbumNameAsync, getAlbumAsync } from './actions';
import { ArtistName, ArtAlbum }  from '../artistNameTypes';
import { AlbumAlbum, AlbumName } from '../albumNameTypes';

export type AlbumArtistNameAction = ActionType<typeof getAlbumsArtistNameAsync>;
export type AlbumAlbumNameAction = ActionType<typeof getAlbumsAlbumNameAsync>;
export type AlbumAction = ActionType<typeof getAlbumAsync>;

export type AlbumState = {
  albums: {
    loading: boolean;
    data: ArtistName | null;
    error: Error | null;
  },
  musics: {
    loading: boolean;
    data: AlbumName | null;
    error: Error | null;
  },
  album: {
    loading: boolean;
    data: ArtAlbum | null;
    error: Error | null;
  }
}