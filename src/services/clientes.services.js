const prisma = require("../database/prisma");

exports.listar = () => {
    return prisma.cliente.findMany();
};

exports.criar = (data) => {
    return prisma.cliente.create({data});
};

exports.buscarPorId = (id) => {
    return prisma.cliente.findUnique({where: {id} });
};

exports.atualizar = (id, data) => {
    return prisma.cliente.update({
        where: {id},
        data
    });
};

exports.deletar = (id) => {
    return prisma.cliente.delete({where: {id} });
};