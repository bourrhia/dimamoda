"use client";
import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const HandlesSlider = ({
  prdCarouselLeft,
  prdCarouselLeftHide,
  prdCarouselRight,
  prdCarouselRightHide,
  imgmrvLength,
  children,
}) => {
  const slider = useRef(null);
  const [displayRightArrow, setdisplayRightArrow] = useState(true);
  const [displayLeftArrow, setdisplayLeftArrow] = useState(false);

  const slidesToShow = 5;

  const setArrowDisplay = (currentSlide) => {
    const LeftArrow = currentSlide !== 0;
    const RightArrow = currentSlide < imgmrvLength - slidesToShow;

    setdisplayRightArrow(RightArrow);
    setdisplayLeftArrow(LeftArrow);
  };

  const clickHandler = (direction) => {
    if (direction === "left") {
      slider.current.slickPrev();
    } else if (direction === "right") {
      slider.current.slickNext();
    }
  };

  function NextArrow(props) {
    const { className, onClick, styleClassName } = props;
    return (
      <Box
        className={className}
        style={{ ...styleClassName }}
        onClick={onClick}
      >
        <Box
          component="svg"
          width="14.6"
          height="24"
          viewBox="0 0 16 27"
          xmlns="http://www.w3.org/2000/svg"
          sx={{
            transform: "rotate(180deg)",
            boxSizing: "border-box",
            margin: 0,
            padding: 0,
            color: "#212121",
            overflow: "hidden",
          }}
        >
          <Box
            component="path"
            d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
            sx={{
              fill: "#212121",
              transformOrigin: "0px 0px",
              color: "#212121",
              right: 0,
            }}
          ></Box>
        </Box>
      </Box>
    );
  }

  function PrevArrow(props) {
    const { className, onClick, styleClassName } = props;
    return (
      <Box
        className={className}
        style={{ ...styleClassName }}
        onClick={onClick}
      >
        <Box
          component="svg"
          width="14.6"
          height="24"
          viewBox="0 0 16 27"
          xmlns="http://www.w3.org/2000/svg"
          sx={{
            boxSizing: "border-box",
            margin: 0,
            padding: 0,
            color: "#212121",
            overflow: "hidden",
          }}
        >
          <Box
            component="path"
            d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z"
            sx={{
              fill: "#212121",
              transformOrigin: "0px 0px",
              color: "#212121",
              left: 0,
            }}
          ></Box>
        </Box>
      </Box>
    );
  }

  const sliderSettings = {
    dots: false,
    infinite: false,
    initialSlide: 0,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    speed: 500,
    rows: 1,

    prevArrow: (
      <PrevArrow
        onClick={clickHandler}
        styleClassName={
          displayLeftArrow ? prdCarouselLeft : prdCarouselLeftHide
        }
      />
    ),
    nextArrow: (
      <NextArrow
        onClick={clickHandler}
        styleClassName={
          displayRightArrow ? prdCarouselRight : prdCarouselRightHide
        }
      />
    ),

    afterChange: (currentSlide) => {
      setArrowDisplay(currentSlide);
    },

    responsive: [
      {
        breakpoint: 1083,
        settings: {
          dots: false,
          infinite: false,
          initialSlide: 0,
          slidesToShow: 5,
          slidesToScroll: 5,
          speed: 500,
          rows: 1,
        },
      },

      {
        breakpoint: 960,
        settings: {
          dots: false,
          infinite: false,
          initialSlide: 0,
          slidesToShow: 4,
          slidesToScroll: 4,
          speed: 500,
          rows: 1,
        },
      },

      {
        breakpoint: 768,
        settings: {
          dots: false,
          infinite: false,
          initialSlide: 0,
          slidesToShow: 3,
          slidesToScroll: 3,
          speed: 500,
          rows: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider ref={slider} {...sliderSettings}>
        {children}
      </Slider>
    </>
  );
};

export default HandlesSlider;
