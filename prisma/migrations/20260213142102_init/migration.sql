-- CreateTable
CREATE TABLE "Cliente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "dataNascimento" DATETIME NOT NULL,
    "sexo" TEXT NOT NULL
);
