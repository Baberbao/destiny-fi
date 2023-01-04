import React, { useContext, useState } from "react";
import Container from "@mui/material/Container";
import Hidden from "@mui/material/Hidden";
import useMediaQuery from "@mui/material/useMediaQuery";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Paper,
  Box,
  Accordion,
  Stack,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import clsx from "clsx";
import "./Dropdown.css";
import { HashLink } from "react-router-hash-link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// import { AppContext } from "../utils";

import defi from "../assets/defi.png";
import logo from "../images/logo.svg";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  paper: {
    background: "#252034 !important",
    // justifyContent: "center",
  },
});

export default function Header({ fixed }) {
  // const { account, connect, disconnect } = useContext(AppContext);

  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const matches1 = useMediaQuery("(max-width:1279px)");
  const logoMatch = useMediaQuery("(min-width:500px)");

  const [expanded, setExpanded] = React.useState("false");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box display="flex" justifyContent="center" my={10}>
        <HashLink to={"/"} style={{ textDecoration: "none" }}>
          <img width="150px" src={logo} alt="" />
        </HashLink>
      </Box>
      <List>
        <ListItem
          button
          style={{
            justifyContent: "center",
          }}
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <HashLink to={"/"} style={{ textDecoration: "none" }}>
            <Box fontSize="16px" color="#fff">
              HOME
            </Box>
          </HashLink>
        </ListItem>

        <ListItem
          button
          style={{
            justifyContent: "center",
          }}
        >
          <Accordion
            expanded={expanded === `panel${1}`}
            onChange={handleChange(`panel${1}`)}
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              height: "auto",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ArrowDropDownIcon sx={{ color: "white", fontSize: "20px" }} />
              }
              sx={{
                backgroundColor: "transparent",
                boxShadow: "none",
              }}
            >
              <Box px="10px" textAlign="center" fontSize="16px" color="#fff">
                PRODUCT
              </Box>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                backgroundColor: "transparent",
              }}
            >
              <Stack alignItems="center" justifyContent={"center"}>
                <HashLink
                  onClick={toggleDrawer(anchor, false)}
                  onKeyDown={toggleDrawer(anchor, false)}
                  style={{ textDecoration: "none" }}
                  to={"/defifireFX"}
                >
                  <Box fontSize="15px" color="#fff">
                    Defi Fire FX
                  </Box>
                </HashLink>
              </Stack>
            </AccordionDetails>
          </Accordion>
        </ListItem>

        <ListItem
          button
          style={{
            justifyContent: "center",
          }}
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <HashLink to={"/login"} style={{ textDecoration: "none" }}>
            <Box fontSize="16px" color="#fff">
              LOGIN
            </Box>
          </HashLink>
        </ListItem>

        <ListItem
          button
          style={{
            justifyContent: "center",
          }}
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <HashLink to={"/joinacademy"} style={{ textDecoration: "none" }}>
            <Box fontSize="16px" color="#fff">
              JOIN NOW
            </Box>
          </HashLink>
        </ListItem>
      </List>
      {/* <Box mb={1} display="flex" justifyContent="center">
        {account ? (
          <Box
            width="90%"
            height="42px"
            bgcolor="#098CDC"
            borderRadius="8px"
            sx={{ cursor: "pointer" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            color="#ffffff"
            fontWeight="500"
            fontSize="16px"
            onClick={() => disconnect()}
            style={{ zIndex: 1 }}
          >
            {account.slice(0, 4) + "..." + account.slice(-4)}
          </Box>
        ) : (
          <Box
            zIndex={1}
            style={{
              cursor: "pointer",
            }}
            bgcolor="#098CDC"
            width="90%"
            height="42px"
            fontWeight="500"
            borderRadius="8px"
            fontSize="20px"
            color="#ffffff"
            display="flex"
            justifyContent="center"
            alignItems="center"
            onClick={() => connect()}
          >
            Connect
          </Box>
        )}
      </Box> */}
    </div>
  );

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        style={{
          background: colorChange
            ? "#1B1424"
            : fixed
            ? "#1B1424"
            : "transparent",
          zIndex: 100,
          position: "fixed",
        }}
        height="90px"
        width="100%"
      >
        <Container maxWidth="xl">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              // flexBasis="20%"
            >
              <HashLink to={"/"} style={{ textDecoration: "none" }}>
                <Box
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#000000",
                    fontSize: "20px",
                  }}
                >
                  <Typography variant="h2" color="white">
                    DEFI <span style={{ color: "#E37336" }}>FIRE</span>
                  </Typography>
                </Box>
              </HashLink>
            </Box>
            <Box
              display="flex"
              justifyContent={matches1 ? "end" : "space-between"}
              alignItems="center"
              // flexBasis={matches1 ? "45px" : "78%"}
            >
              <Box
                display="flex"
                justifyContent="space-around"
                // flexBasis={matches1 ? "0px" : "70%"}
                alignItems="center"
              >
                <Hidden mdDown>
                  <HashLink to={"/"} style={{ textDecoration: "none" }}>
                    <Box
                      mr={3}
                      fontSize="17px"
                      sx={{
                        textDecoration: "none",
                        cursor: "pointer",
                        color: "white",
                        "&:hover": {
                          color: "#e09504",
                        },
                      }}
                    >
                      HOME
                    </Box>
                  </HashLink>

                  <div class="dropdown">
                    <button class="dropbtn">PRODUCT</button>
                    <div class="dropdown-content">
                      <a>
                        {" "}
                        <HashLink
                          to={"/defifireFX"}
                          style={{
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <img width="30px" src={defi} alt="" />
                          <span style={{ fontSize: "15px" }}>Defi Fire FX</span>
                        </HashLink>
                      </a>
                    </div>
                  </div>

                  <HashLink to={"/login"} style={{ textDecoration: "none" }}>
                    <Box
                      mr={3}
                      fontSize="17px"
                      zIndex="1"
                      sx={{
                        textDecoration: "none",
                        cursor: "pointer",
                        color: "white",
                        "&:hover": {
                          color: "#e09504",
                        },
                      }}
                    >
                      LOGIN
                    </Box>
                  </HashLink>
                  <HashLink
                    to={"/joinacademy"}
                    style={{ textDecoration: "none" }}
                  >
                    <Box
                      fontSize="17px"
                      zIndex="1"
                      sx={{
                        textDecoration: "none",
                        cursor: "pointer",
                        color: "white",
                        "&:hover": {
                          color: "#e09504",
                        },
                        borderBottom: "2px solid #e09504",
                      }}
                    >
                      JOIN NOW
                    </Box>
                  </HashLink>

                  {/* {account ? (
                    <Box
                      width="130px"
                      height="42px"
                      bgcolor="#098CDC"
                      borderRadius="8px"
                      sx={{ cursor: "pointer" }}
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      color="#ffffff"
                      fontWeight="500"
                      fontSize="16px"
                      onClick={() => disconnect()}
                      style={{ zIndex: 1 }}
                    >
                      {account.slice(0, 4) + "..." + account.slice(-4)}
                    </Box>
                  ) : (
                    <Box
                      zIndex={1}
                      style={{
                        cursor: "pointer",
                      }}
                      bgcolor="#098CDC"
                      width="130px"
                      height="42px"
                      fontWeight="500"
                      borderRadius="8px"
                      fontSize="20px"
                      color="#ffffff"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      onClick={() => connect()}
                    >
                      Connect
                    </Box>
                  )} */}
                </Hidden>
              </Box>

              <Hidden mdUp>
                {["left"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <Button
                      onClick={toggleDrawer(anchor, true)}
                      style={{ zIndex: 1 }}
                    >
                      <MenuIcon
                        style={{
                          fontSize: "38px",
                          cursor: "pointer",
                          color: "white",
                        }}
                      ></MenuIcon>
                    </Button>
                    <Paper style={{ background: "#1C0D38" }}>
                      <SwipeableDrawer
                        classes={{ paper: classes.paper }}
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                      >
                        {list(anchor)}
                      </SwipeableDrawer>
                    </Paper>
                  </React.Fragment>
                ))}
              </Hidden>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
