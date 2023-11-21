import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useNavigate } from "react-router";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";

import Tooltip from "@mui/material/Tooltip";
import { language } from "./StyledNavbar";

function Navbar() {
  const navigate = useNavigate();
  const [t, i18n] = useTranslation("translation");
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [page, setPage] = useState("");
  const [lang, setLang] = useState("");
  const [state, setState] = useState({
    left: false,
  });

  const navTabs = [
    {
      text: `${t("navTabs.bar1")}`,
    },
    {
      text: `${t("navTabs.bar2")}`,
    },
    {
      text: `${t("navTabs.bar3")}`,
    },
  ];

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    const routeToHomePage = () => {
      switch (page) {
        case "home":
          navigate("/");
          setPage("");
          break;

        case "Om Oss":
        case "About Us":
        case "معلومات عنا":
          navigate("/about");
          setPage("");
          break;

        case "Kontakta Oss":
        case "Contact Us":
        case "اتصل بنا":
          navigate("/contact");
          setPage("");
          break;

        case "Våra Tjänster":
        case "Our Services":
        case "خدماتنا":
          navigate("/services");
          setPage("");
          break;

        default:
      }
    };
    routeToHomePage();
  }, [navigate, page]);

  useEffect(() => {
    const changeLanguage = () => {
      switch (lang) {
        case "se":
          setLang(i18n.changeLanguage("se"));

          break;

        case "en":
          setLang(i18n.changeLanguage("en"));
          break;

        case "ar":
          setLang(i18n.changeLanguage("ar"));
          break;

        default:
      }
    };
    changeLanguage();
  }, [i18n, lang]);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        mr: 2,
        mt: 1,
        alignItems: "left",
        backgroundColor: "none",
        boxShadow: "none",
        display: {
          xs: "flex",
          md: "none",
        },
      }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {navTabs &&
          navTabs.map((tab, index) => (
            <ListItem
              key={index}
              disablePadding
              onClick={() => setPage(tab.text)}
              to={tab.route}
            >
              <ListItemButton>
                <Button
                  sx={{
                    mt: 2,
                    p: 0,
                  }}
                >
                  <div
                    style={{
                      color: "#45657e",
                      fontWeight: 600,
                      fontSize: "15px",
                    }}
                  >
                    {tab.text}
                    <Divider
                      sx={{
                        color: "#45657e",
                      }}
                    />
                  </div>
                </Button>
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Box>
  );
  console.log(lang);
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        fontFamily: "Varela Round, sans-serif",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Mobil skärm  */}

          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 90,
              display: { xs: "none", md: "flex" },
            }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                fontWeight: 600,
                color: "#45657E",
                fontSize: "1.4rem",
              }}
            >
              Balsam care AB
            </Link>
          </Typography>
          <Box
            sx={{
              bgcolor: "transparent",
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
            >
              {["left"].map((anchor) => (
                <React.Fragment key={anchor}>
                  <MenuIcon onClick={toggleDrawer(anchor, true)}>
                    {anchor}
                  </MenuIcon>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    {list(anchor)}
                  </Drawer>
                </React.Fragment>
              ))}
            </IconButton>
          </Box>

          {/* mobil */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1.5,
            }}
          >
            <Link
              to="/"
              style={{
                textDecoration: "none",
                fontWeight: 600,
                color: "#45657E",
              }}
            >
              Balsam care AB
            </Link>
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {navTabs.map((tab2, index2) => (
              <Button
                key={index2}
                onClick={() => setPage(tab2.text)}
                to={tab2.route}
                style={{
                  color: "#45657e",
                  margin: "20px",
                  fontWeight: 600,
                  fontSize: "1rem",
                }}
              >
                {tab2.text}
              </Button>
            ))}
          </Box>
          <div>
            <>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <Button
                    sx={{
                      backgroundColor: "#45657E",
                      color: "white",
                      border: " 1px solid #45657E",
                      fontWeight: 600,
                      ":hover": {
                        bgcolor: "white", // theme.palette.primary.main
                        color: "#45657E",
                      },
                    }}
                    onClick={handleOpenUserMenu}
                  >
                    {t("current.language")}
                  </Button>
                </Tooltip>
                <Menu
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
                  {" "}
                  {language.map((lang) => (
                    <MenuItem key={lang.text} onClick={handleCloseUserMenu}>
                      <Typography
                        textAlign="center"
                        onClick={() => setLang(lang.text)}
                        width="2rem"
                      >
                        {lang.text}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
