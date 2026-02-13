const clientesService = require("../serices/clientes.service");

exports.listar = async (req, res) => {
    const clientes = await clientesService.listar();
    res.json(clientes);
};

exports.criar = async (req, res) => {
    const cliente = await clientesService.criar(req.body);
    res.status(201).json(cliente);
};

exports.buscarPorId = async (req, res) => {
    const cliente = await clientesService.buscarPorId(Number(req.params.id));
    if (!cliente) return res.status(404).json({message: "Cliente não encontrado"});
    res.json(cliente);
};

exports.atualizar = async (req, res) => {
    const cliente = await clientesService.atualizar(
        Number(req.params.id),
        req.body
    );
    res.json(cliente);
};

exports.deletar = async (req, res) => {
    await clientesService.remover(Number(req.params.id));
    res.status(204).send();
};
