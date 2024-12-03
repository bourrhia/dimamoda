import React from "react";
import Box from "@mui/material/Box";

export const NeedHelpUpSm = () => {
  return (
    <Box
      component="main"
      sx={{
        width: "100%",
        WebkitBoxFlex: 1,
        WebkitFlex: "1 0 auto",
        MsFlex: "1 0 auto",
        flex: "1 0 auto",
        WebkitFontSmoothing: "antialiased",
        boxSizing: "border-box",
        color: "#111820",
        fontWeight: "400",
        fontSize: ".875rem",
        lineHeight: "1.25rem",
        unicodeBidi: "isolate",
        display: "block",
        colorScheme: "only light",
        MsTextSizeAdjust: "100%",
        WebkitTextSizeAdjust: "100%",
      }}
    >
      <Box
        sx={{
          maxWidth: "1280px",
          marginLeft: "32px",
          marginRight: "auto",
          display: "block",
          unicodeBidi: "isolate",
          boxSizing: "inherit",
          WebkitFontSmoothing: "antialiased",
          color: "#111820",
          fontWeight: "400",
          fontSize: ".875rem",
          lineHeight: "1.25rem",
          colorScheme: "only light",
          MsTextSizeAdjust: "100%",
          WebkitTextSizeAdjust: "100%",
        }}
      >
        <Box
          component="h2"
          sx={{
            boxSizing: "inherit",
            marginTop: "64px",
            marginBottom: "16px",
            fontWeight: "700",
            fontSize: "30px",
            lineHeight: "40px",
            display: "block",
            marginBlockStart: "0.83em",
            marginBlockEnd: "0.83em",
            marginInlineStart: "0px",
            marginInlineEnd: "0px",
            WebkitFontSmoothing: "antialiased",
            color: "#111820",
            colorScheme: "only light",
            MsTextSizeAdjust: "100%",
            WebkitTextSizeAdjust: "100%",
          }}
        >
          Besoin d’Aide Supplémentaire ?
        </Box>

        <Box
          component="p"
          sx={{
            boxSizing: "inherit",
            fontSize: "16px",
            lineHeight: "20px",
            color: "#41413f",
            display: "block",
            marginBlockStart: "1em",
            marginBlockEnd: "1em",
            marginInlineStart: "0px",
            marginInlineEnd: "0px",
            unicodeBidi: "isolate",
            WebkitFontSmoothing: "antialiased",
            fontWeight: 700,
            colorScheme: "only light",
            MsTextSizeAdjust: "100%",
            WebkitTextSizeAdjust: "100%",
          }}
        >
          Nous Contacter
        </Box>
        <Box
          component="p"
          sx={{
            boxSizing: "inherit",
            fontSize: "14px",
            lineHeight: "20px",
            color: "#41413f",
            display: "block",
            marginBlockStart: "1em",
            marginBlockEnd: "1em",
            marginInlineStart: "0px",
            marginInlineEnd: "0px",
            unicodeBidi: "isolate",
            WebkitFontSmoothing: "antialiased",
            fontWeight: 400,
            colorScheme: "only light",
            MsTextSizeAdjust: "100%",
            WebkitTextSizeAdjust: "100%",
          }}
        >
          Si vous avez des questions ou nécessitez une assistance, n'hésitez pas
          à nous joindre au <strong>06 61 44 91 63</strong>. Nous sommes là pour
          vous aider !
        </Box>
      </Box>
    </Box>
  );
};

export default NeedHelpUpSm;
