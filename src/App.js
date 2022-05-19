import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Product from './components/pages/Product';
import SignUp from './components/pages/SignUp';
import { Button } from './components/Button';
// import CardItem from './components/CardItem';
// import Cards from './components/Cards';
// import Footer from './components/Footer';
// import HeroSection from './components/HeroSection';
// import Find from './components/Find';
function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          {/* <Find/> */}
          <Route path='/' exact component ={Home} />
          <Route path='/services' component={Services}/>
          <Route path='/products' component={Product}/>
          <Route path='/sign-up' component={SignUp}/>
        </Switch>
      </Router>
      {/* <Footer /> */}
  
    </>
  );
}

export default App;