import { faker } from "@faker-js/faker";

export type User = ReturnType<typeof createUser>;
export interface UserUI extends User {
  privacy: boolean;
  backgroundColor: string;
}

const random = (min = 1, max = 5) => faker.datatype.number({ min, max });

const createUser = () => {
  const id = faker.datatype.uuid();
  const fullName = faker.name.fullName();
  const gender = faker.name.sex();
  const personalInformation = faker.lorem.lines(5);
  const adress = {
    country: faker.address.country(),
    city: faker.address.city(),
    zip: faker.address.zipCode("#####"),
  };
  const finance = {
    accountName: faker.finance.accountName(),
    balance: faker.finance.amount(5, 1000, 2, "$"),
  };
  const sites = faker.helpers.uniqueArray(faker.internet.domainName, random(2));

  return {
    id,
    fullName,
    gender,
    personalInformation,
    adress,
    finance,
    sites,
  };
};

const createUserArray = () =>
  Array(6)
    .fill(null)
    .map(() => createUser());

export const replaceRandomUser = (array: User[]) => {
  const randomUserIndex = random(0, array.length - 1);
  console.log(randomUserIndex);
  array.splice(randomUserIndex, 1, createUser());
  return array;
};

export const db = createUserArray();
