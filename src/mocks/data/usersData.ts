import { faker } from "@faker-js/faker";

export type User = ReturnType<typeof createUser>;
export interface UserUI extends User {
  privacy: boolean;
  backgroundColor: string;
}

export const random = (min = 1, max = 5) => faker.datatype.number({ min, max });

const fakeField = {
  id: () => faker.datatype.uuid(),
  fullName: () => faker.name.fullName(),
  gender: () => faker.name.sex(),
  personalInformation: () => faker.lorem.lines(5),
}

const createUser = () => {
  const id = fakeField.id();
  const fullName = fakeField.fullName();
  const gender = fakeField.gender();
  const personalInformation = fakeField.personalInformation();

  return {
    id,
    fullName,
    gender,
    personalInformation
  };
};

const createUserArray = () =>
  Array(6)
    .fill(null)
    .map(() => createUser());

export const replaceRandomUser = (array: User[]) => {
  const randomUserIndex = random(0, array.length - 1);
  array.splice(randomUserIndex, 1, createUser());
  console.log(`Replace ueser [${randomUserIndex}]`)
  return array;
};

export const upadteRandomUser = (array: User[]) => {
  const randomUserIndex = random(0, array.length - 1);
  const actionFields = ['fullName', 'gender', 'personalInformation'] as const
  const randomActionIndex = random(0, actionFields.length - 1)
  const randomActionField = actionFields[randomActionIndex]
  console.log(`Update user [${randomUserIndex}] - field [${randomActionField}]`)
  array[randomUserIndex][randomActionField] = fakeField[randomActionField]()
  return array
}

export const db = createUserArray();
