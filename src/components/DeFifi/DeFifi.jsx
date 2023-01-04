import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { HashLink } from "react-router-hash-link";
import bgdafi from "../../images/bg-graph.jpg";
import icodafi from "../../images/ico-defi.png";
import laptop from "../../images/laptop.png";
import StyledButton from "../Button/Button";

const DeFifi = () => {
  return (
    <Box
      sx={{
        background: `url(${bgdafi})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        // backgroundPosition: { md: "center", xs: "left" },
        p: 2,
      }}
    >
      <Container>
        <Grid container>
          <Grid item md={6} xs={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <img src={icodafi} alt="" style={{ width: "100px" }} />
              <Typography variant="h2" color="#fff" ml={4}>
                What is Defi Fire FX?
              </Typography>
            </Box>
            <Typography variant="body1" color="primary.defiText" my={2}>
              Defi Fire FX is a subscription-based service that aims to help our
              community navigate the forex space confidently.
            </Typography>
            <Typography variant="body1" color="primary.defiText">
              The unique software creates algorithms that run 24/7 on your
              trading server. Where it automatically trades on your behalf when
              the algorithm establishes the best time to buy or sell.
            </Typography>
            <Box mt={5}>
              <HashLink to="/defifireFX" style={{ textDecoration: "none" }}>
                <StyledButton>Want to learn more?</StyledButton>
              </HashLink>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <img src={laptop} alt="" style={{ width: "100%" }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DeFifi;
