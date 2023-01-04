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
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import TuneIcon from "@mui/icons-material/Tune";
const rows = [
  {
    date: "15th April 2022",
    edupurchase: "35 DFI",
    educomision: "0 DFI",
    product: "0 DFI",
  },
];

const StyledMenuItems = ({ children, ...props }) => {
  return (
    <MenuItem {...props} sx={{ color: "#7C5EB9", fontSize: "14px !important" }}>
      {children}
    </MenuItem>
  );
};

const TokenStatistics = () => {
  const [age, setAge] = React.useState("");
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
              <Typography variant="h4">Reward Token Statistics</Typography>
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
              <FormControl sx={{ m: 1, minWidth: 230 }}>
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
              <FormControl sx={{ m: 1, minWidth: 230 }}>
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
                        DATE
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2" align="center">
                        EDUCATION PURCHASE
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2" align="center">
                        EDUCATION COMMISSION
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="subtitle2" align="center">
                        PRODUCT COMMISSION
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
                    .map(({ date, edupurchase, educomision, product }) => (
                      <TableRow
                        // key={id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell align="center">
                          <Typography variant="subtitle2" color="primary.light">
                            {date}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography variant="subtitle2" color="primary.light">
                            {edupurchase}
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography variant="subtitle2" color="primary.light">
                            {educomision}
                          </Typography>
                        </TableCell>

                        <TableCell align="center">
                          <Typography variant="subtitle2" color="primary.light">
                            {product}
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

export default TokenStatistics;
