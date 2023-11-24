/*
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Vedios = ({ vedios }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {vedios.map((item, idx) => (
        <Box key={idx}>
          {item.id && item.id.videoId && <VideoCard video={item}/> }
          {item.id && item.id.channelId && <ChannelCard channelDetails={item}/> }
        </Box>
      ))}
    </Stack>
  );
};

export default Vedios;
*/
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import Typography from "@mui/material/Typography";
import "../index.css"

const Vedios = ({ vedios,direction }) => {
  if(!vedios?.length)  return 'Loading...'
  return (
    <Stack direction={direction||"row"} flexWrap="wrap" justifyContent="start" gap={2}>
      {vedios && vedios.length > 0 ? (
        vedios.map((item, idx) => (
          <Box key={idx} sx={{'@media screen and (max-width: 600px)': {
            width: '100%'}}}>
            {item.id && item.id.videoId && <VideoCard video={item}  /> }
            {item.id && item.id.channelId && <ChannelCard channelDetails={item}/> }
          </Box>
        ))
      ) : (
        <Box>
          {/* You can render a message or component indicating no videos found */}
          <Typography>No videos found for the selected category</Typography>
        </Box>
      )}
    </Stack>
  );
};

export default Vedios;
