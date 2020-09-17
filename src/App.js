import React, {Component} from 'react';
import Routes from './routes';

import style from './style.css';

import Main from './pages/main';
import Header from './components/header';


  const App = () => (
    
      <div className="App">
        <Header />
        < Routes/>
      </div>
   );

export default App;
