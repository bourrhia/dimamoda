//"use client";
//import React, { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import CelebrationIcon from "@mui/icons-material/Celebration";
import HouseIcon from "@mui/icons-material/House";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import CastleIcon from "@mui/icons-material/Castle";

import RestaurantIcon from "@mui/icons-material/Restaurant";
import LuggageIcon from "@mui/icons-material/Luggage";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import BlenderIcon from "@mui/icons-material/Blender";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Typography from "@mui/material/Typography";
//import { useRouter } from "next/router";
import HandlesNavBar from "./HandlesNavBar";
import MoreCategories from "./MoreCategories";

const NavBar = () => {
  /* //const [navarricon, setNavarricon] = useState(false);
  const [navplusmenu, setNavplusmenu] = useState(false);
  //const router = useRouter();

  const openPlusmenu = () => {
    setNavplusmenu(true);
    //  setNavarricon(true);
  };

  const closePlusmenu = () => {
    setNavplusmenu(false);
    // setNavarricon(false);
  };

  const handleClickAwayPlus = () => {
    setNavplusmenu(false);
    setNavarricon(false);
  }; */

  /* const handleNavHome = async () => {
    // setIsNavHome(true);

    try {
      await router.push({
        pathname: "/",
      });
    } catch (error) {
      // Handle any errors that might occur during navigation
    } finally {
      // setIsNavHome(false);
    }
  }; */

  /*const pluscategories = (
    <Box
      sx={{
        "@keyframes animateplus": {
          "0%": {
            opacity: 0,
          },

          "100%": {
            opacity: "1",
          },
        },

        right: "50%",
        //transform: "translateX(50%)",
        transform: "translateX(9%)",
        boxShadow: "0 4px 16px 0 rgb(0 0 0 / 20%)",
        // top: "32px",
        top: "22px",
        opacity: 1,
        visibility: "visible",
        pointerEvents: "auto",
        // animation: "animplus .3s ease forwards",
        animation: "animateplus .3s ease forwards",
        borderRadius: "3px",
        maxWidth: "240px",
        marginTop: "6px",
        background: "#fff",
        position: "absolute",
        minWidth: "240px",
        color: "#212121",
        fontSize: "14px",
        fontWeight: 400,
        borderColor: "#f0f0f0",
        textAlign: "left",
        // zIndex: 19,
        zIndex: 40,
        transition: "opacity .3s ease-in-out",
        //
        // marginRight: "64px",
        //marginRight: "auto",
      }}
    >
      <Box
        sx={{
          left: "50%",
          //  transform: "translateX(-10px)",
          transform: "translateX(89px)",
          bottom: "100%",
          borderBottomColor: "#f0f0f0",
          borderWidth: "10px",
          opacity: 1,
          visibility: "visible",
          pointerEvents: "auto",

          "&::after": {
            content: '""',
            width: 0,
            height: 0,
            border: "solid transparent",
            position: "absolute",
            borderBottomColor: "#fff",
            borderWidth: "8px",
            //transform: "translateX(-8px)",
            transform: "translateX(112px)",
            // bottom: "-10px",
            bottom: "0px",
            left: 0,
            width: 0,
            height: 0,
            border: "solid transparent",
            position: "absolute",
            //
            borderLeft: "10px solid transparent",
            borderRight: "10px solid transparent",
            borderBottom: "10px solid #fff",
          },
        }}
      ></Box>
      <Box
        sx={{
          padding: "16px",
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            margin: "-16px",
          }}
        >
          <Box
            component="ul"
            sx={{
              textAlign: "left",
              fontSize: "14px",
              lineHeight: "18px",
              fontWeight: "400",
              color: "#212121",
              //
              margin: 0,
              padding: 0,
            }}
          >
            <Box
              component="li"
              sx={(theme) => ({
                borderBottom: "1px solid #f0f0f0",
                listStyle: "none",
                display: "list-item",
                textAlign: "-webkit-match-parent",
                boxSizing: "border-box",
                margin: 0,
                padding: 0,
                [theme.breakpoints.up(751)]: {
                  display: "none",
                },
                ":hover": {
                  backgroundColor: "#f1f3f6",
                },
              })}
            >
              <Box
                component="a"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  padding: "16px 12px",
                  textDecoration: "none",
                  color: "inherit",
                  border: "none",
                  outline: "none",
                  boxSizing: "border-box",
                  margin: 0,
                  ":-webkit-any-link": {
                    cursor: "pointer",
                  },
                }}
              >
                <RestaurantIcon
                  fontSize="small"
                  sx={{
                    color: "#2874f0",
                  }}
                ></RestaurantIcon>
                <Box
                  sx={{
                    textTransform: "none",
                    marginLeft: "12px",
                    fontWeight: "bold",
                  }}
                >
                  <Typography variant="subtitle2"> Restaurants</Typography>
                </Box>
              </Box>
            </Box>
            <Box
              component="li"
              sx={(theme) => ({
                borderBottom: "1px solid #f0f0f0",
                listStyle: "none",
                display: "list-item",
                textAlign: "-webkit-match-parent",
                boxSizing: "border-box",
                margin: 0,
                padding: 0,
                [theme.breakpoints.up(827)]: {
                  display: "none",
                },
                ":hover": {
                  backgroundColor: "#f1f3f6",
                },
              })}
            >
              <Box
                component="a"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  padding: "16px 12px",
                  textDecoration: "none",
                  color: "inherit",
                  border: "none",
                  outline: "none",
                  boxSizing: "border-box",
                  margin: 0,
                  ":-webkit-any-link": {
                    cursor: "pointer",
                  },
                }}
              >
                <LuggageIcon
                  fontSize="small"
                  sx={{
                    color: "#2874f0",
                  }}
                ></LuggageIcon>
                <Box
                  sx={{
                    textTransform: "none",
                    marginLeft: "12px",
                    fontWeight: "bold",
                  }}
                >
                  <Typography variant="subtitle2">Hotels & Vacances</Typography>
                </Box>
              </Box>
            </Box>
            <Box
              component="li"
              sx={(theme) => ({
                borderBottom: "1px solid #f0f0f0",
                listStyle: "none",
                display: "list-item",
                textAlign: "-webkit-match-parent",
                boxSizing: "border-box",
                margin: 0,
                padding: 0,
                [theme.breakpoints.up(975)]: {
                  display: "none",
                },
                ":hover": {
                  backgroundColor: "#f1f3f6",
                },
              })}
            >
              <Box
                component="a"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  padding: "16px 12px",
                  textDecoration: "none",
                  color: "inherit",
                  border: "none",
                  outline: "none",
                  boxSizing: "border-box",
                  margin: 0,
                  ":-webkit-any-link": {
                    cursor: "pointer",
                  },
                }}
              >
                <BlenderIcon
                  fontSize="small"
                  sx={{
                    color: "#2874f0",
                  }}
                ></BlenderIcon>
                <Box
                  sx={{
                    textTransform: "none",
                    marginLeft: "12px",
                    fontWeight: "bold",
                  }}
                >
                  <Typography variant="subtitle2">Electromenager</Typography>
                </Box>
              </Box>
            </Box>
            <Box
              component="li"
              sx={(theme) => ({
                borderBottom: "1px solid #f0f0f0",
                listStyle: "none",
                display: "list-item",
                textAlign: "-webkit-match-parent",
                boxSizing: "border-box",
                margin: 0,
                padding: 0,
                [theme.breakpoints.up(1120)]: {
                  display: "none",
                },
                ":hover": {
                  backgroundColor: "#f1f3f6",
                },
              })}
            >
              <Box
                component="a"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  padding: "16px 12px",
                  textDecoration: "none",
                  color: "inherit",
                  border: "none",
                  outline: "none",
                  boxSizing: "border-box",
                  margin: 0,
                  ":-webkit-any-link": {
                    cursor: "pointer",
                  },
                }}
              >
                <SportsEsportsIcon
                  fontSize="small"
                  sx={{
                    color: "#2874f0",
                  }}
                ></SportsEsportsIcon>
                <Box
                  sx={{
                    textTransform: "none",
                    marginLeft: "12px",
                    fontWeight: "bold",
                  }}
                >
                  <Typography variant="subtitle2"> Jouets et Jeux</Typography>
                </Box>
              </Box>
            </Box>
            <Box
              component="li"
              sx={(theme) => ({
                borderBottom: "1px solid #f0f0f0",
                listStyle: "none",
                display: "list-item",
                textAlign: "-webkit-match-parent",
                boxSizing: "border-box",
                margin: 0,
                padding: 0,
                [theme.breakpoints.up(1200)]: {
                  display: "none",
                },
                ":hover": {
                  backgroundColor: "#f1f3f6",
                },
              })}
            >
              <Box
                component="a"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  padding: "16px 12px",
                  textDecoration: "none",
                  color: "inherit",
                  border: "none",
                  outline: "none",
                  boxSizing: "border-box",
                  margin: 0,
                  ":-webkit-any-link": {
                    cursor: "pointer",
                  },
                }}
              >
                <ChildFriendlyIcon
                  fontSize="small"
                  sx={{
                    color: "#2874f0",
                  }}
                ></ChildFriendlyIcon>
                <Box
                  sx={{
                    textTransform: "none",
                    marginLeft: "12px",
                    fontWeight: "bold",
                  }}
                >
                  <Typography variant="subtitle2">Bébés</Typography>
                </Box>
              </Box>
            </Box>
            <Box
              component="li"
              sx={(theme) => ({
                borderBottom: "1px solid #f0f0f0",
                listStyle: "none",
                display: "list-item",
                textAlign: "-webkit-match-parent",
                boxSizing: "border-box",
                margin: 0,
                padding: 0,
                [theme.breakpoints.up(1200)]: {
                  display: "none",
                },
                ":hover": {
                  backgroundColor: "#f1f3f6",
                },
              })}
            >
              <Box
                component="a"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  padding: "16px 12px",
                  textDecoration: "none",
                  color: "inherit",
                  border: "none",
                  outline: "none",
                  boxSizing: "border-box",
                  margin: 0,
                  ":-webkit-any-link": {
                    cursor: "pointer",
                  },
                }}
              >
                <HouseIcon
                  fontSize="small"
                  sx={{
                    color: "#2874f0",
                  }}
                ></HouseIcon>
                <Box
                  sx={{
                    textTransform: "none",
                    marginLeft: "12px",
                    fontWeight: "bold",
                  }}
                >
                  <Typography variant="subtitle2">Maisons & Jardins</Typography>
                </Box>
              </Box>
            </Box>
            <Box
              component="li"
              sx={{
                borderBottom: "1px solid #f0f0f0",
                listStyle: "none",
                display: "list-item",
                textAlign: "-webkit-match-parent",
                boxSizing: "border-box",
                margin: 0,
                padding: 0,
                ":hover": {
                  backgroundColor: "#f1f3f6",
                },
              }}
            >
              <Box
                component="a"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  padding: "16px 12px",
                  textDecoration: "none",
                  color: "inherit",
                  border: "none",
                  outline: "none",
                  boxSizing: "border-box",
                  margin: 0,
                  ":-webkit-any-link": {
                    cursor: "pointer",
                  },
                }}
              >
                <DirectionsBikeIcon
                  fontSize="small"
                  sx={{
                    color: "#2874f0",
                  }}
                ></DirectionsBikeIcon>
                <Box
                  sx={{
                    textTransform: "none",
                    marginLeft: "12px",
                    fontWeight: "bold",
                  }}
                >
                  <Typography variant="subtitle2"> Loisirs</Typography>
                </Box>
              </Box>
            </Box>
            <Box
              component="li"
              sx={{
                borderBottom: "1px solid #f0f0f0",
                listStyle: "none",
                display: "list-item",
                textAlign: "-webkit-match-parent",
                boxSizing: "border-box",
                margin: 0,
                padding: 0,
                ":hover": {
                  backgroundColor: "#f1f3f6",
                },
              }}
            >
              <Box
                component="a"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  padding: "16px 12px",
                  textDecoration: "none",
                  color: "inherit",
                  border: "none",
                  outline: "none",
                  boxSizing: "border-box",
                  margin: 0,
                  ":-webkit-any-link": {
                    cursor: "pointer",
                  },
                }}
              >
                <CelebrationIcon
                  fontSize="small"
                  sx={{
                    color: "#2874f0",
                  }}
                ></CelebrationIcon>
                <Box
                  sx={{
                    textTransform: "none",
                    marginLeft: "12px",
                    fontWeight: "bold",
                  }}
                >
                  <Typography variant="subtitle2"> Mariages & Fêtes</Typography>
                </Box>
              </Box>
            </Box>
            <Box
              component="li"
              sx={{
                borderBottom: "1px solid #f0f0f0",
                listStyle: "none",
                display: "list-item",
                textAlign: "-webkit-match-parent",
                boxSizing: "border-box",
                margin: 0,
                padding: 0,
                ":hover": {
                  backgroundColor: "#f1f3f6",
                },
              }}
            >
              <Box
                component="a"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  padding: "16px 12px",
                  textDecoration: "none",
                  color: "inherit",
                  border: "none",
                  outline: "none",
                  boxSizing: "border-box",
                  margin: 0,
                  ":-webkit-any-link": {
                    cursor: "pointer",
                  },
                }}
              >
                <CastleIcon
                  fontSize="small"
                  sx={{
                    color: "#2874f0",
                  }}
                ></CastleIcon>
                <Box
                  sx={{
                    textTransform: "none",
                    marginLeft: "12px",
                    fontWeight: "bold",
                  }}
                >
                  <Typography variant="subtitle2">Antiquités</Typography>
                </Box>
              </Box>
            </Box>
            <Box
              component="li"
              sx={{
                borderBottom: "1px solid #f0f0f0",
                listStyle: "none",
                display: "list-item",
                textAlign: "-webkit-match-parent",
                boxSizing: "border-box",
                margin: 0,
                padding: 0,
                ":hover": {
                  backgroundColor: "#f1f3f6",
                },
              }}
            >
              <Box
                component="a"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  padding: "16px 12px",
                  textDecoration: "none",
                  color: "inherit",
                  border: "none",
                  outline: "none",
                  boxSizing: "border-box",
                  margin: 0,
                  ":-webkit-any-link": {
                    cursor: "pointer",
                  },
                }}
              >
                <CardGiftcardIcon
                  fontSize="small"
                  sx={{
                    color: "#2874f0",
                  }}
                ></CardGiftcardIcon>
                <Box
                  sx={{
                    textTransform: "none",
                    marginLeft: "12px",
                    fontWeight: "bold",
                  }}
                >
                  <Typography variant="subtitle2">Occasions</Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );*/

  return (
    <Box
      sx={{
        display: { xs: "none", sm: "block" },
        borderBottom: "solid 1px #ddd",
        borderTop: "solid 1px #ddd",
        //color: "#555",
        color: "#111820",
        fontWeight: "normal",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "12px",
        maxWidth: "1312px",
        position: "relative",
        textAlign: "center",
        // textAlign: "start",
        // color: "#111820",
        //
      }}
    >
      <HandlesNavBar>
        <MoreCategories />
      </HandlesNavBar>
    </Box>
  );
};

export default NavBar;
