import React from 'react';
import Header from './Layout/Header';
import SideBar from './Layout/SideBar';
import Content from './Layout/Content';

function App() {
  return (
    <div className="container">
      <Header />
      <SideBar />
      <Content />
    </div>
  );
}

export default App;
