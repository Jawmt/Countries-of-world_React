import './App.css';
import { useEffect, useState } from 'react'
import { countriesServices } from './services/countriesService';
import HomeCountries from './pages/HomeCountries';
import { Route, Routes } from 'react-router-dom';

function App() {
   

  return (
    <Routes>
      <Route path="/countries" element={<HomeCountries />}/>
      <Route path="/countries/:id" />
    </Routes>
  );
}

export default App;
