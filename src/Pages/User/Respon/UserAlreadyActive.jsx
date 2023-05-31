import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import AlreadyActiveImg from "../../../Assets/img/InternalServerError.svg";
import AppleIcon from "@mui/icons-material/Apple";
import { Link as DirectLink } from "react-router-dom";

function UserAlreadyActive() {
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
          <img src={AlreadyActiveImg} width="100%" />
        </Box>
        <Typography mt={3} variant="h5" component="div" color="secondary">
          Server Error!
        </Typography>
        <Typography sx={{ m: 3 }} variant="p">
          Mohon maaf silahkan coba lagi nanti. 
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
      <Stack  spacing={2}>
      </Stack>
    </Box>
  )
}

export default UserAlreadyActive