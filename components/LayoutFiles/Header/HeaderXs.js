import React from "react";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Image from "next/image";
import HeaderButtonsMobile from "./HeaderButtonsMobile";
import FuzzySearchMobile from "./FuzzySearchMobile";
import CartItemsCountXs from "../../Cart/CartItemsCountXs";
import WomanIcon from "@mui/icons-material/Woman";
import GirlIcon from "@mui/icons-material/Girl";
import BoyIcon from "@mui/icons-material/Boy";
import ShopIcon from "@mui/icons-material/Shop";
import ManIcon from "@mui/icons-material/Man";
import PeopleIcon from "@mui/icons-material/People";

function HeaderXs() {
  const vHandleNavHomeButt = "handleNavHomeButt";
  const vMenuIconButt = "menuIconButt";

  const drawermenu = [
    {
      id: "1",
      title: "Acceuil",
      href: "/",
      icon: <ShopIcon />,
    },
    {
      id: "2",
      title: "Tendences",
      href: "/shopByCategory/shopByCatXs/tendencesCat",
      icon: <ShoppingBasketIcon />,
    },
    {
      id: "3",
      title: "Femme",
      href: "/shopByCategory/shopByCatXs/femmeCat",
      icon: <WomanIcon />,
    },

    {
      id: "4",
      title: "Homme",
      href: "/shopByCategory/shopByCatXs/hommeCat",
      icon: <ManIcon />,
    },

    {
      id: "5",
      title: "Fille",
      href: "/shopByCategory/shopByCatXs/filleCat",
      icon: <GirlIcon />,
    },
    {
      id: "6",
      title: "Garçon",
      href: "/shopByCategory/shopByCatXs/garconCat",
      icon: <BoyIcon />,
    },

    {
      id: "7",
      title: "Grandes tailles",
      href: "/shopByCategory/shopByCatXs/bigSizeCat",
      icon: <PeopleIcon />,
    },
  ];

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
            minWidth: "90px",
            webkitBoxOrdinalGroup: 2,
            order: 1,
            paddingLeft: "4px",
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
                  whiteSpace: "nowrap",

                  width: "90px",
                  height: "45px",

                  ":-webkit-any-link": {
                    cursor: "pointer",
                  },
                }}
              >
                <Image
                  src="/logodimalamode.svg"
                  alt="logo"
                  sizes="90px"
                  fill
                  priority={true}
                  style={{
                    objectFit: "contain",
                  }}
                />
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
          <Box
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

              textDecoration: "none!important",
            }}
          >
            <CartItemsCountXs />

            <Box
              component="span"
              aria-live="polite"
              aria-label="Votre panier est vide"
            ></Box>
          </Box>

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
        </Box>
      </Box>
      <FuzzySearchMobile>
        <SearchIcon
          sx={{
            backgroundColor: "#006efc",
            fill: "#fff",
            padding: "12px",
            height: "16px",
            width: "16px",
            boxSizing: "content-box",
            pointerEvents: "none",
            display: "inline-block",
            stroke: "currentColor",
            strokeWidth: 0,
            verticalAlign: "middle",
          }}
          aria-hidden="true"
          focusable="false"
        />
      </FuzzySearchMobile>
    </Box>
  );
}

export default HeaderXs;
