import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PrismaService } from '../prisma/prisma.service';
import { translatePerson } from './config';
import { PaginationDto } from '../common/dto/pagination.dto';

@Injectable()
export class PersonService {

  constructor(
    private readonly prismaService: PrismaService,
  ) {}

  async create(createPersonDto: CreatePersonDto) {
    const person = await this.prismaService.person.create({
      data: createPersonDto,
      include: {
        Planet: true,
      }
    });
    return translatePerson(person);
  }

  async findAll(paginationDto: PaginationDto) {
    const { limit: take = 10, page = 1  } = paginationDto;

    const totalRecords = await this.prismaService.person.count();
    const lastPage = Math.ceil(totalRecords / take);

    const people = await this.prismaService.person.findMany({
      take,
      skip: (page - 1) * take,
    });

    return {
      resultados: people.map((person) => translatePerson(person)),
      pagina: page,
      totalRegistros: totalRecords,
      ultimaPagina: lastPage,
    };
  }

  async findOne(id: string) {
    const person = await this.prismaService.person.findUnique({
      where: { id },
      include: {
        Planet: true,
      }
    });
    if (!person) throw new NotFoundException('Personaje no encontrado');
    return translatePerson(person);
  }

  async update(id: string, updatePersonDto: UpdatePersonDto) {
    await this.findOne(id);

    try {
      const updatedPerson = await this.prismaService.person.update({
        where: { id },
        data: updatePersonDto,
        include: {
          Planet: true,
        }
      });
  
      return translatePerson(updatedPerson);
    } catch (error) {
      if (error.code === 'P2003') throw new BadRequestException('El planeta no existe');
      throw new InternalServerErrorException();
    }

  }

  async remove(id: string) {
    await this.findOne(id);

    const deletedPerson = await this.prismaService.person.delete({ where: { id } });
    return translatePerson(deletedPerson);
  }
}
