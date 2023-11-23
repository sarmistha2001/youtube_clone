import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
import "../index.css"


const Sidebar=({selectedCategory,setselectedCategory})=>{
    return(
       <Stack direction='row'
       sx={{overflow:"auto",height:{sx:'auto',md:'95%'},
       flexDirection:{md:'column'}
       }}>
        {categories.map((category)=>(
            <button className="category-btn"  style={{background:category.name===selectedCategory && '#FC1503',color:'white', display:'flex' ,justifyContent:'left'}} key={category.name}
            onClick={()=>setselectedCategory(category.name)}>
                <span  className="span1" style={{padding:'5px',color:category.name===selectedCategory  ? 'white':'red',marginRight:'10px',marginTop:'-5px' }}>{category.icon}</span>
                <span style={{padding:'5px'}}>{category.name}</span>
            </button>

       ) )}

       </Stack>
    )
}
export default Sidebar;