import React from 'react';
import logo from './img/logo.png';
import instagram from './img/instagram.png';
import location from './img/location.png';
import heart from './img/heart.png';
import user from './img/user.png';

class SearchBar extends React.Component {
    render() {
        return (
            <div className="navbarContainer">
                <div className="navbar">
                    <div className="logos">
                        <div><img className="logo" src={logo} alt="Logo" height="24" width="24" /></div>
                        <div className="bar"></div>
                        <div><img className="instagram" src={instagram} alt="Instagram" height="29" width="103" /></div>
                    </div>
                    <div className="searchInput">
                    <input
                        placeholder="Search"
                    >
                    </input>


                    </div>
                    <div className="settings">
                        <div><img className="location" src={location} alt="Location" height="24" width="24" /></div>
                        <div><img className="heart" src={heart} alt="Heart" height="24" width="24" /></div>
                        <div><img className="user" src={user} alt="User" height="24" width="24" /></div>
                    </div>
                </div>
            </div>
        );
    }
  }

export default SearchBar;