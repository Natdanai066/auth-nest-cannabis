import { Module } from '@nestjs/common';
import { CannabisService } from './cannabis.service';
import { CannabisController } from './cannabis.controller';
import { Cannabis } from './entities/cannabis.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Cannabis])],
  controllers: [CannabisController],
  providers: [CannabisService],
})
export class CannabisModule {}
