import { Grid, Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import "../App.css";

export default function Banner() {
	return (
		<>
			<section className="banner">
				<Typography variant="h4" sx={{ fontWeight: 600 }}>
					Hi Musiker! Gabung yuk di Apel Music
				</Typography>
				<Typography variant="h5" fontWeight="100" marginBottom="60px">
					Banyak kelas keren yang bisa menunjang bakat bermusik kamu
				</Typography>
				<Grid container>
					<Grid item xs={12} sm={6} md={4}>
						<Box display="flex" justifyContent="right">
							<Card
								sx={{ borderRadius: "20px", width: "324px", height: "220px" }}
							>
								<CardContent>
									<Typography
										color="secondary.main"
										fontWeight="600"
										gutterBottom
										variant="h4"
										component="div"
										textAlign={"center"}
										marginTop="14px"
										marginBottom="3rem"
									>
										500+
									</Typography>
									<Typography
										variant="body2"
										fontWeight="800"
										color="secondary.hitam"
										textAlign="center"
									>
										Lebih dari sekedar kelas biasa yang bisa mengeluarkan bakat
										kalian
									</Typography>
								</CardContent>
							</Card>
						</Box>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Box display="flex" justifyContent="center">
							<Card
								sx={{ borderRadius: "20px", width: "324px", height: "220px" }}
							>
								<CardContent>
									<Typography
										gutterBottom
										variant="h4"
										component="div"
										textAlign={"center"}
										color="secondary.main"
										fontWeight="600"
										marginTop="14px"
										marginBottom="3rem"
									>
										50+
									</Typography>
									<Typography
										variant="body2"
										fontWeight="800"
										color="secondary.hitam"
										textAlign="center"
									>
										Lulusan yang menjadi musisi ternama dengan skill memukau
									</Typography>
								</CardContent>
							</Card>
						</Box>
					</Grid>
					<Grid item xs={12} sm={12} md={4}>
						<Box>
							<Card
								sx={{ borderRadius: "20px", width: "324px", height: "220px" }}
							>
								<CardContent>
									<Typography
										fontWeight="600"
										gutterBottom
										variant="h4"
										component="div"
										textAlign={"center"}
										color="secondary.main"
										marginTop="14px"
										marginBottom="3rem"
									>
										10+
									</Typography>
									<Typography
										variant="body2"
										fontWeight="800"
										color="secondary.hitam"
										textAlign="center"
									>
										Coach Special kolaborasi dengan musisi terkenal
									</Typography>
								</CardContent>
							</Card>
						</Box>
					</Grid>
				</Grid>
			</section>
		</>
	);
}
