import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Music from '../components/Music';
import { getAlbum } from '../modules/musics';
import { addAlbumCart } from '../modules/cart';
import { RootState } from '../modules';
import { Album } from '../modules/artistNameTypes';

type MusicContainerProps = {
  url: string;
}

export default function MusicContainer({ url }: MusicContainerProps) {
  const { loading, data, error } = useSelector((state: RootState) => state.albums.album);
  const cartAlbum = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlbum(url));
    // return () => {
    //   clearAlbum();
    // }
  }, [dispatch, url])

  const onAddAlbum = (album: Album) => dispatch(addAlbumCart(album));

  if(loading && !data) return <div>로딩</div>;
  if(error) return null; //getAlbum이 url아 바뀌면 실행되기 때문에 cart 페이지 갈때도 실행된다 그래서 오류 null하는게 맞는가?
  if(!data) return null;

  return (
    <>
      <Music album={ data } onAddAlbum={ onAddAlbum } cartAlbum={ cartAlbum } />
    </>
  )
}
