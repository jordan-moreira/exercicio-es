const porta = 3003;
import express from "express";
import { urlencoded } from "body-parser";
const app = express();
import { getProdutos, getProduto, salvarProduto, excluirProduto } from "./db";

app.use(urlencoded({ extended: true }));

app.get("/produtos", (req, res, next) => {
    res.send(getProdutos());
});

app.get("/produtos/:id", (req, res, next) => {
    res.send(getProduto(req.params.id));
});

app.post("/produtos", (req, res, next) => {
    const produto = salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    });
    res.send(produto);
});

app.put("/produtos/:id", (req, res, next) => {
    const produto = salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco,
        id: req.params.id
    });
    res.send(produto);
});

app.delete("/produtos/:id", (req, res, next) => {
    const produto = excluirProduto(req.params.id);
    res.send(produto);
});

app.listen(porta, () => {
    console.log("servidor rodando", porta);
});