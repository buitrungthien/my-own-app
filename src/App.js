import React from 'react';
import Header from './Layout/Header';
import SideBar from './Layout/SideBar';
import Content from './Layout/Content';
import Statuses from './Components/Statuses';
import Table from './Components/Table';
import DigitalClock from './Components/DigitalClock';

function App() {
    return (
        <div className="container">
            <SideBar />
            <div className='right-content'>
                <Header />
                <Content>
                    <Statuses />
                    <Table />
                    <div className='square-box square-box--1'>
                        <DigitalClock />
                    </div>
                    <div className='square-box square-box--2'></div>
                    <div className='square-box square-box--3'></div>
                </Content>
            </div>
        </div>
    );
}

export default App;
