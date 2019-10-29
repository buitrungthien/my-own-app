import React from 'react';
import './styles.scss';
import LEDNumber from '../LEDNumber';

const digitalClock = React.memo(props => {

    return (
        <div className='digital-clock-wrapper'>
            <LEDNumber />
            <LEDNumber />
            <LEDNumber />
            <LEDNumber />
        </div>
    );
});

export default digitalClock;