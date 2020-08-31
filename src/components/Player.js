import React, {useContext, useEffect, useState} from 'react';
import SideBar from './SideBar';
import Body from './Body';
import Footer from './Footer';
import "./Player.css";
import { DataLayerContext } from '../contexts/DataLayer';

function Player({spotify}) {

    // const [currentPlaylistDetails, setCurrentPlaylistdetails] = useState(null);
    const {DummyState, dispatch} = useContext(DataLayerContext);
    const {currentPlaylistDetails,token} = DummyState;
    
    useEffect(() => {
        console.log("use effect for current playlist, Player");
        
    }, [currentPlaylistDetails,DummyState])
    // const handlePlayPause = () => {
    //     console.log('Handling Play pause');
    //     spotify.getMyCurrentPlayingTrack().then((res) => {
    //         console.log("Recommendations ",res);
    //         dispatch({
    //             type: "SET_CURRENT_PLAYING_TRACK",
    //             action: {
    //                 payload: res
    //             }
    //         });
    //     }).catch(err => console.log("error getting recomme",err));
    // }

    // const selectPlaylist = (playlist) => {
    //     console.log("selecting playlist for body",playlist);
    //     // setPlaylist(playlist);
    // };
    console.log("Inside player",DummyState);
    return (<>
        
        <div className="player">
            <div className="player_body">
                <SideBar spotify={spotify}/>
                <Body selectedPlaylist={currentPlaylistDetails} spotify={spotify}/>
            </div>
            <Footer spotify={spotify} />
        </div>
        </>
    )
}

export default Player;