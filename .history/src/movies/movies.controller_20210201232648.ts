import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'THis is return all moives';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `THis will one movie with the id ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    console.log(movieData);
    return 'THis will create a movie';
  }
  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  @Patch('/:id')
  path(@Param('id') movieId: string) {
    return `This will path a movie with the id: ${movieId}`;
  }
}
