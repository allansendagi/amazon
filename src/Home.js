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
			 	id="18"
			 	title="Cuisinart SPB-650 1 HP Blender, 7.8' x 10' x 13.6', Silver"
			 	price={99.95}
			 	rating={3}
			 	image="https://images-na.ssl-images-amazon.com/images/I/61EwA59l5jL._AC_SL1080_.jpg"
			   />
			   </div>
			   <div className="home__row">
			   	  <Product
			 	id="16"
			 	title="Maclocks MBPRLDGTB01 Security Laptop Ledge Lock Adapter for MacBook Pro with Touch Bar"
			 	price={30.44}
			 	rating={5}
			 	image="https://images-na.ssl-images-amazon.com/images/I/61yP%2BA2Sp9L._AC_SL1500_.jpg"
			   />
			     <Product
			 	id="56"
			 	title="Philips Sonicare HX9690/05 ExpertClean 7500 Bluetooth Rechargeable Electric Toothbrush, Black"
			 	price={109.99}
			 	rating={4}
			 	image="https://images-na.ssl-images-amazon.com/images/I/81U-eoBkhnL._SL1500_.jpg"
			   />
			     <Product
			 	id="90"
			 	title="HP LaserJet Pro M404dw Monochrome Wireless Laser Printer with Double-Sided Printing, Black, Works with Alexa (W1A56A)"
			 	price={268.9}
			 	rating={5}
			 	image="https://images-na.ssl-images-amazon.com/images/I/71NjVqNcojL._AC_SL1500_.jpg"
			   />
			   </div>
			   <div className="home__row">
			   	 <Product
			 	id="89"
			 	title="Samsung 34-Inch SJ55W Ultrawide Gaming Monitor (LS34J550WQNXZA) – 75Hz Refresh, WQHD Computer Monitor, 3440 x 1440p Resolution, 4ms Response, FreeSync, Split Screen, HDMI, Black"
			 	price={399.99}
			 	rating={4}
			 	image="https://images-na.ssl-images-amazon.com/images/I/91g-Y1B09EL._AC_SL1500_.jpg"
			   />
			   </div>
		</div>
	)
}

export default Home;