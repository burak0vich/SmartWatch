import React from 'react';
import classes from '../Stylesheets/ProductDetails.module.css';
import ProductInfo from './ProductData';

const ProductDetails = (props) => {
	return (
		<div className={classes.ProductInfo}>
			<h1 className={classes.ProductTitle}>{ProductInfo.title}</h1>
			<p className={classes.ProductDescription}>{ProductInfo.description}</p>
			<h3 className={classes.HeaderSection}>Select Color</h3>
			<div>
				<img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src="https://imgur.com/PTgQlim.png" alt="Red" />
				<img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src="https://imgur.com/iOeUBV7.png" alt="Black" />
				<img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src="https://imgur.com/Mplj1YR.png" alt="Blue" />
				<img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src="https://imgur.com/xSIK4M8.png" alt="Purple" />
			</div>
			<h3 className={classes.HeaderSection}>Features</h3>
			<div>
				<button className={[classes.FeatureBtn, classes.SelectedFeatureBtn].join(' ')}>Time</button>
				<button className={[classes.FeatureBtn, classes.SelectedFeatureBtn].join(' ')}>Heart Rate</button>
			</div>
			<button className={classes.BuyBtn}>Buy Now</button>
		</div>
	)
}

export default ProductDetails;