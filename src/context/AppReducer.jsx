const tmagazine = (state, action) => {
    switch (action.type) {
      case 'GET_TMAZINE':
        return {
          ...state,
          tmagazine: action.payload,
        }
      default:
        return state
    }
    
   }

   
   export default tmagazine