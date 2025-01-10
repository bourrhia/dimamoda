import React from "react";
import Box from "@mui/material/Box";
// import ProdLinkAllDevices from "./ProdLinkAllDevices";
//import ProdLinkShowMoreXs from "./ProdLinkShowMoreXs";
import ProdLinkShowByCatXs from "./ProdLinkShowByCatXs";

export const ShowCatTitleXs = ({
  catTitle,
  category,
  searchTerm,
  otherSearchTerm,
  nbrProd,
}) => {
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
              fontSize: "1rem",
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
                fontSize: "1rem",
                lineHeight: "1.125rem",
                fontWeight: "700",

                cursor: "pointer",
                textDecoration: "none!important",
              }}
            >
              <Box
                component="span"
                sx={{
                  fontSize: "1.5rem",
                  lineHeight: "32px",
                  fontSize: "1.125rem",
                  fontWeight: "700",
                  fontSize: "1rem",
                  textOverflow: "ellipsis",
                  maxHeight: "2.8rem",
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: "3",
                  WebkitBoxOrient: "vertical",
                  fontWeight: "700!important",
                  fontStyle: "normal!important",
                  textTransform: "none!important",
                  textDecoration: "none!important",

                  lineHeight: ".8",

                  "@media screen and (min-width: 250px)": {
                    lineHeight: "1.4",
                  },
                }}
              >
                {catTitle}
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            fontWeight: "normal",
            flex: "1 0 auto",
            display: nbrProd > 4 ? "inline-block" : "None",
            fontSize: "1rem",
            lineHeight: "1.4rem",
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
            <ProdLinkShowByCatXs
              buttonName={vVoirePlusButt}
              category={category}
              searchTerm={searchTerm}
              catTitle={catTitle}
              otherSearchTerm={otherSearchTerm}
            >
              <Box
                sx={{
                  fontSize: "1rem",
                  color: "#007185!important",
                  fontWeight: "700!important",
                  textOverflow: "ellipsis",
                  maxHeight: "2.8rem",
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: "2",
                  WebkitBoxOrient: "vertical",
                  fontStyle: "normal!important",
                  textTransform: "none!important",
                  textDecoration: "none!important",
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                  lineHeight: "1",

                  "@media screen and (min-width: 250px)": {
                    lineHeight: "1.4",
                  },
                }}
              >
                Voire plus
              </Box>
            </ProdLinkShowByCatXs>
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

export default ShowCatTitleXs;
