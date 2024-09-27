import axios  from "axios";

//ACTION TYPES
export const START = "START";
export const SUCCESS = "SUCCESS";
export const FAIL = "FAIL";

//ACTION CREATOR
export const fetchData = () => (dispatch) => {
  //START
  dispatch({ type: START })
  
      axios.get("https://restcountries.com/v3.1/all").
      then((res) => {
          // Dispatch Succes
          dispatch({ type: SUCCESS, payload: res.data });
        })
        .catch((err) => {
          dispatch({ type: FAIL, payload: err.message });
        });
};
