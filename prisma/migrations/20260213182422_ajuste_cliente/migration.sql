/*
  Warnings:

  - You are about to drop the column `dataNascimento` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the column `endereco` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the column `sexo` on the `Cliente` table. All the data in the column will be lost.
  - You are about to drop the column `sobrenome` on the `Cliente` table. All the data in the column will be lost.
  - Added the required column `address` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthDate` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastname` to the `Cliente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Cliente` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cliente" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "birthDate" DATETIME NOT NULL,
    "gender" TEXT NOT NULL
);
INSERT INTO "new_Cliente" ("id") SELECT "id" FROM "Cliente";
DROP TABLE "Cliente";
ALTER TABLE "new_Cliente" RENAME TO "Cliente";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
