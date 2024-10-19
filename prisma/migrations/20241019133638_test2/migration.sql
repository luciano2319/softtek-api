/*
  Warnings:

  - You are about to drop the `Persona` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Planeta` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Persona` DROP FOREIGN KEY `Persona_planetaId_fkey`;

-- DropTable
DROP TABLE `Persona`;

-- DropTable
DROP TABLE `Planeta`;

-- CreateTable
CREATE TABLE `Person` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `height` VARCHAR(191) NULL,
    `mass` VARCHAR(191) NULL,
    `hair_color` VARCHAR(191) NULL,
    `skin_color` VARCHAR(191) NULL,
    `eye_color` VARCHAR(191) NULL,
    `birth_year` VARCHAR(191) NULL,
    `gender` VARCHAR(191) NULL,
    `homeworld` INTEGER NOT NULL,
    `created` DATETIME(3) NULL,
    `edited` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Planet` (
    `id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `rotation_period` VARCHAR(191) NULL,
    `orbital_period` VARCHAR(191) NULL,
    `diameter` VARCHAR(191) NULL,
    `climate` VARCHAR(191) NULL,
    `gravity` VARCHAR(191) NULL,
    `terrain` VARCHAR(191) NULL,
    `surface_water` VARCHAR(191) NULL,
    `population` VARCHAR(191) NULL,
    `created` DATETIME(3) NULL,
    `edited` DATETIME(3) NULL,
    `url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Person` ADD CONSTRAINT `Person_homeworld_fkey` FOREIGN KEY (`homeworld`) REFERENCES `Planet`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
