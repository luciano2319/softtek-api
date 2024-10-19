-- CreateTable
CREATE TABLE `Persona` (
    `id` INTEGER NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `altura` VARCHAR(191) NULL,
    `peso` VARCHAR(191) NULL,
    `color_cabello` VARCHAR(191) NULL,
    `color_piel` VARCHAR(191) NULL,
    `color_ojos` VARCHAR(191) NULL,
    `cumpleanos` VARCHAR(191) NULL,
    `genero` VARCHAR(191) NULL,
    `creacion` DATETIME(3) NULL,
    `actualizacion` DATETIME(3) NULL,
    `planetaId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Planeta` (
    `id` INTEGER NOT NULL,
    `nombre` VARCHAR(191) NOT NULL,
    `periodo_rotacion` VARCHAR(191) NULL,
    `periodo_orbitacion` VARCHAR(191) NULL,
    `diametro` VARCHAR(191) NULL,
    `clima` VARCHAR(191) NULL,
    `gravedad` VARCHAR(191) NULL,
    `terreno` VARCHAR(191) NULL,
    `superficie_acuatica` VARCHAR(191) NULL,
    `poblacion` VARCHAR(191) NULL,
    `creacion` DATETIME(3) NULL,
    `actualizacion` DATETIME(3) NULL,
    `url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Persona` ADD CONSTRAINT `Persona_planetaId_fkey` FOREIGN KEY (`planetaId`) REFERENCES `Planeta`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
