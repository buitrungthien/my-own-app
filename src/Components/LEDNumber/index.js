import React, { useState, useEffect } from 'react'
import './styles.scss';
import { decodeBinaryLEDNumber } from '../../js-helpers';

const LEDNumber = React.memo(props => {
    const [decodedBinary, setDecodedBinary] = useState('0000000');
    let ledCode = props.number;

    useEffect(() => {
        setDecodedBinary(decodeBinaryLEDNumber(ledCode));
    }, [ledCode]);

    let ledData = [6, 5, 4, 3, 2, 1, 0];
    ledData = ledData.map(i => {
        const onOffClass = +decodedBinary[6 - i] === 1 ? 'off' : 'on';
        return (<div className={`led-number__frag-${i} ${onOffClass}`}></div>);
    });

    return (
        <div className='led-number'>
            {ledData}
        </div>
    );
});

export default LEDNumber;