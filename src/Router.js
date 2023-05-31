import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/User/Login";
import Homepage from "./Pages/Homepage";
import HomepageUser from "./Pages/User/HomepageUser";
import Register from "./Pages/User/Register";
import EmailVerification from "./Pages/User/Respon/EmailVerification";
import ResetVerification from "./Pages/User/ResetVerification";
import ResetPassword from "./Pages/User/ResetPassword";
import Invoice from "./Pages/Invoice/Invoice";
import InvoiceDetail from "./Pages/Invoice/InvoiceDetail";
import Kelas from "./Pages/Kelas/Kelas";
import Keranjang from "./Pages/Keranjang/Keranjang.jsx";
import Success from "./Pages/Keranjang/Success";
import EmailSend from "./Pages/User/Respon/EmailSend";
import Detail from "./Pages/Detail";
import Category from "./Pages/Category";
// import MenuKelas from "./Pages/MenuKelas";
import UserNotFound from "./Pages/User/Respon/UserNotFound";
import ReqReset from "./Pages/User/Respon/ReqReset";
import PasswordChanged from "./Pages/User/Respon/PasswordChanged";
import UserAlreadyActive from "./Pages/User/Respon/UserAlreadyActive";
import ServerError from "./Pages/User/Respon/ServerError";
import Home from "./Pages/Admin/home/Home";
import LoginAdmin from "./Pages/Admin/login/Login";
import List from "./Pages/Admin/list/List";
import Single from "./Pages/Admin/single/Single";
import New from "./Pages/Admin/new/New";
import { productInputs, userInputs } from "./formSource";
import "./styles/dark.scss";
import AdminInvoice from "./Pages/customAdmin/Invoice";
import AllUser from "./Pages/customAdmin/AllUser";
import AdminHomepage from "./Pages/customAdmin/AdminHomepage";
import PaymentMethod from "./Pages/customAdmin/PaymentMethod";
function routes() {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<Homepage />
				</Route>
				<Route exact path="/Detail/:detailId">
					<Detail />
				</Route>
				<Route exact path="/Category/:id">
					<Category />
				</Route>
				<Route exact path="/login">
					<Login />
				</Route>
				<Route exact path="/register">
					<Register />
				</Route>
				<Route exact path="/register/send">
					<EmailSend />
				</Route>
				<Route exact path="/register/verifikasi">
					<EmailVerification />
				</Route>
				<Route exact path="/verification">
					<ResetVerification />
				</Route>
				<Route exact path="/reset/:result">
					<ResetPassword />
				</Route>
				<Route exact path="/user_not_found">
					<UserNotFound />
				</Route>
				<Route exact path="/user_already_active">
					<UserAlreadyActive />
				</Route>
				<Route exact path="/server_error">
					<ServerError />
				</Route>
				<Route exact path="/req_reset">
					<ReqReset />
				</Route>
				<Route exact path="/success_reset">
					<PasswordChanged />
				</Route>
				<Route exact path="/invoice">
					<Invoice />
				</Route>
				<Route exact path="/invoice/detail/:guid">
					<InvoiceDetail />
				</Route>
				<Route exact path="/kelas">
					<Kelas />
				</Route>
				<Route exact path="/keranjang">
					<Keranjang />
				</Route>
				<Route exact path="/keranjang/success">
					<Success />
				</Route>
				<Route exact path="/admin2">
					<Home />
				</Route>
				<Route exact path="/admin">
					<AdminHomepage />
				</Route>
				<Route exact path="/admininvoice">
					<AdminInvoice />
				</Route>
				<Route exact path="/users">
					<List />
				</Route>
				<Route exact path="/all_user">
					<AllUser />
				</Route>
				<Route exact path="/paymentmethod">
					<PaymentMethod />
				</Route>

				{/* <Route path="/admincoba/">
          <Route index element={<Home/>} />
          <Route path="login" element={<LoginAdmin />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={userInputs} title="Add New User" />}
            />
          </Route>
          <Route path="products">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route
              path="new"
              element={<New inputs={productInputs} title="Add New Product" />}
            />
          </Route>
        </Route> */}
			</Switch>
		</Router>
	);
}

export default routes;
