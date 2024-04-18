import React from "react";
import Box from "@mui/material/Box";
import PrdListOnlySm1 from "../../../ShowProductList/ProductListUpSm/PrdListOnlySm1";
import PrdListUpSm1 from "../../../ShowProductList/ProductListUpSm/PrdListUpSm1";
import CategoryTitle from "../CategoryTitle";

export const HandlesHighTecUpSm = ({ prdsImg }) => {
  const ctgTitle = "High Tech";
  return (
    <>
      <CategoryTitle cattitle={ctgTitle} />
      {/*  Breakpoint only sm */}
      <Box
        sx={{
          display: { xs: "none", sm: "block", md: "none" },
          marginLeft: "32px",
          marginRight: "32px",
          maxWidth: "1248px",

          marginBottom: "64px",
          marginTop: "32px",
          //
          width: "100%",
          height: "100%",
        }}
      >
        <PrdListOnlySm1 imgmrv={prdsImg} />
      </Box>

      {/*  Breakpoint up md*/}
      <Box
        sx={{
          display: { xs: "none", sm: "none", md: "block", lg: "block" },
          marginLeft: "32px",
          marginRight: "32px",
          maxWidth: "1248px",

          marginBottom: "64px",
          marginTop: "32px",
          //
          width: "100%",
          height: "100%",
        }}
      >
        <PrdListUpSm1 imgmrv={prdsImg} />
      </Box>
    </>
  );
};

export default HandlesHighTecUpSm;
