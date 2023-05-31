import { Divider } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Hero from "../Components/Hero/Hero";
import Kelas from "../Components/Kelas/Kelas";
import Layout from "../Components/Layout/Layout";

export default function Category() {
	const [dataProducts, setDataProducts] = useState([]);
	const { id } = useParams();
	const location = useLocation();
	const { category_name, banner } = location.state;

	const getData = async () => {
		try {
			const response = await axios.get(
				process.env.REACT_APP_BASE_URL +
					`api/ClassAndCourse/GetCourseByCategory/${id}`
			);
			setDataProducts(response.data);
			//console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<Layout>
			{/* <p>User adalah {user.nama} </p> */}
			<Hero categoryName={category_name} banner={banner} />
			<Divider orientation="horizontal" flexItem />
			<Kelas data={dataProducts} />
		</Layout>
	);
}
