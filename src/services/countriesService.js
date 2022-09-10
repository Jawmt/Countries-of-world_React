import axios from 'axios';

const baseURL = 'https://restcountries.com/v3.1/all';

class CountriesService {

    getAllCountries = () => {
        return axios.get(baseURL);
    }

}

export const countriesServices = Object.freeze(new CountriesService());
