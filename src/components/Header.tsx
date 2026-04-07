"use client";

import * as React from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeToggle from "./DarkModeToggle";

import { menuList } from "./menu-list";

export default function Header() {
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
    <AppBar position="static" color="secondary">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo / Nome */}
        <Typography
          variant="h6"
          noWrap
          component={Link}
          href="/"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          Portal de Notícias
        </Typography>

        {/* Menu Mobile */}
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

        {/* Menu Desktop */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 2,
          }}
        >
          {menuList.map((page) => (
            <Button
              key={page.path}
              component={Link}
              href={page.path}
              sx={{ color: "white" }}
            >
              {page.label}
            </Button>
          ))}
          <DarkModeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
