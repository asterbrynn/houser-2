import React from 'react';
import {HashRouter} from 'react-router-dom';
import Header from './components/Header/Header';
import router from './routes';
import './App.css';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header/>
        {router}
      </div>
    </HashRouter>
  );
}

export default App;
