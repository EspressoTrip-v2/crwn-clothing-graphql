import React from 'react';

/* APOLLO MODULES*/
import { useQuery, useMutation } from 'react-apollo';
import { gql } from 'apollo-boost';

/* REACT COMPONENTS */
import CartDropdown from './cart-dropdown.component';

/* MUTATION */
const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;
/* QUERY */
const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

const CartDropdownContainer = () => {
  const [toggleCartHidden] = useMutation(TOGGLE_CART_HIDDEN);
  const { data } = useQuery(GET_CART_ITEMS);

  return <CartDropdown cartItems={data.cartItems} toggleCartHidden={toggleCartHidden} />;
};

export default CartDropdownContainer;
