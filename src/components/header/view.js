import React from 'react';
import './header.css';
import { TopBar, TopBarLeft, TopBarRight, Menu, MenuItem, Button } from "react-foundation";
import { Link } from "react-router-dom";

const HeaderView = ({
  className="",
  user: {
    username = "",
    name = "",
    website = ""
  } = {},
  onLogout
}) => (
  <TopBar className={`Header ${className}`}>
    <TopBarLeft>
      <Menu>
        <MenuItem><Link to="/posts">Posts</Link></MenuItem>
        <MenuItem><Link to='/albums'>Albums</Link></MenuItem>
        <MenuItem><Link to='/to-dos'>To Dos</Link></MenuItem>
      </Menu>
    </TopBarLeft>
    <TopBarRight>
      <a className={`Header-website`} href={`http://${website}`} target="_blank">{username}</a>
      <span className={`Header-name`} >{`(${name})`}</span>
      <Button className={`Header-logout`} onClick={() => onLogout()}>Logout</Button>
    </TopBarRight>
  </TopBar>
);

export { HeaderView };
