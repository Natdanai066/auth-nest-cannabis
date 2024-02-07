import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CannabisService } from './cannabis.service';
import { CreateCannabisDto } from './dto/create-cannabis.dto';
import { UpdateCannabisDto } from './dto/update-cannabis.dto';

@Controller('cannabis')
export class CannabisController {
  constructor(private readonly cannabisService: CannabisService) {}

  @Post()
  create(@Body() createCannabisDto: CreateCannabisDto) {
    return this.cannabisService.create(createCannabisDto);
  }

  @Get()
  findAll() {
    return this.cannabisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cannabisService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCannabisDto: UpdateCannabisDto,
  ) {
    return this.cannabisService.update(+id, updateCannabisDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cannabisService.remove(+id);
  }
}
