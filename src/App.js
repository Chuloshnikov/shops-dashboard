import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import DashboardMain from './components/DashboardMain/DashboardMain';
import Orders from './components/Orders/Orders';
import Customers from './components/Customers/Customers';
import Analytics from './components/Analytics/Analytics';
import Products from './components/Products/Products';
import RightSide from './components/RightSide/RightSide';
import CustomersContainer from './components/Customers/CustomersContainer';

const App = () => {
  return (
      <div className="App">
        <div className="AppGlass">
            <Sidebar/>
            <main className='AppWrapper'>
              <Routes>
              <Route path="/" element={<DashboardMain />}/>
                  <Route path="/dashboard" element={<DashboardMain />}/>
                  <Route path="/orders" element={<Orders />}/>
                  <Route path="/customers" element={<CustomersContainer />}/>
                  <Route path="/products" element={<Products />}/>
                  <Route path="/analytics" element={<Analytics />}/>
              </Routes>
            </main>
            <RightSide/>
        </div>
      </div>
  );
}

export default App;
