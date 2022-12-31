import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  TextInput,
  Title,
} from "@mantine/core";

import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import { useState } from "react";

export default function LoginElement({ changeStatus }: { changeStatus: any }) {
  const [remember, setRemember] = useState(false);
  const form = useForm({
    initialValues: {
      username: "",
      password: "",
    },
  });

  const handleLogin = (): void => {
    const { username, password } = form.values;
    if (username.length < 3 || username.length > 32) {
      showNotification({
        title: "Invalid username!",
        message: "Username must be 3-32 characters long",
        autoClose: 3000,
      });
    }
    if (password.length < 6) {
      showNotification({
        title: "Invalid password!",
        message: "Password must be at least 6 characters long",
        autoClose: 3000,
      });
    }
    changeStatus(true);
  };

  return (
    <Container style={{ width: "75%", height: "35%" }} my={40}>
      <Title align="center">Welcome back to Urho!</Title>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          label="Username"
          placeholder="Your username"
          {...form.getInputProps("username")}
          required
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          {...form.getInputProps("password")}
          required
        />
        <Group position="apart" mt="lg">
          <Checkbox
            label="Remember me"
            sx={{ lineHeight: 1 }}
            onChange={(_e) => {
              setRemember(!remember);
            }}
          />
          <Anchor<"a">
            onClick={(event: any) => {
              event.preventDefault();
            }}
          >
            Forgot password?
          </Anchor>
        </Group>
        <Button
          fullWidth
          mt="xl"
          onClick={(_e) => {
            handleLogin();
          }}
        >
          Log in
        </Button>
      </Paper>
    </Container>
  );
}
