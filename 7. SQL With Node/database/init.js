import { faker } from "@faker-js/faker";
import { connection } from "./db.js";

let q = "INSERT INTO user (id, username, email, password) VALUES ?";
let data = [];
function getRandomUser() {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}

for (let i = 1; i <= 100; i++) {
  data.push(getRandomUser());
}
// let users = [
//   ["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
//   ["123c", "123_newuserc", "abc@gmail.comc", "abcc"],
// ];

try {
  const result = await connection.query(q, [data]);
} catch (e) {
  console.error(e);
}

connection.end();
