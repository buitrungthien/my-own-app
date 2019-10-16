import React from 'react';
import './styles.scss';
import icon from '../../images/sprite.svg';

const search = props => {
    
    const onSearchIconClick = (e) => {
        e.preventDefault();
    }

    return (
        <form className='search'>
            <input className='search__input' placeholder='Search' />
            <button className='search__icon' onClick={onSearchIconClick}>
                <svg><use href={`${icon}#icon-search`}></use></svg>
            </button>
        </form>
    );
};

export default search;