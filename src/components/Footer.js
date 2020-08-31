import React, { useContext } from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleFilledOutlined';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown'
import { Grid, Slider } from '@material-ui/core';
import { DataLayerContext } from '../contexts/DataLayer';


function Footer({spotify}) {
    console.log("Inside footer");
    const {DummyState} = useContext(DataLayerContext);
    const temp = () => {
        console.log('Clicked',DummyState);
        spotify.play().then((res) => {
            console.log("response",res);
        }).catch((err) => console.error('error on clicked',err));
        // handlePlayPause();
    }
    console.log('Dummy State',DummyState);
    return (
        <div className="footer">
            <div className="footer-left">
                <img className="footer-albumLogo" src={DummyState?.currentTrack?.album?.images[2]?.url} alt="Img"/>
                <div className="footer-songInfo">
                    <p > {DummyState?.currentTrack?.name}</p>
                    <p style={{fontSize: '12px', color: 'gray'}}>{DummyState?.currentTrack?.artists?.map(artist => artist.name).join(", ")}</p>
                </div>
            </div>
            <div className="footer-center">
                <ShuffleIcon className="footer-green"/>
                <SkipPreviousIcon className="footer-icon"/>
                <PlayCircleOutlineIcon onClick={temp} className="footer-icon" fontSize="large" />
                <SkipNextIcon className="footer-icon" />
                <RepeatIcon className="footer-green" />
            </div>
            <div className="footer-right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon/>
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon/>
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer;
