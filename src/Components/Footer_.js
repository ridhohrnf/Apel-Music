import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
	return (
		<>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					bgcolor: "primary.main",
					color: "white",
					px: 2,
					py: 2,
					flexWrap: "wrap",
					justifyContent: "space-between",
					gap: { xs: 1 },
				}}
			>
				{/* Tentang */}
				<Box
					sx={{
						maxWidth: "450px",
						display: "flex",
						flexDirection: "column",
						// bgcolor: "red",
					}}
				>
					<Typography
						variant="h5"
						color="black"
						sx={{
							fontWeight: "bold",
							fontSize: "18px",
							marginLeft: "95px",
							marginTop: "16px",
							marginBottom: "8px",
						}}
					>
						Tentang
					</Typography>
					<Typography
						variant="h5"
						color="black"
						sx={{
							fontSize: "12px",
							textAlign: "justify",
							marginLeft: "95px",
							fontSize: "14px",
							lineHeight: "21px",
							textAlign: "justify",
							marginBottom: "59px",
						}}
					>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
						quae ab illo inventore veritatis et quasi architecto beatae vitae
						dicta sunt explicabo.
					</Typography>
				</Box>
				{/* tutup Tentang */}

				{/* Produk */}
				<Box
					sx={{
						width: "250px",
						display: "flex",
						flexDirection: "column",
						px: 2,
					}}
				>
					<Typography
						color="black"
						variant="h5"
						sx={{
							fontWeight: "bold",
							fontSize: "18px",
							marginLeft: "14px",
							marginTop: "16px",
						}}
					>
						Produk
					</Typography>
					<Box
						sx={{
							"& ul": {
								display: "grid",
								gridTemplateColumns: "repeat(2, auto)",
								gridTemplateRows: "repeat(3,auto)",
								gridAutoFlow: "column",
								gap: "8px",
							},
						}}
					>
						<Typography color="black">
							<ul>
								<li>Biola</li>
								<li>Gitar</li>
								<li>Drum</li>
								<li>Menanyi</li>
								<li>Piano</li>
								<li>Saxopone</li>
							</ul>
						</Typography>
					</Box>
				</Box>
				{/* Tutup Produk */}

				{/* Alamat & Kontak */}
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: 1,
						// bgcolor: "green",
					}}
				>
					<Box>
						<Typography
							color="black"
							variant="h5"
							sx={{
								fontWeight: "bold",
								fontSize: "18px",
								marginTop: "16px",
								marginBottom: "8px",
							}}
						>
							Alamat
						</Typography>
						<Typography
							color="black"
							variant="h5"
							sx={{
								fontSize: "14px",
								textAlign: "justify",
								width: "350px",
								height: "42px",
								gap: 2,
							}}
						>
							Sed ut perspiciatis unde omnis iste natus error sit voluptatem
							accusantium doloremque.
						</Typography>
					</Box>
					<Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
						<Typography
							variant="h5"
							color="black"
							sx={{ fontWeight: "bold", fontSize: "18px" }}
						>
							Kontak
						</Typography>
						<Box sx={{ display: "flex", gap: 1 }}>
							<Box
								color="primary.main"
								sx={{
									borderRadius: "22px",
									"&:hover": {
										backgroundColor: "secondary.main",
									},
									cursor: "pointer",
								}}
								width={40}
								height={40}
								bgcolor="secondary.main"
								display="flex"
								justifyContent="center"
								alignItems="center"
							>
								<PhoneIcon />
							</Box>
							<Box
								color="primary.main"
								sx={{
									borderRadius: "22px",
									"&:hover": {
										backgroundColor: "secondary.main",
									},
									cursor: "pointer",
								}}
								width={40}
								height={40}
								bgcolor="secondary.main"
								display="flex"
								justifyContent="center"
								alignItems="center"
							>
								<InstagramIcon color="inherit" />
							</Box>
							<Box
								color="primary.main"
								sx={{
									borderRadius: "22px",
									"&:hover": {
										backgroundColor: "secondary.main",
									},
									cursor: "pointer",
								}}
								width={40}
								height={40}
								bgcolor="secondary.main"
								display="flex"
								justifyContent="center"
								alignItems="center"
							>
								<YouTubeIcon color="inherit" />
							</Box>
							<Box
								color="primary.main"
								sx={{
									borderRadius: "22px",
									"&:hover": {
										backgroundColor: "secondary.main",
									},
									cursor: "pointer",
								}}
								width={40}
								height={40}
								bgcolor="secondary.main"
								display="flex"
								justifyContent="center"
								alignItems="center"
							>
								<TelegramIcon color="inherit" />
							</Box>
							<Box
								color="primary.main"
								sx={{
									borderRadius: "22px",
									"&:hover": {
										backgroundColor: "secondary.main",
									},
									cursor: "pointer",
								}}
								width={40}
								height={40}
								bgcolor="secondary.main"
								display="flex"
								justifyContent="center"
								alignItems="center"
							>
								<AlternateEmailIcon />
							</Box>
						</Box>
					</Box>
				</Box>
				{/* Tutup Alamat */}
			</Box>
		</>
	);
}
