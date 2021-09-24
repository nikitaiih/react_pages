import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import Header from './components/Header';
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NotificationContainer />
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
