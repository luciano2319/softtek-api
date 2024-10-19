import { Controller, Post } from '@nestjs/common';
import { ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';

import { SeedService } from './seed.service';

@Controller('seed')
@ApiTags('Seed - EJECUTAR PRIMERO LA SEMILLA PARA PODER CREAR PERSONAJES (LEER README)')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Post()
  @ApiResponse({ status: 201, description: 'Seed executed successfully',  })
  create() {
    return this.seedService.create();
  }
}
