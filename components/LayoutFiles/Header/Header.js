//"use client";

//import React, { useState, useEffect, useRef } from "react";
import React from "react";
import Box from "@mui/material/Box";
/*import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
//import { styled, alpha } from "@mui/material/styles";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import InputBase from "@mui/material/InputBase";
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
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Image from "next/image";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { useSelector } from "react-redux";
import { signOut, useSession } from "next-auth/react";
import useSearchTerm from "../hooks/useSearchTerm";
import { useGetAllProductsQuery } from "../redux/features/api/apiSlice";
import { useGetProductsBySearchQuery } from "../redux/features/api/apiSlice";
import { useRouter } from "next/router";
import { products } from "../data/product";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Fuse from "fuse.js";

import Logout from "@mui/icons-material/Logout";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
//
import HeaderButtons from "./HeaderButtons";
import HeaderButtonsMobile from "./HeaderButtonsMobile";
import FuzzySearch from "./FuzzySearch";
import FuzzySearchMobile from "./FuzzySearchMobile"; */
import HeaderUpsm from "./HeaderUpsm";
import HeaderXs from "./HeaderXs";

function Header() {
  /*const vHandleNavHomeButt = "handleNavHomeButt";
  const vUserSessionButt = "userSessionButt";
  const vPermIdentityIconButt = "permIdentityIconButt";
  const vShoppingCartOutlinedIconButt = "shoppingCartOutlinedIconButt";
  const vMenuIconButt = "menuIconButt";
  const vDrawer = "drawer";
  const vChevronLeftIconButt = "chevronLeftIconButt";*/

  return (
    <Box>
      {/*
      {isLoading &&
        !isSubmitting &&
        !isSearching &&
        !isNavOpenCart &&
        !isOnClickSignUp &&
        !isOnClickSignIn && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",

              zIndex: "9999",
            }}
          >
            <CircularProgress size={40} />
          </Box>
        )} */}
      <Box tabIndex="0">
        <Box
          // tabIndex="-1"
          // tabIndex="0"
          sx={{
            display: { xs: "none", sm: "block" },
            borderBottom: "1px solid #e5e5e5",
            zIndex: "-1",
            outline: 0,
            borderTopWidth: 0,
            backgroundColor: "#fff",
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            height: "30px",
            boxSizing: "initial",
            fontSize: ".875rem",
            webkitTextSizeAdjust: "100%",
          }}
        ></Box>

        <Box
          component="header"
          role="banner"
          sx={{
            display: { xs: "none", sm: "block" },
            paddingTop: "44px",
            paddingBottom: "5px",

            marginLeft: "32px",
            marginRight: "32px",
            maxWidth: "1248px",
            // minWidth: "600px",
            minWidth: "320px",
            color: "#333",
            textAlign: "left",

            position: "relative",
            // margin: 0,
            padding: "35px 0 10px 0",
            whiteSpace: "nowrap",
          }}
        >
          <HeaderUpsm />
        </Box>

        <Box
          sx={{
            display: { xs: "block", sm: "none" },
            backgroundColor: "#fff",
            webkitTextSizeAdjust: "none",
            margin: 0,
          }}
        >
          <HeaderXs />
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
