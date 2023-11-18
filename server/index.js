import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
const uri =
	"mongodb+srv://memories:memories4102123@casper.5huz928.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 9000;

mongoose
	.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() =>
		app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`))
	)
	.catch((error) => console.log(error.message));
