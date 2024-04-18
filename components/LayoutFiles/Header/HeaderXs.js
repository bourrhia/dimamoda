//import React, { useState, useEffect, useRef } from "react";
import React from "react";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import WomanIcon from "@mui/icons-material/Woman";
import ManIcon from "@mui/icons-material/Man";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import BoyIcon from "@mui/icons-material/Boy";
import SpaIcon from "@mui/icons-material/Spa";
import LuggageIcon from "@mui/icons-material/Luggage";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import CelebrationIcon from "@mui/icons-material/Celebration";
import DevicesIcon from "@mui/icons-material/Devices";
import HouseIcon from "@mui/icons-material/House";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Image from "next/image";
import HeaderButtonsMobile from "./HeaderButtonsMobile";
import FuzzySearchMobile from "./FuzzySearchMobile";
import CartItemsCountXs from "../../Cart/CartItemsCountXs";
import CastleIcon from "@mui/icons-material/Castle";
import BlenderIcon from "@mui/icons-material/Blender";

function HeaderXs() {
  const vHandleNavHomeButt = "handleNavHomeButt";
  //const vUserSessionButt = "userSessionButt";
  const vPermIdentityIconButt = "permIdentityIconButt";
  const vShoppingCartOutlinedIconButt = "shoppingCartOutlinedIconButt";
  const vMenuIconButt = "menuIconButt";

  const drawermenu = [
    {
      id: "1",
      title: "Acceuil",
      href: "/",
      icon: <ShoppingBasketIcon />,
    },
    {
      id: "2",
      title: "Tendences",
      href: "/shopByCategory/shopByCatXs/tendencesCat/",
      icon: <ShoppingBasketIcon />,
    },
    {
      id: "3",
      title: "Ventes Flash",
      href: "/shopByCategory/shopByCatXs/ventesFlashCat/",
      icon: <MonetizationOnIcon />,
    },

    {
      id: "4",
      title: "Bébés",
      href: "/shopByCategory/shopByCatXs/bebesCat/",
      icon: <ChildFriendlyIcon />,
    },

    {
      id: "5",
      title: "Hotels & Vacances",
      href: "/shopByCategory/shopByCatXs/hotelsVacCat/",
      icon: <LuggageIcon />,
    },
    {
      id: "6",
      title: "Restaurants",
      href: "/shopByCategory/shopByCatXs/restaurantCat/",
      icon: <RestaurantIcon />,
    },
    {
      id: "7",
      title: "Bien Être",
      href: "/shopByCategory/shopByCatXs/beauteSanteCat/",
      icon: <SpaIcon />,
    },
    {
      id: "8",
      title: "Mariages & Fêtes",
      href: "/shopByCategory/shopByCatXs/mariageFeteCat/",
      icon: <CelebrationIcon />,
    },
    {
      id: "9",
      title: "High-Tech",
      href: "/shopByCategory/shopByCatXs/highTechCat/",
      icon: <DevicesIcon />,
    },
    {
      id: "10",
      title: "Maisons & Jardins",
      href: "/shopByCategory/shopByCatXs/maisJardCat/",
      icon: <HouseIcon />,
    },
    {
      id: "11",
      title: "Antiquités",
      href: "/shopByCategory/shopByCatXs/antiquiteCat/",
      icon: <CastleIcon />,
    },

    {
      id: "12",
      title: "Electroménager",
      href: "/shopByCategory/shopByCatXs/electromgCat/",
      icon: <BlenderIcon />,
    },
    {
      id: "13",
      title: "Jouets & Jeux",
      href: "/shopByCategory/shopByCatXs/jouetJeuxCat/",
      icon: <SpaIcon />,
    },
    {
      id: "14",
      title: "Loisirs",
      href: "/shopByCategory/shopByCatXs/loisirsCat/",
      icon: <SpaIcon />,
    },
    {
      id: "15",
      title: "Mode",
      href: "/shopByCategory/shopByCatXs/modeCat/",
      icon: <SpaIcon />,
    },
    {
      id: "16",
      title: "Occasions",
      href: "/shopByCategory/shopByCatXs/occasionCat/",
      icon: <SpaIcon />,
    },
  ];

  //const drawerWidth = 240;

  return (
    <Box>
      <Box
        component="header"
        sx={{
          minHeight: "48px",
          boxSizing: "border-box",
          backgroundColor: "#fff",
          display: "flex",
          webkitBoxPack: "justify",
          justifyContent: "space-between",
          webkitBoxAlign: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            // minWidth: "66px",
            minWidth: "90px",
            webkitBoxOrdinalGroup: 2,
            order: 1,
            paddingLeft: "16px",
          }}
        >
          <Box
            component="span"
            sx={{
              margin: 0,
            }}
          >
            <HeaderButtonsMobile
              buttonName={vHandleNavHomeButt}
              drawermenu={drawermenu}
            >
              <Box
                // component="a"
                sx={{
                  ":link": {
                    textDecoration: "none",
                    color: "#111820",
                  },
                  ":focus": {
                    textDecoration: "none",
                    color: "#111820",
                  },
                  ":visited": {
                    textDecoration: "none",
                    color: "#111820",
                  },

                  position: "relative",
                  display: "block",
                  // height: "27px",
                  //width: "90px",
                  // width: "120px",
                  // width: "150px",
                  // height: "35px",
                  width: "120px",
                  height: "28px",
                  whiteSpace: "nowrap",
                  //text-indent: '-9999px',

                  ":-webkit-any-link": {
                    cursor: "pointer",
                  },
                }}
              >
                {/* <HeaderButtonsMobile
                buttonName={vHandleNavHomeButt}
                drawermenu={drawermenu}
              > */}
                <Image
                  src="/logopic.svg"
                  alt="logo"
                  //sizes="90px"
                  sizes="120px"
                  fill
                  priority={true}
                  style={{
                    objectFit: "contain",
                    // objectFit: "cover",
                  }}
                  /* sizes="100vw"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                  width={90}
                  height={27} */
                />
                {/* </HeaderButtonsMobile> */}
              </Box>
            </HeaderButtonsMobile>
          </Box>
        </Box>
        <Box
          sx={{
            webkitBoxOrdinalGroup: 3,
            order: 2,
          }}
        ></Box>
        <Box
          sx={{
            minWidth: "66px",
            webkitBoxOrdinalGroup: 4,
            order: 3,
          }}
        >
          {/*
          <Box
            // component="a"
            sx={{
              display: "inline-block",
              verticalAlign: "middle",
              padding: "14px 16px",

              "@media (min-width:210px) and (max-width: 270px)": {
                padding: "14px 4px",
              },
              "@media (max-width: 209px)": {
                padding: "14px 0px",
              },

              ":link": {
                textDecoration: "none",
                color: "#111820",
              },
              ":focus": {
                textDecoration: "none",
                color: "#111820",
              },
              ":visited": {
                textDecoration: "none",
                color: "#111820",
                position: "relative",
              },
              ":WebkitAnyLink": {
                cursor: "pointer",
              },
              //
              textDecoration: "none!important",
            }}
          >
            <HeaderButtonsMobile
              buttonName={vPermIdentityIconButt}
              drawermenu={drawermenu}
            >
              <PermIdentityIcon
                sx={{
                  pointerEvents: "none",
                  display: "inline-block",
                  verticalAlign: "middle",
                  //
                  color: "#111820 !important",
                }}
                aria-hidden="true"
                focusable="false"
              />
            </HeaderButtonsMobile>
          </Box>
          */}

          <Box
            //component="a"
            sx={{
              display: "inline-block",
              verticalAlign: "middle",
              padding: "14px 15px",

              "@media (min-width:210px) and (max-width: 270px)": {
                padding: "14px 4px",
              },
              "@media (max-width: 209px)": {
                padding: "14px 0px",
              },

              ":link": {
                textDecoration: "none",
                color: "#111820",
              },
              ":focus": {
                textDecoration: "none",
                color: "#111820",
              },
              ":visited": {
                textDecoration: "none",
                color: "#111820",
                position: "relative",
              },
              ":webkitAnyLink": {
                cursor: "pointer",
              },
              //
              textDecoration: "none!important",
            }}
          >
            <CartItemsCountXs />
            {/*  <HeaderButtonsMobile
              buttonName={vShoppingCartOutlinedIconButt}
              drawermenu={drawermenu}
            >
              <ShoppingCartOutlinedIcon
                sx={{
                  pointerEvents: "none",
                  display: "inline-block",
                  fill: "currentColor",
                  stroke: "currentColor",
                  strokeWidth: 0,
                  verticalAlign: "middle",

                  //
                  color: "#111820 !important",
                }}
                aria-hidden="true"
                focusable="false"
              />
            </HeaderButtonsMobile> */}

            <Box
              component="span"
              aria-live="polite"
              aria-label="Votre panier est vide"
            ></Box>
          </Box>
          {/*
          <Box
            //component="button"
            sx={{
              background: "transparent",
              border: 0,
              position: "relative",
              margin: 0,
              verticalAlign: "middle",
              display: "initial !important",
              color: "#111820",
              padding: "18px 16px",
              // padding: "18px 8px",
              "@media (min-width:210px) and (max-width: 270px)": {
                padding: "14px 4px",
              },
              "@media (max-width: 209px)": {
                padding: "14px 0px",
              },
              appearance: "auto",
              webkitWritingMode: "horizontal-tb !important",
              textRendering: "auto",
              letterSpacing: "normal",
              wordSpacing: "normal",
              textTransform: "none",
              textIndent: "0px",
              textShadow: "none",
              textAlign: "center",
              alignItems: "flex-start",
              cursor: "default",
              boxSizing: "border-box",
              webkitTextSizeAdjust: "none",
            }}
            //  onClick={handleDrawerToggle}
          > */}
          <HeaderButtonsMobile
            buttonName={vMenuIconButt}
            drawermenu={drawermenu}
          >
            <MenuIcon
              sx={{
                pointerEvents: "none",
                display: "inline-block",
                fill: "currentColor",
                stroke: "currentColor",
                strokeWidth: 0,
                verticalAlign: "middle",
              }}
              aria-hidden="true"
              focusable="false"
            />
          </HeaderButtonsMobile>
          {/* </Box> */}
        </Box>
      </Box>
      <FuzzySearchMobile>
        <SearchIcon
          sx={{
            backgroundColor: "#006efc",
            fill: "#fff",
            padding: "12px",

            boxSizing: "content-box",
            pointerEvents: "none",
            display: "inline-block",

            verticalAlign: "middle",
            //
            top: "10px",
            left: "12px",
            pointerEvents: "none",
            //  backgroundPosition: "-73px -239px",
            width: "27px",
            height: "25px",
            //WebkitFilter: "invert(100%)",
            cursor: "pointer",
            height: "20px",
          }}
          aria-hidden="true"
          focusable="false"
        />
      </FuzzySearchMobile>
      {/*
      <Box>
        <Box
          component="form"
          sx={{
            display: "block",
            position: "relative",
            margin: 0,
          }}
        >
          <Box
            sx={{
              transform: "translateZ(0)",
              opacity: 1,
              webkitTransition: "opacity 200ms ease-in-out",
              transition: "opacity 200ms ease-in-out",
            }}
          >
            <Box
              component="input"
              sx={{
                height: "1.5em",
                backgroundColor: "#fff",
                border: "solid 1px #111820",
                fontWeight: 400,
                borderRadius: 0,
                boxSizing: "border-box",
                //minHeight: "40px",
                minHeight: "48px",
                webkitAppearance: "none",
                color: "#111820",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                padding: "7px 48px 7px 17px",
                fontSize: "16px",
                width: "calc(100% - 32px)",
                margin: "8px 16px 16px",
                position: "relative",
                font: "inherit",
                webkitWritingMode: "horizontal-tb !important",
                textRendering: "auto",
                letterSpacing: "normal",
                wordSpacing: "normal",
                textTransform: "none",
                textIndent: "0px",
                textShadow: "none",
                display: "inline-block",
                textAlign: "start",
                webkitRtlOrdering: "logical",
                cursor: "text",
              }}
              maxLength="300"
              type="text"
              spellCheck="false"
              autoCorrect="off"
              autoCapitalize="off"
              autoComplete="off"
              placeholder="Rechercher sur eDimapromo"
              name="edp"
              aria-haspopup="false"
              aria-label="Rechercher sur eDimapromo"
            ></Box>
            <Box
              component="button"
              sx={{
                position: "absolute",
                zIndex: 100000,
                padding: 0,
                backgroundColor: "transparent",
                border: 0,
                top: "8px",
                right: "15px",
                boxSizing: "content-box",
                marginTop: 0,
                font: "inherit",
                margin: 0,
                textRendering: "auto",
                color: "-internal-light-dark(black, white)",
                letterSpacing: "normal",
                wordSpacing: "normal",
                textTransform: "none",
                textIndent: "0px",
                textShadow: "none",
                display: "inline-block",
                textAlign: "center",
                alignItems: "flex-start",
                cursor: "default",

                appearance: "auto",
                webkitWritingMode: "horizontal-tb !important",
              }}
              aria-label="Rechercher"
            >
              <SearchIcon
                sx={{
                  backgroundColor: "#006efc",
                  fill: "#fff",
                  padding: "12px",

                  boxSizing: "content-box",
                  pointerEvents: "none",
                  display: "inline-block",

                  verticalAlign: "middle",
                }}
                aria-hidden="true"
                focusable="false"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      */}
      {/*  <Box component="nav" aria-label="menu">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}

      {/* <HeaderButtonsMobile
          buttonName={vDrawer}
          drawermenu={drawermenu}
        ></HeaderButtonsMobile> */}

      {/*
        <Drawer
          // container={container}
          variant="temporary"
          // open={mobileOpen}
          // onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",

              width: "100%",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box> */}
    </Box>
  );
}

export default HeaderXs;
