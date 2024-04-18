import * as React from "react";
import Box from "@mui/material/Box";
import HandlesNavBar from "./HandlesNavBar";
import MoreCategories from "./MoreCategories";

const NavBar = async () => {
  return (
    <Box
      sx={{
        display: { xs: "none", sm: "block" },
        borderBottom: "solid 1px #ddd",
        borderTop: "solid 1px #ddd",
        color: "#111820",
        fontWeight: "normal",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "12px",
        maxWidth: "1312px",
        position: "relative",
        textAlign: "center",
      }}
    >
      <HandlesNavBar>
        <MoreCategories />
      </HandlesNavBar>
    </Box>
  );
};

export default NavBar;
