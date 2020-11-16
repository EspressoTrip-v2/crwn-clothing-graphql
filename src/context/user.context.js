import { createContext } from 'react';

/* CREATE CURRENT USER CONTEXT */
const CurrentUserContext = createContext({
  currentUser: undefined,
});

export default CurrentUserContext;
