import { Box, Button, Link, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import { Link as DirectLink, useHistory } from "react-router-dom";
import axios from "axios";
import LoadingButton from "@mui/lab/LoadingButton";
import { HowToReg } from "@mui/icons-material";
import { useError } from "../../Context/ErrorContext";  
import ErrorBox from "../../Components/ErrorBox";

function Register() {
  //============================================================== Loading Button
  const [loadingSts, setLoadingSts] = useState(false);
  function handleLoading() {
    setLoadingSts(true);
  }

  //============================================================ State Data
  const initialStateData = {
    username: "",
    password: "",
    email: "",
  };
  const [addData, setAddData] = useState(initialStateData);

  //============================================================== Input Handling
  const [konfirmasi, setKonfirmasi] = useState("");
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddData({
      ...addData,
      [name]: value,
    });
  };
  //============================================================== Input Error

  let [error, setError] = useState(true);
  const isEmpty = () => {
    Object.values(addData).includes("") || konfirmasi === ""
      ? setError(true)
      : setError(false);
  };

  const errorContext = useError();
  const {
    errorKonfirmPassword,
    handleErrorKonfimPassword,
    konfimPasswordErrorMsg,
    setKonfirmPassordData,

    errorPassword,
    handleErrorPassword,
    passwordErrorMsg,
    setPasswordData,

    errorEmail,
    handleErrorEmail,
    emailErrorMsg,
    setEmailData,
    
    errorUsername,
    handleErrorUsername,
    usernameErrorMsg,
    setUsernameData,
  } = errorContext;

  setKonfirmPassordData(konfirmasi);
  setPasswordData(addData.password);
  setEmailData(addData.email);
  setUsernameData(addData.username);

  const [disabled, setDisabled] = useState();
  const cekDisabledBtn = () => {
    if (error) {
      setDisabled(true);
    } else if (
      !errorUsername &&
      !errorEmail &&
      !errorPassword &&
      !errorKonfirmPassword
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  useEffect(() => {
    isEmpty();
    cekDisabledBtn();
  });
  //==============================================================  Handling Error Submit
  const [open, setOpen] = useState(false);
  const [errorServer, setErrorServer] = useState("Error");
  const closeError = ()=>{setOpen(false)}

  //==============================================================  Handling Submit
  const history = useHistory();
  const handleSubmit = async () => {
    const url = process.env.REACT_APP_BASE_URL+"api/user/RegisterUser";
      await axios
        .post(url, addData)
        .then(() => {
          history.push("/register/send");
        })
        .catch(error => {
          setErrorServer(error.response.data);
          setOpen(true);
        });
      setLoadingSts(false);
  };

  return (
    <Box>
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
            mt: 15,
          }}
        >
          <Typography variant="h6" fontWeight="bold" mb={1}>Selamat Datang Musikers!</Typography>
          <Typography mb={4}>Yuk daftar terlebih dahulu akun kamu</Typography>

          {open?<ErrorBox error={errorServer} closeError={closeError}/>:<Box/>}

          <TextField
            fullWidth
            required
            size="small"
            label="Masukan Nama Pengguna"
            variant="outlined"
            sx={{ mt: 3 }}
            id="username_input"
            name="username"
            value={addData.username}
            onChange={handleInputChange}
            error={errorUsername}
            onBlur={handleErrorUsername}
            helperText={errorUsername ? usernameErrorMsg() : ""}
          />
          <TextField
            fullWidth
            required
            size="small"
            id="email_input"
            name="email"
            type="email"
            value={addData.email}
            onChange={handleInputChange}
            label="Masukam Email"
            variant="outlined"
            sx={{ mt: 3 }}
            error={errorEmail}
            onBlur={handleErrorEmail}
            helperText={errorEmail ? emailErrorMsg() : ""}
          />
          <TextField
            fullWidth
            required
            size="small"
            id="password_input"
            name="password"
            type="password"
            value={addData.password}
            onChange={handleInputChange}
            label="Masukan Password"
            variant="outlined"
            sx={{ mt: 3 }}
            error={errorPassword}
            onBlur={handleErrorPassword}
            helperText={errorPassword ? passwordErrorMsg() : ""}
          />
          <TextField
            fullWidth
            required
            size="small"
            id="konfirmasi_input"
            name="konfirmasi"
            type="password"
            onChange={(e) => setKonfirmasi(e.target.value)}
            label="Konfirmasi Password"
            variant="outlined"
            sx={{ mt: 3 }}
            error={errorKonfirmPassword}
            onBlur={handleErrorKonfimPassword}
            helperText={errorKonfirmPassword ? konfimPasswordErrorMsg() : ""}
          />
        </Box>
        <Box
          sx={{
            width: "60%",
            display: "flex",
            justifyContent: "start",
            mt:6,
          }}
        >
          <Box sx={{ display: "flex" }}>
            <LoadingButton
              endIcon={<HowToReg />}
              disabled={disabled}
              loading={loadingSts}
              loadingPosition="end"
              variant="contained"
              color="secondary"
              size="large"
              sx={{ mr: 5 }}
              onClick={() => {
                handleLoading();
                handleSubmit();
              }}
            >
              Daftar
            </LoadingButton>
          </Box>
          <Box display="flex" mt={2}>
            <Typography mr={1}>Sudah punya akun? </Typography>
            <Link
              component={DirectLink}
              to="/login"
              color="secondary"
              underline="none"
            >
              Login disini
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Register;
