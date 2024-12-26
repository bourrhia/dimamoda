"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import Box from "@mui/material/Box";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { productAdded } from "../../../redux/features/cart/cartSlice";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HandlesCartItemXs({ selectedprd }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const prodId = selectedprd[0]?.productId;
  const prodDesc = selectedprd[0]?.descPrd;
  const prodEtat = selectedprd[0]?.etatprd;
  const status = "idle";

  const prixSymbol = selectedprd[0]?.prixSymbol;

  const getAllMainImgAndColor = useMemo(() => {
    const allImagesAndColors = [];

    selectedprd[0]?.prdDetailsBySize.forEach((sizeDetail) => {
      sizeDetail.detailsByColor.forEach((colorDetail) => {
        allImagesAndColors.push({
          couleur: colorDetail.couleur,
          mainImgJpg: colorDetail.mainImgJpg,
          prixAct: colorDetail.prixAct,
          prixInit: colorDetail.prixInit,
          qteeDisp: colorDetail.qteeDisp,
          red: colorDetail.red,
          imgThumbnails: colorDetail.imgThumbnails,
        });
      });
    });

    return allImagesAndColors;
  }, [selectedprd]);

  const getAllMainImgAndColor2 = useMemo(() => {
    const allImagesAndColors = [];

    selectedprd[0]?.prdDetailsBySize.forEach((sizeDetail) => {
      sizeDetail.detailsByColor.forEach((colorDetail) => {
        const record = {
          couleur: colorDetail.couleur,
          mainImgJpg: colorDetail.mainImgJpg,
          imgThumbnails: colorDetail.imgThumbnails,
        };
        allImagesAndColors.push(record);
      });
    });

    const uniqueRecords = Array.from(
      new Set(allImagesAndColors.map((item) => JSON.stringify(item)))
    ).map((item) => JSON.parse(item));

    return uniqueRecords;
  }, [selectedprd]);

  const [productDetailsBySize2, setProductDetailsBySize2] = useState(
    getAllMainImgAndColor2
  );

  const [productState, setProductState] = useState({
    prodQtee: 1,
    isNavOpenCart: false,
    isNavCheckout: false,
    selectedSize: "Sélectionner",
    selectedColor: "Sélectionner",
    productDetailsBySize: getAllMainImgAndColor,
    colorsBySize: null,
    currentSlide: 0,
    qteemax: 0,
    prodImage: null,
    prodPrix: 0,
    prixInit: 0,
    prodQteeDisp: 0,
    red: 0,
    imgThumbnails: [],
  });

  const {
    prodQtee,
    isNavOpenCart,
    isNavCheckout,
    selectedSize,
    selectedColor,
    productDetailsBySize,
    colorsBySize,
    currentSlide,
    qteemax,
    prodImage,
    prodPrix,
    prixInit,
    prodQteeDisp,
    red,
  } = productState;

  const options = [];
  for (let i = 1; i <= qteemax; i++) {
    options.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }

  const handleChange = (event) => {
    const value = parseInt(event.target.value);

    setProductState((prevState) => ({
      ...prevState,
      prodQtee: value,
    }));
  };

  function getCouleursBySize(targetSize) {
    const sizeDetails =
      targetSize !== "Sélectionner" && targetSize
        ? selectedprd[0]?.prdDetailsBySize?.find(
            (item) => item.size === targetSize
          )
        : null;

    if (!sizeDetails || !sizeDetails.detailsByColor) {
      return [];
    }

    const couleurs =
      targetSize !== "Sélectionner" && targetSize
        ? sizeDetails?.detailsByColor?.map((colorItem) => colorItem.couleur)
        : null;

    return couleurs;
  }

  function getProductDetailsBySizeAndColor(targetSize, targetColor) {
    const sizeDetails =
      targetSize !== "Sélectionner" &&
      targetSize &&
      targetColor !== "Sélectionner" &&
      targetColor
        ? selectedprd[0]?.prdDetailsBySize.find(
            (item) => item.size === targetSize
          )
        : null;

    if (!sizeDetails || !sizeDetails.detailsByColor) {
      return null;
    }

    const colorDetails =
      targetSize !== "Sélectionner" &&
      targetSize &&
      targetColor !== "Sélectionner" &&
      targetColor
        ? sizeDetails?.detailsByColor?.find(
            (colorItem) => colorItem.couleur === targetColor
          )
        : null;

    if (!colorDetails) {
      return null;
    }

    const result = {
      prixAct: colorDetails.prixAct,
      prixInit: colorDetails.prixInit,
      qteeDisp: colorDetails.qteeDisp,
      red: colorDetails.red,
      mainImgJpg: colorDetails.mainImgJpg,
      couleur: colorDetails.couleur,
    };

    return result;
  }

  const getImagesBySizeAndColors = (size, color) => {
    const sizeData =
      size !== "Sélectionner" && size
        ? selectedprd[0]?.prdDetailsBySize?.find((item) => item.size === size)
        : getAllMainImgAndColor();

    if (!sizeData) {
      setProductState((prevState) => ({
        ...prevState,
        selectedSize: "Sélectionner",
        selectedColor: "Sélectionner",
      }));
      return getAllMainImgAndColor();
    }

    const colorDetails =
      size !== "Sélectionner" && size && color !== "Sélectionner" && color
        ? sizeData.detailsByColor.find(
            (colorItem) => colorItem.couleur === color
          )
        : null;

    if (!colorDetails || !colorDetails.imgThumbnails) {
      setProductState((prevState) => ({
        ...prevState,
        selectedSize: "Sélectionner",
        selectedColor: "Sélectionner",
      }));
      return getAllMainImgAndColor;
    }

    const imagesForSizeColor = colorDetails.imgThumbnails.map((thumbnail) => {
      return { mainImgJpg: thumbnail.imgJpg };
    });

    return imagesForSizeColor;
  };

  useEffect(() => {
    if (selectedSize !== "Sélectionner") {
      setProductState((prevState) => ({
        ...prevState,
        colorsBySize: getCouleursBySize(selectedSize),
      }));
    } else {
      resetProductDetails();
    }
  }, [selectedSize]);

  const resetProductDetails = () => {
    if (selectedSize !== "Sélectionner") return null;

    setProductState((prevState) => ({
      ...prevState,
      productDetailsBySize: getAllMainImgAndColor,
      selectedColor: "Sélectionner",
      selectedSize: "Sélectionner",
      colorsBySize: null,
      prodQtee: 1,
      isNavOpenCart: false,
      isNavCheckout: false,
      currentSlide: 0,
      qteemax: 0,
      prodImage: null,
      prodPrix: 0,
      prixInit: 0,
      prodQteeDisp: 0,
      red: 0,
      imgThumbnails: null,
    }));
  };

  const handleSizeChange = (event) => {
    const size = event.target.value;
    setProductState((prevState) => ({
      ...prevState,
      selectedSize: size,
      selectedColor: "Sélectionner",
    }));
  };

  const handleColorChange = (event) => {
    const color = event.target.value;
    setProductState((prevState) => ({
      ...prevState,
      selectedColor: color,
    }));
  };

  useEffect(() => {
    if (
      selectedSize !== "Sélectionner" &&
      selectedColor !== "Sélectionner" &&
      selectedSize &&
      selectedColor
    ) {
      setProductDetails(selectedSize, selectedColor);
    } else {
      resetProductDetails();
    }
  }, [selectedColor]);

  const setProductDetails = (size, color) => {
    if (
      !selectedSize ||
      !selectedColor ||
      selectedSize === "Sélectionner" ||
      selectedColor === "Sélectionner"
    )
      return;

    const details = getProductDetailsBySizeAndColor(size, color);

    if (details) {
      const { mainImgJpg, imgThumbnails, prixAct, prixInit, qteeDisp, red } =
        details;

      setProductState((prevState) => ({
        ...prevState,
        productDetailsBySize: getImagesBySizeAndColors(size, color),
        prodQtee: 1,
        prodPrix: prixAct,
        prixInit: prixInit,
        prodQteeDisp: qteeDisp,
        red: red,
        qteemax: qteeDisp,
        prodImage: mainImgJpg,
        imgThumbnails: imgThumbnails,
      }));
    }
  };

  function chooseSizeColor() {
    if (selectedSize === "Sélectionner" && selectedColor === "Sélectionner") {
      return "Veuillez choisir une taille ou une couleur ?";
    }

    if (selectedSize === "Sélectionner") {
      return "Veuillez choisir une taille ?";
    }

    if (selectedColor === "Sélectionner") {
      return "Veuillez choisir une couleur ?";
    }

    return null;
  }

  const choisirTailleCouleur = chooseSizeColor();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (oldIndex, newIndex) =>
      setProductState((prevState) => ({
        ...prevState,
        currentSlide: newIndex,
      })),
    arrows: true,
    draggable: true,
    swipe: true,
    touchMove: true,
    adaptiveHeight: true,

    customPaging: function (index) {
      const isActive = index === currentSlide;
      return (
        <Box
          component="span"
          sx={{
            borderRadius: "2rem",
            display: "inline-block",
            float: "none",
            listStyle: "none",
            margin: "0 .3rem",
            padding: 0,
            lineHeight: "1.6rem",
            position: "relative",
            wordWrap: "break-word",
            height: ".5rem",
            width: ".5rem",
            background: isActive ? "#007185" : "#fff",
            border: isActive ? ".1rem solid #007185" : ".1rem solid #888c8c",
            transition: "background 0.3s ease",

            "& li:first-child": {
              padding: "0 .5rem 0 0",
            },
          }}
        ></Box>
      );
    },
    appendDots: (dots) => {
      const maxVisibleDots = 8;
      const totalDots = dots.length;
      let startIndex = Math.max(
        0,
        currentSlide - Math.floor(maxVisibleDots / 2)
      );
      const endIndex = Math.min(startIndex + maxVisibleDots, totalDots);

      if (endIndex - startIndex < maxVisibleDots && endIndex === totalDots) {
        startIndex = Math.max(0, totalDots - maxVisibleDots);
      }

      const visibleDots = dots.slice(startIndex, endIndex);

      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "10px",
          }}
        >
          {visibleDots}
        </div>
      );
    },
  };

  const vProductDetailsBySize =
    selectedSize &&
    selectedSize !== "Sélectionner" &&
    selectedColor &&
    selectedColor !== "Sélectionner"
      ? productDetailsBySize
      : productDetailsBySize2;

  const renderedImg = vProductDetailsBySize?.map((colorDetail, colorIndex) => (
    <Box
      component="li"
      key={colorIndex}
      sx={{
        cursor: `url(${colorDetail.mainImgJpg}), zoom-in`,
        margin: 0,
        padding: 0,
        border: 0,
        flex: "0 0 100%",
        width: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        height: "100%",
        position: "relative",
        borderRadius: 0,
        overflow: "hidden",
        unicodeBidi: "isolate",
        userSelect: "none",
        SignalAnimationOffset: ".5rem",
        FilmstripImageSize: "16px",
        lineHeight: "1.43",
        MsTextSizeAdjust: "100%",
        WebkitTextSizeAdjust: "100%",
        WebkitFontSmoothing: "antialiased",
        WebkitTapHighlightColor: "transparent",
        textRendering: "optimizeLegibility",
        color: "#191919",
        fontSize: ".875rem",
        width: "100%",
        height: "76vw",

        "&::after": {
          background: "rgba(0, 0, 0, 0.05)",
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
        src={colorDetail.mainImgJpg}
        alt="Image"
        fill
        sizes="100vw"
        style={{
          objectFit: "contain",
          display: "inline-block",
          width: "100%",
          height: "100%",
          maxHeight: "100%",
          maxWidth: "100%",
        }}
      />
    </Box>
  ));

  const handleNavOpenCart = () => {
    try {
      setProductState((prevState) => ({
        ...prevState,
        isNavOpenCart: true,
      }));
      router.push("/cart/showCartXs");
    } catch (err) {
      console.error("An error occurred while navigating to showCart: ", err);
    } finally {
      setProductState((prevState) => ({
        ...prevState,
        isNavOpenCart: true,
      }));
    }
  };

  const checkForAjPanDis = () => {
    if (
      !isNavOpenCart &&
      prodId !== undefined &&
      prodId !== null &&
      prodImage !== undefined &&
      prodImage !== null &&
      prodQtee !== undefined &&
      prodQtee !== null &&
      prodQtee > 0 &&
      prodQteeDisp !== undefined &&
      prodQteeDisp !== null &&
      prodQteeDisp > 0 &&
      prodPrix !== undefined &&
      prodPrix !== null &&
      prodPrix > 0 &&
      selectedSize &&
      selectedSize !== "Sélectionner" &&
      selectedColor &&
      selectedColor !== "Sélectionner" &&
      qteemax !== undefined &&
      qteemax !== null &&
      qteemax > 0
    ) {
      return false;
    } else {
      return true;
    }
  };

  const checkForAchMaintDis = () => {
    if (
      !isNavCheckout &&
      prodId !== undefined &&
      prodId !== null &&
      prodImage !== undefined &&
      prodImage !== null &&
      prodQtee !== undefined &&
      prodQtee !== null &&
      prodQtee > 0 &&
      prodQteeDisp !== undefined &&
      prodQteeDisp !== null &&
      prodQteeDisp > 0 &&
      prodPrix !== undefined &&
      prodPrix !== null &&
      prodPrix > 0 &&
      selectedSize &&
      selectedSize !== "Sélectionner" &&
      selectedColor &&
      selectedColor !== "Sélectionner" &&
      qteemax !== undefined &&
      qteemax !== null &&
      qteemax > 0
    ) {
      return false;
    } else {
      return true;
    }
  };

  const ajPanDisabled = checkForAjPanDis();
  const achMaintDisabled = checkForAchMaintDis();

  const clickOpenCartXs = (e) => {
    e.preventDefault();

    if (
      prodId !== undefined &&
      prodId !== null &&
      prodImage !== undefined &&
      prodImage !== null &&
      prodQtee !== undefined &&
      prodQtee !== null &&
      prodQtee > 0 &&
      prodQteeDisp !== undefined &&
      prodQteeDisp !== null &&
      prodQteeDisp > 0 &&
      prodPrix !== undefined &&
      prodPrix !== null &&
      prodPrix > 0 &&
      selectedSize &&
      selectedSize !== "Sélectionner" &&
      selectedColor &&
      selectedColor !== "Sélectionner" &&
      qteemax !== undefined &&
      qteemax !== null &&
      qteemax > 0
    ) {
      dispatch(
        productAdded({
          prodId,
          prodImage,
          prodDesc,
          prodQtee,
          prodPrix,
          prodEtat,
          status,
          prodQteeDisp,
          prodSize: selectedSize,
          prodColor: selectedColor,
        })
      );

      handleNavOpenCart();
    }
  };

  const handleNavCheckout = () => {
    try {
      setProductState((prevState) => ({
        ...prevState,
        isNavCheckout: true,
      }));

      router.push(
        `/checkout/checkoutXs/?cartProdId=${encodeURIComponent(
          prodId
        )}&cartProdSize=${encodeURIComponent(
          selectedSize
        )}&cartProdColor=${encodeURIComponent(selectedColor)}`
      );
    } catch (err) {
      console.error("An error occurred while navigating to checkout : ", err);
    } finally {
      setProductState((prevState) => ({
        ...prevState,
        isNavCheckout: true,
      }));
    }
  };

  const clickBuyNowXs = (e) => {
    e.preventDefault();
    if (
      prodId !== undefined &&
      prodId !== null &&
      prodImage !== undefined &&
      prodImage !== null &&
      prodQtee !== undefined &&
      prodQtee !== null &&
      prodQtee > 0 &&
      prodQteeDisp !== undefined &&
      prodQteeDisp !== null &&
      prodQteeDisp > 0 &&
      prodPrix !== undefined &&
      prodPrix !== null &&
      prodPrix > 0 &&
      selectedSize &&
      selectedSize !== "Sélectionner" &&
      selectedColor &&
      selectedColor !== "Sélectionner" &&
      qteemax !== undefined &&
      qteemax !== null &&
      qteemax > 0
    ) {
      dispatch(
        productAdded({
          prodId,
          prodImage,
          prodDesc,
          prodQtee,
          prodPrix,
          prodEtat,
          status,
          prodQteeDisp,
          prodSize: selectedSize,
          prodColor: selectedColor,
        })
      );

      handleNavCheckout();
    }
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "768px",
          margin: "auto",
          padding: "0 16px",
          overflow: "hidden",
          lineHeight: "1.43",
          MsTextSizeAdjust: "100%",
          WebkitTextSizeAdjust: "100%",
          WebkitFontSmoothing: "antialiased",
          WebkitTapHighlightColor: "transparent",
          MozOsxFontSmoothing: "grayscale",
          textRendering: "optimizeLegibility",
          border: 0,
          unicodeBidi: "isolate",
        }}
      >
        <Box
          sx={{
            margin: 0,
            marginTop: 0,
            FilmstripImageSize: 0,
            userSelect: "none",
            padding: 0,
            border: 0,
            display: "block",
            unicodeBidi: "isolate",
            lineHeight: "1.43",
            MsTextSizeAdjust: "100%",
            WebkitTextSizeAdjust: "100%",
            WebkitFontSmoothing: "antialiased",
            WebkitTapHighlightColor: "transparent",
            textRendering: "optimizeLegibility",
            color: "#191919",
            fontSize: ".875rem",
          }}
        >
          <Box
            sx={{
              FilmstripImageSize: "16px",
              margin: "0 -16px",
              display: "flex",
              flexDirection: "column-reverse",
              position: "relative",
              padding: 0,
              border: 0,
              unicodeBidi: "isolate",
              userSelect: "none",
              lineHeight: "1.43",
              MsTextSizeAdjust: "100%",
              WebkitTextSizeAdjust: "100%",
              WebkitFontSmoothing: "antialiased",
              WebkitTapHighlightColor: "transparent",
              textRendering: "optimizeLegibility",
              color: "#191919",
              fontSize: ".875rem",
            }}
          >
            <Box
              sx={{
                margin: 0,
                padding: 0,
                border: 0,
                height: "86vw",
                overflow: "unset",
                SignalAnimationOffset: ".5rem",
                width: "100%",
                aspectRatio: "1.33333333",
                maxHeight: "unset",
                marginBottom: "16px",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                minHeight: "280px",
                minWidth: "100%",
                unicodeBidi: "isolate",
                FilmstripImageSize: "16px",
                userSelect: "none",
                lineHeight: "1.43",
                MsTextSizeAdjust: "100%",
                WebkitTextSizeAdjust: "100%",
                WebkitFontSmoothing: "antialiased",
                WebkitTapHighlightColor: "transparent",
                textRendering: "optimizeLegibility",
                color: "#191919",
                fontSize: ".875rem",
              }}
            >
              <Box
                component="ul"
                tabIndex="0"
                sx={{
                  margin: 0,
                  padding: 0,
                  border: 0,
                  aspectRatio: "inherit",
                  alignItems: "center",
                  overflow: "auto",
                  scrollSnapType: "x mandatory",
                  position: "relative",
                  height: "100%",
                  minWidth: "100%",
                  maxWidth: "100%",
                  height: "86vw",
                  scrollbarWidth: "none",
                  userSelect: "none",
                  unicodeBidi: "isolate",
                  SignalAnimationOffset: ".5rem",
                  FilmstripImageSize: "16px",
                  lineHeight: "1.43",
                  MsTextSizeAdjust: "100%",
                  WebkitTextSizeAdjust: "100%",
                  WebkitFontSmoothing: "antialiased",
                  WebkitTapHighlightColor: "transparent",
                  textRendering: "optimizeLegibility",
                  color: "#191919",
                  fontSize: ".875rem",
                }}
              >
                <Slider {...sliderSettings}>{renderedImg}</Slider>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            borderTop: "5px solid #F3F3F3",
            paddingBottom: "0.5rem",
          }}
        >
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
                        <Box component="span">{prodDesc}&nbsp;</Box>
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {selectedColor !== "Sélectionner" &&
          selectedSize !== "Sélectionner" &&
          selectedColor &&
          selectedSize &&
          prodPrix !== 0 && (
            <Box
              sx={{
                paddingBottom: "1rem",
              }}
            >
              <Box>
                {qteemax > 0 && (
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
                )}
                {qteemax > 0 && (
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
                )}
                {qteemax > 0 && (
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
                            {prodPrix}&nbsp; {prixSymbol}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                )}
                {red && qteemax > 0 && (
                  <Box
                    sx={{
                      margin: 0,
                      padding: 0,
                      border: 0,
                      marginTop: "8px",
                      padding: "0 1rem",
                      WebkitFontSmoothing: "antialiased",
                      lineHeight: "1.43",
                      color: "#191919",
                      fontSize: ".875rem",
                      WebkitTextSizeAdjust: "100%",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        marginRight: "8px",
                        margin: 0,
                        padding: 0,
                        border: 0,
                        WebkitFontSmoothing: "antialiased",
                        lineHeight: "1.43",
                        color: "#191919",
                        fontSize: ".875rem",
                        WebkitTextSizeAdjust: "100%",
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          lineHeight: "1.43",
                          color: "#707070",
                          margin: 0,
                          padding: 0,
                          border: 0,
                          WebkitFontSmoothing: "antialiased",
                          fontSize: ".875rem",
                          WebkitTextSizeAdjust: "100%",
                        }}
                      >
                        Prix de vente initial&nbsp;:&nbsp;
                      </Box>
                      <Box
                        component="span"
                        sx={{
                          lineHeight: "1.43",
                          color: "#707070",
                          textDecoration: "line-through",
                          margin: 0,
                          padding: 0,
                          border: 0,
                          WebkitFontSmoothing: "antialiased",
                          fontSize: ".875rem",
                          WebkitTextSizeAdjust: "100%",
                        }}
                      >
                        {prixInit}&nbsp;{prixSymbol} &nbsp;
                      </Box>

                      <Box
                        component="span"
                        sx={{
                          lineHeight: "1.43",
                          color: "#f02d2d",
                          margin: 0,
                          padding: 0,
                          border: 0,
                          WebkitFontSmoothing: "antialiased",
                          fontSize: ".875rem",
                          WebkitTextSizeAdjust: "100%",
                        }}
                      >
                        ({red}&nbsp;% de réduction)
                      </Box>
                    </Box>
                  </Box>
                )}
                {qteemax > 0 &&
                  selectedSize !== "Sélectionner" &&
                  selectedColor !== "Sélectionner" &&
                  selectedSize &&
                  selectedColor && (
                    <Box
                      sx={{
                        paddingTop: ".4rem",
                        marginTop: "0 !important",
                        paddingTop: "1rem",
                      }}
                    >
                      <Box
                        sx={{
                          marginBottom: "0 !important",
                          WebkitUserSelect: "none",
                        }}
                      >
                        <Box
                          sx={{
                            WebkitUserSelect: "none",
                          }}
                        >
                          <Box
                            component="span"
                            sx={{
                              margin: 0,
                              padding: 0,
                              border: 0,
                              WebkitTextSizeAdjust: "100%",
                              WebkitFontSmoothing: "antialiased",
                              WebkitTapHighlightColor: "transparent",
                              textRendering: "optimizeLegibility",
                              color: "#007600 !important",
                              fontSize: "1.25rem !important",
                              lineHeight: "1.25 !important",
                              WebkitUserSelect: "none",
                              WebkitTextSizeAdjust: "none",
                            }}
                          >
                            En stock
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  )}
                {qteemax === 0 &&
                  selectedSize !== "Sélectionner" &&
                  selectedColor !== "Sélectionner" &&
                  selectedSize &&
                  selectedColor && (
                    <Box
                      sx={{
                        paddingTop: ".4rem",
                        marginTop: "0 !important",
                        paddingTop: "1rem",
                      }}
                    >
                      <Box
                        sx={{
                          marginBottom: "0 !important",
                          WebkitUserSelect: "none",
                        }}
                      >
                        <Box
                          sx={{
                            WebkitUserSelect: "none",
                          }}
                        >
                          <Box
                            component="span"
                            sx={{
                              margin: 0,
                              padding: 0,
                              border: 0,
                              WebkitTextSizeAdjust: "100%",
                              WebkitFontSmoothing: "antialiased",
                              WebkitTapHighlightColor: "transparent",
                              textRendering: "optimizeLegibility",
                              color: "#007600 !important",
                              fontSize: "1.25rem !important",
                              lineHeight: "1.25 !important",
                              WebkitUserSelect: "none",
                              WebkitTextSizeAdjust: "none",
                            }}
                          >
                            En rupture de stock
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  )}
              </Box>
            </Box>
          )}
        {choisirTailleCouleur && (
          <Box
            sx={{
              paddingTop: ".4rem",
              marginTop: "0 !important",
              paddingTop: "1rem",
            }}
          >
            <Box
              sx={{
                marginBottom: "0 !important",
                WebkitUserSelect: "none",
              }}
            >
              <Box
                sx={{
                  WebkitUserSelect: "none",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    margin: 0,
                    padding: 0,
                    border: 0,
                    WebkitTextSizeAdjust: "100%",
                    WebkitFontSmoothing: "antialiased",
                    WebkitTapHighlightColor: "transparent",
                    textRendering: "optimizeLegibility",
                    color: "#007600 !important",
                    fontSize: "1.25rem !important",
                    lineHeight: "1.25 !important",
                    WebkitUserSelect: "none",
                    WebkitTextSizeAdjust: "none",
                  }}
                >
                  {choisirTailleCouleur}
                </Box>
              </Box>
            </Box>
          </Box>
        )}

        <Box>
          <Box>
            <Box>
              <Box
                sx={{
                  padding: "0 1rem",
                  borderTop: "1px solid #e5e5e5",
                  paddingTop: "0.5rem",
                }}
              >
                <Box
                  sx={{
                    marginBottom: "0.7rem",
                    marginTop: "0.7rem",
                  }}
                >
                  <Box
                    sx={{
                      clear: "both",
                      border: "0 solid #d3d3d3",
                      fontWeight: 400,
                      borderRadius: "3px",
                      width: "100%",
                      color:
                        "var(--select-foreground-color,var(--color-text-default,#111820))",
                      fontSize: ".875rem",
                      position: "relative",

                      "&::after": {
                        top: "0.7rem",
                      },

                      "&::after": {
                        content: '""',
                      },

                      //
                      marginTop: 0,
                      marginBottom: "8px",
                    }}
                  >
                    <Box
                      component="label"
                      htmlFor="size_select"
                      sx={{
                        margin: 0,
                        color: "#111820",
                        display: "-webkit-box",
                        display: "-ms-flexbox",
                        display: "flex",
                        padding: 0,
                        cursor: "default",
                        fontWeight: 400,
                        fontSize: ".875rem",

                        "& > span:first-of-type": {
                          minWidth: "85px",
                          MsFlexPreferredSize: "85px",
                          flexBasis: "85px",
                          paddingRight: "15px",
                          display: "-webkit-box",
                          display: "-ms-flexbox",
                          display: "flex",
                          WebkitBoxAlign: "center",
                          MsFlexAlign: "center",
                          alignItems: "center",
                          boxSizing: "content-box",
                          paddingRight: "4px",
                        },
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          color: "#111820",
                        }}
                      >
                        <Box component="span">Tailles</Box>
                      </Box>

                      <Box
                        component="select"
                        value={selectedSize}
                        onChange={handleSizeChange}
                        aria-label="Quantité"
                        id="size_select"
                        name="size_select"
                        sx={{
                          borderRadius: "8px",

                          color: "#111820",
                          lineHeight: "normal",
                          WebkitAppearance: "none",
                          MozAppearance: "none",
                          appearance: "none",
                          boxSizing: "border-box",
                          height: "40px",
                          margin: 0,
                          padding: "0 40px 0 16px",
                          fontSize: "14px",
                          width: "100%",
                          WebkitBoxFlex: 1,
                          flexGrow: 1,
                          verticalAlign: "middle",
                          overflow: "visible !important",
                          background: "#f0f2f2",
                          border: "1px #ddd solid",
                          fontWeight: 700,
                          "&:focus": {
                            outline: "none",
                            borderColor: "#0272e8",
                            boxShadow:
                              "0 0 4px rgba(2, 114, 232, 0.5), 0 0 6px rgba(2, 114, 232, 0.2)",
                          },
                        }}
                      >
                        <Box component="option" value="" sx={{}}>
                          Sélectionner
                        </Box>

                        {selectedprd[0]?.prdDetailsBySize?.map((detail) => (
                          <Box
                            component="option"
                            key={detail.size}
                            value={detail.size}
                            sx={{}}
                          >
                            {detail.size}
                          </Box>
                        ))}
                      </Box>
                      <Box
                        component="span"
                        aria-hidden="true"
                        sx={{
                          margin: "0!important",
                          fontSize: ".875rem",
                          right: "1rem",
                          fontSize: ".65rem",
                          color: "#111820",
                          position: "absolute",
                          top: "0.7rem",
                          display: "inline-block",
                          verticalAlign: "top",
                          pointerEvents: "none",
                        }}
                      >
                        <KeyboardArrowDownOutlinedIcon />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box>
          <Box>
            <Box>
              <Box
                sx={{
                  padding: "0 1rem",
                }}
              >
                <Box
                  sx={{
                    marginBottom: "0.7rem",
                  }}
                >
                  <Box
                    sx={{
                      clear: "both",
                      border: "0 solid #d3d3d3",
                      fontWeight: 400,
                      borderRadius: "3px",
                      width: "100%",
                      color:
                        "var(--select-foreground-color,var(--color-text-default,#111820))",
                      fontSize: ".875rem",
                      position: "relative",

                      "&::after": {
                        top: "0.7rem",
                      },

                      "&::after": {
                        content: '""',
                      },
                      marginTop: 0,
                      marginBottom: "8px",
                    }}
                  >
                    <Box
                      component="label"
                      htmlFor="color_select"
                      sx={{
                        margin: 0,
                        color: "#111820",
                        display: "-webkit-box",
                        display: "-ms-flexbox",
                        display: "flex",
                        padding: 0,
                        cursor: "default",
                        fontWeight: 400,
                        fontSize: ".875rem",

                        "& > span:first-of-type": {
                          minWidth: "85px",
                          MsFlexPreferredSize: "85px",
                          flexBasis: "85px",
                          paddingRight: "15px",
                          display: "-webkit-box",
                          display: "-ms-flexbox",
                          display: "flex",
                          WebkitBoxAlign: "center",
                          MsFlexAlign: "center",
                          alignItems: "center",
                          boxSizing: "content-box",
                          paddingRight: "4px",
                        },
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          color: "#111820",
                        }}
                      >
                        <Box component="span">Couleurs</Box>
                      </Box>

                      <Box
                        component="select"
                        value={selectedColor}
                        onChange={handleColorChange}
                        aria-label="Couleur"
                        id="color_select"
                        name="color_select"
                        sx={{
                          borderRadius: "8px",
                          color: "#111820",
                          lineHeight: "normal",
                          WebkitAppearance: "none",
                          MozAppearance: "none",
                          appearance: "none",
                          boxSizing: "border-box",
                          height: "40px",
                          margin: 0,
                          padding: "0 40px 0 16px",
                          fontSize: "14px",
                          width: "100%",
                          WebkitBoxFlex: 1,
                          flexGrow: 1,
                          verticalAlign: "middle",
                          overflow: "visible !important",
                          background: "#f0f2f2",
                          border: "1px #ddd solid",
                          fontWeight: 700,

                          "&:focus": {
                            outline: "none",
                            borderColor: "#0272e8",
                            boxShadow:
                              "0 0 4px rgba(2, 114, 232, 0.5), 0 0 6px rgba(2, 114, 232, 0.2)",
                          },
                        }}
                      >
                        <Box component="option" value="" sx={{}}>
                          Sélectionner
                        </Box>

                        {colorsBySize?.map((color, index) => (
                          <Box component="option" key={index} value={color}>
                            {color}
                          </Box>
                        ))}
                      </Box>
                      <Box
                        component="span"
                        aria-hidden="true"
                        sx={{
                          margin: "0!important",
                          fontSize: ".875rem",
                          right: "1rem",
                          fontSize: ".65rem",
                          color: "#111820",
                          position: "absolute",
                          top: "0.7rem",
                          display: "inline-block",
                          verticalAlign: "top",
                          pointerEvents: "none",
                        }}
                      >
                        <KeyboardArrowDownOutlinedIcon />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {qteemax > 0 &&
          selectedSize !== "Sélectionner" &&
          selectedColor !== "Sélectionner" && (
            <Box>
              <Box>
                <Box>
                  <Box
                    sx={{
                      padding: "0 1rem",
                    }}
                  >
                    <Box
                      sx={{
                        marginBottom: "0.7rem",
                      }}
                    >
                      <Box
                        sx={{
                          margin: "16px 0",
                          clear: "both",
                          border: "0 solid #d3d3d3",
                          fontWeight: 400,
                          borderRadius: "3px",
                          width: "100%",
                          color:
                            "var(--select-foreground-color,var(--color-text-default,#111820))",
                          fontSize: ".875rem",
                          position: "relative",

                          "&::after": {
                            top: "0.7rem",
                          },

                          "&::after": {
                            content: '""',
                          },

                          marginTop: 0,
                        }}
                      >
                        <Box
                          component="label"
                          htmlFor="quantity_select"
                          sx={{
                            margin: 0,
                            color: "#111820",
                            display: "-webkit-box",
                            display: "-ms-flexbox",
                            display: "flex",
                            padding: 0,
                            cursor: "default",
                            fontWeight: 400,
                            fontSize: ".875rem",

                            "& > span:first-of-type": {
                              minWidth: "85px",
                              MsFlexPreferredSize: "85px",
                              flexBasis: "85px",
                              display: "-webkit-box",
                              display: "-ms-flexbox",
                              display: "flex",
                              WebkitBoxAlign: "center",
                              MsFlexAlign: "center",
                              alignItems: "center",
                              boxSizing: "content-box",
                              paddingRight: "4px",
                            },
                          }}
                        >
                          <Box
                            component="span"
                            sx={{
                              color: "#111820",
                            }}
                          >
                            <Box component="span">Quantité</Box>
                          </Box>

                          <Box
                            component="select"
                            value={prodQtee}
                            onChange={handleChange}
                            aria-label="Quantité"
                            id="quantity_select"
                            name="quantity_select"
                            sx={{
                              borderRadius: "8px",
                              color: "#111820",
                              lineHeight: "normal",
                              WebkitAppearance: "none",
                              MozAppearance: "none",
                              appearance: "none",
                              boxSizing: "border-box",
                              height: "40px",
                              margin: 0,
                              padding: "0 40px 0 16px",
                              fontWeight: 400,
                              width: "100%",
                              WebkitBoxFlex: 1,
                              flexGrow: 1,
                              verticalAlign: "middle",
                              overflow: "visible !important",
                              background: "#f0f2f2",
                              border: "1px #ddd solid",
                              fontWeight: 700,

                              "&:focus": {
                                outline: "none",
                                borderColor: "#0272e8",
                                boxShadow:
                                  "0 0 4px rgba(2, 114, 232, 0.5), 0 0 6px rgba(2, 114, 232, 0.2)",
                              },
                            }}
                          >
                            {options}
                          </Box>
                          <Box
                            component="span"
                            aria-hidden="true"
                            sx={{
                              margin: "0!important",
                              fontSize: ".875rem",
                              right: "1rem",
                              fontSize: ".65rem",
                              color: "#111820",
                              position: "absolute",
                              top: "0.7rem",
                              display: "inline-block",
                              verticalAlign: "top",
                              pointerEvents: "none",
                            }}
                          >
                            <KeyboardArrowDownOutlinedIcon />
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
      </Box>

      <Box
        sx={{
          margin: "16px 0",
        }}
      >
        <Box
          sx={{
            marginTop: "1rem",
            padding: "0 1rem",
          }}
        ></Box>
        <Box
          sx={{
            marginTop: "0.5rem",
            padding: "0 1rem",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "inline-block",
                width: "100%",
              }}
            >
              <Box
                component="button"
                onClick={clickBuyNowXs}
                disabled={achMaintDisabled || ajPanDisabled}
                sx={{
                  backgroundColor:
                    achMaintDisabled || ajPanDisabled ? "#e7e9ec" : "#3665f3",
                  color: achMaintDisabled || ajPanDisabled ? "#0F1111" : "#fff",
                  fontWeight: achMaintDisabled || ajPanDisabled ? null : "bold",
                  border:
                    achMaintDisabled || ajPanDisabled
                      ? "1px solid #8d9096"
                      : "1px solid #3665f3",
                  borderRadius: "3rem",
                  minHeight: "3rem",
                  paddingLeft: 0,
                  paddingRight: 0,
                  padding: "0 16px",
                  lineHeight: "48px",
                  fontSize: "16px",
                  height: "48px",
                  boxSizing: "border-box",
                  display: "inline-block",
                  textDecoration: "none",
                  fontFamily: "inherit",
                  margin: 0,
                  textAlign: "center",
                  verticalAlign: "middle",
                  minWidth: "auto",
                  outlineColor: "#111820",
                  width: "100%",
                  cursor: "pointer",

                  ":WebkitAnyLink": {
                    cursor: "pointer",
                  },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    color:
                      achMaintDisabled || ajPanDisabled ? "#0F1111" : "#fff",
                    fontWeight:
                      achMaintDisabled || ajPanDisabled ? null : "bold",
                  }}
                >
                  Achat immédiat&nbsp;&nbsp;&nbsp;
                  {isNavCheckout && (
                    <CircularProgress
                      size={20}
                      sx={{
                        textAlign: "center",
                        top: "50%",
                        left: "50%",
                        marginTop: "-10px",
                        marginLeft: "-5px",
                      }}
                    />
                  )}
                </Box>
                <Box
                  component="span"
                  sx={{
                    "@keyframes spin": {
                      "0%": {
                        WebkitTransform: "rotate(0)",
                        transform: "rotate(0)",
                      },

                      "100%": {
                        WebkitTransform: "rotate(360deg)",
                        transform: "rotate(360deg)",
                      },
                    },
                    display: "none",
                    WebkitAnimation: "spin 600ms linear infinite",
                    animation: "spin 600ms linear infinite",
                    height: "30px",
                    width: "30px",
                  }}
                >
                  <CircularProgress
                    sx={{
                      "&:only-child": {
                        margin: 0,
                      },

                      height: "inherit",
                      maxHeight: "inherit",
                      maxWidth: "inherit",
                      width: "inherit",
                      alignSelf: "center",
                      flexShrink: 0,
                      color: "#fff",
                      fill: "#fff",
                      display: "inline-block",
                      pointerEvents: "none",
                      stroke: "currentColor",
                      strokeWidth: 0,
                      verticalAlign: "middle",
                    }}
                  ></CircularProgress>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                marginTop: "0.5rem",
                display: "inline-block",
                width: "100%",
              }}
            >
              <Box
                component="button"
                onClick={clickOpenCartXs}
                disabled={ajPanDisabled || achMaintDisabled}
                sx={{
                  boxShadow: "0 2px 5px 0 rgb(213 217 217 / 50%)",
                  background:
                    ajPanDisabled || achMaintDisabled ? "#e7e9ec" : "#FFD814",
                  borderColor:
                    ajPanDisabled || achMaintDisabled ? "#8d9096" : "#FCD200",
                  border:
                    ajPanDisabled || achMaintDisabled
                      ? "1px solid #8d9096"
                      : "1px solid #FCD200",
                  color: "#0F1111",

                  borderRadius: "3rem",
                  minHeight: "3rem",
                  paddingLeft: 0,
                  paddingRight: 0,
                  padding: "0 16px",
                  lineHeight: "48px",
                  fontSize: "16px",
                  height: "48px",
                  boxSizing: "border-box",
                  display: "inline-block",
                  textDecoration: "none",
                  fontFamily: "inherit",
                  fontWeight: "normal",
                  margin: 0,
                  textAlign: "center",
                  verticalAlign: "middle",
                  minWidth: "auto",
                  width: "100%",
                  cursor: "pointer",
                  ":WebkitAnyLink": {
                    cursor: "pointer",
                  },
                }}
              >
                <Box
                  component="span"
                  sx={{
                    color: "#0F1111",
                    fontSize: "16px",
                    fontFamily: "inherit",
                    fontWeight: "normal",
                    textAlign: "center",
                    boxSizing: "border-box",
                    margin: 0,
                    padding: 0,
                    lineHeight: "20px",
                    letterSpacing: "normal",
                    WebkitFontSmoothing: "antialiased",
                    MozFontSmoothing: "antialiased",
                    MsFontSmoothing: "antialiased",
                    WebkitTextSizeAdjust: "none",
                    MozTextSizeAdjust: "none",
                    MsTextSizeAdjust: "none",
                    textSizeAdjust: "none",
                    verticalAlign: "middle",
                  }}
                >
                  Ajouter au panier&nbsp;&nbsp;&nbsp;
                  {isNavOpenCart && (
                    <CircularProgress
                      size={20}
                      sx={{
                        textAlign: "center",
                        top: "50%",
                        left: "50%",
                        marginTop: "-10px",
                        marginLeft: "-5px",
                      }}
                    />
                  )}
                </Box>
                <Box
                  component="span"
                  sx={{
                    "@keyframes spin": {
                      "0%": {
                        WebkitTransform: "rotate(0)",
                        transform: "rotate(0)",
                      },

                      "100%": {
                        WebkitTransform: "rotate(360deg)",
                        transform: "rotate(360deg)",
                      },
                    },
                    display: "none",
                    WebkitAnimation: "spin 600ms linear infinite",
                    animation: "spin 600ms linear infinite",
                    height: "30px",
                    width: "30px",
                    color: "#3665f3",
                    fontSize: "16px",
                    fontWeight: "normal",
                    textAlign: "center",
                    boxSizing: "border-box",
                    margin: 0,
                    padding: 0,
                    lineHeight: "20px",
                    letterSpacing: "normal",
                    WebkitFontSmoothing: "antialiased",
                    MozFontSmoothing: "antialiased",
                    MsFontSmoothing: "antialiased",
                    WebkitTextSizeAdjust: "none",
                    MozTextSizeAdjust: "none",
                    MsTextSizeAdjust: "none",
                    textSizeAdjust: "none",
                    verticalAlign: "middle",
                  }}
                >
                  <CircularProgress
                    sx={{
                      "@keyframes spin": {
                        "0%": {
                          WebkitTransform: "rotate(0)",
                          transform: "rotate(0)",
                        },

                        "100%": {
                          WebkitTransform: "rotate(360deg)",
                          transform: "rotate(360deg)",
                        },
                      },
                      WebkitAnimation: "spin 600ms linear infinite",
                      animation: "spin 600ms linear infinite",
                      height: "30px",
                      width: "30px",
                      color: "#3665f3",
                      fontSize: "16px",
                      fontWeight: "normal",
                      textAlign: "center",
                      boxSizing: "border-box",
                      margin: 0,
                      padding: 0,
                      lineHeight: "20px",
                      letterSpacing: "normal",
                      WebkitFontSmoothing: "antialiased",
                      MozFontSmoothing: "antialiased",
                      MsFontSmoothing: "antialiased",
                      WebkitTextSizeAdjust: "none",
                      MozTextSizeAdjust: "none",
                      MsTextSizeAdjust: "none",
                      textSizeAdjust: "none",
                      verticalAlign: "middle",
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
