
const client_id = process.env.REACT_APP_SPOTIFY_API_KEY;
var redirect_uri='http://localhost:3000/callback';


var scope = 'user-read-private user-read-email';

var url='https://accounts.spotify.com/authorize';
url += '?response_type=token';
url += '&client_id=' + encodeURIComponent(client_id);
url += '&scope=' + encodeURIComponent(scope);
url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

const getListOfTracks = async (query,access_token,updateList) =>{
    var url_endpoint = 'https://api.spotify.com/v1/search';
    url_endpoint += ('?q=' + query);
    url_endpoint += '&type=track';
    try{

        console.log(access_token);
        const response = await fetch(url_endpoint, {headers: {
            'Authorization': `Bearer ${access_token}`
        }});

        if(response.ok){
            const data = await response.json();
            updateList(data);
            return data;
        }
        throw new Error('Request Failed!');
    } catch(error){
        console.log(error);
    }
}




export {getListOfTracks};
export default url;