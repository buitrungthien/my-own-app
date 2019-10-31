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
        setInterval(() => {
            setClockColons(prevClockColons => !prevClockColons);
        }, 500);
    }, []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        timeoutId2 = setInterval(() => {
            if (timerState === tomatoTimerStateConstant.start && tomatoTimer > 0) {
                setTomatoTimer(prevTimerValue => prevTimerValue - 1);
            }
        }, 1000);
        return () => { clearInterval(timeoutId2) };
    }, [timerState]);

    const clockColonsFlashingStateClass = clockColons ? 'on' : 'off';

    const changeTimerStateHandler = (inputState) => () => {

        if (inputState === tomatoTimerStateConstant.stop) {
            setTomatoTimer(0);
        }

        if (inputState === tomatoTimerStateConstant.start && tomatoTimer === 0) {
            setTomatoTimer(1500);
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