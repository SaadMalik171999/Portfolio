import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import { useDispatch, useSelector } from "react-redux";
import { themeSettings } from "./theme";
import { createTheme } from "@mui/system";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { setMode } from "./redux/features/index";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const modeTheme = useSelector((state) => state.themes);
  const changeThemeMode = () => {
    dispatch(setMode(modeTheme.mode));
    console.log(modeTheme);
  };

  return (
    <div className="app">
      <BrowserRouter>
        {/* <ThemeProvider theme={theme}> */}
        <Home />

        {/* <CssBaseline />
        <h1
          className={modeTheme.mode === "light" ? "bg-amber-400" : "bg-red-400"}
        >
          Hello Theme Mode
        </h1>

        <button className=" " onClick={changeThemeMode}>
          Color Change
        </button> */}
        {/* </ThemeProvider> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
