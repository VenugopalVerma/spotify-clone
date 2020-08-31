import React from 'react';
// import { Avatar } from '@material-ui/core';


function SideBarOption({playlist,selectPlaylist}) {
    
    return (
        <div className="sidebarOption" onClick={() => selectPlaylist(playlist)}>
            <p>{playlist.name}</p>
        </div>
    )    
}

export default SideBarOption
