import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#231E30",
      light: "#615B6C",
      defiText: "#9f9aae",
    },
    secondary: {
      main: "#06044a",
      light: "#4c02f1",
    },
    text: {
      primary: "#231E30",
      secondary: "#35343f",
    },
  },
  typography: {
    // --------Theme for main landing pages--------
    h1: {
      fontSize: "48px",
      fontWeight: "700",
    },
    h2: {
      fontSize: "32px",
      fontWeight: "700",
      color: "#231E30",
    },
    h3: {
      fontSize: "20px",
      fontWeight: "600",
      color: "#231E30",
    },
    body1: {
      fontSize: "18px",
      fontWeight: "400",
      color: "rgba(26,17,48,.8)",
    },
    ////////////////////////////////////////////
    // --------Theme for dashBoard pages--------
    h4: {
      fontSize: "21px",
      fontWeight: "700",
      color: "#302f41",
    },
    h5: {
      fontSize: "27px",
      fontWeight: "700",
      color: "#302f41",
    },
    body2: {
      fontSize: "16px",
      color: "#302f41",
    },

    subtitle1: {
      fontSize: "12px",
      color: "#92659b",
    },
    subtitle2: {
      fontSize: "14px",
      color: "#302f41",
    },
  },
  // direction: "rtl",
});

// theme.overrides = {
//   MuiCssBaseline: {
//     "@global": {
//       body: {
//         fontFamily: "Roboto",
//         backgroundColor: "#000000",
//         color: "#ffffff",
//       },
//     },
//   },
// };

theme = responsiveFontSizes(theme);

export default theme;
