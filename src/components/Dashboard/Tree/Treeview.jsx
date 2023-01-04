import React from "react";
import { Stack, Typography, useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import LeafComponent from "./leafComponent";

const Treeview = ({ treeData }) => {
  const check = useMediaQuery("(max-width:700px)");

  console.log(treeData, "treeData");
  let styling = [
    {
      position: "relative",
      paddingTop: "4.5rem",
      width: "33%",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      alignItems: "flex-start",
      "&:before": {
        content: '""',
        position: "absolute",
        top: "-2px",
        left: "50%",
        display: "block",
        width: "23px",
        height: "4.5rem",
        border: "2px dashed #908795",
        borderBottom: "0",
        borderRight: "0",
        borderRadius: "23px 0 0 0",
      },
    },
    {
      position: "relative",
      paddingTop: "4.5rem",
      width: "33%",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      alignItems: "flex-start",
      "&:before": {
        content: '""',
        position: "absolute",
        top: "-2px",
        left: "calc(50% - 1px)",
        display: "block",
        width: "0",
        height: "4.5rem",
        borderLeft: "2px dashed #908795",
      },
    },
    {
      position: "relative",
      paddingTop: "4.5rem",
      width: "33%",
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      alignItems: "flex-start",
      "&:before": {
        content: '""',
        position: "absolute",
        top: "-2px",
        left: "calc(50% - 23px)",
        display: "block",
        width: "23px",
        height: "4.5rem",
        border: "2px dashed #908795",
        borderBottom: "0",
        borderLeft: "0",
        borderRadius: "0 23px 0 0",
      },
    },
  ];
  return (
    <Box
      className="matrix-view branch"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        alignItems: "flex-start",
        paddingTop: "150px",
      }}
    >
      {/* leaf sponsor >>>>>>>>>>>>>>>>>>>>>> */}
      {treeData?.length > 0 ? (
        treeData.map(({ userId, children, parent }, index) => (
          <>
            <Box
              className="leaf sponsor"
              sx={{
                position: "relative",
                width: "100%",
                display: "flex",
                justifyContent: "center",
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
              }}
            >
              <Box
                className="matrix-item-box"
                sx={{
                  position: "relative",
                  background: "rgba(236,233,242,.25)",
                  padding: "1rem",
                  borderRadius: "3.5rem",
                  marginBottom: "1.5rem",
                }}
              >
                <Box
                  className="matrix-item"
                  sx={{
                    position: "relative",
                    display: "block",
                    width: "12rem",
                    height: "12rem",
                    background: "#fff",
                    borderRadius: "3.5rem",
                    boxShadow: "0 0 3.8rem rgb(66 63 76 / 15%)",
                    textAlign: "center",
                    paddingTop: "3.7rem",
                    boxSizing: "border-box",
                    // "&:hover": { background: "rgba(200,200,235,.6)" },
                    cursor: "pointer",
                  }}
                >
                  <img
                    src="https://definityfi.io/images/member/matrix/ico-member.svg"
                    alt=""
                    className="ico-member"
                    style={{
                      display: "inline-block",
                      width: "2rem",
                      height: "2.3rem",
                      marginLeft: "1rem",
                    }}
                  />
                  <Box
                    className="member-title"
                    sx={{ display: "block", margin: "0", padding: "0" }}
                  >
                    Member ID:
                  </Box>
                  <Box
                    className="member-id"
                    sx={{
                      font: '600 2rem "Nunito",Arial,Helvetica,sans-serif',
                      color: "#19203b",
                    }}
                  >
                    {userId}
                  </Box>
                  <Box
                    className="ico-pointer"
                    style={{
                      position: "absolute",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      left: "calc(50% - 1.5rem)",
                      bottom: "-2rem",
                      width: "2.5rem",
                      height: "2.5rem",
                      background: "#ddc1e4",
                      borderRadius: "5rem",
                      lineHeight: "3.2rem",
                      textAlign: "center",
                      transform: "rotate(90deg)",
                      "&:after": {
                        display: "inline-block",
                        fontSize: "1.3rem",
                        fontFamily: '"fonticon" !important',
                        speak: "never",
                        fontStyle: "normal",
                        fontWeight: 400,
                        WebkitFontFeatureSettings: "normal",
                        fontFeatureSettings: "normal",
                        fontVariant: "normal",
                        textTransform: "none",
                        lineHeight: 1,
                        WebkitFontSmoothing: "antialiased",
                        MozOsxFontSmoothing: "grayscale",
                        content: '"\\e918"',
                      },
                    }}
                  >
                    {">"}
                  </Box>
                </Box>
              </Box>
            </Box>
            {/* branch  level-1 node leaf  1 >>>>>>>>>>>>>>>>>>>>>> */}
            {children.length > 0 &&
              children.map(
                ({ userId, children, parent, package: pkg }, index) => (
                  <Box className="branch  level-1 node" sx={styling[index]}>
                    {console.log(children, "level-3 node")}
                    <LeafComponent
                      userId={userId}
                      pkg={pkg}
                      children={children.length > 0}
                    />
                    {children.length > 0 &&
                      children.map(
                        ({ userId, children, parent, package: pkg }, index) => (
                          <Box
                            className="branch  level-2 node"
                            sx={styling[index]}
                          >
                            <LeafComponent
                              userId={userId}
                              pkg={pkg}
                              children={children.length > 0}
                            />
                            {children.length > 0 &&
                              children.map(
                                (
                                  { userId, children, parent, package: pkg },
                                  index
                                ) => (
                                  <Box
                                    className="branch  level-3 node"
                                    sx={styling[index]}
                                  >
                                    <LeafComponent
                                      userId={userId}
                                      pkg={pkg}
                                      children={children.length > 0}
                                    />
                                    {children.length > 0 &&
                                      children.map(
                                        (
                                          {
                                            userId,
                                            children,
                                            parent,
                                            package: pkg,
                                          },
                                          index
                                        ) => (
                                          <Box
                                            className="branch  level-4 node"
                                            sx={styling[index]}
                                          >
                                            <LeafComponent
                                              userId={userId}
                                              pkg={pkg}
                                              children={children.length > 0}
                                            />
                                            {children.length > 0 &&
                                              children.map(
                                                (
                                                  {
                                                    userId,
                                                    children,
                                                    parent,
                                                    package: pkg,
                                                  },
                                                  index
                                                ) => (
                                                  <Box
                                                    className="branch  level-5 node"
                                                    sx={styling[index]}
                                                  >
                                                    <LeafComponent
                                                      userId={userId}
                                                      pkg={pkg}
                                                      children={
                                                        children.length > 0
                                                      }
                                                    />
                                                  </Box>
                                                )
                                              )}
                                          </Box>
                                        )
                                      )}
                                  </Box>
                                )
                              )}
                          </Box>
                        )
                      )}
                  </Box>
                )
              )}
          </>
        ))
      ) : (
        <Box
          className="member-id"
          sx={{
            font: '600 2rem "Nunito",Arial,Helvetica,sans-serif',
            color: "#19203b",
          }}
        >
          You Have no tree Data.
        </Box>
      )}
    </Box>
  );
};

export default Treeview;
