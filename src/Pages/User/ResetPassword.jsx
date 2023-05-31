import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import { Link as DirectLink, useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { useError } from "../../Context/ErrorContext";
import ErrorBox from "../../Components/ErrorBox";
import { LoadingButton } from "@mui/lab";
import { LockReset } from "@mui/icons-material";

const ResetPassword = () => {
  //============================================================== Loading Button
  const [loadingSts, setLoadingSts] = useState(false);
  function handleLoading() {
    setLoadingSts(true);
  }
  //============================================================ State Data
  const [reset, setReset] = useState("");
  const [konfirm, setKonfirm] = useState("");

  const { result } = useParams(); //=======Email
  //============================================================== Input Error

  let [error, setError] = useState(true);
  const isEmpty = () => {
    reset === "" || konfirm === "" ? setError(true) : setError(false);
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
  } = errorContext;

  setPasswordData(reset);
  setKonfirmPassordData(konfirm);

  const [disabled, setDisabled] = useState();
  const cekDisabledBtn = () => {
    if (error) {
      setDisabled(true);
    } else if (!errorPassword && !errorKonfirmPassword) {
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
  const closeError = () => {
    setOpen(false);
  };

  //==============================================================  Handling Submit
  const history = useHistory();
  const handleSubmit = async () => {
    const url = process.env.REACT_APP_BASE_URL+"api/user/lupaPassword";
    await axios
      .put(url, {
        result: result,
        password: reset,
      })
      .then(() => {
        history.push("/success_reset");
      })
      .catch((error) => {
        setErrorServer(error.response.data);
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
          <Typography variant="h6" fontWeight="bold" mb={1}>
            Reset Password
          </Typography>
          <Typography mb={4}>
            Silahkan masukan terlebih dahulu email anda
          </Typography>

          {open ? (
            <ErrorBox error={errorServer} closeError={closeError} />
          ) : (
            <Box />
          )}

          <TextField
            fullWidth
            size="small"
            required
            id="password"
            type="password"
            label="Password Baru"
            variant="outlined"
            onChange={(e) => setReset(e.target.value)}
            sx={{ mt: 3 }}
            error={errorPassword}
            onBlur={handleErrorPassword}
            helperText={errorPassword ? passwordErrorMsg() : ""}
          />
          <TextField
            fullWidth
            size="small"
            required
            id="konfirmasiPassword"
            type="password"
            label="Konfirmasi Password Baru"
            onChange={(e) => setKonfirm(e.target.value)}
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
            m: 6,
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Button
              component={DirectLink}
              to="/login"
              variant="outlined"
              color="secondary"
              size="large"
              sx={{ mr: 3 }}
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
              sx={{ mr: 5 }}
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
    </Box>
  );
};

export default ResetPassword;
