import React from 'react';
import logo from './img/logo.png';
import instagram from './img/instagram.png';
import location from './img/location.png';
import heart from './img/heart.png';
import user from './img/user.png';

import styled from 'styled-components';

const SearchBarHeader = styled.header `
    background-color: #fff;
    border-bottom: 1px solid rgba(0,0,0,.0975);
    top: 0;
    width: 100%;
    z-index: 1;
    transition: height .2s ease-in-out;
    height: 77px;
`

const Navbar = styled.div `
    display: flex;
    width: 1010px;
    height: 77px;
    margin: 0 auto;
    padding-top: 25px;
`

const Logos = styled.div `
    display: flex;
    width: 377.5px;
    margin-left: 20px;
`

const Logo = styled.img `
    margin-right: 16px;
`

const Bar = styled.div `
    height: 28px;
    width: 0.5px;
    background-color: black;
`

const Instagram = styled.img `
    margin-left: 20px;
`

const SearchInput = styled.input `
    width: 215px;
    background-color: #fafafa;
    border: solid 1px #dbdbdb;
    height: 24px;
    border-radius: 3px;
    color: #999;
    font-size: 14px;
    font-weight: 300;
    left: 0;
    text-align: center;
    top: 0;
    z-index: 2;
`

const Settings = styled.div `
    display: flex;
    justify-content: flex-end;
    width: 377.5px;
    margin-right: 20px;
`

const Location = styled.img `margin-right: 30px;`

const Heart = styled.img `margin-right: 30px;`

const User = styled.img ``

class SearchBar extends React.Component {
    state = {
        searchValue: '',
    }

    onSubmit = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            this.props.filterUserName(this.state.searchValue)
            this.setState({ searchValue: ''})
        }
    }

    render() {
        return (
            <SearchBarHeader>
                <Navbar>
                    <Logos>
                        <Logo src={logo} alt="Logo" height="24" width="24"></Logo>
                        <Bar></Bar>
                        <Instagram src={instagram} alt="Instagram" height="29" width="103"></Instagram>
                    </Logos>
                    <SearchInput
                        placeholder="Search"
                        value={this.state.searchValue}
                        onChange={event => this.setState({searchValue: event.target.value})}
                        onKeyDown={this.onSubmit}
                    >
                    </SearchInput> 
                    <Settings>
                        <Location src={location} alt="Location" height="24" width="24"></Location>
                        <Heart src={heart} alt="Heart" height="24" width="24"></Heart>
                        <User src={user} alt="User" height="24" width="24"></User>
                    </Settings>
                    </Navbar>
            </SearchBarHeader>
        );
    }
  }

export default SearchBar;