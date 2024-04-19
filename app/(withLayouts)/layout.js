import Box from "@mui/material/Box";
import Header from "@/components/LayoutFiles/Header/Header";
import Footer from "@/components/LayoutFiles/Footer/Footer";
import NavBar from "@/components/LayoutFiles/NavBar/NavBar";
import "../globals.css";
import MyStoreProvider from "../../redux/provider";
import theme from "@/components/ThemeRegistry/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body>
        <MyStoreProvider>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Box
                sx={{
                  minHeight: "100vh",
                  overflow: "-moz-scrollbars-non",
                  margin: 0,
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                  overflowY: "scroll",
                  "&::-webkit-scrollbar": {
                    width: "0px",
                    background: "transparent",
                    display: "none",
                  },
                }}
              >
                <Header />
                <Box
                  component="main"
                  role="main"
                  tabIndex="-1"
                  sx={{
                    outline: 0,
                    maxWidth: "1312px",
                  }}
                >
                  <NavBar />
                  {props.children}
                </Box>
              </Box>
              <Footer />
            </ThemeProvider>
          </AppRouterCacheProvider>
        </MyStoreProvider>
      </body>
    </html>
  );
}
