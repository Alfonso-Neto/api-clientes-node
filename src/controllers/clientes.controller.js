const clientesService = require("../services/clientes.services");

exports.listar = async (req, res) => {
    const clientes = await clientesService.listar();
    res.json(clientes);
};

exports.criar = async (req, res) => {
  try {
    const cliente = await clientesService.criar(req.body);
    res.status(201).json(cliente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar cliente" });
  }
};

exports.buscarPorId = async (req, res) => {
    const id = Number(req.params.id)
    const cliente = await clientesService.buscarPorId(id);

    if (!cliente) {
        return res.status(404).json({message: "Cliente não encontrado!"});
    }
    
    res.json(cliente);
};

exports.atualizar = async (req, res) => {
    const id = Number(req.params.id);
    try{
        const cliente = await clientesService.atualizar(id, req.body);
        res.json(cliente)
    } catch{
        res.status(404).json({message: "Cliente não encontrado!"})
    }
};

exports.deletar = async (req, res) => {
    const id = Number(req.params.id);
    
    try {
        await clientesService.deletar(id);
        res.json({message: "Cliente removido com sucesso!"});
    } catch {
        res.status(404).json({message: "Cliente não encontrado!"})
    }
};
