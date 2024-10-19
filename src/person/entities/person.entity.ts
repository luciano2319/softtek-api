import { ApiProperty } from "@nestjs/swagger";
class Planeta {

    @ApiProperty({
        example: 'Tatooine',
        description: 'Nombre del planeta',
    })
    nombre: string;

    @ApiProperty({
        example: 23,
        description: 'Periodo de rotación del planeta',
    })
    periodo_rotacion: number;

    @ApiProperty({
        example: 304,
        description: 'Periodo orbital del planeta',
    })
    periodo_orbital: number;

    @ApiProperty({
        example: 10465,
        description: 'Diámetro del planeta',
    })
    diametro: number;

    @ApiProperty({
        example: 'arid',
        description: 'Clima del planeta',
    })
    clima: string;

    @ApiProperty({
        example: '1 standard',
        description: 'Gravedad del planeta',
    })
    gravedad: string;

    @ApiProperty({
        example: 'desert',
        description: 'Terreno del planeta',
    })
    terreno: string;

    @ApiProperty({
        example: '1',
        description: 'Superficie acuática del planeta',
    })
    superficie_agua: string;

    @ApiProperty({
        example: 200000,
        description: 'Población del planeta',
    })
    poblacion: number;
}

export class Person {

    @ApiProperty({
        example: '5d529833-87b5-4718-96a8-cca4dc4f8f0b',
        description: 'Código del personaje',
        uniqueItems: true,
    })
    codigo: string;

    @ApiProperty({
        example: 'C-3PO',
        description: 'Nombre del personaje',
    })
    nombre: string;

    @ApiProperty({
        example: 167,
        description: 'Altura del personaje',
    })
    altura: number;

    @ApiProperty({
        example: 75,
        description: 'Masa del personaje',
    })
    masa: number;

    @ApiProperty({
        example: 'NA',
        description: 'Color de pelo del personaje',
    })
    color_pelo: string;

    @ApiProperty({
        example: 'gold',
        description: 'Color de piel del personaje',
    })
    color_piel: string;

    @ApiProperty({
        example: 'yellow',
        description: 'Color de ojos del personaje',
    })
    color_ojos: string;

    @ApiProperty({
        example: '112BBY',
        description: 'Fecha de nacimiento del personaje',
    })
    año_nacimiento: string;

    @ApiProperty({
        example: 'NA',
        description: 'Género del personaje',
    })
    genero: string;

    @ApiProperty()
    creado: Date;

    @ApiProperty()
    actualizado: Date;

    @ApiProperty()
    Planeta: Planeta;

}