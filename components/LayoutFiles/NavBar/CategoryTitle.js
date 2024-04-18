"use client";
import * as React from "react";
import Box from "@mui/material/Box";

export default function CategoryTitle({ cattitle }) {
  return (
    <Box
      sx={(theme) => ({
        position: "relative",

        maxWidth: "1490px",
        [theme.breakpoints.up("sm")]: {
          marginLeft: "32px",
        },
        [theme.breakpoints.only("xs")]: {
          paddingLeft: "10px",
        },
      })}
    >
      <Box
        sx={{
          minWidth: "568px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            background: "transparent",
          }}
        >
          <Box
            component="ol"
            sx={{
              padding: "16px 0",
              width: "100%",
              listStyle: "none",
              margin: 0,
            }}
          >
            <Box
              component="li"
              sx={{
                lineHeight: "13px",
                verticalAlign: "top",
                display: "inline-block",
                position: "relative",
              }}
            >
              <Box
                component="span"
                sx={{
                  color: "#666",
                  fontSize: ".75rem",
                  lineHeight: "13px",
                  fontWeight: "initial",
                }}
              >
                {cattitle}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
