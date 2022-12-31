import React from "react";
import { Group, MantineProvider, Text } from "@mantine/core";
import { NavbarElement } from "./components/Navbar";
import LoginElement from "./components/Login";

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
        <Group align={"start"}>
          <NavbarElement />
          <LoginElement />
        </Group>
      </MantineProvider>
    );
  }
}

export default App;
