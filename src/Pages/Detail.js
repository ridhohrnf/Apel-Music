import { Box, Button, Divider, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Select from "../Components/Select/Select";
import "../helper/format/currency";
import "../helper/format/thousand";
import { useGlobalContext } from "../helper/hook/useGlobalState";
import jwtDecode from "jwt-decode";
import Payment from "./Payment.jsx";
import { useHistory } from "react-router-dom";

export default function Detail() {
  const history = useHistory();
  const token = sessionStorage.getItem("token");

  const [auth, setAuth] = useState({});

  const handletoken=(input)=>{
	setAuth(input)
  }


	useEffect(() => {
		if (detailId) {
			getData();
		}
	}, [detailId]);

  const { detailId } = useParams();
  const [data, setData] = useState({});
  const [category, setCategory] = useState([]);
  const [jadwal, setJadwal] = useState("");
  const { dispatch } = useGlobalContext();

  const getData = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_BASE_URL +
          `api/ClassAndCourse/GetCourse/${detailId}`
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const cartInput = {
    fk_course: detailId,
    fk_user: auth.name,
    tanggal: new Date(jadwal),
  };

  const PushtoCart = () => {
    const url =
      process.env.REACT_APP_BASE_URL + "api/Keranjang/postDetailInvoice";
    try {
      axios.post(url, cartInput).then((response) => {
        //console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (detailId) {
      getData();
    }
	if (!!token){
		handletoken(jwtDecode(token))
	}
	else {
		history.push("/login");
	  }
	
  }, [detailId]);

  const getCategory = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_BASE_URL +
          `api/ClassAndCourse/GetCourseByCategory/${detailId}`
      );
      //console.log(response.data);
      setCategory(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (detailId) {
      getCategory();
    }
  }, [detailId]);

  const handleCart = () => {
    const form = {
      id: data.pk_class_id,
      title: data.class_name,
      price: data.prize,
      img: data.img_path,
      category: data.fk_category_id,
      jadwal: jadwal,
    };

    dispatch({ type: "ADD_CART", item: form });
  };
  return (
    <Layout>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            // bgcolor: "lemonchiffon",
            display: "flex",
            mx: "70px",
            gap: "40px",
            my: "40.5px",
            alignItems: "center",
          }}
        >
          <img
            src={data.img_path}
            alt="timer"
            style={{
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              borderRadius: "16px",
              width: "400px",
              height: "266.67px",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              // bgcolor: "cyan",
              width: "100%",
            }}
          >
            <Typography
              sx={{ fontWeight: "light", color: "gray", fontSize: "16px" }}
            >
              {data.fk_category_id === 1
                ? "Drum"
                : data.fk_category_id === 2
                ? "Piano"
                : data.fk_category_id === 3
                ? "Gitar"
                : data.fk_category_id === 4
                ? "Bass"
                : data.fk_category_id === 5
                ? "Biola"
                : data.fk_category_id === 6
                ? "Menyanyi"
                : data.fk_category_id === 7
                ? "Flute"
                : data.fk_category_id === 8
                ? "Saxophone"
                : "Unknown"}
            </Typography>
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "24px",
              }}
            >
              {data.class_name}
            </Typography>
            <Typography sx={{ color: "blue", fontSize: "24px" }}>
              {parseInt(data.prize).currency()}
            </Typography>

            {/* SELECT */}
            <Select
              label="Pilih Jadwal Kelas"
              value={jadwal}
              onSelectChange={(e) => setJadwal(e.target.value)}
            />

            {/* BTN */}
            <Box sx={{ display: "flex", mt: "60px", gap: "16px" }}>
              <Button
                variant="contained"
                onClick={() => {
                  PushtoCart();
                  window.location =
                    process.env.REACT_APP_BASE_URL_FRONT + "keranjang";
                }}
                disabled={!jadwal}
              >
                Masukkan Keranjang
              </Button>
              <Payment data={cartInput} price={data.prize} date={jadwal}/>
            </Box>
            {/*TUTUP BTN */}
          </Box>
        </Box>
        <Box sx={{ mt: "40px", mx: "70px", my: "40.5px" }}>
          <Typography fontSize="24px">Deskripsi</Typography>
          <Typography fontSize="16px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Box>
        <Divider orientation="horizontal" flexItem />
        <Box
          sx={{
            mt: "40px",
            mx: "70px",
            my: "40.5px",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: { xs: "center", sm: "start" },
            alignItems: { xs: "center", sm: "start" },
            gap: 4,
          }}
        >
          {category.map(
            (item, index) =>
              item.pk_class_id !== data.pk_class_id && (
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
                    }}
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
                      sx={{ fontWeight: "light", color: "gray", my: 2 }}
                    >
                      {item.fk_category_id === 1
                        ? "drum"
                        : item.fk_category_id === 2
                        ? "piano"
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
                      sx={{
                        fontWeight: "bold",
                        fontSize: "1rem",
                        marginTop: "4px",
                      }}
                    >
                      {item.class_name}
                    </Typography>
                    <Typography sx={{ color: "blue" }}>
                      {parseInt(item.prize).currency()}
                    </Typography>
                  </Box>
                </Link>
              )
          )}
        </Box>
      </Box>
      <Divider orientation="horizontal" flexItem />
    </Layout>
  );
}
