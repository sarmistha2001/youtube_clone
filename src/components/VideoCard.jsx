import { Card } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {Link} from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import {demoThumbnailUrl,demoVideoUrl,demoVideoTitle,demoChannelUrl,demoChannelTitle} from '../utils/constants'
import "../index.css"



const VideoCard = ({video:{id:{videoId},snippet}}) => {
  console.log(videoId,snippet)
    return (
      <Card className="card"  sx={{width:{md:'250px',xs:'100%',sm:'320px'},boxShadow:"none",borderRadius:0 ,}}>
   <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
   <CardMedia 
  sx={{width:{xs:'100%',md:'100%',sm:'358px'},height:180}}
   
   alt={snippet?.title}
   image={snippet?.thumbnails?.high?.url}/>
    </Link>
    <CardContent sx={{backgroundColor:"#1e1e1e",height:'106px'}}>
      <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId?`/channel/${snippet?.channelId}`:demoChannelUrl}>
        <Typography variant="subtitle2" fontWeight="bold" color="gray">
          {snippet?.demoChannelTitle||demoChannelTitle}
          <CheckCircle sx={{fontSize:12,color:'gray',ml:'5px'}}></CheckCircle>
        </Typography>
      </Link>
    </CardContent>
      </Card>
    );
  };
  
  export default VideoCard;
  

  
  