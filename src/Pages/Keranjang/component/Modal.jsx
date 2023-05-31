import {
  Button,
  Container,
  Modal,
  Typography,
  Box,
  Checkbox,
  Alert,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link as DirectLink } from "react-router-dom";
import axios from "axios";
import jwtDecode from "jwt-decode";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  height: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  justifyContent: "center",
};

export default function PaymentModal(props) {
  
  const [open, setOpen] = useState(false);
  const [unpaid, setUnpaid] = useState(false);

  const [paidStatus, setPaidStatus] = useState([]);
  const [paidMethod, setPaidMethod] = useState("");
  const [courseID, setCourseID] = useState([]);

  const handleClose = () => setOpen(false);
  const handleunpaid = () => setUnpaid(false);

  const auth = jwtDecode(sessionStorage.getItem("token"));

  const input = {
    id: courseID,
    buy_date: new Date(),
    payment_method: paidMethod,
    class_qty: courseID.length,
    total_prize: parseInt(props.total),
    fk_user_id: auth.name,
  };

  const getpayment = async()=>{
    const url = process.env.REACT_APP_BASE_URL+"api/Admin/GetPaymentMethod";

    try {
      const response = await axios.get(url);
      setPaidStatus(
        response.data.map((e) => {
          return {
            id: e.pk_payment_id,
            select: false,
            method: e.method,
            link: e.img_path,
          };
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
  

  const UpdateInovoice = () => {
    const url = process.env.REACT_APP_BASE_URL + "api/Keranjang/updateInvoice";
    try {
      axios.post(url, input).then((response) => {
        //console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    //setting paid option
    getpayment()

    //reseting paid method
    setPaidMethod("");

    //getting course id
    var course = props.data.map((d) => {
      if (d.select == true) {
        return d.id;
      }
    });
    setCourseID(
      course.filter((e) => {
        return e !== undefined;
      })
    );
  }, [props.data]);

  return (
    <Container sx={{}}>
      <Button
        variant="contained"
        color="secondary"
        width="1rem"
        onClick={() => {
          let flag = false;

          props.data.map((d) => {
            if (d.select) {
              flag = true;
            }
          });

          if (flag) {
            setOpen(true);
          } else {
            setUnpaid(true);
          }
        }}
      >
        Bayar Sekarang
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Pilih Methode Pembayaran
          </Typography>
          {paidStatus.map((element) => {
            let color = "";
            if(element.select){
              color="#FFD966"
            } else {
              color = "white"
            }
            return (
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  padding: 1,
                  backgroundColor: color,
                  cursor:"pointer"
                }}
                onClick={()=>{
                  paidStatus.map(data=>{
                    if (element.id === data.id){
                      data.select = true
                      setPaidMethod(element.method)
                    } else {
                      data.select = false
                    }
                    return data;
                  })
                }}
              >
                <img width={"30px"} src={element.link} alt="" />
                <Typography sx={{ml:2}}>{element.method}</Typography>
              </Box>
            );
          })}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              paddingTop: 1,
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                handleClose();
              }}
            >
              Batal
            </Button>
            <Button
              variant="contained"
              color="secondary"
              size="Large"
              onClick={() => {
                let flag2 = false;
                paidStatus.map((data) => {
                  if (data.select) {
                    flag2 = true;
                  }
                });
                if (flag2) {
                  UpdateInovoice();
                  window.location =
                    process.env.REACT_APP_BASE_URL_FRONT + "keranjang/success";
                } else {
                  return (<Alert severity="info">Pilih Metode Pembayaran</Alert>);
                }
              }}
            >
              Bayar
            </Button>
          </Box>
        </Box>
      </Modal>
      <Modal open={unpaid} onClose={handleunpaid}>
        <Box sx={style}>Anda Belum Memilih course</Box>
      </Modal>
    </Container>
  );
}
