import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import DvrIcon from "@mui/icons-material/Dvr";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const PersonaleTimeline = () => {
  return (
    <div className="timeline1" style={{}}>
      <VerticalTimeline
        animate={true}
        layout={"1-column-left"}
        lineColor={"#232432"}
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#232432",
            color: "#fff",
            border: "none",
            borderRadius: "20px",

            marginLeft: "30px",
            padding: "0px 10px",
            boxShadow: "none",
            // height: "80px",
          }}
          contentArrowStyle={{
            // borderRight: "7px solid  rgb(33, 150, 243)",
            display: "none",
          }}
          iconStyle={{
            background: "#232432",
            height: "14px",
            width: "14px",
            borderRadius: "50px",
            border: "none",
            outline: "none",
            marginLeft: "13px",
            marginTop: "40px",
            boxShadow: "none",
            // display: "none",
          }}
          icon={<></>}
        >
          <Stack
            direction={"row"}
            alignItems="center"
            justifyContent={"flex-start"}
            // pb="20px"
            pt="8px"
          >
            <Box pt="15px" px="15px">
              <DvrIcon
                sx={{
                  color: "#4B8EE0",
                }}
              />
            </Box>
            <Box>
              <Typography variant="subtitle1" color="#71888C">
                Personal Downline:
              </Typography>
              <Typography variant="h4" color="white">
                66
              </Typography>
            </Box>
          </Stack>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#232432",
            color: "#fff",
            border: "none",
            borderRadius: "20px",

            marginLeft: "30px",
            padding: "0px 10px",
            boxShadow: "none",
            // height: "80px",
          }}
          contentArrowStyle={{
            // borderRight: "7px solid  rgb(33, 150, 243)",
            display: "none",
          }}
          iconStyle={{
            background: "#232432",
            height: "14px",
            width: "14px",
            borderRadius: "50px",
            border: "none",
            outline: "none",
            marginLeft: "13px",
            marginTop: "50px",
            boxShadow: "none",
            // display: "none",
          }}
          icon={<></>}
        >
          <Stack
            direction={"row"}
            alignItems="center"
            justifyContent={"flex-start"}
            // pb="20px"
            pt="15px"
          >
            <Box pt="15px" px="15px">
              <AttachMoneyIcon
                sx={{
                  color: "#775582",
                }}
              />
            </Box>
            <Box>
              <Typography variant="subtitle1" color="#71888C">
                Income
              </Typography>
              <Typography variant="h4" color="white" paddingBottom={"0px"}>
                $358,464
              </Typography>
              <Typography
                variant="subtitle2"
                color="#71888C"
                // mt="-20px"
                paddingTop={"0px"}
              >
                769 BNB
              </Typography>
            </Box>
          </Stack>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default PersonaleTimeline;
