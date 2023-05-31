import React, { createContext, useContext, useState } from "react";

export const errorContext = createContext();
export const useError = () => {
  return useContext(errorContext);
};

function ErrorContext({ children }) {

    //===============================================================username
  const [errorUsername, setErrorUsername] = useState(false);
  const handleErrorUsername = () => {
    setErrorUsername(true);
  };
  const [usernameData, setUsernameData] = useState("");
  const usernameErrorMsg = () => {
    return /[a-zA-Z]{3,50}/.test(usernameData)
      ? setErrorUsername(false)
      : "Username minimal memiiki huruf 3 karakter";
  };
//===============================================================email
  const [errorEmail, setErrorEmail] = useState(false);
  const handleErrorEmail = () => {
    setErrorEmail(true);
  };
  const [emailData, setEmailData] = useState("");
  const emailErrorMsg = () => {
    return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailData)
      ? setErrorEmail(false)
      : "Email tidak valid";
  };
//===============================================================password
  const [errorPassword, setErrorPassword] = useState(false);
  const handleErrorPassword = () => {
    setErrorPassword(true);
  };
  const [passwordData, setPasswordData] = useState("");
  const passwordErrorMsg = () => {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(passwordData)
      ? setErrorPassword(false)
      : "Password minimal memiliki 8 karakter dengan minimal terdapat 1 huruf, 1 angka dan 1 spesial karakter ";
  };
//===============================================================konfirm password
  const [errorKonfirmPassword, setErrorKonfirmPassword] = useState(false);
  const handleErrorKonfimPassword = () => {
    setErrorKonfirmPassword(true);
  };
  const [konfirmPasswordData, setKonfirmPassordData] = useState("");
  const konfimPasswordErrorMsg = () => {
    return konfirmPasswordData === passwordData
      ? setErrorKonfirmPassword(false)
      : "Password tidak sama";
  };

  return (
    <errorContext.Provider
      value={{
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
      }}
    >
      {children}
    </errorContext.Provider>
  );
}

export default ErrorContext;
