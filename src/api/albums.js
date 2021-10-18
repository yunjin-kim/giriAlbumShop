import axios from 'axios';

export async function getMusics() {
  try{
    const response = await axios.get("http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=기리보이&api_key=4eaa2e6cafb967fa096e6d2e3dec0344&format=json")
    return response.data.topalbums.album
  }
  catch(e){
    console.log(e)
  }
}

