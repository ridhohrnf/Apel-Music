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
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer_";
import { Link as DirectLink, useParams } from "react-router-dom";
import axios from "axios";
import "../../helper/format/currency";

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

function InvoiceDetail() {
	const params = useParams();
	const invoice_guid = params.guid;

	const [data, setData] = useState([]);
	const [invoice, setinvoice] = useState({});

	const getuserinvoice = async (/*userID*/) => {
		const url =
			process.env.REACT_APP_BASE_URL + "api/Keranjang/getinvoicedetail";
		try {
			const response = await axios.get(url, {
				params: { invoice_guid: invoice_guid },
			});
			setData(
				response.data.map((e) => {
					return {
						pk_invoice_detail_id: e.pk_invoice_detail_id,
						class_name: e.class_name,
						class_date: e.class_date,
						category_name: e.category_name,
						prize: e.prize,
					};
				})
			);
		} catch (error) {
			console.log(error);
		}
	};

	const GuidInvoice = async () => {
		const url = process.env.REACT_APP_BASE_URL + "api/Keranjang/GuidInvoice";
		try {
			const response = await axios.get(url, { params: { id: invoice_guid } });
			setinvoice(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getuserinvoice(/*usrid*/);
		GuidInvoice();
	}, [invoice_guid]);

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
		<Link
			underline="hover"
			key="2"
			color="inherit"
			component={DirectLink}
			to="/invoice"
		>
			Invoice
		</Link>,
		<Typography key="3" color="secondary">
			Detail Invoice
		</Typography>,
	];

	const convert_date = (input) => {
		let bdate = new Date(input);
		let date = bdate.getDate();
		let month = bdate.toLocaleString("default", { month: "long" });
		let year = bdate.getFullYear();

		let buy_date = date + " " + month + " " + year;
		return buy_date;
	};

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

				<Typography sx={{ mb: 3 }} fontWeight={"bold"}>
					Rincian Invioice
				</Typography>
				<Box sx={{ display: "flex" }}>
					<Typography sx={{ mb: 1 }}>No. Invoice</Typography>
					<Typography sx={{ mb: 1 }}>: {invoice_guid}</Typography>
				</Box>
				<Box
					sx={{
						width: "100%",
						display: "flex",
						justifyContent: "space-between",
					}}
				>
					<Box sx={{ display: "flex" }}>
						<Typography sx={{ mb: 3 }}>Tanggal Beli</Typography>
						<Typography sx={{ mb: 3 }}>
							: {convert_date(invoice.buy_date)}
						</Typography>
					</Box>
					<Box sx={{ display: "flex" }}>
						<Typography sx={{ mb: 3, fontWeight: "bold", mr: 2 }}>
							Total Harga
						</Typography>
						<Typography sx={{ mb: 3, fontWeight: "bold" }}>
							{parseInt(invoice.total_prize).currency()}
						</Typography>
					</Box>
				</Box>
				<TableContainer sx={{ mb: 12 }}>
					<Table sx={{ minWidth: 700 }} aria-label="customized table">
						<TableHead>
							<TableRow>
								<StyledTableCell align="center">No</StyledTableCell>
								<StyledTableCell align="center">Nama Course</StyledTableCell>
								<StyledTableCell align="center">Kategori</StyledTableCell>
								<StyledTableCell align="center">Jadwal</StyledTableCell>
								<StyledTableCell align="center">Harga</StyledTableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{data.map((row, index) => (
								<StyledTableRow key={row.class_name}>
									<StyledTableCell component="th" scope="row">
										{index + 1}
									</StyledTableCell>
									<StyledTableCell align="center">
										{row.class_name}
									</StyledTableCell>
									<StyledTableCell align="center">
										{row.category_name}
									</StyledTableCell>
									<StyledTableCell align="center">
										{convert_date(row.class_date)}
									</StyledTableCell>
									<StyledTableCell align="center">
										{parseInt(row.prize).currency()}
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

export default InvoiceDetail;
