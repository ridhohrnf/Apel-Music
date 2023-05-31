import { HowToReg } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link as DirectLink, useHistory } from "react-router-dom";
import ErrorBox from "../../Components/ErrorBox";
import Header from "../../Components/Header";
import { useError } from "../../Context/ErrorContext";
import jwt from "jwt-decode"
// import { useTheme } from "../../Context/HeaderContext";

const initialStateData = {
  email: "",
  password: "",
};
function Login() {
  //===================================================== Handle loading button
  const [loadingSts, setLoadingSts] = useState(false);
  function handleLoading() {
    setLoadingSts(true);
  }
  //===================================================== Handle Input
  const [user, setUser] = useState(initialStateData);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  //===================================================== Handle Error

  let [error, setError] = useState(true);
  const isEmpty = () => {
    Object.values(user).includes("")
      ? setError(true)
      : setError(false);
  };

  const errorContext = useError();
  const {

    errorPassword,
    handleErrorPassword,
    passwordErrorMsg,
    setPasswordData,

    errorEmail,
    handleErrorEmail,
    emailErrorMsg,
    setEmailData,
  } = errorContext;


  setPasswordData(user.password);

  setEmailData(user.email);

  const [disabled, setDisabled] = useState();
  const cekDisabledBtn = () => {
    if (error) {
      setDisabled(true);
    } else if (
      !errorEmail &&
      !errorPassword 
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
    //==============================================================  Handling Error Backend
    const [open, setOpen] = useState(false);
    const [errorServer, setErrorServer] = useState("Error");
    const closeError = ()=>{setOpen(false)}
  //===================================================== Handle Login
  const history = useHistory(); 
  const handleSubmit = async() => {
    const url = process.env.REACT_APP_BASE_URL+"api/user/login";
    
    await axios.post(url, user).then(response => {
      sessionStorage.setItem("token", response.data.token);
      sessionStorage.setItem("login", true);
      const auth = jwt(sessionStorage.getItem("token"))
      setUser(initialStateData);
      if(auth.role==='admin'){

        history.push("/admin");
      } else {

        history.push("/");

        
      }
    })
    .catch(error => {
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
          <Typography variant="h6" fontWeight="bold" mb={1}>Selamat Datang Musikers!</Typography>
          <Typography  mb={4}>Login dulu yuk</Typography>
          
          {open?<ErrorBox error={errorServer} closeError={closeError}/>:<Box/>}

          <TextField
            fullWidth
            required
            size="small"
            id="email_input"
            name="email"
            value={user.email}
            onChange={handleInputChange}
            label="Masukan Email Pengguna"
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
            value={user.password}
            onChange={handleInputChange}
            label="Masukan Password"
            type="password"
            variant="outlined"
            sx={{ mt: 3 }}
            error={errorPassword}
            onBlur={handleErrorPassword}
            helperText={errorPassword ? passwordErrorMsg() : ""}
          />
        </Box>
        <Box
          sx={{
            width: "60%",
            display: "flex",
            justifyContent: "flex-end",
            m: 2,
          }}
        >
          <Link 
              color="black"
              underline="none" component={DirectLink} to="/verification">
            Lupa Password?
          </Link>
        </Box>
        <Box
          sx={{
            width: "60%",
            display: "flex",
            justifyContent: "start",
            m: 2,
            flexDirection: "column",
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
              Masuk
            </LoadingButton>
          </Box>
          <Box display="flex" mt={2}>
            <Typography mr={1}>Belum punya akun? </Typography>
            <Link
              component={DirectLink}
              to="/register"
              color="secondary"
              underline="none"
            >
              Daftar disini
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
