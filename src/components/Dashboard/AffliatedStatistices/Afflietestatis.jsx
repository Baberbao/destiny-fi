import "./Afflietedstatic.css";
import React, { useContext, useEffect, useState } from "react";
import {
  Grid,
  Container,
  Box,
  Typography,
  useMediaQuery,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuItem from "@mui/material/MenuItem";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  CircularProgressbar,
  // CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import DoneIcon from "@mui/icons-material/Done";

import Money from "./ico-money-up.svg";
import MoneyGroup from "./ico-money-group.svg";
import iconschart from "./ico-charts.png";
import Memeber from "./ico-members.png";
import Invest from "./ico-invest.png";
import cycle from "./ico-cycle.png";
import { HashLink } from "react-router-hash-link";
import { AppContext, gasEstimationPayable } from "../../../utils";
import {
  ToastNotify,
  useDefiFireContract,
} from "../../../ConnectivityAss/hooks";
import LoadingSvg from "../../../LoadingSvg";
import axios from "axios";
import { url } from "../../../ConnectivityAss/environment";

const useStyles = makeStyles({
  moneyPic: {
    width: "40px",
    height: "40px",
  },
  packages: {
    position: "relative",
    boxSizing: "border-box",
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: "10px",
    boxShadow: "5px 5px 3px rgb(86 86 96 / 2%)",
  },
  passevlevel: {
    borderBottom: "2px solid #EBEBF3",
    width: "13%",
    height: "5px",
    margin: "3px",
  },
  statisticStyle: {
    display: "flex",
    alignItems: "center",
    borderRadius: "10px",
    backgroundColor: "#fff",
  },
});

const Buttonstyle = ({ children, ...props }) => {
  return (
    <Button
      disableRipple={true}
      {...props}
      sx={{
        background: "#e09504",
        color: "#fff",
        padding: " 0 1.5rem",
        borderRadius: "6px",
        width: "70%",
        height: "40px",
        textTransform: "uppercase",
        textAlign: "center",
        "&:hover": {
          backgroundColor: "#e09504",
        },
      }}
    >
      {children}
    </Button>
  );
};

function Afflietestatis() {
  const matches = useMediaQuery("(min-width: 1135px)");
  const matches2 = useMediaQuery("(min-width: 700px)");
  const classes = useStyles();
  const { account, signer, chainId } = useContext(AppContext);
  const defiFireContract = useDefiFireContract(signer);
  const [packagesData, setpackagesData] = useState([]);
  const selectOptions = ["All Packages", "Only Available"];
  const [packageOption, setPackageOption] = useState("");
  const [loading, setloading] = useState(false);
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    severity: undefined,
  });
  const handleChange = (event) => {
    setPackageOption(event.target.value);
  };
  //-----Progress bar percentages with states------
  // 120 and 4 are the total values
  const [data1, setData1] = useState(70);
  const [data2, setData2] = useState(2);
  const percentage1 = (data1 / 120) * 100;
  const percentage2 = (data2 / 4) * 100;
  //////////////////////////////////////
  const init = async () => {
    try {
      setloading(true);

      const [
        pakg1,
        pakg2,
        pakg3,
        price1,
        price2,
        price3,
        { id: userId1 },
        { id: userId2 },
        { id: userId3 },
      ] = await Promise.all([
        defiFireContract.isPkgBought(account, "1"),
        defiFireContract.isPkgBought(account, "2"),
        defiFireContract.isPkgBought(account, "3"),
        defiFireContract.pkgPrice("1"),
        defiFireContract.pkgPrice("2"),
        defiFireContract.pkgPrice("3"),
        defiFireContract.getUserPkgData(account, "1"),
        defiFireContract.getUserPkgData(account, "2"),
        defiFireContract.getUserPkgData(account, "3"),
      ]);
      console.log(pakg1, pakg2, pakg3);
      let package1 = {
        pakg: pakg1,
        price: +price1,
        userId: userId1,
      };
      let package2 = {
        pakg: pakg2,
        price: +price2,
        userId: userId2,
      };
      let package3 = {
        pakg: pakg3,
        price: +price3,
        userId: userId3,
      };
      setpackagesData([package1, package2, package3]);
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };
  useEffect(() => {
    if (account) {
      init();
    }
  }, [account]);
  const buyHandler = async (index, price) => {
    try {
      setloading(true);
      const owner = await defiFireContract.owner();
      let refAddress = localStorage.getItem("defi_refAddress")
        ? localStorage.getItem("defi_refAddress")
        : owner;
      let { id } = await defiFireContract.getUserPkgData(refAddress, index);
      console.log(+id, "id");
      // let fn = defiFireContract.estimateGas.buyPackage;
      // let params = [index, refAddress];
      // let tx = await defiFireContract.buyPackage(...params, {
      //   value: price.toString(),
      //   gasLimit: gasEstimationPayable(account, fn, params, price.toString()),
      // });
      let tx = {
        hash: "0xfa38124c0333249b81e5a69b345851bf0d28fae8558c09081867f4b9cb8e3a0c",
      };
      const { data } = axios.post(url + "defi/buy-package", {
        account,
        refererId: +id,
        tx,
        pkg: index,
      });

      // await tx.wait();
      init();
      setloading(false);
      setAlertState({
        open: true,
        message: "Transaction Successful",
        severity: "success",
      });
    } catch (error) {
      console.log("Error", error);
      if (error?.data?.message) {
        setAlertState({
          open: true,
          message: error?.data?.message,
          severity: "error",
        });
      } else {
        setAlertState({
          open: true,
          message: error?.message,
          severity: "error",
        });
      }
      setloading(false);
    }
  };
  console.log(chainId, "chainId");
  return (
    <>
      <ToastNotify alertState={alertState} setAlertState={setAlertState} />
      <LoadingSvg loading={loading} />
      <Box bgcolor="#E7E6F1" py={10}>
        <Container>
          {/* ---------------------Statistics part --------------------- */}
          <Grid container spacing={3}>
            {/* ........Matrix Statistics box........... */}
            <Grid item xs={matches ? 6 : 12}>
              <Typography variant="body2" mb={1} ml={1.5}>
                Matrix Statistics
                <KeyboardArrowDownIcon
                  sx={{ width: "15px", height: "15px", color: "#9A6975" }}
                />
              </Typography>

              <Grid container spacing={1}>
                <Grid item xs={matches2 ? 6 : 12}>
                  <Box className={classes.statisticStyle} px={1.5} py={2}>
                    <Box>
                      <img
                        src={Money}
                        alt="money"
                        className={classes.moneyPic}
                      />
                    </Box>
                    <Box ml={3}>
                      <Typography variant="subtitle1">INCOME</Typography>
                      <Typography variant="h4">$341,540.5</Typography>
                      <Typography variant="subtitle2">
                        733.435688 BNB
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={matches2 ? 6 : 12}>
                  <Box className={classes.statisticStyle} px={1.5} py={2}>
                    <Box>
                      <img
                        src={MoneyGroup}
                        alt="money"
                        className={classes.moneyPic}
                      />
                    </Box>
                    <Box ml={3}>
                      <Typography variant="subtitle1">INCOME</Typography>
                      <Typography variant="h4">$341,540.5</Typography>
                      <Typography variant="subtitle2">
                        733.435688 BNB
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            {/* ...................... Direct Sale Statistics............... */}
            <Grid item xs={matches ? 6 : 12}>
              <Typography mb={1} ml={1.5} variant="body2">
                Direct Sale Statistics
                <KeyboardArrowDownIcon
                  sx={{ width: "15px", height: "15px", color: "#9A6975" }}
                />
              </Typography>

              <Grid container spacing={1}>
                <Grid item xs={matches2 ? 6 : 12}>
                  <Box className={classes.statisticStyle} px={1.5} py={2}>
                    <Box>
                      <img
                        src={Money}
                        alt="money"
                        className={classes.moneyPic}
                      />
                    </Box>
                    <Box ml={3}>
                      <Typography variant="subtitle1">INCOME</Typography>
                      <Typography variant="h4">$341,540.5</Typography>
                      <Typography variant="subtitle2">
                        733.435688 BNB
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid item xs={matches2 ? 6 : 12}>
                  <Box className={classes.statisticStyle} px={1.5} py={2}>
                    <Box>
                      <img
                        src={MoneyGroup}
                        alt="money"
                        className={classes.moneyPic}
                      />
                    </Box>
                    <Box ml={3}>
                      <Typography variant="subtitle1">INCOME</Typography>
                      <Typography variant="h4">$341,540.5</Typography>
                      <Typography variant="subtitle2">
                        733.435688 BNB
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* ...................Compensation plan part.............. */}
          <Box
            mt={8}
            py={1}
            px={2}
            bgcolor="#fff"
            display="flex"
            justifyContent={{ xs: "center", md: "space-between" }}
            alignItems="center"
            flexWrap="wrap"
            borderRadius="10px"
          >
            <Box display="flex" alignItems="center">
              <img src={iconschart} alt="" />
              <Typography pl={1} variant="body2" fontWeight="600">
                Compensation Plan: Defi Fire
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" ml={3}>
              <DoneIcon
                sx={{
                  color: "#74BD45",
                  width: "18px",
                  height: "18px",
                }}
              />
              <Typography pl={1} variant="body2">
                <span style={{ color: "#6C6C6D" }}>Purchased:</span> 0 of 3
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" ml={3}>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 140 }}>
                <Select
                  value={packageOption}
                  onChange={handleChange}
                  sx={{ color: "#6C6C6D", fontSize: "15px !important" }}
                  startAdornment={
                    <InputAdornment position="start">Show:</InputAdornment>
                  }
                >
                  {selectOptions.map((option, i) => (
                    <MenuItem
                      key={i}
                      value={option}
                      sx={{
                        color: "#7C5EB9",
                        fontSize: "14px !important",
                        "&:hover": {
                          color: "orange",
                        },
                      }}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {/* <Typography
                color="#6C6C6D"
                sx={{
                  borderBottom: "1px dotted #302f41",
                }}
              >
                Show: All Packages
              </Typography>
              <KeyboardArrowDownIcon
                sx={{ width: "18px", height: "18px", color: "#6C6C6D" }}
              /> */}
            </Box>
          </Box>

          {/* ...................Packages.............. */}
          <Box mt={3}>
            <Grid container spacing={2}>
              {packagesData.map(({ pakg, price, userId }, i) => {
                return (
                  <Grid item xs={12} sm={6} md={matches ? 3 : 4}>
                    <Box className={classes.packages}>
                      <Box
                        sx={{
                          width: "30px",
                          height: "25px",
                          borderRadius: " 0 0 30rem 30rem",
                          background: "#ddc1e4",
                          m: "auto",
                        }}
                      >
                        <KeyboardArrowDownIcon
                          sx={{
                            width: "20px",
                            height: "20px",
                            color: "#494559",
                          }}
                        />
                      </Box>

                      <Typography my={2} variant="subtitle2">
                        Package {i + 1}
                      </Typography>

                      <Box sx={{ py: 3, position: "relative" }}>
                        <Box sx={{ width: "70%", m: "auto" }}>
                          <CircularProgressbar
                            value={percentage1}
                            circleRatio={0.75}
                            styles={buildStyles({
                              rotation: 1 / 2 + 1 / 8,
                              strokeLinecap: "round",
                              trailColor: "#eee",
                              pathColor: "#e7ca05",
                            })}
                          />
                        </Box>
                        <Box
                          sx={{
                            width: "50%",
                            position: "absolute",
                            m: "auto",
                            marginTop: "-60%",
                            left: "25%",
                          }}
                        >
                          <CircularProgressbar
                            value={percentage2}
                            text="Cycle Process"
                            circleRatio={0.75}
                            styles={buildStyles({
                              rotation: 1 / 2 + 1 / 8,
                              textColor: "#57577C",
                              strokeLinecap: "round",
                              trailColor: "#eee",
                              pathColor: "#e09504",
                            })}
                          />
                        </Box>

                        <Box
                          sx={{
                            width: "50%",
                            position: "absolute",
                            m: "auto",
                            marginTop: "-22%",
                            left: "25%",
                          }}
                        >
                          <Typography variant="body2">
                            <span style={{ fontWeight: "700" }}>{data2}</span>{" "}
                            of 4
                          </Typography>
                          <Typography variant="body2">
                            <span style={{ fontWeight: "700" }}>{data1}</span>{" "}
                            of 120
                          </Typography>
                        </Box>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          py: 3,
                        }}
                      >
                        <Box textAlign="left" display="inline-grid">
                          <img src={Memeber} alt="" />
                          <img src={Invest} alt="" />
                          <img src={cycle} alt="" />
                        </Box>
                        <Box textAlign="left" ml={1}>
                          <Typography variant="subtitle2" color="#5c5c5e">
                            Partners:67
                          </Typography>
                          <Typography variant="subtitle2" color="#5c5c5e">
                            Cycled:1
                          </Typography>
                          <Typography variant="subtitle2" color="#5c5c5e">
                            Avail. Cycle:0
                          </Typography>
                        </Box>
                      </Box>

                      <Box sx={{ py: 2 }}>
                        <Typography
                          variant="subtitle2"
                          textAlign="center"
                          fontWeight="700"
                        >
                          PASSUP LEVEL:
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <span className={classes.passevlevel}></span>
                          <span className={classes.passevlevel}></span>
                          <span className={classes.passevlevel}></span>
                          <span className={classes.passevlevel}></span>
                        </Box>
                      </Box>

                      <Box
                        mt={4}
                        mb={1}
                        sx={{
                          display: "flex",
                          justifyContent: "space-around",
                          alignItems: "center",
                        }}
                      >
                        <Typography variant="body2" color="#9A6975">
                          Price:
                        </Typography>
                        <Typography variant="h4"> $30 </Typography>
                      </Box>
                      {/* {pakg ? (
                        <HashLink
                          style={{ textDecoration: "none" }}
                          to={`/dashbord/maindashboard/${i + 1}/${userId}`}
                        >
                          <Buttonstyle>View</Buttonstyle>
                        </HashLink>
                      ) : ( */}
                      <Buttonstyle onClick={() => buyHandler(i + 1, price)}>
                        Buy Now
                      </Buttonstyle>
                      {/* )} */}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          pb: 2,
                        }}
                      >
                        <Typography variant="subtitle2">Prepay </Typography>
                        <ArrowRightAltIcon
                          sx={{
                            width: "30px",
                            height: "30px",
                            color: "#4e4e4f",
                            pl: 1,
                          }}
                        />
                      </Box>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Afflietestatis;
