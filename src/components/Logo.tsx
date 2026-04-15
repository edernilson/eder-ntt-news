
import Link from "next/link";

import { Typography } from "@mui/material";

export default function Logo({ title }: { title: string }) {
    return <Typography
      variant="h6"
      noWrap
      component={Link}
      href="/"
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {title}
    </Typography>;
}