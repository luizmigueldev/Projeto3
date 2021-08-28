const express = require("express");
const app = express();
const port = 3333;

app.use(express.json());

app.get("/", (request, response) => {
  response.json({
    mensagem: "API rodando"
  })
});

app.listen(port, () => {
  console.log(`servidor rodando na porta ${port}`)
})