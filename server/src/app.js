require("dotenv").config();
const express = require("express");
const aiRoutes = require("./routes/ai.routes");

const app = express();
app.use(express.json());
app.use("/ai", aiRoutes);

app.get("/health", (req, res) => {
	res.status(200).json({
		status: "ok",
		message: "Server is running",
	});
});

module.exports = app;
