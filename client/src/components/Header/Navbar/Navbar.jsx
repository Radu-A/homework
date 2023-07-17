import React, { useContext, useEffect, useState } from "react";
import homework1 from "../../../assets/homework-1.png";
import { UserLoggedContext } from "../../../context/userLoggedContext";
import { Link } from "react-router-dom";
// Material UI
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { UserContext } from "../../../context/userContext";

const Navbar = () => {
  const [pages, setPages] = useState([]);
  const [settings, setSettigs] = useState([]);

  const { userLogged, updateUserLogged } = useContext(UserLoggedContext);
  const { user, updateUser } = useContext(UserContext);

  useEffect(() => {
    if (userLogged !== "") {
      setPages([
        { name: "My Projects", url: "/user" },
        { name: "New Project", url: "/newproject" },
      ]);
      setSettigs([
        { name: "My Projects", url: "/user" },
        { name: "New Project", url: "/newproject" },
        { name: "Log Out", url: "/logout" },
      ]);
    } else {
      setPages([
        { name: "Sign Up", url: "/signin" },
        { name: "Login", url: "/login" },
      ]);
      setSettigs([
        { name: "Sign Up", url: "/signin" },
        { name: "Login", url: "/login" },
      ]);
    }
  }, [userLogged]);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <div className="logo-div">
            <div>
              <img className="logo-div-img" src={homework1} alt="" />
            </div>
            <h1>
              <Link className="nav-link" to="/">
                Homework
              </Link>
            </h1>
          </div>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link className="nav-link" to={page.url}>
                  {page.name}
                </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {user.photo ? (
                  <Avatar alt="Remy Sharp" src={user.photo} />
                ) : (
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                )}
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
              {settings.map((setting) => (
                <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link className="nav-link" to={setting.url}>
                      {setting.name}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
