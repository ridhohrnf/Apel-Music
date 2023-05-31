import { Box, Container, Typography } from "@mui/material";
import React from "react";
import "../helper/format/thousand";
import { Link } from "react-router-dom";

export default function Kelas(props) {
	const { data } = props;
	return (
		<>
			<Typography
				variant="h4"
				color="secondary.main"
				sx={{
					fontWeight: "600",
					textAlign: "center",
					fontSize: { xs: "11px", sm: "26px" },
					marginTop: "80px",
					marginBottom: "60px",
				}}
			>
				Explore Kelas Favorit
			</Typography>
			<Container
				maxWidth="lg"
				sx={{
					display: "flex",
					flexWrap: "wrap",
					flexDirection: { xs: "column", sm: "row" },
					alignItems: { xs: "center", sm: "start" },
					gap: 9,
				}}
				// key={index}
			>
				{data.slice(0, 6).map((item, index) => (
					<Link
						to={`/detail/${item.id}`}
						style={{ textDecoration: "none", color: "black" }}
						key={index}
					>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								width: { xs: "100px", sm: "300px" },
								my: 2,
								cursor: "pointer",
								paddingLeft: "15px",
							}}
							key={index}
						>
							<img
								src={item.img_path}
								style={{
									backgroundSize: "cover",
									backgroundRepeat: "no-repeat",
									backgroundPosition: "center",
									borderRadius: "16px",
									width: "350px",
									height: "233px",
								}}
								alt=""
							/>
							<Typography
								sx={{
									fontWeight: "light",
									my: 2,
									marginTop: "10px",
									marginBottom: "10px",
								}}
								color="secondary.abu"
							>
								{item.category_name}
							</Typography>
							<Typography
								sx={{
									fontWeight: "800",
									fontSize: "1rem",
									marginTop: "4px",
									height: "85px",
								}}
							>
								{item.course_name}
							</Typography>
							<Typography color="secondary.main" fontWeight="700">
								{item.price.currency()}
							</Typography>
						</Box>
					</Link>
				))}
			</Container>
		</>
	);
}
