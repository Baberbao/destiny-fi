import React, { useState } from "react";
import {
  Grid,
  Container,
  Box,
  Typography,
  useMediaQuery,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import DoneIcon from "@mui/icons-material/Done";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Money from "./ico-money-up.svg";
import MoneyGroup from "./ico-money-group.svg";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import accordianicon from "./tab.png";
const useStyles = makeStyles({
  moneyPic: {
    width: "40px",
    height: "40px",
  },
  packages: {
    position: "relative",
    boxSizing: "border-box",
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "5px 5px 3px rgb(86 86 96 / 2%)",
  },
  passevlevel: {
    borderBottom: "2px solid #EBEBF3",
    width: "13%",
    height: "5px",
    margin: "3px",
  },
  statisticStyle: {
    display: "flex",
    alignItems: "center",
    borderRadius: "10px",
    backgroundColor: "#fff",
  },
});
const TableData = [
  {
    ID: "4",
    WALLET: "-",
    Income: "$39,170.8383.780879 BNB",
  },
  {
    ID: "2",
    WALLET: " -",
    Income: "$39,170.8383.780879 BNB",
  },
  {
    ID: "5",
    WALLET: "-",
    Income: "$39,170.8383.780879 BNB",
  },
  {
    ID: "3",
    WALLET: "-",
    Income: "$39,170.8383.780879 BNB",
  },
  {
    ID: "8",
    WALLET: "-",
    Income: "$39,170.8383.780879 BNB",
  },
  {
    ID: "11",
    WALLET: "-",
    Income: "$39,170.8383.780879 BNB",
  },
  {
    ID: "9",
    WALLET: "-",
    Income: "$39,170.8383.780879 BNB",
  },
  {
    ID: "20",
    WALLET: "-",
    Income: "$39,170.8383.780879 BNB",
  },
  {
    ID: "39",
    WALLET: "-",
    Income: "$39,170.8383.780879 BNB",
  },
  {
    ID: "38",
    WALLET: "8",
    Income: "$39,170.8383.780879 BNB",
  },
];
const TableData2 = [
  {
    ID: "4",
    WALLET: "-",
    Income: "$39,170.8383.780879 BNB",
  },
  {
    ID: "2",
    WALLET: " -",
    Income: "$39,170.8383.780879 BNB",
  },
  {
    ID: "5",
    WALLET: "-",
    Income: "$39,170.8383.780879 BNB",
  },
];
function Treecomponent() {
  const matches = useMediaQuery("(min-width: 1135px)");
  const matches2 = useMediaQuery("(min-width: 700px)");
  var increment = 0;
  const classes = useStyles();
  return (
    <>
      <Box bgcolor="#E7E6F1" py={10}>
        <Container>
          {/* ---------------------Statistics part --------------------- */}
          <Grid container spacing={3}>
            {/* ........Matrix Statistics box........... */}
            <Grid item xs={matches ? 6 : 12}>
              <Typography mb={1} ml={1.5} variant="body2">
                Matrix Statistics
                <KeyboardArrowDownIcon
                  sx={{ width: "15px", height: "15px", color: "#9A6975" }}
                />
              </Typography>

              <Grid container spacing={1}>
                <Grid item xs={matches2 ? 6 : 12}>
                  <Box className={classes.statisticStyle} px={1.5} py={2}>
                    <Box>
                      <img
                        src={Money}
                        alt="money"
                        className={classes.moneyPic}
                      />
                    </Box>
                    <Box ml={3}>
                      <Typography variant="subtitle1">INCOME</Typography>
                      <Typography variant="h4">$341,540.5</Typography>
                      <Typography variant="subtitle2">
                        733.435688 BNB
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={matches2 ? 6 : 12}>
                  <Box className={classes.statisticStyle} px={1.5} py={2}>
                    <Box>
                      <img
                        src={MoneyGroup}
                        alt="money"
                        className={classes.moneyPic}
                      />
                    </Box>
                    <Box ml={3}>
                      <Typography variant="subtitle1">INCOME</Typography>
                      <Typography variant="h4">$341,540.5</Typography>
                      <Typography variant="subtitle2">
                        733.435688 BNB
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Grid container spacing={1} sx={{ marginTop: "1px" }}>
                <Grid item xs={matches2 ? 6 : 12}>
                  <Box className={classes.statisticStyle} px={1.5} py={2}>
                    <Box>
                      <img
                        src={Money}
                        alt="money"
                        className={classes.moneyPic}
                      />
                    </Box>
                    <Box ml={3}>
                      <Typography variant="subtitle1">INCOME</Typography>
                      <Typography variant="h4">$341,540.5</Typography>
                      <Typography variant="subtitle2">
                        733.435688 BNB
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={matches2 ? 6 : 12}>
                  <Box className={classes.statisticStyle} px={1.5} py={2}>
                    <Box>
                      <img
                        src={MoneyGroup}
                        alt="money"
                        className={classes.moneyPic}
                      />
                    </Box>
                    <Box ml={3}>
                      <Typography variant="subtitle1">INCOME</Typography>
                      <Typography variant="h4">$341,540.5</Typography>
                      <Typography variant="subtitle2">
                        733.435688 BNB
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            {/* ...................... Direct Sale Statistics............... */}
            <Grid item xs={matches ? 6 : 12}>
              <Typography mb={1} ml={1.5} variant="body2">
                Direct Sale Statistics
                <KeyboardArrowDownIcon
                  sx={{ width: "15px", height: "15px", color: "#9A6975" }}
                />
              </Typography>

              <Grid container spacing={1}>
                <Grid item xs={matches2 ? 6 : 12}>
                  <Box className={classes.statisticStyle} px={1.5} py={2}>
                    <Box>
                      <img
                        src={Money}
                        alt="money"
                        className={classes.moneyPic}
                      />
                    </Box>
                    <Box ml={3}>
                      <Typography variant="subtitle1">INCOME</Typography>
                      <Typography variant="h4">$341,540.5</Typography>
                      <Typography variant="subtitle2">
                        733.435688 BNB
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={matches2 ? 6 : 12}>
                  <Box className={classes.statisticStyle} px={1.5} py={2}>
                    <Box>
                      <img
                        src={MoneyGroup}
                        alt="money"
                        className={classes.moneyPic}
                      />
                    </Box>
                    <Box ml={3}>
                      <Typography variant="subtitle1">INCOME</Typography>
                      <Typography variant="h4">$341,540.5</Typography>
                      <Typography variant="subtitle2">
                        733.435688 BNB
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
              <Grid container spacing={1} sx={{ marginTop: "1px" }}>
                <Grid item xs={matches2 ? 6 : 12}>
                  <Box className={classes.statisticStyle} px={1.5} py={2}>
                    <Box>
                      <img
                        src={Money}
                        alt="money"
                        className={classes.moneyPic}
                      />
                    </Box>
                    <Box ml={3}>
                      <Typography variant="subtitle1">INCOME</Typography>
                      <Typography variant="h4">$341,540.5</Typography>
                      <Typography variant="subtitle2">
                        733.435688 BNB
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* ...................Compensation plan part.............. */}
          <Box
            mt={4}
            py={1}
            px={2}
            bgcolor="#fff"
            display="flex"
            justifyContent={{ xs: "center", md: "space-between" }}
            alignItems="center"
            flexWrap="wrap"
            borderRadius="10px"
          >
            <Accordion elevation={0} sx={{ width: { md: "105%", xs: "100%" } }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Box sx={{ float: "left" }}>
                  <img src={accordianicon} alt="" />
                </Box>
                <Typography sx={{ m: 1 }} variant="body2">
                  Matrix and Tier Breakdown
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Paper
                  sx={{
                    width: "100%",
                    py: 1,

                    display: "flex",
                    justifyContent: "space-between",

                    flexDirection: { md: "row", xs: "column" },
                  }}
                  elevation={0}
                >
                  <TableContainer
                    sx={{
                      borderRadius: "6px",
                      px: 1,
                      width: { md: "45%", xs: "100%" },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        py={1}
                        variant="subtitle2"
                        id="tableTitle"
                        component="div"
                      >
                        Matrix Breakdown
                      </Typography>
                      <Box>
                        <ExpandMoreIcon />
                      </Box>
                    </Box>
                    <Table>
                      <TableHead>
                        <TableRow
                          sx={{
                            backgroundColor: "#E6E3EF",
                            borderTop: "1px solid lightgray",
                            borderBottom: "1px solid lightgray",
                          }}
                        >
                          <TableCell align="center">
                            <Typography variant="subtitle2">
                              PAYOUT TIAR
                            </Typography>
                          </TableCell>
                          <TableCell align="center">
                            <Typography variant="subtitle2">
                              ACTUAL TIAR
                            </Typography>
                          </TableCell>
                          <TableCell align="center">
                            <Typography variant="subtitle2">INCOME</Typography>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {TableData.map((items) => {
                          increment++;
                          return (
                            <>
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                // hover={false}
                              >
                                <TableCell align="center">
                                  <Typography
                                    color="primary.light"
                                    variant="subtitle2"
                                  >
                                    {increment}
                                  </Typography>
                                </TableCell>

                                <TableCell align="center">
                                  <Typography
                                    color="primary.light"
                                    variant="subtitle2"
                                  >
                                    {items.WALLET}
                                  </Typography>
                                </TableCell>

                                <TableCell align="right">
                                  <Typography
                                    color="primary.light"
                                    variant="subtitle2"
                                  >
                                    {items.Income}
                                  </Typography>
                                </TableCell>
                              </TableRow>
                            </>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TableContainer
                    sx={{
                      borderRadius: "6px",
                      px: 1,
                      width: { md: "45%", xs: "100%" },
                      mt: { md: 0, mt: 1 },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography
                        py={1}
                        variant="subtitle2"
                        id="tableTitle"
                        component="div"
                      >
                        Matrix Breakdown
                      </Typography>
                      <Box>
                        <ExpandMoreIcon />
                      </Box>
                    </Box>
                    <Table>
                      <TableHead>
                        <TableRow
                          sx={{
                            backgroundColor: "#E6E3EF",
                            padding: "8px",
                            borderTop: "1px solid lightgray",
                            borderBottom: "1px solid lightgray",
                          }}
                        >
                          <TableCell align="center">
                            <Typography variant="subtitle2">TIAR</Typography>
                          </TableCell>
                          <TableCell align="center">
                            <Typography variant="subtitle2">TYPE</Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Typography variant="subtitle2">INCOME</Typography>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {TableData2.map((items) => {
                          increment++;
                          return (
                            <>
                              <TableRow
                                hover
                                role="checkbox"
                                tabIndex={-1}
                                // hover={false}
                              >
                                <TableCell align="center">
                                  <Typography
                                    color="primary.light"
                                    variant="subtitle2"
                                  >
                                    {increment}
                                  </Typography>
                                </TableCell>

                                <TableCell align="center">
                                  <Typography
                                    color="primary.light"
                                    variant="subtitle2"
                                  >
                                    {items.WALLET}
                                  </Typography>
                                </TableCell>

                                <TableCell align="right">
                                  <Typography
                                    color="primary.light"
                                    variant="subtitle2"
                                  >
                                    {items.Income}
                                  </Typography>
                                </TableCell>
                              </TableRow>
                            </>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Treecomponent;
