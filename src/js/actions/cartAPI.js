const saveToLocalStorage = (cart) => {
	if(cart.length === 0) {
		localStorage.removeItem('cart');
	} else {
		localStorage.setItem('cart', JSON.stringify(cart));
	}
}

const getFromLocalStorage = () => {
	const emptyCart = { items: [ ]};
	const cart = JSON.parse(localStorage.getItem('cart'));
	return cart || emptyCart;
 }


export const fetch = async () => getFromLocalStorage();

export const addToCart = async (productId, quantity = 1) => {
	const cart = await fetch();
	const index = cart.items.findIndex(item => item.productId === productId);
	let newCart = {};

	if(index > -1) {
    if(quantity == 1) {
      quantity = cart.items[index].quantity + 1;
    }
		newCart = {
			...cart,
			items: [
				...cart.items.slice(0, index),
				Object.assign({}, cart.items[index], { quantity: quantity }),
				...cart.items.slice(index + 1)
			],
		};
	} else {
		const newItem = { productId, quantity };
		newCart = {
			...cart,
			items: [
				...cart.items,
				newItem,
			],
		};
	}
	saveToLocalStorage(newCart);

	return newCart;
}

export const removeFromCart = async (productId, quantity = 1) => {
	const oldCart = await fetch();
	const cart = oldCart.items.filter(item => item.productId !== productId);

	const newCart = {
		items: [
			...cart,
		]
	};

	saveToLocalStorage(newCart);

	return newCart;
}