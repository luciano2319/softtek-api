/*
  Warnings:

  - You are about to drop the column `created` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `edited` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `created` on the `Planet` table. All the data in the column will be lost.
  - You are about to drop the column `edited` on the `Planet` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Person` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Planet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Person` DROP COLUMN `created`,
    DROP COLUMN `edited`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `Planet` DROP COLUMN `created`,
    DROP COLUMN `edited`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
