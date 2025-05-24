import { connection } from "../database/db.js";

export const getUserCount = async () => {
  try {
    let q = "SELECT COUNT(*) as count FROM user";
    let result = await connection.execute(q);
    let [rows] = result;
    return rows[0].count;
  } catch (e) {
    console.error(e);
  }
};

export const getUsers = async () => {
  try {
    let q = "SELECT * FROM user";
    const [users] = await connection.execute(q);
    return users;
  } catch (e) {
    console.error(e);
  }
};

export const getUserById = async (id) => {
  try {
    let q = "SELECT id, username, email from user WHERE id = ?";
    const [user] = await connection.execute(q, [id]);
    return user[0];
  } catch (e) {
    console.error(e);
  }
};

export const updateUsername = async (id, username) => {
  try {
    let q = "UPDATE user SET username=? WHERE id =?";
    const [user] = await connection.execute(q, [username, id]);
    return user;
  } catch (e) {
    console.error(e);
  }
};

export const addUser = async (id, username, email, password) => {
  try {
    let q = "INSERT INTO user (id,username,email,password) VALUES (?,?,?,?)";
    const [rows] = await connection.execute(q, [id, username, email, password]);
    console.log("User Added Successfully", rows);
    return rows;
  } catch (e) {
    console.error(e);
  }
};

export const deleteUserById = async (id) => {
  try {
    let q = "DELETE FROM user WHERE id = ?";
    const [rows] = await connection.execute(q, [id]);
    return rows;
  } catch (e) {
    console.error(e);
  }
};
