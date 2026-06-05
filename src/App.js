import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { themes } from "./theme";
import { GlobalStyles } from "./global";
import CustomCursor from "./components/cursor/CustomCursor";

function App() {
  return (
    <ThemeProvider theme={themes.dark}>
      <>
        <GlobalStyles />
        <CustomCursor />
        <Main theme={themes.dark} />
      </>
    </ThemeProvider>
  );
}

export default App;
