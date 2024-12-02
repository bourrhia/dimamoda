import React from "react";
import Box from "@mui/material/Box";

export const ShowCategory = ({ catTitle }) => {
  return (
    <>
      <Box
        sx={{
          background: "-webkit-linear-gradient(top, #fff, #eee)",
          background: "linear-gradient(180deg, #fff, #eee)",
          borderBottom: "1px solid rgba(0, 0, 0, .17)",
          borderTop: "none",
          display: "block",
          height: "auto",
          margin: "0 auto",
          minWidth: "20rem",
          width: "100%",
          color: "#0f1111",
          fontSize: "1em",
          WebkitTextSizeAdjust: "none",

          "&::before,&::after": {
            content: '""',
            display: "table",
            lineHeight: 0,
          },
        }}
      >
        <Box
          component="span"
          sx={{
            cursor: "pointer",
            WebkitTapHighlightColor: "transparent",
            color: "#0f1111",
            WebkitTextSizeAdjust: "none",
            marginLeft: "16px !important",
          }}
        >
          <Box
            component="h1"
            sx={{
              "&:last-child": {
                paddingBottom: 0,
              },
              color: "#111",
              display: "inline-block",
              marginBottom: "15px",
              marginTop: "8px",
              paddingLeft: "15px",
              verticalAlign: "middle !important",
              textRendering: "optimizeLegibility",
              fontSize: "1rem !important",
              lineHeight: "1 !important",
              fontWeight: "500 !important",
              fontStyle: "normal !important",
              textTransform: "none !important",
              textDecoration: "none !important",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {catTitle}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ShowCategory;
