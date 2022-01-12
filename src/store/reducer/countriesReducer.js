import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';
import  * as allImport from '../actions/countriesAction'

const InitialState = {
  countries: [],
  isLoading: false,
  error: ""
}

export const countriesReducer = (state = InitialState , action) => {

    switch (action.type) {
      case allImport.START:
        return {
          ...state,
          isLoading: true,
          error: "",
        };
        
      case allImport.SUCCESS:
        return {
          ...state,
          countries: action.payload,
          isLoading: false,
        };
        
      case allImport.SUCCESS:
        return {
          ...state,
          isLoading: false,
          error:action.payload,
        };
      default:
        return state;
    }
}