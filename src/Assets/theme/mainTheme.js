import { createTheme } from "@mui/material";

export const mainTheme = createTheme({
	palette: {
		primary: {
			// Purple and green play nicely together.
			main: "#f2c94c",
			light: "#fcf4db",
		},
		secondary: {
			// This is green.A700 as hex.
			main: "#5d5fef",
			contrastText: "#fff",
			hitam: "#333333",
			abu: "#828282",
		},
		Button: { textTransform: "none" },
	},
	typography: { fontFamily: "Poppins" },
});
