import React, { useEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import './App.css';
import Countries from './component/coutries/Countries';
import Header from './component/header/Header';
import { fetchData } from './store/actions/countriesAction';



function App() {
  const countries = useSelector(state => state.countries)
  // const isLoading = useSelector(state => state.isLoading)
  // const error = useSelector((state) => state.error);
    
  const dispatch = useDispatch()
  
  useEffect(() => {
   const a =  dispatch(fetchData())

  },[dispatch])
  
 console.log(countries);
  return (
    <div className="App">
      <Header/>
      <Countries countries = {countries} />
    </div>
  );
}

export default App;
