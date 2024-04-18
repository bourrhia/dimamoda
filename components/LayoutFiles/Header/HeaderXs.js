import React from "react";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import SpaIcon from "@mui/icons-material/Spa";
import LuggageIcon from "@mui/icons-material/Luggage";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import CelebrationIcon from "@mui/icons-material/Celebration";
import DevicesIcon from "@mui/icons-material/Devices";
import HouseIcon from "@mui/icons-material/House";
import Image from "next/image";
import HeaderButtonsMobile from "./HeaderButtonsMobile";
import FuzzySearchMobile from "./FuzzySearchMobile";
import CartItemsCountXs from "../../Cart/CartItemsCountXs";
import CastleIcon from "@mui/icons-material/Castle";
import BlenderIcon from "@mui/icons-material/Blender";

function HeaderXs() {
  const vHandleNavHomeButt = "handleNavHomeButt";
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
                  width: "120px",
                  height: "28px",
                  whiteSpace: "nowrap",

                  ":-webkit-any-link": {
                    cursor: "pointer",
                  },
                }}
              >
                <Image
                  src="/logopic.svg"
                  alt="logo"
                  sizes="120px"
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
            boxSizing: "content-box",
            pointerEvents: "none",
            display: "inline-block",
            verticalAlign: "middle",
            top: "10px",
            left: "12px",
            pointerEvents: "none",
            width: "27px",
            height: "20px",
            cursor: "pointer",
          }}
          aria-hidden="true"
          focusable="false"
        />
      </FuzzySearchMobile>
    </Box>
  );
}

export default HeaderXs;
