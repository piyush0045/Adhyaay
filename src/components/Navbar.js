import { AppBar, Toolbar,styled,alpha, Grid,Box} from "@mui/material";
import { Link } from "react-router-dom";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";
import { routePath } from "../constants/route";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 30,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: "absolute",
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));



const Navbar = () => {
    const navigate = useNavigate();

    return ( 
        
        
        <AppBar style = {{backgroundColor:"black",minHeight:53}} >
            
            <Toolbar  style = {{justifyContent:"space-between",marginLeft:100,marginRight:100}}>
                <Link className="home" to = "/"  style = {{textDecoration:"none",fontWeight:"bold",color:"orangered"}} >Home</Link>
                <Link to = "/about"  style = {{textDecoration:"none",fontWeight:"bold",color:"white"}}>About</Link>
                <Link to = "/portfolio"  style = {{textDecoration:"none",fontWeight:"bold",color:"white"}} >Portfolio</Link>
                <Link to = "/service"  style = {{textDecoration:"none",fontWeight:"bold",color:"white"}} >Service</Link>
                <Link to = "/contacts"  style = {{textDecoration:"none",fontWeight:"bold",color:"white"}} >Contacts</Link>
                <TwitterIcon/>
                <FacebookIcon/>
                <PinterestIcon/>
            <Link to = "https://instagram.com/adhyaay_22?igshid=YmMyMTA2M2Y=';" style = {{color:"white"}}> <InstagramIcon /></Link> 
                <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Grid  style = {{fontWeight:"bold",borderRadius:20,backgroundColor:"orangered",padding:10,width:80}}>BLOG</Grid>



            </Toolbar>
        </AppBar>
        
     );
}
 
export default Navbar;