import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import UserNotFoundImg from "../../../Assets/img/UserNotFound.svg";
import AppleIcon from "@mui/icons-material/Apple";
import { Link as DirectLink } from "react-router-dom";

function UserNotFound() {
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
              <img src={UserNotFoundImg} width="100%" />
            </Box>
            <Typography mt={3} variant="h5" component="div" color="secondary">
              Pengguna Tidak Ditemukan
            </Typography>
            <Typography sx={{ m: 3 }} variant="p">
              Silahkan daftar atau periksa kembali email anda.
            </Typography>
            <Box>
              <Button
                component={DirectLink}
                to="/register"
                variant="contained"
                color="secondary"
                size="Large"
              >
                Daftar
              </Button>
            </Box>
          </Box>
        </Box>
      );
}

export default UserNotFound