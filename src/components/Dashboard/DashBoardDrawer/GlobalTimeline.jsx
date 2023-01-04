import React from "react";
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import AlignVerticalBottomIcon from "@mui/icons-material/AlignVerticalBottom";

const GlobalTimeline = () => {
  return (
    <div
      className="timeline2"
      style={{ overflowY: "hidden", paddingBottom: "50px" }}
    >
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
              <DynamicFeedIcon
                sx={{
                  color: "#4B8EE0",
                }}
              />
            </Box>
            <Box>
              <Typography variant="subtitle1" color="#71888C">
                Total Accounts:
              </Typography>
              <Typography variant="h4" color="white">
                1,927
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
              <InsertDriveFileIcon
                sx={{
                  color: "#775582",
                }}
              />
            </Box>
            <Box>
              <Typography variant="subtitle1" color="#71888C">
                New Today:
              </Typography>
              <Typography variant="h4" color="white">
                0
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
              <CurrencyExchangeIcon
                sx={{
                  color: "#F4A52C",
                }}
              />
            </Box>
            <Box>
              <Typography
                variant="subtitle1"
                //  pb="20px"
                color="#71888C"
              >
                Total Earned
              </Typography>
              <Typography variant="h4" color="white" paddingBottom={"0px"}>
                $733,905
              </Typography>
              <Typography
                variant="subtitle2"
                color="#71888C"
                // mt="-20px"
                paddingTop={"0px"}
              >
                1,618 BNB
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
              <AlignVerticalBottomIcon
                sx={{
                  color: "#6BBD3D",
                }}
              />
            </Box>
            <Box>
              <Typography
                variant="subtitle1"
                //  pb="20px"
                color="#71888C"
              >
                Earned Today:
              </Typography>
              <Typography variant="h4" color="white" paddingBottom={"0px"}>
                $0
              </Typography>
              <Typography
                variant="subtitle2"
                color="#71888C"
                // mt="-20px"
                paddingTop={"0px"}
              >
                0 BNB
              </Typography>
            </Box>
          </Stack>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default GlobalTimeline;
