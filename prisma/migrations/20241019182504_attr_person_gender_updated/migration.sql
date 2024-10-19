/*
  Warnings:

  - You are about to alter the column `height` on the `Person` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `mass` on the `Person` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Made the column `gender` on table `Person` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Person` MODIFY `height` INTEGER NULL,
    MODIFY `mass` INTEGER NULL,
    MODIFY `gender` ENUM('male', 'female', 'NA') NOT NULL DEFAULT 'NA';
