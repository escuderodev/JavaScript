import express, { json, Request, Response } from "express";
import { router } from "./routes";

const app = express();

app.use(json());
app.use(router);

app.listen(5000, () => console.log("Server is running on http://localhost:5000"));