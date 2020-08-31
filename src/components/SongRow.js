import React from 'react';
import './SongRow.css';
import { useContext } from 'react';
import { DataLayerContext } from '../contexts/DataLayer';

function SongRow({track = "test"}) {

    const {dispatch} = useContext(DataLayerContext);

    const handleClick = () => {
        console.log('Track',track);
        dispatch({
            type: 'SET_CURRENT_PLAYING_TRACK',
            payload: {
                currentTrack: track
            }
        });
    }
    return (
        <div className="songRow" onClick={handleClick}>
            <img className="songRow-album" src={track.album.images[0].url} alt=""/>
            <div className="songRow-info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map(artist => artist.name).join(", ")}
                    {" - " + track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongRow
