import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
//import ShowCatTitle from "./ShowCatTitle";
import ShowCatTitle from "../ProductListAllDevices/ShowCatTitle";
import HandlesSlider from "../../Slider/HandlesSlider";
import ProdLinkUpsm from "./ProdLinkUpSm";
import { Suspense } from "react";
import ShowLoading from "../../Loading/ShowLoading";

export const PrdListUpMd1 = ({ imgmrv }) => {
  const vCatTitle = "Meilleures ventes";
  const imgmrvLength = imgmrv?.length;
  const vImgClickUpMd1 = "imgClickUpMd1";

  const prdCarouselLeft = {
    left: 0,
    borderRadius: "4px 0 0 4px",
    display: "flex",
    position: "absolute",
    alignSelf: "center",
    padding: "40px 15px 40px 5px",
    boxShadow: "1px 2px 10px -1px rgba(0,0,0,.3)",
    backgroundColor: "hsla(0,0%,100%,.98)",
    cursor: "pointer",
    boxSizing: "border-box",
    width: "50px",
    alignItems: "center",
    zIndex: 100,
  };

  const prdCarouselLeftHide = {
    display: "none",
  };

  const prdCarouselRight = {
    right: 0,
    borderRadius: "4px 0 0 4px",
    display: "flex",
    position: "absolute",
    alignSelf: "center",
    padding: "40px 15px 40px 5px",
    boxShadow: "1px 2px 10px -1px rgba(0,0,0,.3)",
    backgroundColor: "hsla(0,0%,100%,.98)",
    cursor: "pointer",
    boxSizing: "border-box",
    margin: 0,
    width: "50px",
    alignItems: "center",
    zIndex: 100,
  };

  const prdCarouselRightHide = {
    display: "none",
  };

  const renderedImg = imgmrv.map((image) => (
    <Box
      component="li"
      key={image.productId}
      sx={{
        width: "198px",
        display: "inline-block",
        listStyle: "none",
        wordWrap: "break-word",
        height: "100%",
        maxWidth: "297px",
        minWidth: "198px",
        float: "left",
        textAlign: "left",
        position: "relative",
        padding: "0 2px 0 0 !important",
        margin: "0 !important",

        //

        scrollSnapAlign: "start",
      }}
    >
      <Box
        component="span"
        sx={{
          color: "#0F1111",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "#FFF",
            marginBottom: "0!important",
          }}
        >
          <Box
            //component="a"
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
            }}
          >
            {/* <Suspense fallback={<ShowLoading />}> */}
            <ProdLinkUpsm
              buttonName={vImgClickUpMd1}
              productNum={image.productId}
            >
              <Box
                sx={{
                  position: "relative",
                  margin: "0px",
                  backgroundColor: "#FFF",
                  height: "250px",
                }}
              >
                <Box
                  sx={{
                    margin: "10px auto 10px auto",
                    verticalAlign: "top",
                    maxWidth: "100%",
                    border: 0,
                    position: "relative",
                    boxSizing: "border-box",
                    display: "block",
                    width: "100%",
                    height: "100%",
                    maxHeight: "100%",
                    //
                    height: "250px",
                    width: "198px",
                  }}
                >
                  <Image
                    src={image.imgJpg}
                    alt="Image"
                    fill
                    //sizes="100vw"
                    sizes="198px"
                    // priority={true}
                    style={{
                      objectFit: "contain", // cover, contain, none
                    }}
                  />
                </Box>
              </Box>
            </ProdLinkUpsm>
            {/* </Suspense> */}
          </Box>
        </Box>
      </Box>
    </Box>
  ));

  return (
    <Box
      sx={{
        marginBottom: 0,
        margin: "40px 0px",
        minWidth: "794px",
        maxWidth: "2573px",
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          marginBottom: "0 !important",
        }}
      >
        <ShowCatTitle catTitle={vCatTitle} />
      </Box>
      <Box
        sx={{
          marginBottom: 0,
          marginTop: "10px",
        }}
      >
        <Box
          component="ul"
          sx={{
            display: "block",
            marginLeft: 0,
            color: "#0F1111",

            overflow: "hidden",
            marginBottom: "0 !important",
            padding: 0,

            margin: "0 0 0 18px",

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
          <HandlesSlider
            prdCarouselLeft={prdCarouselLeft}
            prdCarouselLeftHide={prdCarouselLeftHide}
            prdCarouselRight={prdCarouselRight}
            prdCarouselRightHide={prdCarouselRightHide}
            imgmrvLength={imgmrvLength}
          >
            {renderedImg}
          </HandlesSlider>
        </Box>
      </Box>
    </Box>
  );
};

export default PrdListUpMd1;
