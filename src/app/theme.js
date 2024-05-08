"use client";

import { createTheme } from "@mui/material";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin-ext"],
  display: "swap"
});

export const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily
  },
  palette: {
    primary: {
      main: "#00796b"
    },
    background: {
      default: "#e0f2f1"
    }
  }
});
