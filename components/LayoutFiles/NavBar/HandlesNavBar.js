"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";
import ShowLoading from "../../Loading/ShowLoading";
import { usePathname } from "next/navigation";

const HandlesNavBar = ({ children }) => {
  const router = useRouter();

  const currentPath = usePathname();

  const [navHome, setNavHome] = useState(false);
  const [navTendences, setNavTendences] = useState(false);
  const [navHomme, setNavHomme] = useState(false);
  const [navFemme, setNavFemme] = useState(false);
  const [navFille, setNavFille] = useState(false);
  const [navGarcon, setNavGarcon] = useState(false);

  const menuItems = [
    { label: "Acceuil", path: "/", onClick: () => handleNavHome() },
    {
      label: "Tendences",
      path: "/shopByCategory/shopByCatUpSm/tendencesCat",
      onClick: () => handleNavTendences(),
    },
    {
      label: "Homme",
      path: "/shopByCategory/shopByCatUpSm/hommeCat",
      onClick: () => handleNavHomme(),
    },
    {
      label: "Femme",
      path: "/shopByCategory/shopByCatUpSm/femmeCat",
      onClick: () => handleNavFemme(),
    },
    {
      label: "Fille",
      path: "/shopByCategory/shopByCatUpSm/filleCat",
      onClick: () => handleNavFille(),
    },
    {
      label: "Garçon",
      path: "/shopByCategory/shopByCatUpSm/garconCat",
      onClick: () => handleNavGarcon(),
    },
  ];

  const handleNavHome = () => {
    try {
      setNavHome(true);
      router.prefetch("/");
      router.push("/");
    } catch (error) {
    } finally {
      setNavHome(false);
    }
  };

  const handleNavTendences = () => {
    try {
      setNavTendences(true);
      router.prefetch("/shopByCategory/shopByCatUpSm/tendencesCat/");
      router.push("/shopByCategory/shopByCatUpSm/tendencesCat/");
    } catch (error) {
    } finally {
      setNavTendences(false);
    }
  };

  const handleNavHomme = () => {
    try {
      setNavHomme(true);
      router.prefetch("/shopByCategory/shopByCatUpSm/hommeCat/");
      router.push("/shopByCategory/shopByCatUpSm/hommeCat/");
    } catch (error) {
    } finally {
      setNavHomme(false);
    }
  };

  const handleNavFemme = () => {
    try {
      setNavFemme(true);
      router.prefetch("/shopByCategory/shopByCatUpSm/femmeCat/");
      router.push("/shopByCategory/shopByCatUpSm/femmeCat/");
    } catch (error) {
    } finally {
      setNavFemme(false);
    }
  };

  const handleNavFille = () => {
    try {
      setNavFille(true);
      router.prefetch("/shopByCategory/shopByCatUpSm/filleCat/");
      router.push("/shopByCategory/shopByCatUpSm/filleCat/");
    } catch (error) {
    } finally {
      setNavFille(false);
    }
  };

  const handleNavGarcon = () => {
    try {
      setNavGarcon(true);
      router.prefetch("/shopByCategory/shopByCatUpSm/garconCat/");
      router.push("/shopByCategory/shopByCatUpSm/garconCat/");
    } catch (error) {
    } finally {
      setNavGarcon(false);
    }
  };

  return (
    <>
      {(navTendences ||
        navHome ||
        navHomme ||
        navFemme ||
        navFille ||
        navGarcon) && <ShowLoading />}

      <Box
        component="ul"
        sx={{
          whiteSpace: "nowrap",
          position: "relative",
          fontSize: "12px",
          marginBottom: 0,
          marginTop: 0,
          paddingLeft: 0,
          backgroundColor: "rgba(0,0,0,0.02)",
          //
          marginLeft: "16px",
        }}
      >
        {menuItems.map((item) => (
          <Box
            key={item.label}
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
                item.onClick();
              }}
              sx={{
                fontSize: "12px",
                lineHeight: "16px",
                color: currentPath === item.path ? "#0654ba" : "#111820",
                fontWeight: currentPath === item.path ? "bold" : "500",
                textDecoration:
                  currentPath === item.path ? "underline" : "none",
                cursor: "pointer",
                ":hover": {
                  color: "#0654ba",
                  textDecoration: "underline",
                },
              }}
            >
              {item.label}
            </Box>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default HandlesNavBar;
