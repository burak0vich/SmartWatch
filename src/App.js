import classes from './App.module.css';
import ProductInfo from './ProductData';

function App() {
  return (
    <div className="App">
      <header className ="App-header">
      <nav className={classes.topbar}>
        <img src="https://i.dlpng.com/static/png/197684_preview.png" alt="Amazon Logo"/>
      </nav>
      </header>

      <div className={classes.Container}>
        <div className={classes.ProductImage}>
          <img src="https://imgur.com/iOeUBV7.png" alt="Product Image"/>
        </div>
        <div className={classes.ProductInfo}>
          <h1 className= {classes.ProductTitle}>{ProductInfo.title}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
