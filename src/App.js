import React, { Component } from 'react';

import classes from './Stylesheets/App.module.css';
import MainProduct from './Components/MainProduct';
import ProductDetails from './Components/ProductDetails';
import Topbar from './Components/Topbar';
import ProductInfo from './Components/ProductData';

class App extends Component {

  state = {
    productInfo: ProductInfo,
    currentPreviewImage: 'https://imgur.com/iOeUBV7.png',
    showHeartBeat: false,
  }

  render() {
    return (
      <div className="App">
        <Topbar />
  
        <div className={classes.Container}>
          <div className={classes.MainProduct}>
            <MainProduct />
          </div>
  
          <div className={classes.ProductInfo}>
            <ProductDetails data={this.state.productInfo} />
          </div>
  
        </div>
      </div>
    );
  }
  }

  

export default App;
