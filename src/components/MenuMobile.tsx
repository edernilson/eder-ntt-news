"use client";

import * as React from "react";
import Link from "next/link";
import {
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeToggle from "./DarkModeToggle";
import { menuList } from "../types/menu-list";

export default function MenuMobile() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
      <IconButton
        size="large"
        aria-label="menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        {menuList.map((page) => (
          <MenuItem key={page.path} onClick={handleCloseNavMenu}>
            <Link
              href={page.path}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {page.label}
            </Link>
          </MenuItem>
        ))}
      </Menu>
      <DarkModeToggle />
    </Box>
  );
}
