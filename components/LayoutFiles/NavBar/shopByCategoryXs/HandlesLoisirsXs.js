import React from "react";
import Box from "@mui/material/Box";
import CategoryTitle from "../CategoryTitle";
import PrdListXs1 from "../../../ShowProductList/ProductListMobile/PrdListXs1";
import PrdListXs2 from "../../../ShowProductList/ProductListMobile/PrdListXs2";

export const HandlesLoisirsUpSm = ({ fourPrdsImg }) => {
  const ctgTitle = "Loisirs";
  return (
    <>
      <CategoryTitle cattitle={ctgTitle} />
      <Box
        sx={{
          display: { xs: "block", sm: "none" },
          backgroundColor: "#D5DBDB",
          width: "100%",
          minHeight: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Box
            sx={{
              fontSize: "15px",
              marginTop: "-5px",
              fontWeight: 300,

              "&::before,&::after": {
                display: "table",
                content: '""',
                lineHeight: 0,
                fontSize: 0,
              },

              "&::after": {
                clear: "both",
              },
            }}
          >
            <Box>
              <Box
                sx={{
                  width: "100%",
                }}
              >
                <PrdListXs1 imgmrv={fourPrdsImg} />

                <PrdListXs2 imgmrv={fourPrdsImg} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HandlesLoisirsUpSm;
