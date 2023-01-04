import { Box, Button, Container, Typography, Grid } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { HashLink } from "react-router-hash-link";

import defi from "../../assets/defi.png";
import Logolast from "../../assets/Logolast.png";
import questionMark from "../../assets/questionMark.png";
import horse from "../../assets/horse.png";
import light from "../../assets/light.png";
import consult from "../../assets/consult.png";
import bgPic1 from "../../assets/productBG1.jpg";
import bgPic2 from "../../assets/productBG2.jpg";
import bgPic3 from "../../assets/productBG3.jpg";
import bgPic4 from "../../assets/productBG4.jpg";
import chart from "../../assets/chart.PNG";
import AIdriven from "../../assets/AIdriven.PNG";
import laptop from "../../assets/laptop.png";
import AItech from "../../assets/AItech.png";
import AIlogo from "../../assets/AIlogo.PNG";
import downarrow from "../../assets/downarrow.PNG";
import network from "../../assets/network.PNG";
import design1 from "../../assets/design1.png";
import design2 from "../../assets/design2.png";
// import design3 from "../../assets/design3.png";
import pic1 from "../../assets/pic1.png";
import pic2 from "../../assets/pic2.png";

const StyledButton = ({ children, ...props }) => {
  return (
    <Button
      disableRipple={true}
      {...props}
      sx={{
        background: "#e7ca05",
        color: "#fff",
        textAlign: "center",
        height: "45px",
        padding: "11px 30px",
        borderRadius: "4px",
        transition: ".2s linear",
        boxShadow: "0 2px 1px rgb(3 3 3 / 10%), 0 3px 5px rgb(3 3 3 / 10%)",
        "&:hover": {
          background: "#e7ca05",
        },
      }}
    >
      {children}
    </Button>
  );
};

