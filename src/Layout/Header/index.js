import React from 'react';
import Search from '../../Components/Search';
import './styles.scss';

const header = props => {
    return (
        <header className='header'>
            <Search/>
        </header>
    );
};

export default header;