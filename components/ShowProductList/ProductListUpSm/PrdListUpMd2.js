import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import ShowCatTitle from "../ProductListAllDevices/ShowCatTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HandlesSlider from "../../Slider/HandlesSlider";
import ProdLinkUpsm from "./ProdLinkUpSm";

export const PrdListUpMd2 = ({ imgmrv }) => {
  const vCatTitle = "Meilleures ventes";
  const imgmrvLength = imgmrv?.length;
  const vImgClickUpMd2 = "imgClickUpMd2";

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
    width: 50,
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
    width: 50,
    alignItems: "center",
    zIndex: 100,
  };

  const prdCarouselRightHide = {
    display: "none",
  };

  const renderedImg = imgmrv.map((image) => (
    <Box
      key={image.productId}
      sx={{
        "@media screen and (min-width: 600px)": {
          width: "calc(100% / (3))",
        },

        "@media screen and (min-width: 768px)": {
          width: "calc(100% / (4))",
        },

        "@media screen and (min-width: 960px)": {
          width: "calc(100% / (5))",
        },

        "@media screen and (min-width: 1083px)": {
          width: "calc(100% / (6))",
        },

        display: "-webkit-flex",
        display: "-ms-flexbox",
        display: "flex",
        WebkitFlexDirection: "column",
        MsFlexDirection: "column",
        flexDirection: "column",
      }}
    >
      <Box>
        <Box
          sx={{
            padding: "20px 10px",

            display: "inline-block",
            verticalAlign: "top",
            width: "100%",
            maxHeight: "366px",

            textAlign: "center",
            textDecoration: "none!important",
            color: "inherit",
            border: "none",
            outline: "none",

            cursor: "pointer",
            ":WebkitAnyLink": {
              cursor: "pointer",
            },
          }}
        >
          <ProdLinkUpsm
            buttonName={vImgClickUpMd2}
            productNum={image.productId}
          >
            <Box
              sx={{
                height: "100%",
              }}
            >
              <Box
                sx={{
                  height: "200px",

                  width: "100%",

                  position: "relative",
                  margin: "0 auto",

                  maxHeight: "200px",

                  boxSizing: "border-box",
                  display: "block",
                }}
              >
                <Image
                  src={image.imgJpg}
                  alt="Image"
                  fill
                  sizes="(min-width: 1083px) 16vw, (min-width: 960px) 20vw, (min-width: 768px) 25vw,(min-width: 600px) 33vw"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Box>
          </ProdLinkUpsm>
        </Box>
      </Box>
    </Box>
  ));

  return (
    <Box
      sx={{
        display: "block",
        width: "100%",
      }}
    >
      <Box
        sx={{
          height: "100%",
          backgroundColor: "#fff",
        }}
      >
        <Box>
          <Box>
            <ShowCatTitle catTitle={vCatTitle} />
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              overflow: "hidden",
              width: "100%",
              display: "-webkit-flex",
              display: "-ms-flexbox",
              display: "flex",
              WebkitFlexDirection: "row",
              MsFlexDirection: "row",
              flexDirection: "row",
              WebkitFlex: "none",
              MsFlex: "none",
              flex: "none",
              position: "relative",
            }}
          >
            <Box
              sx={{
                overflowX: "hidden",
                paddingBottom: "64px",
                marginBottom: "-64px",
                width: "100%",
                display: "-webkit-flex",
                display: "-ms-flexbox",
                display: "flex",
                WebkitFlexDirection: "row",
                MsFlexDirection: "row",
                flexDirection: "row",
                WebkitFlex: "none",
                MsFlex: "none",
                flex: "none",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  WebkitFlex: "none",
                  MsFlex: "none",
                  flex: "none",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    transform: "translateX(0px)",
                    transition: "-webkit-transform .4s ease-in-out",
                    transition: "transform .4s ease-in-out",
                    transition:
                      "transform .4s ease-in-out,-webkit-transform .4s ease-in-out",
                    display: "-webkit-flex",
                    display: "-ms-flexbox",
                    WebkitFlexDirection: "row",
                    MsFlexDirection: "row",
                    flexDirection: "row",
                    WebkitAlignItems: "stretch",
                    MsFlexAlign: "stretch",
                    alignItems: "stretch",
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
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PrdListUpMd2;
