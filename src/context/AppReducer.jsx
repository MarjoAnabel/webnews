const article = (state, action) => {
    switch (action.type) {
      case 'GET_ARTICLE':
        return {
          ...state,
          articles: action.payload,
        }
      default:
        return state
    }
    
   }
   export default article