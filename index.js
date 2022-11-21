require("dotenv-safe").config();

var express = require("express");
var app = express();
var cors = require("cors");

var { produto } = require("./models");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", function (req, res) {
  res.send(
    "API REST para Trabalho Final de Programação e Tecnologias para Aplicação Servidor 3"
  );
});

app.get("/produtos", async function (req, res) {
  try {
    var mostrar = await produto.findAll();
    res.json(mostrar);
  } catch (error) {
    res.status(500);
    res.json("Erro: " + error);
  }
});

app.get("/produtos/:id", async function (req, res) {
  try {
    var mostrar = await produto.findByPk(req.params.id);
    res.json(mostrar);
  } catch (error) {
    res.status(500);
    res.json("Erro: " + error);
  }
});

app.post("/produtos", async function (req, res) {
  try {
    var adicionar = await produto.create(req.body);
    res.json(adicionar);
  } catch (error) {
    res.status(500);
    res.json("Erro: " + error);
  }
});

app.put("/produtos", async function (req, res) {
  try {
    var atualizar = await produto.update(req.body, {
      where: { id: req.params.id },
    });
    res.json(atualizar);
  } catch (error) {
    res.status(500);
    res.json("Erro: " + error);
  }
});

app.delete("/produtos", async function (req, res) {
  try {
    var apagar = await produto.destroy({ where: { id: req.params.id } });
    res.json(apagar);
  } catch (error) {
    res.status(500);
    res.json("Erro: " + error);
  }
});

app.listen(3000, function () {
  console.log("Server running at http://localhost:3000");
});
