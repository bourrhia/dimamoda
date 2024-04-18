import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

export const ImageCartItemXs = ({ selectedprd }) => {
  const vDescPrd = selectedprd[0]?.descPrd;
  const vPrixAct = selectedprd[0]?.prixAct;
  const vPrixSymbol = selectedprd[0]?.prixSymbol;

  const renderedImg = selectedprd.map((image) => (
    <Box
      key={image.productId}
      component="li"
      sx={{
        flex: "0 0 100%",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        width: "100vw",
        height: "50vh",
        transition: "height .3s linear",
        position: "relative",
        listStyle: "none",

        alignItems: "center",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",

        WebkitBoxAlign: "center",
        // alignItems: "center",
        WebkitBoxPack: "center",

        "&::after": {
          background: "rgba(0,0,0,0.05)",
          bottom: 0,
          content: '""',
          display: "block",
          left: 0,
          position: "absolute",
          right: 0,
          top: 0,
        },
      }}
    >
      <Image
        src={image.imgJpg}
        alt="Image"
        fill
        // sizes="100vw"
        sizes="120px"
        style={{
          objectFit: "contain", // cover, contain, none
        }}
      />
    </Box>
  ));

  return (
    <>
      <Box
        sx={{
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
          lineHeight: "20px",
          letterSpacing: "normal",
          WebkitFontSmoothing: "antialiased",
          MozFontSmoothing: "antialiased",
          MsFontSmoothing: "antialiased",
          fontSmoothing: "antialiased",
          WebkitTextSizeAdjust: "none",
          MozTextSizeAdjust: "none",
          MsTextSizeAdjust: "none",
          textSizeAdjust: "none",
          verticalAlign: "middle",
          display: "block",
          userSelect: "none",
          WebkitUserSelect: "none",
          WebkitTouchCallout: "none",
        }}
      >
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            flexWrap: "wrap",
            position: "relative",
          }}
        >
          <Box
            component="ul"
            sx={{
              display: "flex",
              alignItems: "center",
              overflow: "auto",
              scrollSnapType: "x mandatory",
              listStyleType: "none",
              minWidth: "100%",
              //
              margin: 0,
              padding: 0,
            }}
          >
            {renderedImg}
          </Box>
        </Box>
      </Box>

      <Box>
        <Box
          sx={{
            marginTop: "0.7rem",
            padding: "0 1rem",
          }}
        >
          <Box
            sx={{
              marginTop: "1rem",
            }}
          >
            <Box
              sx={{
                WebkitBoxSizing: "border-box",
                MozBoxSizing: "border-box",
                boxSizing: "border-box",

                "&::before,&::after": {
                  display: "table",
                  content: '""',
                },

                "&::after": {
                  clear: "both",
                },
              }}
            >
              <Box
                sx={{
                  lineHeight: "1.33rem",
                  display: "block",
                  fontSize: "1.25rem",
                  fontWeight: 400,
                  color: "#333",
                  wordWrap: "break-word",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  margin: "0rem",
                }}
              >
                <Box
                  component="h1"
                  sx={{
                    color: "#111820",
                    fontSize: "1.25rem",

                    lineHeight: "24px",
                    display: "block",
                    fontWeight: 400,
                    wordWrap: "break-word",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                    margin: "0rem",
                  }}
                >
                  <Box component="span">
                    <Typography
                      variant="body1"
                      gutterBottom
                      component="span"
                      sx={{
                        color: "#111820",
                        display: "block",
                        wordWrap: "break-word",
                        whiteSpace: "pre-wrap",
                        wordBreak: "break-word",
                      }}
                    >
                      <Box component="span">
                        {vDescPrd}&nbsp; description prdt description prdt
                        description prdt description prdt description prdt
                        description prdt description prdt description prdt
                        description prdt description prdt
                      </Box>
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box>
        <Box>
          <Box
            sx={{
              marginTop: "0.6rem",
              padding: "0 1rem",
            }}
          >
            <Box
              sx={{
                boxSizing: "border-box",

                "&::before,&::after": {
                  display: "table",
                  content: '""',
                },

                "&::after": {
                  clear: "both",
                },
              }}
            ></Box>
          </Box>
          <Box
            sx={{
              WebkitBoxSizing: "border-box",
              MozBoxSizing: "border-box",
              boxSizing: "border-box",

              "&::before,&::after": {
                display: "table",
                content: '""',
              },

              "&::after": {
                clear: "both",
              },
            }}
          ></Box>
          <Box
            sx={{
              marginTop: "0.7rem",
              padding: "0 1rem",
            }}
          >
            <Box component="span">
              <Box
                component="span"
                sx={{
                  fontSize: "1.5rem",
                  fontWeight: "inherit",
                  color: "#111820",
                  display: "inline",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    fontSize: "1.5rem",
                    color: "#111820",
                    fontWeight: "bold",
                  }}
                >
                  <Box component="span">
                    {vPrixAct}&nbsp;
                    {vPrixSymbol}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: "0.5rem",
              padding: "0 1rem",
            }}
          ></Box>
          <Box
            sx={{
              marginTop: "0.95rem",
              marginBottom: "0.95rem",
              padding: "0 1rem",
              textAlign: "center",
            }}
          >
            <Box
              sx={{
                borderTop: "1px solid #e5e5e5",
                borderBottom: "1px solid #e5e5e5",
                paddingBottom: "16px",

                WebkitBoxSizing: "border-box",
                MozBoxSizing: "border-box",
                boxSizing: "border-box",
                display: "flex",
                paddingTop: "1rem",

                textAlign: "center",

                "&::before,&::after": {
                  display: "table",
                  content: '""',
                },

                "&::after": {
                  clear: "both",
                },
              }}
            >
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  float: "left",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                  minHeight: "1px",
                }}
              >
                <Box component="span">
                  <Box component="span">
                    <Typography variant="body2" gutterBottom component="span">
                      Retours acceptés
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ImageCartItemXs;