function Product() {
  const solveCard = [
    {
      image: `${horse}`,
      subtitle: "Education & Training",
      content:
        "We specifically focuses on educating customers on the ins and outs of financial trading so that you know how to trade cryptocurrency and on Forex to achieve your financial goals for the first time. We will show you what it is, how it works, and how to use the software to trade.",
    },
    {
      image: `${light}`,
      subtitle: "Revolutionary Technology",
      content:
        "We are the first financial trading company to make use AI Forex Trading Software like this. This technology can successfully trade on your behalf using a sophisticated algorithm to always buy and sell at the right moment.",
    },
    {
      image: `${consult}`,
      subtitle: "Constant Improvements",
      content:
        "We don't just run the technology and let it do its thing. Our team is constantly perfecting and enhancing this technology in line with the latest industry standards to get you the best results time and again.",
    },
  ];

  const list = [
    "You can effectively and efficiently learn about Forex trading and cryptocurrency on our platform",
    "You gain access to the most sophisticated AI technology that can trade on your behalf",
    "You benefit from the advanced expertise of financial experts who are constantly updating the AI technology",
    "You are assured complete transparency regarding all trading activities thanks to cryptocurrency and smart contracts",
    "You can passively earn an income since the algorithm will trade on your behalf when it's the best time to buy or sell",
    "You have the constant support of an experienced and skilled team who can answer all your questions and address your concerns",
  ];
  return (
    <>
      {/* ------------------Main part of defi-fx page--------------------- */}
      <Box
        sx={{
          background: `url(${bgPic1})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          // backgroundSize: "100% 100%",
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              py: "200px",
            }}
          >
            <Box mb={5} display="flex" alignItems="center">
              <img src={defi} alt="" width="105px" height="85px" />
              <Typography variant="h1" color="white" ml={{ xs: 1, md: 2 }}>
                Defi Fire <span style={{ color: "#70d901" }}>FX</span>
              </Typography>
            </Box>
            <Typography color="white" variant="h1">
              We're Making It Possible
            </Typography>
            <Typography color="white" variant="h1">
              For Everyone To Trade{" "}
              <span style={{ color: "#f79623" }}>FOREX!</span>
            </Typography>
            <Typography mt={4} color="white" variant="body1">
              Leverage Consistently Updated AI Technology To Passively Earn An
              Income
            </Typography>

            <Box mt={4}>
              <HashLink to="/joinacademy" style={{ textDecoration: "none" }}>
                <StyledButton>start trading now</StyledButton>
              </HashLink>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* ------------------AI based Forex part of defi-fx page--------------------- */}
      <Box
        py={5}
        sx={{
          background: `url(${bgPic2})`,
          backgroundPosition: "center",
        }}
      >
        <Container>
          <Box
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            justifyContent={{ xs: "center", md: "space-between" }}
            alignItems="center"
          >
            <Box
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
              justifyContent="center"
              alignItems="center"
              px={4}
              width={{ xs: "100%", md: "30%" }}
            >
              <img src={chart} alt="" />
              <Typography
                variant="body1"
                fontWeight="700"
                color="white"
                pl={{ xs: 0, md: 3 }}
              >
                Why AI Based Forex Trading?
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{
                borderLeft: { xs: "none", md: "1px solid #5f6371" },
                paddingY: "2px",
                paddingLeft: { xs: "0px", md: "40px" },
                marginTop: { xs: "20px", md: "0px" },
                width: { xs: "100%", md: "70%" },
                color: "primary.defiText",
              }}
            >
              Our AI technology create algorithms that runs 24/7 on your trading
              server. This means it automatically trades on your behalf when the
              algorithm establishes the best time to buy or sell. We know what
              you might be thinking – Why should I trust your algorithm? But,
              here’s the thing – trust doesn’t even factor into it.
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box textAlign="center">
        <img src={design1} alt="" />
      </Box>

      {/* ------------------AI-driven  part of defi-fx page--------------------- */}
      <Box py={10}>
        <Container>
          <Box textAlign="center">
            <img src={AIdriven} alt="" />
            <Typography variant="h2" mb={4} mt={3}>
              AI-driven technology <br /> and cryptocurrency
            </Typography>
            <Typography variant="body1" width="95%" m="auto">
              One of the true marvels of AI-driven technology and cryptocurrency
              is the way it has made money-making accessible and transparent to
              the masses – not just an elite group of traders in the know. But
              the first order of business is to educate the average person who
              also wants to earn an income without doing much of anything!
            </Typography>
          </Box>

          <Box pt={10}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                <Typography variant="body1">
                  Defi Fire FX is one of the few offering FOREX software that
                  not only uses{" "}
                  <span style={{ fontWeight: "600", color: "#231E30" }}>
                    AI technology,
                  </span>{" "}
                  but also has the first-to-market AI technology that draws on
                  decades of data and the expertise of professional traders in
                  the most successful markets of Forex.
                </Typography>
                <Typography variant="body1" mt={3}>
                  We bring you a new way of trading by not only educating you
                  about Forex and cryptocurrency along the way, but also by
                  enabling you to earn at the lowest level of risk with
                  <span style={{ fontWeight: "600", color: "#231E30" }}>
                    {" "}
                    Forex trading software technology.
                  </span>
                </Typography>
              </Grid>
              <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                <img src={laptop} alt="" width="100%" />
              </Grid>
            </Grid>
            <Box mt={4} textAlign="center">
              <HashLink to="/joinacademy" style={{ textDecoration: "none" }}>
                <StyledButton>start trading now</StyledButton>
              </HashLink>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ------------------AItechnology part of defi-fx page--------------------- */}

      <Box
        mt={3}
        sx={{
          background: `url(${bgPic3})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <Box textAlign="center">
          <img src={design2} alt="" />
        </Box>
        <Container>
          <Box textAlign="center" py={10}>
            <img src={AIlogo} alt="" />
            <Typography variant="h3" color="#fff" mt={4} mb={1}>
              What Makes Our
            </Typography>
            <Typography variant="h2" mb={7} color="#fff">
              AI TECHNOLOGY Different?
            </Typography>
            <Typography
              variant="body1"
              width="95%"
              m="auto"
              color="primary.defiText"
            >
              One of the true marvels of AI-driven technology and cryptocurrency
              is the way it has made money-making accessible and transparent to
              the masses – not just an elite group of traders in the know. But
              the first order of business is to educate the average person who
              also wants to earn an income without doing much of anything!
            </Typography>
          </Box>

          <Box py={10}>
            <Grid container spacing={5}>
              <Grid item xs={12} md={6}>
                <img src={AItech} alt="" width="100%" />
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h3" color="#fff" mt={4}>
                  Our approach
                </Typography>
                <Typography variant="body1" mt={3} color="primary.defiText">
                  Our approach is different – and much more successful – because
                  we understand that technology has to constantly be updated.
                </Typography>
                <Typography variant="body1" mt={3} color="primary.defiText">
                  Our team of software architects continuously update the
                  software to mind the continuous changes also involve the
                  integration of latest world trends and economic ups and downs.
                  So, you can continuously receive the gains on your investments
                  regardless of what's happening around the world.
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Box textAlign="center" pt={5} pb={10}>
            <img src={downarrow} alt="" />
            <Typography variant="h3" color="#fff" my={3}>
              Reducing Volatility
            </Typography>

            <Typography
              variant="body1"
              width="95%"
              m="auto"
              color="primary.defiText"
            >
              We are here to help ordinary people increase their crypto holdings
              by reducing the risk of volatility and leveraging the stability of
              Forex through AI technology.
            </Typography>
            <Box mt={4}>
              <HashLink to="/joinacademy" style={{ textDecoration: "none" }}>
                <StyledButton>start trading now</StyledButton>
              </HashLink>
            </Box>
          </Box>
        </Container>
      </Box>
      {/* <Box textAlign="center">
        <img src={design3} alt="" />
      </Box> */}

      <Container>
        <Box textAlign="center" py={12}>
          <img src={network} alt="" />
          <Typography variant="h3" mt={4} mb={1}>
            How It All Works
          </Typography>
          <Typography variant="h2" mb={7}>
            Earn A Passive Income With Confidence!
          </Typography>
          <Typography variant="body1" width="95%" m="auto">
            Our customers buy products using Binance Coin – a cryptocurrency –
            and then they immediately gain access to the member area as well as
            training for the product. From here, they can also purchase more
            training and access the Forex trading software. So, you may be
            wondering – why Forex? In a nutshell, Forex is the most successful
            financial market, trading an average of approximately $6.6 trillion
            a day and 2.409 quadrillion annually!
          </Typography>
        </Box>
      </Container>

      {/* ------------------Why choose us part of defi-fx page--------------------- */}

      <Box
        sx={{
          background: `url(${bgPic4})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <Box textAlign="center" sx={{ position: "relative", zIndex: 3 }}>
          <img src={design2} alt="" />
        </Box>
        <Box sx={{ position: "absolute", zIndex: 1, marginTop: "-63px" }}>
          <img src={pic2} alt="" width="100%" />
        </Box>
        <Container>
          <Box textAlign="center" py={12}>
            <img
              src={Logolast}
              alt=""
              style={{ position: "relative", zIndex: 3 }}
            />
            <Typography variant="h3" color="#fff" mt={4} mb={1}>
              What Problems
            </Typography>
            <Typography variant="h2" color="#fff" mb={7}>
              Do we solve for you?
            </Typography>
            <Typography
              variant="body1"
              width="95%"
              m="auto"
              color="primary.defiText"
            >
              One of the main problems with Forex trading and cryptocurrency is
              that most people just don't understand how it all works, and they
              don't want to risk losing their hard-earned money.
            </Typography>
          </Box>

          <Box pb={10}>
            <Grid container spacing={5} textAlign="center">
              {solveCard.map(({ image, subtitle, content }) => {
                return (
                  <Grid item xs={12} sm={4} md={4}>
                    <img src={image} alt="" />
                    <Typography
                      variant="body1"
                      fontWeight="600"
                      color="white"
                      mt={1}
                    >
                      {subtitle}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="primary.defiText"
                      textAlign="left"
                      mt={2}
                    >
                      {content}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Box>

          <Box pt={10} textAlign="center">
            <img src={questionMark} alt="" />
            <Typography variant="h2" color="#fff" mt={3} mb={7}>
              So, Why Choose Us?
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
                        sx={{ color: "#62D21F", marginRight: "10px" }}
                        fontSize="small"
                      />
                      <li>{text}</li>
                    </Box>
                  );
                })}
              </ul>
            </Box>

            <Typography variant="body1" color="white" mt={6}>
              Work towards financial freedom through Forex and cryptocurrency!
            </Typography>

            <Box mt={4}>
              <HashLink to="/joinacademy" style={{ textDecoration: "none" }}>
                <StyledButton>join Defi Fire now!</StyledButton>
              </HashLink>
            </Box>
          </Box>
        </Container>
        <Box mb={-1}>
          <img src={pic1} alt="" width="100%" />
        </Box>
      </Box>
    </>
  );
}

export default Product;
