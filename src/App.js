import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Routes/Home/Home';
import About from './Routes/About/About';
import Contact from './Routes/Contact/Contact';
import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navigation/Navbar';
import NotFound from './Routes/NotFound';
import PageShell from './components/PageShell';

const App = () => (
  <div className="App">
    <Navbar />
    <Switch>
      <Route path="/home" component={PageShell(Home)} />
      <Route path="/contact" component={PageShell(Contact)} />
      <Route path="/about" component={PageShell(About)} />
      <Route component={PageShell(NotFound)} />
    </Switch>
    <Footer />
  </div>
);

export default App;
