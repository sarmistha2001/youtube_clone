
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { FetchFromAPI } from "../utils/FetchFromAPI";
import Fetch from "../utils/fetch";
import { Link, useParams } from "react-router-dom";
import { ClassNames } from "@emotion/react";
import { CheckCircle } from "@mui/icons-material";
import Vedios from "./Vedios";
import "../index.css";

const VedioDetails = () => {
  const [videoDetails, setVideoDetails] = useState('');
  const [videos,setvedios]=useState('')
  const { id } = useParams();



  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Fetch(`${id}`);
        console.log(data);
        setVideoDetails(data.items[0]);
      } catch (error) {
        console.error('Error fetching video details:', error);
      }
    };
    fetchData();
    const fetchdata = async () => {
      try {
        const data = await FetchFromAPI(`New`);
        console.log(data.items)
        setvedios(data.items);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchdata();
  


   
  }, [id]);


  // Check if videoDetails is still null
  if (!videoDetails) {
    return <div>Loading...</div>;
  }

  const { snippet, statistics } = videoDetails;
  const { title, description } = snippet;
  const { viewCount, likeCount, dislikeCount } = statistics;

  return (
    <Box minHeight="95vh" >
      <Stack direction={{ xs: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer  width="100%"   url={`https://www.youtube.com/watch?v=${id}`} className="react-player"
              controls />
            <Typography variant="h5" color="#fff" fontWeight="bold">{title}</Typography>

            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2}>
              <Link to={`/channel/${videoDetails.snippet.channelId}`}>
                <Typography variant={{ sm: 'subtitle1' }} sx={{ opacity: 0.7  }} color="#fff" >
                  {videoDetails.snippet.channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}></CheckCircle>
                </Typography>

              </Link>

              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {videoDetails.statistics.viewCount} Views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {videoDetails.statistics.likeCount} Likes
                </Typography>

              </Stack>
            </Stack>
          </Box>
        </Box>

      
    
    <Box px={2} py={{md:1,xs:5}}  justifyContent="center" alignItems="center">
      <Vedios vedios={videos} direction="column" width="100%"  ></Vedios>

    </Box>
</Stack>

    </Box>
  );
};

export default VedioDetails;
