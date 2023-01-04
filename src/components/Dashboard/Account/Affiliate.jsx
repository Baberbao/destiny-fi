import { Box, Container } from "@mui/material";

function AffiliateSettings() {
  return (
    <Box py={10} bgcolor="#ECECF4" height="100vh">
      <Container>
        <Box
          p={2}
          sx={{
            background: "#ffdfdf",
            borderLeft: "6px solid #e36c6c",
            boxShadow: "3px 3px 2px rgb(124 124 142 / 7%)",
            borderRadius: "10px",
            color: "#616472",
            fontSize: "14px",
          }}
        >
          To access your settings you need to use the Secure Login method.
        </Box>
      </Container>
    </Box>
  );
}

export default AffiliateSettings;
