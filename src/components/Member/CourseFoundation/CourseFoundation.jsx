import { useState } from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  Grid,
  styled,
  Tab,
  Tabs,
  Divider,
  Slider,
  Button,
  Chip,
} from "@mui/material";
import CastForEducationIcon from "@mui/icons-material/CastForEducation";
import PublicIcon from "@mui/icons-material/Public";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import InsertChartOutlinedOutlinedIcon from "@mui/icons-material/InsertChartOutlinedOutlined";
import StyleOutlinedIcon from "@mui/icons-material/StyleOutlined";

import FoundationOutline from "../FoundationOutline/FoundationOutline";

import image1 from "../../../images/thumb-fundations1.jpg";
import image2 from "../../../images/thumb-fundations2.jpg";
import image3 from "../../../images/thumb-fundations3.jpg";
import image4 from "../../../images/thumb-fundations4.jpg";

const AntTabs = styled(Tabs)({
  borderBottom: "1px solid #red",
  "& .MuiTabs-indicator": {
    display: "none !important",
  },
});

const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
    color: "black",
    backgroundColor: "#fff",
    borderRight: "1px solid #ededf5",
    "&:hover": {
      backgroundColor: "#ededf5",
    },
    "&.Mui-selected": {
      borderTop: "5px solid #FFA500",
    },
  })
);

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const learning = [
  "The history of money",
  "The basics of blockchain",
  "How to research cryptocurrencies",
  "How to secure your wallet",
  "What is cryptocurrency",
  "The differences between cryptocurrencies",
  "How to setupawallet",
  "Avoiding the most common scams",
];

const totalData = [
  { Icon: VideoLibraryIcon, title: "LENGTH:", detail: "3.5 Hours" },
  { Icon: GridViewOutlinedIcon, title: "MODULES:", detail: "5" },
  { Icon: ComputerOutlinedIcon, title: "LESSONS:", detail: "23" },
  {
    Icon: InsertChartOutlinedOutlinedIcon,
    title: "LEVEL:",
    detail: "Beginner",
  },
  {
    Icon: StyleOutlinedIcon,
    title: "TAGS:",
    detail: (
      <>
        <Chip label="Blockchain" />
        <Chip label="Decentralized Finance" />
        <Chip label="Cryptocurrency" />
        <Chip label="Security" />
        <Chip label="Best Practices" />
      </>
    ),
  },
];

const similarCourses = [
  { img: image2, label: "Trading", available: true },
  { img: image3, label: "Play To Earn", available: false },
  { img: image4, label: "NFTs", available: false },
];

