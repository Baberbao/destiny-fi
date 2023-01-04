import { Backdrop } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const LoadingSvg = ({ loading }) => {
  return (
    <div>
      <Backdrop open={loading} sx={{ zIndex: 2000 }}>
        <section className="sec-loading">
          <div className="one"></div>
        </section>
      </Backdrop>
    </div>
  );
};

export default LoadingSvg;
