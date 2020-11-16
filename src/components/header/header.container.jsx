import React, { useContext } from 'react';

/* APOLLO MODULES*/
import { useQuery } from 'react-apollo';
import { gql } from 'apollo-boost';

/* REACT COMPONENTS */
import Header from './header.component';

/* USER CONTEXT */
import CurrentUserContext from '../../context/user.context';

/* CART HIDDEN QUERY */
const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

const HeaderContainer = () => {
  const user = useContext(CurrentUserContext);
  const { data } = useQuery(GET_CART_HIDDEN);
  return <Header hidden={data.cartHidden} currentUser={user} />;
};

export default HeaderContainer;
