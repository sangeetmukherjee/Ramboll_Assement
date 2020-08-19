import { combineReducers } from 'redux'
import { FETCH_LANDING_PENDING, FETCH_LANDING_SUCCESS, FETCH_LANDING_ERROR } from './../actions'

let initialState = { 
    pending: false,
    landingData: [],
    error: null
}

const getLandingDataReducer = (state = initialState , action) => {
  console.log("Check Actions-->",action);
  switch (action.type) {
    case FETCH_LANDING_PENDING:
     return {
        ...state,
        pending: true
      }

    case FETCH_LANDING_SUCCESS:

      return {
          ...state,
          pending: false,
          landingData: action.payload
      }

    case FETCH_LANDING_ERROR:

      return {
          ...state,
          pending: false,
          error: action.error
      } 

    default:
      return state
  }
}

const Reducer = combineReducers({
  getLandingDataReducer
})


export default Reducer;
