import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import NavbarElement from "./components/Navbar";
import { themeContext } from "./Theme";

export type ThemeState = {
  theme: string;
};

export class App extends React.Component<{}, ThemeState> {
  constructor(props: any) {
    super(props);
    this.state = {
      theme: "light",
    };
  }

  toggleTheme = () => {
    this.setState((state: ThemeState) => ({
      theme: state.theme === "dark" ? "light" : "dark",
    }));
  };

  render() {
    document.documentElement.style.setProperty(
      "--bodyColor",
      this.state.theme == "dark" ? "#101010" : "#ffffff"
    );
    return (
      <>
        <themeContext.Provider value={this.state.theme}>
          <NavbarElement
            theme={this.state.theme}
            toggleTheme={this.toggleTheme}
          />
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </themeContext.Provider>
      </>
    );
  }
}

App.contextType = themeContext;

export default App;
