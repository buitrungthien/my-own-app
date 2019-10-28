import React from 'react';
import Header from './Layout/Header';
import SideBar from './Layout/SideBar';
import Content from './Layout/Content';
import Statuses from './Components/Statuses';
import Table from './Components/Table';
import LEDNumber from './Components/LEDNumber';

function App() {
  return (
    <div className="container">
      <SideBar />
      <div className='right-content'>
        <Header />
        <Content>
          <Statuses />
          <Table />
          <LEDNumber />
        </Content>
      </div>
    </div>
  );
}

export default App;
