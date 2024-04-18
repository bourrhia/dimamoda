import React from "react";
import Box from "@mui/material/Box";

import FooterUpsm from "./FooterUpSm";
import FooterXs from "./FooterXs";

function Fouter() {
  return (
    <Box>
      <Box tabIndex="0">
        <Box
          sx={{
            display: { xs: "none", sm: "block" },
          }}
        >
          <FooterUpsm />
        </Box>

        <Box
          sx={{
            display: { xs: "block", sm: "none" },
          }}
        >
          <FooterXs />
        </Box>
      </Box>
    </Box>
  );
}

export default Fouter;
