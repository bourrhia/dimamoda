"use client";

import React, { useState } from "react";
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

export default function HeaderButtonsMobile({
  buttonName,
  drawermenu,
  children,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const container =
    typeof window !== "undefined" ? window.document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      <Box
        sx={(theme) => ({
          ...theme.mixins.toolbar,
          display: "flex",
          alignItems: "center",
          padding: theme.spacing(0, 1),
          justifyContent: "flex-end",
        })}
      >
        <IconButton
          color="inherit"
          aria-label="close drawer"
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
              <ListItemButton component="a" href={menuitem.href}>
                <ListItemIcon>{menuitem.icon}</ListItemIcon>
                <ListItemText primary={menuitem.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      ) : null}
    </Box>
  );

  if (buttonName === "handleNavHomeButt") {
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
              keepMounted: true,
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
