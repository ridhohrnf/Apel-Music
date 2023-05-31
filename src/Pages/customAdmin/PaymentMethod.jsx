import {
	Box,
	Breadcrumbs,
	Link,
	styled,
	Table,
	TableBody,
	TableCell,
	tableCellClasses,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
	Button,
	CssBaseline,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import { Link as DirectLink } from "react-router-dom";
import Footer from "../../Components/Footer_";
import axios from "axios";
import jwtDecode from "jwt-decode";
import "../../helper/format/currency";
import SidebarAdmin from "../../Components/SidebarAdmin";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.black,
		fontWeight: "bold",
	},
	[`&.${tableCellClasses.body}`]: {
		fontSize: 14,
	},
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
	"&:nth-of-type(even)": {
		backgroundColor: theme.palette.primary.light,
	},
	// hide last border
	"&:last-child td, &:last-child th": {
		border: 0,
	},
}));

function PaymentMethod() {
	const [methods, setMethods] = useState([]);

	useEffect(() => {
		const getPaymentMethods = async () => {
			const response = await axios.get(
				"https://localhost:7256/api/Admin/AllPaymentMethods"
			);
			setMethods(response.data);
		};
		getPaymentMethods();
	}, []);

	return (
		<Box sx={{ display: "flex" }}>
			<SidebarAdmin />
			<Box sx={{ flexGrow: 1 }}>
				<CssBaseline />
				<Header />
				<Box
					sx={{
						m: 5,
						display: "flex",
						flexDirection: "column",
						alignItems: "start",
					}}
				>
					<Typography sx={{ mb: 2, fontWeight: "bold", variant: "h5" }}>
						Payment Methods
					</Typography>

					<TableContainer sx={{ mb: 12 }}>
						<Table sx={{ minWidth: 700 }} aria-label="customized table">
							<TableHead>
								<TableRow>
									<StyledTableCell align="center">ID</StyledTableCell>
									<StyledTableCell align="center">Name</StyledTableCell>
									<StyledTableCell align="center">Logo</StyledTableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{methods.map((row) => (
									<StyledTableRow key={row.id}>
										<StyledTableCell component="th" scope="row" align="center">
											{row.pk_payment_id}
										</StyledTableCell>
										<StyledTableCell align="center">
											{row.method}
										</StyledTableCell>
										<StyledTableCell align="center">
											<img
												src={row.img_path}
												alt="gambar produk"
												width="40px"
												height="40px"
											/>
										</StyledTableCell>
									</StyledTableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Box>

				<Footer />
			</Box>
		</Box>
	);
}

export default PaymentMethod;
