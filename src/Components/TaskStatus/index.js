import React from 'react';
import './styles.scss';

const taskStatus = props => {

    return (
        <div className='task-status'>
            <div className='task-status__low'>Low Priority</div>
            <div className='task-status__high'>High Priority</div>
            <div className='task-status__done'>Done</div>
        </div>
    );
};

export default taskStatus;