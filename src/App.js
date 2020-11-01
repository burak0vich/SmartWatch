import classes from './App.module.css';
import ProductInfo from './ProductData';

function App() {
  return (
    <div className="App">
      <header className ="App-header">
      <nav className={classes.topbar}>
        <img src="https://s.dlpng.com/static/png/197684_preview.png" alt="Amazon Logo"/>
      </nav>
      </header>

      <div className={classes.Container}>
        <div className={classes.MainProduct}>
          <img src="https://imgur.com/iOeUBV7.png" alt="Product Image"/>
          {/* <div className={classes.TimeData}>
            <p>{new Date().getHours().toString().padStart(2,'0') + ':' + new Date().getMinutes().toString().padStart(2,'0')}</p>
          </div> */}

          <div className={classes.HeartRateData}>
            <i class="fas fa-heartbeat"></i>
            <p>78</p>
          </div>
        </div>
        <div className={classes.ProductInfo}>
          <h1 className= {classes.ProductTitle}>{ProductInfo.title}</h1>
          <p className={classes.ProductDescription}>{ProductInfo.description}</p>
          <h3 className={classes.HeaderSection}>Select Color</h3>
          <div>
           <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src="https://imgur.com/PTgQlim.png" alt="Red"/>
           <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src="https://imgur.com/iOeUBV7.png" alt="Black"/>
           <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src="https://imgur.com/Mplj1YR.png" alt="Blue"/>
           <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src="https://imgur.com/xSIK4M8.png" alt="Purple"/>
          </div>
          <h3 className={classes.HeaderSection}>Features</h3>
          <div>
            <button className={[classes.FeatureBtn, classes.SelectedFeatureBtn].join(' ')}>Time</button>
            <button className={[classes.FeatureBtn, classes.SelectedFeatureBtn].join(' ')}>Heart Rate</button>
          </div>
          <button className={classes.BuyBtn}>Buy Now</button>
        </div>
          
      </div>
    </div>
  );
}

export default App;
