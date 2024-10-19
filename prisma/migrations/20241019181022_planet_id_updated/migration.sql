/*
  Warnings:

  - You are about to alter the column `homeworld` on the `Person` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `Planet` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Planet` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `Person` DROP FOREIGN KEY `Person_homeworld_fkey`;

-- AlterTable
ALTER TABLE `Person` MODIFY `homeworld` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Planet` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `Person` ADD CONSTRAINT `Person_homeworld_fkey` FOREIGN KEY (`homeworld`) REFERENCES `Planet`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
