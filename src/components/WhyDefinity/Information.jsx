import { Box, Container, Grid, Typography } from "@mui/material";

import infoCardPic from "../../assets/img2.jpg";

function Information() {
  return (
    <Box>
      <Grid container spacing={5} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h3">Simplify the information</Typography>
          <Typography mt={3} variant="body1">
            We provide proven education on blockchain technologies tailored to
            each customer's knowledge level.
          </Typography>

          <Typography mt={3} variant="body1">
            Customers can progress quickly through the educational material
            specially made for their skill levels. Defi Fire's goal is to
            simplify the information to make it easy to absorb. We are here to
            help you apply your new skills as quickly as possible.
          </Typography>
          <Typography mt={3} variant="body1">
            In addition to educational materials, customers can access other
            valuable services like forex trading software. There are also
            opportunities to get involved with Defi Fire projects and to earn
            sales-based commissions.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={infoCardPic} alt="" width="100%" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Information;
