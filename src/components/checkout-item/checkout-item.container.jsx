import React from 'react';

/* APOLLO MODULES*/
import { useMutation } from 'react-apollo';
import { gql } from 'apollo-boost';

/* REACT COMPONENTS */
import CheckoutItem from './checkout-item.component';

/* MUTATON QUERY */
const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
  }
`;
const REMOVE_ITEM_FROM_CART = gql`
  mutation RemoveItemFromCart($item: Item!) {
    removeItemFromCart(item: $item) @client
  }
`;
const CLEAR_ITEM_FROM_CART = gql`
  mutation ClearItemFromCart($item: Item!) {
    clearItemFromCart(item: $item) @client
  }
`;

const CheckoutItemContainer = (props) => {
  const { cartItem } = props;
  const [addItemToCart] = useMutation(ADD_ITEM_TO_CART, { variables: { item: cartItem } });
  const [removeItemFromCart] = useMutation(REMOVE_ITEM_FROM_CART, {
    variables: { item: cartItem },
  });
  const [clearItemFromCart] = useMutation(CLEAR_ITEM_FROM_CART, {
    variables: { item: cartItem },
  });

  return (
    <CheckoutItem
      {...props}
      addItem={() => addItemToCart()}
      clearItem={() => clearItemFromCart()}
      removeItem={() => removeItemFromCart()}
    />
  );
};

export default CheckoutItemContainer;
