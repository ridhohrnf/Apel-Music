import { Box, MenuItem, TextField } from "@mui/material";
import React from "react";

export default function Select({ label, value, onSelectChange }) {
	function generateDate() {
		let dateOptions = {
			day: "numeric",
			month: "long",
			year: "numeric",
		};
		let startDate = new Date();
		startDate.setDate(startDate.getDate() + 2);
		let endDate = new Date();
		endDate.setDate(startDate.getDate() + 5);
		const dateRange = [];

		while (startDate <= endDate) {
			const dayname = startDate.toLocaleDateString("id-ID", { weekday: "long" });
			const day = startDate.toLocaleDateString("id-ID", { day: "numeric" });
			const month = startDate.toLocaleDateString("id-ID", { month: "long" });
			const year = startDate.toLocaleDateString("id-ID", { year: "numeric" });
			const date = `${dayname}, ${day} ${month} ${year}`;
			dateRange.push(date);
			startDate.setDate(startDate.getDate() + 1);

		}

		return dateRange;
	}

	return (
		<>
			{/* FORM */}
			<Box width="250px" mt="32px">
				<TextField
					label={label}
					fontSize="15px"
					select
					value={value}
					onChange={(itemValue) => onSelectChange(itemValue)}
					fullWidth
				>
					{generateDate().map((date, index) => (
						<MenuItem key={index} value={date}>
							{date}
						</MenuItem>
					))}
				</TextField>
			</Box>
			{/* TUTUP FORM */}
		</>
	);
}
