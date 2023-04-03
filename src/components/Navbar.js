import {
  AppBar,
  Toolbar,
  styled,
  alpha,
  Grid,
  Box,
  IconButton,
  Button,
  ListItemButton,
  ListItemText,
  List,
  Divider,
  ListItem,
  Drawer,
  CssBaseline,
} from "@mui/material";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
//import FacebookIcon from "@mui/icons-material/Facebook";
//import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { routePath } from "../constants/route";
import "../App.css";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo.jpg"

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 30,
  backgroundColor: alpha(theme.palette.common.white, 0.15),

  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const navItems = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "About",
    link: "/about",
  },
  {
    text: "Merch",
    link: "/merch",
  },
  {
    text: "Events",
    link: "/events",
  },
  {
    text: "Contacts",
    link: "/contacts",
  },
];

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#eee8aa"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const StyledToolbar = styled(Toolbar)`
  justify-content: space-between;
  margin-right: 100;
  margin-right: 100;
`;

const StyledHome = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: orangered;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
`;

const Navbar = () => {
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );

  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  const handleDrawer = () => setOpenDrawer(!openDrawer);

  return (
    <>
      {matches && (
        <AppBar style={{ backgroundColor: "black", minHeight: 53, position: 'sticky' }}>
          <StyledToolbar>
            <img src={logo} alt="logo" style={{ width: "70px", marginRight: "10px" }} />
            <p style={{ fontWeight: "bold", fontSize: "20px", marginLeft: "-50px", letterSpacing: "2px ", color: "#eee8aa" }}>ADHYAAY'23</p>

            <StyledHome style={{ color: "#eee8aa" }} to="/">Home</StyledHome>
            <StyledLink style={{ color: "#eee8aa" }} to="/about">About</StyledLink>
            <StyledLink style={{ color: "#eee8aa" }} to="/events">Events</StyledLink>
            <StyledLink style={{ color: "#eee8aa" }} to="/merch">Merch</StyledLink>
            <StyledLink style={{ color: "#eee8aa" }} to="/contacts">Contacts</StyledLink>
            <Link
              to="https://instagram.com/adhyaay_22?igshid=YmMyMTA2M2Y=';"
              style={{ color: "white" }}
            >
              {" "}
              <InstagramIcon style={{ color: "#eee8aa" }} />
            </Link>
          </StyledToolbar>
        </AppBar>
      )}
      {!matches && (
        <AppBar sx={{ backgroundColor: "black", height: "60px", position: "sticky" }}>
          <img src={logo} width={30} style={{ position: 'absolute', top: 0, right: "40%", width: "60px" }} />
          <MenuIcon onClick={handleDrawer} style={{ height: "50px", width: "50px" }} />
          {openDrawer && (
            <div style={{ backgroundColor: "black" }}>
              <List>
                <Link to="https://instagram.com/adhyaay_22?igshid=YmMyMTA2M2Y=';" style={{ marginLeft: "10px", textDecoration: "none", color: "#eee8aa" }}>    <InstagramIcon /> </Link>
                {navItems.map((item) => (
                  <Link to={item.link} onClick={handleDrawer} style={{ textDecoration: "none", color: "#eee8aa", fontWeight: "bold" }}>
                    <ListItem>

                      <ListItemText primary={item.text} />
                    </ListItem>

                  </Link>
                ))}
              </List>
            </div>
          )}
        </AppBar>
      )}
    </>
  );
};

export default Navbar;
