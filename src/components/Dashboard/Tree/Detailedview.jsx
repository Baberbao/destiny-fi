import {
  Box,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import i1 from "./assets/i1.PNG";
import i2 from "./assets/i2.PNG";

import directsale from "./assets/h1.png";
import overflow from "./assets/h2.png";
import cycle from "./assets/r1.png";
import reenter from "./assets/c1.png";

const Detailedview = () => {
  const matches2 = useMediaQuery("(max-width: 950px)");
  return (
    <div>
      <Box
      //  bgcolor="#FFFFFF" px={2} py={5}
      >
        {/* STEPPER  */}

        <Box className="mainTimeline" mt="100px">
          <VerticalTimeline
            animate={true}
            layout={"1-column-left"}
            lineColor={"#232432"}
          >
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                backgroundColor: "transparent",
                color: "#fff",
                border: "none",
                borderRadius: "20px",
                width: "100%",
                marginLeft: "30px",
                padding: "0px 20px",
                boxShadow: "none",
                // height: "80px",
              }}
              contentArrowStyle={{
                // borderRight: "7px solid  rgb(33, 150, 243)",
                display: "none",
              }}
              iconStyle={{
                backgroundColor: "#D3D3F0",
                height: "28px",
                width: "28px",
                borderRadius: "50px",
                border: "none",
                outline: "none",
                marginLeft: "4px",
                marginTop: "18px",
                boxShadow: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              icon={
                <>
                  {" "}
                  <img src={i1} alt="" />{" "}
                </>
              }
            >
              <Typography
                pt={matches2 ? "22px" : "20px"}
                color="#615C5E"
                variant="body2"
              >
                <strong>Sponsor ID :</strong> - 1
              </Typography>
            </VerticalTimelineElement>
            {/*--------------------------- leval 1-----------------------  */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                backgroundColor: "transparent",
                color: "#fff",
                border: "none",
                borderRadius: "20px",
                width: "100%",
                marginLeft: "30px",
                padding: "0px 20px",
                boxShadow: "none",
                // height: "80px",
              }}
              contentArrowStyle={{
                // borderRight: "7px solid  rgb(33, 150, 243)",
                display: "none",
              }}
              iconStyle={{
                backgroundColor: "#E5D0EB",
                height: "28px",
                width: "28px",
                borderRadius: "50px",
                border: "none",
                outline: "none",
                marginLeft: "4px",
                marginTop: "18px",
                boxShadow: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              icon={
                <>
                  {" "}
                  <img src={i2} alt="" />{" "}
                </>
              }
            >
              <Typography
                pt={matches2 ? "22px" : "20px"}
                color="#615C5E"
                variant="body2"
              >
                <strong>Level 1 - </strong> Positions Filled 3/3
              </Typography>
              <Stack
                direction="row"
                alignItems={"center"}
                justifyContent="flex-start"
                flexWrap={"wrap"}
                py="20px"
              >
                {[1, 2, 3].map((i) => (
                  <Stack mx="15px">
                    <Box
                      sx={{
                        width: "40px",
                        height: "40px",
                        boxShadow: "5",
                        borderRadius: "10px",
                        "&:hover": {
                          background: "rgba(200,200,235,.6)",
                          boxShadow: "20",
                        },
                        cursor: "pointer",
                      }}
                    >
                      {" "}
                      <img src={directsale} alt="" />{" "}
                    </Box>

                    <Typography
                      textAlign={"center"}
                      pt={"0px"}
                      color="black"
                      variant="body2"
                    >
                      <strong>{i + 1}</strong>
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </VerticalTimelineElement>
            {/*--------------------------- leval 2-----------------------  */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                backgroundColor: "transparent",
                color: "#fff",
                border: "none",
                borderRadius: "20px",
                width: "100%",
                marginLeft: "30px",
                padding: "0px 20px",
                boxShadow: "none",
                // height: "80px",
              }}
              contentArrowStyle={{
                // borderRight: "7px solid  rgb(33, 150, 243)",
                display: "none",
              }}
              iconStyle={{
                backgroundColor: "#E5D0EB",
                height: "28px",
                width: "28px",
                borderRadius: "50px",
                border: "none",
                outline: "none",
                marginLeft: "4px",
                marginTop: "18px",
                boxShadow: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              icon={
                <>
                  {" "}
                  <img src={i2} alt="" />{" "}
                </>
              }
            >
              <Typography
                pt={matches2 ? "22px" : "20px"}
                color="#615C5E"
                variant="body2"
              >
                <strong>Level 2 - </strong> Positions Filled 9/9
              </Typography>
              <Stack
                direction="row"
                alignItems={"center"}
                justifyContent="flex-start"
                flexWrap={"wrap"}
                py="20px"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                  <Stack mx="15px">
                    <Box
                      sx={{
                        width: "40px",
                        height: "40px",
                        boxShadow: "5",
                        borderRadius: "10px",
                        "&:hover": {
                          background: "rgba(200,200,235,.6)",
                          boxShadow: "20",
                        },
                        cursor: "pointer",
                      }}
                    >
                      {" "}
                      <img src={overflow} alt="" />{" "}
                    </Box>

                    <Typography
                      textAlign={"center"}
                      pt={"0px"}
                      color="black"
                      variant="body2"
                    >
                      <strong>{i + 1}</strong>
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </VerticalTimelineElement>
            {/*--------------------------- leval 3-----------------------  */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                backgroundColor: "transparent",
                color: "#fff",
                border: "none",
                borderRadius: "20px",
                width: "100%",
                marginLeft: "30px",
                padding: "0px 20px",
                boxShadow: "none",
                // height: "80px",
              }}
              contentArrowStyle={{
                // borderRight: "7px solid  rgb(33, 150, 243)",
                display: "none",
              }}
              iconStyle={{
                backgroundColor: "#E5D0EB",
                height: "28px",
                width: "28px",
                borderRadius: "50px",
                border: "none",
                outline: "none",
                marginLeft: "4px",
                marginTop: "18px",
                boxShadow: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              icon={
                <>
                  {" "}
                  <img src={i2} alt="" />{" "}
                </>
              }
            >
              <Typography
                pt={matches2 ? "22px" : "20px"}
                color="#615C5E"
                variant="body2"
              >
                <strong>Level 3 - </strong> Positions Filled 17/27
              </Typography>
              <Stack
                direction="row"
                alignItems={"center"}
                justifyContent="flex-start"
                flexWrap={"wrap"}
                py="20px"
              >
                {[
                  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                ].map((i) => (
                  <Stack mx="15px">
                    <Box
                      sx={{
                        width: "40px",
                        height: "40px",
                        boxShadow: "5",
                        borderRadius: "10px",
                        "&:hover": {
                          background: "rgba(200,200,235,.6)",
                          boxShadow: "20",
                        },
                        cursor: "pointer",
                      }}
                    >
                      {" "}
                      <img src={overflow} alt="" />{" "}
                    </Box>

                    <Typography
                      textAlign={"center"}
                      pt={"0px"}
                      color="black"
                      variant="body2"
                    >
                      <strong>{i + 1}</strong>
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </VerticalTimelineElement>
            {/*--------------------------- leval 4-----------------------  */}

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                backgroundColor: "transparent",
                color: "#fff",
                border: "none",
                borderRadius: "20px",
                width: "100%",
                marginLeft: "30px",
                padding: "0px 20px",
                boxShadow: "none",
                // height: "80px",
              }}
              contentArrowStyle={{
                // borderRight: "7px solid  rgb(33, 150, 243)",
                display: "none",
              }}
              iconStyle={{
                backgroundColor: "#E5D0EB",
                height: "28px",
                width: "28px",
                borderRadius: "50px",
                border: "none",
                outline: "none",
                marginLeft: "4px",
                marginTop: "18px",
                boxShadow: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              icon={
                <>
                  {" "}
                  <img src={i2} alt="" />{" "}
                </>
              }
            >
              <Typography
                pt={matches2 ? "22px" : "20px"}
                color="#615C5E"
                variant="body2"
              >
                <strong>Level 4 - </strong> Positions Filled 30/81
              </Typography>
              <Stack
                direction="row"
                alignItems={"center"}
                justifyContent="flex-start"
                flexWrap={"wrap"}
                py="20px"
              >
                {[
                  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                  19, 20, 21, 22, 23, 25, 26, 27, 29, 30,
                ].map((i) => (
                  <Stack mx="15px">
                    <Box
                      sx={{
                        width: "40px",
                        height: "40px",
                        boxShadow: "5",
                        borderRadius: "10px",
                        "&:hover": {
                          background: "rgba(200,200,235,.6)",
                          boxShadow: "20",
                        },
                        cursor: "pointer",
                      }}
                    >
                      {" "}
                      <img src={overflow} alt="" />{" "}
                    </Box>

                    <Typography
                      textAlign={"center"}
                      pt={"0px"}
                      color="black"
                      variant="body2"
                    >
                      <strong>{i + 1}</strong>
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </VerticalTimelineElement>
            {/*--------------------------- leval 5-----------------------  */}
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{
                backgroundColor: "transparent",
                color: "#fff",
                border: "none",
                borderRadius: "20px",
                width: "100%",
                marginLeft: "30px",
                padding: "0px 20px",
                boxShadow: "none",
                // height: "80px",
              }}
              contentArrowStyle={{
                // borderRight: "7px solid  rgb(33, 150, 243)",
                display: "none",
              }}
              iconStyle={{
                backgroundColor: "#E5D0EB",
                height: "28px",
                width: "28px",
                borderRadius: "50px",
                border: "none",
                outline: "none",
                marginLeft: "4px",
                marginTop: "18px",
                boxShadow: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              icon={
                <>
                  {" "}
                  <img src={i2} alt="" />{" "}
                </>
              }
            >
              <Typography
                pt={matches2 ? "22px" : "20px"}
                color="#615C5E"
                variant="body2"
              >
                <strong>Level 5 - </strong> Positions Filled 38/243
              </Typography>
              <Stack
                direction="row"
                alignItems={"center"}
                justifyContent="flex-start"
                flexWrap={"wrap"}
                py="20px"
              >
                {[
                  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                  19, 20, 21, 22, 23, 25, 26, 27, 29, 30, 31, 32, 34, 35, 36,
                  37, 38,
                ].map((i) => (
                  <Stack mx="15px">
                    <Box
                      sx={{
                        width: "40px",
                        height: "40px",
                        boxShadow: "5",
                        borderRadius: "10px",
                        "&:hover": {
                          background: "rgba(200,200,235,.6)",
                          boxShadow: "20",
                        },
                        cursor: "pointer",
                      }}
                    >
                      {" "}
                      <img src={overflow} alt="" />{" "}
                    </Box>

                    <Typography
                      textAlign={"center"}
                      pt={"0px"}
                      color="black"
                      variant="body2"
                    >
                      <strong>{i + 1}</strong>
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </Box>
      </Box>
    </div>
  );
};

export default Detailedview;
