import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

import memdefiBG from "../../../images/memdefiBG.png";
import defimember from "../../../images/defimember.png";
import session1 from "../../../images/session1.png";
import loading from "../../../images/loading.svg";

function DefifireFX() {
  const matches = useMediaQuery("(min-width: 600px)");
  const list = [
    "This product will educate you on the fundamentals.",
    "Learn how to open your own broker account.",
    "Access Basic, Intermediate, and Advance Levels of courses.",
    "Learn how to trade immediately using DeFi FX tools and strategies.",
    "Exclusive and proprietary indicator tool saves you time, seeks buy/sell opportunities.",
    "Software is constantly monitored and studied by professional traders so that it is always updated with the trends and changes that occur in the market.",
  ];

  return (
    <Box bgcolor="#ededf5">
      <Box
        sx={{
          background: `url(${memdefiBG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <Container>
          <Box py={13}>
            <Box textAlign="center">
              <img src={defimember} alt="" />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography variant="h4" color="#fff" mb={1}>
                Defi <span style={{ color: "#E37336" }}>Fire</span> Academy
              </Typography>
              <Typography variant="h2" color="white" mb={1.5}>
                FOREX TRADING
              </Typography>
            </Box>

            <Typography
              py={5}
              px={matches ? 3 : 1}
              variant="body2"
              color="primary.defiText"
              textAlign="center"
            >
              The volume of trading in forex markets stands at more than $5
              trillion a day, much more than the volume on the New York Stock
              Exchange. DeFi FX will equip you with the tools to give you that
              edge you need to capitalize on the largest trading market.
            </Typography>

            <Box
              textAlign="left"
              color="primary.defiText"
              width={{ xs: "100%", md: "67%" }}
              m="auto"
            >
              <ul style={{ listStyle: "none" }}>
                {list.map((text) => {
                  return (
                    <Box display="flex" mb={1.5}>
                      <DoneIcon
                        fontSize="small"
                        sx={{
                          color: "#62D21F",
                          marginRight: "10px",
                        }}
                      />
                      <li style={{ fontSize: "16px" }}>{text}</li>
                    </Box>
                  );
                })}
              </ul>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        py={13}
        sx={{
          background: `url(${session1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <Container>
          <Box pb={12} textAlign="center">
            <Box>
              <img src={loading} alt="" />
            </Box>

            <Typography variant="h4" mt={2}>
              More Coming Soon...
            </Typography>

            <Typography variant="subtitle2" color="primary.light" mt={4} px={2}>
              There are plenty of opportunities available for those interested
              in applying their skills and working with DeFinity FI. Utilize any
              of our offered software to simplify and automate your portfolio.
              You can also participate in deals we negotiate for our community
              for other DeFI projects.
            </Typography>
          </Box>
          <Box
            bgcolor="#d9e0f5"
            py={4}
            px={4}
            sx={{
              borderRadius: "20px 0 20px 0",
              display: "flex",
              alignItems: "center",
              justifyContent: matches ? "space-between" : "center",
              flexDirection: matches ? "row" : "column",
            }}
          >
            <Typography
              variant="body2"
              mr={matches ? 5 : 0}
              textAlign={matches ? "left" : "center"}
              width={matches ? "85%" : "100%"}
            >
              Please make sure to check our{" "}
              <strong>Live Lessons Section.</strong> Customers and Members can
              access, learn through an interactive training with questions and
              answers.
            </Typography>
            <Button
              disableRipple={true}
              sx={{
                background: "#e7ca05",
                color: "#fff",
                paddingY: "6px",
                marginTop: matches ? 0 : 4,
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
              Live Lessons
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default DefifireFX;
