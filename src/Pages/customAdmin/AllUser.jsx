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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.black,
    fontWeight:"bold"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.primary.light,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function AllUser() {
  const [data, setData] = useState([]);
  
  const change = (input)=>{
    if (input){
      return "Active"
    } else {
      return "Inactive"
    }
  }

  const getuserinvoice = async (/*userID*/) => {
    const url = process.env.REACT_APP_BASE_URL+"api/Admin/AllUsers";
    try {
      const response = await axios.get(url);
      setData(
        response.data.map((e) => {
          return {
            user_guid: e.user_guid,
            username: e.username,
            email: e.email,
            role: e.role,
            activation: change(e.activation),
          };
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getuserinvoice(/*usrid*/);
  }, []);

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
            alignItems: "start",
          }}
        >


          <Typography sx={{ mb: 2, fontWeight:"bold", variant:"h5"}}>Menu User</Typography>

        <TableContainer sx={{ mb: 12 }}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>No</StyledTableCell>
                <StyledTableCell align="center">user_guid</StyledTableCell>
                <StyledTableCell align="center">username</StyledTableCell>
                <StyledTableCell align="center">email</StyledTableCell>
                <StyledTableCell align="center">role</StyledTableCell>
                <StyledTableCell align="center">aktivasi akun</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <StyledTableRow key={row.id_inv}>
                  <StyledTableCell component="th" scope="row">
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.user_guid}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.username}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.email}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.role}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.activation}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Footer />
      </Box>
    </Box>
  );
}

export default AllUser;
