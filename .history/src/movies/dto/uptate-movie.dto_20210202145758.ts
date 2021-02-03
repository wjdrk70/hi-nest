import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { CreateMovieDto } from './create-movie.dto';
import { fromEventPattern } from 'rxjs';
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
