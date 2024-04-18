import React from "react";
import Box from "@mui/material/Box";
import HeaderUpsm from "./HeaderUpsm";
import HeaderXs from "./HeaderXs";

function Header() {
  return (
    <Box>
      <Box tabIndex="0">
        <Box
          sx={{
            display: { xs: "none", sm: "block" },
            borderBottom: "1px solid #e5e5e5",
            zIndex: "-1",
            outline: 0,
            borderTopWidth: 0,
            backgroundColor: "#fff",
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            height: "30px",
            boxSizing: "initial",
            fontSize: ".875rem",
            webkitTextSizeAdjust: "100%",
          }}
        ></Box>

        <Box
          component="header"
          role="banner"
          sx={{
            display: { xs: "none", sm: "block" },
            paddingTop: "44px",
            paddingBottom: "5px",
            marginLeft: "32px",
            marginRight: "32px",
            maxWidth: "1248px",
            minWidth: "320px",
            color: "#333",
            textAlign: "left",
            position: "relative",
            padding: "35px 0 10px 0",
            whiteSpace: "nowrap",
          }}
        >
          <HeaderUpsm />
        </Box>

        <Box
          sx={{
            display: { xs: "block", sm: "none" },
            backgroundColor: "#fff",
            webkitTextSizeAdjust: "none",
            margin: 0,
            maxWidth: "100%",
          }}
        >
          <HeaderXs />
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
