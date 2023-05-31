import { Box, Button, Link, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import { Link as DirectLink, useHistory } from "react-router-dom";
import axios from "axios";
import { useError } from "../../Context/ErrorContext";
import ErrorBox from "../../Components/ErrorBox";
import { LoadingButton } from "@mui/lab";
import { LockReset } from "@mui/icons-material";

const ResetVerification = () => {
  //===================================================== Handle loading button
  const [loadingSts, setLoadingSts] = useState(false);
  function handleLoading() {
    setLoadingSts(true);
  }
  //===================================================== Handle Input
  const [email, setEmail] = useState();

  //===================================================== Handle Error

  let [error, setError] = useState(true);
  const isEmpty = () => {
    email === "" ? setError(true) : setError(false);
  };

  const errorContext = useError();
  const { errorEmail, handleErrorEmail, emailErrorMsg, setEmailData } =
    errorContext;

  setEmailData(email);

  const [disabled, setDisabled] = useState();
  const cekDisabledBtn = () => {
    if (error) {
      setDisabled(true);
    } else if (!errorEmail) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  useEffect(() => {
    isEmpty();
    cekDisabledBtn();
  });

  //==============================================================  Handling Error Backend
  const [open, setOpen] = useState(false);
  const [errorServer, setErrorServer] = useState("Error");
  const closeError = () => {
    setOpen(false);
  };
  //===================================================== Handle Login

  const history = useHistory();
  const handleSubmit = async () => {
    const url = process.env.REACT_APP_BASE_URL+"api/user/ResetPassword?email=" + email;
    await axios
      .get(url)
      .then(() => {
        history.push("/req_reset");
      })
      .catch((error) => {
      setErrorServer(error.response.data);
      setOpen(true)
      });
      setLoadingSts(false);
  };
  return (
    <Box sx={{ alignItems: "start" }}>
      <Header />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: "60%",
            display: "flex",
            justifyContent: "center",
            alignItems: "start",
            flexDirection: "column",
            mt: 20,
          }}
        >
          <Typography variant="h6" fontWeight="bold" mb={1}>Reset Password</Typography>
          <Typography mb={4}>Silahkan masukan terlebih dahulu email anda</Typography>
          
          {open?<ErrorBox error={errorServer} closeError={closeError}/>:<Box/>}

          <TextField
            fullWidth
            size="small"
            required
            id="outlined-basic"
            label="Masukan Email"
            variant="outlined"
            sx={{ mt: 3 }}
            onChange={(e) => setEmail(e.target.value)}
            error={errorEmail}
            onBlur={handleErrorEmail}
            helperText={errorEmail ? emailErrorMsg() : ""}
          />
        </Box>
        <Box
          sx={{
            width: "60%",
            mt:6,
            display:"flex",
            alignItems:"center"
          }}
        >
            <Button
              component={DirectLink}
              to="/login"
              variant="outlined"
              color="secondary"
              size="large"
              sx={{ mr: 3, mt: 3 }}
            >
              Batal
            </Button>
            <LoadingButton
              endIcon={<LockReset />}
              disabled={disabled}
              loading={loadingSts}
              loadingPosition="end"
              variant="contained"
              color="secondary"
              size="large"
              sx={{ mr: 5, mt: 3 }}
              onClick={() => {
                handleLoading();
                handleSubmit();
              }}
            >
              Konfirmasi
            </LoadingButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ResetVerification;
