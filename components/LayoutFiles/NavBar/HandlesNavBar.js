"use client";
import React, { useState, useEffect } from "react";
//import * as React from "react";
import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { useRouter } from "next/navigation";
import CircularProgress from "@mui/material/CircularProgress";

const HandlesNavBar = ({ children }) => {
  const router = useRouter();

  const [navplusmenu, setNavplusmenu] = useState(false);
  const [navTendences, setNavTendences] = useState(false);
  const [navHome, setNavHome] = useState(false);
  const [navVenteFlash, setNavVenteFlash] = useState(false);
  const [navHighTec, setNavHighTec] = useState(false);
  const [navAntiquite, setNavAntiquite] = useState(false);
  const [navBeauteSante, setNavBeauteSante] = useState(false);
  const [navBebes, setNavBebes] = useState(false);
  const [navElectromg, setNavElectromg] = useState(false);
  const [navHotelsVac, setNavHotelsVac] = useState(false);
  const [navJouetJeux, setNavJouetJeux] = useState(false);
  const [navLoisirs, setNavLoisirs] = useState(false);
  const [navMaisJard, setNavMaisJard] = useState(false);
  const [navMariageFete, setNavMariageFete] = useState(false);
  const [navMode, setNavMode] = useState(false);
  const [navOccasion, setNavOccasion] = useState(false);
  const [navRestaurant, setNavRestaurant] = useState(false);

  const openPlusmenu = () => {
    setNavplusmenu(true);
  };

  const closePlusmenu = () => {
    setNavplusmenu(false);
  };

  const handleClickAwayPlus = () => {
    setNavplusmenu(false);
  };

  const handleTouchStart = () => {
    setNavplusmenu(true);
  };

  const handleTouchMove = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.touches[0].clientX;
    const y = event.touches[0].clientY;
    if (x < rect.left || x >= rect.right || y < rect.top || y >= rect.bottom) {
      setNavplusmenu(false);
    }
  };

  const handleTouchEnd = () => {
    setNavplusmenu(false);
  };

  const handleNavHome = async () => {
    try {
      setNavHome(true);
      router.prefetch("/");
      router.push("/");
    } catch (error) {
      // Handle any errors that might occur during navigation
    } finally {
      setNavHome(false);
    }
  };

  const handleNavTendences = async () => {
    try {
      setNavTendences(true);
      router.prefetch("/shopByCategory/shopByCatUpSm/tendencesCat/");
      router.push("/shopByCategory/shopByCatUpSm/tendencesCat/");
    } catch (error) {
      // Handle any errors that might occur during navigation
    } finally {
      setNavTendences(false);
    }
  };

  const handleNavVentesFlash = async () => {
    try {
      setNavVenteFlash(true);
      router.prefetch("/shopByCategory/shopByCatUpSm/ventesFlashCat/");
      router.push("/shopByCategory/shopByCatUpSm/ventesFlashCat/");
    } catch (error) {
      // Handle any errors that might occur during navigation
    } finally {
      setNavVenteFlash(false);
    }
  };

  //////////////////////////////////////////////

  const handleNavAntq = async () => {
    try {
      setNavAntiquite(true);
      router.prefetch("/shopByCategory/shopByCatUpSm/antiquiteCat/");
      router.push("/shopByCategory/shopByCatUpSm/antiquiteCat/");
    } catch (error) {
      // Handle any errors that might occur during navigation
    } finally {
      setNavAntiquite(false);
    }
  };

  const handleNavBtSt = async () => {
    try {
      setNavBeauteSante(true);
      router.prefetch("/shopByCategory/shopByCatUpSm/beauteSanteCat/");
      router.push("/shopByCategory/shopByCatUpSm/beauteSanteCat/");
    } catch (error) {
      // Handle any errors that might occur during navigation
    } finally {
      setNavBeauteSante(false);
    }
  };

  const handleNavBebes = async () => {
    try {
      setNavBebes(true);
      router.prefetch("/shopByCategory/shopByCatUpSm/bebesCat/");
      router.push("/shopByCategory/shopByCatUpSm/bebesCat/");
    } catch (error) {
      // Handle any errors that might occur during navigation
    } finally {
      setNavBebes(false);
    }
  };

  const handleNavElecmg = async () => {
    try {
      setNavElectromg(true);
      router.prefetch("/shopByCategory/shopByCatUpSm/electromgCat/");
      router.push("/shopByCategory/shopByCatUpSm/electromgCat/");
    } catch (error) {
      // Handle any errors that might occur during navigation
    } finally {
      setNavElectromg(false);
    }
  };

  const handleNavHighTec = async () => {
    try {
      setNavHighTec(true);
      router.prefetch("/shopByCategory/shopByCatUpSm/highTechCat/");
      router.push("/shopByCategory/shopByCatUpSm/highTechCat/");
    } catch (error) {
      // Handle any errors that might occur during navigation
    } finally {
      setNavHighTec(false);
    }
  };

  const handleNavHotVac = async () => {
    try {
      setNavHotelsVac(true);
      router.prefetch("/shopByCategory/shopByCatUpSm/hotelsVacCat/");
      router.push("/shopByCategory/shopByCatUpSm/hotelsVacCat/");
    } catch (error) {
      // Handle any errors that might occur during navigation
    } finally {
      setNavHotelsVac(false);
    }
  };

  const handleNavJouJeu = async () => {
    try {
      setNavJouetJeux(true);
      router.prefetch("/shopByCategory/shopByCatUpSm/jouetJeuxCat/");
      router.push("/shopByCategory/shopByCatUpSm/jouetJeuxCat/");
    } catch (error) {
      // Handle any errors that might occur during navigation
    } finally {
      setNavJouetJeux(false);
    }
  };

  const handleNavLoisirs = async () => {
    try {
      setNavLoisirs(true);
      router.prefetch("/shopByCategory/shopByCatUpSm/loisirsCat/");
      router.push("/shopByCategory/shopByCatUpSm/loisirsCat/");
    } catch (error) {
      // Handle any errors that might occur during navigation
    } finally {
      setNavLoisirs(false);
    }
  };

  const handleNavMaisJar = async () => {
    try {
      setNavMaisJard(true);
      router.prefetch("/shopByCategory/shopByCatUpSm/maisJardCat/");
      router.push("/shopByCategory/shopByCatUpSm/maisJardCat/");
    } catch (error) {
      // Handle any errors that might occur during navigation
    } finally {
      setNavMaisJard(false);
    }
  };

  const handleNavMarFet = async () => {
    try {
      setNavMariageFete(true);
      router.prefetch("/shopByCategory/shopByCatUpSm/mariageFeteCat/");
      router.push("/shopByCategory/shopByCatUpSm/mariageFeteCat/");
    } catch (error) {
      // Handle any errors that might occur during navigation
    } finally {
      setNavMariageFete(false);
    }
  };

  const handleNavMode = async () => {
    try {
      setNavMode(true);
      router.prefetch("/shopByCategory/shopByCatUpSm/modeCat/");
      router.push("/shopByCategory/shopByCatUpSm/modeCat/");
    } catch (error) {
      // Handle any errors that might occur during navigation
    } finally {
      setNavMode(false);
    }
  };

  const handleNavOcas = async () => {
    try {
      setNavOccasion(true);
      router.prefetch("/shopByCategory/shopByCatUpSm/occasionCat/");
      router.push("/shopByCategory/shopByCatUpSm/occasionCat/");
    } catch (error) {
      // Handle any errors that might occur during navigation
    } finally {
      setNavOccasion(false);
    }
  };

  const handleNavRest = async () => {
    try {
      setNavRestaurant(true);
      router.prefetch("/shopByCategory/shopByCatUpSm/restaurantCat/");
      router.push("/shopByCategory/shopByCatUpSm/restaurantCat/");
    } catch (error) {
      // Handle any errors that might occur during navigation
    } finally {
      setNavRestaurant(false);
    }
  };

  //////////////////////////////////////////////

  const ShowLoading = () => {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //position: "fixed",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: "99999",
        }}
      >
        <CircularProgress size={40} />
      </Box>
    );
  };

  return (
    <>
      {(navTendences ||
        navHome ||
        navVenteFlash ||
        navHighTec ||
        navAntiquite ||
        navBeauteSante ||
        navBebes ||
        navElectromg ||
        navHotelsVac ||
        navJouetJeux ||
        navLoisirs ||
        navMaisJard ||
        navMariageFete ||
        navMode ||
        navOccasion ||
        navRestaurant) && <ShowLoading />}

      <Box
        component="ul"
        // onMouseDown={closePlusmenu}
        sx={{
          whiteSpace: "nowrap",
          position: "relative",
          fontSize: "12px",
          marginBottom: 0,
          marginTop: 0,
          paddingLeft: 0,
          //
          // marginLeft: "20px",
          // backgroundColor: "#00a0e3",
          backgroundColor: "rgba(0,0,0,0.02)",
        }}
      >
        <Box
          component="li"
          sx={{
            borderLeft: "solid 1px transparent",
            borderRight: "solid 1px transparent",
            boxSizing: "border-box",
            display: "inline-block",
            marginBottom: "-1px",
            lineHeight: "16px",
            padding: "9px 12px 9px",
          }}
        >
          <Box
            component="a"
            onClick={(e) => {
              e.preventDefault();
              handleNavHome();
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              handleNavHome();
            }}
            sx={{
              borderBottom: "solid 2px #555",
              color: "#333",
              fontWeight: "bold",
              paddingBottom: "7px",

              cursor: "pointer",

              ":-webkit-any-link": {
                cursor: "pointer",
              },

              backgroundColor: "transparent",
              borderTop: "none",
              borderLeft: "none",
              borderRight: "none",
              borderBottom: "solid 2px #555",
              outline: 0,
            }}
          >
            Acceuil
          </Box>
        </Box>
        <Box
          component="li"
          sx={{
            borderLeft: "solid 1px transparent",
            borderRight: "solid 1px transparent",
            boxSizing: "border-box",
            display: "inline-block",
            marginBottom: "-1px",
            lineHeight: "16px",
            padding: "9px 12px 9px",
          }}
        >
          <Box
            component="a"
            onClick={(e) => {
              e.preventDefault();
              handleNavTendences();
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              handleNavTendences();
            }}
            sx={{
              color: "#111820",
              textDecoration: "none",
              cursor: "pointer",
              fontWeight: "bold",

              ":hover": {
                textDecoration: "underline",
                color: "#0654ba",
              },

              ":-webkit-any-link": {
                cursor: "pointer",
              },
            }}
          >
            Tendences
          </Box>
        </Box>
        <Box
          component="li"
          sx={{
            borderLeft: "solid 1px transparent",
            borderRight: "solid 1px transparent",
            boxSizing: "border-box",
            display: "inline-block",
            marginBottom: "-1px",
            lineHeight: "16px",
            padding: "9px 12px 9px",
          }}
        >
          <Box
            component="a"
            onClick={(e) => {
              e.preventDefault();
              handleNavVentesFlash();
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              handleNavVentesFlash();
            }}
            sx={{
              color: "#111820",
              textDecoration: "none",
              cursor: "pointer",
              fontWeight: "bold",

              ":hover": {
                textDecoration: "underline",
                color: "#0654ba",
              },

              ":-webkit-any-link": {
                cursor: "pointer",
              },
            }}
          >
            Ventes Flash
          </Box>
        </Box>
        <Box
          component="li"
          sx={{
            borderLeft: "solid 1px transparent",
            borderRight: "solid 1px transparent",
            boxSizing: "border-box",
            display: "inline-block",
            marginBottom: "-1px",
            lineHeight: "16px",
            padding: "9px 12px 9px",
          }}
        >
          <Box
            component="a"
            onClick={(e) => {
              e.preventDefault();
              handleNavMode();
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              handleNavMode();
            }}
            sx={{
              color: "#111820",
              textDecoration: "none",
              cursor: "pointer",
              fontWeight: "bold",

              ":hover": {
                textDecoration: "underline",
                color: "#0654ba",
              },

              ":-webkit-any-link": {
                cursor: "pointer",
              },
            }}
          >
            Mode
          </Box>
        </Box>
        <Box
          component="li"
          sx={{
            borderLeft: "solid 1px transparent",
            borderRight: "solid 1px transparent",
            boxSizing: "border-box",
            display: "inline-block",
            marginBottom: "-1px",
            lineHeight: "16px",
            padding: "9px 12px 9px",
          }}
        >
          <Box
            component="a"
            onClick={(e) => {
              e.preventDefault();
              handleNavBtSt();
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              handleNavBtSt();
            }}
            sx={{
              color: "#111820",
              textDecoration: "none",
              cursor: "pointer",
              fontWeight: "bold",

              ":hover": {
                textDecoration: "underline",
                color: "#0654ba",
              },

              ":-webkit-any-link": {
                cursor: "pointer",
              },
            }}
          >
            Beauté & santé
          </Box>
        </Box>

        <Box
          component="li"
          sx={{
            borderLeft: "solid 1px transparent",
            borderRight: "solid 1px transparent",
            boxSizing: "border-box",
            display: "inline-block",
            marginBottom: "-1px",
            lineHeight: "16px",
            padding: "9px 12px 9px",
          }}
        >
          <Box
            component="a"
            onClick={(e) => {
              e.preventDefault();
              handleNavHighTec();
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              handleNavHighTec();
            }}
            sx={{
              color: "#111820",
              textDecoration: "none",
              cursor: "pointer",
              fontWeight: "bold",

              ":hover": {
                textDecoration: "underline",
                color: "#0654ba",
              },

              ":-webkit-any-link": {
                cursor: "pointer",
              },
            }}
          >
            High Tech
          </Box>
        </Box>

        <Box
          component="li"
          sx={(theme) => ({
            borderLeft: "solid 1px transparent",
            borderRight: "solid 1px transparent",
            boxSizing: "border-box",
            display: "inline-block",
            marginBottom: "-1px",
            lineHeight: "16px",
            padding: "9px 12px 9px",
            [theme.breakpoints.down(751)]: {
              display: "none",
            },
          })}
        >
          <Box
            component="a"
            onClick={(e) => {
              e.preventDefault();
              handleNavRest();
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              handleNavRest();
            }}
            sx={{
              color: "#111820",
              textDecoration: "none",
              cursor: "pointer",
              fontWeight: "bold",

              ":hover": {
                textDecoration: "underline",
                color: "#0654ba",
              },

              ":-webkit-any-link": {
                cursor: "pointer",
              },
            }}
          >
            Restaurants
          </Box>
        </Box>

        <Box
          component="li"
          sx={(theme) => ({
            borderLeft: "solid 1px transparent",
            borderRight: "solid 1px transparent",
            boxSizing: "border-box",
            display: "inline-block",
            marginBottom: "-1px",
            lineHeight: "16px",
            padding: "9px 12px 9px",
            [theme.breakpoints.down(827)]: {
              display: "none",
            },
          })}
        >
          <Box
            component="a"
            onClick={(e) => {
              e.preventDefault();
              handleNavHotVac();
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              handleNavHotVac();
            }}
            sx={{
              color: "#111820",
              textDecoration: "none",
              cursor: "pointer",
              fontWeight: "bold",

              ":hover": {
                textDecoration: "underline",
                color: "#0654ba",
              },

              ":-webkit-any-link": {
                cursor: "pointer",
              },
            }}
          >
            Hotels & Vacances
          </Box>
        </Box>
        <Box
          component="li"
          sx={(theme) => ({
            borderLeft: "solid 1px transparent",
            borderRight: "solid 1px transparent",
            boxSizing: "border-box",
            display: "inline-block",
            marginBottom: "-1px",
            lineHeight: "16px",
            padding: "9px 12px 9px",
            [theme.breakpoints.down(975)]: {
              display: "none",
            },
          })}
        >
          <Box
            component="a"
            onClick={(e) => {
              e.preventDefault();
              handleNavElecmg();
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              handleNavElecmg();
            }}
            sx={{
              color: "#111820",
              textDecoration: "none",
              cursor: "pointer",
              fontWeight: "bold",

              ":hover": {
                textDecoration: "underline",
                color: "#0654ba",
              },

              ":-webkit-any-link": {
                cursor: "pointer",
              },
            }}
          >
            Electroménager
          </Box>
        </Box>
        <Box
          component="li"
          sx={(theme) => ({
            borderLeft: "solid 1px transparent",
            borderRight: "solid 1px transparent",
            boxSizing: "border-box",
            display: "inline-block",
            marginBottom: "-1px",
            lineHeight: "16px",
            padding: "9px 12px 9px",
            [theme.breakpoints.down(1120)]: {
              display: "none",
            },
          })}
        >
          <Box
            component="a"
            onClick={(e) => {
              e.preventDefault();
              handleNavJouJeu();
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              handleNavJouJeu();
            }}
            sx={{
              color: "#111820",
              textDecoration: "none",
              cursor: "pointer",
              fontWeight: "bold",

              ":hover": {
                textDecoration: "underline",
                color: "#0654ba",
              },

              ":-webkit-any-link": {
                cursor: "pointer",
              },
            }}
          >
            Jouets & Jeux
          </Box>
        </Box>

        <Box
          component="li"
          sx={(theme) => ({
            borderLeft: "solid 1px transparent",
            borderRight: "solid 1px transparent",
            boxSizing: "border-box",
            display: "inline-block",
            marginBottom: "-1px",
            lineHeight: "16px",
            padding: "9px 12px 9px",
            [theme.breakpoints.down(1200)]: {
              display: "none",
            },
          })}
        >
          <Box
            component="a"
            onClick={(e) => {
              e.preventDefault();
              handleNavBebes();
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              handleNavBebes();
            }}
            sx={{
              color: "#111820",
              textDecoration: "none",
              cursor: "pointer",
              fontWeight: "bold",

              ":hover": {
                textDecoration: "underline",
                color: "#0654ba",
              },

              ":-webkit-any-link": {
                cursor: "pointer",
              },
            }}
          >
            Bébés
          </Box>
        </Box>

        <Box
          component="li"
          sx={(theme) => ({
            borderLeft: "solid 1px transparent",
            borderRight: "solid 1px transparent",
            boxSizing: "border-box",
            display: "inline-block",
            marginBottom: "-1px",
            lineHeight: "16px",
            padding: "9px 12px 9px",
            [theme.breakpoints.down(1200)]: {
              display: "none",
            },
          })}
        >
          <Box
            component="a"
            onClick={(e) => {
              e.preventDefault();
              handleNavMaisJar();
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              handleNavMaisJar();
            }}
            sx={{
              color: "#111820",
              textDecoration: "none",
              cursor: "pointer",
              fontWeight: "bold",

              ":hover": {
                textDecoration: "underline",
                color: "#0654ba",
              },

              ":-webkit-any-link": {
                cursor: "pointer",
              },
            }}
          >
            Maisons & Jardins
          </Box>
        </Box>

        <ClickAwayListener onClickAway={handleClickAwayPlus}>
          <Box
            component="li"
            onMouseLeave={closePlusmenu}
            onTouchMove={handleTouchMove}
            onTouchEnd={closePlusmenu}
            sx={{
              borderLeft: "solid 1px transparent",
              borderRight: "solid 1px transparent",
              boxSizing: "border-box",
              display: "inline-block",
              marginBottom: "-1px",
              lineHeight: "16px",
              padding: "9px 12px 9px",
            }}
          >
            <Box
              component="a"
              onMouseEnter={openPlusmenu}
              onClick={openPlusmenu}
              onMouseOver={openPlusmenu}
              onTouchEnd={openPlusmenu}
              onTouchStart={openPlusmenu}
              sx={{
                color: "#111820",
                textDecoration: "none",
                cursor: "pointer",

                "&:hover": {
                  // textDecoration: "underline",
                  color: "#0654ba",
                },

                ":-webkit-any-link": {
                  cursor: "pointer",
                },
                //
                //  width: "100%",
                maxWidth: "100%",
                overflow: "hidden",
              }}
            >
              <Box
                //component="span"
                sx={{
                  cursor: "pointer",
                  display: "inline-block",
                  position: "relative",
                }}
              >
                <Box>
                  <Box
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    Plus
                    {!navplusmenu ? (
                      <KeyboardArrowDownIcon
                        sx={{
                          fill: "currentColor",
                          pointerEvents: "none",
                          stroke: "currentColor",
                          strokeWidth: 0,
                          verticalAlign: "middle",
                          // marginLeft: "2px",
                        }}
                        fontSize="small"
                      ></KeyboardArrowDownIcon>
                    ) : (
                      <KeyboardArrowUpIcon
                        fontSize="small"
                        sx={{
                          fill: "currentColor",
                          pointerEvents: "none",
                          stroke: "currentColor",
                          strokeWidth: 0,
                          verticalAlign: "middle",
                          // marginLeft: "2px",
                        }}
                      ></KeyboardArrowUpIcon>
                    )}
                  </Box>
                </Box>
                {Boolean(navplusmenu) && <>{children}</>}
              </Box>
            </Box>
          </Box>
        </ClickAwayListener>
      </Box>
    </>
  );
};

export default HandlesNavBar;
