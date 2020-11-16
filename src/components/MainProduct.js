import React from 'react'
import classes from '../css/MainProduct.module.css'

const MainProduct = (props) => {
	return (
		<div className={classes.MainProduct}>
			<img src={props.currentPreviewImage} alt="Watch"/>
      {
        props.currentSelectedFeature === 1 ? (
          <div className={classes.HeartRateData}>
            <i className="fas fa-heartbeat"></i>
            <p>78</p>
          </div>
        ) : (
          <div className={classes.TimeData}>
            <p>{new Date().getHours().toString().padStart(2, '0') + ':' + new Date().getMinutes().toString().padStart(2, '0')}</p>
          </div> 
        )
      }
		</div>
	)
}

export default MainProduct;
