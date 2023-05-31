import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import PurchaseComplete from "../../Assets/img/purchase_confirm.svg";
import AppleIcon from "@mui/icons-material/Apple";
import { Link as DirectLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Success() {
  return (
    <Box>
      <Box
        component={DirectLink}
        to="/"
        sx={{ display: "flex", m: 8, color: "black", textDecoration: "none" }}
      >
        <AppleIcon />
        <Typography variant="h6" component="div">
          MUSIC
        </Typography>
      </Box>
      <Stack spacing={2}>
        <Box sx={{
          display:"flex",
          flexDirection:"column",
          textAlign:"center"
        }}>
          <Box>
            <img src={PurchaseComplete} width="20%" alt="" />
          </Box>
          <Typography mt={3} variant="h5" component="div" color="secondary">
            Pembelian Berhasil
          </Typography>
          <Typography sx={{ m: 3 }} variant="p">
            Yey! Kamu telah berhasil membeli kursus di Apel Music
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                width: "40%",
                justifyContent: "space-around",
                paddingTop:1,
              }}
            >
              <Button
                component={DirectLink}
                to="/"
                variant="outlined"
                color="secondary"
                size="Large"
              >
                <HomeIcon /> Ke Beranda
              </Button>

              <Button
                component={DirectLink}
                to="/invoice"
                variant="contained"
                color="secondary"
                size="Large"
              >
                <ArrowForwardIcon fontSize="small" /> Buka Invoice
              </Button>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
