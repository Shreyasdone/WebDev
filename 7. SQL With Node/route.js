import { Router } from "express";
import { addUser, deleteUserById, getUserById, getUserCount, getUsers, updateUsername } from "./controller/user_controller.js";
import { v4 as uuidv4 } from 'uuid';
const router = Router();

router.get("/", async (req, res) => {
  const count = await getUserCount();
  res.render("userCount.ejs", { count });
});

router.get("/user", async (req, res) => {
  const users = await getUsers();
  res.render("users.ejs", { users });
});

router.get("/user/new", (req,res) => {
  res.render("newUser.ejs");
})

router.get("/user/edit/:id", async (req, res) => {
  const {id} = req.params;
  const user = await getUserById(id);
  res.render("edit.ejs", { user });
});


router.post("/user", async (req,res)=>{
  const { username, email, password } = req.body;
  const id = uuidv4();
  console.log(id);
  await addUser(id,username,email,password);
  res.redirect("/user");
})

router.patch("/user/:id", async (req, res) => {
  const { username } = req.body;
  const { id } = req.params;
  await updateUsername(id, username);
  res.redirect("/user");
});

router.delete("/user/:id", async (req,res)=>{
  const { id } = req.params;
  await deleteUserById(id);
  res.redirect("/user");
})

export default router;
