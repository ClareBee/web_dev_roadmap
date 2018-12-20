import React from 'react';

const Page2 = ({ onRouteChange }) =>
  <div className="app">
    <h1>This is Page 2</h1>

    <button onClick={() => onRouteChange('page1')}>Page 1</button>
    <button className="disabled">Page 2</button>
    <button onClick={() => onRouteChange('page3')}>Page 3</button>
  </div>

export default Page2;
