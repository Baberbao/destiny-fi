import {
  Container,
  Grid,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  useMediaQuery,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React from "react";

import StyledButton from "../Button/Button";

import bgbusiness from "../../images/bg-business.jpg";
import imgft from "../../images/img-ft-5.jpg";

const Affiliateprogram = () => {
  const matches = useMediaQuery("(min-width: 850px)");
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box>
      <Box
        sx={{
          background: `url(${bgbusiness})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: { md: "100% 100%", xs: "cover" },
          // backgroundPosition: { md: "center", xs: "left" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          pt: "220px",
        }}
      >
        <Container>
          <Box
            sx={{
              maxWidth: "900px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              textAlign: "center",
              margin: "auto",
            }}
          >
            <Typography variant="h3" color="#fff" mt={6}>
              HOW DOES IT WORK
            </Typography>
            <Typography variant="h1" color="#fff" my={1}>
              Our <span style={{ color: "#E37336" }}> Affiliate</span> Program
            </Typography>
            <Typography variant="body1" mt={3} mb={4} color="primary.defiText">
              When you become a member of our community you join a global
              movement of blockchain technology enthusiasts helping others
              navigate through the world of decentralized finance, blockchain,
              NFTs, smart contracts, and other technologies.
            </Typography>
            <Typography variant="body1" color="primary.defiText">
              Opportunities to earn from decentralized systems on the blockchain
              are still uncharted territory. How to participate in them is
              unknown to many. Our members have PREMIUM ACCESS to tailor-made,
              community-specific education and information on the latest
              decentralized platforms, which allow them to have early access to
              new income opportunities within the blockchain universe and
              capitalize on their newly acquired knowledge.
            </Typography>
            <Box my={4}>
              <StyledButton>Join as a Member</StyledButton>
            </Box>
            <Box fontSize="15px" mb={4} color="#9567B9">
              Do you want to know more?
            </Box>
          </Box>
        </Container>
      </Box>

      <Container>
        <Grid container spacing={2} my={7}>
          <Grid item md={6} xs={12}>
            <Box>
              <img src={imgft} alt="" width="100%" />
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box>
              <Typography variant="h3" mb={1}>
                LEARN ABOUT OUR
              </Typography>
              <Typography variant="h2" mb={4}>
                Compensation Plan
              </Typography>
              <Typography variant="body1" mb={2}>
                As a member of the community you can also earn a 5% reward from
                over 700,000 possible package sales on every community you join.
              </Typography>
              <Typography variant="body1" mb={2}>
                You can participate in Master global communities and earn from
                those communities as well. The rewards distributions are handled
                automatically by a smart contract and distributed instantly.
              </Typography>
              <Typography variant="body1" mb={2}>
                You can also earn up to 15% referral rewards for all the people
                you invite and participate in global revenue pools.
              </Typography>
              <Box
                fontSize="16px"
                color="#7770B0"
                sx={{
                  cursor: "pointer",
                  borderBottom: "1px dashed #7770B0",
                  width: "fit-content",
                }}
              >
                View the compensation plan
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            maxWidth: "850px",
            m: "auto",
            mt: 10,
            mb: 7,
          }}
        >
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
            sx={{
              border: "2px dashed #d1d0d7",
              boxShadow: "none",
            }}
          >
            <AccordionSummary
              sx={{
                ml: matches ? 25 : 1,
                "&:hover": {
                  color: "#dda0b9",
                },
              }}
              expandIcon={<KeyboardArrowDownIcon />}
            >
              <Box
                fontSize={{ xs: "14px", sm: "17px", md: "20px" }}
                fontWeight="600"
              >
                Learn more about the free affiliate option
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Typography variant="body1">
                  Our goal is to give access to anyone who wishes to participate
                  regardless of their financial situation. Therefore we have
                  created a free affiliate program where people can become
                  affiliates by simply paying the transaction fees (Gas fee) of
                  starting their contract. No purchase is necessary.
                </Typography>
                <Typography variant="body1" my={3}>
                  You start earning a 5% direct sale reward on the purchases of
                  your first four personally referred members per community.
                </Typography>
                <Typography variant="body1">
                  After that your account are automatically upgraded to
                  "qualified affiliate" and can now participate in that
                  community to start earning community rewards.
                </Typography>
                <Box my={4} textAlign="center">
                  <StyledButton>Create a Free Affiliate Account</StyledButton>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </Box>
  );
};

export default Affiliateprogram;
