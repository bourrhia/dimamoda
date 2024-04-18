import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["system-ui", "arial"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  fallback: ["system-ui", "arial"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    // fontFamily: roboto.style.fontFamily,
    fontFamily: inter ? inter.style.fontFamily : roboto.style.fontFamily,
    // fontFamily: inter.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#60a5fa",
          }),
        }),
      },
    },
    // ADD
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          // backgroundColor: "#0046be",
          // backgroundColor: "#fff",
          backgroundColor: "#2874f0",
        },
        root: {
          boxShadow: "none",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

//theme = responsiveFontSizes(theme);

export default theme;
