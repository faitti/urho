import { useState } from "react";
import {
  IconHome2,
  IconList,
  IconLogin,
  IconLogout,
  IconUser,
  TablerIcon,
} from "@tabler/icons";
import {
  Center,
  createStyles,
  Navbar,
  Stack,
  Tooltip,
  UnstyledButton,
} from "@mantine/core";

type elementData = {
  icon: TablerIcon;
  label: string;
  loggedIn?: boolean;
  active?: boolean;
  changeStatus?: boolean;
  onClick?(): void;
};

const topData: elementData[] = [
  { icon: IconHome2, label: "Home" },
  { icon: IconList, label: "Tasks" },
];

const bottomData: elementData[] = [
  { icon: IconUser, label: "Account", loggedIn: true },
  { icon: IconLogin, label: "Login", loggedIn: false, changeStatus: true },
  { icon: IconLogout, label: "Logout", loggedIn: true, changeStatus: true },
];

const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    },
  },

  active: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).color,
    },
  },
}));

function NavbarLink(data: elementData) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={data.label} position="right" transitionDuration={0}>
      <UnstyledButton
        onClick={data.onClick}
        className={cx(classes.link, { [classes.active]: data.active })}
      >
        <data.icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

export function NavbarElement() {
  const [active, setActive] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);

  const topLinks = topData.map((data, idx) => (
    <NavbarLink
      {...data}
      key={data.label}
      active={idx === active}
      onClick={() => setActive(idx)}
    />
  ));

  const bottomLinks = bottomData.map((data, _idx) => {
    if (loggedIn !== data?.loggedIn) return;
    return (
      <NavbarLink
        {...data}
        key={data.label}
        onClick={() =>
          setLoggedIn(data.changeStatus === true ? !loggedIn : loggedIn)
        }
      />
    );
  });

  return (
    <Navbar p="md" width={{ base: 80 }}>
      <Navbar.Section grow mt={50}>
        <Stack justify="center" spacing={0}>
          {topLinks}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify="center" spacing={0}>
          {bottomLinks}
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}
