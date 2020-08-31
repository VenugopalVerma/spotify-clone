import React, {useContext} from 'react';
import SideBar from './SideBar';
import Body from './Body';
import Footer from './Footer';
import "./Player.css";
import { DataLayerContext } from '../contexts/DataLayer';

function Player({spotify}) {

    const {DummyState} = useContext(DataLayerContext);
    const {currentPlaylistDetails} = DummyState;
    
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