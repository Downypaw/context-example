import { Group, Text, Badge } from "@mantine/core";

import type { UserUI } from "mocks/data/usersData";

type HeaderProps = Pick<UserUI, "fullName" | "gender">;

export const Header = ({ fullName, gender }: HeaderProps) => (
  <Group position="apart">
    <Text weight={500}>{fullName}</Text>
    <Badge color="pink" variant="light">
      {gender}
    </Badge>
  </Group>
);
