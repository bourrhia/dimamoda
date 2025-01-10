import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
// import ShowCatTitleXs from "../ProductListAllDevices/ShowCatTitleXs";
import ShowCatTitleXs2 from "../ProductListAllDevices/ShowCatTitleXs2";
import ProdLinkMobile2 from "./ProdLinkMobile2";

export const PrdListXs2 = ({
  imgmrv,
  category,
  catTitle,
  searchTerm,
  otherSearchTerm,
  nbrProd,
}) => {
  const vRenderImageXsButt = "renderImageXsButt";
  const vVoirePlusXsButt = "voirePlusXsButt";

  const renderedImg = imgmrv.map((image) => (
    <Box key={image.productId}>
      <ProdLinkMobile2
        buttonName={vRenderImageXsButt}
        productNum={image.productId}
      >
        <Box
          sx={{
            cursor: "pointer",
            textDecoration: "none!important",

            ":link": {
              textDecoration: "none",
              color: "#007185",
            },

            ":WebkitAnyLink": {
              cursor: "pointer",
            },
            //
            marginBottom: "2rem !important",
          }}
        >
          <Box
            sx={{
              position: "relative",

              "&::before": {
                content: '""',
                display: "block",
                height: 0,
                paddingBottom: "100%",
              },

              "&::after": {
                backgroundColor: "#000",
                content: '""',
                height: "100%",
                opacity: ".03",
                position: "absolute",
                top: 0,
                width: "100%",
                maxHeight: "100%",
                maxWidth: "90%",
                margin: "auto",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                verticalAlign: "top",
                border: 0,
              },
            }}
          >
            <Box
              sx={{
                maxHeight: "90%",
                maxWidth: "90%",
                position: "absolute",
                margin: "auto",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                verticalAlign: "top",
                border: 0,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  boxSizing: "border-box",
                  display: "block",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={image.imgJpg}
                  alt="Image"
                  fill
                  sizes="142px"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              paddingRight: "8px!important",
              paddingLeft: "8px!important",
              textAlign: "center!important",
              marginBottom: "0.8rem!important",
            }}
          >
            <Box
              component="span"
              sx={{
                cursor: "pointer",
              }}
            >
              <Box
                sx={{
                  fontWeight: "400!important",
                  fontStyle: "normal!important",
                }}
              >
                <Box
                  sx={{
                    marginBottom: "0!important",
                  }}
                >
                  <Box
                    component="h2"
                    sx={{
                      fontSize: "12px!important",
                      paddingBottom: 0,
                      WebkitLineClamp: 2,
                      maxHeight: "48px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitBoxOrient: "vertical",
                      marginBottom: "0!important",
                      color: "#0F1111!important",
                      fontWeight: 700,
                      textRendering: "optimizeLegibility",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontSize: "14px!important",

                        paddingBottom: 0,
                        color: "#0F1111!important",
                        fontWeight: "400!important",
                        fontStyle: "normal!important",

                        marginBottom: "0!important",
                        paddingBottom: 0,
                      }}
                    >
                      {image.descPrd}
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    marginTop: "0!important",
                    marginBottom: "0!important",
                  }}
                >
                  <Box
                    sx={{
                      fontSize: "12px!important",

                      width: "100%",
                      color: "#0F1111!important",

                      "&::after, &::before": {
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
                    <Box
                      component="span"
                      sx={{
                        color: "#0F1111",
                        textDecoration: "none",
                        position: "relative",
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          WebkitUserSelect: "none",
                          MozUserSelect: "none",
                          MsUserSelect: "none",
                          userSelect: "none",
                          position: "absolute!important",
                          left: "0rem!important",
                          bottom: "-0.1rem!important",
                          zIndex: "-1!important",
                          opacity: 0,
                        }}
                      >
                        {image.prixAct}&nbsp;{image.prixSymbol}
                      </Box>
                      <Box component="span" aria-hidden="true">
                        <Box
                          component="span"
                          sx={{
                            fontSize: "1rem",

                            fontWeight: "bold",
                          }}
                        >
                          {image.prixAct}&nbsp;{image.prixSymbol}
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                {image.red && (
                  <Box
                    sx={{
                      width: "100%",
                      wordWrap: "break-word",

                      textAlign: "center!important",

                      "&::after, &::before": {
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
                    <Box
                      sx={{
                        fontWeight: "400!important",
                        fontStyle: "normal!important",
                        color: "#0F1111!important",
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          fontSize: "14px!important",
                          lineHeight: "20px!important",
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            wordWrap: "normal",
                          }}
                        >
                          {image.prixIni}&nbsp;{image.prixSymbol}
                        </Box>
                        &nbsp;-&nbsp;
                        <Box
                          component="span"
                          sx={{
                            wordWrap: "normal",
                          }}
                        >
                          {image.red}&nbsp;%
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </ProdLinkMobile2>
    </Box>
  ));

  return (
    <Box>
      <Box
        sx={{
          marginTop: "5px",
          marginBottom: "5px",
          backgroundColor: "#FFF",
          overflow: "auto",
          padding: "15px",
        }}
      >
        <Box
          sx={{
            padding: 0,
            paddingBottom: "10px",
          }}
        >
          <Box
            component="h2"
            sx={{
              paddingBottom: 0,
              fontSize: "20px",
            }}
          >
            <Box
              component="span"
              sx={{
                lineHeight: "1.3em !important",
                maxHeight: "2.6em",
                display: "block",
                wordBreak: "normal",
                position: "relative",
                width: "100%",
                overflow: "hidden",
              }}
            >
              <Box
                component="span"
                sx={{
                  position: "absolute!important",
                  left: "0rem!important",
                  bottom: "-0.1rem!important",
                  zIndex: "-1!important",
                  opacity: 0,
                  display: "inline-block",
                  width: "100%",
                  whiteSpace: "normal",
                }}
              >
                <ShowCatTitleXs2
                  catTitle={catTitle}
                  category={category}
                  searchTerm={searchTerm}
                  otherSearchTerm={otherSearchTerm}
                  nbrProd={nbrProd}
                />
              </Box>

              <Box
                component="span"
                sx={{
                  height: "auto",
                  display: "inline-block",
                  width: "100%",
                  whiteSpace: "normal",
                }}
              >
                <ShowCatTitleXs2
                  catTitle={catTitle}
                  category={category}
                  searchTerm={searchTerm}
                  otherSearchTerm={otherSearchTerm}
                  nbrProd={nbrProd}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            padding: 0,
            position: "relative",
          }}
        >
          <Box
            sx={{
              marginBottom: 0,
              gridGap: "2px",
              display: "grid",
              gap: "2px",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            {renderedImg}
          </Box>
        </Box>

        <Box
          sx={{
            padding: 0,
            paddingTop: "13px",
          }}
        >
          <Box
            sx={{
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            <ProdLinkMobile2
              buttonName={vVoirePlusXsButt}
              category={category}
              searchTerm={searchTerm}
              catTitle={catTitle}
              otherSearchTerm={otherSearchTerm}
              nbrProd={nbrProd}
            >
              <Box
                sx={{
                  cursor: "pointer",
                  textDecoration: "none!important",
                  color: "#007185",

                  ":link": {
                    textDecoration: "none",
                    color: "#007185",
                  },

                  ":WebkitAnyLink": {
                    cursor: "pointer",
                  },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    lineHeight: "1.3em !important",
                    maxHeight: "1.3em",
                    display: "block",
                    wordBreak: "normal",
                    position: "relative",
                    width: "100%",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      position: "absolute!important",
                      left: "0rem!important",
                      bottom: "-0.1rem!important",
                      zIndex: "-1!important",
                      opacity: 0,
                      display: "inline-block",
                      width: "100%",
                      whiteSpace: "normal",
                    }}
                  >
                    Voir plus
                  </Box>

                  <Box
                    component="span"
                    sx={{
                      height: "auto",
                      display: nbrProd > 4 ? "inline-block" : "None",
                      width: "100%",
                      whiteSpace: "normal",
                      fontWeight: "bold",
                    }}
                  >
                    Voir plus
                  </Box>
                </Box>
              </Box>
            </ProdLinkMobile2>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PrdListXs2;
