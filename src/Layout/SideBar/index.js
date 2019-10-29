import React from 'react';
import SideBarNav from '../../Components/SideBarNav';
import './styles.scss';

const sideBar = React.memo(props => (
    <aside className='sidebar'>
        <div className='brand-name'>
            Awesome App
        </div>
        <div className='sidebar__left-vertical-bar'></div>
        <SideBarNav />
    </aside>
));

export default sideBar;