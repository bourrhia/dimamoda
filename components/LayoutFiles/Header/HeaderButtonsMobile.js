"use client";

import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import { useRouter } from "next/navigation";

export default function HeaderButtonsMobile({
  buttonName,
  drawermenu,
  children,
}) {
  const router = useRouter();
  //const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  // const [navMenuDrawer, setNavMenuDrawer] = useState(false);
  ////////////////// ADD inside ul////////////////////////////

  const container =
    typeof window !== "undefined" ? window.document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  /* const handleNavMenuDrawer = (href) => {
    try {
      console.log("href :", href);
      // setMobileOpen(!mobileOpen);
      setNavMenuDrawer(true);
      // router.prefetch(`${href}`);
      // router.push(`${href}`);
      router.prefetch(href);
      router.push(href);
    } catch (error) {
      // Handle any errors that might occur during navigation
    } finally {
      setNavMenuDrawer(false);
      //   setMobileOpen(!mobileOpen);
      // setMobileOpen(false);
    }
  };*/

  const drawer = (
    <Box>
      <Box
        sx={(theme) => ({
          // necessary for content to be below app bar
          ...theme.mixins.toolbar,
          display: "flex",
          alignItems: "center",
          padding: theme.spacing(0, 1),
          // padding: "0 8px",
          justifyContent: "flex-end",
        })}
      >
        <IconButton
          color="inherit"
          aria-label="close drawer"
          // edge="close"
          onClick={handleDrawerToggle}
        >
          <ChevronLeftIcon />
        </IconButton>
      </Box>

      <Divider />

      {drawermenu && drawermenu.length > 0 ? (
        <List component="nav">
          {drawermenu.map((menuitem) => (
            <ListItem disablePadding key={menuitem.id}>
              <ListItemButton
                component="a"
                /*onClick={() => {
                  // e.preventDefault();
                  setMobileOpen(false);
                  handleNavMenuDrawer(menuitem.href);
                }}*/
                href={menuitem.href}
              >
                <ListItemIcon>{menuitem.icon}</ListItemIcon>
                <ListItemText primary={menuitem.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      ) : null}
    </Box>
  );

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

  if (buttonName === "handleNavHomeButt") {
    return (
      <Link href="/" className="custom-link">
        {children}
      </Link>
    );
  }

  if (buttonName === "permIdentityIconButt") {
    return (
      <Link
        href="/"
        style={{ textDecoration: "none !important" }}
        //  className="custom-link"
      >
        {children}
      </Link>
    );
  }

  if (buttonName === "shoppingCartOutlinedIconButt") {
    return (
      <Link href="/" className="custom-link">
        {children}
      </Link>
    );
  }

  if (buttonName === "menuIconButt") {
    return (
      <>
        <Box
          component="button"
          onClick={handleDrawerToggle}
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
        >
          {children}
        </Box>
        <Box component="nav" aria-label="menu">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
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
        </Box>
      </>
    );
  }
}
