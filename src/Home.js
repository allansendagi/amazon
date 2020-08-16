import React from 'react';
import Product from './Product';
import './Home.css';

function Home(){
	return (
		<div className="home">
			<img className="home__image"
			 src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
			 alt=""
			 />
			<div className="home__row">
			 <Product
			 	id="1245"
			 	title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
			 	price={11.96}
			 	rating={4}
			 	image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
			   />
			    <Product
			 	id="1245"
			 	title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
			 	price={11.96}
			 	rating={4}
			 	image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
			   />
			   </div>
			   <div className="home__row">
			   	  <Product
			 	id="1245"
			 	title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
			 	price={11.96}
			 	rating={4}
			 	image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
			   />
			     <Product
			 	id="1245"
			 	title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
			 	price={11.96}
			 	rating={4}
			 	image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
			   />
			     <Product
			 	id="1245"
			 	title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
			 	price={11.96}
			 	rating={4}
			 	image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
			   />
			   </div>
			   <div className="home__row">
			   	 <Product
			 	id="1245"
			 	title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
			 	price={11.96}
			 	rating={4}
			 	image="https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
			   />
			   </div>
		</div>
	)
}

export default Home;