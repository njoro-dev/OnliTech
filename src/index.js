import React from 'react';
import ReactDOM from 'react-dom/client';
import './ftl.css';
import App from './App';
//import LionCage from './lionCage';
import Menu from './Menu';
import Header from './Header';
import Account from './Account';
import Cage from './Cage';
import BetStatus from './BetStatus';
//import { useOutlet } from 'react-router-dom';
//import Bet from './Bet';
//import { useState } from 'react';
import Bet from './Bet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Header />
    <Account />
    <Menu />
    <Cage />
    <Bet />
    <BetStatus />
  </React.StrictMode>

); 