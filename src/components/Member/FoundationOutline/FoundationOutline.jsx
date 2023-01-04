import {
  Box,
  Typography,
  useMediaQuery,
  Grid,
  styled,
  Tab,
  Tabs,
  Divider,
  Slider,
  Button,
  Chip,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlayArrowOutlinedIcon from "@mui/icons-material/PlayArrowOutlined";

import { Link } from "react-router-dom";

const foundation = [
  {
    modTitle: "History",
    lectures: [
      {
        link: 1,
        text: "History of Money,from Barter to Blockchain",
        time: "10:39",
        percent: "100",
      },
      {
        link: 2,
        text: "Current Financial Systems,Banks And Federal Reserves.Systems of Exclusion",
        time: "05:08",
        percent: "18",
      },
      {
        link: 3,
        text: "Early Digital Cash and Emergence of Bitcoin",
        time: "03:05",
        percent: "0",
      },
    ],
  },
  {
    modTitle: "Blockchain",
    lectures: [
      {
        link: 4,
        text: "Bitcoin",
        time: "16:43",
        percent: "100",
      },
      {
        link: 5,
        text: "Ethereum",
        time: "03:48",
        percent: "7",
      },
      {
        link: 6,
        text: "Cryptocurrency",
        time: "14:35",
        percent: "0",
      },
      {
        link: 7,
        text: "Bitcoin",
        time: "16:43",
        percent: "0",
      },
      {
        link: 8,
        text: "Ethereum",
        time: "03:48",
        percent: "0",
      },
      {
        link: 9,
        text: "Cryptocurrency",
        time: "14:35",
        percent: "0",
      },
    ],
  },
];

const FoundationOutline = () => {
  const matches = useMediaQuery("(max-width: 800px)");

  return (
    <Box pb={2} sx={{ bgcolor: "#F8F6FC", borderRadius: "15px" }}>
      {foundation.map(({ modTitle, lectures }, index) => {
        return (
          <>
            <Box
              key={modTitle + index}
              bgcolor="#D6D4E6"
              sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: index === 0 && "15px 15px 0 0",
                overflow: "hidden",
              }}
            >
              <Typography
                variant="subtitle2"
                sx={{
                  backgroundColor: "#840A9F",
                  color: "white",
                  padding: "2px 10px 2px 2px",
                  borderRadius: "0 10px 10px 0",
                }}
              >
                Module {index + 1}
              </Typography>
              <Box
                p={1}
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: matches ? "column" : "row",
                }}
              >
                <Typography variant="body2" color="black">
                  {modTitle}
                </Typography>

                {matches && <Divider fullWidth />}

                <Typography variant="body2" color="black">
                  Content: {lectures.length} lessons
                </Typography>
              </Box>
            </Box>
            <Divider fullWidth />

            {lectures.map(({ text, time, percent, link }, i) => {
              return (
                <>
                  <Box
                    py={1}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexDirection: matches ? "column" : "row",
                    }}
                  >
                    <Link
                      to={`/member/academy/foundations/${link}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Box ml={1} display="flex">
                        <PlayArrowOutlinedIcon
                          style={{
                            fontSize: "1.5rem",
                            verticalAlign: "-5px",
                            color: "#5c5c5e",
                          }}
                        />
                        <Typography variant="body2" color="#5c5c5e">
                          {link}. {text}
                        </Typography>
                      </Box>
                    </Link>
                    <Box
                      ml={1}
                      mr={1.5}
                      px={matches && 1}
                      color="#5c5c5e"
                      sx={{
                        display: "flex",
                        width: matches ? "100%" : "30%",
                      }}
                    >
                      <Button
                        variant="body2"
                        color="black"
                        disableRipple
                        ml={1}
                        sx={{
                          backgroundColor: "#EBE8F3",
                          padding: "5px 10px",
                        }}
                      >
                        <AccessTimeIcon
                          style={{
                            fontSize: "1.1rem",
                            verticalAlign: "-4px",
                            color: "#5c5c5e",
                          }}
                        />
                        <span>{time}</span>
                      </Button>

                      <Typography mt={1} mx={1} variant="body2">
                        {percent}%
                      </Typography>
                      <Slider
                        aria-label="Volume"
                        value={percent}
                        sx={{
                          width: "100px",
                          height: "12px",
                          color: "#E2E1EE",
                          "& .MuiSlider-track": {
                            border: "none",
                            height: "8px",
                            backgroundColor: "transparent",
                            backgroundImage:
                              "linear-gradient(90deg,#a5db39,#7ca901)",
                          },
                          "& .MuiSlider-thumb": {
                            width: "0px",
                            height: "0px",
                            color: "#e09504",
                            marginLeft: "-7px",
                          },
                        }}
                      />
                    </Box>
                  </Box>
                  <Divider fullWidth />
                </>
              );
            })}
          </>
        );
      })}
    </Box>
  );
};
export default FoundationOutline;
