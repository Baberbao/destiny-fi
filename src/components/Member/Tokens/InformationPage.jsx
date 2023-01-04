import { Box, Grid, Container, Typography, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import token1 from "./token1.svg";
import token2 from "./token2.svg";
import token3 from "./token3.svg";
import token4 from "./token4.svg";

const useStyles = makeStyles({
  moneyPic: {
    width: "40px",
    height: "40px",
  },
  statisticStyle: {
    display: "flex",
    alignItems: "center",
    borderRadius: "10px",
    backgroundColor: "#fff",
  },
});

function TokenInformation() {
  const matches = useMediaQuery("(min-width: 1135px)");
  const matches2 = useMediaQuery("(min-width: 700px)");
  const classes = useStyles();

  return (
    <Box bgcolor="#ededf5" pt={8} height="100vh">
      <Container>
        <Grid container spacing={3}>
          {/* ........Reward Token box........... */}
          <Grid item xs={matches ? 6 : 12}>
            <Typography variant="body2" mb={1} ml={1.5}>
              Reward Token Statistics
              <KeyboardArrowDownIcon
                sx={{ width: "15px", height: "15px", color: "#9A6975" }}
              />
            </Typography>

            <Grid container spacing={1}>
              <Grid item xs={matches2 ? 6 : 12}>
                <Box className={classes.statisticStyle} px={1.5} py={2}>
                  <Box>
                    <img
                      src={token1}
                      alt="money"
                      className={classes.moneyPic}
                    />
                  </Box>
                  <Box ml={3}>
                    <Typography variant="subtitle1">SUPPLY</Typography>
                    <Typography variant="h4">789,871 DFI</Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={matches2 ? 6 : 12}>
                <Box className={classes.statisticStyle} px={1.5} py={2}>
                  <Box>
                    <img
                      src={token2}
                      alt="money"
                      className={classes.moneyPic}
                    />
                  </Box>
                  <Box ml={3}>
                    <Typography variant="subtitle1">BURNED</Typography>
                    <Typography variant="h4">0 DFI</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          {/* ...................... Personal Statistics............... */}
          <Grid item xs={matches ? 6 : 12}>
            <Typography mb={1} ml={1.5} variant="body2">
              Personal Statistics
              <KeyboardArrowDownIcon
                sx={{ width: "15px", height: "15px", color: "#9A6975" }}
              />
            </Typography>

            <Grid container spacing={1}>
              <Grid item xs={matches2 ? 6 : 12}>
                <Box className={classes.statisticStyle} px={1.5} py={2}>
                  <Box>
                    <img
                      src={token3}
                      alt="money"
                      className={classes.moneyPic}
                    />
                  </Box>
                  <Box ml={3}>
                    <Typography variant="subtitle1">AVAILABLE</Typography>
                    <Typography variant="h4">35 DFI</Typography>
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={matches2 ? 6 : 12}>
                <Box className={classes.statisticStyle} px={1.5} py={2}>
                  <Box>
                    <img
                      src={token4}
                      alt="money"
                      className={classes.moneyPic}
                    />
                  </Box>
                  <Box ml={3}>
                    <Typography variant="subtitle1">COMMISSION</Typography>
                    <Typography variant="h4">0 DFI</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Typography
          variant="body2"
          mt={4}
          px={2}
          py={2}
          sx={{
            background: "#c4cdee",
            borderRadius: "10px",
            border: "2px dashed #939abd",
            color: "primary.light",
          }}
        >
          Coming Soon! When the education section launches, additional
          information will come on how to utilize you DFI tokens.
        </Typography>
      </Container>
    </Box>
  );
}

export default TokenInformation;
