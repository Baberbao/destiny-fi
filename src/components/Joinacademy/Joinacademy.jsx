import { Container, Grid, Typography, Box } from "@mui/material";
import React from "react";

import bgguy from "../../images/bg-guy.jpg";
import icochecked from "../../images/ico-checked.png";
import icobnb from "../../images/ico-bnb.png";
import StyledButton from "../Button/Button";

const StyledBox = ({ children }) => {
  return (
    <Box
      sx={{
        background: "#CBBDE8",
        px: "15px",
        py: "5px",
        borderRadius: "50px",
        fontSize: "12px",
        mr: 1,
        mt: 1,
      }}
    >
      {children}
    </Box>
  );
};

const Joinacademy = () => {
  return (
    <Box pt="92px">
      <Box
        sx={{
          background: `url(${bgguy})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: { md: "100% 100%", xs: "cover" },
          backgroundPosition: { md: "center", xs: "left" },
          py: 8,
        }}
      >
        <Container>
          <Grid container>
            <Grid item md={6} xs={12}>
              <Box>
                <Typography variant="h3">BEGIN YOUR JOURNEY!</Typography>
                <Typography variant="h1" color="#231E30">
                  <span style={{ color: "#F79623" }}>Join</span> our Academy!
                </Typography>
                <Typography variant="body1" my={3}>
                  Proven education on blockchain technologies tailored to each
                  customer's knowledge level
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                  }}
                >
                  <StyledBox>Blockchain</StyledBox>
                  <StyledBox>Business</StyledBox>
                  <StyledBox>Defi Fire</StyledBox>
                  <StyledBox>Finance</StyledBox>
                  <StyledBox>NFTs</StyledBox>
                </Box>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}></Grid>
          </Grid>
        </Container>
      </Box>

      <Container>
        <Box>
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              mt: 7,
            }}
          >
            For only $30 you will get the following:
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                border: "2px dashed #9f9cb4",
                p: 3,
                my: 4,
                maxWidth: "900px",
                borderRadius: "16px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <img src={icochecked} alt="" style={{ width: "25px" }} />
                <Box fontSize="16px" ml={3}>
                  <span style={{ fontWeight: "700", color: "#231E30" }}>
                    COURSE:
                  </span>{" "}
                  Getting Started in Crypto
                </Box>
              </Box>
              <Box fontSize="16px" ml={6}>
                Published by Defi Fire Academy
              </Box>
              <Box fontSize="16px" ml={6}>
                Learn about the foundations of money, currency, foundational
                basics of Bitcoin, cryptocurrencies, security basics, and how to
                protect yourself from scams.
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: 2,
                }}
              >
                <Box fontSize="16px" fontWeight="700" color="#231E30" ml={6}>
                  BEGINNER LEVEL:
                </Box>
                <Box
                  sx={{
                    width: "50px",
                    height: "5px",
                    background: "#c9dd02",
                    ml: 2,
                    borderRadius: "5px",
                  }}
                ></Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: 7,
                }}
              >
                <img src={icochecked} alt="" style={{ width: "25px" }} />
                <Box fontSize="16px" ml={3}>
                  Membership into Defi Fire Community
                </Box>
              </Box>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              py: 2,
            }}
          >
            <img src={icobnb} alt="" />
            <Typography variant="body1" color="#231E30" my={2}>
              Total Price: $30
            </Typography>
            <StyledButton>Purchase Now</StyledButton>
            <Box my={2} fontSize="14px">
              By clicking the button above, I aknowledge that I have read and
              agree to the Terms & Services and Income Disclaimer
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Joinacademy;
