import {
  Button,
  Container,
  Grid,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Profitoverviewimg from "../../../images/Profitoverview.png";
import icotimeline from "../../../images/ico-timeline.svg";
import icopayup from "../../../images/ico-pay-up.svg";
import icomoneyup from "../../../images/ico-money-up.svg";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    padding: "6px",
    fontSize: "14px",
  },
  [`&.${tableCellClasses.body}`]: {
    padding: "4px",
  },
}));

const rows = [
  {
    id: "1",
    payoutperiod: "31-29 April 2022",
    payoutdate: "20th May 2022 01:26 p.m.",
    totalamount: "	$1,696.595.59636 BNB",
    action: "View Details",
  },
  {
    id: "2",
    payoutperiod: "31-29 April 2022",
    payoutdate: "20th May 2022 01:26 p.m.",
    totalamount: "	$1,696.595.59636 BNB",
    action: "View Details",
  },
  {
    id: "3",
    payoutperiod: "31-29 April 2022",
    payoutdate: "20th May 2022 01:26 p.m.",
    totalamount: "	$1,696.595.59636 BNB",
    action: "View Details",
  },
  {
    id: "4",
    payoutperiod: "31-29 April 2022",
    payoutdate: "20th May 2022 01:26 p.m.",
    totalamount: "	$1,696.595.59636 BNB",
    action: "View Details",
  },
  {
    id: "5",
    payoutperiod: "31-29 April 2022",
    payoutdate: "20th May 2022 01:26 p.m.",
    totalamount: "	$1,696.595.59636 BNB",
    action: "View Details",
  },
  {
    id: "6",
    payoutperiod: "31-29 April 2022",
    payoutdate: "20th May 2022 01:26 p.m.",
    totalamount: "	$1,696.595.59636 BNB",
    action: "View Details",
  },
  {
    id: "7",
    payoutperiod: "31-29 April 2022",
    payoutdate: "20th May 2022 01:26 p.m.",
    totalamount: "	$1,696.595.59636 BNB",
    action: "View Details",
  },
  {
    id: "8",
    payoutperiod: "31-29 April 2022",
    payoutdate: "20th May 2022 01:26 p.m.",
    totalamount: "	$1,696.595.59636 BNB",
    action: "View Details",
  },
  {
    id: "9",
    payoutperiod: "31-29 April 2022",
    payoutdate: "20th May 2022 01:26 p.m.",
    totalamount: "	$1,696.595.59636 BNB",
    action: "View Details",
  },
  {
    id: "10",
    payoutperiod: "31-29 April 2022",
    payoutdate: "20th May 2022 01:26 p.m.",
    totalamount: "	$1,696.595.59636 BNB",
    action: "View Details",
  },
  {
    id: "11",
    payoutperiod: "31-29 April 2022",
    payoutdate: "20th May 2022 01:26 p.m.",
    totalamount: "	$1,696.595.59636 BNB",
    action: "View Details",
  },
  {
    id: "12",
    payoutperiod: "31-29 April 2022",
    payoutdate: "20th May 2022 01:26 p.m.",
    totalamount: "	$1,696.595.59636 BNB",
    action: "View Details",
  },
];

