import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Vedios from "./Vedios";
import { FetchFromAPI } from "../utils/FetchFromAPI";


const SearchFeed = () => {

  const [vedios, setvedios] = useState([]);
  const{searchTerm}=useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await FetchFromAPI(`${searchTerm}`);
        setvedios(data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchData();
  }, [searchTerm]);

  

  return (

      <Box p={2} sx={{ overflow: 'auto', height: '90vh', flex: 2 }}>
          <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
             Search result for:<span style={{ color: '#F31503' }}>{searchTerm}</span>Videos
          </Typography>
          <Vedios vedios={vedios} />
    </Box>
  );
};

export default SearchFeed;
