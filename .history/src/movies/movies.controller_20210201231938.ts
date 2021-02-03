import { Controller, Delete, Get, Param, Post } from '@nestjs/common';

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
  create() {
    return 'THis will create a movie';
  }
  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }
}
