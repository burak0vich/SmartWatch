import React, { Component } from 'react';

import classes from './Stylesheets/App.module.css';
import MainProduct from './Components/MainProduct';
import ProductDetails from './Components/ProductDetails';
import Topbar from './Components/Topbar';

class App extends Component {



  render() {
    return (
      <div className="App">
        <Topbar />
  
        <div className={classes.Container}>
          <div className={classes.MainProduct}>
            <MainProduct />
          </div>
  
          <div className={classes.ProductInfo}>
            <ProductDetails />
          </div>
  
        </div>
      </div>
    );
  }
  }

  

export default App;
