import React from 'react';
import "./Header.css";
import {ReactComponent as TinderLogo} from "./images/tinder-seeklogo.com.svg";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from "@material-ui/icons/Forum"

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon"/>
            </IconButton>
						<TinderLogo className="tinderLogo"/>
						<IconButton>
							<ForumIcon fontSize="large" className="header__icon"/>
						</IconButton>
        </div>
    )
}

export default Header;
