import React, { useState, useEffect } from 'react';
import './styles.scss';
import sprite from '../../images/sprite.svg';
import { tomatoTimerState as tomatoTimerStateConstant } from '../../constants';

const digitalClock = React.memo(props => {
    const [tomatoTimer, setTomatoTimer] = useState(1500); //25minutes
    const [clockColons, setClockColons] = useState(true);
    const [timerState, setTimerState] = useState(tomatoTimerStateConstant.idle);
    let timeoutId2;

    useEffect(() => {
        setTimeout(() => {
            if (timerState === tomatoTimerStateConstant.start) {
                setClockColons(prevClockColons => !prevClockColons);
            }
        }, 500);
    }, [clockColons]);

    useEffect(() => {
        timeoutId2 = setTimeout(() => {
            console.log(timerState)
            if (timerState === tomatoTimerStateConstant.start) {
                setTomatoTimer(prevTimerValue => prevTimerValue - 1);
            }
        }, 1000);
    }, [timerState]);

    const clockColonsFlashingStateClass = clockColons ? 'on' : 'off';

    const changeTimerStateHandler = (inputState) => () => {
        if (inputState === tomatoTimerStateConstant.pause) {
            clearInterval(timeoutId2);
        }
        setTimerState(inputState);
    };

    const minutes = Math.floor(tomatoTimer / 60);
    const seconds = tomatoTimer % 60;
    const minuteNumber = minutes % 10;
    const tensOfMinuteNumber = Math.floor(minutes / 10);
    const secondNumber = seconds % 10;
    const tensOfSecondNumber = Math.floor(seconds / 10);
    return (
        <div className='digital-clock-wrapper'>
            <div className='digital-clock__icon-bar'>
                {
                    (timerState === tomatoTimerStateConstant.idle) || (timerState === tomatoTimerStateConstant.pause) || (timerState === tomatoTimerStateConstant.stop) ?
                        <svg className='digital-clock__icon' onClick={changeTimerStateHandler(tomatoTimerStateConstant.start)}><use href={`${sprite}#icon-play`}></use></svg> :
                        <svg className='digital-clock__icon' onClick={changeTimerStateHandler(tomatoTimerStateConstant.pause)}><use href={`${sprite}#icon-pause`}></use></svg>
                }
                <svg className='digital-clock__icon' onClick={changeTimerStateHandler(tomatoTimerStateConstant.stop)}><use href={`${sprite}#icon-stop`}></use></svg>
            </div>
            <span className='digital-clock__label'>Tomato Timer</span>
            {`${tensOfMinuteNumber}${minuteNumber}`}
            <span className={`digital-clock__colons ${clockColonsFlashingStateClass}`}>:</span>
            {`${tensOfSecondNumber}${secondNumber}`}
        </div>
    );
});

export default digitalClock;