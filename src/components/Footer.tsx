"use client";

import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "primary.dark",
        color: "white",
        py: 1,
        textAlign: "center",
      }}
    >
      <Typography variant="body2">
          &copy; {new Date().getFullYear()} IA News. Todos os direitos
          reservados.
      </Typography>
    </Box>
  );
}
