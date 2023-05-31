import { Box, Container, Typography } from "@mui/material";
import React from "react";
import "../../styles/HeroStyles.css";

export default function Hero(props) {
	const { categoryName, banner } = props;
	return (
		<>
			<div
				className="hero"
				style={{
					backgroundImage: `url(${banner})`,
					width: "1500px",
					height: "350px",
				}}
			></div>
			<Container>
				<Typography
					variant="h4"
					sx={{
						marginTop: "54px",
						fontSize: "24px",
						fontWeight: "800",
						marginBottom: "20px",
					}}
				>
					{categoryName} Class
				</Typography>
				<Typography sx={{ marginBottom: "74px" }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</Typography>
			</Container>
		</>
	);
}
