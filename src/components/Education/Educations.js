import React from "react";
import { Grid, Container, Box, Typography } from "@mui/material";
import "./Education.css";

import bgimg from "../../images/bg2.jpg";
import Diamond from "../../images/diamond.png";
import smalldiamond from "../../images/small-diamond.png";
import cryptoNet from "../../images/cryptoNet.png";
import horseDiamond from "../../images/horseDiamond.png";
import secureCrypto from "../../images/secureCrypto.png";
import groupEarn from "../../images/groupEarn.png";
import growth from "../../images/growth.png";
import arrowBoard from "../../images/arrowBoard.png";

const cardsArray = [
  {
    icon: `${cryptoNet}`,
    upperText: "CRYPTO",
    lowerText: "EXPLAINED",
  },
  {
    icon: `${horseDiamond}`,
    upperText: "TRADING",
    lowerText: "STRATEGIES",
  },
  {
    icon: `${secureCrypto}`,
    upperText: "SAFETY &",
    lowerText: "SECURITY",
  },
  {
    icon: `${groupEarn}`,
    upperText: "THE METAVERSE",
    lowerText: "ECONOMY",
  },
  {
    icon: `${growth}`,
    upperText: "NFTS &",
    lowerText: "MARKETPLACE",
  },
  {
    icon: `${arrowBoard}`,
    upperText: "Defi Fire LENDING",
    lowerText: "& YIELD FARMING",
  },
];

