import { Box, Container, Typography, useMediaQuery } from "@mui/material";

import bgpic from "../../assets/behindBG.jpg";

function BehindDestiny() {
  const matches = useMediaQuery("(min-width: 950px)");

  return (
    <Box
      py={5}
      sx={{
        backgroundImage: `url(${bgpic})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <Box
          mt={10}
          mb={4}
          width={matches ? "55%" : "100%"}
          textAlign={matches ? "left" : "center"}
        >
          <Typography variant="h2">Who's Behind Defi Fire?</Typography>
          <Typography mt={3} variant="body1">
            Simply put – a collaboration of highly successful entrepreneurs who
            have generated millions on Forex, Crypto, Defi Fire, and network
            marketing.
          </Typography>
          <Typography mt={3} variant="body1">
            With our proven track record of mastering the digital space, we set
            out on a journey to create an educational platform for our
            community. We leveraged our collective wisdom in finance,
            blockchain, and technology to design the most effective solution and
            constantly improve upon it.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default BehindDestiny;
