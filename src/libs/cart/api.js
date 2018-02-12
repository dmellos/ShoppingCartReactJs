const saveToLocalStorage = (cart) => {
	localStorage.setItem('cart', JSON.stringify(cart));
}

const getFromLocalStorage = () => {
	const emptycart = {items:[]};
	const cart = JSON.parse(localStorage.getItem('cart'));
	 
	return cart || emptycart;
}


export const fetch = async() => getFromLocalStorage();

export const addToCart = async(productId, quantity = 1) =>{
	const cart = await fetch();
	const exists = cart.items.findIndex(item => item.productId === productId) > -1;
	
	if(exists){
		throw {message: 'Item already exists'};
	}

	const newItem = {productId, quantity};
	const newCart = {
		...cart,
		items: [
		...cart.items,
		newItem,
		],
	};

	saveToLocalStorage(newCart);
	return newCart;
}

//addToCart('5a80c18d0a1832800bbdc45f',5);





console.log('cart', getFromLocalStorage());

/* 
saveToLocalStorage({
	items:[
	{productId:'5a80c18d51608cf0d659be1e', quantity:3},
	]
});
*/