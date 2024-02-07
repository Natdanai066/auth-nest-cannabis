import { PartialType } from '@nestjs/mapped-types';
import { CreateCannabisDto } from './create-cannabis.dto';

export class UpdateCannabisDto extends PartialType(CreateCannabisDto) {}