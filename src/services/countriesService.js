import axios from 'axios';

const baseURL = 'https://restcountries.com/v3.1/';

class CountriesService {

    getAllCountries = () => {
        return axios.get(`${baseURL}/all`);
    }

    getCountriesByRegion =(region)=> {
        return axios.get(`${baseURL}/region/${region}`)
    }

}

export const countriesServices = Object.freeze(new CountriesService());
