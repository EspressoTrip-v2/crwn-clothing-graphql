import React from 'react';

/* APOLLO MODULES*/
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

/* REACT COMPONENTS*/
import CheckoutPage from './checkout.component';

/* QUERIES */
const GET_CART_DETAILS = gql`
  {
    itemTotal @client
    cartItems @client
  }
`;

const CheckoutPageContainer = () => {
  const { data } = useQuery(GET_CART_DETAILS);
  const { itemTotal, cartItems } = data;
  return <CheckoutPage total={itemTotal} cartItems={cartItems} />;
};

export default CheckoutPageContainer;
