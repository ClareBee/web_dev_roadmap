import React from 'react';

const Page3 = ({ onRouteChange }) =>
  <div className="app">
    <h1>This is Page 3</h1>

    <button onClick={() => onRouteChange('page1')}>Page 1</button>
    <button onClick={() => onRouteChange('page2')}>Page 2</button>
    <button className="disabled">Page 3</button>
  </div>

export default Page3;
