import { Box, Container, useMediaQuery, Typography } from "@mui/material";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import roadmapBG from "../../../images/roadmapBG.png";
import session1 from "../../../images/session1.png";
import roadmapIcon1 from "./assets/roadmapIcon1.PNG";
import roadmapIcon2 from "./assets/roadmapIcon2.PNG";
import roadmapIcon3 from "./assets/roadmapIcon3.PNG";
import roadmapIcon4 from "./assets/roadmapIcon4.PNG";
import roadmapIcon5 from "./assets/roadmapIcon5.PNG";
import roadmapIcon6 from "./assets/roadmapIcon6.PNG";
import roadmapIcon7 from "./assets/roadmapIcon7.PNG";

function RoadMap() {
  const matches2 = useMediaQuery("(max-width: 950px)");

  return (
    <Box bgcolor="#ededf5" pb={10}>
      <Box
        sx={{
          background: `url(${roadmapBG})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <Container>
          <Box pt={12} pb={14}>
            <Box textAlign="center">
              <NearMeOutlinedIcon fontSize="large" sx={{ color: "#fff" }} />
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
                ROADMAP
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          background: `url(${session1})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <Container>
          <Typography variant="h5" fontWeight="400" textAlign="center" py={10}>
            So what's coming next from Definity FI this year?
          </Typography>

          <Box className="mainTimeline">
            <VerticalTimeline
              animate={true}
              layout={"1-column-left"}
              lineColor={"#232432"}
            >
              {/* ---------two month road map------- */}
              <VerticalTimelineElement
                // className="vertical-timeline-element--work"
                contentStyle={{
                  backgroundColor: "transparent",
                  color: "#fff",
                  border: "none",
                  borderRadius: "20px",
                  //   width: "100%",
                  padding: "0px",
                  boxShadow: "none",
                }}
                iconStyle={{
                  backgroundColor: "#d0bfff",
                  height: "35px",
                  width: "35px",
                  borderRadius: "50px",
                  border: "none",
                  marginLeft: "2px",
                  outline: "none",
                  boxShadow: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                icon={
                  <>
                    <LocationOnOutlinedIcon
                      sx={{
                        marginLeft: "-35px !important",
                        marginTop: "-32px !important",
                      }}
                    />
                  </>
                }
              >
                <Typography variant="body2" pt={matches2 ? "5px" : "4px"}>
                  In the{" "}
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      borderBottom: "1px dashed #25272b",
                    }}
                  >
                    next two months
                  </span>
                </Typography>

                <Box
                  mt={{ xs: 4, md: 6 }}
                  ml={{ xs: 1, md: 3 }}
                  bgcolor="#fff"
                  width={{ xs: "100%", sm: "65%", md: "45%" }}
                  borderRadius="20px 0 20px 0"
                  py={4}
                  px={3}
                  position="relative"
                >
                  <Box
                    px={2}
                    pt={1.5}
                    pb={0.5}
                    bgcolor="#90be6d"
                    sx={{
                      position: "absolute",
                      borderRadius: "0 0 0 20px",
                      right: 0,
                      top: 0,
                      zIndex: 1,
                    }}
                  >
                    <img src={roadmapIcon1} alt="" />
                  </Box>
                  <Typography variant="h4" mt={1}>
                    DeFi FX
                  </Typography>
                  <Typography variant="body2" color="primary.light">
                    With the integration of this system you will have the tools
                    that will equip you to earn while learning about the
                    powerful world of Forex.
                  </Typography>
                </Box>
                <Box
                  mt={3}
                  ml={{ xs: 1, md: 3 }}
                  bgcolor="#fff"
                  width={{ xs: "100%", sm: "65%", md: "45%" }}
                  borderRadius="20px 0 20px 0"
                  py={4}
                  px={3}
                  position="relative"
                >
                  <Box
                    px={2}
                    pt={1.5}
                    pb={0.5}
                    bgcolor="#57c6d8"
                    sx={{
                      position: "absolute",
                      borderRadius: "0 0 0 20px",
                      right: 0,
                      top: 0,
                      zIndex: 1,
                    }}
                  >
                    <img src={roadmapIcon2} alt="" />
                  </Box>
                  <Typography variant="h4" mt={1}>
                    Crypto ProTrader
                  </Typography>
                  <Typography variant="body2" color="primary.light">
                    This algorithm allows you to grow your portfolio simply by
                    picking two strategies, while you retain full control of
                    your digital assets.
                  </Typography>
                </Box>
              </VerticalTimelineElement>

              {/* ---------six month road map------- */}
              <VerticalTimelineElement
                // className="vertical-timeline-element--work"
                contentStyle={{
                  backgroundColor: "transparent",
                  color: "#fff",
                  border: "none",
                  borderRadius: "20px",
                  //   width: "100%",
                  padding: "0px",
                  boxShadow: "none",
                }}
                iconStyle={{
                  backgroundColor: "#d0bfff",
                  height: "35px",
                  width: "35px",
                  borderRadius: "50px",
                  border: "none",
                  marginLeft: "2px",
                  outline: "none",
                  boxShadow: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                icon={
                  <>
                    <LocationOnOutlinedIcon
                      sx={{
                        marginLeft: "-35px !important",
                        marginTop: "-32px !important",
                      }}
                    />
                  </>
                }
              >
                <Typography variant="body2" pt={matches2 ? "5px" : "4px"}>
                  In the{" "}
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      borderBottom: "1px dashed #25272b",
                    }}
                  >
                    next six months
                  </span>
                </Typography>

                <Box
                  mt={{ xs: 4, md: 6 }}
                  ml={{ xs: 1, md: 3 }}
                  bgcolor="#fff"
                  width={{ xs: "100%", sm: "65%", md: "45%" }}
                  borderRadius="20px 0 20px 0"
                  py={4}
                  px={3}
                  position="relative"
                >
                  <Box
                    px={2}
                    pt={1.5}
                    pb={0.5}
                    bgcolor="#ffb76a"
                    sx={{
                      position: "absolute",
                      borderRadius: "0 0 0 20px",
                      right: 0,
                      top: 0,
                      zIndex: 1,
                    }}
                  >
                    <img src={roadmapIcon3} alt="" />
                  </Box>
                  <Typography variant="h4" mt={1}>
                    Education - Phase Two
                  </Typography>
                  <Typography variant="body2" color="primary.light">
                    As you evolve, you will want to expand your strategies. You
                    will learn to navigate correctly, safely, confidently and
                    with the necessary information that leads you on the path of
                    becoming a true professional.
                  </Typography>
                </Box>
                <Box
                  mt={3}
                  ml={{ xs: 1, md: 3 }}
                  bgcolor="#fff"
                  width={{ xs: "100%", sm: "65%", md: "45%" }}
                  borderRadius="20px 0 20px 0"
                  py={4}
                  px={3}
                  position="relative"
                >
                  <Box
                    px={2}
                    pt={1.5}
                    pb={0.5}
                    bgcolor="#e392f4"
                    sx={{
                      position: "absolute",
                      borderRadius: "0 0 0 20px",
                      right: 0,
                      top: 0,
                      zIndex: 1,
                    }}
                  >
                    <img src={roadmapIcon4} alt="" />
                  </Box>
                  <Typography variant="h4" mt={1}>
                    Multilingual
                  </Typography>
                  <Typography variant="body2" color="primary.light">
                    DeFinity Fi Academy's largest markets will have access to
                    education in their language.
                  </Typography>
                </Box>

                <Box
                  mt={3}
                  ml={{ xs: 1, md: 3 }}
                  bgcolor="#fff"
                  width={{ xs: "100%", sm: "65%", md: "45%" }}
                  borderRadius="20px 0 20px 0"
                  py={4}
                  px={3}
                  position="relative"
                >
                  <Box
                    px={2}
                    pt={1.5}
                    pb={0.5}
                    bgcolor="#a89aff"
                    sx={{
                      position: "absolute",
                      borderRadius: "0 0 0 20px",
                      right: 0,
                      top: 0,
                      zIndex: 1,
                    }}
                  >
                    <img src={roadmapIcon5} alt="" />
                  </Box>
                  <Typography variant="h4" mt={1}>
                    Telegram Integration
                  </Typography>
                  <Typography variant="body2" color="primary.light">
                    Start receiving notifications from system to commission
                    notifications via Telegram.
                  </Typography>
                </Box>
                <Box
                  mt={3}
                  ml={{ xs: 1, md: 3 }}
                  bgcolor="#fff"
                  width={{ xs: "100%", sm: "65%", md: "45%" }}
                  borderRadius="20px 0 20px 0"
                  py={4}
                  px={3}
                  position="relative"
                >
                  <Box
                    px={2}
                    pt={1.5}
                    pb={0.5}
                    bgcolor="#eca5a5"
                    sx={{
                      position: "absolute",
                      borderRadius: "0 0 0 20px",
                      right: 0,
                      top: 0,
                      zIndex: 1,
                    }}
                  >
                    <img src={roadmapIcon6} alt="" />
                  </Box>
                  <Typography variant="h4" mt={1}>
                    Cooperative Launchpad
                  </Typography>
                  <Typography variant="body2" color="primary.light">
                    Expand your opportunities from what you've learned by
                    connecting with new projects in the ecosystem through the
                    Launchpad.
                  </Typography>
                </Box>
              </VerticalTimelineElement>

              {/* ---------yearly road map------- */}
              <VerticalTimelineElement
                // className="vertical-timeline-element--work"
                contentStyle={{
                  backgroundColor: "transparent",
                  color: "#fff",
                  border: "none",
                  borderRadius: "20px",
                  //   width: "100%",
                  padding: "0px",
                  boxShadow: "none",
                }}
                iconStyle={{
                  backgroundColor: "#d0bfff",
                  height: "35px",
                  width: "35px",
                  borderRadius: "50px",
                  border: "none",
                  marginLeft: "2px",
                  outline: "none",
                  boxShadow: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                icon={
                  <>
                    <LocationOnOutlinedIcon
                      sx={{
                        marginLeft: "-35px !important",
                        marginTop: "-32px !important",
                      }}
                    />
                  </>
                }
              >
                <Typography variant="body2" pt={matches2 ? "5px" : "4px"}>
                  In the{" "}
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "700",
                      borderBottom: "1px dashed #25272b",
                    }}
                  >
                    next year
                  </span>
                </Typography>

                <Box
                  mt={{ xs: 4, md: 6 }}
                  ml={{ xs: 1, md: 3 }}
                  bgcolor="#fff"
                  width={{ xs: "100%", sm: "65%", md: "45%" }}
                  borderRadius="20px 0 20px 0"
                  py={4}
                  px={3}
                  position="relative"
                >
                  <Box
                    px={2}
                    pt={1.5}
                    pb={0.5}
                    bgcolor="#ffb76a"
                    sx={{
                      position: "absolute",
                      borderRadius: "0 0 0 20px",
                      right: 0,
                      top: 0,
                      zIndex: 1,
                    }}
                  >
                    <img src={roadmapIcon3} alt="" />
                  </Box>
                  <Typography variant="h4" mt={1}>
                    Education - Phase Three
                  </Typography>
                  <Typography variant="body2" color="primary.light">
                    A new step to become a pro, learn about cryptocurrency
                    trading and keep growing your portfolio with all this new
                    knowledge.
                  </Typography>
                </Box>
                <Box
                  mt={3}
                  ml={{ xs: 1, md: 3 }}
                  bgcolor="#fff"
                  width={{ xs: "100%", sm: "65%", md: "45%" }}
                  borderRadius="20px 0 20px 0"
                  py={4}
                  px={3}
                  position="relative"
                >
                  <Box
                    px={2}
                    pt={1.5}
                    pb={0.5}
                    bgcolor="#c2afd4"
                    sx={{
                      position: "absolute",
                      borderRadius: "0 0 0 20px",
                      right: 0,
                      top: 0,
                      zIndex: 1,
                    }}
                  >
                    <img src={roadmapIcon7} alt="" />
                  </Box>
                  <Typography variant="h4" mt={1}>
                    DAO Integration
                  </Typography>
                  <Typography variant="body2" color="primary.light">
                    DeFinityFI Academy's long term plan is to be the premier
                    SocialFi platform in the world. With a token launched, you
                    can earn within the community. Learn to earn, teach to earn,
                    share to earn, unite to earn., while you retain full control
                    of your digital assets.
                  </Typography>
                </Box>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default RoadMap;
