import {
  Container,
  IconButton,
  Paper,
  Stack,
  Table,
  TableContainer,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import Treecomponent from "./Treecomponent";
//tabs

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Transction from "../Information/Transction";
import Treeview from "./Treeview";
import Detailedview from "./Detailedview";
import icon1 from "./assets/tree1.png";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { url } from "../../../ConnectivityAss/environment";
import axios from "axios";

const data = [
  {
    img: icon1,
    text: "- Direct Sale",
  },
  {
    img: icon1,
    text: "- Overflow",
  },
  {
    img: icon1,
    text: "- Passup: Ahead of Inviter",
  },
  {
    img: icon1,
    text: "- Reenter from cycle",
  },
  {
    img: icon1,
    text: "- Caused you to cycle",
  },
  {
    img: icon1,
    text: "- Customer became Affiliate",
  },
  {
    img: icon1,
    text: "- Earned Free Position",
  },
];
// styles

const tabsStyles = {
  "& .Mui-selected": {
    backgroundColor: "#A8A8D1",
    borderRadius: "5px",
  },
  "& .MuiTabs-indicator": {
    display: "none",
  },
  // backgroundColor: "#ECECF4",
  background: "white",

  // borderRadius: "5px",
  padding: "5px",
  color: "black",
  width: "240px",
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Treetabs = () => {
  const matches2 = useMediaQuery("(max-width: 950px)");
  const check = useMediaQuery("(max-width:700px)");
  const [treeData, settreeData] = useState([]);
  const [value, setValue] = useState(0);
  const { pkg, userId } = useParams();
  // const [pakage, setpakage] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const navigate = useNavigate();
  const params = useParams();
  const init = async () => {
    let { data } = await axios.get(
      url + `defi/get-tree?pkg=${pkg}&userId=${userId}`
    );
    settreeData(data);
  };

  useEffect(() => {
    console.log(pkg, userId);
    if (pkg && userId) {
      init();
    }
  }, [pkg, userId]);

  return (
    <Box
      sx={{
        background: "#E7E6F1",
        backgroundSize: "cover",
      }}
    >
      <Treecomponent />
      <Container>
        <Box>
          <Tabs
            value={value}
            sx={tabsStyles}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              // style={{ color: "black" }}
              sx={{
                fontWeight: "500",
                borderRadius: "5px",
                fontSize: "12px",
                color: "black",
              }}
              label="Tree View"
              {...a11yProps(0)}
            />
            <Tab
              // style={{ color: "black" }}
              sx={{
                fontWeight: "500",
                borderRadius: "5px",
                fontSize: "12px",
                color: "black",
              }}
              label="Detailed View"
              {...a11yProps(1)}
            />
          </Tabs>

          {/* tabs panels */}
          <Box bgcolor="#FFFFFF" px={2} py={5}>
            <Stack
              direction={"row"}
              alignItems="center"
              justifyContent={"space-between"}
            >
              <Stack
                direction={"row"}
                alignItems="center"
                justifyContent={"center"}
              >
                <IconButton
                  onClick={() => {
                    if (params.package > 1) {
                      navigate(
                        `/dashbord/maindashboard/1/${+params.package - 1}`,
                        { replace: true }
                      );
                    } else {
                      navigate(`/dashbord/maindashboard/1/${12}`, {
                        replace: true,
                      });
                    }
                  }}
                  sx={{ px: "10" }}
                >
                  {" "}
                  <ArrowBackIcon />{" "}
                </IconButton>

                {!matches2 && (
                  <>
                    <Box
                      px="5px"
                      py="5px"
                      sx={{
                        boxShadow: "1",
                        background: "#FFFFFF",
                        borderRadius: "5px",
                      }}
                    >
                      <Typography>11</Typography>{" "}
                    </Box>
                    <Box px="10px">
                      <Typography
                        variant="subtitle2"
                        sx={{ borderBottom: "1px black dotted" }}
                        color="#89A5DA"
                      >
                        Previous
                      </Typography>{" "}
                    </Box>{" "}
                  </>
                )}
              </Stack>

              <Box mt={matches2 ? "0" : "40px"} textAlign="center">
                <Typography color="#63272B" variant="h4">
                  <strong>Package {params.package}</strong>
                </Typography>
                <Typography variant="body2" color="#89A5DA">
                  Detailed View
                </Typography>
              </Box>

              <Stack
                direction={"row"}
                alignItems="center"
                justifyContent={"center"}
              >
                {!matches2 && (
                  <>
                    <Box px="10px">
                      <Typography
                        variant="subtitle2"
                        sx={{ borderBottom: "1px black dotted" }}
                        color="#89A5DA"
                      >
                        Next
                      </Typography>{" "}
                    </Box>
                    <Box
                      px="5px"
                      py="5px"
                      sx={{
                        boxShadow: "1",
                        background: "#FFFFFF",
                        borderRadius: "5px",
                      }}
                    >
                      <Typography>11</Typography>{" "}
                    </Box>
                  </>
                )}

                <IconButton
                  onClick={() => {
                    if (params.package < 12) {
                      navigate(
                        `/dashbord/maindashboard/1/${+params.package + 1}`,
                        { replace: true }
                      );
                    } else {
                      navigate(`/dashbord/maindashboard/1/${1}`, {
                        replace: true,
                      });
                    }
                  }}
                  sx={{ px: "10" }}
                >
                  {" "}
                  <ArrowForwardIcon />{" "}
                </IconButton>
              </Stack>
            </Stack>
            <Box>
              <TabPanel
                value={value}
                index={0}
                sx={{
                  m: "auto",
                  // overflowX: "",
                  // overflowX: { sm: "scroll", md: "visible" },
                  //  check ? "scroll" : "hidden",
                }}
              >
                <TableContainer
                  sx={{ overflowX: { md: "hidden", sm: "auto" } }}
                >
                  <Table
                    sx={{
                      minWidth: 800,
                    }}
                    aria-label="simple table"
                  >
                    <Treeview treeData={treeData} />
                  </Table>
                </TableContainer>
              </TabPanel>
              <TabPanel value={value} index={1} sx={{ m: "auto" }}>
                <Detailedview />
              </TabPanel>
            </Box>

            <Box
              sx={{
                // boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.75)",

                p: 2,
                my: 5,
                borderRadius: "10px",

                // maxWidth: "900px",
              }}
            >
              <Typography variant="h4">LEGEND:</Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  background: "#F4F2F8",
                  p: "10px",
                }}
              >
                {data.map(({ text, img }) => {
                  return (
                    <Box
                      sx={{
                        display: "flex",
                        mt: 2,
                        mr: 2,
                      }}
                    >
                      <img
                        src={img}
                        alt=""
                        //  style={{ width: "20px" }}
                      />
                      <Typography variant="subtitle2">{text}</Typography>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Treetabs;
