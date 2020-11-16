import React from 'react';

/* APOLLO MODULES*/
import { gql } from 'apollo-boost';
import { useMutation } from 'react-apollo';

/* REACT COMPONENT */
import CollectionItem from './collection-item.component';

/* MUTATON QUERY */
const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
  }
`;

const CollectionItemContainer = (props) => {
  const { item } = props;
  const [addItemToCart] = useMutation(ADD_ITEM_TO_CART, { variables: { item } });

  return <CollectionItem {...props} addItem={() => addItemToCart()} />;
};

export default CollectionItemContainer;
