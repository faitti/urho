import React from "react";
import { Group, MantineProvider } from "@mantine/core";
import { NavbarElement } from "./components/Navbar";
import { NotificationsProvider } from "@mantine/notifications";

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
        <NotificationsProvider>
          <Group align={"start"}>
            <NavbarElement />
          </Group>
        </NotificationsProvider>
      </MantineProvider>
    );
  }
}

export default App;
