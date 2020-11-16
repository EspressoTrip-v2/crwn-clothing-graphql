import { gql } from 'apollo-boost';

/* CART UTILS */
import {
  addItemToCart,
  removeItemFromCart,
  getCartItemCount,
  getCartTotal,
  clearItemFromCart,
} from './cart.utils';

/* DEFINE MUTATION */
export const typeDefs = gql`
  extend type Item {
    quantity: Int
  }

  extend type Mutation {
    ToggleCartHidden: Boolean!
    AddItemToCart(item: Item!): [Item]!
    RemoveItemFromCart(item: Item!): [Item]!
    ClearItemFromCart(item: Item!): [Item]!
  }
`;

/* LOCAL QUERIES */
const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

const GET_CART_ITEM_COUNT = gql`
  {
    itemCount @client
  }
`;

const GET_CART_ITEMS_TOTAL = gql`
  {
    itemTotal @client
  }
`;

/* RESOLVERS */
export const resolvers = {
  Mutation: {
    /* TOGGLE HIDDEN */
    toggleCartHidden: (_root, _args, { cache }) => {
      const { cartHidden } = cache.readQuery({
        query: GET_CART_HIDDEN,
      });
      cache.writeQuery({
        query: GET_CART_HIDDEN,
        data: { cartHidden: !cartHidden },
      });
      return !cartHidden;
    },
    /* ADD NEW ITEMS TO CART */
    addItemToCart: (_root, { item }, { cache }) => {
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS,
      });
      const newCartItems = addItemToCart(cartItems, item);

      cache.writeQuery({
        query: GET_CART_ITEM_COUNT,
        data: { itemCount: getCartItemCount(newCartItems) },
      });

      cache.writeQuery({
        query: GET_CART_ITEMS_TOTAL,
        data: { itemTotal: getCartTotal(newCartItems) },
      });

      cache.writeQuery({
        query: GET_CART_ITEMS,
        data: { cartItems: newCartItems },
      });
      return newCartItems;
    },

    /* REMOVE ITEMS FROM CART */
    removeItemFromCart: (_root, { item }, { cache }) => {
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS,
      });

      const newCartItems = removeItemFromCart(cartItems, item);

      cache.writeQuery({
        query: GET_CART_ITEM_COUNT,
        data: { itemCount: getCartItemCount(newCartItems) },
      });

      cache.writeQuery({
        query: GET_CART_ITEMS_TOTAL,
        data: { itemTotal: getCartTotal(newCartItems) },
      });

      cache.writeQuery({
        query: GET_CART_ITEMS,
        data: { cartItems: newCartItems },
      });
      return newCartItems;
    },

    clearItemFromCart: (_root, { item }, { cache }) => {
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS,
      });
      const newCartItems = clearItemFromCart(cartItems, item);

      cache.writeQuery({
        query: GET_CART_ITEM_COUNT,
        data: { itemCount: getCartItemCount(newCartItems) },
      });

      cache.writeQuery({
        query: GET_CART_ITEMS,
        data: { cartItems: newCartItems },
      });
      return newCartItems;
    },
  },
};
