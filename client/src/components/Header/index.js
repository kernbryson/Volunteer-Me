import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Auth from "../../utils/auth";

import { Link } from "react-router-dom";
const pages = ["Me", "Login", "Signup"];

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const toolbarStyle = {
    minHeight: "80px",
  };

  return (
    <Box sx={{ display: 'flex' }}>
    <AppBar position="static" style={{ background: "#2E3B55" }}>
      <Container maxWidth="xl">
        <Toolbar
          style={toolbarStyle}
          disableGutters
          sx={{ flexGrow: 1, color: "inherit" }}
        >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            VolunteerMe
          </Typography>

          {/* Hamburger Menu Icon */}

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
              }}
            >
              {/* Hamburger Menu Map*/}

              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  {Auth.loggedIn() ? (
                    <>
                      <Link to="/me">
                        <Button
                          onClick={handleCloseNavMenu}
                          sx={{ my: 2, color: "inherit", display: "block" }}
                        >
                          Create Activity
                        </Button>
                      </Link>
                      <Link to={logout}>
                        <Button
                          onClick={(handleCloseNavMenu, logout)}
                          sx={{ my: 2, color: "inherit", display: "block" }}
                        >
                          Log Out
                        </Button>
                      </Link>

                      {/* If not logged in */}
                    </>
                  ) : (
                    <>
                      <Link to="/me">
                        <Button
                          onClick={handleCloseNavMenu}
                          sx={{ my: 2, color: "inherit", display: "block" }}
                        >
                          Create Activity
                        </Button>
                      </Link>
                      <Link to="/login">
                        <Button
                          onClick={handleCloseNavMenu}
                          sx={{ my: 2, color: "inherit", display: "block" }}
                        >
                          Log In
                        </Button>
                      </Link>
                      <Link to="/signup">
                        <Button
                          onClick={handleCloseNavMenu}
                          sx={{ my: 2, color: "inherit", display: "block" }}
                        >
                          Sign Up
                        </Button>
                      </Link>
                    </>
                  )}
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* VolunteerMe Logo Centered when mobile */}

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
          >
            VolunteerMe
          </Typography>

{/* Nav Links */}

          <Box sx={{ justifyContent: 'flex-end', flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* If logged in show this */}
            {Auth.loggedIn() ? (
              <>
                <Link to="/me">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Create Activity
                  </Button>
                </Link>
                <Link to={logout}>
                  <Button
                    onClick={(handleCloseNavMenu, logout)}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Log Out
                  </Button>
                </Link>

                {/* If not logged in */}
              </>
            ) : (
              <>
                <Link to="/me">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Create Activity
                  </Button>
                </Link>
                <Link to="/login">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Log In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </Box>
  );
};
export default Header;

// import React from "react";
// import { Link } from "react-router-dom";

// import Auth from "../../utils/auth";

// const Header = () => {
//   const logout = (event) => {
//     event.preventDefault();
//     Auth.logout();
//   };
//   return (
//     <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
//       <div className="container flex-row justify-space-between-lg justify-center align-center">
//         <div>
//           <Link className="text-light" to="/">
//             <h1 className="m-0">VolunteerMe</h1>
//           </Link>
//           <p className="m-0">Your place for volunteer work</p>
//         </div>
//         <div>
//           {Auth.loggedIn() ? (
//             <>
//               <Link className="btn btn-lg btn-info m-2" to="/me">
//                 {Auth.getProfile().data.username}'s profile
//               </Link>
//               <button className="btn btn-lg btn-light m-2" onClick={logout}>
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link className="btn btn-lg btn-info m-2" to="/login">
//                 Login
//               </Link>
//               <Link className="btn btn-lg btn-light m-2" to="/signup">
//                 Signup
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
