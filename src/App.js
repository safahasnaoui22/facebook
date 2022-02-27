
import React from 'react';
import './App.css';
import Header from "./Header";
import Feed from "./Feed";
import Login from './Login'
import { useStateValue } from './StateProvider';

import Sidebar from "./Sidebar";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <React.Fragment>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
      
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default App;