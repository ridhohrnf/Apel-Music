import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import benefit from "../Assets/img/benefit.png";

const Benefit = () => {
	const CustomBox = styled(Box)(({ theme }) => ({
		display: "flex",
		gap: theme.spacing(10),
		alignItems: "center",
		[theme.breakpoints.down("md")]: {
			flexDirection: "column",
			textAlign: "center",
		},
	}));

	const ImgContainer = styled(Box)(({ theme }) => ({
		width: 500,
	}));

	return (
		<Box sx={{ py: 10 }}>
			<Container>
				<Box sx={{ display: "flex" }}>
					<ImgContainer>
						<img
							src={benefit}
							alt="house"
							style={{ width: "300px", height: "330px" }}
						/>
					</ImgContainer>
					<Box>
						<Typography
							sx={{
								fontSize: "24px",
								color: "#000339",
								fontWeight: "700",
								textAlign: "left",
								marginLeft: "9rem",
								marginBottom: "24px",
							}}
						>
							Benefit ikut Apel Course
						</Typography>
						<Typography
							sx={{
								fontSize: "16px",
								color: "#5A6473",
								lineHeight: "27px",
								textAlign: "justify",
								marginLeft: "9rem",
							}}
						>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
							quae ab illo inventore veritatis et quasi architecto beatae vitae
							dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
							aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
							eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
							est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
							velit, sed quia non numquam eius modi tempora incidunt ut labore
							et dolore magnam aliquam quaerat voluptatem.
						</Typography>
					</Box>
				</Box>
			</Container>
		</Box>
	);
};

export default Benefit;
