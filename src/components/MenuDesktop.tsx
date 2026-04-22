'use client';

import * as React from "react";
import Link from "next/link";
import { Box, Button } from "@mui/material";
import DarkModeToggle from "./DarkModeToggle";
import { menuList } from "../types/menu-list";

export default function MenuDesktop() {
  return (
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
  );
}
