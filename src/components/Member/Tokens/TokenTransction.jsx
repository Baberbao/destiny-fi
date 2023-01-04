import React, { useState } from "react";
import {
  Button,
  Divider,
  FormControl,
  MenuItem,
  Pagination,
  Paper,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
  Zoom,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import TuneIcon from "@mui/icons-material/Tune";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import icon1 from "../../../images/tier.png";
import tableicon from "../../../images/matrix.png";

const data = [
  {
    img: icon1,
    text: "- Product: Regular Price",
  },
  {
    img: icon1,
    text: "- Product: Qualified Price",
  },
  {
    img: icon1,
    text: "- Period: Month",
  },
  {
    img: icon1,
    text: "- Period: Year",
  },
  {
    img: icon1,
    text: "- Reward",
  },
  {
    img: icon1,
    text: "- Commission",
  },
];
const rows = [
  {
    type: tableicon,
    date: "31-29 April 2022",
    account: 1918,
    purchased: 30,
    TRANSACTIONHASH: "0xa5e47f234e...016e7c700db9",
    cost: 3,
    reward: 12,
  },
  {
    type: tableicon,
    date: "31-29 April 2022",
    account: 1918,
    purchased: 30,
    TRANSACTIONHASH: "0xa5e47f234e...016e7c700db9",
    cost: 3,
    reward: 12,
  },
  {
    type: tableicon,
    date: "31-29 April 2022",
    account: 1918,
    purchased: 30,
    TRANSACTIONHASH: "0xa5e47f234e...016e7c700db9",
    cost: 3,
    reward: 12,
  },
  {
    type: tableicon,
    date: "31-29 April 2022",
    account: 1918,
    purchased: 30,
    TRANSACTIONHASH: "0xa5e47f234e...016e7c700db9",
    cost: 3,
    reward: 12,
  },
];

const StyledMenuItems = ({ children, ...props }) => {
  return (
    <MenuItem {...props} sx={{ color: "#7C5EB9", fontSize: "14px !important" }}>
      {children}
    </MenuItem>
  );
};

const TokenTransction = () => {
  const [age, setAge] = React.useState("");
  const [page, setPage] = React.useState(4);
  const [rawdata, setrawdata] = useState([]);
  const [postsPerPage, setPostsPerPage] = useState(4);

  const [currentPage, setCurrentPage] = useState(1);
  const handleChangepage = (event, value) => {
    setCurrentPage(value);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const pageCount = Math.ceil(rows.length / postsPerPage);

  return (
    <Box
      sx={{
        background: "#ECECF4",
        py: "30px",
      }}
    >
      <Container>
        <Box>
          <Box
            sx={{
              // boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.75)",
              background: "white",
              p: 2,
              my: 5,
              borderRadius: "10px",
              // maxWidth: "900px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
              mb={3}
            >
              <Typography variant="h4">Reward Token Transactions</Typography>
              <TuneIcon sx={{ color: "#808080" }} />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                my: 2,
                flexWrap: "wrap",
              }}
            >
              <FormControl sx={{ m: 1, minWidth: 170 }}>
                <Typography variant="subtitle1">PLATFORM</Typography>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  size="small"
                  sx={{ fontSize: "16px !important", color: "#6C6C6D" }}
                >
                  <StyledMenuItems value="">---</StyledMenuItems>
                  <StyledMenuItems value="Definity">Defi Fire</StyledMenuItems>
                  {/* <MenuItem value={10}>DEFI FI</MenuItem> */}
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 170 }}>
                <Typography variant="subtitle1">LIMIT TO</Typography>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  size="small"
                  sx={{ fontSize: "16px !important", color: "#6C6C6D" }}
                >
                  <StyledMenuItems value="">---</StyledMenuItems>
                  <StyledMenuItems value={10}>Package: 1</StyledMenuItems>
                  <StyledMenuItems value={11}>Package: 2</StyledMenuItems>
                  <StyledMenuItems value={12}>Package: 3</StyledMenuItems>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 170 }}>
                <Typography variant="subtitle1">TRANSACTION TYPE</Typography>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  size="small"
                  sx={{ fontSize: "16px !important", color: "#6C6C6D" }}
                >
                  <StyledMenuItems value="">---</StyledMenuItems>
                  <StyledMenuItems value={13}>Purchase</StyledMenuItems>
                  <StyledMenuItems value={14}>Sale (Personal)</StyledMenuItems>
                  <StyledMenuItems value={15}>
                    Sale Lost (Passup)
                  </StyledMenuItems>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 250 }}>
                <Typography variant="subtitle1">
                  SEARCH BY TRANSACTION HASH / ID / WALLET
                </Typography>
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  size="small"
                  sx={{ fontSize: "16px !important", color: "#6C6C6D" }}
                >
                  <StyledMenuItems value="">
                    <em>None</em>
                  </StyledMenuItems>
                  <StyledMenuItems value={19}>Ten</StyledMenuItems>
                  <StyledMenuItems value={20}>Twenty</StyledMenuItems>
                  <StyledMenuItems value={21}>Thirty</StyledMenuItems>
                </Select>
              </FormControl>
            </Box>
            <Divider
              sx={{
                width: "100%",
                my: 2,
              }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography variant="body2" color="primary.light">
                  Start Over?
                </Typography>
                {/* <Button borderBottom="1px dashed gray">Reset filters</Button> */}
              </Box>
              <Button
                sx={{
                  px: 3,
                  py: 1,
                  background: "#e09504",
                  borderRadius: "5px",
                  color: "white",
                  textTransform: "capitalize",
                }}
              >
                Search
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              // boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.75)",
              background: "white",
              p: 2,
              my: 5,
              borderRadius: "10px",
              // maxWidth: "900px",
            }}
          >
            <Typography variant="h4">LEGEND:</Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {data.map(({ text, img }) => {
                return (
                  <Box
                    sx={{
                      display: "flex",
                      mt: 2,
                      mr: 4,
                    }}
                  >
                    <img src={img} alt="" style={{ width: "20px" }} />
                    <Typography variant="subtitle2" color="primary.light">
                      {text}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box
            sx={{
              // boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.75)",
              // p: 2,
              my: 4,
              borderRadius: "10px",
            }}
          >
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow
                    sx={{
                      background: "#E6E3EF",
                      mx: 3,
                    }}
                  >
                    <TableCell>
                      <Typography variant="subtitle2" align="center">
                        TYPE
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2" align="center">
                        DATE
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2" align="center">
                        ACCOUNT
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2" align="center">
                        PURCHASED
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2" align="center">
                        TRANSACTION HASH
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2" align="center">
                        COST
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2" align="center">
                        REWARD
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(
                      currentPage * postsPerPage - postsPerPage,
                      currentPage * postsPerPage
                    )
                    .map(
                      ({
                        type,
                        date,
                        account,
                        purchased,
                        TRANSACTIONHASH,
                        cost,
                        reward,
                      }) => (
                        <TableRow
                          // key={id}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell
                            // component="th" scope="row"
                            align="center"
                          >
                            <img src={type} alt="" />
                          </TableCell>
                          <TableCell align="center">
                            <Typography
                              variant="subtitle2"
                              color="primary.light"
                            >
                              {date}
                            </Typography>
                          </TableCell>
                          <TableCell align="center">
                            <Typography
                              variant="subtitle2"
                              color="primary.light"
                            >
                              {account}
                            </Typography>
                          </TableCell>
                          <TableCell align="center">
                            <Typography
                              variant="subtitle2"
                              color="primary.light"
                            >
                              {purchased}
                            </Typography>
                          </TableCell>
                          <TableCell align="center">
                            <Box
                              sx={{
                                display: "flex",
                              }}
                            >
                              <Typography
                                variant="subtitle2"
                                color="primary.light"
                                mr={1}
                              >
                                {TRANSACTIONHASH}
                              </Typography>
                              <Box
                                sx={{
                                  display: "flex",
                                  flexDirection: "column",
                                }}
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
                                      width: "15px",
                                      "&:hover": {
                                        color: "red",
                                      },
                                      cursor: "pointer",
                                    }}
                                  />
                                </Tooltip>
                                <Tooltip
                                  title="Copy transaction hash"
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
                                  <ContentCopyIcon
                                    sx={{
                                      width: "15px",
                                      "&:hover": {
                                        color: "red",
                                      },
                                      cursor: "pointer",
                                    }}
                                  />
                                </Tooltip>
                              </Box>
                            </Box>
                          </TableCell>

                          <TableCell align="center">
                            <Typography
                              variant="subtitle2"
                              color="primary.light"
                            >
                              {cost}
                            </Typography>
                          </TableCell>
                          <TableCell align="center">
                            <Typography
                              variant="subtitle2"
                              color="primary.light"
                            >
                              {reward}
                            </Typography>
                          </TableCell>
                        </TableRow>
                      )
                    )}
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
      </Container>
    </Box>
  );
};

export default TokenTransction;
