"use client";
import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
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
import { usePathname, useParams } from "next/navigation";
import ShowLoading from "../../Loading/ShowLoading";

export default function FuzzySearchMobile({ children }) {
  const router = useRouter();
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [isNavSearchResults, setIsNavSearchResults] = useState(false);
  const [isNavFuzzySearch, setIsNavFuzzySearch] = useState(false);

  const menuListRef = useRef(null);

  const fuzzySearchSchema = yup.object().shape({
    searchInput: yup
      .string("Le mot à rechercher doit être une chaîne de caractères")
      .nullable(),
  });

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
    } catch (error) {
    } finally {
      setIsNavSearchResults(false);
    }
  };

  useEffect(() => {
    try {
      if (!isSpecificPage) {
        setValue("searchInput", "");
        setIsNavFuzzySearch(false);
      } else {
        setValue("searchInput", searchParams);
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
      keys: ["productName"],
      includeScore: true,
    };
    const fuse = new Fuse(allProducts, options);

    const filterResults = (searchTerm) => {
      if (!fuse || !allProducts || allProducts.length === 0) {
        return [];
      }

      if (!searchTerm || searchTerm.trim() === "") {
        return [];
      }
      const results = fuse.search(searchTerm);

      const filteredResults = results.filter((result) =>
        result.item.productName.startsWith(searchTerm)
      );

      return filteredResults.map((result) => result.item);
    };

    const allSearchResults = filterResults(searchTerm);
    setSearchResults(allSearchResults);
  }, [searchTerm]);

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

  const handleListItemClick = async (index) => {
    const selectedResults = uniqueSearchResults[index];

    setValue("searchInput", selectedResults.productName);

    let searchTermInput = selectedResults.productName;

    setSearchTerm(searchTermInput);
    setMenuOpen(false);

    const canSearch = [searchTermInput].every(Boolean);
    if (canSearch) {
      setIsSearching(true);
      try {
        if (searchProductsSuccess && !searchProductsIsError) {
          if (searchProducts) {
            await handleNavSearchResults(searchTermInput);
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
        setValue("searchInput", uniqueSearchResults[index - 1].productName);
      } else {
        setValue(
          "searchInput",
          uniqueSearchResults[uniqueSearchResults.length - 1].productName
        );
      }
    } else if (
      e.key === "ArrowDown" &&
      index < uniqueSearchResults.length - 1
    ) {
      setValue("searchInput", uniqueSearchResults[index + 1].productName);
    } else if (
      e.key === "ArrowDown" &&
      index === uniqueSearchResults.length - 1
    ) {
      setValue("searchInput", uniqueSearchResults[0].productName);
    } else if (e.key === "Enter" && index >= 0) {
      const selectedResults = uniqueSearchResults[index];

      setValue("searchInput", selectedResults.productName);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "block",
        position: "relative",
        margin: 0,
      }}
    >
      <Box
        sx={{
          transform: "translateZ(0)",
          opacity: 1,
          transition: "opacity 200ms ease-in-out",
        }}
      >
        <Box
          component="input"
          id="searchTerm_id"
          maxLength="300"
          type="text"
          spellCheck="false"
          autoCorrect="off"
          autoCapitalize="off"
          autoComplete="off"
          placeholder="Rechercher"
          role="combobox"
          aria-expanded="false"
          aria-haspopup="false"
          aria-label="Rechercher"
          {...register("searchInput")}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setValue("searchInput", e.target.value);
          }}
          sx={{
            height: "1.5em",
            backgroundColor: "#fff",
            border: "solid 1px #111820",
            fontWeight: 400,
            borderRadius: 0,
            boxSizing: "border-box",
            minHeight: "40px",
            WebkitAppearance: "none",
            color: "#000",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            padding: "7px 48px 7px 17px",
            fontSize: "16px",
            width: "calc(100% - 32px)",
            margin: "8px 16px 16px",
            position: "relative",
            font: "inherit",
          }}
        ></Box>

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
              position: "relative",
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
              top: "-13px",
              left: "16px",
              width: "calc(100% - 32px)",
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
                      ref={menuListRef}
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
                            tabIndex={0}
                            key={i}
                            onClick={() => handleListItemClick(i)}
                            onKeyDown={(e) => handleResultArrowKeyPress(e, i)}
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

        <Box
          component="button"
          type="submit"
          disabled={isNavSearchResults || isSubmitting || isSearching}
          sx={{
            position: "absolute",
            zIndex: 100000,
            padding: 0,
            backgroundColor: "transparent",
            border: 0,
            top: "8px",
            right: "15px",
            boxSizing: "content-box",
            marginTop: 0,
          }}
        >
          {children}
        </Box>
        {(isSubmitting ||
          isSearching ||
          isNavSearchResults ||
          isNavFuzzySearch) && <ShowLoading />}
      </Box>
    </Box>
  );
}
