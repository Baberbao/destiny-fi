import React, { useContext, useState } from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import CopyAllIcon from "@mui/icons-material/CopyAll";
import { CopyToClipboard } from "react-copy-to-clipboard";

import accountInfo from "../../../assets/accountInfo.jpg";
import account from "../../../assets/account.PNG";
import { AppContext } from "../../../utils";
import { ToastNotify } from "../../../ConnectivityAss/hooks";

function AccountInfo() {
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    severity: undefined,
  });
  const { account } = useContext(AppContext);

  return (
    <Box py={10} bgcolor="#ECECF4">
      <ToastNotify alertState={alertState} setAlertState={setAlertState} />
      <Container>
        <Box textAlign="center">
          <img src={account} alt="" />
          <Typography variant="h5" mt={2}>
            Account Information
          </Typography>
        </Box>

        <Box px={3} py={4} mt={4} bgcolor="#fff" borderRadius="10px">
          <Grid container spacing={5}>
            <Grid item xs={12} md={4} display={{ xs: "none", md: "flex" }}>
              <img src={accountInfo} alt="" width="100%" />
            </Grid>

            <Grid item xs={12} md={8}>
              <Typography color="#64617f" variant="body1">
                Account Details:
              </Typography>
              <Box
                px={2}
                py={1}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderRadius="10px"
                boxShadow="0 0 20px rgb(75 61 105 / 8%)"
              >
                <Typography variant="body2" color="primary.light">
                  Wallet:
                </Typography>
                <Typography variant="body1" color="#25272b">
                  {account?.slice(0, 6) + "..." + account?.slice(-4)}
                  <CopyToClipboard
                    style={{
                      color: "#364a63",
                    }}
                    text={account}
                    onCopy={() =>
                      setAlertState({
                        open: true,
                        message: "Copied.",
                        severity: "success",
                      })
                    }
                  >
                    <Button
                      disableRipple={true}
                      sx={{
                        background: "transparent",
                        "&:hover": { background: "transparent" },
                      }}
                    >
                      <CopyAllIcon
                        sx={{
                          fontSize: "18px",
                          "&:hover": { color: "#9A6975" },
                        }}
                      />
                    </Button>
                  </CopyToClipboard>
                </Typography>
              </Box>

              {/* <Box
                mt={1}
                px={2}
                py={1}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderRadius="10px"
                boxShadow="0 0 20px rgb(75 61 105 / 8%)"
              >
                <Typography variant="body2" color="primary.light">
                  Affiliate ID:
                </Typography>
                <Typography variant="body1" color="#25272b" pr={3}>
                  1
                </Typography>
              </Box> */}

              <Box mt={3} color="#64617f" variant="body1">
                Your referral link:
              </Box>
              <Box
                px={2}
                py={1}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderRadius="10px"
                boxShadow="0 0 20px rgb(75 61 105 / 8%)"
              >
                <Typography variant="body2" color="primary.light">
                  Customer Enrollment:
                </Typography>
                <Typography variant="body2">
                  <a
                    href={
                      account ? window.location.origin + "/?ref=" + account : ""
                    }
                    target="_blank"
                  >
                    {account
                      ? window.location.origin +
                        "/?ref=" +
                        account?.slice(0, 6) +
                        "..." +
                        account?.slice(-4)
                      : ""}
                  </a>
                  <CopyToClipboard
                    style={{
                      color: "#364a63",
                    }}
                    text={
                      account ? window.location.origin + "/?ref=" + account : ""
                    }
                    onCopy={() =>
                      setAlertState({
                        open: true,
                        message: "Copied",
                        severity: "success",
                      })
                    }
                  >
                    <Button
                      disableRipple={true}
                      sx={{
                        background: "transparent",
                        "&:hover": { background: "transparent" },
                      }}
                    >
                      <CopyAllIcon
                        sx={{
                          fontSize: "18px",
                          "&:hover": { color: "#9A6975" },
                        }}
                      />
                    </Button>
                  </CopyToClipboard>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default AccountInfo;
