import axios from 'axios';

export const FetchFromAPI = async (searchQuery) => {
  const options = {
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      q: searchQuery, // Use the parameter value for the 'q' (query) parameter
      part: 'snippet,id',
      regionCode: 'US',
      maxResults: '50',
      order: 'date'
    },
    headers: {
      'X-RapidAPI-Key': 'aa04886a02msh765a37b4a17fdb8p1ac9ccjsnf772d18527d1',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.get(options.url, {
      params: options.params,
      headers: options.headers
    });

    console.log(response.data);
    return response.data;
 

  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error to handle it in the calling code
  }
 

};

