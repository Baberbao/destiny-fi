import { Box, Container, Grid, Typography } from "@mui/material";

import Information from "./Information";
import StyledButton from "../Button/Button";

import cradPic from "../../assets/img1.jpg";
import { HashLink } from "react-router-hash-link";

function WhyDefinity() {
  return (
    <Box py={10}>
      <Container>
        <Box textAlign="center" mb={7}>
          <Typography variant="h3">WHY Defi Fire</Typography>
          <Typography variant="h2">
            What makes our technology different?
          </Typography>
        </Box>

        <Box>
          <Grid
            container
            spacing={5}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} md={6}>
              <img src={cradPic} alt="" width="100%" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1">
                The latest innovations in the decentralized finance and
                blockchain industries can be overwhelming to the average person.
                However, our world is at a point where companies are rapidly
                switching to blockchain technology, forcing people to catch up
                with the latest trends.
              </Typography>
              <Typography mt={3} variant="body1">
                Whether you're just starting or already have some experience,
                Defi Fire is here to help you learn everything you need to know.
                Let us empower you to navigate this new digital space with
                confidence.
              </Typography>
              <Box mt={7} textAlign={{ xs: "center", md: "left" }}>
                <HashLink to="/joinacademy" style={{ textDecoration: "none" }}>
                  <StyledButton>Begin Your Journey!</StyledButton>
                </HashLink>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box mt={20} mb={5}>
          <Information />
        </Box>
      </Container>
    </Box>
  );
}

export default WhyDefinity;