const CourseFounation = () => {
  const matches = useMediaQuery("(max-width: 800px)");

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box bgcolor="#ededf5" pb={10}>
      <Box
        p={4}
        sx={{
          background: `linear-gradient(rgb(33 16 16 / 70%), rgb(33 16 16 / 70%)),url(${image1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          color: "#9C9D8A",
          position: "relative",
        }}
      >
        <Typography mt={15} variant="h2" color="#fff">
          Foundations
        </Typography>

        <Typography
          mt={3}
          component="p"
          variant="body1"
          sx={{
            color: "#9C9D8A",
            width: matches ? "100%" : "60%",
          }}
        >
          Foundations is designed to give you a basic foundation of
          understanding to begin navigating in the cryptocurrency space.
        </Typography>
        <Box mt={3} display="flex" flexDirection={matches ? "column" : "row"}>
          <Typography variant="body1" color="#9C9D8A">
            <CastForEducationIcon
              style={{ fontSize: "1.5rem", verticalAlign: "-5px" }}
            />
            Instructor: <span style={{ color: "#FFA500" }}>Education Team</span>
          </Typography>
          <Typography ml={!matches && 2} variant="body1" color="#9C9D8A">
            <PublicIcon style={{ fontSize: "1.5rem", verticalAlign: "-5px" }} />
            English
          </Typography>
        </Box>
      </Box>

      <Grid p={2} container spacing={2} justifyContent="center">
        <Grid mt={2} item xs={12} md={8} order={matches ? 1 : 0}>
          <Box
            px={matches ? 0.5 : 2}
            sx={{ bgcolor: "#fff", borderRadius: "20px" }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <AntTabs
                value={value}
                onChange={handleChange}
                aria-label="ant example"
              >
                <AntTab label="Course Details" />
                <AntTab label="About Instructors" />
              </AntTabs>
            </Box>

            <Box>
              <TabPanel value={value} index={0}>
                <Typography mt={2} color="black">
                  Course Description
                </Typography>
                <Typography mt={3} variant="body2" color="#5c5c5e">
                  At the core of cryptocurrency and blockchain learning are
                  foundational principles that will help you to better
                  understand the why and the how behind core principles. The
                  Foundations course will give you that core understanding to
                  help you as you move into more advanced topics. Foundations
                  focuses on many of the questions new people have when it comes
                  to getting started with cryptocurrency and also addresses many
                  of the problems people encounter when navigating in the space
                  without the proper education.
                </Typography>

                <Typography mt={2} color="black">
                  What you'll learn
                </Typography>
                <Box
                  mt={2}
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  {learning.map((text, index) => {
                    return (
                      <Typography
                        key={text}
                        mt={1}
                        variant="body2"
                        color="#5c5c5e"
                        sx={{ width: "50%" }}
                      >
                        <span color="#6DA503">✓</span> {text}
                      </Typography>
                    );
                  })}
                </Box>

                <Typography my={2} color="black">
                  Course Content
                </Typography>

                <FoundationOutline />
              </TabPanel>

              <TabPanel value={value} index={1}>
                <Box mt={3} display="flex">
                  <img src={image1} alt="" width="30%" height="200px" />
                  <Box ml={4}>
                    <Button
                      varaint="subtitle2"
                      sx={{
                        background: "#C4CFF3",
                        borderRadius: "10px",
                        "&:hover": {
                          background: "#C4CFF3a1",
                        },
                      }}
                    >
                      Instructor:
                    </Button>
                    <Typography mt={2} color="black" fontWeight="700">
                      Education Team
                    </Typography>

                    <Typography
                      variant="subtitle2"
                      color="black"
                      fontWeight="700"
                    >
                      BIO:
                    </Typography>
                    <Typography variant="subtitle2" color="black">
                      The official DefinityFI education team
                    </Typography>
                  </Box>
                </Box>
              </TabPanel>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={4}
          order={matches ? 0 : 1}
          mt={matches ? 0 : -30}
          zIndex="10"
        >
          <Box sx={{ bgcolor: "#fff", borderRadius: "20px" }}>
            <img
              src={image1}
              alt=""
              width="100%"
              style={{ borderRadius: "20px 20px 0 0" }}
            />

            <Box mt={3} p={3} textAlign="center">
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body2">Status</Typography>
                <Typography variant="body2">In Progress</Typography>
              </Box>
              <Slider
                aria-label="Volume"
                value={4}
                sx={{
                  width: "100%",
                  height: "12px",
                  color: "#E2E1EE",
                  "& .MuiSlider-track": {
                    border: "none",
                    height: "8px",
                    backgroundColor: "transparent",
                    backgroundImage: "linear-gradient(90deg,#a5db39,#7ca901)",
                  },
                  "& .MuiSlider-thumb": {
                    width: "0px",
                    height: "0px",
                    color: "#e09504",
                    marginLeft: "-7px",
                  },
                }}
              />

              <Button
                sx={{
                  backgroundColor: "#840A9F",
                  width: "60%",
                  paddingY: "10px",
                  color: "white",
                  borderRadius: "10px",
                  marginBottom: "30px",
                  "&:hover": {
                    backgroundColor: "#840A9F",
                  },
                }}
              >
                <PlayArrowOutlinedIcon
                  style={{
                    fontSize: "1.5rem",
                    verticalAlign: "-5px",
                  }}
                />
                Resume Course
              </Button>

              <Divider fullWidth />

              {totalData.map(({ Icon, title, detail }, i) => {
                return (
                  <>
                    <Box
                      my={1}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                      }}
                    >
                      <Typography variant="body2">
                        <Icon
                          style={{
                            fontSize: "1.5rem",
                            verticalAlign: "-5px",
                            marginRight: "10px",
                            color: "#727273",
                          }}
                        />
                        {title}
                      </Typography>
                      <Typography variant="body2">{detail}</Typography>
                    </Box>
                    <Divider fullWidth />
                  </>
                );
              })}
            </Box>

            {!matches && (
              <Box p={3}>
                <Typography
                  sx={{ fontSize: "16px !important" }}
                  fontWeight="600"
                  color="black"
                >
                  LOOKING FOR SIMILAR COURSES?
                </Typography>

                {similarCourses.map(({ img, title, available }, i) => {
                  return (
                    <Box key={title + i} mt={2} display="flex">
                      <img src={img} alt="" width="80px" height="80px" />
                      <Box ml={2}>
                        <Typography variant="subtitle2">Trading</Typography>
                        <Button
                          disableRipple={true}
                          sx={{
                            background: available ? "#6DA503" : "#E58F3F",
                            padding: "2px 5px",
                            color: "white",
                            fontSize: "10px",
                            "&:hover": {
                              background: available ? "#6DA503a1" : "#E58F3Fa1",
                            },
                          }}
                        >
                          {available ? "Available" : "Purchase"}
                        </Button>
                        <Typography variant="subtitle2">
                          Published By Education Team
                        </Typography>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CourseFounation;
