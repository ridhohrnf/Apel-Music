import React from "react";
import { Typography, Box, Container } from "@mui/material";
import { Link } from "react-router-dom";

export default function Kategori(props) {
	const { data } = props;

	return (
		<Container
			maxWidth="xl"
			sx={{
				marginTop: "2rem",
				marginBottom: "5rem",
				bgcolor: "#A5A6F61A",
				height: "574px",
			}}
		>
			<Typography
				sx={{
					paddingBottom: "60px",
					paddingTop: "80px",
					color: "#5D5FEF",
					textAlign: "center",
					fontSize: "24px",
					fontWeight: "600",
				}}
			>
				Pilih Kelas Impian Kamu
			</Typography>
			<Container
				maxWidth="lg"
				sx={{
					display: "grid",
					gridTemplateColumns: "repeat(4, 1fr)",
					gridTemplateRows: "repeat(2, 1fr)",
					justifyContent: "center",
					rowGap: "20px",
					columnGap: "20px",
				}}
			>
				{data.map((item, index) => (
					<Link
						to={{
							pathname: `/category/${item.pk_category_id}`,
							state: {
								category_name: item.category_name,
								banner: item.banner,
							},
						}}
						style={{ textDecoration: "none", color: "black" }}
						key={index}
					>
						<Box
							key={index}
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								cursor: "pointer",
								height: "150px",
							}}
						>
							<img
								src={item.img_path}
								style={{
									width: "100px",
									height: "77px",
								}}
								alt=""
							/>
							<Typography
								sx={{
									fontWeight: "400px",
									color: "secondary.hitam",
									fontSize: "24px",
									my: 2,
									fontFamily: "Poppins",
								}}
							>
								{item.category_name}
							</Typography>
						</Box>
					</Link>
				))}
			</Container>
		</Container>
	);
}
