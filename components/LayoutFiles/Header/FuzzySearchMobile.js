"use client";
import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import { useGetAllProductsQuery } from "../../../redux/features/api/apiSlice";
import { useGetPrdtsByTermQuery } from "../../../redux/features/api/apiSlice";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Fuse from "fuse.js";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import ClickAwayListener from "@mui/material/ClickAwayListener";
// import Paper from "@mui/material/Paper";
import { usePathname, useParams } from "next/navigation";
import CircularProgress from "@mui/material/CircularProgress";

export default function FuzzySearchMobile({ children }) {
  const router = useRouter();
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isNavSearchResults, setIsNavSearchResults] = useState(false);
  const [isNavFuzzySearch, setIsNavFuzzySearch] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isNavOpenCart, setIsNavOpenCart] = useState(false);
  const [isOnClickSignIn, setIsOnClickSignIn] = useState(false);
  const [isOnClickSignUp, setIsOnClickSignUp] = useState(false);

  const menuListRef = useRef(null);

  const fuzzySearchSchema = yup.object().shape({
    searchInput: yup
      .string("Le mot à rechercher doit être une chaîne de caractères")
      .nullable(),
  });

  // const storedSearchTerm = localStorage.getItem("searchTerm");

  // console.log("inside mobile  storedSearchTerm : ", storedSearchTerm);

  const pathname = usePathname();
  const searchItem = useParams();
  const searchParams = decodeURIComponent(searchItem.searchTerm);

  const isSpecificPage = pathname.includes("/fuzzySearch/fuzzySearchXs");

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { isSubmitting, errors },
  } = useForm({
    resolver: yupResolver(fuzzySearchSchema),
    defaultValues: {
      searchInput: searchParams,
    },
    mode: "onBlur",
    reValidateMode: "onBlur",
  });

  const handleClickAway = () => {
    setMenuOpen(false);
  };

  const {
    data: allProducts,
    isLoading: allProductLoading,
    isSuccess: allProductSuccess,
    isError: allProductIsError,
    error: allProductError,
  } = useGetAllProductsQuery();

  const watchSearchInput = watch("searchInput");

  const {
    data: searchProducts,
    isLoading: searchProductsLoading,
    isSuccess: searchProductsSuccess,
    isError: searchProductsIsError,
    error: searchProductsError,
  } = useGetPrdtsByTermQuery(watchSearchInput);

  const uniqueProductNames = searchProducts
    ? [...new Set(searchProducts.map((product) => product.productName))].join(
        ","
      )
    : "";

  const handleNavSearchResults = async (searchPrdts) => {
    try {
      setIsNavSearchResults(true);
      router.push(
        `/fuzzySearch/fuzzySearchXs/${encodeURIComponent(searchPrdts)}`
      );
      /* router.push(
          `/fuzzySearchUpSm/?searchTerm=${encodeURIComponent(searchPrdts)}`
        );*/
    } catch (error) {
    } finally {
      setIsNavSearchResults(false);
    }
  };

  useEffect(() => {
    /* if (!isSpecificPage) {
      setValue("searchInput", ""); // Set the input field value to null or an empty string
    } else {
      setValue("searchInput", searchParams); // Set the input field value
    } */

    try {
      if (!isSpecificPage) {
        setValue("searchInput", ""); // Set the input field value to null or an empty string
        setIsNavFuzzySearch(false);
      } else {
        setValue("searchInput", searchParams); // Set the input field value
        setIsNavFuzzySearch(true);
      }
    } catch (error) {
    } finally {
      setIsNavFuzzySearch(false);
    }
  }, [pathname, searchParams]);

  //////////////////////// END ADD /////////////////////////////////////////////

  const onSubmit = async (data, event) => {
    event.preventDefault();

    let searchTermInput = data.searchInput;

    setSearchTerm(searchTermInput);
    setMenuOpen(false);

    console.log("inside submit : ");

    const canSearch = [searchTermInput].every(Boolean);
    if (canSearch) {
      setIsSearching(true);
      try {
        if (searchProductsSuccess && !searchProductsIsError) {
          if (searchProducts) {
            // localStorage.setItem("searchTerm", uniqueProductNames);
            await handleNavSearchResults(uniqueProductNames);
          }
        }
      } catch (err) {
        console.error("Un probleme est survenu pour rechercher: ", err);
      } finally {
        setIsSearching(false);
        handleClickAway();
      }
    }
  };

  useEffect(() => {
    if (!searchTerm || searchTerm.trim() === "") {
      setSearchResults([]);
      return;
    }

    setMenuOpen(true);

    const options = {
      keys: ["productName"], // Specify the keys you want to search on
      includeScore: true,
    };
    const fuse = new Fuse(allProducts, options);

    const filterResults = (searchTerm) => {
      // Check if fuse is properly initialized and allProducts data is available
      if (!fuse || !allProducts || allProducts.length === 0) {
        return []; // Return an empty array when data is missing or fuse is not initialized
      }
      // Check if searchTerm is undefined or an empty string
      if (!searchTerm || searchTerm.trim() === "") {
        return []; // Return an empty array when searchTerm is invalid
      }
      const results = fuse.search(searchTerm);

      // Filter the results to include only items where the name starts with the search term
      const filteredResults = results.filter((result) =>
        result.item.productName.startsWith(searchTerm)
      );

      return filteredResults.map((result) => result.item);
    };

    const allSearchResults = filterResults(searchTerm);
    setSearchResults(allSearchResults);
  }, [searchTerm]);

  // Function to remove duplicates
  const removeDuplicates = (results) => {
    const seen = new Set();
    return results.filter((result) => {
      if (!seen.has(result.productName)) {
        seen.add(result.productName);
        return true;
      }
      return false;
    });
  };

  const uniqueSearchResults = removeDuplicates(searchResults);

  const handleMouseEnter = (index) => {
    const selectedResults = searchResults[index];

    menuListRef.current.children[index].focus();
  };

  const handleListItemClick = (index) => {
    const selectedResults = uniqueSearchResults[index];

    setValue("searchInput", selectedResults.productName);
    // setValue('searchTerm', options[index]);
  };

  const handleListKeyDown = (event) => {
    console.log("Vendredi  event.key :", event.key);
    if (event.key === "Tab") {
      event.preventDefault();
      setMenuOpen(false);
    } else if (event.key === "Escape") {
      setMenuOpen(false);
    }
  };

  const handleResultArrowKeyPress = (e, index) => {
    if (e.key === "ArrowUp") {
      if (index > 0) {
        // Set the value before changing the selectedResultIndex
        setValue("searchInput", uniqueSearchResults[index - 1].productName);
      } else {
        // If at the first item, set the value to the last item
        setValue(
          "searchInput",
          uniqueSearchResults[uniqueSearchResults.length - 1].productName
        );
        // setSelectedResultIndex(searchResults.length - 1);
      }
    } else if (
      e.key === "ArrowDown" &&
      index < uniqueSearchResults.length - 1
    ) {
      // Set the value before changing the selectedResultIndex
      setValue("searchInput", uniqueSearchResults[index + 1].productName);
      //setSelectedResultIndex(index + 1);
    } else if (
      e.key === "ArrowDown" &&
      index === uniqueSearchResults.length - 1
    ) {
      // If at the last item, wrap around to the first item
      setValue("searchInput", uniqueSearchResults[0].productName);
      //  setSelectedResultIndex(0);
    } else if (e.key === "Enter" && index >= 0) {
      // Select the result on Enter key press
      const selectedResults = uniqueSearchResults[index];

      setValue("searchInput", selectedResults.productName); // Update the input value
      //  setSelectedResultIndex(-1); // Reset selection
    }
  };

  /////////////////////////////////////////////////////////////////
  return (
    <Box
      // component=""
      sx={{
        position: "relative",
        zIndex: 208,
        fontFamily: "inherit",
        fontSize: "12px",
        lineHeight: "1em",
        minWidth: "200px",
        color: "#0F1111",
      }}
    >
      <Box
        sx={{
          display: "flex",
          // height: "50px",
          fontFamily: "inherit",
          fontSize: "12px",
          lineHeight: "1em",
          color: "#0F1111",
          //
          height: "65px",
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            // background: "#232f3e",

            display: "block",
            padding: "2px 10px 5px 10px",
            position: "relative",
            height: "50px",
            width: "100%",
            borderBottom: "1px solid rgba(0, 0, 0, .05)",
            marginBottom: 0,
            flex: 1,
            zIndex: "inherit",
            fontFamily: "inherit",
            fontSize: "12px",
            lineHeight: "1em",
            color: "#0F1111",
            //
            // marginBottom: "10px",
            // paddingBottom: "40px",
          }}
        >
          <Box
            sx={{
              width: "auto",
              overflow: "hidden",
              whiteSpace: "nowrap",
              fontFamily: "inherit",
              fontSize: "12px",
              lineHeight: "1em",
              color: "#0F1111",
            }}
          >
            <Box
              sx={{
                paddingRight: "90px",
                // WebkitBorderRadius: "8px 8px 8px 8px",
                // MozBorderRadius: "8px 8px 8px 8px",
                // borderRadius: "8px 8px 8px 8px",
                height: "44px",
                margin: 0,
                position: "relative",
                background: "#fff",
                whiteSpace: "nowrap",
                fontFamily: "inherit",
                fontSize: "12px",
                lineHeight: "1em",
                color: "#0F1111",
              }}
            >
              <Box
                component="label"
                htmlFor="search-item"
                sx={{
                  display: "none",
                  paddingLeft: ".5rem",
                  paddingBottom: ".5rem",
                  fontWeight: 700,
                  WebkitTapHighlightColor: "transparent",
                  fontFamily: "inherit",
                  fontSize: "12px",
                  lineHeight: "1em",
                  color: "#0F1111",
                  whiteSpace: "nowrap",
                }}
              >
                Rechercher
              </Box>
              <Box
                component="input"
                type="text"
                placeholder="Rechercher"
                //data-aria-clear-label="Effacer les mots-clés de recherche"
                // aria-label="Rechercher"
                // name="k"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                dir="auto"
                // value=""
                id="search-item"
                spellCheck="false"
                {...register("searchInput")}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{
                  textOverflow: "ellipsis",
                  // WebkitBorderRadius: "8px 8px 8px 8px",
                  // MozBorderRadius: "8px 8px 8px 8px",
                  // borderRadius: "8px 8px 8px 8px",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  direction: "ltr",
                  display: "block",
                  padding: "0 95px 0 10px",
                  color: "#000",
                  fontSize: "15px",
                  fontFamily: "inherit",
                  border: 0,
                  outline: 0,
                  WebkitBoxShadow:
                    "0 1px 0 0 rgba(255,255,255,.5), inset 0 1px 0 0 rgba(0,0,0,.07)",
                  MozBoxShadow:
                    "0 1px 0 0 rgba(255, 255, 255, .5), inset 0 1px 0 0 rgba(0, 0, 0, .07)",
                  boxShadow:
                    "0 1px 0 0 rgba(255,255,255,.5), inset 0 1px 0 0 rgba(0,0,0,.07)",
                  lineHeight: "normal",
                  backgroundColor: "#fff",
                  WebkitTransition: "all .1s linear",
                  transition: "all .1s linear",

                  //margin: 0,
                  verticalAlign: "middle",
                  // paddingBlock: "1px",
                  // paddingInline: "2px",
                  whiteSpace: "nowrap",
                  backgroundColor: "#fff",
                  border: "solid 1px #111820",
                  borderRadius: 0,
                  color: "#111820",
                }}
              ></Box>
            </Box>
            <Box
              sx={{
                whiteSpace: "nowrap",
                fontFamily: "inherit",
                fontSize: "12px",
                lineHeight: "1em",
                color: "#0F1111",
              }}
            >
              <Box
                sx={{
                  left: "10px",
                  position: "absolute",
                  right: "10px",
                  zIndex: 21000,
                  color: "#111",
                  backgroundColor: "#FFF",
                  textAlign: "initial",
                  whiteSpace: "normal",
                  WebkitBoxShadow: "0 8px 16px 1px rgba(0,0,0,.7)",
                  MozBoxShadow: "0 8px 16px 1px rgba(0, 0, 0, .7)",
                  boxShadow: "0 8px 16px 1px rgba(0,0,0,.7)",
                  fontFamily: "inherit",
                  fontSize: "12px",
                  lineHeight: "1em",
                }}
              >
                <Box
                  sx={{
                    lineHeight: "normal",
                    color: "#111",
                    textAlign: "initial",
                    whiteSpace: "normal",
                    fontFamily: "inherit",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      lineHeight: "normal",
                      color: "#111",
                      textAlign: "initial",
                      whiteSpace: "normal",
                      fontFamily: "inherit",
                      fontSize: "12px",
                    }}
                  >
                    {isMenuOpen && (
                      <ClickAwayListener onClickAway={handleClickAway}>
                        <MenuList
                          id="simple-menu"
                          autoFocusItem={true}
                          onKeyDown={handleListKeyDown}
                          ref={menuListRef} // Reference to the MenuList
                          variant="menu"
                          sx={{
                            flex: "1 1 0%",
                            height: "auto",
                            minWidth: 0,
                            borderRight: "1px solid #c0c0c0",
                            lineHeight: "normal",
                            color: "#111",
                            textAlign: "initial",
                            whiteSpace: "normal",
                            fontFamily: "inherit",
                            fontSize: "12px",
                          }}
                        >
                          <Box>
                            {uniqueSearchResults.map((product, i) => (
                              <MenuItem
                                // tabIndex="0"
                                tabIndex={0}
                                key={i}
                                onClick={() => handleListItemClick(i)}
                                onKeyDown={(e) =>
                                  handleResultArrowKeyPress(e, i)
                                }
                                //  onMouseEnter={() => handleMouseEnter(i)}
                                sx={{
                                  fontSize: "14px",
                                  paddingRight: "8px",
                                  height: "35px",
                                  cursor: "pointer",
                                  display: "flex",
                                  flexDirection: "row-reverse",
                                  lineHeight: "normal",
                                  color: "#111",
                                  textAlign: "initial",
                                  whiteSpace: "normal",
                                  fontFamily: "inherit",
                                }}
                              >
                                <Box
                                  sx={{
                                    padding: "7px 10px",
                                    fontSize: "16px",
                                    cursor: "pointer",
                                    marginTop: 0,
                                    marginBottom: 0,
                                    flex: "1 1 auto",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    lineHeight: "normal",
                                    direction: "ltr",
                                    textAlign: "left",
                                    color: "#111",
                                  }}
                                >
                                  {product.productName}
                                </Box>
                              </MenuItem>
                            ))}
                          </Box>
                        </MenuList>
                      </ClickAwayListener>
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              zIndex: 1,
              display: "flex",
              width: "auto",
              color: "#0F1111",
            }}
          >
            <Box
              sx={{
                background: "-moz-linear-gradient(top, #febd69, #febd69)",
                background: "-webkit-linear-gradient(top, #febd69, #febd69)",
                WebkitBorderRadius: "8px 8px 8px 8px",
                MozBorderRadius: "8px 8px 8px 8px",
                borderRadius: "8px 8px 8px 8px",

                position: "relative",
                height: "44px",
                width: "50px",
                margin: "2px 10px 5px 5px",
                border: 0,
                cursor: "pointer",
                color: "#0F1111",
              }}
            >
              <Box
                // component="input"
                component="button"
                type="submit"
                disabled={isNavSearchResults || isSubmitting || isSearching}
                aria-label="Go"
                sx={{
                  opacity: "0.01",
                  WebkitBorderRadius: "8px 8px 8px 8px",
                  MozBorderRadius: "8px 8px 8px 8px",
                  borderRadius: "8px 8px 8px 8px",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  cursor: "pointer",
                  zIndex: 10,
                  border: 0,
                  backgroundColor: "transparent",
                  textIndent: "-1000px",
                  lineHeight: "1px",
                  WebkitAppearance: "button",
                  outline: 0,
                  WebkitTransition: "all .1s linear",
                  transition: "all .1s linear",
                  color: "#0F1111",
                  margin: 0,
                  fontSize: "100%",
                  verticalAlign: "middle",
                  fontFamily: "inherit",
                  //userSelect: "none",
                  textAlign: "center",
                  whiteSpace: "pre",
                  paddingBlock: "1px",
                  paddingInline: "6px",

                  textRendering: "auto",
                  letterSpacing: "normal",
                  wordSpacing: "normal",
                  textTransform: "none",
                  textShadow: "none",

                  display: "inline-block",
                  WebkitRtlOrdering: "logical",
                  padding: "1px 0px",
                }}
              ></Box>
              <Box>{children}</Box>
              {(isSubmitting ||
                isSearching ||
                isNavSearchResults ||
                isNavFuzzySearch) && (
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

                    zIndex: "9999",
                  }}
                >
                  <CircularProgress size={40} />
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
