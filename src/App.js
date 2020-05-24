import React from 'react';
import Header from './components/Header';
import Carousel from "./components/Carousel";
import Team from "./components/Team";
import About from "./components/About";
import Connect from './components/Connect';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <About />
      <hr className="my-4" />
      <Team />
      <hr className="my-4" />
      <Connect />
      <Footer />
    </div>
  );
}

export default App;
