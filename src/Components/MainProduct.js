import React from 'react';
import classes from '../Stylesheets/MainProduct.module.css';

const MainProduct = (props) => {
	return(
		<div className={classes.MainProduct}>
			<img src="https://imgur.com/iOeUBV7.png" alt="Watch"/>
           {/* <div className={classes.TimeData}>
            <p>{new Date().getHours().toString().padStart(2,'0') + ':' + new Date().getMinutes().toString().padStart(2,'0')}</p>
          </div>  */}

          <div className={classes.HeartRateData}>
            <i class="fas fa-heartbeat"></i>
            <p>78</p>
          </div>
		</div>
	)
}

export default MainProduct;