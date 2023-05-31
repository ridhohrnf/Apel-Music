import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import React from "react";
import { Link as DirectLink } from "react-router-dom";
// import { useTheme } from "../Context/HeaderContext";
import HeaderBtnLogin from "./HeaderBtnLogin";
import HeaderBtnLogout from "./HeaderBtnLogout";

function Header() {
  // const loginContext = useTheme()
  // const{login} = loginContext
  // console.log(login)
  

  return (
    <AppBar position="sticky" component="nav">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box
          component={DirectLink}
          to="/"
          sx={{ display: "flex", color: "black", m: 2, textDecoration: "none", }}
          
        >
          <AppleIcon />
          <Typography variant="h6" component="div" fontFamily="Poppins" fontWeight="700">
            MUSIC
          </Typography>
        </Box>
        {sessionStorage.getItem("login")?<HeaderBtnLogin/>:<HeaderBtnLogout/>}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
