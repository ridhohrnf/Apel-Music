import AppleIcon from "@mui/icons-material/Apple";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
	AppBar,
	Badge,
	Box,
	Divider,
	Drawer,
	IconButton,
	Toolbar,
	Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../helper/hook/useGlobalState";
import "../../styles/HeaderStyles.css";

export default function Header() {
	const [mobileOpen, setMobileOpen] = useState(false);
	// get global State
	const { state } = useGlobalContext();

	const handleTogle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<Box onClick={handleTogle} sx={{ textAlign: "center" }}>
			<Link to={"/"}>
				<Typography
					color={"darkmagenta"}
					variant="h6"
					component="div"
					sx={{
						flexGrow: 1,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<AppleIcon />
					MUSIC
				</Typography>
			</Link>
			<Divider />
			{/* list menu */}
			<ul className="mobile-menu">
				<li>
					<Link to={"/cart"}>
						<Badge
							badgeContent={Object.keys(state.cart).length}
							color="primary"
						>
							<ShoppingCartIcon />
						</Badge>
					</Link>
				</li>
				<li>
					<Link to={"/about"}>Kelasku</Link>
				</li>
				<li>
					<Link to={"/contact"}>Pembelian</Link>
				</li>
				<Divider orientation="vertical" flexItem />
				<li>
					<Link to={"/contact"}>
						<PersonIcon />
					</Link>
				</li>
				<li>
					<Link to={"/contact"}>
						<LogoutIcon />
					</Link>
				</li>
			</ul>
			{/* tutup list menu */}
		</Box>
	);

	return (
		<>
			<Box>
				<AppBar component={"nav"} sx={{ bgcolor: "#FFAA1D" }}>
					<Toolbar>
						<Typography
							color={"darkmagenta"}
							variant="h6"
							component="div"
							sx={{
								flexGrow: 1,
								display: "flex",
								alignItems: "center",
							}}
						>
							<Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
								<AppleIcon />
								MUSIC
							</Link>
						</Typography>

						{/* list menu */}
						<Box sx={{ display: { xs: "none", sm: "block" } }}>
							<ul className="navigation-menu">
								<li>
									<Link to={"/cart"}>
										<Badge
											badgeContent={Object.keys(state.cart).length}
											color="primary"
										>
											<ShoppingCartIcon />
										</Badge>
									</Link>
								</li>
								<li>
									<Link to={"/about"}>Kelasku</Link>
								</li>
								<li>
									<Link to={"/contact"}>Pembelian</Link>
								</li>
								<Divider orientation="vertical" flexItem />
								<li>
									<Link to={"/contact"}>
										<PersonIcon />
									</Link>
								</li>
								<li>
									<Link to={"/contact"}>
										<LogoutIcon />
									</Link>
								</li>
							</ul>
						</Box>
						{/*tutup list menu */}

						{/* humburger */}
						<IconButton
							sx={{ mr: 2, display: { sm: "none" } }}
							color="inherit"
							arial-label="open drawer"
							edge="start"
							onClick={handleTogle}
						>
							<MenuIcon />
						</IconButton>
						{/* tutup humburger */}
					</Toolbar>
				</AppBar>

				{/* DRAWER ROM LEFT */}
				<Box component="nav">
					<Drawer
						variant="temporary"
						open={mobileOpen}
						onClose={handleTogle}
						sx={{
							display: { xs: "block", sm: "none" },
							"& .MuiDrawer-paper": {
								boxSizing: "border-box",
								width: "240px",
							},
						}}
					>
						{drawer}
					</Drawer>
				</Box>
				{/*END  DRAWER ROM LEFT */}

				<Box>
					<Toolbar />
				</Box>
			</Box>
		</>
	);
}
