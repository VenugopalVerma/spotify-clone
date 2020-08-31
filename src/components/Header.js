import React, { useContext } from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';

import { DataLayerContext } from '../contexts/DataLayer';

function Header() {

    const { DummyState} = useContext(DataLayerContext);
    const {user} = DummyState;
    // console.log('Header User',user);
    return (
        <div className="header">
            <div className="header-left">
                <SearchIcon />
                <input type="text" placeholder="Search for Artists, Songs or Podcasts"/>
            </div>
            <div className="header-right">
                <Avatar src={user?(user.images[0]?user.images[0].url : "error") : ""} alt={user? user.display_name : "Venu"} />
                <h4>{user? user.display_name : ""}</h4>
            </div>
        </div>
    )
}

export default Header;
