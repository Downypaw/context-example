import { ColorInput } from "@mantine/core";
import { useDispatch } from "react-redux";
import { setBackgroundColor } from "store/slices/users";

interface Props {
  userId: string;
}

export const SettingsPanel = ({ userId }: Props) => {
  const dispatch = useDispatch();
  return (
    <ColorInput
      onChange={(value) =>
        dispatch(setBackgroundColor({ userId, backgroundColor: value }))
      }
      placeholder="Pick color"
      label="Your favorite color"
    />
  );
};
