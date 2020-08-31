import React from "react";
import "./Body.css";
import Header from "./Header";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import FavouriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

function Body({ selectedPlaylist, spotify }) {
//   console.log("Selected Playlists", selectedPlaylist);

  const playPlaylist = (selectedPlaylist) => {
    console.log('play playlist clicked');

    spotify.play({'context_uri' : selectedPlaylist.uri}).then((res) => {
        console.log("response",res);
    }).catch((err) => console.error('error on clicked',err));
  }
  return (
    <div className="body-c">
      
    {
        selectedPlaylist ? (
            <>
            <div className="body-top">
            <Header />
                <div className="body-info">
                    <img
                    src={selectedPlaylist ? selectedPlaylist?.images[0]?.url : ""}
                    alt="Album pic"
                    />
                    <div className="body-infoText">
                        <strong>PLAYLIST</strong>
                        <h2>{selectedPlaylist ? selectedPlaylist.name : ""}</h2>
                        <p>{selectedPlaylist ? selectedPlaylist.owner.display_name : ""}</p>
                    </div>
                </div>
            </div>
                <div className="body-down">
                <div className="body-icons">
                        <PlayCircleFilledWhiteIcon className="body-shuffle" onClick={playPlaylist}/>
                        <FavouriteIcon fontSize="large" />
                        <MoreHorizIcon />
                    </div>
                <div className="body-songs">
                    

                    {selectedPlaylist
                    ? selectedPlaylist?.tracks?.items.map((item) => (
                        <SongRow key={Math.random()} track={item.track} />
                        ))
                    : ""}
                </div>
                </div>
            </>
        ) : (
            <>
                <p>SELECT A PLAYLIST</p>
            </>
        )
    }
      
    </div>
  );
}

export default Body;
