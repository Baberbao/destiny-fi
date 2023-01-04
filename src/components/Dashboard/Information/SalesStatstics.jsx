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
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useState } from "react";
import SettingsIcon from "@mui/icons-material/Settings";

const StyledMenuItems = ({ children, ...props }) => {
  return (
    <MenuItem {...props} sx={{ color: "#7C5EB9", fontSize: "14px !important" }}>
      {children}
    </MenuItem>
  );
};
const rows = [
  {
    date: "2nd June 2022",
    DIRECTSALES: "0",
    INCOME: "$86=0.281607 BNB",
    PASSUPINCOMELOST: "$0=0 BNB",
    PASSUPINCOMERECEIVED: "$0=0 BNB",
  },
  {
    date: "2nd June 2022",
    DIRECTSALES: "0",
    INCOME: "$86=0.281607 BNB",
    PASSUPINCOMELOST: "$0=0 BNB",
    PASSUPINCOMERECEIVED: "$0=0 BNB",
  },
  {
    date: "2nd June 2022",
    DIRECTSALES: "0",
    INCOME: "$86=0.281607 BNB",
    PASSUPINCOMELOST: "$0=0 BNB",
    PASSUPINCOMERECEIVED: "$0=0 BNB",
  },
  {
    date: "2nd June 2022",
    DIRECTSALES: "0",
    INCOME: "$86=0.281607 BNB",
    PASSUPINCOMELOST: "$0=0 BNB",
    PASSUPINCOMERECEIVED: "$0=0 BNB",
  },
  {
    date: "2nd June 2022",
    DIRECTSALES: "0",
    INCOME: "$86=0.281607 BNB",
    PASSUPINCOMELOST: "$0=0 BNB",
    PASSUPINCOMERECEIVED: "$0=0 BNB",
  },
  {
    date: "2nd June 2022",
    DIRECTSALES: "0",
    INCOME: "$86=0.281607 BNB",
    PASSUPINCOMELOST: "$0=0 BNB",
    PASSUPINCOMERECEIVED: "$0=0 BNB",
  },
  {
    date: "2nd June 2022",
    DIRECTSALES: "0",
    INCOME: "$86=0.281607 BNB",
    PASSUPINCOMELOST: "$0=0 BNB",
    PASSUPINCOMERECEIVED: "$0=0 BNB",
  },
  {
    date: "2nd June 2022",
    DIRECTSALES: "0",
    INCOME: "$86=0.281607 BNB",
    PASSUPINCOMELOST: "$0=0 BNB",
    PASSUPINCOMERECEIVED: "$0=0 BNB",
  },
  {
    date: "2nd June 2022",
    DIRECTSALES: "0",
    INCOME: "$86=0.281607 BNB",
    PASSUPINCOMELOST: "$0=0 BNB",
    PASSUPINCOMERECEIVED: "$0=0 BNB",
  },
  {
    date: "2nd June 2022",
    DIRECTSALES: "0",
    INCOME: "$86=0.281607 BNB",
    PASSUPINCOMELOST: "$0=0 BNB",
    PASSUPINCOMERECEIVED: "$0=0 BNB",
  },
  {
    date: "2nd June 2022",
    DIRECTSALES: "0",
    INCOME: "$86=0.281607 BNB",
    PASSUPINCOMELOST: "$0=0 BNB",
    PASSUPINCOMERECEIVED: "$0=0 BNB",
  },
  {
    date: "2nd June 2022",
    DIRECTSALES: "0",
    INCOME: "$86=0.281607 BNB",
    PASSUPINCOMELOST: "$0=0 BNB",
    PASSUPINCOMERECEIVED: "$0=0 BNB",
  },
];

const SalesStatstics = () => {
  const [age, setAge] = React.useState("");
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
        py: "100px",
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
            >
              <Typography variant="h4">Sale Statistics</Typography>
              <SettingsIcon />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                my: 2,
                flexWrap: "wrap",
              }}
            >
              <FormControl sx={{ m: 1, minWidth: 300 }}>
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
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 300 }}>
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
                  <StyledMenuItems value={20}>Package: 2</StyledMenuItems>
                  <StyledMenuItems value={30}>Package: 3</StyledMenuItems>
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
                <Typography variant="body2">Start Over?</Typography>
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
          <Box>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow
                    sx={{
                      background: "#E6E3EF",
                    }}
                  >
                    <TableCell align="center">
                      <Typography variant="subtitle2">DATE</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="subtitle2">DIRECT SALES</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="subtitle2">INCOME</Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="subtitle2">
                        PASSUP INCOME LOST
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography variant="subtitle2">
                        PASSUP INCOME RECEIVED
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
                    .map((row) => (
                      <TableRow
                        key={row.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row" align="center">
                          <Typography color="primary.light" variant="subtitle2">
                            {row.date}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography color="primary.light" variant="subtitle2">
                            {row.DIRECTSALES}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography color="primary.light" variant="subtitle2">
                            {row.INCOME}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography color="primary.light" variant="subtitle2">
                            {row.PASSUPINCOMELOST}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography color="primary.light" variant="subtitle2">
                            {row.PASSUPINCOMERECEIVED}
                          </Typography>
                        </TableCell>
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
      </Container>
    </Box>
  );
};

export default SalesStatstics;
