import React from 'react';
import './styles.scss';
import iconUser from '../../images/sprite.svg';

const sideBarNav = props => {
    return (
        <ul className='sidebar__nav'>
            <li className='sidebar__nav__item'>
                <a className='sidebar__nav__link' href='#'>
                    <svg className='sidebar__nav__icon'><use href={`${iconUser}#icon-user`}></use></svg>
                    <span>About Me</span>
                </a>

            </li>
            <li className='sidebar__nav__item'>
                <a className='sidebar__nav__link' href='#'>
                    <svg className='sidebar__nav__icon'><use href={`${iconUser}#icon-key`}></use></svg>
                    <span>What I have done</span>
                </a>
            </li>
            <li className='sidebar__nav__item'>
                <a className='sidebar__nav__link' href='#'>
                    <svg className='sidebar__nav__icon'><use href={`${iconUser}#icon-bookmarks`}></use></svg>
                    <span>My today-tasks</span>
                </a>
            </li>
            <li className='sidebar__nav__item'>
                <a className='sidebar__nav__link' href='#'>
                    <svg className='sidebar__nav__icon'><use href={`${iconUser}#icon-folder`}></use></svg>
                    <span>Sources</span>
                </a>
            </li>
        </ul>
    );
};

export default sideBarNav;