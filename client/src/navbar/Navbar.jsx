import React, { useEffect, useState } from "react";
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

import Drawer from "@mui/material/Drawer";

import { navTabs } from "./StyledNavbar";

function Navbar() {
  const navigate = useNavigate();

  const [page, setPage] = useState("");
  const [state, setState] = useState({
    left: false,
  });

  useEffect(() => {
    const routeToHomePage = () => {
      switch (page) {
        case "Om Oss":
          navigate("/about");
          setPage("");
          break;

        case "Kontakta Oss":
          navigate("/contact");
          setPage("");
          break;

        case "Nyheter":
          navigate("/news");
          setPage("");
          break;

        default:
      }
    };
    routeToHomePage();
  }, [navigate, page]);

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
                    mt: 1,
                    p: 0,
                  }}
                >
                  <div
                    style={{
                      color: "#45657e",
                      fontWeight: 600,
                      fontSize: "16px",
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
            href="/"
            sx={{
              mr: 20,
              display: { xs: "none", md: "flex" },
              padding: "10px",
              color: "inherit",
            }}
          ></Typography>
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
            href="/"
            sx={{
              padding: "5px",
              display: { xs: "flex", md: "none" },
              flexGrow: 1.5,
              color: "inherit",
              textDecoration: "none",
            }}
          ></Typography>
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
                  fontSize: "20px",
                }}
              >
                {tab2.text}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
