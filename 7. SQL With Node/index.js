import express from 'express';
import path from 'path';
import method from 'method-override';
import { fileURLToPath } from 'url';
import router from './route.js'

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname,("public/css"))));
app.use(express.static(path.join(__dirname,("public/js"))));
app.use(express.urlencoded({ extended: true }));
app.use(method("_method"));
app.use("/",router);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"views"));

app.listen(port,()=>{
  console.log(`listening on port ${port}`);
})