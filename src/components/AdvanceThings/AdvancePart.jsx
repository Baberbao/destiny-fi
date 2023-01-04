import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";

import StyledButton from "../Button/Button";

import iconBird from "../../assets/ico-bird.png";
import person from "../../assets/leader.jpg";
import { HashLink } from "react-router-hash-link";

function Advance() {
  const matches = useMediaQuery("(min-width: 460px)");

  return (
    <Box py={5}>
      <Container>
        <Box textAlign="center">
          <Box mb={3}>
            <img src={iconBird} alt="" />
          </Box>
          <Box mb={6}>
            <Typography variant="h3">ARE YOU LOOKING FOR</Typography>
            <Typography variant="h2" mt={1}>
              Something more advanced?
            </Typography>
          </Box>

          <Box m="auto" width={{ xs: "90%", md: "85%" }}>
            Don't fret, we have you covered with higher education materials that
            will expand your expertise even further.{" "}
            <span style={{ fontWeight: "700", color: "#231E30" }}>
              Blockchain, Crypto, Defi Fire, or Forex,
            </span>{" "}
            we cover it all. No matter if you know nothing about the subject or
            have years of experience, you will be able to find courses tailored
            to your skill level.
          </Box>

          <Box mt={10}>
            <HashLink to="/joinacademy" style={{ textDecoration: "none" }}>
              <StyledButton>Start Learning Today</StyledButton>
            </HashLink>
          </Box>
        </Box>

        {/* -------------Empower and Educate part------------ */}
        <Box pt={25} pb={10}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={6}>
              <Box textAlign="center">
                <img src={person} alt="" width={matches ? "" : "100%"} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3">OUR LEAD EDUCATOR</Typography>
              <Typography variant="h2" mt={1}>
                Empowers and Educates
              </Typography>
              <Typography mt={6} variant="body1">
                Crypto Coach Wayne Marcel, also known as{" "}
                <span style={{ fontWeight: "700", color: "#231E30" }}>
                  "Blockchain Wayne,"
                </span>{" "}
                has built strong teams and educated others for over 20 years.
                Since discovering the power of cryptocurrency, blockchain, and
                decentralized finance, he has made it his mission to help others
                understand this digital space. His passion for guiding crypto
                enthusiasts led him to develop a book and podcast; both called
                "From No Crypto to Know Crypto."
              </Typography>

              <Typography mt={3} variant="body1">
                As an educator and career development coach, Wayne has played an
                instrumental role in developing educational programs for
                successful companies within the digital space. In April 2021,
                Wayne successfully launched the Crypto Experience Conference.
              </Typography>
              <Typography mt={3} variant="body1">
                His goal is to help budding enthusiasts learn and navigate the
                crypto world confidently.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Advance;
