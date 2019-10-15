import React from 'react';
import './styles.scss';
import myAvatar from '../../images/thien-avatar.jpg';

const avatar = props => (
    <div className='avatar'>
        <div className='avatar__shape-box mg-bt-2'>
            <img src={myAvatar} alt='My-avatar' />
        </div>
        <span className='avatar__brif-info'>Name: Trung Thien</span>
    </div>
);

export default avatar;