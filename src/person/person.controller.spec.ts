import { Test, TestingModule } from '@nestjs/testing';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';

describe('PersonController', () => {
  let controller: PersonController;
  let personService: PersonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonController],
      providers: [
        {
          provide: PersonService,
          useValue: {
            create: jest.fn().mockResolvedValue({
              "codigo": "d6d594b3-0973-40ae-b080-dbf8728ddac4",
              "nombre": "Luke Skywalker",
              "altura": 172,
              "masa": 77,
              "color_pelo": "blond",
              "color_piel": "fair",
              "color_ojos": "blue",
              "año_nacimiento": "19BBY",
              "genero": "male",
              "creado": "2024-10-20T04:04:24.440Z",
              "actualizado": "2024-10-20T04:04:24.440Z",
              "Planeta": {
                  "nombre": "Alderaan",
                  "periodo_rotacion": 24,
                  "periodo_orbital": 364,
                  "diametro": 12500,
                  "clima": "temperate",
                  "gravedad": "1 standard",
                  "terreno": "grasslands, mountains",
                  "superficie_agua": "40",
                  "poblacion": 2000000000
              }
          }),
          },
        },
      ],
    }).compile();

    controller = module.get<PersonController>(PersonController);
    personService = module.get<PersonService>(PersonService);
  });

  it('should create a new person', async () => {
    const createPersonDto: CreatePersonDto = {
      name: 'Luke Skywalker',
      homeworld: 1
    };
    const result: any = await controller.create(createPersonDto);
    expect(personService.create).toHaveBeenCalledWith(createPersonDto);
    expect(result.codigo).toBe('d6d594b3-0973-40ae-b080-dbf8728ddac4');
    expect(result.nombre).toBe('Luke Skywalker');
  });
});