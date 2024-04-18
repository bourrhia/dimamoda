import React from "react";
import Box from "@mui/material/Box";
import clientPromise from "../../../../lib/mongodb";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SvgIcon from "@mui/material/SvgIcon";
import ProdLinkMobile from "../../../../components/ShowProductList/ProductListMobile/ProdLinkMobile";

function CustArrowBackIosNewIcon(props) {
  return (
    <SvgIcon {...props}>
      <ArrowBackIosNewIcon />
    </SvgIcon>
  );
}

export const dynamicParams = true;
//export const revalidate = 200;

async function generateAllPrds() {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);

  const allPrdsImg = await db.collection("product").find().limit(21).toArray();

  return allPrdsImg;
}

// Return a list of `params` to populate the [pid] dynamic segment
export async function generateStaticParams() {
  const allPrdsMrventes = JSON.parse(JSON.stringify(await generateAllPrds()));

  // Get the paths we want to pre-render
  return allPrdsMrventes.map((prod) => ({
    pid: prod.productId.toString(),
  }));
}

async function getSelectedProd(params) {
  const client = await clientPromise;
  const db = client.db(process.env.MONGODB_DB);
  const { prodid } = params;

  const mySelectedProd = await db
    .collection("product")
    .find({ productId: parseInt(prodid) })
    .limit(1)
    .toArray();

  return mySelectedProd;
}

