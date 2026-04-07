"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Link from "./Link";
import { menuList } from "./menu-list";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "footer.main",
        color: "white",
        py: 2,
        px: 4,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} IA News. Todos os direitos reservados.
      </Typography>
      <Typography variant="body2">
        {menuList.map((page) => (
          <Link
            key={page.path}
            href={page.path}
            style={{ textDecoration: "none", color: "inherit", marginLeft: 16 }}
          >
            {page.label}
          </Link>
        ))}
      </Typography>
    </Box>
  );
}
