import  { createContext, useReducer } from 'react'
import AppReducer from '../context/AppReducer'
import axios from 'axios'

const initialState = {
  articles: []
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getArticles = async () => {
    try {
      const response = await axios.get(
        'https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=HPNTf20wNNYVcukn0Mr4wTXtSwFnV63i'
      );
      dispatch({
        type: 'GET_ARTICLE',
        payload: response.data.results,
      });
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        articles: state.articles,
        getArticles,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};



