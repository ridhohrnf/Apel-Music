import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { Paid, Receipt, ReceiptLong } from "@mui/icons-material";
import axios from "axios";
function CountBox() {
  const initialData={
    user_count : 0,
    invoice_count : 0,
    invoice_detail_count: 0,
    earnings: 0,
  }
  const [data, setData] = useState(initialData)
  const GetAdminPanel = async (/*usrid*/) => {
    const url = process.env.REACT_APP_BASE_URL+"api/Admin/AdminPanel";

    try {
      const response = await axios.get(url);
      setData(response.data);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetAdminPanel();
    //console.log(data);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item md={3}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            padding: "10px",
            WebkitBoxShadow: "2px 4px 10px 1px rgba(0, 0, 0, 0.47)",
            boxShadow: "2px 4px 10px 1px rgba(201, 201, 201, 0.47)",
            borderRadius: "10px",
            height: "110px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ mr: 2 }}>Users</Typography>
            <Box sx={{ display: "flex", color: "green" }}>
              <KeyboardArrowUpIcon />
              <Typography>20%</Typography>
            </Box>
          </Box>
          <Typography sx={{ fontSize: "28px" }}>{data.user_count}</Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "12px" }}>See All User</Typography>
            <PersonOutlinedIcon
              className="icon"
              style={{
                color: "crimson",
                backgroundColor: "rgba(255, 0, 0, 0.2)",
                borderRadius: "5px",
              }}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item md={3}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            padding: "10px",
            WebkitBoxShadow: "2px 4px 10px 1px rgba(0, 0, 0, 0.47)",
            boxShadow: "2px 4px 10px 1px rgba(201, 201, 201, 0.47)",
            borderRadius: "10px",
            height: "110px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ mr: 2 }}>Invoices</Typography>
            <Box sx={{ display: "flex", color: "green" }}>
              <KeyboardArrowUpIcon />
              <Typography>20%</Typography>
            </Box>
          </Box>
          <Typography sx={{ fontSize: "28px" }}>{data.invoice_count}</Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "12px" }}>View All Invoice</Typography>
            <Receipt
              className="icon"
              style={{
                color: "blue",
                backgroundColor: "rgba(0, 0, 225, 0.2)",
                borderRadius: "5px",
              }}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item md={3}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            padding: "10px",
            WebkitBoxShadow: "2px 4px 10px 1px rgba(0, 0, 0, 0.47)",
            boxShadow: "2px 4px 10px 1px rgba(201, 201, 201, 0.47)",
            borderRadius: "10px",
            height: "110px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ mr: 2 }}>Class Purchase</Typography>
            <Box sx={{ display: "flex", color: "green" }}>
              <KeyboardArrowUpIcon />
              <Typography>20%</Typography>
            </Box>
          </Box>
          <Typography sx={{ fontSize: "28px" }}>{data.invoice_detail_count}</Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "12px" }}>View All Class Purchase</Typography>
            <ReceiptLong
              className="icon"
              style={{
                color: "rgba(255, 130, 0, 1)",
                backgroundColor: "rgba(255, 130, 0, 0.1)",
                borderRadius: "5px",
              }}
            />
          </Box>
        </Box>
      </Grid>
      <Grid item md={3}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            padding: "10px",
            WebkitBoxShadow: "2px 4px 10px 1px rgba(0, 0, 0, 0.47)",
            boxShadow: "2px 4px 10px 1px rgba(201, 201, 201, 0.47)",
            borderRadius: "10px",
            height: "110px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ mr: 2 }}>Earnings</Typography>
            <Box sx={{ display: "flex", color: "green" }}>
              <KeyboardArrowUpIcon />
              <Typography>20%</Typography>
            </Box>
          </Box>
          <Typography sx={{ fontSize: "28px" }}> {parseInt(data.earnings).currency()}</Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography sx={{ fontSize: "12px" }}>View Net Earnings</Typography>
            <Paid
              className="icon"
              style={{
                color: "green",
                backgroundColor: "rgba(0, 255, 0, 0.1)",
                borderRadius: "5px",
              }}
            />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default CountBox;
