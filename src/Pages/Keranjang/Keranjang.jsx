import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Checkbox,
  Typography,
} from "@mui/material";
import Header from "../../Components/Header";
import BinCard from "./component/BinCard"
import axios from "axios"
import PaymentModal from "./component/Modal";
import jwtDecode from "jwt-decode";
import "../../helper/format/currency";

export default function Keranjang() {
  const [check, setChecked] = useState([]);
  const [total, setTotal] = useState(0);

  const GetUserData = async (/*usrid*/) =>{

    const auth = jwtDecode(sessionStorage.getItem("token"))
    const url = process.env.REACT_APP_BASE_URL+"api/Keranjang/getUserClass";

    try {
      const response = await axios.get(url, {params:{id:auth.name}})
      setChecked(
        response.data.map((d) => {
          return {
            select: false,
            id: d.pk_invoice_detail_id,
            category: d.category_name,
            course: d.class_name,
            date: d.class_date,
            link: d.img_path,
            price: d.prize,
          };
        })
      );
    } catch (error){
      console.log(error)
    }
  }
  

  useEffect(() => {
    GetUserData(/*usrid*/);
  }, []);

  

  return (
    <Box sx={{
      width:"100%"
    }}>
      <Header />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          borderBottom: "2px solid gray",
        }}
      >
        <Box
          sx={{
            display: "flex",
            borderBottom: "2px solid gray",
            width: "80%",
            alignItems: "center",
            paddingTop: 1,
          }}
        >
          <Checkbox
            color="secondary"
            onChange={(e) => {
              let checked = e.target.checked;
              let value = 0
              setChecked(
                check.map((d) => {
                  d.select = checked;
                  return d;
                })
              );

              check.map((d) => {
                if(d.select){
                  value = parseInt(value) + parseInt(d.price)
                }
              })
              setTotal(value)
            }}
          />
          <Typography sx={{ fontWeight: "bold" }}>Select All</Typography>
        </Box>
        <Box
          sx={{
            width: "80%",
            display: "flex",
            flexDirection: "column",
            minHeight: "70vh",
          }}
        >
          {check.map((element, index) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  borderBottom: "2px solid gray",
                }}
              >
                <Checkbox
                  color="secondary"
                  checked={element.select}
                  onChange={(event) => {
                    
                    let checked = event.target.checked;
                    setChecked(
                      check.map((data) => {
                        if (element.id === data.id) {
                          data.select = checked;
                        }
                        return data;
                      })
                    );

                    if (element.select) {
                      setTotal(parseInt(total) + parseInt(element.price));
                    } else {
                      setTotal(parseInt(total) - parseInt(element.price));
                    }
                  }}
                />
                <BinCard data={element} />
              </Box>
            );
          })}
          
        </Box>
      </Box>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            padding: 2,
            display:"flex"
          }}
        >
          <Typography sx={{paddingRight:1}}>Total Biaya: </Typography>
          <Typography color={"blue"} fontWeight={"bold"}>{parseInt(total).currency()}</Typography>
        </Box>
        <Box
          sx={{
            padding: 2,
          }}
        >
          <PaymentModal data={check} total={total}/>
        </Box>
      </Box>
    </Box>
  );
}
