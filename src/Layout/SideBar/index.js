import React, { useState } from 'react';
import SideBarNav from '../../Components/SideBarNav';
import './styles.scss';

const sideBar = React.memo(props => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const onCollapseClickHandler = () => {
        setIsCollapsed(prevState => !prevState);
    }

    return (
        <aside className={`sidebar-frame sidebar-frame${!isCollapsed ? '--collapsed' : ''}`}>
            <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
                <div className='brand-name'>
                    Awesome App
                </div>
                <div className='sidebar__left-vertical-bar'></div>
                <SideBarNav />
            </div>
            <span onClick={onCollapseClickHandler} className='sidebar__collapse-button'></span>
        </aside >
    );
});

export default sideBar;