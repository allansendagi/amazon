export const initialState = {
	basket: [
	   {
		id:"145",
		title:"The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses",
		price:15.96,
		rating:4,
		image:"https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY218_.jpg"
	},
 ],
	user: null,
}

const reducer = (state, action)=> {
	console.log(action)
	switch (action.type){
		case "ADD_TO_BASKET":
			return {...state,
				basket: [...state.basket, action.item]
			}
	    case "REMOVE_FROM_BASKET":
	    	let newBasket = [...state.basket];
	    	const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
	    	if (index >=0){
	    		newBasket.splice(index, 1);

	    	} else {
	    		console.warn(`Cant remove product(id: ${action.id}) as its not in basket`)
	    	}
	    return { ...state, basket:newBasket};
	   	   default:
	   	      return state;
	}
}

export default reducer;