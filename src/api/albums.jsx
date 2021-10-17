import axios from 'axios';

export const getMusics = async() => {
  console.log("getMusics")
  try{
    const response = await axios.get("http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=giriboy&api_key=4eaa2e6cafb967fa096e6d2e3dec0344&format=json")
    const data = await response.data;
    console.log(data)
    return data;

    // .then(function(response){
    //   // console.log(response.data)
    //   return response.data;
    // })

    // const response = await fetch( "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=giriboy&api_key=4eaa2e6cafb967fa096e6d2e3dec0344&format=json")
    // const data = await response.json();
    // console.log(data.topalbums.album)
    // return data.topalbums.album;

    // fetch( "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=giriboy&api_key=4eaa2e6cafb967fa096e6d2e3dec0344&format=json")
    // .then(response => response.json())
    // .then(json => json.topalbums)
    // .then(topalbums => topalbums.album)

    
  }
  catch(e){
    console.log(e)
  }
}

