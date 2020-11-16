/* ADD ITEM TO CART FUNCTION */
export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === existingCartItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  let items = cartItems.map((cartItem) => {
    if (cartItem.id === cartItemToRemove.id) {
      let item = { ...cartItem, quantity: cartItem.quantity - 1 };
      return item;
    } else {
      return cartItem;
    }
  });

  return items.filter((item) => item.quantity > 0);
};

export const getCartItemCount = (cartItems) =>
  cartItems.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

export const getCartTotal = (cartItems) =>
  cartItems.reduce((sum, item) => {
    return sum + item.quantity * item.price;
  }, 0);

export const clearItemFromCart = (cartItems, item) => {
  return cartItems.filter((cartItem) => cartItem.id !== item.id);
};
