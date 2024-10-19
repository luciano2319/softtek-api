import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { PrismaModule } from './prisma/prisma.module';
import { PersonModule } from './person/person.module';

@Module({
  imports: [CommonModule, SeedModule, PrismaModule, PersonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
