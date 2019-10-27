import React from 'react';
import './styles.scss';

const status = props => {
    const { statusText, titleText, statusCircleBorderColor } = props.statusContent;
    const borderColor = {borderColor: `${statusCircleBorderColor}`};
    return (
        <div className='status'>
            <div className='status__percentage' style={borderColor}>{statusText}</div>
            <span className='status__title'>{titleText}</span>
        </div>
    );
};

export default status;