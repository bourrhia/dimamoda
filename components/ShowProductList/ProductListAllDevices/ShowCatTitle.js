import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProdLinkAllDevices from "./ProdLinkAllDevices";

export const ShowCatTitle = ({ catTitle }) => {
  const vVoirePlusButt = "voirePlusButt";

  return (
    <>
      <Box
        sx={{
          display: "flex",

          "&::before,&::after": {
            content: '""',
            display: "table",
            lineHeight: 0,
          },

          "&::after": {
            clear: "both",
          },
          marginBottom: "0 !important",
        }}
      >
        <Box
          sx={{
            paddingRight: "10px",
            flex: "0 1 auto",
          }}
        >
          <Box
            component="h2"
            sx={{
              fontSize: "1.5rem",
              lineHeight: "32px",
              fontWeight: "700",
              marginBottom: 0,
              marginTop: 0,
            }}
          >
            <Box
              sx={{
                color: "inherit",

                ":link": {
                  textDecoration: "none",
                },

                ":WebkitAnyLink": {
                  cursor: "pointer",
                },

                fontSize: "1.5rem",
                lineHeight: "32px",
                fontWeight: "700",

                cursor: "pointer",
                textDecoration: "none!important",
              }}
            >
              <Typography gutterBottom component="div">
                <Box
                  component="span"
                  sx={{
                    fontSize: "1.5rem",
                    lineHeight: "32px",
                    fontWeight: "700",
                  }}
                >
                  {catTitle}
                </Box>
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            fontSize: "1.25rem",
            fontWeight: "normal",
            flex: "1 0 auto",
            lineHeight: "32px",
            display: "inline-block",
          }}
        >
          <Box
            sx={{
              cursor: "pointer",
              textDecoration: "none!important",

              display: "inline-block",
              borderLeft: "solid 2px #f7f7f7",
              lineHeight: "1.125rem",
              color: "#007185",

              ":link": {
                textDecoration: "none",
                color: "#007185",
              },

              ":-webkit-any-link": {
                cursor: "pointer",
              },

              ":hover": {
                textDecoration: "underline",
                color: "#007185",
              },

              ":focus": {
                textDecoration: "underline",
                color: "#007185",
              },
            }}
          >
            <ProdLinkAllDevices buttonName={vVoirePlusButt}>
              <Typography gutterBottom component="div">
                <Box
                  sx={{
                    display: {
                      xs: "none",
                      sm: "block",
                      md: "block",
                      lg: "block",
                    },

                    fontSize: "1rem",
                    fontWeight: "normal",
                    lineHeight: "1.125rem",

                    color: "#007185!important",
                  }}
                >
                  Voire plus
                </Box>
              </Typography>
            </ProdLinkAllDevices>
          </Box>
        </Box>
      </Box>
      <Box
        component="hr"
        sx={{
          marginTop: "4px!important",
          backgroundColor: "transparent",
          display: "block",
          height: "1px",
          borderWidth: 0,
          borderTop: "1px solid #e7e7e7",
          lineHeight: "19px",
          marginBottom: "14px",
        }}
      ></Box>
    </>
  );
};

export default ShowCatTitle;
