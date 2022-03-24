import Logo from "../../atoms/Logo/Logo";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import CustomButton from "../../atoms/Button/CustomButton";
import Explore from "../Explore/Explore";
import CustomSearch from "../../atoms/Search/CustomSearch";
import { useNavigate } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  image: string;
  status: string;
  value: number;
}
const Header = () => {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] =
    React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] =
    React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = async()=>{
    const response = await axios.get("http://localhost:8086/books?status=finished");
    const results =await response.data;
    results.map( async(result:Book)=>{
     
      await axios.put("http://localhost:8086/books/"+result.id,{
        title: result.title,
        author: result.author,
        category: result.category,
        image: result.image,
        value: 0,
        status:"explore",
      })
    });
    logout({ returnTo: window.location.origin });
  }
  return (
    <AppBar position="sticky" data-testid="header">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Logo />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                maxWidth: "fit-content",
              }}
            ></Menu>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              fontSize: "20px",
              marginLeft: "5px",
            }}
          >
            <CustomSearch />
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              width: "150px",
            }}
          >
            <Explore />
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <CustomButton
              aria-controls="customized-menu"
              aria-haspopup="true"
              onClick={() => navigate("/")}
              sx={{
                color: "black",
                border: "none",
                borderRadius: "0px 0px 0px 0px",
                display: "block",
                marginLeft: "40px",
                width: "120px",
                "&:hover": {
                  color: "black",
                  backgroundColor: "white",
                  borderBottom: "3px solid #22C870",
                },
              }}
            >
              MyLibrary
            </CustomButton>
          </Box>

          <Box sx={{ position: "absolute", right: "100px" }}>
            <Tooltip title="Account details">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {!isAuthenticated && <Avatar alt="M" src="" />}
                {isAuthenticated && <Avatar alt={user?.nickname} src="m" />}
                <ExpandMoreIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {!isAuthenticated && (
                <MenuItem onClick={handleCloseUserMenu}>
                  <CustomButton
                    sx={{
                      border: "none",
                      color: "black",
                      "&:hover": {
                        color: "black",
                        backgroundColor: "white",
                      },
                    }}
                    onClick={() => {
                      loginWithRedirect();
                    }}
                  >
                    Login
                  </CustomButton>
                </MenuItem>
              )}
              {isAuthenticated && (<div>
                <MenuItem key="user">{user?.name}</MenuItem>
                <MenuItem key="logout" onClick={handleCloseUserMenu}>
                  
                  <CustomButton
                    sx={{
                      border: "none",
                      color: "black",
                      "&:hover": {
                        color: "black",
                        backgroundColor: "white",
                      },
                    }}
                    onClick={() => {
                      console.log(user);
                      handleLogout();
                    }}
                  >
                    Logout
                  </CustomButton>
                </MenuItem>
                </div>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
