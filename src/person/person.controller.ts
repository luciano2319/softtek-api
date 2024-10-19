import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PaginationDto } from '../common/dto/pagination.dto';
import { Person } from './entities/person.entity';

@Controller('people')
@ApiTags('People')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  @ApiResponse({ status: 201, type: Person })
  @ApiResponse({ status: 400, description: 'El planeta no existe' })
  @ApiResponse({ status: 500, description: 'Contacte a soporte' })
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.personService.create(createPersonDto);
  }

  @Get()
  @ApiResponse({ status: 201, description: '' })
  findAll(@Query() paginationDto: PaginationDto) {
    return this.personService.findAll(paginationDto);
  }

  @Get(':id')
  @ApiResponse({ status: 201, description: '' })
  @ApiResponse({ status: 404, description: 'Personaje no encontrado' })
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.personService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({ status: 201, description: '' })
  @ApiResponse({ status: 400, description: 'El planeta no existe' })
  @ApiResponse({ status: 404, description: 'Personaje no encontrado' })
  @ApiResponse({ status: 500, description: 'Contacte a soporte' })
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updatePersonDto: UpdatePersonDto) {
    return this.personService.update(id, updatePersonDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 201, description: '' })
  @ApiResponse({ status: 404, description: 'Personaje no encontrado' })
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.personService.remove(id);
  }
}