function Educations() {
  const diamondleft = {
    width: "17px",
    height: "17px",
    textAlign: "left",
    position: "relative",
    left: "-7px",
    top: "8px",
  };
  const diamond = {
    width: "17px",
    height: "17px",
    textAlign: "right",
    position: "relative",
    right: "-40px",
    top: "8px",
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${bgimg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          py: 6,
          mb: 2,
        }}
      >
        <Container>
          <Box pb={2} pt={7} textAlign="center">
            <img src={Diamond} alt="" />
          </Box>
          <Box py={3} textAlign="center">
            <Typography variant="h2" color="#fff">
              EDUCATION THAT <br />
              UNDERSTANDS YOU
            </Typography>
          </Box>
          <Box textAlign="center">
            <Typography variant="body1" color="primary.defiText" mt={2}>
              The Defi Fire Academy provides education on new technology and
              markets for all skill levels.
            </Typography>
            <Typography variant="body1" color="primary.defiText">
              The education is tailor-made and can consist of recorded courses,
              interactive courses, assignments, homework, and live training.
            </Typography>
            <Typography variant="body1" color="primary.defiText" mt={3} mb={7}>
              Our base educational package is accessible for as little as $30.
            </Typography>
          </Box>

          {/* -------------Design with small diamonds and dashes------------- */}
          <Box display={{ xs: "none", md: "block" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={smalldiamond}
                alt=""
                style={{
                  textAlign: "center",
                  marginBottom: "-5px",
                  zIndex: 0,
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                // flexDirection: "column",
                alignItems: "center",
                pt: 2,
              }}
            >
              <span
                style={{
                  width: "60px",
                  marginBottom: "-2px",
                  height: "65px",
                  borderRight: "2px dashed #625970",
                  borderBottom: "2px dashed #625970",
                  borderRadius: " 0 0 25px 0",
                }}
              ></span>
              <span
                style={{
                  width: "60px",
                  marginBottom: "-2px",
                  height: "65px",
                  borderLeft: "0px dashed #625970",
                  borderBottom: "2px dashed #625970",
                  borderRadius: " 0 0 0px 25px",
                }}
              ></span>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                zIndex: "100",
              }}
            >
              <Box className="left-box"></Box>
              <Box className="right-box"></Box>
            </Box>
            {/* .................................//brand sections......................... */}

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                zIndex: "200",
              }}
            >
              {/* //Crypoto explained sections */}
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  className="brand-first-section"
                  sx={{
                    width: "50px",
                    height: "45px",
                    borderTop: "2px dashed #625970",
                    borderLeft: "2px dashed #625970",
                    marginTop: "-2px",
                  }}
                ></Box>
                <img src={smalldiamond} alt="" style={diamondleft} />
              </Box>
              {/* ....................Trading sections...................... */}
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  className="brand-first-section"
                  sx={{
                    width: "50px",
                    height: "45px",
                    borderTop: "2px dashed #625970",
                    borderLeft: "2px dashed #625970",
                    marginTop: "-2px",
                  }}
                ></Box>
                <img src={smalldiamond} alt="" style={diamondleft} />
              </Box>
              {/* .......................Sefty security sections................... */}
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  className="brand-first-section"
                  sx={{
                    width: "50px",
                    height: "45px",
                    borderTop: "2px dashed #625970",
                    borderLeft: "2px dashed #625970",
                    marginTop: "-2px",
                  }}
                ></Box>
                <img src={smalldiamond} alt="" style={diamondleft} />
              </Box>
              {/* ..........................Right side section........................... */}
              {/* .......................Metaverse sections........................... */}
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  className="brand-second-section"
                  sx={{
                    width: "50px",
                    height: "45px",
                    borderTop: "2px dashed #625970",
                    borderRight: "2px dashed #625970",
                    marginTop: "-2px",
                  }}
                ></Box>
                <img src={smalldiamond} alt="" style={diamond} />
              </Box>
              {/* ...................NFT section ............................... */}
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  className="brand-second-section"
                  sx={{
                    width: "50px",
                    height: "45px",
                    borderTop: "2px dashed #625970",
                    borderRight: "2px dashed #625970",
                    marginTop: "-2px",
                  }}
                ></Box>
                <img src={smalldiamond} alt="" style={diamond} />
              </Box>
              {/* .......................Defi lending sections...................... */}
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  className="brand-second-section"
                  sx={{
                    width: "50px",
                    height: "45px",
                    borderTop: "2px dashed #625970",
                    borderRight: "2px dashed #625970",
                    marginTop: "-2px",
                  }}
                />
                <img src={smalldiamond} alt="" style={diamond} />
              </Box>
            </Box>
          </Box>
          {/* /////////////////////////////////////////////////////////////// */}

          {/* ------------images branding for Web view------------ */}
          <Box mt={4} mb={7} display={{ xs: "none", md: "block" }}>
            <Grid container spacing={3}>
              <Grid item xs={2} sx={{ textAlign: "center" }}>
                <Box sx={{ position: "relative", left: "21%" }}>
                  <img src={cryptoNet} alt="" />
                  <Box fontSize="16px" color="#b8b4e2" fontWeight="700">
                    CRYPTO
                    <br />
                    EXPLAINED
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={2} sx={{ textAlign: "center" }}>
                <Box sx={{ position: "relative", left: "9%" }}>
                  <img src={horseDiamond} alt="" />
                  <Box fontSize="16px" color="#b8b4e2" fontWeight="700">
                    TRADING
                    <br />
                    STRATEGIES
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={2} sx={{ textAlign: "center" }}>
                <Box sx={{ position: "relative", right: "7%" }}>
                  <img src={secureCrypto} alt="" />
                  <Box fontSize="16px" color="#b8b4e2" fontWeight="700">
                    SAFETY & <br />
                    SECURITY
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={2} sx={{ textAlign: "center" }}>
                <Box sx={{ position: "relative", left: "7%" }}>
                  <img src={groupEarn} alt="" />
                  <Box fontSize="16px" color="#b8b4e2" fontWeight="700">
                    THE METAVERSE
                    <br />
                    ECONOMY
                  </Box>
                </Box>
              </Grid>

              <Grid item xs={2} sx={{ textAlign: "center" }}>
                <Box sx={{ position: "relative", right: "7%" }}>
                  <img src={growth} alt="" />
                  <Box fontSize="16px" color="#b8b4e2" fontWeight="700">
                    NFTS & <br />
                    MARKETPLACE
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={2} sx={{ textAlign: "center" }}>
                <Box sx={{ position: "relative", right: "21%" }}>
                  <img src={arrowBoard} alt="" />
                  <Box fontSize="16px" color="#b8b4e2" fontWeight="700">
                    Defi Fire Lending <br />& YIELD FARMING
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
          {/* ------------images branding for Mobile view------------ */}
          <Box mt={5} mb={6} display={{ xs: "block", md: "none" }}>
            <Grid container spacing={4}>
              {cardsArray.map(({ icon, upperText, lowerText }, i) => {
                return (
                  <Grid item xs={6} sm={4} sx={{ textAlign: "center" }}>
                    <img src={icon} alt="" />
                    <Box fontSize="14px" color="#b8b4e2" fontWeight="700">
                      {upperText} <br />
                      {lowerText}
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Educations;
