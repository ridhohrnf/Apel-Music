import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import SuccessReset from "../../../Assets/img/SuccessReset.svg";
import AppleIcon from "@mui/icons-material/Apple";
import { Link as DirectLink } from "react-router-dom";

function PasswordChanged() {
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
              <img src={SuccessReset} width="100%" />
            </Box>
            <Typography mt={3} variant="h5" component="div" color="secondary">
              Password berhasil dirubah
            </Typography>
            <Typography sx={{ m: 3 }} variant="p">
              Silahkan silahkan masuk dengan password baru anda 
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

export default PasswordChanged