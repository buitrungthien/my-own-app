import React from 'react';
import './styles.scss';

const collapseButton = React.memo(props => {  
    return (
        <div className='collapse-button'>
            <div className='collapse-stick'></div>
        </div>
    );
});

export default collapseButton;