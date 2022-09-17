import './App.css';
import HomeCountries from './pages/HomeCountries';
import { Navigate, Route, Routes } from 'react-router-dom';
import DetailCountry from './pages/DetailCountry';
import { useEffect, useState } from 'react';
import { countriesServices } from './services/countriesService';

function App() {
  
  const [data, setData] = useState([]);
  /**
     * useEffect to set dataCountries with the response of the call API 
     */
    useEffect(() => {
      getAllCountries(); 
      console.log("ok");
      },[])

/**
 * Get All countries from the API
 */
  const getAllCountries = () => {
    countriesServices.getAllCountries()
        .then((response)=> {
            setData(response.data);
        })     
  }
  
  return (
    <Routes>
      <Route path="/countries" >
        <Route path="" element={<HomeCountries data={data}/>}/>
        <Route path=":id" element={<DetailCountry />}/>
      </Route>
      <Route path="/" element={<Navigate to="/countries" />}/>
    </Routes>
  );      
}

export default App;
