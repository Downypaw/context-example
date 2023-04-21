import { useEffect } from "react";
import { Loader, Button, LoadingOverlay } from "@mantine/core";
import styled from "@emotion/styled";

import { useAppSelector, useAppDispatch } from "hooks";
import {
  getUsers,
  updateUsers,
  selectUsers,
  selectUsersInitialLoading,
  selectUsersUpdateLoading,
} from "store/slices/users";
import { UserCard } from "./UserCard";

export const Users = () => {
  const dispatch = useAppDispatch();
  const initailLoading = useAppSelector(selectUsersInitialLoading);
  const updateLoading = useAppSelector(selectUsersUpdateLoading);
  const users = useAppSelector(selectUsers);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const handleUpdate = () => dispatch(updateUsers());

  if (initailLoading) return <Loader size="xl" variant="dots" />;

  return (
    <Wrapper>
      <Button onClick={handleUpdate} disabled={updateLoading}>
        Update Users
      </Button>
      <UsersWrapper>
        <LoadingOverlay visible={updateLoading} overlayBlur={2} />
        {users?.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </UsersWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const UsersWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
