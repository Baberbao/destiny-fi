import React from "react";
import {
  Box,
  Button,
  Paper,
  SwipeableDrawer,
  Typography,
  Slider,
} from "@mui/material";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { makeStyles } from "@mui/styles";
import { HashLink } from "react-router-hash-link";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import CandlestickChartIcon from "@mui/icons-material/CandlestickChart";

const useStyles = makeStyles({
  list: {
    width: 350,
  },
  fullList: {
    width: "auto",
  },
  paper: {
    background: "#252034 !important",
  },
});

const CustomDrawerTwo = () => {
  const [open, setopen] = React.useState(false);

  const classes = useStyles();
  const [percentage, setPercentage] = React.useState(14);

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
          <Typography pt="100px" ml={2} variant="subtitle1" color="#81758D">
            YOUR OPTIONS:
          </Typography>

          <HashLink to="/member" style={{ textDecoration: "none" }}>
            <Typography
              mt="20px"
              ml={2}
              variant="body2"
              sx={{
                color: "#9D9DA6",
                display: "flex",
                alignItems: "center",
                "&:hover": {
                  color: "#ec9f40",
                },
              }}
            >
              <DesktopMacIcon style={{ marginRight: "10px" }} />
              Eductaion
            </Typography>
          </HashLink>

          <HashLink
            to="/member/live-lessons"
            style={{ textDecoration: "none" }}
          >
            <Typography
              mt="15px"
              ml={2}
              variant="body2"
              color="#9D9DA6"
              sx={{
                color: "#9D9DA6",
                display: "flex",
                alignItems: "center",
                "&:hover": {
                  color: "#ec9f40",
                },
              }}
            >
              <DashboardOutlinedIcon style={{ marginRight: "10px" }} /> Live
              Lessons
            </Typography>
          </HashLink>

          <HashLink
            to="/member/product/defifire-fx"
            style={{ textDecoration: "none" }}
          >
            <Typography
              mt="15px"
              ml={2}
              variant="body2"
              color="#9D9DA6"
              sx={{
                color: "#9D9DA6",
                display: "flex",
                alignItems: "center",
                "&:hover": {
                  color: "#ec9f40",
                },
              }}
            >
              <CandlestickChartIcon style={{ marginRight: "10px" }} /> Forex
              Trading
            </Typography>
          </HashLink>

          <HashLink to="/member" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                marginTop: "30px",
                marginLeft: "16px",
                padding: "10px",
                width: "180px",
                backgroundColor: "#689A36",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                color: "white",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "#689A36a1",
                },
              }}
            >
              <Typography
                variant="body2"
                color="white"
                textTransform="capitalize"
                textAlign="left"
              >
                Explore Our <br /> Academy
              </Typography>
              <KeyboardArrowRightIcon />
            </Button>
          </HashLink>

          <Typography mt="40px" ml={2} variant="subtitle1" color="#81758D">
            CONTINUE YOUR STUDIES:
          </Typography>

          <HashLink to="/member" style={{ textDecoration: "none" }}>
            <Box
              mt={4}
              ml={2}
              p={1.2}
              sx={{
                width: "180px",
                backgroundColor: "#2A2735",
                borderRadius: "10px",
                "&:hover": {
                  backgroundColor: "#2A2735a1",
                  borderLeft: "2px solid #840a9f",
                  borderRight: "2px solid #840a9f",
                },
              }}
            >
              <Typography
                variant="body2"
                color="white"
                textTransform="capitalize"
              >
                Foundations
              </Typography>

              <Typography
                variant="subtitle2"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  color: "#707078",
                }}
              >
                <span>{percentage}% completed</span>
                <KeyboardArrowRightIcon />
              </Typography>

              <Slider
                aria-label="Volume"
                value={percentage}
                sx={{
                  width: "100%",
                  height: "2px",
                  color: "#7A7A7A",
                  "& .MuiSlider-track": {
                    border: "none",
                    height: "12px",
                    backgroundColor: "transparent",
                    backgroundImage: "linear-gradient(90deg,#e09504,#e7ca05)",
                  },
                  "& .MuiSlider-thumb": {
                    width: "8px",
                    height: "8px",
                    color: "#e09504",
                    marginLeft: "-7px",
                  },
                }}
              />
            </Box>
          </HashLink>
        </Box>
      </Box>
    </div>
  );
  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} style={{ zIndex: 1 }}>
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
