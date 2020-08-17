import React from 'react';
import {useStateValue} from "./StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct ({id, title, image, price, rating}) {
	const [{basket}, dispatch] = useStateValue();

	const removefrombasket = () => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id,
		})
	}
	return(
		<div className="checkoutproduct">
			<img className= "checkoutProduct__image" src={image} alt="" />
			<div className="checkoutproduct__info">
				<p className="checkoutproduct__title">{title}</p>
				<p className="checkoutproduct__price">
				    <small>£</small>
				    <strong>{price}</strong>
				</p>
				 <div className="checkoutproduct__rating">
  	   				{Array(rating)

  	   			.fill()
  	   			.map((_) => (
  	   				<span role="img" aria-label="jsx-a11y/aria-proptypes">⭐️</span>
  	   			))}
  	    		</div>
  	    		<button onClick={removefrombasket}>Remove from basket</button>
			</div>
		</div>
	)

}

export default CheckoutProduct;