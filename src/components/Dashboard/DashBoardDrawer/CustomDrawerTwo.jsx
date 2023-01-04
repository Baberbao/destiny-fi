import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  SwipeableDrawer,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import clsx from "clsx";
import logo from "../../../images/logo.svg";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { makeStyles } from "@mui/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { HashLink } from "react-router-hash-link";
import PersonaleTimeline from "./PersonaleTimeline";
import GlobalTimeline from "./GlobalTimeline";
import rank from "./assets/rank.png";
const useStyles = makeStyles({
  list: {
    width: "100%",
  },
  fullList: {
    width: "100%",
  },
  paper: {
    background: "#252034 !important",
    width: "100%",
    // justifyContent: "center",
  },
});

const CustomDrawerTwo = () => {
  //----------------------accordion setup------------------------

  const [expanded, setExpanded] = React.useState(false);
  const [open, setopen] = React.useState(false);

  const check = useMediaQuery("(max-width:750px)");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  //-------------------------END--------------------------------------

  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
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
      // className={clsx(classes.list, {
      //   [classes.fullList]: anchor === "top" || anchor === "bottom",
      // })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box
        py="20px"
        height={"100%"}
        sx={{
          background: "#2E2F42",
        }}
      >
        <Box display={!open ? "" : ""} px="10px">
          <Stack pt="100px" alignItems={"center"} justifyContent="center">
            <img src={rank} alt="" />
          </Stack>
          <Box mt="5px">
            <Typography
              variant="body1"
              textAlign={"center"}
              color="#81758D"
              sx={{
                borderBottom: "1px #81758D solid",
              }}
            >
              RANK:
              <span>
                <HashLink
                  style={{
                    textDecoration: "none",
                    color: "white",
                    "&:hover": {
                      color: "#81758D",
                    },
                  }}
                  to={"/dashbord/rank"}
                >
                  GOLD
                </HashLink>
              </span>
            </Typography>
            <Typography variant="body1" textAlign={"center"} color="#81758D">
              <HashLink
                style={{
                  textDecoration: "none",
                  color: "#81758D",
                }}
                to={"/dashbord/accountinformation"}
              >
                Affiliate Details
              </HashLink>
            </Typography>
          </Box>
          <Box mt="30px">
            <Typography variant="body1" color="white">
              Personal Statistics:
            </Typography>

            <Box ml="-20px" mt="20px">
              <PersonaleTimeline />
            </Box>
          </Box>
          <Box mt="30px">
            <Typography variant="body1" color="white">
              Global Statistics:
            </Typography>

            <Box ml="-20px" mt="20px">
              <GlobalTimeline />
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} style={{ zIndex: 1 }}>
            {/* <MenuOpenIcon
              style={{
                fontSize: "38px",
                cursor: "pointer",
                color: "white",
              }}
            ></MenuOpenIcon> */}
            <Box
              component={Paper}
              sx={{
                clipPath:
                  "polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%)",
                backgroundColor: "#8571FD",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "38px",
                height: "40px",
                boxShadow: "5",
                "&:hover": {
                  backgroundColor: "#574d97",
                },
              }}
            >
              <MenuOpenIcon
                sx={{
                  fontSize: "27px",
                  color: "white",
                  // transform: "rotate(180deg)",
                }}
              />
            </Box>
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
    </div>
  );
};

export default CustomDrawerTwo;
