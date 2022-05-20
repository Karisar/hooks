import logo from './logo.svg';
import React from 'react';
import './App.css';
import MatAppBar from './common/MatAppBar';
import { Routes ,Route } from 'react-router-dom';
import Account from './common/Account';
import Dashboard from './common/Dashboard';
import Profile from './common/Profile';
import Pricing from './common/Pricing';
import Products from './common/Products';

function App() {
  return (
    <div>
      <MatAppBar/>
      <Routes>
        <Route path="Products" element={<Products />} />
        <Route path="Pricing" element={<Pricing />} />
        <Route path="Account" element={<Account />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Profile" element={<Profile />} />
      </Routes>
    </div> );
}

export default App;
