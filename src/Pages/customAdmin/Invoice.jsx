import { NavigateNext } from "@mui/icons-material";
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

function AdminInvoice() {
	const [data, setData] = useState([]);

	const getuserinvoice = async (/*userID*/) => {
		const url = process.env.REACT_APP_BASE_URL + "api/Admin/AllInvoice";
		try {
			const response = await axios.get(url);
			setData(
				response.data.map((e) => {
					var date = new Date(e.buy_date);
					let daydate = date.getDate();
					let month = date.toLocaleString("default", { month: "long" });
					let year = date.getFullYear();
					let buy_date = daydate + " " + month + " " + year;
					return {
						invoice_guid: e.invoice_guid,
						pk_invoice_id: e.pk_invoice_id,
						buy_date: buy_date,
						class_qty: e.class_qty,
						total_prize: e.total_prize,
						username: e.username,
					};
				})
			);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getuserinvoice(/*usrid*/);
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
						Menu Invioice
					</Typography>

					<TableContainer sx={{ mb: 12 }}>
						<Table sx={{ minWidth: 700 }} aria-label="customized table">
							<TableHead>
								<TableRow>
									<StyledTableCell>No</StyledTableCell>
									<StyledTableCell align="center">No Invoice</StyledTableCell>
									<StyledTableCell align="center">Nama User</StyledTableCell>
									<StyledTableCell align="center">Tanggal Beli</StyledTableCell>
									<StyledTableCell align="center">
										Jumlah Kursus
									</StyledTableCell>
									<StyledTableCell align="center">Total Harga</StyledTableCell>
									<StyledTableCell align="center">Action</StyledTableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{data.map((row, index) => (
									<StyledTableRow key={row.id_inv}>
										<StyledTableCell component="th" scope="row">
											{index + 1}
										</StyledTableCell>
										<StyledTableCell align="center">
											{row.invoice_guid}
										</StyledTableCell>
										<StyledTableCell align="center">
											{row.username}
										</StyledTableCell>
										<StyledTableCell align="center">
											{row.buy_date}
										</StyledTableCell>
										<StyledTableCell align="center">
											{row.class_qty}
										</StyledTableCell>
										<StyledTableCell align="center">
											{parseInt(row.total_prize).currency()}
										</StyledTableCell>
										<StyledTableCell align="center">
											<Button
												component={DirectLink}
												to={`/invoice/detail/${row.invoice_guid}`}
												color="secondary"
												variant="contained"
												size="small"
											>
												Rincian
											</Button>
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

export default AdminInvoice;
