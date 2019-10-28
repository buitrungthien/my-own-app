import React from 'react';
import './styles.scss';

const priorityLabel = React.memo(props => {
    const labelColor = {backgroundColor: `${props.labelColor}`}
    return (
        <span className='priority-label' style={labelColor}>
            {props.children}
        </span>
    );
});

export default priorityLabel;
