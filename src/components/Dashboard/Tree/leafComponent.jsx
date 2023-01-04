import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
let otherStyling = {
  leafWithChild: {
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    textDecoration: "none",
    paddingBottom: "5rem",
    "&:before": {
      content: '""',
      position: "absolute",
      bottom: "0",
      left: "calc(16.5% + 21px)",
      display: "block",
      width: "calc(33.5% - 20px)",
      height: "5rem",
      border: "2px dashed #908795",
      borderTop: "0",
      borderLeft: "0",
      borderRadius: "0 0 23px 0",
    },
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: "0",
      right: "calc(16.5% + 21px)",
      display: "block",
      width: "calc(33.5% - 20px)",
      height: "23px",
      border: "2px dashed #908795",
      borderTop: "0",
      borderRight: "0",
      borderRadius: "0 0 0 23px",
    },
  },
  leafWithOutChild: {
    position: "relative",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    textDecoration: "none",
    paddingBottom: "5rem",
  },
  matrixItem: {
    position: "relative",
    display: "inline-block",
    width: "3.5rem",
    height: "rem",
    background: "#fff",
    borderRadius: "1.5rem",
    boxShadow: "0 0 0 0.8rem rgb(227, 224, 233), 0 0 1.5rem rgb(66 ,63, 76)",
    textAlign: "center",
    paddingTop: "1.5rem",
    paddingBottom: "0.5rem",
    boxSizing: "border-box",
    "&:before": {
      content: '""',
      position: "absolute",
      top: "0",
      right: "0",
      width: "1.8rem",
      height: "1.6rem",
      borderRadius: "0 1.5rem 0 1.5rem",
      background: "#840a9f",
    },
    "&:after": {
      content: '""',
      position: "absolute",
      top: "-5px",
      left: "-6px",
      display: "block",
      width: "calc(100% + 11px)",
      height: "calc(100% + 11px)",
      border: "3px solid rgba(248,187,108,.7)",
      borderRadius: "1.9rem",
      borderColor: "#e09504 !important",
    },

    "&:hover": { background: "rgba(200,200,235,.6)" },

    cursor: "pointer",
  },
  tooltip: {
    position: "absolute",
    top: "-1rem",
    left: "calc(100% + 1rem)",
    // zIndex: 9999,
    display: "block",
    padding: "4px",
    borderRadius: "8px",
    boxShadow: "2px 2px 2px rgb(0 0 0 / 10%)",
    fontSize: "1rem",
    minWidth: "7rem",
    textAlign: "center",
    background: "#b9b9e7",
    color: "#45455f",
    fontWeight: 400,
    "&:before": {
      content: '""',
      position: "absolute",
      top: "calc(50% - 7px)",
      left: "-10px",
      display: "block",
      borderLeft: "6px solid transparent",
      borderBottom: "6px solid transparent",
      borderColor: "transparent transparent #7d66d1 #7d66d1",
      borderStyle: "solid",
      borderWidth: "6px 6px 1px 9px",
      WebkitTransform: "rotate(-87deg)",
      transform: "rotate(-87deg)",
      borderBottomColor: "#b9b9e7",
      borderLeftColor: "#b9b9e7",
    },
  },
};
function LeafComponent({ userId, pkg, children }) {
  return (
    <Box
      className="leaf"
      sx={children ? otherStyling.leafWithChild : otherStyling.leafWithOutChild}
      component={Link}
      to={`/dashbord/maindashboard/${pkg}/${userId}`}
    >
      <Box
        className="matrix-item-box"
        sx={{ position: "relative", textAlign: "center" }}
      >
        <Box
          className="matrix-item"
          data-type="type-1"
          data-position={1}
          sx={otherStyling.matrixItem}
        >
          <img
            src="https://definityfi.io/images/member/matrix/ico-user.svg"
            alt=""
            className="ico-member"
            style={{
              display: "inline-block",
              width: "1rem",
              height: "1.3rem",
            }}
          />
          {/* <Box className="tooltip" sx={otherStyling.tooltip}>
            Direct Sale
          </Box> */}
        </Box>
        <Box
          className="member-id"
          sx={{
            padding: "1.2rem 0 0.8rem",
            font: '600 16px "Nunito",Arial,Helvetica,sans-serif',
            color: "#19203b",
          }}
        >
          {userId}
        </Box>
      </Box>
    </Box>
  );
}

export default LeafComponent;
