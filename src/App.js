import './App.css';
import { useEffect, useState } from 'react'
import { countriesServices } from './services/countriesService';
import HomeCountries from './pages/HomeCountries';

function App() {
   

  return (
    <>
      <HomeCountries />    
    </>
  );
}

export default App;