const ProdDesc = async ({ params }) => {
  const selprd = JSON.parse(JSON.stringify(await getSelectedProd(params)));

  const vProdDescButt = "prodDescButt";

  const Principcaract = ({ princcaract1 }) => {
    return (
      <Box
        component="li"
        sx={{
          wordWrap: "break-word",
          margin: 0,
          listStyle: "disc",
          display: "list-item",
          textAlign: "-webkit-match-parent",
          color: "#0F1111",

          "::marker": {
            unicodeBidi: "isolate",
            fontVariantNumeric: "tabular-nums",
            textTransform: "none",
            textIndent: "0px !important",
            textAlign: "start !important",
            textAlignLast: "start !important",
          },
        }}
      >
        <Box
          component="span"
          sx={{
            color: "#0F1111",
            wordWrap: "break-word",
          }}
        >
          {princcaract1}
        </Box>
      </Box>
    );
  };

  return (
    <Box
      sx={{
        minHeight: "100%",
        flexDirection: "column",
        display: "flex",
        fontSize: ".875rem",
        color: "#282828",
      }}
    >
      <Box
        component="header"
        sx={{
          flexShrink: 0,
          zIndex: "70",
          boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",
          top: 0,
          position: "sticky",
          backgroundColor: "#fff",
          display: "block",
          direction: "ltr",
          fontSize: ".875rem",
          color: "#282828",
        }}
      >
        <Box
          sx={{
            flexWrap: "nowrap",
            alignItems: "center",
            paddingLeft: "8px",
            paddingRight: "8px",
            minHeight: "56px",
            flexBasis: "100%",
            maxWidth: "100%",
            minWidth: "100%",
            width: "100%",
            flex: "0 1 auto",
            display: "flex",
          }}
        >
          <ProdLinkMobile buttonName={vProdDescButt}>
            <Box
              //component="a"
              // onClick={handleClick}
              //onTouchEnd={handleTouchEnd}
              sx={{
                marginRight: "16px",
                fontSize: 0,
                padding: "8px",
                flexShrink: 0,
                outline: 0,
                borderRadius: "99px",
                color: "inherit",
                textDecoration: "none",
                display: "inline-block",
                backgroundColor: "transparent",

                cursor: "pointer",

                ":WebkitAnyLink": {
                  cursor: "pointer",
                },
              }}
            >
              <CustArrowBackIosNewIcon
                sx={{
                  marginLeft: "auto",
                  flexShrink: 0,
                  fill: "#282828",
                }}
              />
            </Box>
          </ProdLinkMobile>

          <Box
            component="h1"
            sx={{
              fontSize: "1.25rem",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              fontWeight: 500,
              overflow: "hidden",
              margin: 0,
              padding: 0,
              color: "#282828",
            }}
          >
            Description de l'article
          </Box>
        </Box>
      </Box>

      <Box
        component="main"
        sx={{
          paddingBottom: "4px",
          paddingTop: "4px",
          flexShrink: 0,
          flexGrow: 1,
          fontSize: ".875rem",
          color: "#282828",
        }}
      >
        <Box
          sx={{
            maxWidth: "100%",
            width: "100%",
            flexWrap: "wrap",
            flex: "0 1 auto",
            display: "flex",
          }}
        >
          <Box
            component="section"
            sx={{
              fontSize: ".75rem",
              marginBottom: "4px",
              marginTop: "4px",
              paddingBottom: "8px",
              paddingTop: "8px",
              width: "100%",
              borderRadius: 0,
              flexBasis: "100%",
              maxWidth: "100%",
              minWidth: "100%",
              paddingLeft: "8px",
              paddingRight: "8px",
              boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",
              backgroundColor: "#fff",
              display: "block",
              color: "#282828",
            }}
          >
            <Box
              component="h2"
              sx={{
                fontSize: "1rem",
                fontWeight: 500,
                paddingLeft: "8px",
                paddingRight: "8px",
                margin: 0,
                padding: 0,
                color: "#282828",
              }}
            >
              Description
            </Box>
            <Box
              sx={{
                padding: "8px",
                overflowX: "auto",
                fontSize: ".75rem",
                color: "#282828",
              }}
            >
              {selprd[0]?.descdet}
            </Box>
          </Box>
          <Box
            component="section"
            sx={{
              fontSize: ".75rem",
              marginBottom: "4px",
              marginTop: "4px",
              paddingBottom: "8px",
              paddingTop: "8px",
              width: "100%",
              borderRadius: 0,
              flexBasis: "100%",
              maxWidth: "100%",
              minWidth: "100%",
              paddingLeft: "8px",
              paddingRight: "8px",
              boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",
              backgroundColor: "#fff",
              display: "block",
              color: "#282828",
            }}
          >
            <Box
              component="h2"
              sx={{
                fontSize: "1rem",
                fontWeight: 500,
                paddingLeft: "8px",
                paddingRight: "8px",
                margin: 0,
                padding: 0,
                color: "#282828",
              }}
            >
              Principales caractéristiques
            </Box>
            <Box
              sx={{
                padding: "8px",
                fontSize: ".75rem",
                color: "#282828",
              }}
            >
              <Box
                component="ul"
                sx={{
                  padding: 0,
                  margin: "0 0 0 1.8rem",
                  color: "#0F1111",
                  marginBottom: "0!important",
                }}
              >
                {selprd[0]?.pcaract1 && (
                  <Principcaract
                    princcaract1={selprd[0]?.pcaract1}
                  ></Principcaract>
                )}

                {selprd[0]?.pcaract2 && (
                  <Principcaract
                    princcaract1={selprd[0]?.pcaract2}
                  ></Principcaract>
                )}

                {selprd[0]?.pcaract3 && (
                  <Principcaract
                    princcaract1={selprd[0]?.pcaract3}
                  ></Principcaract>
                )}

                {selprd[0]?.pcaract4 && (
                  <Principcaract
                    princcaract1={selprd[0]?.pcaract4}
                  ></Principcaract>
                )}

                {selprd[0]?.pcaract5 && (
                  <Principcaract
                    princcaract1={selprd[0]?.pcaract5}
                  ></Principcaract>
                )}

                {selprd[0]?.pcaract6 && (
                  <Principcaract
                    princcaract1={selprd[0]?.pcaract6}
                  ></Principcaract>
                )}

                {selprd[0]?.pcaract7 && (
                  <Principcaract
                    princcaract1={selprd[0]?.pcaract7}
                  ></Principcaract>
                )}
                {selprd[0]?.pcaract8 && (
                  <Principcaract
                    princcaract1={selprd[0]?.pcaract8}
                  ></Principcaract>
                )}
                {selprd[0]?.pcaract9 && (
                  <Principcaract
                    princcaract1={selprd[0]?.pcaract9}
                  ></Principcaract>
                )}
                {selprd[0]?.pcaract10 && (
                  <Principcaract
                    princcaract1={selprd[0]?.pcaract10}
                  ></Principcaract>
                )}
              </Box>
            </Box>
          </Box>
          <Box
            component="section"
            sx={{
              fontSize: ".75rem",
              marginBottom: "4px",
              marginTop: "4px",
              paddingBottom: "8px",
              paddingTop: "8px",
              width: "100%",
              borderRadius: 0,
              flexBasis: "100%",
              maxWidth: "100%",
              minWidth: "100%",
              paddingLeft: "8px",
              paddingRight: "8px",
              boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",
              backgroundColor: "#fff",
              display: "block",
              color: "#282828",
            }}
          >
            <Box
              component="h2"
              sx={{
                fontSize: "1rem",
                fontWeight: 500,
                paddingLeft: "8px",
                paddingRight: "8px",
                margin: 0,
                padding: 0,
                color: "#282828",
              }}
            >
              Descriptif technique
            </Box>
            <Box
              sx={{
                padding: "8px",
                fontSize: ".75rem",
                color: "#282828",
              }}
            >
              <Box
                component="ul"
                sx={{
                  padding: 0,
                  margin: "0 0 0 1.8rem",
                  color: "#0F1111",
                  marginBottom: "0!important",
                }}
              >
                {selprd[0].desctec1 && (
                  <Principcaract
                    princcaract1={selprd[0].desctec1}
                  ></Principcaract>
                )}

                {selprd[0].desctec2 && (
                  <Principcaract
                    princcaract1={selprd[0].desctec2}
                  ></Principcaract>
                )}

                {selprd[0].desctec3 && (
                  <Principcaract
                    princcaract1={selprd[0].desctec3}
                  ></Principcaract>
                )}

                {selprd[0].desctec4 && (
                  <Principcaract
                    princcaract1={selprd[0].desctec4}
                  ></Principcaract>
                )}

                {selprd[0].desctec5 && (
                  <Principcaract
                    princcaract1={selprd[0].desctec5}
                  ></Principcaract>
                )}

                {selprd[0].desctec6 && (
                  <Principcaract
                    princcaract1={selprd[0].desctec6}
                  ></Principcaract>
                )}

                {selprd[0].desctec7 && (
                  <Principcaract
                    princcaract1={selprd[0].desctec7}
                  ></Principcaract>
                )}
                {selprd[0].desctec8 && (
                  <Principcaract
                    princcaract1={selprd[0].desctec8}
                  ></Principcaract>
                )}
                {selprd[0].desctec9 && (
                  <Principcaract
                    princcaract1={selprd[0].desctec9}
                  ></Principcaract>
                )}
                {selprd[0].desctec10 && (
                  <Principcaract
                    princcaract1={selprd[0].desctec10}
                  ></Principcaract>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProdDesc;
