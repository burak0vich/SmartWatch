import React from 'react';
import classes from '../Stylesheets/ProductDetails.module.css';

const ProductDetails = (props) => {

	const colorOptions = props.data.colorOptions.map((item, pos) => {
		const classArr = [classes.ProductImage]
		if (pos === 0) {
			classArr.push(classes.SelectedProductImage)
		}
		return (
			<img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName}/>
		)
	})

	const featureList = props.data.featureList.map((item, pos) => {
		const classArr = [classes.FeatureBtn]
		if (pos === 0) {
			classArr.push(classes.SelectedFeatureBtn)
		}

		return (
			<button key={pos} className={[classArr.join(' ')]}>{item}</button>
		)
	})

	return (
		<div className={classes.ProductInfo}>
			<h1 className={classes.ProductTitle}>{props.data.title}</h1>
			<p className={classes.ProductDescription}>{props.data.description}</p>
			<h3 className={classes.HeaderSection}>Select Color</h3>
			<div>
				{colorOptions}
			</div>
			<h3 className={classes.HeaderSection}>Features</h3>
			<div>
				{featureList}
			</div>
			<button className={classes.BuyBtn}>Buy Now</button>
		</div>
	)
}

export default ProductDetails;