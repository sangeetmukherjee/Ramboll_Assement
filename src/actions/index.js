export const FETCH_LANDING_PENDING = 'FETCH_PRODUCTS_PENDING';
export const FETCH_LANDING_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_LANDING_ERROR = 'FETCH_PRODUCTS_ERROR';

export const fetchLandingDataPending = () => {
  return {
    type: FETCH_LANDING_PENDING
  }
}

export const fetchLandingDataSuccess = () => {

  return dispatch=>{
    dispatch(addTodoStarted());
    fetch('https://data.nasa.gov/resource/y77d-th95.json')
    .then(res => res.json())
    .then(res => {
      console.log("Check The Response from API", res);
      dispatch(addTodoSuccess(res));
      if (res.error) {
        throw (res.error);
      }
    }).catch(error => {
      dispatch(addTodoFailure(error.message));
    }); 
  } 
}

const addTodoStarted = () => ({
  type: FETCH_LANDING_PENDING
});

const addTodoSuccess = todo => ({
  type: FETCH_LANDING_SUCCESS,
  payload: {
    ...todo
  }
});

const addTodoFailure = error => ({
  type: FETCH_LANDING_ERROR,
  payload: {
    error
  }
});

