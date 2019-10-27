import React from 'react';
import './styles.scss';

const content = props => {
    return (
        <main className='content'>
            { props.children}
        </main>
    );
};

export default content;