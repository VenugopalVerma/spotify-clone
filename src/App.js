import React, { useEffect, useContext} from 'react';
import './App.css';
import Login from './components/Login';
import {  getTokenFromUrl } from './utils/spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './components/Player';
import { DataLayerContext } from './contexts/DataLayer';
import { SET_TOKEN, SET_USER } from './reducers/DataLayerReducer';
import {Switch, Route, Redirect, useHistory} from 'react-router-dom';

const spotify = new SpotifyWebApi();

function App() {
  
  const {DummyState, dispatch} = useContext(DataLayerContext);
  // const [token, setToken] = useState(token)
  const token = DummyState.token;

  const history = useHistory();
  
  
  console.log('inside app');
  useEffect(() => {

    const temp = localStorage.getItem('token');
    console.log("token from local storage",temp);
    if (temp) {
      console.log('Checking temp');
      dispatch({
        type: SET_TOKEN,
        payload: {
          token: temp
        }
      });
      console.log('dispatch done');
      history.push('/home');
    }
    else {
      const hash = getTokenFromUrl();
      window.location.hash = "";
      const _token = hash.access_token;

      if(_token){
        console.log('Checking _token');
        dispatch({
          type: SET_TOKEN,
          payload: {
            token: _token
          }
        })
        localStorage.setItem('token',_token);
        console.log('dispatch done');
        history.push('/home');
      }
    }
    

  },[]);



  useEffect(() => {
    console.log("Inside use effect of app");
    
    
    if(token){
      console.log('Checking token');
      spotify.setAccessToken(token);
      
      spotify.getMe().then((user) =>{
        console.log("got user");
        dispatch({
          type: SET_USER,
          payload: {
            user
          }
        })        
      }).catch(err => {
        console.error("Error occured getting user",err);
      });

      
      spotify.getUserPlaylists().then((playlists) => {
        console.log('got user playlist : ',playlists);
        dispatch({
          type: "SET_USER_PLAYLISTS",
          payload: {
            userPlaylists: playlists
          }
        })
      }).catch((err) => console.error("Error getting playlists",err));

      spotify.getMyCurrentPlaybackState().then((res) => {
        console.log("got current track state", res);
        dispatch({
            type: "SET_CURRENT_PLAYING_TRACK_STATE",
            payload: {
              currentTrackState: res
            }
          });
      }).catch(err => console.log("error getting current track state",err));

      spotify.getMyCurrentPlayingTrack().then((res) => {
        console.log("got current track", res);
        dispatch({
            type: "SET_CURRENT_PLAYING_TRACK",
            payload: {
              currentTrack: res.item
            }
          });
      }).catch(err => console.log("error getting current track",err));
      
      // spotify.getPlaylist("7qclz8gg6i13fEcrYHl40A").then((response) =>
      //   dispatch({
      //     type: "SET_DISCOVER_WEEKLY",
      //     payload: {
      //       discoverWeekly: response
      //     }
      //   })
      // ).catch(err => console.error("Error getting discoverWeekly",err));

      
      
    }

    
 
  },[token,dispatch]);

  console.log('User is ',DummyState.user, token, history);
  return (
    <div className="App">

      {/* {token ? <Player spotify={spotify}/> : <Login/>} */}
      <Switch >
        <Route exact path="/login">
          {token ? <Redirect to="/home"/> : <Login/> }
        </Route>
        <Route exact path="/home" >
          { token ? <Player spotify={spotify}/> : <Redirect to="/login" />}
        </Route>
        
      </Switch> 
    </div>
  );
}

export default App;
