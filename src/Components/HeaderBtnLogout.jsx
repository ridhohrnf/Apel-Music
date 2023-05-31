import React from "react";
import { Box, Button } from "@mui/material";
import { Link as DirectLink } from "react-router-dom";
function HeaderBtnLogout() {
	return (
		<Box sx={{ display: "flex", gap: 3 }}>
			<Button
				component={DirectLink}
				to="/register"
				variant="contained"
				disableElevation
				sx={{ textTransform: "none" }}
			>
				Daftar Sekarang
			</Button>
			<Button
				component={DirectLink}
				to="/login"
				variant="contained"
				color="secondary"
				sx={{ textTransform: "none", fontWeight: "400", marginRight: "20px" }}
			>
				Masuk
			</Button>
		</Box>
	);
}

export default HeaderBtnLogout;
