import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import type { RootState } from "store";
import type { UserUI, User } from "mocks/data/usersData";

export const getUsers = createAsyncThunk<{ data: User[] }>(
  "users/getUsers",
  async () => {
    const response = await fetch("/user");
    return response.json();
  }
);

export const updateUsers = createAsyncThunk<{ data: User[] }>(
  "users/updateUsers",
  async () => {
    const response = await fetch("/user");
    return response.json();
  }
);

interface UsersState {
  data: UserUI[];
  initialLoading: boolean;
  updateLoading: boolean;
}

const initialState: UsersState = {
  data: [],
  initialLoading: false,
  updateLoading: false,
};

const getDefaultUserInfo = (user: User) => {
  return {
    ...user,
    privacy: false,
    backgroundColor: "#ffffff",
  };
};

const modifyUsersInfo = (data: User[]) => {
  return data.map((user) => getDefaultUserInfo(user));
};

const updateUsersInfo = (data: User[], state: UsersState) => {
  return data.map((user) => {
    const storedUser = state.data.find(
      (storedUser) => storedUser.id === user.id
    );
    if (!storedUser) {
      return getDefaultUserInfo(user);
    }
    return storedUser;
  });
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    togglePrivacy: (state, action: PayloadAction<string>) => {
      const index = state.data.findIndex((user) => user.id === action.payload);

      state.data[index].privacy = !state.data[index].privacy;
    },
    setBackgroundColor: (
      state,
      action: PayloadAction<{ userId: string; backgroundColor: string }>
    ) => {
      const index = state.data.findIndex(
        (user) => user.id === action.payload.userId
      );

      state.data[index].backgroundColor = action.payload.backgroundColor;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.initialLoading = true;
        state.data = initialState.data;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.initialLoading = initialState.initialLoading;
        state.data = modifyUsersInfo(payload.data);
      })
      .addCase(updateUsers.pending, (state) => {
        state.updateLoading = true;
      })
      .addCase(updateUsers.fulfilled, (state, { payload }) => {
        state.updateLoading = false;
        state.data = updateUsersInfo(payload.data, state);
      });
  },
});

export const { togglePrivacy, setBackgroundColor } = usersSlice.actions;

/* Selectors */
export const selectUsersInitialLoading = (state: RootState) =>
  state.users.initialLoading;
export const selectUsersUpdateLoading = (state: RootState) =>
  state.users.updateLoading;
export const selectUsers = (state: RootState) => state.users.data;
export const selectUserPrivacy = (state: RootState, userId: string) =>
  state.users.data.find((user) => user.id === userId)?.privacy;
export const selectBackground = (state: RootState, userId: string) =>
  state.users.data.find((user) => user.id === userId)?.backgroundColor;

export default usersSlice.reducer;
