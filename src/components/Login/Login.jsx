import React, { useContext, useState } from "react";
import { Box, Container, Grid, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import bg from "../../assets/bg-login.jpg";
import main from "../../assets/auth-hero.jpg";
import or from "../../assets/or-diamond.png";
import Btn from "./Btn";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../utils";

const useStyles = makeStyles({
  hover: {
    color: "#e09504",
    textDecoration: "none",

    "&:visited": {
      textDecoration: "none",
      color: "#e09504",
    },
    "&:hover": {
      borderBottom: "1px dashed #e09504",
    },
  },
});

function Login() {
  const classes = useStyles();
  const [accountId, setAccountId] = useState();
  const { connect } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <Box
      py="100px"
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "100% 100%",
      }}
    >
      <Container>
        <Box
          borderRadius={"10px"}
          maxWidth="1120px"
          width="100%"
          boxShadow="0 12px 16px -5px rgb(31 24 43 / 50%)"
        >
          <Grid container>
            <Grid item xs={0} sm={6} md={7}>
              <Box
                sx={{
                  backgroundImage: `url(${main}) 50% no-repeat`,
                  backgroundSize: "cover",
                  borderRadius: "10px 0 0 10px",
                }}
              ></Box>
            </Grid>
            <Grid item xs={12} sm={6} md={5}>
              <Box
                bgcolor="#fff"
                borderRadius={{ xs: "10px", sm: "0 10px 10px 0" }}
                py={8}
                maxWidth="432px"
                width="100%"
              >
                <Box
                  px={6}
                  display="flex"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <Box
                    fontSize="19px"
                    fontWeight={400}
                    color="#25272b"
                    mb={3}
                    textAlign="center"
                  >
                    Access Your Personal Account:
                  </Box>
                  <Btn onClick={connect}>Authorized Login</Btn>

                  <Button
                    disableRipple={true}
                    sx={{
                      textAlign: "center",
                      padding: "1.5rem 3.5rem",
                      borderRadius: "10px",
                      textTransform: "capitalize",
                      fontSize: { xs: "16px", md: "19px" },
                      transition: ".2s linear",
                      background: "#e09504",
                      color: "#fff",
                      boxShadow:
                        "0 2px 1px rgba(3,3,3,.10196078431372549),0 3px 5px rgba(3,3,3,.10196078431372549)",
                      minWidth: "250px",
                      marginTop: "15px",
                      marginBottom: "15px",
                      height: "50px",
                      "&:hover": {
                        background: "#e09504",
                        color: "hsla(0,0%,100%,.568)",
                      },
                    }}
                  >
                    Secure Login
                  </Button>

                  <Box textAlign="center" color="#868099" fontSize="16px">
                    Remember to authorize with the correct BNB address.
                  </Box>
                </Box>
                <Box
                  py={5}
                  position="relative"
                  display="flex"
                  justifyContent="center"
                >
                  <hr color="#e8e4ed" height="1px" width="100%" />
                  <Box
                    sx={{
                      backgroundImage: `url(${or})`,
                      width: "107px",
                      height: "97px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      top: "0",
                    }}
                  >
                    or
                  </Box>
                </Box>
                <Box
                  fontSize="19px"
                  fontWeight={400}
                  color="#25272b"
                  mb={3}
                  textAlign="center"
                >
                  View an Account
                </Box>
                <Box
                  px={6}
                  display="flex"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <input
                    onChange={(e) => setAccountId(e.target.value)}
                    placeholder="Enter the account id or BNB address"
                    style={{
                      border: "1px solid #aaa5b8",
                      borderRadius: "6px",
                      height: "44px",
                      fontSize: "16px",
                      color: "#868099",
                      paddingLeft: "14px",
                      width: "100%",
                      marginBottom: "14px",
                    }}
                  />
                  <Btn
                    onClick={() => {
                      if (+accountId == 1) {
                        navigate("/dashbord", { replace: true });
                      }
                    }}
                  >
                    Login
                  </Btn>
                  <Box
                    fontSize="16px"
                    textAlign="center"
                    color="rgba(26,17,48,.75)"
                    my={6}
                  >
                    New to our platform?{" "}
                    <a className={classes.hover} href="/joinacademy">
                      Join now
                    </a>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Login;
