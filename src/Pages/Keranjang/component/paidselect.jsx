import {
  Button,
  Box,
  Container,
  Modal,
  Typography,
  CheckBox,
} from "@mui/material";
import React, { useState } from "react";

export default function Paidselect() {
  const [flag, setFlag] = useState(false);

  return (
    <Container>
      <Button>Bayar Sekarang</Button>
      <Box>
        <Modal
          open={flag}
          onClose={() => {
            setFlag(false);
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
            }}
          >
            <Box
              sx={{
                display: "flex",
                textAlign: "left",
              }}
            >
              <CheckBox></CheckBox>
              <img src={require("../../../Assets/PaymenMethod/Gopay.png")} alt="" width="50px"/>
              <Typography>Gopay</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                textAlign: "left",
              }}
            >
              <CheckBox></CheckBox>
              <img src={require("../../../Assets/PaymenMethod/OVO.png")} alt="" width="50px"/>
              <Typography>OVO</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                textAlign: "left",
              }}
            >
              <CheckBox></CheckBox>
              <img src={require("../../../Assets/PaymenMethod/Dana.png")} alt="" width="50px"/>
              <Typography>Dana</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                textAlign: "left",
              }}
            >
              <CheckBox></CheckBox>
              <img src={require("../../../Assets/PaymenMethod/download.png")} alt="" width="50px"/>
              <Typography>Mandiri</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                textAlign: "left",
              }}
            >
              <CheckBox></CheckBox>
              <img src={require("../../../Assets/PaymenMethod/BCA.png")} alt="" width="50px"/>
              <Typography>BCA</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                textAlign: "left",
              }}
            >
              <CheckBox></CheckBox>
              <img src={require("../../../Assets/PaymenMethod/BNI.png")} alt="" width="50px"/>
              <Typography>BNI</Typography>
            </Box>
            <Box sx={{
              display:"flex",
              justifyContent:"space-evenly"
            }}>
              <Button>Batal</Button>
              <Button>Bayar</Button>
            </Box>
          </Box>
        </Modal>
      </Box>
    </Container>
  );
}
