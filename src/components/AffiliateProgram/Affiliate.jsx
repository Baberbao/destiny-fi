import { Box, Container, Grid, Typography } from "@mui/material";
import { HashLink } from "react-router-hash-link";

import StyledButton from "../Button/Button";

import empower from "../../assets/empower.jpg";
import affiliate from "../../assets/affiliate.jpg";

function Affiliate() {
  return (
    <Box py={10}>
      <Container>
        <Box>
          <Grid container spacing={5} justifyContent="center">
            <Grid item xs={12} md={6}>
              <img src={empower} alt="" width="100%" />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" mt={1}>
                STAY INVOLVED IN
              </Typography>
              <Typography variant="h2" mt={1}>
                Empowers and Educates
              </Typography>
              <Typography mt={3} variant="body1">
                There are plenty of opportunities available for those interested
                in applying their skills and working with Defi Fire.
              </Typography>
              <Typography mt={3} variant="body1">
                Utilize any of our offered software to simplify and automate
                your portfolio. You can also participate in deals we negotiate
                for our community for other Defi Fire projects.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box mt={15} mb={5}>
          <Box>
            <Grid container spacing={5} justifyContent="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h3" pt={3}>
                  WHAT ABOUT
                </Typography>
                <Typography variant="h2" mt={1}>
                  Our Affiliate Program?
                </Typography>
                <Typography mt={4} variant="body1">
                  Use your skills to get the word out about the educational
                  materials and encourage more people to use the program, and at
                  the same time pad your wallet.
                </Typography>

                <Typography mt={3} variant="body1">
                  The Defi Fire membership system is decentralized on the
                  blockchain. Integrating on the blockchain through smart
                  contracts ensures transparency for our customers and
                  affiliates. You can always review and verify the smart
                  contract code, ensuring that you will receive a direct
                  commission for customers you bring in. Handshake
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <img src={affiliate} alt="" width="100%" />
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box textAlign="center" my={10}>
          <HashLink to="/affiliate-program" style={{ textDecoration: "none" }}>
            <StyledButton>our affiliate program</StyledButton>
          </HashLink>
        </Box>
      </Container>
    </Box>
  );
}

export default Affiliate;
