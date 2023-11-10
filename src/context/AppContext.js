import { createContext, useReducer } from 'react';

export const AppContext = createContext();

export const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_EMAIL_VALUE':
      return { ...state, email: action.payload };
    case 'SET_IS_SUBSCRIBED':
      return { ...state, isSubscribed: action.payload };
    default:
      return state;
  }
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, {
    email: '',
    isSubscribed: false,
  });

  return <AppContext.Provider value={{ ...state, dispatch }}>{children}</AppContext.Provider>;
};
