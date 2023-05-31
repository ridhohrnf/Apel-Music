import { NavigateNext } from "@mui/icons-material";
import {
  Box,
  Breadcrumbs,
  Link,
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import { Link as DirectLink } from "react-router-dom";
import Footer from "../../Components/Footer_";
import axios from "axios";
import jwtDecode from "jwt-decode";
import "../../helper/format/currency"
import SidebarAdmin from "../../Components/SidebarAdmin";
import CssBaseline from '@mui/material/CssBaseline';
import AdminHomepageImg from "../../Assets/img/Admin.svg"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import jwt from "jwt-decode"
import CountBox from "../../Components/CountBox";

function AdminHomepage() {


     const history = useHistory();
     
     
     const token = sessionStorage.getItem("token");

     const cekToken = ()=>{
       const user = jwt(token)
       if(user.role!='admin'){
         history.push("/")
       }
     }
     //const auth =()=> {!!token?cekToken():history.push("/");}

     if (!!token){
      cekToken()
     } else{
      history.push("/")
     }
  
    //  useEffect(() => {
    //    auth();
    // }, [])


  return (
    <Box sx={{ display: 'flex' }}>
      <SidebarAdmin/>
      <Box sx={{ flexGrow: 1 }}>
      <CssBaseline/>
      <Header />
        <Box
          sx={{
            m: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
            <CountBox/>
            <img src={AdminHomepageImg} width="50%" />
         
        </Box>
      
      <Footer />
      </Box>
    </Box>
  );
}

export default AdminHomepage;
