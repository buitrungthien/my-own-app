import React, { useState, useEffect } from 'react';
import './styles.scss';
import sprite from '../../images/sprite.svg';
import { tomatoTimerState as tomatoTimerStateConstant } from '../../constants';
import alarmSound from '../../sounds/alarm.mp3';

const digitalClock = React.memo(props => {
    const [tomatoTimer, setTomatoTimer] = useState(3); //25minutes
    const [clockColons, setClockColons] = useState(true);
    const [timerState, setTimerState] = useState(tomatoTimerStateConstant.idle);
    const [clockOrTimer, setClockOrTimer] = useState(true);
    const [localTime, setLocalTime] = useState(new Date().toLocaleTimeString());
    let timeoutId2;

    useEffect(() => {
        const timerID1 = setInterval(() => {
            setClockColons(prevClockColons => !prevClockColons);
        }, 500);
        const timerID2 = setInterval(() => {
            setLocalTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => {
            clearInterval(timerID1);
            clearInterval(timerID2);
        };
    }, []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        timeoutId2 = setInterval(() => {
            if (timerState === tomatoTimerStateConstant.start && tomatoTimer > 0) {
                setTomatoTimer(prevTimerValue => prevTimerValue - 1);
            }
        }, 1000);
        return () => { clearInterval(timeoutId2); };
    }, [timerState, tomatoTimer]);

    const clockColonsFlashingStateClass = clockColons ? 'on' : 'off';

    const changeTimerStateHandler = (inputState) => () => {
        setTimerState(inputState);
        if (inputState === tomatoTimerStateConstant.stop || inputState === tomatoTimerStateConstant.pause) {
            clearInterval(timeoutId2);
        }

        if (inputState === tomatoTimerStateConstant.stop) {
            setTomatoTimer(0);
        }

        if (inputState === tomatoTimerStateConstant.start && tomatoTimer === 0) {
            setTomatoTimer(1500);
        }
    };

    const changeClockOrTimerHandler = () => {
        setClockOrTimer(prevState => !prevState);
    }

    const minutes = Math.floor(tomatoTimer / 60);
    const seconds = tomatoTimer % 60;
    const minuteNumber = minutes % 10;
    const tensOfMinuteNumber = Math.floor(minutes / 10);
    const secondNumber = seconds % 10;
    const tensOfSecondNumber = Math.floor(seconds / 10);
    const timerFrontOrBack = clockOrTimer ? 'back' : 'front';
    const clockFrontOrBack = clockOrTimer ? 'front' : 'back';
    return (
        <React.Fragment>
            <div className={`digital-wrapper digital-wrapper--${timerFrontOrBack}`}>
                <div className='digital-timer__icon-bar'>
                    <svg className='digital-timer__icon' onClick={changeClockOrTimerHandler}><use href={`${sprite}#icon-loop`}></use></svg>
                    {
                        (timerState === tomatoTimerStateConstant.idle) || (timerState === tomatoTimerStateConstant.pause) || (timerState === tomatoTimerStateConstant.stop) || (tomatoTimer === 0) ?
                            <svg className='digital-timer__icon' onClick={changeTimerStateHandler(tomatoTimerStateConstant.start)}><use href={`${sprite}#icon-play`}></use></svg> :
                            <svg className='digital-timer__icon' onClick={changeTimerStateHandler(tomatoTimerStateConstant.pause)}><use href={`${sprite}#icon-pause`}></use></svg>
                    }
                    <svg className='digital-timer__icon' onClick={changeTimerStateHandler(tomatoTimerStateConstant.stop)}><use href={`${sprite}#icon-stop`}></use></svg>
                </div>
                <span className='digital-timer__label'>Tomato Timer</span>
                {`${tensOfMinuteNumber}${minuteNumber}`}
                <span className={`digital-timer__colons ${clockColonsFlashingStateClass}`}>:</span>
                {`${tensOfSecondNumber}${secondNumber}`}
                {
                    tomatoTimer === 0 && timerState === tomatoTimerStateConstant.start ?
                        <audio autoPlay>
                            <source src={alarmSound} type='audio/mpeg'></source>
                        </audio> : null
                }
            </div>
            <div className={`digital-wrapper digital-wrapper--${clockFrontOrBack} font-size-11`}>
                <div className='digital-timer__icon-bar'>
                    <svg className='digital-timer__icon' onClick={changeClockOrTimerHandler}><use href={`${sprite}#icon-loop`}></use></svg>
                </div>
                <span className='digital-timer__label'>Local Time</span>
                {localTime}
            </div>
        </React.Fragment>
    );
});

export default digitalClock;