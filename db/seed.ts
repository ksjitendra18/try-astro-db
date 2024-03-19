import { db, users } from "astro:db";
import { faker } from "@faker-js/faker";
// https://astro.build/db/seed
export default async function seed() {
  // TODO

  for (let i = 0; i < 500; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    await db.insert(users).values({
      name: `${firstName} ${lastName}`,
      email: faker.internet.email({ firstName, lastName }),
    });
  }
}
