import { IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString
  readonly title: string;
  readonly year: number;
  readonly genres: string[];
}
