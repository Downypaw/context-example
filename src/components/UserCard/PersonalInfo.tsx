import { Accordion, Checkbox, Text } from "@mantine/core";
import { useAppDispatch } from "hooks";
import { togglePrivacy } from "store/slices/users";

interface PersonalInfoProps {
  personalInformation: string;
  userId: string;
}

export const PersonalInfo = ({
  userId,
  personalInformation,
}: PersonalInfoProps) => {
  const dispatch = useAppDispatch();
  const handlePrivacyChange = () => {
    dispatch(togglePrivacy(userId));
  };
  return (
    <Accordion variant="separated" onChange={(v) => console.log(v)}>
      <Accordion.Item value="PersonalInformation">
        <Accordion.Control>Personal Information</Accordion.Control>
        <Accordion.Panel>
          <Text fz="md">{personalInformation}</Text>
          <Checkbox
            mt={16}
            label="I agree to sell my privacy"
            onClick={handlePrivacyChange}
          />
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};
