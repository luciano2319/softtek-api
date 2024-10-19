import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { CommonModule } from '../common/common.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [CommonModule, PrismaModule]
})
export class SeedModule {}
