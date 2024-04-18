"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";
import ShowLoading from "../../Loading/ShowLoading";

export default function HeaderButtons({ buttonName, children }) {
  const router = useRouter();
  const [navAntiquite, setNavAntiquite] = useState(false);
  const [navBebes, setNavBebes] = useState(false);
  const [navElectromg, setNavElectromg] = useState(false);
  const [navHotelsVac, setNavHotelsVac] = useState(false);
  const [navJouetJeux, setNavJouetJeux] = useState(false);
  const [navLoisirs, setNavLoisirs] = useState(false);
  const [navMaisJard, setNavMaisJard] = useState(false);
  const [navMariageFete, setNavMariageFete] = useState(false);
  const [navOccasion, setNavOccasion] = useState(false);
  const [navRestaurant, setNavRestaurant] = useState(false);

  const handleNavAntq = async () => {
    try {
      setNavAntiquite(true);
      router.prefetch("/shopByCategory/shopByCatUpSm/antiquiteCat/");
      router.push("/shopByCategory/shopByCatUpSm/antiquiteCat/");
    } catch (error) {
    } finally {
      setNavAntiquite(false);
    }
  };

  const handleNavBebes = async () => {
    try {
      setNavBebes(true);
      router.prefetch("/shopByCategory/shopByCatUpSm/bebesCat/");
      router.push("/shopByCategory/shopByCatUpSm/bebesCat/");
    } catch (error) {
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
    } finally {
      setNavElectromg(false);
    }
  };

  const handleNavHotVac = async () => {
    try {
      setNavHotelsVac(true);
      router.prefetch("/shopByCategory/shopByCatUpSm/hotelsVacCat/");
      router.push("/shopByCategory/shopByCatUpSm/hotelsVacCat/");
    } catch (error) {
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
    } finally {
      setNavMariageFete(false);
    }
  };

  const handleNavOcas = async () => {
    try {
      setNavOccasion(true);
      router.prefetch("/shopByCategory/shopByCatUpSm/occasionCat/");
      router.push("/shopByCategory/shopByCatUpSm/occasionCat/");
    } catch (error) {
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
    } finally {
      setNavRestaurant(false);
    }
  };

  if (buttonName === "RestaurantIconButt") {
    return (
      <Box
        component="a"
        onClick={(e) => {
          e.preventDefault();
          handleNavRest();
        }}
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
          cursor: "pointer",
          ":WebkitAnyLink": {
            cursor: "pointer",
          },
        }}
      >
        {children}
        {navRestaurant && <ShowLoading />}
      </Box>
    );
  }

  if (buttonName === "LuggageIconButt") {
    return (
      <Box
        component="a"
        onClick={(e) => {
          e.preventDefault();
          handleNavHotVac();
        }}
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
          cursor: "pointer",
          ":-webkit-any-link": {
            cursor: "pointer",
          },
        }}
      >
        {children}
        {navHotelsVac && <ShowLoading />}
      </Box>
    );
  }

  if (buttonName === "BlenderIconButt") {
    return (
      <Box
        component="a"
        onClick={(e) => {
          e.preventDefault();
          handleNavElecmg();
        }}
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
          cursor: "pointer",
          ":-webkit-any-link": {
            cursor: "pointer",
          },
        }}
      >
        {children}
        {navElectromg && <ShowLoading />}
      </Box>
    );
  }
  if (buttonName === "SportsEsportsIconButt") {
    return (
      <Box
        component="a"
        onClick={(e) => {
          e.preventDefault();
          handleNavJouJeu();
        }}
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
          cursor: "pointer",
          ":-webkit-any-link": {
            cursor: "pointer",
          },
        }}
      >
        {children}
        {navJouetJeux && <ShowLoading />}
      </Box>
    );
  }
  if (buttonName === "ChildFriendlyIconButt") {
    return (
      <Box
        component="a"
        onClick={(e) => {
          e.preventDefault();
          handleNavBebes();
        }}
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
          cursor: "pointer",
          ":-webkit-any-link": {
            cursor: "pointer",
          },
        }}
      >
        {children}
        {navBebes && <ShowLoading />}
      </Box>
    );
  }
  if (buttonName === "HouseIconButt") {
    return (
      <Box
        component="a"
        onClick={(e) => {
          e.preventDefault();
          handleNavMaisJar();
        }}
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
          cursor: "pointer",
          ":-webkit-any-link": {
            cursor: "pointer",
          },
        }}
      >
        {children}
        {navMaisJard && <ShowLoading />}
      </Box>
    );
  }
  if (buttonName === "DirectionsBikeIconButt") {
    return (
      <Box
        component="a"
        onClick={(e) => {
          e.preventDefault();
          handleNavLoisirs();
        }}
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
          cursor: "pointer",
          ":-webkit-any-link": {
            cursor: "pointer",
          },
        }}
      >
        {children}
        {navLoisirs && <ShowLoading />}
      </Box>
    );
  }
  if (buttonName === "CelebrationIconButt") {
    return (
      <Box
        component="a"
        onClick={(e) => {
          e.preventDefault();
          handleNavMarFet();
        }}
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
          cursor: "pointer",
          ":-webkit-any-link": {
            cursor: "pointer",
          },
        }}
      >
        {children}
        {navMariageFete && <ShowLoading />}
      </Box>
    );
  }
  if (buttonName === "CastleIconButt") {
    return (
      <Box
        component="a"
        onClick={(e) => {
          e.preventDefault();
          handleNavAntq();
        }}
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
          cursor: "pointer",
          ":-webkit-any-link": {
            cursor: "pointer",
          },
        }}
      >
        {children}
        {navAntiquite && <ShowLoading />}
      </Box>
    );
  }
  if (buttonName === "CardGiftcardIconButt") {
    return (
      <Box
        component="a"
        onClick={(e) => {
          e.preventDefault();
          handleNavOcas();
        }}
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
          cursor: "pointer",
          ":-webkit-any-link": {
            cursor: "pointer",
          },
        }}
      >
        {children}
        {navOccasion && <ShowLoading />}
      </Box>
    );
  }
}
