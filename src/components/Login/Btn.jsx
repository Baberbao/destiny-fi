import React from "react";
import { Button } from "@mui/material";

function Btn({ children, ...props }) {
  return (
    <Button
      {...props}
      disableRipple={true}
      sx={{
        textAlign: "center",
        padding: "1.5rem 3.5rem",
        borderRadius: "10px",
        textTransform: "capitalize",
        fontSize: { xs: "16px", md: "19px" },
        transition: ".2s linear",
        background: "#840a9f",
        color: "#fff",
        boxShadow:
          "0 2px 1px rgba(3,3,3,.10196078431372549),0 3px 5px rgba(3,3,3,.10196078431372549)",
        minWidth: "250px",

        height: "50px",
        "&:hover": {
          color: "hsla(0,0%,100%,.568)",
          background: "#840a9f",
        },
      }}
    >
      {children}
    </Button>
  );
}

export default Btn;
