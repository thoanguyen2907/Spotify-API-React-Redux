import * as configs from '../constants/Config'; 
const queryString = require('query-string');
const axios = require('axios');
export default class SpotifyAxios{
    static config = {
            method:'GET',
            headers: {
                'Authorization': 'Bearer ' + configs.API_KEY          
              }
        }
   static getArtists(id){
            let url = configs.BASE_URL + "artists/" + id;
          return  axios.get(url,SpotifyAxios.config).catch(this.handleError)     
    }
    static getAlbums(id){
        let strParams = queryString.stringify({
            offset:0,
            limit:2
        })
        let url = configs.BASE_URL + "artists/"+ id +"/albums?"+strParams;
      return  axios.get(url,SpotifyAxios.config).catch(this.handleError)     
}  

static  getAlbum(albumID){
  let url =  configs.BASE_URL + "albums/"+albumID;
return  axios.get(url,SpotifyAxios.config).catch(this.handleError)     
}  
  static handleError(error){
    console.log(error)
  }
    }
