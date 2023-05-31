import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import { fontSize } from "@mui/system";

export default function Footer() {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "#FFAA1D",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          <InstagramIcon />
          <FacebookIcon />
          <GitHubIcon />
        </Box>
        <Typography
          variant="h5"
          sx={{ "@media:(min-width:600px)": { fontSize: "1rem" } }}
        >
          All Right Reserved © 2023
        </Typography>
      </Box>
    </>
  );
}
