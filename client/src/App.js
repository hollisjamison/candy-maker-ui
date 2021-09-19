import "./App.css";
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ErrorPage from './pages/errorpage/errorpage'
import ManufacturersPage from './pages/manufacturerspage/manufacturerspage'
import ProductsPage from './pages/productspage/productpage'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/products/:manufacturerId" component={ProductsPage} />
          <Route exact path="/" component={ManufacturersPage} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
