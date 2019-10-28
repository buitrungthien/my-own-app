import React, { useState, useEffect } from 'react'
import './styles.scss';
import { decodeBinaryLEDNumber } from '../../js-helpers';

const LEDNumber = React.memo(props => {
    const [decodedBinary, setDecodedBinary] = useState('0000000');

    useEffect(() => {
        let ledCode = 0b0000;
        setInterval(() => {
            ledCode < 9 ? ledCode = ledCode + 1 : ledCode = 0b0000;
            setDecodedBinary(decodeBinaryLEDNumber(ledCode));
        }, 1000);
    }, []);

    let ledData = [6, 5, 4, 3, 2, 1, 0];
    ledData = ledData.map(i => {
        const onOffClass = +decodedBinary[6-i] === 1 ? 'off' : 'on';
        return (<div className={`led-number__frag-${i} ${onOffClass}`}></div>);
    });

    return (
        <div className='led-number'>
            {ledData}
        </div>
    );
});

export default LEDNumber;