import { Module } from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { CommonModule } from '../common/common.module';

@Module({
  controllers: [PersonController],
  providers: [PersonService],
  imports: [PrismaModule, CommonModule]
})
export class PersonModule {}
