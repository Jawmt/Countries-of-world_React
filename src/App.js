import './App.css';
import HomeCountries from './pages/HomeCountries';
import { Navigate, Route, Routes } from 'react-router-dom';
import DetailCountry from './pages/DetailCountry';

function App() {
   
  
  return (
    <Routes>
      <Route path="/countries" >
        <Route path="" element={<HomeCountries />}/>
        <Route path=":id" element={<DetailCountry />}/>
      </Route>
      <Route path="/" element={<Navigate to="/countries" />}/>
    </Routes>
  );      
}

export default App;
