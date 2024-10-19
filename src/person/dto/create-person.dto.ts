import { IsEnum, IsInt, IsNumber, IsOptional, IsPositive, IsString, Min, MinLength } from "class-validator";
import { PersonGenderList } from "../config/person-gender";
import { PersonGender } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class CreatePersonDto {

    @ApiProperty({
        description: 'Nombre del personaje',
        nullable: false,
        minLength: 1,
    })
    @IsString({ message: 'El nombre debe ser un texto' })
    @MinLength(1)
    name: string;

    @ApiProperty({
        description: 'Altura del personaje',
    })
    @IsInt({ message: 'El tamaño debe ser un número entero' })
    @IsPositive({ message: 'El tamaño debe ser positivo' })
    @IsOptional()
    height?: number;

    @ApiProperty({
        description: 'Masa del personaje',
    })
    @IsInt({ message: 'El peso debe ser un número entero' })
    @IsPositive({ message: 'El peso debe ser positivo' })
    @IsOptional()
    mass?: number;

    @ApiProperty({
        description: 'Color de cabello del personaje',
    })
    @IsString({ message: 'El color de cabello debe ser un texto' })
    @IsOptional()
    hair_color?: string;

    @ApiProperty({
        description: 'Color de piel del personaje',
    })
    @IsString({ message: 'El color de piel debe ser un texto' })
    @IsOptional()
    skin_color?: string;

    @ApiProperty({
        description: 'Color de ojos del personaje',
    })
    @IsString({ message: 'El color de ojos debe ser un texto' })
    @IsOptional()
    eye_color?: string;

    @ApiProperty({
        description: 'Cumpleaños del personaje',
    })
    @IsString({ message: 'El cumpleaños debe ser un texto' })
    @IsOptional()
    birth_year?: string;

    @ApiProperty({
        description: 'Género del personaje',
    })
    @IsEnum(PersonGenderList, {
        message: `Escoja uno de los siguientes géneros: ${ PersonGenderList }`
    })
    @IsOptional()
    gender?: PersonGender;

    @ApiProperty({
        description: 'Planeta hogar del personaje',
    })
    @IsInt({ message: 'El hogar debe ser un número' })
    @IsPositive({ message: 'El hogar debe ser positivo' })
    homeworld: number;

}
