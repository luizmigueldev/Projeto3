const express = require("express");
const app = express();
const port = 3333;
const routes = require("./routes/login.routes")

app.use(express.json());

app.get("/", (request, response) => {
  response.json({
    mensagem: "API rodando"
  })
});

app.use(routes);

app.listen(port, () => {
  console.log(`servidor rodando na porta ${port}`);
})