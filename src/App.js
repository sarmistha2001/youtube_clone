import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar"


import Feed from "./components/Feed";
import VedioDetails from "./components/VedioDetails"
import ChannelDetails from "./components/ChannelDetails"
import SearchFeed from  "./components/SearchFeed"
export default function App() {
  
  return (
  <BrowserRouter>
  <Box sx={{backgroundColor:'#000'}}>
<Navbar/>

<Routes>
  <Route path="/youtube_clone" exact element={<Feed/>}></Route>
  <Route path="/video/:id" exact element={<VedioDetails/>}></Route>
  <Route path="/channel/:id" exact element={<ChannelDetails/>}></Route>
  <Route path="/search/:searchTerm" exact element={<SearchFeed/>}></Route>
</Routes>

  </Box>
    </BrowserRouter>
  )
}