const Profitoverview = () => {
  const [page, setPage] = React.useState(4);
  const [rawdata, setrawdata] = useState([]);
  const [postsPerPage, setPostsPerPage] = useState(4);

  const [currentPage, setCurrentPage] = useState(1);
  const handleChangepage = (event, value) => {
    setCurrentPage(value);
  };

  const pageCount = Math.ceil(rows.length / postsPerPage);

  return (
    <Box
      sx={{
        background: "#E7E6F1",
        py: "100px",
      }}
    >
      <Container>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img src={Profitoverviewimg} alt="" />
            <Box textAlign="center" mt={2}>
              <Typography variant="body1">Profit Program:</Typography>
              <Typography variant="h5">Overview</Typography>
            </Box>
          </Box>
          <Grid container spacing={2} my={5}>
            <Grid item md={5} xs={12}>
              <Box height="100%">
                <Box
                  sx={{
                    display: "flex",
                    // justifyContent: "center",
                    alignItems: "center",
                    background: "#FCFCFF",
                    borderRadius: "10px",
                    // boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.75)",
                    p: 2,
                  }}
                >
                  <img src={icomoneyup} alt="" style={{ width: "60px" }} />
                  <Box sx={{ ml: 4 }}>
                    <Typography variant="subtitle1">PAYOUT</Typography>
                    <Typography variant="h4">$9,281.07</Typography>
                    <Typography variant="subtitle2">24.991327 BNB</Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    // justifyContent: "center",
                    alignItems: "center",
                    background: "#FCFCFF",
                    // boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.75)",
                    borderRadius: "10px",
                    p: 2,
                    mt: 2,
                  }}
                >
                  <img src={icopayup} alt="" style={{ width: "60px" }} />
                  <Box sx={{ ml: 4 }}>
                    <Typography variant="subtitle1">PAYOUT</Typography>
                    <Typography variant="h4">$9,281.07</Typography>
                    <Typography variant="subtitle2">24.991327 BNB</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={7} xs={12}>
              <Box
                height="100%"
                sx={{
                  display: "flex",
                  background: "white",
                  borderRadius: "10px",
                  p: 1,
                  py: 3,
                }}
              >
                <img src={icotimeline} alt="" style={{ width: "150px" }} />
                <Box ml={4}>
                  <Typography variant="body2" color="#92659b">
                    CURRENT QUALIFICATION PERIOD:
                  </Typography>
                  <Box
                    my={2}
                    p={1}
                    color="#25272b"
                    variant="body1"
                    fontWeight="600"
                    bgcolor="rgba(233,233,241,.49019607843137253)"
                    borderRadius="15px"
                  >
                    31st May 2022{" "}
                    <span style={{ fontSize: "14px", color: "gray" }}>to</span>{" "}
                    29th June 2022
                  </Box>
                  <Typography variant="subtitle2">
                    Note: Available profit from the Profit Program is
                    distributed on the first working day on or after the 10th
                    day of the following month of the qualification
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{
              // boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.75)",
              p: 2,
              my: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 1,
              }}
            >
              <Typography variant="body2" fontWeight="700">
                Payout History
              </Typography>
            </Box>

            <Box>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow
                      sx={{
                        background: "#E6E3EF",
                      }}
                    >
                      <StyledTableCell>PAYOUT ID</StyledTableCell>
                      <StyledTableCell>PAYOUT PERIOD</StyledTableCell>
                      <StyledTableCell>PAYOUT DATE</StyledTableCell>
                      <StyledTableCell>TOTAL AMOUNT</StyledTableCell>
                      <StyledTableCell>ACTION</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows
                      .slice(
                        currentPage * postsPerPage - postsPerPage,
                        currentPage * postsPerPage
                      )
                      .map((row) => (
                        <TableRow
                          key={row.id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <StyledTableCell>
                            <Typography
                              variant="subtitle2"
                              color="primary.light"
                            >
                              {row.id}
                            </Typography>
                          </StyledTableCell>
                          <StyledTableCell>
                            <Typography
                              variant="subtitle2"
                              color="primary.light"
                            >
                              {row.payoutperiod}
                            </Typography>
                          </StyledTableCell>
                          <StyledTableCell>
                            <Typography
                              variant="subtitle2"
                              color="primary.light"
                            >
                              {row.payoutdate}
                            </Typography>
                          </StyledTableCell>
                          <StyledTableCell>
                            <Typography variant="body2" fontWeight="700">
                              {row.totalamount}
                            </Typography>
                          </StyledTableCell>
                          <StyledTableCell>
                            <Button
                              sx={{
                                borderBottom: "1px dashed gray",
                                color: "primary.light",
                              }}
                            >
                              {row.action}
                            </Button>
                          </StyledTableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
            <Box my="40px">
              <Stack
                direction={"row"}
                alignItems="center"
                justifyContent="center"
              >
                <Pagination
                  count={pageCount}
                  page={currentPage}
                  onChange={handleChangepage}
                />
              </Stack>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Profitoverview;
