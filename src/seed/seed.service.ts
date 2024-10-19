import { Injectable } from '@nestjs/common';
import { AxiosAdapter } from '../common/adapters/axios.adapter';
import { PrismaService } from '../prisma/prisma.service';
import { envs } from '../config/envs';
import { PeopleResponse, PlanetResponse } from './interfaces';

@Injectable()
export class SeedService {

  constructor (
    private readonly http: AxiosAdapter,
    private readonly prismaService: PrismaService,
  ) {}

  async create() {

    await this.prismaService.planet.deleteMany();

    const planetsData = await this.http.get<PlanetResponse>(`${envs.apiUrl}/planets`);

    const planetPromises = [];
    
    planetsData.results.forEach((planet) => {
      const { url } = planet;
      const parts = url.split('/');
      const id = +parts[parts.length - 2];
      const promise = this.prismaService.planet.create({
        data: {
          id,
          name: planet.name,
          rotation_period: isNaN(+planet.rotation_period) ? null : +planet.rotation_period,
          orbital_period: isNaN(+planet.orbital_period) ? null : +planet.orbital_period,
          diameter: isNaN(+planet.diameter) ? null : +planet.diameter,
          climate: planet.climate,
          gravity: planet.gravity,
          terrain: planet.terrain,
          surface_water: planet.surface_water,
          population: isNaN(+planet.population) ? null : +planet.population,
        }
      });
      planetPromises.push(promise);
    });
    await Promise.all(planetPromises);

    return 'Seed executed successfully';
  }

}
