import axios from 'axios';
export async function getMusics(searchText) {
  console.log(searchText)
  try{
    const response = await axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${searchText}&api_key=4eaa2e6cafb967fa096e6d2e3dec0344&format=json`)
    console.log(response)
    return response.data.topalbums.album; 
  }
  catch(e){
    console.log(e);
  }
}

export const getMusic = async(name) => {
  const getData = await getMusics();
    return getData.find(data => data.name === name);
}