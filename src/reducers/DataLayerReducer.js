import { useReducer} from 'react';

export const SET_USER = "SET_USER";
export const SET_TOKEN = "SET_TOKEN";

const initialState = {
    user: null,
    userPlaylists: [],
    playing: false,
    item: null,
    discoverWeekly: null,
    currentTrack: null,
    currentTrackState: null,
    currentPlaylist: null,
    currentPlaylistDetails: null,
    // token: "BQBnAgAlmJD4IWdQ3HeTyVftBxqVe_kphSY_FnurSG1djVBYFD48EFJaL3uxRygSOETyus82qjucJDgy3kV_tSykQ8C6IDBw217iSM-Rfnhf2r3Wddaea2g1oUAeZGgapEV1C8m76aSvDeloYEpEdROuvghO3zrzMaiv3erCawZKkZVIivIL5PKwjNfpXOLDzB8"
}

const reducer = (state,action) => {
    console.log("Action ",action);
    switch (action.type) {
        case SET_USER:
            console.log("Setting user");
            return {
                ...state,
                user: action.payload.user
            };
        
        case SET_TOKEN:
            console.log('Setting token',action.payload.token);
            return {
                ...state,
                token: action.payload.token
            }

        case "SET_USER_PLAYLISTS":
            console.log('Setting user playlists',initialState.uesrPlaylists);
            return {
                ...state,
                userPlaylists: action.payload.userPlaylists
            }

        case "SET_DISCOVER_WEEKLY":
            console.log('Setting discover weekly',action.payload.discoverWeekly);
            return {
                ...state,
                discoverWeekly: action.payload.discoverWeekly
            }

        case "SET_CURRENT_PLAYING_TRACK":
            console.log('setting current track',action.payload.currentTrack);
            return {
                ...state,
                currentTrack: action.payload.currentTrack
            }

        case "SET_CURRENT_PLAYING_TRACK_STATE":
            console.log('setting current track',action.payload.currentTrackState);
            return {
                ...state,
                currentTrackState: action.payload.currentTrackState
            }

        case "SET_CURRENT_PLAYLIST":
            console.log("setting current playlist",action.payload.currentPlaylist);
            return {
                ...state,
                currentPlaylist: action.payload.currentPlaylist
            }

        case "SET_CURRENT_PLAYLIST_DETAILS":
            console.log('setting current playlist details',action.payload.details);
            return {
                ...state,
                currentPlaylistDetails: action.payload.details
            };

        default:
            return state;
    }
}

const DataLayerReducer = () => useReducer(reducer,initialState);
export default DataLayerReducer;