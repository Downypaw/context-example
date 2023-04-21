import { Card } from "@mantine/core";

import { Header } from "./Header";
import { PersonalInfo } from "./PersonalInfo";
import { UserTabs } from "./UserTabs";
import type { UserUI } from "mocks/data/usersData";
import { useAppSelector } from "hooks";
import { selectBackground } from "store/slices/users";

export const UserCard = (props: UserUI) => {
  const backgroundColor = useAppSelector((state) =>
    selectBackground(state, props.id)
  );

  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      w={400}
      bg={backgroundColor}
      sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
    >
      <Header fullName={props.fullName} gender={props.gender} />
      <UserTabs userId={props.id} />
      <PersonalInfo
        userId={props.id}
        personalInformation={props.personalInformation}
      />
    </Card>
  );
};
