import React, { useContext } from "react";
import "./SideBar.css";
import SideBarOption from "./SideBarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { DataLayerContext } from "../contexts/DataLayer";
import './SideBarOption.css';

function SideBar({ spotify }) {
  const { DummyState, dispatch } = useContext(DataLayerContext);
  const { userPlaylists } = DummyState;
  console.log("Inside sidebar");
  console.log("playlist", userPlaylists);

  const selectPlaylist = (playlist) => {
    console.log("selecting Playlist", playlist);
    dispatch({
        type: "SET_CURRENT_PLAYLIST",
        payload: {
            currentPlaylist: playlist
        }
    });

    try {
      console.log('getting selected playlist details');
        spotify.getPlaylist(playlist.id).then((response) => {
            console.log('got details of current playlist',response);
            dispatch({
                type: 'SET_CURRENT_PLAYLIST_DETAILS',
                payload: {
                    details: response
                }
            });
        })
    } catch (error) {
        console.log('error getting details for current playlist',error);
    }
    
  };

  return (
    <div className="sidebar">
      <img
        className="sidebar-logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <div className="sidebarOption">
        {HomeIcon ? (
          <>
            <HomeIcon className="sidebarIcon"/>
            <h4>Home</h4>
          </>
        ) : (
          <></>
        )}
      </div>

      <div className="sidebarOption">
        {SearchIcon ? (
          <>
            <SearchIcon className="sidebarIcon"/>
            <h4>Search</h4>
          </>
        ) : (
          <></>
        )}
      </div>

      <div className="sidebarOption">
        {LibraryMusicIcon ? (
          <>
            <LibraryMusicIcon className="sidebarIcon"/>
            <h4>Library</h4>
          </>
        ) : (
          <></>
        )}
      </div>

      <br />
      <strong className="sidebar-title">PLAYLISTS</strong>
      <hr />

      {userPlaylists?.items?.map((playlistItem) => {
        return (
          <SideBarOption
            key={Math.random()}
            playlist={playlistItem}
            selectPlaylist={selectPlaylist}
          />
        );
      })}
    </div>
  );
}

export default SideBar;
