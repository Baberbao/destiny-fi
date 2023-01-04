import { useState } from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Slider,
  Typography,
  useMediaQuery,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

import goldRank from "../../../assets/goldRank.png";
import diamondRank from "../../../assets/diamondRank.png";
import doubleDiamond from "../../../assets/doubleDiamond.png";
import emeRank from "../../../assets/emeRank.png";
import tripleDiamond from "../../../assets/tripleDiamond.png";
import silverRank from "../../../assets/silverRank.png";
import rubyRank from "../../../assets/rubyRank.png";
import platRank from "../../../assets/platRank.png";
import goldIcon from "../../../assets/goldIcon.png";
import crownRank from "../../../assets/crownRank.png";
import bronzeRank from "../../../assets/bronzeRank.png";
import affiliateRank from "../../../assets/affiliateRank.png";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.body}`]: {
    padding: "6px",
  },
}));

const rankData = [
  {
    rankName: "Ruby",
    requirement: "$450,000",
    recieveDate: "10th February 2022",
  },
  {
    rankName: "Platinum",
    requirement: "$350,000",
    recieveDate: "20th January 2022",
  },
  {
    rankName: "Gold",
    requirement: "$250,000",
    recieveDate: "15th January 2022",
  },
  {
    rankName: "Silver",
    requirement: "$50,000",
    recieveDate: "13th January 2022",
  },
  {
    rankName: "Bronze",
    requirement: "$5,000",
    recieveDate: "13th January 2022",
  },
  {
    rankName: "Affiliate",
    requirement: "$0",
    recieveDate: "13th January 2022",
  },
];

function Rank() {
  const [percent, setPercent] = useState(70);
  const matches = useMediaQuery("(min-width: 565px)");

  const [postsPerPage, setPostsPerPage] = useState(4);

  const [currentPage, setCurrentPage] = useState(1);
  const handleChangepage = (event, value) => {
    setCurrentPage(value);
  };

  const pageCount = Math.ceil(rankData.length / postsPerPage);

  //---------Rank leveles data array-------------
  const rankLevels = [
    {
      pic: `${affiliateRank}`,
      name: "Affiliate",
      range: "$0 - $4,999.99",
    },
    {
      pic: `${bronzeRank}`,
      name: "Bronze",
      range: "$5,000 - $49,999.99",
    },
    {
      pic: `${silverRank}`,
      name: "Silver",
      range: "$50,000 - $249,999.99",
    },
    {
      pic: `${goldIcon}`,
      name: "Gold",
      range: "$250,000 - $499,999.99",
    },
    {
      pic: `${platRank}`,
      name: "Platinum",
      range: "$500,000 - $799,999.99",
    },
    {
      pic: `${rubyRank}`,
      name: "Ruby",
      range: "$800,000 - $999,999.99",
    },
    {
      pic: `${emeRank}`,
      name: "Emerald",
      range: "$1,000,000 - $1,999,999.99",
    },
    {
      pic: `${diamondRank}`,
      name: "Diamond",
      range: "$2,000,000 - $2,999,999.99",
    },
    {
      pic: `${doubleDiamond}`,
      name: "Double Diamond",
      range: "$3,000,000 - $3,999,999.99",
    },
    {
      pic: `${tripleDiamond}`,
      name: "Triple Diamond",
      range: "$4,000,000 - $4,999,999.99",
    },
    {
      pic: `${crownRank}`,
      name: "Crown Diamond",
      range: "$5,000,000+",
    },
  ];

  return (
    <Box py={10} bgcolor="#ECECF4">
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box bgcolor="#fff" px={2} py={3} borderRadius="10px" height="100%">
              <Typography variant="h4" textAlign="center" mb={4}>
                Rank Information:
              </Typography>
              <Box textAlign="center">
                <img src={goldRank} alt="" width={matches ? "" : "100%"} />
              </Box>
              <Typography
                mt={2}
                variant="subtitle2"
                color="#81758d"
                textAlign="center"
              >
                CURRENT RANK:{" "}
                <span
                  style={{
                    fontSize: "18px",
                    color: "#302f41",
                    fontWeight: "600",
                  }}
                >
                  Gold
                </span>
              </Typography>

              <Box
                mt={2}
                px={2}
                py={1}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderRadius="10px"
                boxShadow="0 0 20px rgb(75 61 105 / 8%)"
              >
                <Typography variant="body2" color="primary.light">
                  The next rank is:
                </Typography>
                <Typography variant="body1" color="#302f41">
                  Platinum
                </Typography>
              </Box>

              <Box
                mt={1}
                px={2}
                py={1}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderRadius="10px"
                boxShadow="0 0 20px rgb(75 61 105 / 8%)"
              >
                <Typography variant="body2" color="primary.light">
                  You are missing:
                </Typography>
                <Typography variant="body1" color="#302f41">
                  $91,659.58
                </Typography>
              </Box>
              <Box
                mt={1}
                px={2}
                py={1}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderRadius="10px"
                boxShadow="0 0 20px rgb(75 61 105 / 8%)"
              >
                <Typography variant="body2" color="primary.light">
                  Current earned commission:
                </Typography>
                <Typography variant="body1" color="#302f41">
                  $358,464
                </Typography>
              </Box>
              <Box
                mt={1}
                px={2}
                py={1}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderRadius="10px"
                boxShadow="0 0 20px rgb(75 61 105 / 8%)"
              >
                <Typography variant="body2" color="primary.light">
                  Current downline earned commission:
                </Typography>
                <Typography variant="body1" color="#302f41">
                  $49,876.42
                </Typography>
              </Box>

              <Typography
                textAlign="center"
                mt={4}
                mb={1}
                variant="body1"
                color="#302f41"
              >
                Progress to next rank:
              </Typography>
              <Typography
                mb={3}
                display="flex"
                justifyContent="center"
                alignItems="center"
                variant="subtitle2"
                color="primary.light"
              >
                GOLD
                <Slider
                  aria-label="Volume"
                  value={percent}
                  sx={{
                    maxWidth: "380px ",
                    width: "540px",
                    height: "14px",
                    color: "#7A7A7A",
                    "& .MuiSlider-track": {
                      border: "none",
                      backgroundColor: "transparent",
                      backgroundImage: "linear-gradient(90deg,#e09504,#e7ca05)",
                    },
                    "& .MuiSlider-thumb": {
                      width: "10px",
                      height: "10px",
                      color: "#e09504",
                      marginLeft: "-10px",
                    },
                  }}
                />
                Platinum
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box bgcolor="#fff" py={3} borderRadius="10px" height="100%">
              <Container>
                <Typography mb={3} variant="h4">
                  Rank Levels and Qualifications:
                </Typography>
                <Divider />

                <Box my={6}>
                  <Grid container spacing={5}>
                    {rankLevels.map(({ pic, name, range }, i) => {
                      return (
                        <Grid item xs={matches ? 6 : 12}>
                          <Box display="flex" alignItems="center">
                            <Box>
                              <img
                                src={pic}
                                alt=""
                                width="60px"
                                height="65px"
                              />
                            </Box>
                            <Box ml={3}>
                              <Typography
                                variant="body2"
                                fontWeight="700"
                                textTransform="uppercase"
                              >
                                {name}
                              </Typography>
                              <Typography
                                variant="subtitle2"
                                color="primary.light"
                              >
                                {range}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Box>
              </Container>
            </Box>
          </Grid>
        </Grid>

        {/* -----------Table for display the rank history------------- */}
        <Box p={2} mt={4} bgcolor="#fff" borderRadius="10px">
          <Typography variant="h4" mb={2} ml={2}>
            Rank History:
          </Typography>
          <TableContainer
            component={Paper}
            sx={{ boxShadow: "none", borderRadius: "0px", background: "none" }}
          >
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow
                  sx={{
                    background: "#E6E3EF",
                  }}
                >
                  <TableCell>
                    <Typography variant="subtitle2">NAME</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">REQUIREMENT</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="subtitle2">RECEIVED DATE</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rankData
                  .slice(
                    currentPage * postsPerPage - postsPerPage,
                    currentPage * postsPerPage
                  )
                  .map(({ rankName, requirement, recieveDate }) => (
                    <TableRow>
                      <StyledTableCell>
                        <Typography color="primary.light" variant="subtitle2">
                          {rankName}
                        </Typography>
                      </StyledTableCell>
                      <StyledTableCell textAlign="left">
                        <Typography color="primary.light" variant="subtitle2">
                          {requirement}
                        </Typography>
                      </StyledTableCell>
                      <StyledTableCell>
                        <Typography color="primary.light" variant="subtitle2">
                          {recieveDate}
                        </Typography>
                      </StyledTableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        <Box my="40px">
          <Stack direction={"row"} alignItems="center" justifyContent="center">
            <Pagination
              count={pageCount}
              page={currentPage}
              onChange={handleChangepage}
            />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default Rank;
