import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Vedios from "./Vedios";
import { FetchFromAPI } from "../utils/FetchFromAPI";
import { useEffect, useState } from "react";

const Feed = () => {
  const [selectedCategory, setselectedCategory] = useState('New');
  const [vedios, setvedios] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await FetchFromAPI(`${selectedCategory}`);
        setvedios(data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchData();
  }, [selectedCategory]);

  

  return (
    <>
      <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
        <Box sx={{ height: { sx: "auto", md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
          <Sidebar  selectedCategory={selectedCategory} setselectedCategory={setselectedCategory} />
         
        </Box>
        <Box p={2} sx={{ overflow: 'auto',height: '90vh', flex: 2}}>
          <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: 'white' }}>
            {selectedCategory} <span style={{ color: '#F31503' }}>Videos</span>
          </Typography>
          <Vedios vedios={vedios}  />
          <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: '#fff' }}>
            Copyright 2023 by SARMISTHA
          </Typography>
        </Box>
      </Stack>
    </>
  );
};

export default Feed;
