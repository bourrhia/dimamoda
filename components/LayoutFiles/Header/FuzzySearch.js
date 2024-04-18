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
import Paper from "@mui/material/Paper";
import { usePathname, useParams } from "next/navigation";
import CircularProgress from "@mui/material/CircularProgress";

export default function FuzzySearch({ children }) {
  const router = useRouter();
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isNavSearchResults, setIsNavSearchResults] = useState(false);
  const [isNavFuzzySearch, setIsNavFuzzySearch] = useState(false);
  /* const [isOnClickSignIn, setIsOnClickSignIn] = useState(false);
  const [isOnClickSignUp, setIsOnClickSignUp] = useState(false);*/
  // const [searchItem, setSearchItem] = useState(null);

  const menuListRef = useRef(null);

  const fuzzySearchSchema = yup.object().shape({
    searchInput: yup
      .string("Le mot à rechercher doit être une chaîne de caractères")
      .nullable(),
  });

  //const storedSearchTerm = localStorage.getItem("searchTerm");
  // console.log("inside UpSm storedSearchTerm : ", storedSearchTerm);

  const pathname = usePathname();
  const searchItem = useParams();
  const searchParams = decodeURIComponent(searchItem.searchTerm);

  const isSpecificPage = pathname.includes("/fuzzySearch/fuzzySearchUpSm");

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
        `/fuzzySearch/fuzzySearchUpSm/${encodeURIComponent(searchPrdts)}`
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
    /*if (!isSpecificPage) {
      setValue("searchInput", ""); // Set the input field value to null or an empty string
      setIsNavFuzzySearch(false);
    } else {
      setValue("searchInput", searchParams); // Set the input field value
      setIsNavFuzzySearch(true);
    }*/

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

  const onSubmit = async (data, event) => {
    event.preventDefault();

    let searchTermInput = data.searchInput;

    setSearchTerm(searchTermInput);
    setMenuOpen(false);

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

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        margin: 0,
        padding: 0,
        display: "block",
      }}
    >
      <Box
        component="table"
        role="presentation"
        sx={{
          width: "100%",
          borderCollapse: "collapse",
          borderSpacing: 0,
        }}
      >
        <Box component="tbody">
          <Box component="tr">
            <Box
              component="td"
              sx={{
                width: "99%",
                verticalAlign: "middle",
                padding: 0,
                display: "table-cell",
              }}
            >
              <Box
                sx={{
                  border: "2px solid #41413f",

                  borderRadius: 0,
                  paddingRight: "5px",
                  boxSizing: "border-box",
                  height: "42px",
                  background: "#fff",
                  padding: "0 10px 0 1px",
                  transition: "border-color .1s linear",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    whiteSpace: "normal",
                  }}
                >
                  <Box
                    component="input"
                    type="text"
                    aria-autocomplete="list"
                    aria-expanded="false"
                    size="50"
                    maxLength="300"
                    aria-label="Rechercher sur Dimapromo"
                    placeholder="Rechercher sur Dimapromo"
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                    autoComplete="off"
                    {...register("searchInput")}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    sx={{
                      webkitTransition: "none",
                      transition: "none",
                      padding: "9px 0 9px 40px",
                      boxSizing: "border-box",
                      webkitTransition: "padding .1s",
                      transition: "padding .1s",
                      lineHeight: "20px",
                      fontSize: "16px",
                      border: 0,
                      margin: 0,
                      width: "100%",
                      background: "transparent",
                      outline: 0,
                      boxShadow: "none",
                      webkitBorderRadius: "3px",
                      mozBorderRadius: "3px",
                      borderRadius: "3px",
                    }}
                  ></Box>
                  {children}
                </Box>
              </Box>

              <Box
                // tabIndex="0"
                sx={{
                  position: "relative",
                  display: "block",

                  fontSize: "14px",
                  color: "#333",
                  textAlign: "left",
                  WebkitTextSizeAdjust: "100%",
                }}
              >
                <ClickAwayListener onClickAway={handleClickAway}>
                  <Paper
                    elevation={3}
                    sx={{
                      position: "absolute",
                    }}
                  >
                    <MenuList
                      id="simple-menu"
                      //autoFocusItem={true}
                      onKeyDown={handleListKeyDown}
                      ref={menuListRef} // Reference to the MenuList
                      variant="menu"
                      sx={{
                        width: "569px",

                        minWidth: "300px",
                        cursor: "default",
                        background: "#fff",
                        border: "1px solid #aaa !important",
                        MozBoxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
                        boxShadow: "2px 2px 5px rgba(0,0,0,0.2)",
                        MozBorderRadius: "3px 0 3px 3px",
                        WebkitBorderRadius: "3px 0 3px 3px",
                        borderRadius: "3px 0 3px 3px",
                        zIndex: 9999,

                        MozTransition:
                          "visibility 0s linear .1s,opacity .1s linear",
                        WebkitTransition:
                          "visibility 0s linear .1s,opacity .1s linear",
                        OTransition:
                          "visibility 0s linear .1s,opacity .1s linear",
                        transition:
                          "visibility 0s linear .1s,opacity .1s linear",
                        listStyle: "none",
                        outline: 0,
                        padding: "2px",
                        marginLeft: "-1px",
                        position: "absolute",
                        top: "-1px !important",
                        left: "1px !important",
                        margin: 0,

                        fontSize: "14px",
                        color: "#333",
                        textAlign: "left",
                        //
                        display: isMenuOpen ? "block" : "none",
                      }}
                    >
                      {isMenuOpen &&
                        uniqueSearchResults.map((product, i) => (
                          <MenuItem
                            // tabIndex="0"
                            tabIndex={0}
                            key={i}
                            onClick={() => handleListItemClick(i)}
                            onKeyDown={(e) => handleResultArrowKeyPress(e, i)}
                            onMouseEnter={() => handleMouseEnter(i)}
                            sx={{
                              width: "100%",
                            }}
                          >
                            <Box
                              component="a"
                              role="option"
                              sx={{
                                textDecoration: "none",
                                display: "block",
                                minHeight: 0,
                                whiteSpace: "normal",
                                cursor: "pointer",
                                color: "#333 !important",
                                lineHeight: "26px",
                                padding: "1px 7px",
                                fontWeight: "bold !important",
                              }}
                            >
                              <Box
                                component="b"
                                sx={{
                                  fontWeight: "normal",
                                  color: "#333",
                                  whiteSpace: "normal",
                                  cursor: "pointer",
                                  lineHeight: "26px",
                                }}
                              >
                                {product.productName}
                              </Box>
                            </Box>
                          </MenuItem>
                        ))}
                    </MenuList>
                  </Paper>
                </ClickAwayListener>
              </Box>
            </Box>
            <Box
              component="td"
              sx={{
                position: "relative",
                width: "1%",
                verticalAlign: "middle",
                padding: 0,
                minWidth: "3px",
                display: "table-cell",
              }}
            >
              <Box
                //component="input"
                component="button"
                disabled={isNavSearchResults || isSubmitting || isSearching}
                type="submit"
                // value="Rechercher"
                //  defaultValue="Rechercher"
                sx={(theme) => ({
                  backgroundColor: "#3665f3",
                  textShadow: "none",
                  borderRadius: 0,
                  //background: 0,
                  padding: "8px 16px",
                  fontSize: "14px",
                  minWidth: "168px",
                  height: "42px",
                  fontWeight: "normal",
                  //  zoom: 1,
                  margin: "0 0 0 5px",
                  webkitBoxShadow: "none",
                  webkitAppearance: "none",
                  mozBoxShadow: "none",
                  boxShadow: "none",
                  display: "inline-block",
                  verticalAlign: "baseline",
                  cursor: "pointer",
                  textAlign: "center",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                  border: 0,
                  color: "#fff",
                  userSelect: "none",
                  alignItems: "flex-start",
                  boxSizing: "border-box",
                  webkitWritingMode: "horizontal-tb !important",
                  textRendering: "auto",
                  letterSpacing: "normal",
                  wordSpacing: "normal",
                  textTransform: "none",
                  textIndent: "0px",
                  webkitRtlOrdering: "logical",
                  [theme.breakpoints.between("sm", "md")]: {
                    minWidth: "auto",
                    background: "none !important",
                    backgroundColor: "#3665f3 !important",
                    textIndent: "-9999px",
                    width: "43px",
                    // width: "90px",
                  },
                })}
              >
                Rechercher
                <SearchIcon
                  sx={{
                    display: { sm: "block", md: "none" },
                    position: "absolute",
                    left: "15px",
                    //  left: "25px",
                    width: "22px",
                    height: "23px",
                    top: "8px",
                    fill: "#fff",
                  }}
                ></SearchIcon>
              </Box>

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
