import React from "react";
import { MantineProvider } from "@mantine/core";
import { NavbarElement } from "./components/Navbar";

export class App extends React.Component {
  render() {
    return (
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: "Rubik, sans-serif",
          colorScheme: "dark",
        }}
      >
        <NavbarElement />
      </MantineProvider>
    );
  }
}

export default App;
