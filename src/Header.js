import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
function Header() {
    return (
        <div className="header">
            <h2>Header</h2>
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon"/>
            </IconButton>
        </div>
    )
}

export default Header;
