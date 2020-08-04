import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/Services" component={Services} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/Pricing" component={Pricing} />
        <Route path="/Contact" component={Contact} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
