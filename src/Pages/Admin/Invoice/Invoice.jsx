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
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import { Link as DirectLink } from "react-router-dom";
import Footer from "../../Components/Footer_";
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
	[`&.${tableCellClasses.head}`]: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.common.black,
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

function InvoiceAdmin() {
	const [data, setData] = useState([]);

	const getuserinvoice = async (/*userID*/) => {
		const url = process.env.REACT_APP_BASE_URL + "api/Admin/AllInvoice";
		try {
			const response = await axios.get(url, { params: { id: 3 } });
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

	const breadcrumbs = [
		<Link
			underline="hover"
			key="1"
			color="inherit"
			component={DirectLink}
			to="/"
		>
			Beranda
		</Link>,
		<Typography key="2" color="secondary">
			Invoice
		</Typography>,
	];
	return (
		<Box>
			<Header />
			<Box
				sx={{
					m: 5,
					display: "flex",
					flexDirection: "column",
					alignItems: "start",
				}}
			>
				<Breadcrumbs
					separator={<NavigateNext fontSize="small" />}
					aria-label="breadcrumb"
					sx={{ mb: 3 }}
				>
					{breadcrumbs}
				</Breadcrumbs>

				<Typography sx={{ mb: 3 }}>Menu Invioice</Typography>

				<TableContainer sx={{ mb: 12 }}>
					<Table sx={{ minWidth: 700 }} aria-label="customized table">
						<TableHead>
							<TableRow>
								<StyledTableCell>No</StyledTableCell>
								<StyledTableCell align="center">No Invoice</StyledTableCell>
								<StyledTableCell align="center">User</StyledTableCell>
								<StyledTableCell align="center">Tanggal Beli</StyledTableCell>
								<StyledTableCell align="center">Jumlah Kursus</StyledTableCell>
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
										{row.total_prize}
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
	);
}

export default InvoiceAdmin;
