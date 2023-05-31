import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import EmailVerifImg from "../../../Assets/img/email_confrim.svg";
import AppleIcon from "@mui/icons-material/Apple";
import { Link as DirectLink } from "react-router-dom";

function EmailVerification() {
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
      <Box sx={{ display: "flex", justifyContent:"center", flexDirection:"column", alignItems:"center ", width:"100%"}}>
        <Box>
          <img src={EmailVerifImg} width="100%" />
        </Box>
        <Typography mt={3} variant="h5" component="div" color="secondary">
          Konfirmasi Email Berhasil
        </Typography>
        <Typography sx={{ m: 3 }} variant="p">
          Silahkan login terlebih dahulu untuk masuk ke aplikasi
        </Typography>
        <Box>
          <Button
            component={DirectLink}
            to="/login"
            variant="contained"
            color="secondary"
            size="Large"
          >
            Masuk Sekarang
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default EmailVerification;
