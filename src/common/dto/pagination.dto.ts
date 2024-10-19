import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDto {

    @ApiProperty({
        default: 10, description: 'La cantidad de registros por página'
    })
    @IsOptional()
    @IsNumber()
    @IsPositive()
    @Min(1)
    @Type(() => Number)
    limit?: number;

    @ApiProperty({
        default: 1, description: 'La página que deseas consultar'
    })
    @IsOptional()
    @IsNumber()
    @IsPositive()
    @Type(() => Number)
    @Min(1)
    page?: number;

}