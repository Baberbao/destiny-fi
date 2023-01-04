import { Button } from "@mui/material";

function StyledButton({ children, ...props }) {
  return (
    <>
      <Button
        {...props}
        disableRipple={true}
        sx={{
          textAlign: "center",
          px: 3,
          py: 2,
          borderRadius: "18px",
          textTransform: "capitalize",
          fontSize: { xs: "14px", md: "18px" },
          transition: ".2s linear",
          background: "#e09504",
          color: "#fff",
          boxShadow:
            "0 2px 1px rgba(3,3,3,.10196078431372549),0 3px 5px rgba(3,3,3,.10196078431372549)",
          "&:hover": {
            background: "#e09504",
            color: "#840a9f",
          },
          zIndex: 1,
        }}
      >
        {children}
      </Button>
    </>
  );
}

export default StyledButton;
