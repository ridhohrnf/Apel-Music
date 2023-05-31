import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import ClassCard from "./component/ClassCard";
import axios from "axios";

export default function KelasAdmin() {
	const [data, setData] = useState([]);

	const GetUserClass = async () => {
		const url = process.env.REACT_APP_BASE_URL + "api/Admin/AllPaidClass";

		try {
			const response = await axios.get(url);
			setData(
				response.data.map((d) => {
					return {
						id: d.pk_invoice_detail_id,
						category: d.category_name,
						course: d.class_name,
						date: d.class_date,
						link: d.img_path,
						username: d.username,
					};
				})
			);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		GetUserClass(/*usrid*/);
		console.log(data);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<Box sx={{ alignItems: "start" }}>
			<Header />
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					flexDirection: "column",
					minHeight: "70vh",
				}}
			>
				<Box
					sx={{
						width: "80%",
						paddingTop: 2,
						paddingBottom: 2,
					}}
				>
					{data.map((element) => {
						return (
							<Box
								sx={{
									display: "flex",
									borderBottom: "2px solid gray",
								}}
							>
								<ClassCard data={element} />
							</Box>
						);
					})}
				</Box>
			</Box>

			<Footer />
		</Box>
	);
}
