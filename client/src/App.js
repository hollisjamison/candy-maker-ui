import "./App.css";
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import ErrorPage from './pages/errorpage/errorpage'
import ManufacturersPage from './pages/manufacturerspage/manufacturerspage'
import ProductsPage from './pages/productspage/productpage'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/products/:manufacturerId" element={<ProductsPage/>} />
          <Route exact path="/" element={<ManufacturersPage/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
