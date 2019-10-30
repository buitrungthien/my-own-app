import React, { useState, useEffect } from 'react';
import './styles.scss';
import LEDNumber from '../LEDNumber';

const digitalClock = React.memo(props => {

    const [tomatoTimer, setTomatoTimer] = useState(1500); //25minutes

    useEffect(() => {
        setInterval(() => {
            setTomatoTimer(prevTimerValue => prevTimerValue - 1);
        }, 1000);
    }, []);

    const minutes = Math.floor(tomatoTimer / 60);
    const seconds = tomatoTimer % 60;
    const minuteNumber = minutes % 10;
    const tensOfMinuteNumber = Math.floor(minutes / 10);
    const secondNumber = seconds % 10;
    const tensOfSecondNumber = Math.floor(seconds / 10);

    return (
        <div className='digital-clock-wrapper'>
            {/* <LEDNumber number={tensOfMinuteNumber} />
            <LEDNumber number={minuteNumber} />
            <LEDNumber number={tensOfSecondNumber} />
            <LEDNumber number={secondNumber} /> */}
            {`${tensOfMinuteNumber}${minuteNumber}:${tensOfSecondNumber}${secondNumber}`}
        </div>
    );
});

export default digitalClock;