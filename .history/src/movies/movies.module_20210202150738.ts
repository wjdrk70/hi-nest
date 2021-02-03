import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
  providers: [MoviesService],
})
export class MoviesModule {}
