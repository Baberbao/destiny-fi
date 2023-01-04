import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  Grid,
  Pagination,
  Stack,
} from "@mui/material";
import leaderboard from "./icons/bonus.png";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Tooltip from "@mui/material/Tooltip";
import TableRow from "@mui/material/TableRow";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Zoom from "@mui/material/Zoom";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "./Alltimestyle/allTimeIncomes.css";

const TableData = [
  {
    ID: "4",
    WALLET: " 0x434dd39A33b7187Cf5B2A629174f5472A1581bB1",
    Income: "$39,170.8383.780879 BNB",
  },
  {
    ID: "2",
    WALLET: " 0x434dd39A33b7187Cf5B2A629174f5472A1581bB1",
    Income: "$39,170.8383.780879 BNB",
  },
  {
    ID: "5",
    WALLET: " 0x434dd39A33b7187Cf5B2A629174f5472A1581bB1",
    Income: "$39,170.8383.780879 BNB",
  },
  {
    ID: "3",
    WALLET: " 0x434dd39A33b7187Cf5B2A629174f5472A1581bB1",
    Income: "$39,170.8383.780879 BNB",
  },
  {
    ID: "8",
    WALLET: " 0x434dd39A33b7187Cf5B2A629174f5472A1581bB1",
    Income: "$39,170.8383.780879 BNB",
  },
  {
    ID: "11",
    WALLET: " 0x434dd39A33b7187Cf5B2A629174f5472A1581bB1",
    Income: "$39,170.8383.780879 BNB",
  },
  {
    ID: "9",
    WALLET: " 0x434dd39A33b7187Cf5B2A629174f5472A1581bB1",
    Income: "$39,170.8383.780879 BNB",
  },
  {
    ID: "20",
    WALLET: " 0x434dd39A33b7187Cf5B2A629174f5472A1581bB1",
    Income: "$39,170.8383.780879 BNB",
  },
  {
    ID: "39",
    WALLET: " 0x434dd39A33b7187Cf5B2A629174f5472A1581bB1",
    Income: "$39,170.8383.780879 BNB",
  },
  {
    ID: "38",
    WALLET: " 0x434dd39A33b7187Cf5B2A629174f5472A1581bB1",
    Income: "$39,170.8383.780879 BNB",
  },
];
export default function TopPerformerBonus() {
  const [postsPerPage, setPostsPerPage] = useState(4);

  const [currentPage, setCurrentPage] = useState(1);
  const handleChangepage = (event, value) => {
    setCurrentPage(value);
  };
  var increment = 0;
  const pageCount = Math.ceil(TableData.length / postsPerPage);
  return (
    <>
      <Box sx={{ backgroundColor: "#E6E3EF" }}>
        <Container>
          <Grid Container sx={{ py: 2 }}>
            <Grid item xs={12}>
              <Box sx={{ textAlign: "center", mt: 12 }}>
                <Box>
                  <img
                    src={leaderboard}
                    style={{ width: "73px", height: "80px" }}
                    alt=""
                  />
                </Box>
                <Typography variant="body1" mt={1}>
                  Leaderboard:
                </Typography>
                <Typography variant="h5" mb={5}>
                  Top Performer Bonus
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Paper sx={{ width: "97%", py: 1, m: 2, mt: 3 }}>
                <TableContainer sx={{ borderRadius: "6px", px: 1 }}>
                  <Table sx={{ textAlign: "center" }}>
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
                          <Typography variant="subtitle2">POSITION</Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography variant="subtitle2">ID</Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography variant="subtitle2">WALLET</Typography>
                        </TableCell>
                        <TableCell align="center" colSpan={2}>
                          <Typography variant="subtitle2">INCOME</Typography>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {TableData.slice(
                        currentPage * postsPerPage - postsPerPage,
                        currentPage * postsPerPage
                      ).map((items) => {
                        increment++;
                        return (
                          <>
                            <TableRow
                              hover
                              role="checkbox"
                              tabIndex={-1}
                              hover={false}
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
                                  {items.ID}
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
                              <TableCell
                                align="center"
                                sx={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <Typography
                                  color="primary.light"
                                  variant="subtitle2"
                                ></Typography>
                                <Typography
                                  color="primary.light"
                                  variant="subtitle2"
                                >
                                  <Tooltip
                                    title="View on bscscan.com"
                                    componentsProps={{
                                      tooltip: {
                                        sx: {
                                          bgcolor: "#7D66D1",
                                          p: 1,
                                          "& .MuiTooltip-arrow": {
                                            color: "white",
                                          },
                                        },
                                      },
                                    }}
                                    TransitionComponent={Zoom}
                                    arrow
                                    placement="left-end"
                                  >
                                    <OpenInNewIcon
                                      sx={{
                                        width: "14px",
                                        height: "14px",
                                        ml: 1,
                                        color: "black",
                                        "&:hover": {
                                          color: "brown",
                                        },
                                      }}
                                    />
                                  </Tooltip>
                                  <Tooltip
                                    title="Copy Address"
                                    componentsProps={{
                                      tooltip: {
                                        sx: {
                                          bgcolor: "#7D66D1",
                                          p: 1,
                                          ml: 2,
                                          "& .MuiTooltip-arrow": {
                                            color: "white",
                                          },
                                        },
                                      },
                                    }}
                                    TransitionComponent={Zoom}
                                    arrow
                                    placement="right-end"
                                  >
                                    <ContentCopyIcon
                                      sx={{
                                        width: "14px",
                                        height: "14px",
                                        ml: 1,
                                        color: "black",
                                        "&:hover": {
                                          color: "brown",
                                        },
                                      }}
                                    />
                                  </Tooltip>
                                </Typography>
                              </TableCell>
                              <TableCell align="center">
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
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
