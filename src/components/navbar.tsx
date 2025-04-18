import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { NavLink } from "react-router";
import { useAuth } from "../wrapper/authWrapper";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router";

const pages = [
  {
    label: "Dashboard",
    link: "/dashboard",
  },
  {
    label: "Profile",
    link: "/profile",
  },
  {
    label: "Settings",
    link: "/settings",
  },
];
const settings = [
  {
    label: "Login",
    link: "/login",
  },
  {
    label: "Registration",
    link: "/registration",
  },
];

function Navbar() {
  const navigate = useNavigate();
  const { isUserLoggedIn, setIsUserLoggedIn } = useAuth();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

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

  const authenticateUser = () => {
    setIsUserLoggedIn(true);
    navigate("/dashboard");
  };

  const removeUser = () => {
    setIsUserLoggedIn(false);
    navigate("/login");
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      style={{
        position: "absolute",
        top: 0,
        width: "100%",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Stack flexDirection="row" alignItems="center">
              <Stack
                onClick={authenticateUser}
                flexDirection="row"
                alignItems="center"
              >
                <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
                <Typography
                  variant="h6"
                  noWrap
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
                  LOGO
                </Typography>
              </Stack>

              {isUserLoggedIn && (
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
                    sx={{ display: { xs: "block", md: "none" } }}
                  >
                    {pages.map((page) => (
                      <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                        <NavLink
                          to={page.link}
                          className={({ isActive }) =>
                            isActive ? "active" : ""
                          }
                          style={{
                            color: "white",
                          }}
                        >
                          {page.label}
                        </NavLink>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              )}

              <Stack onClick={authenticateUser}>
                <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
                <Typography
                  variant="h5"
                  noWrap
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
                  LOGO
                </Typography>
              </Stack>

              {isUserLoggedIn && (
                <Box
                  sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                  gap={2}
                >
                  {pages.map((page) => (
                    <NavLink
                      key={page.label}
                      to={page.link}
                      className={({ isActive }) => (isActive ? "active" : "")}
                      style={{
                        color: "white",
                      }}
                      onClick={handleCloseNavMenu}
                    >
                      {page.label}
                    </NavLink>
                  ))}
                </Box>
              )}
            </Stack>
            <Stack>
              {isUserLoggedIn ? (
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/2.jpg"
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
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
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={removeUser}
                    >
                      Logout
                    </Button>
                  </Menu>
                </Box>
              ) : (
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  {settings.map((setting) => (
                    <Button
                      key={setting.label}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: "white", display: "block" }}
                    >
                      <NavLink
                        to={setting.link}
                        className={({ isActive }) => (isActive ? "active" : "")}
                        style={{
                          color: "white",
                        }}
                      >
                        {setting.label}
                      </NavLink>
                    </Button>
                  ))}
                </Box>
              )}
            </Stack>
          </Stack>

          {/* condition ? this will render (true condition) : other renderable (false condition) */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
