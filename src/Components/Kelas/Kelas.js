import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "../../helper/format/currency.js";
import "../../helper/format/thousand.js";
import "../../styles/KelasStyles.css";

export default function Kelas(props) {
	const { data } = props;
	//console.log(data);
	return (
		<>
			<Typography
				variant="h4"
				color="secondary.main"
				sx={{
					fontWeight: "bold",
					textAlign: "center",
					fontSize: { xs: "11px", sm: "26px" },
					marginTop: "60px",
					marginBottom: "30px",
				}}
				{...props}
				// color="blue"
			>
				Kelas yang tersedia
			</Typography>
			<Container
				maxWidth="lg"
				sx={{
					display: "flex",
					flexWrap: "wrap",
					flexDirection: { xs: "column", sm: "row" },
					alignItems: { xs: "center", sm: "start" },
					gap: 4,
				}}
			>
				{data.map((item, index) => (
					<Link
						to={`/detail/${item.pk_class_id}`}
						style={{ textDecoration: "none", color: "black" }}
						key={index}
					>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								width: { xs: "100px", sm: "300px" },
								my: 3,
								cursor: "pointer",
								marginLeft: "50px",
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
									width: "100%",
									height: "200px",
								}}
								alt=""
							/>
							<Typography
								color="secondary.abu"
								sx={{
									fontWeight: "400",
									my: 2,
									marginTop: "10px",
									marginBottom: "10px",
								}}
							>
								{item.fk_category_id === 1
									? "Drum"
									: item.fk_category_id === 2
									? "Piano"
									: item.fk_category_id === 3
									? "Gitar"
									: item.fk_category_id === 4
									? "Bass"
									: item.fk_category_id === 5
									? "Biola"
									: item.fk_category_id === 6
									? "Menyanyi"
									: item.fk_category_id === 7
									? "Flute"
									: item.fk_category_id === 8
									? "Saxophone"
									: "Unknown"}
							</Typography>
							<Typography
								color="secondary.hitam"
								sx={{
									fontWeight: "bold",
									fontSize: "1rem",
									height: "85px",
								}}
							>
								{item.class_name}
							</Typography>
							<Typography color="secondary.main" sx={{ fontWeight: "600" }}>
								{item.prize.currency()}
							</Typography>
						</Box>
					</Link>
				))}
			</Container>
		</>
	);
}
