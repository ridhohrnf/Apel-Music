import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Components/Header";
import Footer from "../Components/Footer_";
import Banner from "../Components/Banner";
import Benefit from "../Components/Benefit";
import Kelas from "../Components/Kelas";
import Kategori from "../Components/Kategori";

export default function Homepage() {
  const [dataProducts, setDataProducts] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);

	useEffect(() => {
		axios
			.get(process.env.REACT_APP_BASE_URL + "api/ClassAndCourse/GetCourse/")
			.then((response) => {
				const courses = response.data;
				axios
					.get(process.env.REACT_APP_BASE_URL + "api/ClassAndCourse/GetClass")
					.then((response) => {
						const classes = response.data;
						//console.log(classes);
						const result = courses.map((course) => {
							const category = classes.find(
								(c) => c.pk_category_id === course.fk_category_id
							);
							return {
								id: course.pk_class_id,
								course_name: course.class_name,
								price: course.prize,
								img_path: course.img_path,
								category_name: category.category_name,
								banner: category.banner,
							};
						});

						setDataProducts(result);
					})
					.catch((error) => {
						console.log(error);
					});
			})
			.catch((error) => {
				console.log(error);
			});

		axios
			.get(process.env.REACT_APP_BASE_URL + "api/ClassAndCourse/GetClass")
			.then((response) => {
				setDataCategory(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
		//console.log(dataProducts);
		//console.log(dataCategory);
	}, []);
	return (
		<div>
			<Header />
			<Banner />
			<Kelas data={dataProducts} />
			<Kategori data={dataCategory} />
			<Benefit />
			<Footer />
		</div>
	);
}
// Testing disini
