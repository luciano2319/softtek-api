import { IsEnum, IsInt, IsNumber, IsOptional, IsPositive, IsString, Min } from "class-validator";
import { PersonGenderList } from "../config/person-gender";
import { PersonGender } from "@prisma/client";

export class CreatePersonDto {

    @IsString({ message: 'El nombre debe ser un texto' })
    name: string;

    @IsInt({ message: 'El tamaño debe ser un número entero' })
    @IsPositive({ message: 'El tamaño debe ser positivo' })
    @IsOptional()
    height?: number;

    @IsInt({ message: 'El peso debe ser un número entero' })
    @IsPositive({ message: 'El peso debe ser positivo' })
    @IsOptional()
    mass?: number;

    @IsString({ message: 'El color de cabello debe ser un texto' })
    @IsOptional()
    hair_color?: string;

    @IsString({ message: 'El color de piel debe ser un texto' })
    @IsOptional()
    skin_color?: string;

    @IsString({ message: 'El color de ojos debe ser un texto' })
    @IsOptional()
    eye_color?: string;

    @IsString({ message: 'El cumpleaños debe ser un texto' })
    @IsOptional()
    birth_year?: string;

    @IsEnum(PersonGenderList, {
        message: `Escoja uno de los siguientes géneros: ${ PersonGenderList }`
    })
    @IsOptional()
    gender?: PersonGender;

    @IsInt({ message: 'El hogar debe ser un número' })
    @IsPositive({ message: 'El hogar debe ser positivo' })
    homeworld: number;

}
