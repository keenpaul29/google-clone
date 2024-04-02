import axios from "axios";
const BASE_URL = "https://www.googleapis.com/customsearch/v1"
const params = {
    key: 'AIzaSyASm7_jZQ-4igLkJfmeXSac6bUMB2Us4CU',
    cx: '33b91290139134ce9'
}
export const fetchDataFromApi = async (payload) => {
    const  { data } = await axios.get(BASE_URL, {
        params: {...params, ...payload}

    });
    return data;
}; 
