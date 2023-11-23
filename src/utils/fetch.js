import axios from "axios";
export const Fetch=async(searchQuery)=>{
const options = {
  url: 'https://youtube-v31.p.rapidapi.com/videos',
  params: {
    part: 'contentDetails,snippet,statistics',
    id: searchQuery
    
  },
  headers: {
    'X-RapidAPI-Key': 'aa04886a02msh765a37b4a17fdb8p1ac9ccjsnf772d18527d1',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

try {
	const response = await axios.get(options.url,{
        params:options.params,
        headers:options.headers
    });
	console.log(response.data);
    return response.data;
} catch (error) {
	console.error(error);
    throw error;
}}
export default Fetch;
