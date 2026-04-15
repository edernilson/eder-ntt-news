"use client";

import * as React from "react";
import {
  AppBar,
  Toolbar,
} from "@mui/material";

import Logo from "./Logo";
import MenuMobile from "./MenuMobile";
import MenuDesktop from "./MenuDesktop";

export default function Header() {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo / Nome */}
        <Logo title="Portal de Notícias"/>

        {/* Menu Mobile */}
        <MenuMobile />

        {/* Menu Desktop */}
        <MenuDesktop />
      </Toolbar>
    </AppBar>
  );
}
