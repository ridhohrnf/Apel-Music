import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function ErrorBox({ error, closeError }) {
  return (
    <Box
      sx={{
        backgroundColor: "#ffcdd2",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
        borderRadius:"5px",
        
      }}
    >
      <Typography sx={{ml:2}}>{error}</Typography>
      <Button
        color="secondary"
        onClick={() => {
          closeError();
        }}
      >
        X
      </Button>
    </Box>
  );
}

export default ErrorBox;
