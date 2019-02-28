import React, { Component } from 'react';
import './Assets/css/default.min.css';
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Homepage/>
      <Header/>

      <Footer/>

      </div>
    );
  }
}

export default App;
