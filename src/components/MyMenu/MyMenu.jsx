import { Button, Menu, MenuItem } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

const MyMenu = ({ title, array }) => {
  const theme = createTheme({});
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = (e) => {
    if (e.currentTarget.localName !== "ul") {
      const menu = document.getElementById("simple-menu").children[2];
      const menuBoundary = {
        left: menu.offsetLeft,
        top: e.currentTarget.offsetTop + e.currentTarget.offsetHeight,
        right: menu.offsetLeft + menu.offsetHeight,
        bottom: menu.offsetTop + menu.offsetHeight,
      };
      if (
        e.clientX >= menuBoundary.left &&
        e.clientX <= menuBoundary.right &&
        e.clientY <= menuBoundary.bottom &&
        e.clientY >= menuBoundary.top
      ) {
        return;
      }
    }

    setOpen(false);
  };

  theme.props = {
    MuiList: {
      onMouseLeave: (e) => {
        handleClose(e);
      },
    },
  };
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Button
          id="menubutton1"
          aria-owns={open ? "simple-menu" : null}
          aria-haspopup="true"
          onMouseOver={handleOpen}
          onMouseLeave={handleClose}
          sx={{
            backgroundColor: "transparent",
            color: "hsla(0, 0%, 100%, 0.9)",
            fontSize: "15px",
            border: "none",
          }}
        >
          {title}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={open}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          {array.map(({ title, link }) => {
            return (
              <MenuItem>
                <HashLink
                  to={link}
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  {title}
                </HashLink>
              </MenuItem>
            );
          })}
        </Menu>
      </ThemeProvider>
    </div>
  );
};

export default MyMenu;
