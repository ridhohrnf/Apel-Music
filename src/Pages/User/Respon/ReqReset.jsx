import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import ReqResetImg from "../../../Assets/img/VerifReset.svg";
import AppleIcon from "@mui/icons-material/Apple";
import { Link as DirectLink } from "react-router-dom";

function ReqReset() {
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
              <img src={ReqResetImg} width="100%" />
            </Box>
            <Typography mt={3} variant="h5" component="div" color="secondary">
              Permintaan ubah password berhasil!
            </Typography>
            <Typography sx={{ m: 3 }} variant="p">
              Kami telah mengirimkan email verifikasi untuk merubah password ke email anda, silahkan cek email anda terlebih dahulu. 
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

export default ReqReset