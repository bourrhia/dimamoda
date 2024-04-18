import * as React from "react";
import Box from "@mui/material/Box";
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
import Typography from "@mui/material/Typography";
import NavBarButtons from "./NavBarButtons";

export default function MoreCategories() {
  const vRestaurantIcon = "RestaurantIconButt";
  const vLuggageIcon = "LuggageIconButt";
  const vBlenderIcon = "BlenderIconButt";
  const vSportsEsportsIcon = "SportsEsportsIconButt";
  const vChildFriendlyIcon = "ChildFriendlyIconButt";
  const vHouseIcon = "HouseIconButt";
  const vDirectionsBikeIcon = "DirectionsBikeIconButt";
  const vCelebrationIcon = "CelebrationIconButt";
  const vCastleIcon = "CastleIconButt";
  const vCardGiftcardIcon = "CardGiftcardIconButt";
  return (
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
        transform: "translateX(9%)",
        boxShadow: "0 4px 16px 0 rgb(0 0 0 / 20%)",
        top: "22px",
        opacity: 1,
        visibility: "visible",
        pointerEvents: "auto",
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
        zIndex: 40,
        transition: "opacity .3s ease-in-out",
      }}
    >
      <Box
        sx={{
          left: "50%",
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
            transform: "translateX(112px)",
            bottom: "0px",
            left: 0,
            width: 0,
            height: 0,
            border: "solid transparent",
            position: "absolute",
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
              margin: 0,
              padding: 0,
            }}
          >
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
                "@media screen and (min-width: 751px)": {
                  display: "none",
                },
                ":hover": {
                  backgroundColor: "#f1f3f6",
                },
              }}
            >
              <Box>
                <NavBarButtons buttonName={vRestaurantIcon}>
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
                </NavBarButtons>
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

                "@media screen and (min-width: 827px)": {
                  display: "none",
                },
                ":hover": {
                  backgroundColor: "#f1f3f6",
                },
              }}
            >
              <Box>
                <NavBarButtons buttonName={vLuggageIcon}>
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
                    <Typography variant="subtitle2">
                      Hotels & Vacances
                    </Typography>
                  </Box>
                </NavBarButtons>
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

                "@media screen and (min-width: 975px)": {
                  display: "none",
                },
                ":hover": {
                  backgroundColor: "#f1f3f6",
                },
              }}
            >
              <Box>
                <NavBarButtons buttonName={vBlenderIcon}>
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
                </NavBarButtons>
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

                "@media screen and (min-width: 1120px)": {
                  display: "none",
                },
                ":hover": {
                  backgroundColor: "#f1f3f6",
                },
              }}
            >
              <Box>
                <NavBarButtons buttonName={vSportsEsportsIcon}>
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
                </NavBarButtons>
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

                "@media screen and (min-width: 1200px)": {
                  display: "none",
                },
                ":hover": {
                  backgroundColor: "#f1f3f6",
                },
              }}
            >
              <Box>
                <NavBarButtons buttonName={vChildFriendlyIcon}>
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
                </NavBarButtons>
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

                "@media screen and (min-width: 1200px)": {
                  display: "none",
                },
                ":hover": {
                  backgroundColor: "#f1f3f6",
                },
              }}
            >
              <Box>
                <NavBarButtons buttonName={vHouseIcon}>
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
                    <Typography variant="subtitle2">
                      Maisons & Jardins
                    </Typography>
                  </Box>
                </NavBarButtons>
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
              <Box>
                <NavBarButtons buttonName={vDirectionsBikeIcon}>
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
                </NavBarButtons>
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
              <Box>
                <NavBarButtons buttonName={vCelebrationIcon}>
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
                    <Typography variant="subtitle2">
                      Mariages & Fêtes
                    </Typography>
                  </Box>
                </NavBarButtons>
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
              <Box>
                <NavBarButtons buttonName={vCastleIcon}>
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
                </NavBarButtons>
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
              <Box>
                <NavBarButtons buttonName={vCardGiftcardIcon}>
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
                </NavBarButtons>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
