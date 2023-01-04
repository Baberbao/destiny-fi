import React from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  Grid,
  Divider,
  Button,
  Chip,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReactPlayer from "react-player";

import FoundationOutline from "../FoundationOutline/FoundationOutline";

import image1 from "../../../images/thumb-fundations1.jpg";
import instructor from "../../../images/instructor1.jpg";

const LectureView = () => {
  const { index } = useParams();
  const matches = useMediaQuery("(max-width: 800px)");

  return (
    <Box bgcolor="#ededf5" pb={10}>
      <Box
        mb={20}
        p={matches ? 2 : 4}
        sx={{
          background: `linear-gradient(rgb(33 16 16 / 70%), rgb(33 16 16 / 70%)),url(${image1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          color: "#9C9D8A",
          position: "relative",
          height: "50vh",
        }}
      >
        <Link
          to="/member/academy/foundations"
          style={{ textDecoration: "none" }}
        >
          <Typography variant="body2" sx={{ color: "#9C9D8A" }}>
            <ArrowBackIcon style={{ verticalAlign: "middle" }} />
            <span style={{ color: "#605E68", margin: "0 5px" }}>Course:</span>
            Foundations
          </Typography>
        </Link>

        <Box mt={2} display="flex">
          <Button
            varaint="subtitle1"
            sx={{
              background: "#840A9F",
              borderRadius: "10px",
              fontSize: "12px",
              color: "white",
              "&:hover": {
                background: "#840A9Fa1",
              },
            }}
          >
            Lesson # {index}
          </Button>
          <Typography mt={0.2} ml={1} variant="body1" color="#fff">
            History of Money,from Barter to Blockchain
          </Typography>
        </Box>

        <Box>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            width="100%"
            height="400px"
          />
        </Box>
      </Box>

      <Grid p={2} container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box
            px={matches ? 0.5 : 3}
            pb={3}
            sx={{ bgcolor: "#fff", borderRadius: "20px" }}
          >
            <Button
              variant="body1"
              sx={{
                background: "transparent",
                borderTop: "5px solid #FFA500",
                borderRight: "1px solid #ededf5",
                borderRadius: 0,
              }}
            >
              Lesson Details
            </Button>

            <Typography mt={4} mb={2} color="black" fontWeight="600">
              What are you going to learn in this lesson:
            </Typography>

            <Typography mt={2} variant="body2" color="#5c5c5e">
              In this module you will learn about the history of money. To
              understand the future of money, it is important to understand the
              past. In this lesson, you will learn about the history of money
              from the ancient days of barter, to the evolution of the different
              items that have been used for money over the years.
            </Typography>
            <Typography my={2} color="black" fontWeight="600">
              What are you going to learn in this lesson:
            </Typography>

            <Box mb={3}>
              <Chip label="History" />
              <Chip label="Gold" sx={{ marginLeft: "10px" }} />
              <Chip label="Money" sx={{ marginLeft: "10px" }} />
              <Chip label="Barter" sx={{ marginLeft: "10px" }} />
            </Box>

            <Divider fullWidth />

            <Typography mt={3} sx={{ textAlign: matches && "center" }}>
              <img
                src={instructor}
                alt=""
                style={{
                  height: "250px",
                  width: "250px",
                  float: !matches && "left",
                  padding: "0 15px 15px 0",
                }}
              />
              <Chip label="Instructor" /> <br />
              <span
                style={{
                  display: "block",
                  margin: "15px 0 20px 0",
                  fontWeight: " 600",
                  fontSize: matches ? "18x" : "24px",
                }}
              >
                Wayne Marcel
              </span>
              <span
                style={{
                  display: "block",
                  margin: "20px 0 20px 0",
                  fontWeight: " 700",
                  fontSize: matches ? "14x" : "16px",
                }}
              >
                BIO:
              </span>
              Wayne first became involved in the cryptocurrency space in 2016.
              Through a process of trying to learn as much as possible, he
              realized at the time there weren't many good resources to learn.
              Since then, he has written and published a beginner's guide book
              called From No Crypto To Know Crypto. He also hosted a podcast
              under the same name for three years with over 140 educational
              episodes. Wayne has since been partnering and advising companies
              and helping them build educational resources to attract new users.
              He is also a co-founder of The Crypto Experience, which hosted its
              first cryptocurrency event in April 2021, The Miami Crypto
              Experience.
              <br />
              <br />
              Wayne Marcel, also known as The Crypto Coach, Blockchain Wayne,
              has been an educator, career development coach, and building
              high-performing teams for over 20 years. Several years ago, he
              carried that passion over to the Cryptocurrency and blockchain
              space, highlighting his passion for emerging technologies. His
              passion for teaching and coaching others is coupled with the
              growing need for education in the cryptocurrency and blockchain
              space for those who want to position themselves in front of this
              giant technological shift.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <FoundationOutline />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LectureView;
