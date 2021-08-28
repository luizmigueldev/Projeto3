const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 3333;
const loginRoutes = require("./routes/login.routes")
const userRoutes = require("./routes/user.routes")

if (process.env.NODE_ENV === 'DEVELOPMENT') {
  dotenv = require('dotenv');
  dotenv.config();
}

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  response.json({
    mensagem: "API rodando"
  })
});

app.use(loginRoutes);
app.use(userRoutes);


app.listen(port, () => {
  console.log(`servidor rodando na porta ${port}`);
})