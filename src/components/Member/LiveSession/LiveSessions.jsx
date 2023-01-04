import { Box, Button, Container, Typography } from "@mui/material";

import sessionBG from "../../../images/sessionBG.jpg";
import diamond from "../../../images/diamond.png";
import session1 from "../../../images/session1.png";
import sessionCard from "../../../images/sessionCard.jpg";

const StyledBox = ({ children }) => {
  return (
    <Box
      sx={{
        background: "#ebe8f0",
        px: "20px",
        py: "3px",
        borderRadius: "50px",
        fontSize: "14px",
        mr: 1,
        mt: 1,
      }}
    >
      {children}
    </Box>
  );
};

function LiveSessions() {
  return (
    <Box bgcolor="#ededf5">
      <Box
        sx={{
          background: `url(${sessionBG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <Container>
          <Box pt={12} pb={14}>
            <Box textAlign="center">
              <img src={diamond} alt="" />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography variant="h4" color="#fff" mt={2} mb={1}>
                Defi <span style={{ color: "#E37336" }}>Fire</span> Academy
              </Typography>
              <Typography variant="h2" color="white" mb={1.5}>
                TRAINING SCHEDULE
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        py={7}
        sx={{
          background: `url(${session1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <Container>
          <Box
            bgcolor="#d9e0f5"
            py={4}
            sx={{ textAlign: "center", borderRadius: "20px 0 20px 0" }}
          >
            <Typography variant="body2">
              Goal: These webinars are supportive to On Demand Library.
              <br />
              Customers and Members can access, learn through an interactive
              training with Q and A.
            </Typography>
          </Box>

          <Box
            bgcolor={"#fff"}
            width={{ xs: "100", sm: "65%", md: "35%" }}
            m="auto"
            my={10}
            sx={{
              overflow: "hidden",
              borderRadius: "10px",
            }}
          >
            <Box>
              <img src={sessionCard} alt="" width="100%" />
            </Box>
            <Typography
              variant="subtitle2"
              sx={{
                color: "#fff",
                borderRadius: "0 50px 50px 0px",
                background: "#840A9F",
                py: "2px",
                textAlign: "center",
                width: "55%",
                position: "relative",
                mt: "-23px",
                zIndex: 1,
              }}
            >
              YOU HAVE ACCESS
            </Typography>
            <Container>
              <Typography variant="body2" mt={3} sx={{ fontWeight: "700" }}>
                BASICS 101
              </Typography>
              <Typography variant="body2" color="#ac6061">
                Thursday 6 PM PST <br />
                Friday 9AM CST Beijing
              </Typography>

              <Typography variant="body2" mt={3} color="primary.light">
                Understanding centralized exchanges, wallets, protection from
                scams, and Bitcoin and altcoins.
              </Typography>

              <Box textAlign="center" mt={3}>
                <Button
                  disableRipple={true}
                  sx={{
                    background: "#e7ca05",
                    color: "#fff",
                    paddingY: "6px",
                    width: "220px",
                    borderRadius: "10px",
                    transition: ".2s linear",
                    textTransform: "capitalize",
                    boxShadow:
                      "0 2px 1px rgb(3 3 3 / 10%), 0 3px 5px rgb(3 3 3 / 10%)",
                    "&:hover": {
                      background: "#e7ca05",
                      color: "#7d66d1",
                    },
                  }}
                >
                  Click to Register
                </Button>
              </Box>

              <Typography variant="body2" mt={4} sx={{ fontWeight: "700" }}>
                ACCESS REQUIREMENT
              </Typography>
              <Typography variant="body2" color="primary.light">
                Package 1
              </Typography>

              <Box
                mt={1}
                mb={6}
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <StyledBox>CEX</StyledBox>
                <StyledBox>Wallet</StyledBox>
                <StyledBox>Bitcoin</StyledBox>
                <StyledBox>Altcoins</StyledBox>
              </Box>
            </Container>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default LiveSessions;
