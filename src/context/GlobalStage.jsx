import  { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

const initialState = {
 tmagazine: [],
}

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    const getTmazines = async () => {
      const response = await axios.get(
        'https://api.nytimes.com/svc/topstories/v2/t-magazine.json'
      )
      dispatch({
        type: 'GET_TMAGAZINES',
        payload: response.data.results,
      })
    }  
    return (
        <GlobalContext.Provider
          value={{
            tmagazines: state.tmagazines,
            getTmazines,
          }}
        >
          {children}
        </GlobalContext.Provider>
      )
      
}
export const GlobalContext = createContext(initialState)



