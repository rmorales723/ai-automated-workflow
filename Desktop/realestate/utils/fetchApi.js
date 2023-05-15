import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
         headers: {
                'X-RapidAPI-Key': '271c05965bmshc2a18060a0ea44ap111183jsnc39b13d0e9b4',
                'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })
    return data;
}