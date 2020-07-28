import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { SignIn } from './pages/signIn/index';

export  const App = () => {
  return (
      <div className="App">
        <SignIn/>
      </div>
  )
}

// export default App;
