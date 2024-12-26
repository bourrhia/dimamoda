"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import SvgIcon from "@mui/material/SvgIcon";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import LoopIcon from "@mui/icons-material/Loop";

import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { productAdded } from "../../../redux/features/cart/cartSlice";
import CircularProgress from "@mui/material/CircularProgress";

export const ProdViewUpSm = ({ selectedprd }) => {
  const prodId = selectedprd[0]?.productId;
  const prodDesc = selectedprd[0]?.descPrd;
  const prodEtat = selectedprd[0]?.etatprd;
  const status = "idle";

  const vDescPrd = selectedprd[0]?.descPrd;
  const vEtatprd = selectedprd[0]?.etatprd;
  const vPrixSymbol = selectedprd[0]?.prixSymbol;
  const vPromoprd1 = selectedprd[0]?.promoprd1;
  const vPromoprd2 = selectedprd[0]?.promoprd2;
  const vMatériau = selectedprd[0]?.matériau;
  const vPaysOrigine = selectedprd[0]?.paysorigine;
  const vDescdet = selectedprd[0]?.descdet;
  const vPrincCaract = selectedprd[0]?.princCaract;
  const vTailleDisp = selectedprd[0]?.tailleDisp;
  const vMarque = selectedprd[0]?.marque;
  const vPriceRangeFrom = selectedprd[0]?.priceRangeFrom;
  const vPriceRangeTo = selectedprd[0]?.priceRangeTo;

  const router = useRouter();
  const dispatch = useDispatch();
  const isInitialized = useRef(false);

  const [productState, setProductState] = useState({
    prodQtee: 1,
    isNavOpenCart: false,
    isNavCheckout: false,
    selectedSize: "Sélectionner",
    prodPrix: 0,
    prixInit: 0,
    prodQteeDisp: 0,
    red: 0,
    qteemax: 0,
    prodImage: null,
    prevMainImage:
      selectedprd[0]?.prdDetailsBySize[0]?.detailsByColor[0]?.mainImgJpg ||
      null,
    currentImage:
      selectedprd[0]?.prdDetailsBySize[0]?.detailsByColor[0]?.mainImgJpg ||
      null,
    currentColorImage:
      selectedprd[0]?.prdDetailsBySize[0]?.detailsByColor[0]?.mainImgJpg ||
      null,
    currentColor:
      selectedprd[0]?.prdDetailsBySize[0]?.detailsByColor[0]?.couleur || null,
    imgThumbnailsByCol:
      selectedprd[0]?.prdDetailsBySize[0]?.detailsByColor[0]?.imgThumbnails ||
      [],
    matchingImgBySizeAndCol: [],
  });

  const {
    prodQtee,
    isNavOpenCart,
    isNavCheckout,
    selectedSize,
    prodPrix,
    prixInit,
    prodQteeDisp,
    red,
    qteemax,
    prodImage,
    prevMainImage,
    currentImage,
    currentColorImage,
    currentColor,
    imgThumbnailsByCol,
    matchingImgBySizeAndCol,
  } = productState;

  const getAllMainImgAndColor = useMemo(() => {
    const allImagesAndColors = [];

    selectedprd[0]?.prdDetailsBySize.forEach((sizeDetail) => {
      sizeDetail.detailsByColor.forEach((colorDetail) => {
        allImagesAndColors.push({
          couleur: colorDetail.couleur,
          mainImgJpg: colorDetail.mainImgJpg,
          imgThumbnails: colorDetail.imgThumbnails,
        });
      });
    });

    return allImagesAndColors ?? [];
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

  /************************************** */

  useEffect(() => {
    if (!isInitialized.current) {
      setProductState((prev) => ({
        ...prev,
        matchingImgBySizeAndCol:
          selectedSize && selectedSize !== "Sélectionner"
            ? getAllMainImgAndColor
            : getAllMainImgAndColor2,
      }));
      isInitialized.current = true;
    }
  }, [getAllMainImgAndColor]);

  useEffect(() => {
    if (selectedSize !== "Sélectionner") {
      const imagesForSize = getImagesBySize(selectedSize);
      const imgCouleur = imagesForSize[0]?.couleur || null;
      const mainImgCol = imagesForSize[0]?.mainImgJpg || null;
      const imgThumbnails = imagesForSize[0]?.imgThumbnails || null;

      setProductState((prevState) => ({
        ...prevState,
        imgThumbnailsByCol: imgThumbnails,
        matchingImgBySizeAndCol:
          selectedSize && selectedSize !== "Sélectionner"
            ? imagesForSize
            : getAllMainImgAndColor2,
        currentImage: mainImgCol,
        prevMainImage: mainImgCol,
        currentColor: imgCouleur,
        currentColorImage: mainImgCol,
      }));
    }
  }, [selectedSize]);

  useEffect(() => {
    if (!selectedSize || !currentColor || selectedSize === "Sélectionner")
      return;

    const details = getProductDetailsBySizeAndColor(selectedSize, currentColor);

    if (details) {
      const {
        couleur,
        mainImgJpg,
        imgThumbnails,
        prixAct,
        prixInit,
        qteeDisp,
        red,
      } = details;

      setProductState((prevState) => ({
        ...prevState,
        prodPrix: prixAct,
        prixInit: prixInit,
        prodQteeDisp: qteeDisp,
        red: red,
        qteemax: qteeDisp,
        prodImage: mainImgJpg,
        imgThumbnails: imgThumbnails,
      }));
    }
  }, [currentColor, selectedSize]);

  const handleChange = (event) => {
    const value = parseInt(event.target.value);

    setProductState((prevState) => ({
      ...prevState,
      prodQtee: value,
    }));
  };

  const CartItemPrixAct = parseFloat(Math.round(prodPrix * 100) / 100).toFixed(
    2
  );

  const CartItemPrixInit =
    parseFloat(Math.round(prixInit * 100) / 100).toFixed(2) ?? 0;

  const handleSizeChange = (event) => {
    const size = event.target.value;
    setProductState((prevState) => {
      const newState = { ...prevState, size };

      const imagesForSize =
        size !== "Sélectionner"
          ? getImagesBySize(size)
          : getAllMainImgAndColor();

      if (imagesForSize?.length > 0 && size !== "Sélectionner") {
        const { couleur, mainImgJpg, imgThumbnails } = imagesForSize[0];

        return {
          ...newState,
          selectedSize: size,
          currentImage: mainImgJpg,
          prevMainImage: mainImgJpg,
          currentColor: couleur,
          currentColorImage: mainImgJpg,
          imgThumbnailsByCol: imgThumbnails,
          matchingImgBySizeAndCol:
            selectedSize && selectedSize !== "Sélectionner"
              ? imagesForSize
              : getAllMainImgAndColor2,
        };
      }

      return newState;
    });
  };

  const getProductDetailsBySizeAndColor = (size, color) => {
    const sizeData =
      size !== "Sélectionner" && size && color !== "Sélectionner" && color
        ? selectedprd[0]?.prdDetailsBySize.find(
            (sizeObj) => sizeObj.size === size
          )
        : null;

    const colorData =
      size !== "Sélectionner" && size && color !== "Sélectionner" && color
        ? sizeData?.detailsByColor.find(
            (colorObj) => colorObj.couleur === color
          )
        : null;

    return colorData
      ? {
          prixAct: colorData.prixAct,
          prixInit: colorData.prixInit,
          qteeDisp: colorData.qteeDisp,
          red: colorData.red,
          mainImgJpg: colorData.mainImgJpg,
          imgThumbnails: colorData.imgThumbnails,
          couleur: colorData.couleur,
        }
      : null;
  };

  const getImagesBySize = (size) =>
    selectedprd[0]?.prdDetailsBySize
      .find((item) => item.size === size)
      ?.detailsByColor.map((colorObj) => ({
        couleur: colorObj.couleur,
        mainImgJpg: colorObj.mainImgJpg,
        imgThumbnails: colorObj.imgThumbnails,
      })) || getAllMainImgAndColor;

  const options = [];
  for (let i = 1; i <= qteemax; i++) {
    options.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }

  const handleImgColorClick = (imgCol, mainImg) => {
    setProductState((prevState) => ({
      ...prevState,
      currentColor: imgCol,
      prevMainImage: mainImg,
    }));

    const imageDetails = getProductDetailsBySizeAndColor(selectedSize, imgCol);
    const newImageState = imageDetails
      ? {
          currentImage: imageDetails.mainImgJpg,
          prevMainImage: imageDetails.mainImgJpg,
          currentColor: imageDetails.couleur,
          currentColorImage: imageDetails.mainImgJpg,
          imgThumbnailsByCol: imageDetails.imgThumbnails,
          qteemax: imageDetails.qteeDisp,
          prodPrix: imageDetails.prixAct,
          prixInit: imageDetails.prixInit,
          prodQteeDisp: imageDetails.qteeDisp,
          red: imageDetails.red,
          prodImage: imageDetails.mainImgJpg,
        }
      : null;

    setProductState((prevState) => ({
      ...prevState,
      ...newImageState,
    }));
  };

  function getColorByMainImgJpg(targetMainImgJpg) {
    for (const sizeDetails of selectedprd[0]?.prdDetailsBySize) {
      for (const colorDetails of sizeDetails.detailsByColor) {
        if (colorDetails.mainImgJpg === targetMainImgJpg) {
          return colorDetails.couleur;
        }
      }
    }
  }

  function findColorBySizeAndImage(size, mainImgJpg) {
    const sizeDetails =
      size !== "Sélectionner"
        ? selectedprd[0]?.prdDetailsBySize.find(
            (sizeDetail) => sizeDetail.size === size
          )
        : getColorByMainImgJpg(mainImgJpg);

    if (!sizeDetails) return null;

    const colorDetail =
      size !== "Sélectionner"
        ? sizeDetails?.detailsByColor.find(
            (color) => color.mainImgJpg === mainImgJpg
          )
        : getColorByMainImgJpg(mainImgJpg);

    return size !== "Sélectionner"
      ? colorDetail?.couleur
      : getColorByMainImgJpg(mainImgJpg);
  }

  const returnToMainImg = (img, currColImg) => {
    const color = findColorBySizeAndImage(selectedSize, currColImg) || null;
    setProductState((prevState) => ({
      ...prevState,
      currentImage: img,
      currentColor: color,
    }));
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
      currentColor &&
      currentColor !== "Sélectionner" &&
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
      currentColor &&
      currentColor !== "Sélectionner" &&
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

  function CustLocalShippingOutlinedIcon(props) {
    return (
      <SvgIcon {...props}>
        <LocalShippingOutlinedIcon />
      </SvgIcon>
    );
  }

  function CustPaymentOutlinedIcon(props) {
    return (
      <SvgIcon {...props}>
        <PaymentOutlinedIcon />
      </SvgIcon>
    );
  }

  function CustLoopIcon(props) {
    return (
      <SvgIcon {...props}>
        <LoopIcon />
      </SvgIcon>
    );
  }

  const handleNavOpenCart = () => {
    try {
      router.push("/cart/showCart");
    } catch (err) {
      console.error("An error occurred while navigating to showCart: ", err);
    } finally {
      setProductState((prevState) => ({
        ...prevState,
        isNavOpenCart: true,
      }));
    }
  };

  const clickOpenCart = (e) => {
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
      currentColor &&
      currentColor !== "Sélectionner" &&
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
          prodColor: currentColor,
        })
      );

      setProductState((prevState) => ({
        ...prevState,
        isNavOpenCart: true,
      }));
      handleNavOpenCart();
    }
  };

  const handleNavCheckout = () => {
    setProductState((prevState) => ({
      ...prevState,
      isNavCheckout: true,
    }));
    try {
      router.push(
        `/checkout/checkoutUpSm/?cartProdId=${encodeURIComponent(
          prodId
        )}&cartProdSize=${encodeURIComponent(
          selectedSize
        )}&cartProdColor=${encodeURIComponent(currentColor)}`
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

  const clickBuyNow = (e) => {
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
      currentColor &&
      currentColor !== "Sélectionner" &&
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
          prodColor: currentColor,
        })
      );
      handleNavCheckout();
    }
  };

  const HandlesImgColors = () => {
    const swapMainImgOnHover = (e, img, col) => {
      e.stopPropagation();

      setProductState((prevState) => ({
        ...prevState,
        currentImage: img,
        currentColor: col,
      }));
    };

    return (
      <>
        {matchingImgBySizeAndCol?.map((img, index) => (
          <Box
            key={index}
            component="li"
            onMouseEnter={(e) =>
              swapMainImgOnHover(e, img.mainImgJpg, img.couleur)
            }
            onMouseOver={(e) =>
              swapMainImgOnHover(e, img.mainImgJpg, img.couleur)
            }
            onTouchStart={(e) =>
              swapMainImgOnHover(e, img.mainImgJpg, img.couleur)
            }
            onClick={() => handleImgColorClick(img.couleur, img.mainImgJpg)}
            sx={{
              borderRadius: "7px !important",
              overflow: "hidden",
              padding: "0 !important",
              border:
                currentColorImage === img.mainImgJpg
                  ? "2px solid #007185 !important"
                  : "1px solid #e0e0e0",
              boxShadow: "none !important",

              cursor: "pointer",
              display: "inline-block",
              position: "relative",
              marginTop: "4px",
              marginBottom: "4px",

              marginLeft: "6px",
              marginRight: 0,
              listStyle: "none",
              wordWrap: "break-word",
              color: "#0f1111",
              textAlign: "-webkit-match-parent",
              unicodeBidi: "isolate",
            }}
          >
            <Box
              component="span"
              sx={{
                color: "#0f1111",
                cursor: "pointer",
                listStyle: "none",
                wordWrap: "break-word",
              }}
            >
              <Box>
                <Box
                  component="span"
                  sx={{
                    color: "#0f1111",
                    cursor: "pointer",
                    listStyle: "none",
                    wordWrap: "break-word",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      borderWidth: 0,
                      borderRadius: 0,
                      backgroundColor: "transparent",
                      height: "auto",
                      overflow: "visible",
                      borderColor: "#888c8c",
                      background: "#fff",
                      borderStyle: "solid",
                      cursor: "pointer",
                      display: "inline-block",
                      padding: 0,
                      textAlign: "center",
                      textDecoration: "none !important",
                      verticalAlign: "middle",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        background: "#FFF",
                        boxShadow: "none",
                        borderRadius: 0,
                        overflow: "hidden",
                        padding: 0,
                        position: "relative",
                        cursor: "pointer",
                        textAlign: "center",
                        color: "#0f1111",
                        listStyle: "none",
                        wordWrap: "break-word",
                      }}
                    >
                      <Box
                        component="button"
                        type="button"
                        onClick={() =>
                          handleImgColorClick(img.couleur, img.mainImgJpg)
                        }
                        sx={{
                          padding: 0,
                          height: "auto",
                          lineHeight: "19px",
                          textAlign: "left",
                          whiteSpace: "normal",
                          color: "#0f1111",
                          width: "100%",
                          backgroundColor: "transparent",
                          border: 0,
                          display: "block",
                          fontSize: "13px",
                          margin: 0,
                          outline: 0,
                        }}
                      >
                        <Box
                          sx={{
                            width: "38px",
                            height: "50px",
                          }}
                        >
                          <Image
                            src={img.mainImgJpg}
                            alt="Image"
                            sizes="100vw"
                            style={{
                              width: "100%",
                              height: "auto",
                              maxWidth: "none !important",
                              borderRadius: "6px !important",
                              minWidth: "5px",
                              textAlign: "left",
                              whiteSpace: "normal",
                            }}
                            width={38}
                            height={50}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </>
    );
  };

  const ThumbnailsList = () => {
    const handleThumbnailHover = (img) => {
      setProductState((prevState) => ({
        ...prevState,
        currentImage: img,
        prevMainImage: img,
      }));
    };

    return (
      <>
        {imgThumbnailsByCol?.map((img, index) => (
          <Box
            key={index}
            component="li"
            onMouseEnter={() => handleThumbnailHover(img.imgJpg)}
            onMouseOver={() => handleThumbnailHover(img.imgJpg)}
            onTouchStart={() => handleThumbnailHover(img.imgJpg)}
            onMouseLeave={() => handleThumbnailHover(img.imgJpg)}
            onMouseOut={() => handleThumbnailHover(img.imgJpg)}
            onTouchEnd={() => handleThumbnailHover(img.imgJpg)}
            sx={{
              listStyle: "none",
              wordWrap: "break-word",
              margin: 0,
              marginBottom: "8px !important",
              boxSizing: "border-box",
              color: "#0f1111",
              display: "list-item",
              textAlign: "-webkit-match-parent",
              unicodeBidi: "isolate",
            }}
          >
            <Box
              component="span"
              sx={{
                color: "#0f1111",
                listStyle: "none",
                wordWrap: "break-word",
              }}
            >
              <Box
                component="span"
                sx={{
                  backgroundColor:
                    currentImage === img.imgJpg ? "#008296" : "transparent",
                  borderColor:
                    currentImage === img.imgJpg ? "#007185" : "#888c8c",
                  outline:
                    currentImage === img.imgJpg ? "3px solid #007185" : null,
                  outlineOffset: currentImage === img.imgJpg ? "2px" : "",
                  boxShadow: currentImage === img.imgJpg ? "none" : "",

                  height: "auto",
                  overflow: "visible",
                  borderRadius: "8px",
                  background: "#fff",
                  borderStyle: "solid",
                  borderWidth: "1px",
                  cursor: "pointer",
                  display: "inline-block",
                  padding: 0,
                  textAlign: "center",
                  textDecoration: "none !important",
                  verticalAlign: "middle",
                  color: "#0f1111",
                  listStyle: "none",
                  wordWrap: "break-word",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    backgroundColor: "#fff",
                    borderRadius: "7px",
                    height: "auto",
                    overflow: "hidden",
                    padding: 0,
                    backgroundImage: "none",
                    display: "block",
                    position: "relative",
                    cursor: "pointer",
                    textAlign: "center",
                    color: "#0f1111",
                    listStyle: "none",
                    wordWrap: "break-word",
                  }}
                >
                  <Box
                    component="input"
                    type="submit"
                    sx={{
                      cursor: "pointer",
                      WebkitAppearance: "button",
                      position: "absolute",
                      backgroundColor: "transparent",
                      color: "transparent",
                      border: 0,
                      height: "100%",
                      width: "100%",
                      left: 0,
                      top: 0,
                      opacity: ".01",
                      outline: 0,
                      zIndex: 20,
                      WebkitTransition: "all .1s linear",
                      transition: "all .1s linear",
                      lineHeight: "19px",
                      margin: 0,
                      fontSize: "100%",
                      verticalAlign: "middle",
                      overflowClipMargin: "0px !important",
                      overflow: "clip !important",
                    }}
                  ></Box>
                  <Box
                    component="span"
                    sx={{
                      color: "#0f1111",
                      padding: 0,
                      fontWeight: 700,
                      lineHeight: "19px",
                      textAlign: "left",
                      whiteSpace: "normal",
                      backgroundColor: "transparent",
                      border: 0,
                      display: "block",
                      fontSize: "13px",
                      margin: 0,
                      outline: 0,
                      cursor: "pointer",
                      listStyle: "none",
                      wordWrap: "break-word",

                      "&::after":
                        currentImage === img.imgJpg
                          ? {
                              content: '""',
                              position: "absolute",
                              borderRadius: "7px",
                              width: "100%",
                              height: "100%",
                              backgroundColor: "#000",
                              opacity: ".03",
                              pointerEvents: "none",
                              display: "block",
                              boxShadow: "none",
                            }
                          : {
                              position: "absolute",
                              width: "100%",
                              height: "100%",
                              backgroundColor: "#000",
                              opacity: ".03",
                              pointerEvents: "none",
                              content: '""',
                              display: "block",
                            },
                    }}
                  >
                    <Image
                      src={img.imgJpg}
                      alt="Image"
                      sizes="100vw"
                      style={{
                        width: "100%",
                        height: "auto",
                        maxWidth: "none !important",
                        borderRadius: "7px",
                        minWidth: "5px",
                      }}
                      width={38}
                      height={50}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </>
    );
  };

  const renderedImg = (
    <Box
      component="li"
      sx={{
        display: "block!important",
        visibility: "visible!important",
        margin: 0,
        height: "100%",
        listStyle: "none",
        wordWrap: "break-word",
        color: "#0F1111",
      }}
    >
      <Box
        component="span"
        sx={{
          height: "100%",
          display: "block",
          color: "#0F1111",
          visibility: "visible!important",
          listStyle: "none",
          wordWrap: "break-word",
          textAlign: "-webkit-match-parent",
          borderCollapse: "collapse",
        }}
      >
        <Box
          component="span"
          sx={{
            display: "table",
            width: "100%",
            height: "100%",
            color: "#0F1111",
            visibility: "visible!important",
            listStyle: "none",
            wordWrap: "break-word",
            textAlign: "-webkit-match-parent",
            borderCollapse: "collapse",
          }}
        >
          <Box
            sx={{
              height: "354px",
              display: "table-cell",
              verticalAlign: "middle",
              margin: 0,
              padding: 0,
              color: "#0F1111",
              visibility: "visible!important",
              listStyle: "none",
              wordWrap: "break-word",
              textAlign: "-webkit-match-parent",
              borderCollapse: "collapse",
              position: "relative",
            }}
          >
            <Image
              src={currentImage}
              alt="Image"
              fill
              sizes="272px"
              style={{
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );

  const rightCol = (
    <Box
      sx={{
        float: "right",
        width: "244px",
        marginRight: "-244px",
        position: "relative",
        overflow: "visible",
        zoom: 1,
        minHeight: "1px",
      }}
    >
      <Box>
        <Box
          sx={{
            filter: "inherit",
          }}
        >
          <Box>
            <Box>
              <Box
                sx={{
                  "&:last-child": {
                    marginBottom: 0,
                  },
                }}
              >
                <Box
                  sx={{
                    marginBottom: 0,
                    display: "block",
                    marginTop: "0em",
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        "&: only-child": {
                          borderRadius: "8px",
                        },

                        "&:first-of-type": {
                          marginTop: 0,
                        },

                        marginBottom: "0!important",
                        display: "block",
                        backgroundColor: "#fff",
                        border: "1px #D5D9D9 solid",
                      }}
                    >
                      <Box
                        sx={{
                          "&: only-child": {
                            borderRadius: "8px",
                          },

                          position: "relative",
                          padding: "14px 18px",
                        }}
                      >
                        <Box
                          sx={{
                            padding: "0!important",
                            marginBottom: "0!important",
                          }}
                        >
                          {selectedSize !== "Sélectionner" && (
                            <Box>
                              <Box>
                                <Box
                                  sx={{
                                    marginBottom: "4px!important",
                                    color: "#0F1111",
                                  }}
                                >
                                  <Box
                                    component="span"
                                    sx={{
                                      fontSize: "28px",
                                      color: "#0F1111",
                                      verticalAlign: "middle!important",
                                      textDecoration: "none",
                                      position: "relative",
                                      lineHeight: "normal",
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
                                        left: "0!important",
                                        bottom: "-1px!important",
                                        zIndex: "-1!important",
                                        opacity: 0,
                                        color: "#0F1111",
                                        lineHeight: "normal",

                                        fontSize: "28px",
                                      }}
                                    >
                                      {CartItemPrixAct}&nbsp;
                                      {vPrixSymbol}
                                    </Box>
                                    <Box component="span" aria-hidden="true">
                                      <Box
                                        component="span"
                                        sx={{
                                          fontWeight: 700,
                                          fontSize: "24px",
                                          fontStyle: "normal",
                                          fontStretch: "normal",
                                          lineHeight: "1.33",
                                          letterSpacing: "normal",
                                          color:
                                            "rgba(17,24,32,0.87) !important",
                                        }}
                                      >
                                        {CartItemPrixAct}&nbsp;
                                        {vPrixSymbol}
                                      </Box>
                                    </Box>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          )}

                          <Box>
                            <Box
                              sx={{
                                padding: "0!important",
                                marginBottom: "0!important",
                              }}
                            >
                              <Box>
                                <Box>
                                  <Box>
                                    <Box
                                      sx={{
                                        marginBottom: "12px!important",
                                      }}
                                    >
                                      <Box>
                                        <Box
                                          sx={{
                                            marginBottom: "12px!important",
                                          }}
                                        ></Box>
                                        <Box
                                          sx={{
                                            marginBottom: "12px!important",
                                          }}
                                        >
                                          <Box component="span">
                                            Livraison à domicile
                                          </Box>
                                        </Box>
                                      </Box>
                                    </Box>
                                  </Box>
                                </Box>
                              </Box>

                              {qteemax > 0 && (
                                <Box>
                                  <Box
                                    sx={{
                                      marginBottom: "0!important",
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        marginBottom: "12px!important",
                                      }}
                                    >
                                      <Box
                                        component="span"
                                        sx={{
                                          color: "#007600!important",
                                          textRendering: "optimizeLegibility",
                                          fontSize: "18px!important",
                                          lineHeight: "24px!important",
                                        }}
                                      >
                                        En stock.
                                      </Box>
                                    </Box>
                                  </Box>
                                </Box>
                              )}

                              {qteemax === 0 &&
                                selectedSize !== "Sélectionner" && (
                                  <Box
                                    sx={{
                                      color: "#0f1111",
                                      fontSize: "14px",
                                      lineHeight: "20px",
                                      WebkitTextSizeAdjust: "100%",
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        marginBottom: "0 !important",
                                        color: "#0f1111",
                                        fontSize: "14px",
                                        lineHeight: "20px",
                                        WebkitTextSizeAdjust: "100%",
                                      }}
                                    >
                                      <Box
                                        sx={{
                                          paddingTop: "4px",
                                          marginTop: "0 !important",
                                          marginBottom: "12px !important",
                                          color: "#0f1111",
                                          fontSize: "14px",
                                          lineHeight: "20px",
                                          WebkitTextSizeAdjust: "100%",
                                        }}
                                      >
                                        <Box
                                          component="span"
                                          sx={{
                                            color: "#b12704 !important",
                                            fontSize: "14px !important",
                                            lineHeight: "20px !important",
                                            fontWeight: "700 !important",
                                            boxSizing: "border-box",
                                          }}
                                        >
                                          Il ne reste plus de produits en stock
                                        </Box>
                                      </Box>
                                    </Box>
                                  </Box>
                                )}

                              {qteemax > 0 &&
                                selectedSize !== "Sélectionner" && (
                                  <Box>
                                    <Box
                                      sx={{
                                        textAlign: "left!important",
                                        marginBottom: "12px!important",
                                      }}
                                    >
                                      <Box
                                        sx={{
                                          padding: "0!important",
                                          marginBottom: "0!important",
                                          textAlign: "left!important",
                                          fontSize: "14px",
                                          lineHeight: "20px",
                                        }}
                                      >
                                        <Box component="span">
                                          <Box
                                            sx={{
                                              marginBottom: "12px!important",
                                              width: "100%",

                                              "&::after,&::before": {
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
                                                width: "100%",
                                                marginRight: 0,
                                                float: "left",
                                                minHight: "1px",
                                                overflow: "visible",
                                                textAlign: "left!important",
                                                display: "block",
                                              }}
                                            >
                                              <Box
                                                component="span"
                                                sx={{
                                                  position: "relative",
                                                }}
                                              >
                                                <Box
                                                  component="label"
                                                  htmlFor="quantité"
                                                  sx={{
                                                    paddingRight: "5px",
                                                    opacity: 1,
                                                    zIndex: "auto",
                                                    position: "static",
                                                    display: "inline",
                                                    fontWeight: "normal",
                                                    maxWidth: "100%",
                                                    left: 0,
                                                    paddingLeft: "2px",
                                                    paddingBottom: "2px",
                                                    cursor: "default",
                                                  }}
                                                >
                                                  Quantité :
                                                </Box>

                                                <Box
                                                  component="select"
                                                  name="quantité"
                                                  autoComplete="off"
                                                  id="quantité"
                                                  tabIndex="0"
                                                  value={prodQtee}
                                                  onChange={handleChange}
                                                  sx={{
                                                    opacity: 1,
                                                    filter:
                                                      "alpha(opacity=100)",
                                                    zIndex: "auto",
                                                    position: "static",
                                                    display: "inline",
                                                    fontWeight: "normal",
                                                    maxWidth: "100%",
                                                    left: 0,
                                                    border: "1px solid #DDD",
                                                    borderRadius:
                                                      "4px 4px 4px 4px",
                                                    padding: "3px",
                                                    WebkitTransition:
                                                      "all .1s linear",
                                                    transition:
                                                      "all .1s linear",
                                                    lineHeight: "19px",
                                                    color: "#0F1111",
                                                    margin: 0,
                                                    fontSize: "100%",
                                                    verticalAlign: "middle",

                                                    ":select:not(:-internal-list-box)":
                                                      {
                                                        overflow:
                                                          "visible !important",
                                                      },
                                                    //
                                                    width: "100%!important",
                                                    background: "#f0f2f2",
                                                    border: "1px #ddd solid",
                                                    maxWidth: "100%",
                                                    transition:
                                                      "all .1s linear",
                                                    fontWeight: 500,
                                                    height: "29px",
                                                  }}
                                                >
                                                  {options}
                                                </Box>
                                              </Box>
                                            </Box>
                                          </Box>
                                        </Box>
                                      </Box>
                                    </Box>
                                  </Box>
                                )}

                              {selectedSize === "Sélectionner" && (
                                <Box
                                  sx={{
                                    textAlign: "center !important",
                                    marginBottom: "8px !important",
                                    color: "#b12704;",
                                    fontSize: "14px",
                                    lineHeight: "20px",
                                    WebkitTextSizeAdjust: "100%",
                                  }}
                                >
                                  <Box
                                    component="span"
                                    sx={{
                                      textAlign: "center !important",
                                      color: "#b12704;",
                                      fontSize: "14px",
                                      lineHeight: "20px",
                                      WebkitTextSizeAdjust: "100%",
                                    }}
                                  >
                                    Veuillez selectionner une
                                    <Box
                                      component="strong"
                                      sx={{
                                        color: "#b12704;",
                                        fontSize: "14px",
                                        lineHeight: "20px",
                                        WebkitTextSizeAdjust: "100%",
                                      }}
                                    >
                                      Taille
                                    </Box>
                                  </Box>
                                </Box>
                              )}

                              <Box>
                                <Box
                                  component="button"
                                  onClick={clickOpenCart}
                                  disabled={ajPanDisabled || achMaintDisabled}
                                  sx={{
                                    backgroundColor: "transparent",
                                    border: "none",
                                    outline: 0,
                                    textAlign: "center!important",
                                    width: "100%!important",
                                  }}
                                >
                                  <Box component="span">
                                    <Box
                                      component="span"
                                      sx={{
                                        display: "block",
                                        borderRadius: "20px",
                                        boxShadow:
                                          "0 2px 5px 0 rgb(213 217 217 / 50%)",
                                        background:
                                          ajPanDisabled || achMaintDisabled
                                            ? "#e7e9ec"
                                            : "#FFD814",
                                        borderColor:
                                          ajPanDisabled || achMaintDisabled
                                            ? "#8d9096"
                                            : "#FCD200",
                                        borderStyle: "solid",
                                        borderWidth: "1px",
                                        cursor: "pointer",
                                        padding: 0,
                                        textAlign: "center",
                                        textDecoration: "none!important",
                                        verticalAlign: "middle",
                                        marginBottom: "8px!important",
                                      }}
                                    >
                                      <Box
                                        component="span"
                                        sx={{
                                          borderRadius: "19px",
                                          background: "0 0",
                                          boxShadow: "none",
                                          display: "block",
                                          position: "relative",
                                          overflow: "hidden",
                                          height: "29px",
                                          cursor: "pointer",
                                          textAlign: "center",
                                        }}
                                      >
                                        <Box
                                          component="span"
                                          aria-hidden="true"
                                          sx={{
                                            color: "#0F1111",
                                            backgroundColor: "transparent",
                                            border: 0,
                                            display: "block",
                                            fontSize: "13px",
                                            lineHeight: "29px",
                                            margin: 0,
                                            outline: 0,
                                            padding: "0 10px 0 11px",
                                            textAlign: "center",
                                            whiteSpace: "nowrap",
                                          }}
                                        >
                                          Ajouter au panier&nbsp;
                                          {isNavOpenCart && (
                                            <CircularProgress
                                              size={20}
                                              sx={{
                                                textAlign: "center",
                                                top: "50%",
                                                left: "50%",
                                              }}
                                            />
                                          )}
                                        </Box>
                                      </Box>
                                    </Box>
                                  </Box>
                                </Box>
                              </Box>

                              <Box>
                                <Box>
                                  <Box
                                    component="button"
                                    onClick={clickBuyNow}
                                    disabled={achMaintDisabled || ajPanDisabled}
                                    sx={{
                                      backgroundColor: "transparent",
                                      border: "none",
                                      outline: 0,
                                      textAlign: "center!important",
                                      width: "100%!important",
                                    }}
                                  >
                                    <Box
                                      sx={{
                                        marginBottom: "12px!important",
                                      }}
                                    >
                                      <Box
                                        component="span"
                                        sx={{
                                          "&:last-child": {
                                            marginBottom: 0,
                                          },
                                          display: "block",
                                          borderRadius: "20px",
                                          boxShadow:
                                            "0 2px 5px 0 rgb(213 217 217 / 50%)",
                                          background:
                                            achMaintDisabled || ajPanDisabled
                                              ? "#e7e9ec"
                                              : "#FF8F00",
                                          borderColor:
                                            achMaintDisabled || ajPanDisabled
                                              ? "#8d9096"
                                              : "#FF8F00",
                                          borderStyle: "solid",
                                          borderWidth: "1px",
                                          cursor: "pointer",
                                          padding: 0,
                                          textAlign: "center",
                                          textDecoration: "none!important",
                                          verticalAlign: "middle",
                                        }}
                                      >
                                        <Box
                                          component="span"
                                          sx={{
                                            borderRadius: "19px",
                                            background: "0 0",
                                            boxShadow: "none",
                                            display: "block",
                                            position: "relative",
                                            overflow: "hidden",
                                            height: "29px",
                                            cursor: "pointer",
                                            textAlign: "center",
                                          }}
                                        >
                                          <Box
                                            component="span"
                                            aria-hidden="true"
                                            sx={{
                                              color: "#0F1111",
                                              backgroundColor: "transparent",
                                              border: 0,
                                              display: "block",
                                              fontSize: "13px",
                                              lineHeight: "29px",
                                              margin: 0,
                                              outline: 0,
                                              padding: "0 10px 0 11px",
                                              textAlign: "center",
                                              whiteSpace: "nowrap",
                                            }}
                                          >
                                            Acheter maintenant
                                            {isNavCheckout && (
                                              <CircularProgress
                                                size={20}
                                                sx={{
                                                  textAlign: "center",
                                                  top: "50%",
                                                  left: "50%",
                                                }}
                                              />
                                            )}
                                          </Box>
                                        </Box>
                                      </Box>
                                    </Box>
                                  </Box>
                                </Box>
                              </Box>

                              <Box>
                                <Box
                                  component="section"
                                  sx={{
                                    fontSize: ".75rem",
                                    marginBottom: "8px",
                                    boxShadow: "0 2px 5px 0 rgb(0 0 0 / 5%)",
                                    backgroundColor: "#fff",
                                    borderRadius: "4px",
                                    display: "block",
                                    color: "#282828",
                                  }}
                                >
                                  <Box
                                    component="hr"
                                    sx={{
                                      marginBottom: "12px!important",
                                      backgroundColor: "transparent",
                                      borderBottomWidth: 0,
                                      borderLeftWidth: 0,
                                      borderRightWidth: 0,
                                      borderTop: "1px solid #e7e7e7",
                                      display: "block",
                                      height: "1px",
                                      lineHeight: "19px",
                                      marginTop: 0,
                                    }}
                                  ></Box>
                                  <Box
                                    component="h2"
                                    sx={{
                                      fontSize: ".875rem",
                                      fontWeight: 500,
                                      padding: "8px",
                                      margin: 0,
                                      color: "#282828",
                                      WebkitTextSizeAdjust: "100%",
                                      WebkitFontSmoothing: "antialiased",
                                    }}
                                  >
                                    Livraison, retours et paiements
                                  </Box>
                                  <Box
                                    sx={{
                                      position: "relative",
                                      fontSize: ".75rem",
                                      color: "#282828",
                                      WebkitTextSizeAdjust: "100%",

                                      "&::before": {
                                        height: "1px",
                                        content: '""',
                                        top: 0,
                                        right: 0,
                                        left: 0,
                                        position: "absolute",
                                        backgroundColor: "#ededed",
                                      },
                                    }}
                                  >
                                    <Box
                                      component="article"
                                      sx={{
                                        paddingBottom: "4px",
                                        paddingTop: "4px",
                                        position: "relative",
                                        display: "block",
                                        fontSize: ".75rem",
                                        color: "#282828",
                                      }}
                                    >
                                      <Box
                                        component="section"
                                        sx={{
                                          position: "relative",
                                          display: "block",
                                          fontSize: ".75rem",
                                          WebkitFontSmoothing: "antialiased",
                                          color: "#282828",
                                          WebkitTextSizeAdjust: "100%",
                                        }}
                                      >
                                        <Box>
                                          <Box
                                            component="article"
                                            sx={{
                                              paddingLeft: "8px",
                                              paddingBottom: "4px",
                                              paddingRight: "8px",
                                              paddingTop: "4px",
                                              display: "flex",
                                              fontSize: ".75rem",
                                              WebkitFontSmoothing:
                                                "antialiased",
                                              WebkitTextSizeAdjust: "100%",
                                            }}
                                          >
                                            <CustLocalShippingOutlinedIcon
                                              color="action"
                                              sx={{
                                                fontSize: 0,
                                                marginRight: "8px",
                                                padding: "4px",
                                                alignSelf: "baseline",
                                                flexShrink: 0,
                                                border: "1px solid #ededed",
                                                borderRadius: "4px",
                                                fill: "#282828",
                                                width: 40,
                                                height: 40,
                                              }}
                                            ></CustLocalShippingOutlinedIcon>
                                            <Box
                                              sx={{
                                                flexWrap: "wrap",
                                                alignContent: "space-between",
                                                flexGrow: 1,
                                                display: "flex",
                                                fontSize: ".75rem",
                                                color: "#282828",
                                              }}
                                            >
                                              <Box
                                                sx={{
                                                  width: "100%",
                                                  display: "flex",
                                                  fontSize: ".75rem",
                                                  WebkitFontSmoothing:
                                                    "antialiased",
                                                  color: "#282828",
                                                  WebkitTextSizeAdjust: "100%",
                                                }}
                                              >
                                                <Box
                                                  component="h4"
                                                  sx={{
                                                    fontSize: ".875rem",
                                                    fontWeight: 500,
                                                    paddingRight: "8px",
                                                    margin: 0,
                                                    padding: 0,
                                                    color: "#282828",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    WebkitTextSizeAdjust:
                                                      "100%",
                                                  }}
                                                >
                                                  Livraison à domicile
                                                </Box>
                                              </Box>
                                            </Box>
                                          </Box>
                                          <Box
                                            component="article"
                                            sx={{
                                              paddingLeft: "8px",
                                              paddingBottom: "4px",
                                              paddingRight: "8px",
                                              paddingTop: "4px",
                                              display: "flex",
                                              fontSize: ".75rem",
                                              WebkitFontSmoothing:
                                                "antialiased",
                                              color: "#282828",
                                              WebkitTextSizeAdjust: "100%",
                                            }}
                                          >
                                            <CustPaymentOutlinedIcon
                                              color="action"
                                              sx={{
                                                fontSize: 0,
                                                marginRight: "8px",
                                                padding: "4px",
                                                alignSelf: "baseline",
                                                flexShrink: 0,
                                                border: "1px solid #ededed",
                                                borderRadius: "4px",
                                                fill: "#282828",
                                                width: 40,
                                                height: 40,
                                              }}
                                            ></CustPaymentOutlinedIcon>
                                            <Box
                                              sx={{
                                                flexWrap: "wrap",
                                                alignContent: "space-between",
                                                flexGrow: 1,
                                                display: "flex",
                                                fontSize: ".75rem",
                                                color: "#282828",
                                              }}
                                            >
                                              <Box
                                                sx={{
                                                  width: "100%",
                                                  display: "flex",
                                                  fontSize: ".75rem",
                                                  WebkitFontSmoothing:
                                                    "antialiased",
                                                  color: "#282828",
                                                  WebkitTextSizeAdjust: "100%",
                                                }}
                                              >
                                                <Box
                                                  component="h4"
                                                  sx={{
                                                    fontSize: ".875rem",
                                                    fontWeight: 500,
                                                    paddingRight: "8px",
                                                    margin: 0,
                                                    padding: 0,
                                                    color: "#282828",
                                                    WebkitFontSmoothing:
                                                      "antialiased",
                                                    WebkitTextSizeAdjust:
                                                      "100%",
                                                  }}
                                                >
                                                  Paiements à la livraison
                                                </Box>
                                              </Box>
                                            </Box>
                                          </Box>
                                        </Box>
                                      </Box>
                                    </Box>
                                    <Box
                                      component="article"
                                      sx={{
                                        padding: "8px",
                                        position: "relative",
                                        display: "flex",
                                        fontSize: ".75rem",
                                        WebkitFontSmoothing: "antialiased",
                                        color: "#282828",
                                        WebkitTextSizeAdjust: "100%",

                                        "&::before": {
                                          content: '""',
                                          height: "1px",
                                          top: 0,
                                          right: 0,
                                          left: 0,
                                          position: "absolute",
                                          backgroundColor: "#ededed",
                                        },
                                      }}
                                    >
                                      <CustLoopIcon
                                        color="action"
                                        sx={{
                                          fontSize: 0,
                                          marginRight: "8px",
                                          padding: "4px",
                                          alignSelf: "baseline",
                                          flexShrink: 0,
                                          border: "1px solid #ededed",
                                          borderRadius: "4px",
                                          fill: "#282828",
                                          width: 40,
                                          height: 40,
                                        }}
                                      ></CustLoopIcon>
                                      <Box
                                        sx={{
                                          flexDirection: "column",
                                          alignContent: "space-between",
                                          display: "flex",
                                          fontSize: ".75rem",
                                          WebkitFontSmoothing: "antialiased",
                                          color: "#282828",
                                          WebkitTextSizeAdjust: "100%",
                                        }}
                                      >
                                        <Box
                                          component="h3"
                                          sx={{
                                            fontSize: ".875rem",
                                            fontWeight: 500,
                                            width: "100%",
                                            margin: 0,
                                            padding: 0,
                                            WebkitFontSmoothing: "antialiased",
                                            color: "#282828",
                                            WebkitTextSizeAdjust: "100%",
                                          }}
                                        >
                                          Politique de retour
                                        </Box>
                                        <Box
                                          component="p"
                                          sx={{
                                            paddingTop: "4px",
                                            margin: 0,
                                            padding: 0,
                                            fontSize: ".75rem",
                                            color: "#282828",
                                            WebkitFontSmoothing: "antialiased",
                                            WebkitTextSizeAdjust: "100%",
                                          }}
                                        >
                                          Retours acceptés dans un délai de 15
                                          jours
                                        </Box>
                                      </Box>
                                    </Box>
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  const leftCol = (
    <Box
      sx={{
        position: "sticky",
        position: "-webkit-sticky",
        top: "4px",
        height: "100%",
        width: "31.948%",
        float: "left",
        marginRight: "2%",
        minHeight: "1px",
        overflow: "visible",
      }}
    >
      <Box>
        <Box
          sx={{
            opacity: 1,
            marginBottom: 0,
          }}
        >
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Box
              sx={{
                padding: 0,
                paddingLeft: "40px",
                position: "relative",

                "&::after,&::before": {
                  display: "table",
                  content: '""',
                  lineHeight: 0,
                  fontSize: 0,
                },

                "&::after": {
                  clear: "left",
                },
              }}
            >
              <Box
                sx={{
                  width: "40px",
                  marginLeft: "-40px",
                  float: "left",
                  position: "relative",
                  overflow: "visible",
                  zoom: 1,
                  minHeight: "1px",
                  color: "#0f1111",
                  fontSize: "14px",
                  lineHeight: "20px",
                  WebkitTextSizeAdjust: "100%",
                }}
              >
                <Box
                  component="ul"
                  sx={{
                    margin: "0 0 0 18px",
                    marginLeft: 0,
                    color: "#0f1111",
                    padding: 0,
                    marginTop: "32px !important",
                  }}
                >
                  <ThumbnailsList />
                </Box>
              </Box>

              <Box
                sx={{
                  paddingLeft: "1%",
                  float: "left",
                  width: "100%",
                  textAlign: "center!important",
                  position: "relative",
                  overflow: "visible",
                  zoom: 1,
                  minHeight: "1px",
                }}
              >
                <Box
                  sx={{
                    opacity: 1,
                    display: "table!important",
                    tableLayout: "fixed",
                    zoom: 1,
                    borderCollapse: "collapse",
                    marginBottom: "12px!important",
                    width: "100%",
                    textAlign: "center!important",
                  }}
                >
                  <Box
                    sx={{
                      height: "464.286px",
                      maxHeight: "700px!important",
                      position: "relative",
                      textAlign: "center!important",
                    }}
                  >
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: "-1",
                      }}
                    >
                      <Box
                        sx={{
                          width: "100%",
                          height: "100%",
                          margin: "auto",
                        }}
                      ></Box>
                      <Box
                        sx={{
                          width: "100%",
                          borderCollapse: "collapse",
                          textAlign: "center!important",

                          "&::after,&::before": {
                            display: "table",
                            content: '""',
                            lineHeight: 0,
                            fontSize: 0,
                          },

                          "&::after": {
                            clear: "left",
                          },
                        }}
                      >
                        <Box
                          sx={{
                            paddingRight: 0,
                            width: "100%",
                            marginRight: 0,
                            float: "left",
                            minHeight: "1px",
                            overflow: "visible",
                            textAlign: "center!important",
                          }}
                        >
                          <Box
                            component="span"
                            sx={{
                              color: "#565959!important",
                            }}
                          ></Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        display: "none!important",
                        visibility: "hidden!important",
                      }}
                    ></Box>
                    <Box
                      sx={{
                        display: "none",
                        position: "relative",
                        textAlign: "center",
                      }}
                    >
                      <Box
                        sx={{
                          position: "absolute",
                          width: "100%",
                          top: "200px",
                          left: 0,
                        }}
                      >
                        <Box
                          sx={{
                            marginLeft: "auto",
                            marginRight: "auto",
                            borderColor: "#CC0C39",
                            position: "relative",
                            borderStyle: "solid",
                            borderWidth: "2px",
                            borderLeftWidth: "12px",
                            display: "block",
                            borderRadius: "8px",
                            backgroundColor: "#fff",
                            border: "1px #D5D9D9 solid",
                          }}
                        >
                          <Box
                            sx={{
                              backgroundColor: "#FFF",
                              padding: "14px 18px 18px",
                              borderRadius: "8px",
                              position: "relative",
                            }}
                          ></Box>
                          <Box
                            component="h4"
                            sx={{
                              paddingLeft: "26px",
                              paddingBottom: "10px",
                              fontWeight: 700,
                              fontSize: "18px",
                              lineHeight: "24px",
                              textRendering: "optimizeLegibility",
                              padding: 0,
                              margin: 0,
                            }}
                          >
                            Image indisponible
                          </Box>
                        </Box>

                        <Box
                          sx={{
                            paddingLeft: 0,
                          }}
                        >
                          <Box
                            component="span"
                            sx={{
                              fontWeight: "700!important",
                            }}
                          >
                            Image non disponible
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      component="ul"
                      sx={{
                        height: "100%",
                        display: "block",
                        marginLeft: 0,
                        color: "#0F1111",
                        padding: 0,
                        margin: "0 0 0 18px",

                        "&::after,&::before": {
                          display: "table",
                          content: '""',
                          lineHeight: 0,
                          fontSize: 0,
                        },

                        "&::after": {
                          clear: "both",
                        },

                        textAlign: "center !important",
                        fontSize: "14px",
                        lineHeight: "20px",
                        WebkitTextSizeAdjust: "100%",
                        borderCollapse: "collapse",
                      }}
                    >
                      {renderedImg}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  const centerCol = (
    <Box
      sx={{
        paddingRight: "6.5%",
        float: "left",
        width: "100%",
        position: "relative",
        overflow: "visible",
        zoom: 1,
        minHeight: "1px",
      }}
    >
      <Box>
        <Box
          sx={{
            marginBottom: "0!important",
          }}
        >
          <Box
            component="h1"
            sx={{
              paddingBottom: 0,
              marginBottom: "0!important",
              textRendering: "optimizeLegibility",
              fontSize: "24px!important",
              lineHeight: "32px!important",
              fontWeight: 400,
              padding: 0,
              margin: 0,
            }}
          >
            <Box
              component="span"
              sx={{
                wordBreak: "break-word",
                textRendering: "optimizeLegibility",
                fontSize: "24px!important",
                lineHeight: "32px!important",
                fontWeight: 400,
              }}
            >
              {vDescPrd}
            </Box>
          </Box>
        </Box>
      </Box>

      {vEtatprd && (
        <Box>
          <Box
            sx={{
              marginBottom: "0!important",
            }}
          >
            <Box
              component="span"
              sx={{
                color: "#0F1111",
                fontSize: "14px",
                lineHeight: "20px",
                WebkitTextSizeAdjust: "100%",
              }}
            >
              État&nbsp;: {selectedprd[0]?.etatprd}
            </Box>
          </Box>
        </Box>
      )}

      <Box
        component="hr"
        sx={{
          backgroundColor: "transparent",
          borderBottomWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTop: "1px solid #e7e7e7",
          display: "block",
          height: "1px",
          lineHeight: "19px",
          marginBottom: "14px",
          marginTop: "14px",
        }}
      ></Box>

      {selectedSize === "Sélectionner" && (
        <Box>
          <Box>
            <Box>
              <Box
                sx={{
                  marginBottom: "8px !important",
                }}
              >
                <Box
                  component="table"
                  sx={{
                    marginBottom: "0 !important",
                    verticalAlign: "top !important",
                    borderCollapse: "collapse",
                    width: "100%",
                    display: "table",
                    textIndent: "initial",
                    unicodeBidi: "isolate",
                    borderSpacing: "2px",
                    borderColor: "gray",
                    color: "#0f1111",
                    fontSize: "14px",
                    lineHeight: "20px",
                    WebkitTextSizeAdjust: "100%",
                  }}
                >
                  <Box
                    component="tbody"
                    sx={{
                      display: "table-row-group",
                      verticalAlign: "middle",
                      unicodeBidi: "isolate",
                      borderColor: "inherit",
                      borderCollapse: "collapse",
                      textIndent: "initial",
                      borderSpacing: "2px",
                      color: "#0f1111",
                      fontSize: "14px",
                      lineHeight: "20px",
                      WebkitTextSizeAdjust: "100%",
                    }}
                  >
                    <Box
                      component="tr"
                      sx={{
                        display: "table-row",
                        verticalAlign: "inherit",
                        unicodeBidi: "isolate",
                        borderColor: "inherit",
                        borderCollapse: "collapse",
                        textIndent: "initial",
                        borderSpacing: "2px",
                        color: "#0f1111",
                        fontSize: "14px",
                        lineHeight: "20px",
                        WebkitTextSizeAdjust: "100%",
                      }}
                    >
                      <Box
                        component="td"
                        sx={{
                          padding: "0 3px",
                          verticalAlign: "top",
                          whiteSpace: "nowrap",
                          textAlign: "right !important",
                          color: "#565959 !important",
                          fontSize: "14px !important",
                          lineHeight: "20px !important",
                          display: "table-cell",
                          unicodeBidi: "isolate",
                          borderCollapse: "collapse",
                          textIndent: "initial",
                          borderSpacing: "2px",
                          WebkitTextSizeAdjust: "100%",
                          "&:first-of-type": {
                            paddingLeft: 0,
                          },
                        }}
                      >
                        Prix :
                      </Box>
                      <Box
                        component="td"
                        sx={{
                          "&:last-child": {
                            paddingRight: 0,
                          },

                          width: "100%",
                          marginRight: 0,
                          padding: "0 3px",
                          verticalAlign: "top",
                          float: "none !important",
                          display: "table-cell",
                          unicodeBidi: "isolate",
                          borderCollapse: "collapse",
                          textIndent: "initial",
                          borderSpacing: "2px",
                          color: "#0f1111",
                          fontSize: "14px",
                          lineHeight: "20px",
                          WebkitTextSizeAdjust: "100%",
                        }}
                      >
                        <Box
                          component="span"
                          sx={{
                            fontSize: 0,
                            color: "#0f1111",
                            lineHeight: "20px",
                            WebkitTextSizeAdjust: "100%",
                          }}
                        >
                          <Box
                            component="span"
                            sx={{
                              color: "#b12704",
                              textDecoration: "none",
                              position: "relative",
                              textRendering: "optimizeLegibility",
                              fontSize: "18px !important",
                              lineHeight: "24px !important",
                              WebkitTextSizeAdjust: "100%",
                            }}
                          >
                            <Box
                              component="span"
                              sx={{
                                color: "#b12704",
                                textRendering: "optimizeLegibility",
                                fontSize: "18px !important",
                                lineHeight: "24px !important",
                                WebkitTextSizeAdjust: "100%",
                              }}
                            >
                              {vPriceRangeFrom}&nbsp;{vPrixSymbol}
                            </Box>
                          </Box>
                          <Box
                            component="span"
                            sx={{
                              fontSize: "21px",
                              paddingLeft: "4px",
                              paddingRight: "4px",
                              color: "#b12704",
                              lineHeight: "24px !important",
                              WebkitTextSizeAdjust: "100%",
                              borderCollapse: "collapse",
                              textIndent: "initial",
                              borderSpacing: "2px",
                            }}
                          >
                            -
                          </Box>
                          <Box
                            component="span"
                            sx={{
                              color: "#b12704",
                              textDecoration: "none",
                              position: "relative",
                              textRendering: "optimizeLegibility",
                              fontSize: "18px !important",
                              lineHeight: "24px !important",
                              borderCollapse: "collapse",
                              textIndent: "initial",
                              borderSpacing: "2px",
                              WebkitTextSizeAdjust: "100%",
                            }}
                          >
                            <Box
                              component="span"
                              sx={{
                                color: "#b12704",
                                textRendering: "optimizeLegibility",
                                fontSize: "18px !important",
                                lineHeight: "24px !important",
                                borderCollapse: "collapse",
                                textIndent: "initial",
                                borderSpacing: "2px",
                                WebkitTextSizeAdjust: "100%",
                              }}
                            >
                              {vPriceRangeTo}&nbsp;{vPrixSymbol}
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}

      {selectedSize !== "Sélectionner" && (
        <Box>
          <Box>
            <Box
              sx={{
                verticalAlign: "middle!important",
                marginBottom: "0!important",
              }}
            >
              <Box
                component="span"
                sx={{
                  marginRight: "3px",
                  fontSize: "28px",
                  color: "#0F1111",
                  verticalAlign: "middle!important",
                  textDecoration: "none",
                  position: "relative",
                  lineHeight: "normal",
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
                    left: "0!important",
                    bottom: "-1px!important",
                    zIndex: "-1!important",
                    opacity: 0,
                    fontSize: "28px",
                    color: "#0F1111",
                    lineHeight: "normal",
                  }}
                >
                  {CartItemPrixAct}&nbsp;{vPrixSymbol}
                </Box>

                <Box component="span" aria-hidden="true">
                  <Box
                    component="span"
                    sx={{
                      fontWeight: 700,
                      fontSize: "24px",
                      fontStyle: "normal",
                      fontStretch: "normal",
                      lineHeight: "1.33",
                      letterSpacing: "normal",
                      color: "rgba(17,24,32,0.87) !important",
                    }}
                  >
                    {CartItemPrixAct}&nbsp;{vPrixSymbol}
                  </Box>
                </Box>
              </Box>
              {red && (
                <Box
                  sx={{
                    marginBottom: "8px",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      paddingRight: "2px",
                      fontSize: "14px",
                      margin: 0,
                      padding: 0,
                      border: 0,
                      fontWeight: "normal",
                      lineHeight: "normal",
                      color: "#333",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        textDecoration: "line-through",
                        fontSize: ".875rem",
                        margin: 0,
                        padding: 0,
                        border: 0,
                        fontWeight: "normal",
                        lineHeight: "normal",
                        color: "#333",
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          fontSize: ".875rem",
                          clip: "rect(1px,1px,1px,1px)",
                          overflow: "hidden",
                          border: "0 !important",
                          height: "1px !important",
                          padding: "0 !important",
                          position: "absolute !important",
                          whiteSpace: "nowrap !important",
                          width: "1px !important",
                          margin: 0,
                          fontWeight: "normal",
                        }}
                      >
                        Prix de vente initial&nbsp;:
                      </Box>
                      {CartItemPrixInit}&nbsp;{vPrixSymbol}
                      &nbsp;
                    </Box>
                    <Box
                      component="span"
                      sx={{
                        fontSize: ".875rem",
                        margin: 0,
                        padding: 0,
                        border: 0,
                        fontWeight: "normal",
                        lineHeight: "normal",
                        color: "#767676",
                      }}
                    >
                      <Box component="span"> &nbsp;(</Box>
                      <Box component="span">{red}</Box>
                      <Box component="span">% de réduction)</Box>
                    </Box>
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      )}

      <Box>
        <Box component="span">
          {vPromoprd1 && (
            <Box
              sx={{
                padding: "5px 0px 5px 0px",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  display: "inline-block",
                  border: "none",
                  verticalAlign: "middle",
                  backgroundColor: "transparent",
                  borderRadius: 0,
                  minHeight: "20px",
                  fontWeight: "700!important",
                }}
              >
                <Box
                  sx={{
                    paddingLeft: "28px",
                    color: "#067D62",
                    borderRadius: 0,
                    padding: 0,
                    position: "relative",
                    fontWeight: "700!important",
                    fontSize: "14px",
                    lineHeight: "20px",
                  }}
                >
                  <Box
                    sx={{
                      fontSize: "14px",
                      marginBottom: 0,
                      textAlign: "left",
                      lineHeight: "15px",
                      color: "#067D62",
                      fontWeight: "700!important",
                    }}
                  >
                    {vPromoprd1}
                  </Box>
                </Box>
              </Box>
            </Box>
          )}
          {vPromoprd2 && (
            <Box
              sx={{
                padding: "5px 0px 5px 0px",
                fontSize: "14px",
                lineHeight: "20px",
              }}
            >
              <Box
                component="span"
                sx={{
                  color: "#0F1111",
                  fontSize: "14px",
                  lineHeight: "20px",
                }}
              >
                {vPromoprd2}
              </Box>
            </Box>
          )}
        </Box>
      </Box>

      <Box
        sx={{
          WebkitTextSizeAdjust: "100%",
        }}
      >
        <Box
          sx={{
            maxWidth: "none",
            marginTop: "10px",
            color: "#0f1111",
            fontSize: "14px",
            lineHeight: "20px",
            WebkitTextSizeAdjust: "100%",
          }}
        >
          <Box
            sx={{
              "&:last-child": {
                marginBottom: 0,
              },
              boxSizing: "border-box",
              color: "#0f1111",
              fontSize: "14px",
              lineHeight: "20px",
              WebkitTextSizeAdjust: "100%",
            }}
          >
            <Box
              component="form"
              sx={{
                marginBottom: "8px !important",
                boxSizing: "border-box",
                color: "#0f1111",
                fontSize: "14px",
                lineHeight: "20px",
                WebkitTextSizeAdjust: "100%",
              }}
            >
              <Box
                sx={{
                  marginBottom: "12px !important",
                  boxSizing: "border-box",
                  display: "block",
                  unicodeBidi: "isolate",
                  color: "#0f1111",
                  fontSize: "14px",
                  lineHeight: "20px",
                  WebkitTextSizeAdjust: "100%",
                }}
              >
                <Box
                  sx={{
                    marginBottom: "4px !important",
                  }}
                ></Box>
                <Box
                  sx={{
                    marginBottom: "4px !important",
                    width: "100%",
                    boxSizing: "border-box",
                    display: "block",
                    unicodeBidi: "isolate",
                    color: "#0f1111",
                    fontSize: "14px",
                    lineHeight: "20px",
                    WebkitTextSizeAdjust: "100%",

                    "&::after,&::before": {
                      display: "table",
                      content: '""',
                      lineHeight: 0,
                      fontSize: 0,
                    },
                  }}
                >
                  <Box
                    component="label"
                    sx={{
                      display: "inline",
                      fontWeight: 700,
                      paddingLeft: "2px",
                      paddingBottom: "2px",
                      MozBoxSizing: "border-box",
                      WebkitBoxSizing: "border-box",
                      boxSizing: "border-box",
                      color: "#0f1111",
                      fontSize: "14px",
                      lineHeight: "20px",
                      WebkitTextSizeAdjust: "100%",
                    }}
                  >
                    Taille:
                  </Box>
                </Box>
                <Box
                  component="span"
                  sx={{
                    border: "2px solid #fff",
                    display: "inline-block",
                    borderRadius: "4px",
                    boxSizing: "border-box",
                    color: "#0f1111",
                    fontSize: "14px",
                    lineHeight: "20px",
                    WebkitTextSizeAdjust: "100%",
                    background: "#f0f2f2",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      position: "relative",
                      boxSizing: "border-box",
                      color: "#0f1111",
                      fontSize: "14px",
                      lineHeight: "20px",
                      WebkitTextSizeAdjust: "100%",
                      background: "#f0f2f2",
                    }}
                  >
                    <Box
                      component="select"
                      name="taille"
                      autoComplete="off"
                      role="combobox"
                      tabIndex="0"
                      id="taille"
                      value={selectedSize}
                      onChange={handleSizeChange}
                      sx={{
                        display: "inline",
                        opacity: 1,
                        position: "static",
                        maxWidth: "100%",
                        borderRadius: "4px",
                        padding: "3px",
                        border: "1px #ddd solid",
                        WebkitTransition: "all .1s linear",
                        transition: "all .1s linear",
                        lineHeight: "19px",
                        color: "#0f1111",
                        margin: 0,
                        fontSize: "100%",
                        verticalAlign: "middle",
                        fontFamily: "inherit",
                        boxSizing: "border-box",
                        overflow: "visible !important",
                        WebkitTextSizeAdjust: "100%",
                        background: "#f0f2f2",
                        border: "1px #ddd solid",
                        fontWeight: 500,
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
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  marginBottom: "8px !important",
                  color: "#0f1111",
                }}
              >
                <Box
                  sx={{
                    width: "100%",

                    "&::before": {
                      display: "table",
                      content: '""',
                      lineHeight: 0,
                      fontSize: 0,
                    },

                    "&::after": {
                      clear: "both",
                    },

                    "&::after": {
                      display: "table",
                      content: '""',
                      lineHeight: 0,
                      fontSize: 0,
                    },
                  }}
                >
                  <Box
                    component="label"
                    sx={{
                      display: "inline",
                      fontWeight: 700,
                      paddingLeft: "2px",
                      paddingBottom: "2px",
                      color: "#0f1111",
                      fontSize: "14px",
                      lineHeight: "20px",
                      WebkitTextSizeAdjust: "100%",
                    }}
                  >
                    Couleur:
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      boxSizing: "border-box",
                      color: "#0f1111",
                      fontSize: "14px",
                      lineHeight: "20px",
                      WebkitTextSizeAdjust: "100%",
                    }}
                  >
                    &nbsp;{currentColor}
                  </Box>
                </Box>
                <Box
                  component="ul"
                  sx={{
                    margin: "0 0 0 18px",
                    marginLeft: "-6px",
                    display: "block",
                    color: "#0f1111",
                    padding: 0,

                    marginTop: "4px !important",

                    "&::after, &::before": {
                      display: "table",
                      content: '""',
                      lineHeight: 0,
                      fontSize: 0,
                    },
                  }}
                >
                  <HandlesImgColors />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {qteemax === 0 && selectedSize !== "Sélectionner" && (
        <Box>
          <Box
            sx={{
              paddingTop: "4px",
              marginTop: "0 !important",
              marginBottom: "12px !important",
              color: "#0f1111",
              fontSize: "14px",
              lineHeight: "20px",
              WebkitTextSizeAdjust: "100%",
            }}
          >
            <Box
              component="span"
              sx={{
                MozBoxSizing: "border-box",
                WebkitBoxSizing: "border-box",
                boxSizing: "border-box",
                color: "#0f1111",
                fontSize: "14px",
                lineHeight: "20px",
                WebkitTextSizeAdjust: "100%",
              }}
            >
              <Box
                component="span"
                sx={{
                  color: "#007600 !important",
                  textRendering: "optimizeLegibility",
                  fontSize: "18px !important",
                  lineHeight: "24px !important",
                }}
              >
                Actuellement indisponible
              </Box>
            </Box>
          </Box>
        </Box>
      )}

      <Box>
        <Box
          sx={{
            maxHeight: "none",
            // height: "400px",
            height: "auto",
            overflow: "hidden",
            position: "relative",
            marginBottom: "16px !important",
            width: "100%",
            "&::after, &::before": {
              display: "table",
              content: '""',
              lineHeight: 0,
              fontSize: 0,
            },
          }}
        >
          <Box
            sx={{
              paddingBottom: "20px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Box
              component="h3"
              sx={{
                padding: 0,
                margin: 0,
                fontSize: "18px",
                fontWeight: 700,
                lineHeight: "24px",
                paddingBottom: "14px",
                paddingTop: "4px",
                textRendering: "optimizeLegibility",
                color: "#0f1111",
              }}
            >
              Détails sur le produit
            </Box>
            <Box
              sx={{
                lineHeight: "20px",
                marginBottom: "8px",
                position: "relative",
                color: "#0f1111",
                fontSize: "14px",
              }}
            >
              <Box
                sx={{
                  padding: 0,
                  paddingLeft: "140px",
                  position: "relative",
                  lineHeight: "20px",
                  color: "#0f1111",
                  fontSize: "14px",
                  WebkitTextSizeAdjust: "100%",

                  "&::after, &::before": {
                    display: "table",
                    content: '""',
                    lineHeight: 0,
                    fontSize: 0,
                  },
                }}
              >
                <Box
                  sx={{
                    width: "140px",
                    marginLeft: "-140px",
                    float: "left",
                    paddingRight: 0,
                    position: "relative",
                    overflow: "visible",
                    zoom: 1,
                    minHeight: "1px",
                    lineHeight: "20px",
                    color: "#0f1111",
                    fontSize: "14px",
                    WebkitTextSizeAdjust: "100%",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      fontWeight: 600,
                      wordBreak: "break-word",
                      hyphens: "auto",
                      lineHeight: "20px",
                      color: "#0f1111",
                      fontSize: "14px",
                      WebkitTextSizeAdjust: "100%",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        wordBreak: "break-word",
                        hyphens: "auto",
                        color: "#0f1111 !important",
                        fontWeight: 600,
                        lineHeight: "20px",
                        fontSize: "14px",
                        WebkitTextSizeAdjust: "100%",
                      }}
                    >
                      Composition du matériau
                    </Box>
                  </Box>
                </Box>
                {vMatériau && (
                  <Box
                    sx={{
                      paddingLeft: "6%",
                      float: "left",
                      width: "100%",
                      position: "relative",
                      overflow: "visible",
                      zoom: 1,
                      minHeight: "1px",
                      lineHeight: "20px",
                      color: "#0f1111",
                      fontSize: "14px",
                      WebkitTextSizeAdjust: "100%",
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        fontWeight: "400",
                        wordBreak: "break-word",
                        hyphens: "auto",
                        color: "#0f1111",
                        lineHeight: "20px",
                        fontSize: "14px",
                        WebkitTextSizeAdjust: "100%",
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          wordBreak: "break-word",
                          hyphens: "auto",
                          color: "#0f1111 !important",
                          fontWeight: 400,
                          lineHeight: "20px",
                          fontSize: "14px",
                          WebkitTextSizeAdjust: "100%",
                        }}
                      >
                        {vMatériau}
                      </Box>
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
            <Box
              component="hr"
              sx={{
                marginBottom: "12px !important",
                marginTop: "65px !important",
                backgroundColor: "transparent",
                borderBottomWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderTop: "1px solid #bbbfbf",
                display: "block",
                height: "1px",
                lineHeight: "19px",
                color: "#0f1111",
                fontSize: "14px",
                WebkitTextSizeAdjust: "100%",
              }}
            ></Box>
            <Box
              component="h3"
              sx={{
                padding: 0,
                margin: 0,
                fontSize: "18px",
                fontWeight: 700,
                lineHeight: "24px",
                paddingBottom: "14px",
                paddingTop: "4px",
                textRendering: "optimizeLegibility",
                color: "#0f1111",
                webkitTextSizeAdjust: "100%",
              }}
            >
              À propos de cet article
            </Box>
            {vDescdet && (
              <Box
                component="ul"
                sx={{
                  padding: 0,
                  margin: "0 0 0 18px",
                  color: "#0f1111",
                  marginBottom: "8px !important",
                  fontSize: "14px",
                  lineHeight: "20px",
                  WebkitTextSizeAdjust: "100%",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    fontWeight: 400,
                    color: "#0f1111",
                    fontSize: "14px",
                    lineHeight: "20px",
                    WebkitTextSizeAdjust: "100%",
                  }}
                >
                  <Box
                    component="li"
                    sx={{
                      wordWrap: "break-word",
                      margin: 0,
                      listStyle: "disc",
                      display: "list-item",
                      textAlign: "-webkit-match-parent",
                      unicodeBidi: "isolate",
                      fontWeight: 400,
                      color: "#0f1111",
                      fontSize: "14px",
                      lineHeight: "20px",
                      WebkitTextSizeAdjust: "100%",

                      "& li::marker": {
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
                        color: "!important",
                        fontSize: "14px !important",
                        lineHeight: "20px !important",
                        wordWrap: "break-word",
                        listStyle: "disc",
                        textAlign: "-webkit-match-parent",
                        fontWeight: 400,
                        WebkitTextSizeAdjust: "100%",
                      }}
                    >
                      {vDescdet}
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}

            {vTailleDisp && (
              <Box
                component="ul"
                sx={{
                  padding: 0,
                  margin: "0 0 0 18px",
                  color: "#0f1111",
                  marginBottom: "8px !important",
                  fontSize: "14px",
                  lineHeight: "20px",
                  WebkitTextSizeAdjust: "100%",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    fontWeight: 400,
                    color: "#0f1111",
                    fontSize: "14px",
                    lineHeight: "20px",
                    WebkitTextSizeAdjust: "100%",
                  }}
                >
                  <Box
                    component="li"
                    sx={{
                      wordWrap: "break-word",
                      margin: 0,
                      listStyle: "disc",
                      display: "list-item",
                      textAlign: "-webkit-match-parent",
                      unicodeBidi: "isolate",
                      fontWeight: 400,
                      color: "#0f1111",
                      fontSize: "14px",
                      lineHeight: "20px",
                      WebkitTextSizeAdjust: "100%",

                      "& li::marker": {
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
                        color: "!important",
                        fontSize: "14px !important",
                        lineHeight: "20px !important",
                        wordWrap: "break-word",
                        listStyle: "disc",
                        textAlign: "-webkit-match-parent",
                        fontWeight: 400,
                        WebkitTextSizeAdjust: "100%",
                      }}
                    >
                      Taille disponibles &rlm; : &lrm;{vTailleDisp}
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}

            {vPaysOrigine && (
              <Box
                component="ul"
                sx={{
                  padding: 0,
                  margin: "0 0 0 18px",
                  color: "#0f1111",
                  marginBottom: "8px !important",
                  fontSize: "14px",
                  lineHeight: "20px",
                  WebkitTextSizeAdjust: "100%",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    fontWeight: 400,
                    color: "#0f1111",
                    fontSize: "14px",
                    lineHeight: "20px",
                    WebkitTextSizeAdjust: "100%",
                  }}
                >
                  <Box
                    component="li"
                    sx={{
                      wordWrap: "break-word",
                      margin: 0,
                      listStyle: "disc",
                      display: "list-item",
                      textAlign: "-webkit-match-parent",
                      unicodeBidi: "isolate",
                      fontWeight: 400,
                      color: "#0f1111",
                      fontSize: "14px",
                      lineHeight: "20px",
                      WebkitTextSizeAdjust: "100%",

                      "& li::marker": {
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
                        color: "!important",
                        fontSize: "14px !important",
                        lineHeight: "20px !important",
                        wordWrap: "break-word",
                        listStyle: "disc",
                        textAlign: "-webkit-match-parent",
                        fontWeight: 400,
                        WebkitTextSizeAdjust: "100%",
                      }}
                    >
                      Pays d'origibne &rlm; : &lrm;{vPaysOrigine}
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}

            {vPrincCaract && (
              <Box
                component="ul"
                sx={{
                  padding: 0,
                  margin: "0 0 0 18px",
                  color: "#0f1111",
                  marginBottom: "8px !important",
                  fontSize: "14px",
                  lineHeight: "20px",
                  WebkitTextSizeAdjust: "100%",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    fontWeight: 400,
                    color: "#0f1111",
                    fontSize: "14px",
                    lineHeight: "20px",
                    WebkitTextSizeAdjust: "100%",
                  }}
                >
                  <Box
                    component="li"
                    sx={{
                      wordWrap: "break-word",
                      margin: 0,
                      listStyle: "disc",
                      display: "list-item",
                      textAlign: "-webkit-match-parent",
                      unicodeBidi: "isolate",
                      fontWeight: 400,
                      color: "#0f1111",
                      fontSize: "14px",
                      lineHeight: "20px",
                      WebkitTextSizeAdjust: "100%",

                      "& li::marker": {
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
                        color: "!important",
                        fontSize: "14px !important",
                        lineHeight: "20px !important",
                        wordWrap: "break-word",
                        listStyle: "disc",
                        textAlign: "-webkit-match-parent",
                        fontWeight: 400,
                        WebkitTextSizeAdjust: "100%",
                      }}
                    >
                      Principale caracteristique &rlm; : &lrm;{vPrincCaract}
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}

            {vMarque && (
              <Box
                component="ul"
                sx={{
                  padding: 0,
                  margin: "0 0 0 18px",
                  color: "#0f1111",
                  marginBottom: "8px !important",
                  fontSize: "14px",
                  lineHeight: "20px",
                  WebkitTextSizeAdjust: "100%",
                }}
              >
                <Box
                  component="span"
                  sx={{
                    fontWeight: 400,
                    color: "#0f1111",
                    fontSize: "14px",
                    lineHeight: "20px",
                    WebkitTextSizeAdjust: "100%",
                  }}
                >
                  <Box
                    component="li"
                    sx={{
                      wordWrap: "break-word",
                      margin: 0,
                      listStyle: "disc",
                      display: "list-item",
                      textAlign: "-webkit-match-parent",
                      unicodeBidi: "isolate",
                      fontWeight: 400,
                      color: "#0f1111",
                      fontSize: "14px",
                      lineHeight: "20px",
                      WebkitTextSizeAdjust: "100%",

                      "& li::marker": {
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
                        color: "!important",
                        fontSize: "14px !important",
                        lineHeight: "20px !important",
                        wordWrap: "break-word",
                        listStyle: "disc",
                        textAlign: "-webkit-match-parent",
                        fontWeight: 400,
                        WebkitTextSizeAdjust: "100%",
                      }}
                    >
                      Marque &rlm; : &lrm;{vMarque}
                    </Box>
                  </Box>
                </Box>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box
      onMouseEnter={() => returnToMainImg(prevMainImage, currentColorImage)}
      onMouseOver={() => returnToMainImg(prevMainImage, currentColorImage)}
      onTouchStart={() => returnToMainImg(prevMainImage, currentColorImage)}
      sx={{
        margin: "0 auto",
        minWidth: "1000px",
        maxWidth: "1500px",
        backgroundColor: "#fff",
      }}
    >
      <Box
        sx={{
          margin: "0 auto",
          padding: "0 8px !important",
          marginTop: "10px !important",
          minWidth: "996px",
        }}
      >
        <Box>
          <Box
            sx={{
              marginBottom: "12px !important",
            }}
          >
            <Box
              sx={{
                width: "100%",

                "&::after,&::before": {
                  display: "table",
                  content: '""',
                  lineHeight: 0,
                  fontSize: 0,
                },
              }}
            >
              {leftCol}
              <Box
                sx={{
                  marginRight: 0,
                  float: "right",
                  width: "65.948%",
                  minHeight: "1px",
                  overflow: "visible",

                  padding: "60px",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      padding: 0,
                      paddingRight: "244px",
                      position: "relative",

                      "&::after,&::before": {
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
                    {centerCol}
                    {rightCol}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProdViewUpSm;
