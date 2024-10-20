import { Test, TestingModule } from '@nestjs/testing';

import { PersonService } from './person.service';
import { PrismaService } from '../prisma/prisma.service';

describe('PersonService', () => {
  let service: PersonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonService, PrismaService],
    })
      .compile();

    service = module.get<PersonService>(PersonService);
  });

  it('Servicio de Personajes', () => {
    expect(service).toBeDefined();
  });
});
