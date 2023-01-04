import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  useMediaQuery,
} from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import {
  DateRangePicker,
  DateRange,
} from "@mui/x-date-pickers-pro/DateRangePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import profitChart from "../../assets/profitChart.png";
import invest from "../../assets/invest.PNG";
import withdraw from "../../assets/withdraw.PNG";
import withdraw1 from "../../assets/withdraw1.PNG";

const data = [
  {
    month: "4/11/2022",
    SpeedBouns: 0.112,
    CycleBouns: 0.754,
  },
  {
    month: "5/21/2022",
    SpeedBouns: 0,
    CycleBouns: 0,
  },
];

const incomeBox = {
  display: "flex",
  alignItems: "center",
  borderRadius: "10px",
  backgroundColor: "#fff",
};

function ProfitEarning() {
  const matches = useMediaQuery("(min-width: 600px)");
  const [value, setValue] = React.useState(["4/11/2022", "5/21/2022"]);

  return (
    <>
      <Box py={10} bgcolor="#ECECF4">
        <Container>
          <Box textAlign="center">
            <img src={profitChart} alt="" />
          </Box>
          <Box textAlign="center" py={3}>
            <Typography variant="body1">Profit Program:</Typography>
            <Typography variant="h5">Earnings</Typography>
          </Box>

          <Grid container spacing={2} my={5}>
            <Grid item xs={12} md={4}>
              <Box style={incomeBox} p={2.5}>
                <Box>
                  <img src={invest} alt="money" width="50px" height="50px" />
                </Box>
                <Box ml={3}>
                  <Typography variant="subtitle1">Total Bonus</Typography>
                  <Typography variant="h4">$958.13</Typography>
                  <Typography variant="subtitle2">1.971463 BNB</Typography>
                </Box>
              </Box>
              <Box style={incomeBox} p={2.5} mt={2}>
                <Box>
                  <img src={withdraw1} alt="money" width="50px" height="50px" />
                </Box>
                <Box ml={3}>
                  <Typography variant="subtitle1">Withdrawn Bonus</Typography>
                  <Typography variant="h4">$0</Typography>
                  <Typography variant="subtitle2">0 BNB</Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Box
                px={2.5}
                py={4}
                bgcolor="#fff"
                display="flex"
                height="100%"
                borderRadius="10px"
              >
                <Box>
                  <img src={withdraw} alt="money" />
                </Box>
                <Box ml={3}>
                  <Typography variant="body2" color="#92659b">
                    WITHDRAW
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="#D83462"
                    border="1px dotted #D83462"
                    borderRadius="10px"
                    mt={2}
                    px={3}
                    py={1}
                  >
                    You can only integrate with the withdraw functionality when
                    you use authorized or secure login.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Box bgcolor="#fff" p={3} borderRadius="10px">
            <Typography mb={2} variant="h4">
              Received Bonus
            </Typography>

            {/* ------------Range date picker code------------ */}
            <Box mb={4}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateRangePicker
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(startProps, endProps) => (
                    <>
                      <TextField {...startProps} size="small" />
                      <Box sx={{ mx: 2 }}> - </Box>
                      <TextField {...endProps} size="small" />
                    </>
                  )}
                />
              </LocalizationProvider>
            </Box>

            <Box style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <LineChart
                  data={data}
                  margin={{
                    top: matches ? 6 : 2,
                    right: matches ? 35 : 20,
                    left: matches ? 25 : -20,
                    bottom: matches ? 6 : 2,
                  }}
                  style={{ fontSize: "16px" }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" fontSize="16px" />
                  <YAxis fontSize="16px" />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="CycleBouns"
                    stroke="#E91E63"
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="SpeedBouns" stroke="#B45CC4" />
                </LineChart>
              </ResponsiveContainer>
            </Box>
            <Typography variant="subtitle2">
              * The amount shown is an approximately value, it might be off with
              a fraction compared to what it is in the smart contract.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default ProfitEarning;
