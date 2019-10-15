import React from 'react';
import Avatar from '../../Components/Avatar';
import SideBarNav from '../../Components/SideBarNav';
import CollapseButton from '../../Components/CollapseButton';
import './styles.scss';

const sideBar = props => (
    <nav className='sidebar'>
        <CollapseButton/>
        <Avatar/>
        <SideBarNav/>
    </nav>
);

export default sideBar;