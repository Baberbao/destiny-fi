import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { HashLink } from "react-router-hash-link";

import StyledButton from "../Button/Button";

import bgfooter from "../../images/bg-footer.jpg";
import logo from "../../images/logo-s.png";

const Footer = () => {
  return (
    <Box
      sx={{
        background: `url(${bgfooter})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        pt: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container justifyContent="space-between" spacing={5}>
          <Grid item md={6} xs={12}>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Box mr={1}>
                <img src={logo} alt="" />
              </Box>
              <Box>
                <Typography variant="h3" color="#fff">
                  Defi Fire
                </Typography>
                <Box
                  fontSize="14px"
                  color="primary.defiText"
                  my={2}
                  sx={{
                    width: "80%",
                  }}
                >
                  We are always here for constant support so don't hesitate to
                  reach out if you have any questions or problems!
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    color: "white",
                    alignItems: "center",
                    //   pb: 20,
                  }}
                >
                  <FacebookIcon />
                  <TelegramIcon sx={{ mx: "5px" }} />
                  <InstagramIcon />
                  <YouTubeIcon sx={{ ml: "5px" }} />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={3} xs={12}>
            <Box ml={{ xs: 7, md: 0 }}>
              <Typography
                variant="h3"
                sx={{
                  mb: 2,
                  color: "white",
                }}
              >
                LEGAL
              </Typography>
              <Box fontSize="14px" color="primary.defiText">
                Income Disclaimer
              </Box>
              <Box fontSize="14px" color="primary.defiText">
                Terms & Services
              </Box>
              <Box fontSize="14px" color="primary.defiText">
                Smart Contract
              </Box>
            </Box>
          </Grid>
          <Grid item md={3} xs={12} align="center">
            <Box>
              <HashLink to="/joinacademy" style={{ textDecoration: "none" }}>
                <StyledButton>JOIN Defi Fire</StyledButton>
              </HashLink>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box
        color="primary.light"
        sx={{
          textAlign: "center",
          fontSize: "12px",
          mt: 3,
          py: 1,
          background: "#150e18",
        }}
      >
        Copyright © 2022 Defi Fire. All Rights Reserved.
      </Box>
    </Box>
  );
};

export default Footer;
