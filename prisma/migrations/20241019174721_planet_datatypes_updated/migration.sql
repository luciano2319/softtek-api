/*
  Warnings:

  - You are about to alter the column `rotation_period` on the `Planet` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `orbital_period` on the `Planet` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `diameter` on the `Planet` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `population` on the `Planet` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `Planet` MODIFY `rotation_period` INTEGER NULL,
    MODIFY `orbital_period` INTEGER NULL,
    MODIFY `diameter` INTEGER NULL,
    MODIFY `population` INTEGER NULL;
