import React from "react";
import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";

import Header from "../Header";

import bgimg from "../../images/bg-hero.jpg";

const Home = () => {
  return (
    <Box
      sx={{
        background: `url(${bgimg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: { md: "100% 100%", xs: "cover" },
        // backgroundPosition: { md: "center", xs: "left" },
      }}
    >
      <Header />
      <Container>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "100vh",
            }}
          >
            <Typography variant="h3" color="#fff" mb={1}>
              WELCOME TO
            </Typography>
            <Typography variant="h1" color="white" mb={1.5}>
              Defi <span style={{ color: "#E37336" }}>Fire</span>
            </Typography>

            <Link to="/joinacademy" style={{ textDecoration: "none" }}>
              <Button
                disableRipple={true}
                sx={{
                  color: "white",
                  "&:hover": {
                    color: "#9b50aa",
                  },
                }}
              >
                Ready to Get Started?
                <ArrowRightAltIcon />
              </Button>
            </Link>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              pb: 20,
              color: "white",
            }}
          >
            <FacebookIcon />
            <TelegramIcon sx={{ mx: "5px" }} />
            <InstagramIcon />
            <YouTubeIcon sx={{ ml: "5px" }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
