import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Footer_";
import Banner from "../../Components/Banner";
import Benefit from "../../Components/Benefit";
import Kelas from "../../Components/Kelas";
import Kategori from "../../Components/Kategori";

export default function Homepage() {
	const [dataProducts, setDataProducts] = useState([]);
	const [dataCategory, setDataCategory] = useState([]);

	const getData = async () => {
		try {
			const response = await axios.get("https://dummyjson.com/products");
			setDataProducts(response.data.products);
			const categories = [
				...new Set(response.data.products.map((product) => product.category)),
			];
			setDataCategory(categories);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getData();
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
