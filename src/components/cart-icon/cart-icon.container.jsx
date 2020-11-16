import React from 'react';

/* APOLLO MODULES*/
import { useMutation, useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

/* REACT COMPONENTS*/
import CartIcon from './cart-icon.component';

/* MUTATION QUERY */
const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

/* QUERY */
const GET_CART_ITEM_COUNT = gql`
  {
    itemCount @client
  }
`;

const CartIconContainer = () => {
  const { data } = useQuery(GET_CART_ITEM_COUNT);
  const [toggleCartHidden] = useMutation(TOGGLE_CART_HIDDEN);
  return <CartIcon toggleCartHidden={toggleCartHidden} itemCount={data.itemCount} />;
};

export default CartIconContainer;
