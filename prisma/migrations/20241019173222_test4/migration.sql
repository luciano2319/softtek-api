/*
  Warnings:

  - The primary key for the `Person` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Planet` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `Person` DROP FOREIGN KEY `Person_homeworld_fkey`;

-- AlterTable
ALTER TABLE `Person` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `homeworld` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Planet` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `Person` ADD CONSTRAINT `Person_homeworld_fkey` FOREIGN KEY (`homeworld`) REFERENCES `Planet`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
