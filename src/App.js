import React, { Component } from 'react'

import MainProduct from './components/MainProduct'
import ProductDetails from './components/ProductDetails'
import Topbar from './components/Topbar'
import ProductInfo from './components/ProductData'

import classes from './css/App.module.css'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentPreviewImagePos: 0,
      currentSelectedFeature: 0
    }
  }

  onColorClick = (currentPreviewImagePos) => {
    this.setState({ currentPreviewImagePos })
  }

  onFeatureItemClick = (currentSelectedFeature) => {
    this.setState({ currentSelectedFeature })
  }

  render() {
    const {
      currentSelectedFeature,
      currentPreviewImagePos
    } = this.state

    return (
      <div className="App">
        <Topbar />

        <div className={classes.Container}>
          <div className={classes.MainProduct}>
            <MainProduct
              currentPreviewImage={ProductInfo.colorOptions[currentPreviewImagePos].imageUrl}
              currentSelectedFeature={currentSelectedFeature}
            />
          </div>
  
          <div className={classes.ProductInfo}>
            <ProductDetails
              data={ProductInfo}
              currentPreviewImagePos={currentPreviewImagePos}
              currentSelectedFeature={currentSelectedFeature}
              onColorClick={this.onColorClick}
              onFeatureItemClick={this.onFeatureItemClick}
            />
          </div>
  
        </div>
      </div>
    )
  }
}

export default App
