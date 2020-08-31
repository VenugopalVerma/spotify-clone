import React from 'react';

function SideBarOption({playlist,selectPlaylist}) {
    
    return (
        <div className="sidebarOption" onClick={() => selectPlaylist(playlist)}>
            <p>{playlist.name}</p>
        </div>
    )    
}

export default SideBarOption
