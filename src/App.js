import React from 'react';
import Header from './Layout/Header';
import SideBar from './Layout/SideBar';
import Content from './Layout/Content';
import Statuses from './Components/Statuses';

function App() {
  return (
    <div className="container">
      <SideBar />
      <div className='right-content'>
        <Header />
        <Content>
          <Statuses />
        </Content>
      </div>
    </div>
  );
}

export default App;
