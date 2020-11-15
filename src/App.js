import React, { Component } from 'react';

import classes from './css/App.module.css';
import MainProduct from './Components/MainProduct';
import ProductDetails from './Components/ProductDetails';
import Topbar from './Components/Topbar';
import ProductInfo from './Components/ProductData';

class App extends Component {

  state = {
    productInfo: ProductInfo,
    currentPreviewImagePos: 0,
    currentSelectedFeature: 0,
  }

  onColorClick = (pos) => {
    this.setState({currentPreviewImagePos: pos});
  }

  onFeatureItemClick = (pos) => {
    
    this.setState({currentSelectedFeature: pos})
  }

  render() {
    return (
      <div className="App">
        <Topbar />
  
        <div className={classes.Container}>
          <div className={classes.MainProduct}>
            <MainProduct currentPreviewImage= {this.state.productInfo.colorOptions[this.state.currentPreviewImagePos].imageUrl} 
                         currentSelectedFeature = {this.state.currentSelectedFeature}
                         />
          </div>
  
          <div className={classes.ProductInfo}>
            <ProductDetails data={this.state.productInfo} onColorClick={this.onColorClick} currentPreviewImagePos= {this.state.currentPreviewImagePos}
             onFeatureItemClick = {this.onFeatureItemClick} currentSelectedFeature={this.state.currentSelectedFeature} />
          </div>
  
        </div>
      </div>
    );
  }
  }

  

export default App;
