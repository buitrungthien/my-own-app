import React from 'react';
import './styles.scss';
import Status from './Status';

const statuses = props => {
    const statusData = [
        { statusText: 'On', titleText: 'Working mode', statusCircleBorderColor: '#D76825' },
        { statusText: '40%', titleText: 'Works Done', statusCircleBorderColor: '#EC344D' },
        { statusText: '3h', titleText: 'Time Remainning', statusCircleBorderColor: '#5E932A' },
    ];

    const statuses = statusData.map(status => (
        <Status statusContent={status} />
    ));
    return (
        <section className='statuses'>
            {statuses}
        </section>
    );
};

export default statuses;