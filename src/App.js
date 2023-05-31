import "./App.css";
import { ThemeProvider } from "@mui/material";
import Router from "./Router";
import { mainTheme } from "./Assets/theme/mainTheme";
import Provider from "./helper/hook/useGlobalState";
import ErrorContext from "./Context/ErrorContext";

function App() {
	return (
		<div className="App">
			<Provider>
				<ErrorContext>
				<ThemeProvider theme={mainTheme}>
					<Router />
				</ThemeProvider>
				</ErrorContext>
			</Provider>
		</div>
	);
}

export default App;
