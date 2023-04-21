import { Tabs } from "@mantine/core";
import { useAppSelector } from "hooks";
import { useState } from "react";
import { selectUserPrivacy } from "store/slices/users";

import { AdressPanel } from "./AdressPanel";
import { FinancePanel } from "./FinancePanel";
import { SettingsPanel } from "./SettingsPanel";

const showAdress = true;
const showFinance = true;

interface Props {
  userId: string;
}

export const UserTabs = ({ userId }: Props) => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const isPrivate = useAppSelector((state) => selectUserPrivacy(state, userId));

  return (
    <Tabs value={activeTab} onTabChange={setActiveTab} allowTabDeactivation>
      <Tabs.List>
        {isPrivate && <Tabs.Tab value="adress">Adress</Tabs.Tab>}
        {isPrivate && <Tabs.Tab value="finance">Finance</Tabs.Tab>}
        <Tabs.Tab value="settings">Settings</Tabs.Tab>
      </Tabs.List>

      {isPrivate && (
        <Tabs.Panel value="adress">
          <AdressPanel />
        </Tabs.Panel>
      )}
      {isPrivate && (
        <Tabs.Panel value="finance">
          <FinancePanel />
        </Tabs.Panel>
      )}
      <Tabs.Panel value="settings">
        <SettingsPanel userId={userId} />
      </Tabs.Panel>
    </Tabs>
  );
};
