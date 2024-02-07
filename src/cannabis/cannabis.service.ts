import { Injectable } from '@nestjs/common';
import { CreateCannabisDto } from './dto/create-cannabis.dto';
import { UpdateCannabisDto } from './dto/update-cannabis.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cannabis } from './entities/cannabis.entity';

@Injectable()
export class CannabisService {
  constructor(
    @InjectRepository(Cannabis)
    private cannabisRepository: Repository<Cannabis>,
  ) {}

  async create(createCannabisDto: CreateCannabisDto) {
    const cannabis = await this.cannabisRepository.create(createCannabisDto);
    const toCreate = await this.cannabisRepository.insert(cannabis);
    return toCreate;
  }

  findAll() {
    return this.cannabisRepository.find();
  }

  findOne(id: number) {
    return this.cannabisRepository.findOneBy({ id: id });
  }

  async update(id: number, updatecannabisDto: UpdateCannabisDto) {
    let Cannabis = await this.cannabisRepository.findOneBy({ id: id });
    Cannabis = {
      ...Cannabis,
      ...updatecannabisDto,
    };
    const toUpdate = await this.cannabisRepository.save(Cannabis);
    return toUpdate;
  }

  async remove(id: number) {
    const toDelete = await this.cannabisRepository.delete(id);
    return toDelete;
  }
}
