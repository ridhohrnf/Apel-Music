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
  CssBaseline,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import { Link as DirectLink } from "react-router-dom";
import Footer from "../../Components/Footer_";
import axios from "axios";
import jwtDecode from "jwt-decode";
import "../../helper/format/currency"
import SidebarAdmin from "../../Components/SidebarAdmin";

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

function Allpayment() {
  const [data, setData] = useState([]);

  const getuserinvoice = async (/*userID*/) => {
    const url = process.env.REACT_APP_BASE_URL+"api/Admin/GetPaymentMethod";
    try {
      const response = await axios.get(url);
      setData(
        response.data.map((e) => {
          return {
            pk_payment_id: e.pk_payment_id,
            method: e.method,
            img_path: e.img_path,
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


        <Typography sx={{ mb: 2, fontWeight:"bold", variant:"h5"}}>All Payments</Typography>

        <TableContainer sx={{ mb: 12 }}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>No</StyledTableCell>
                <StyledTableCell align="center">Icon</StyledTableCell>
                <StyledTableCell align="center">Payment Method</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <StyledTableRow key={row.id_inv}>
                  <StyledTableCell component="th" scope="row">
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.method}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                  <img width={"30px"} src={row.img_path} alt="" />
                  </StyledTableCell>
                  <StyledTableCell align="center">
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

export default Allpayment;
