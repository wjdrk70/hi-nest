import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'THis is return all moives';
  }
  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are Searching for a movie made after: ${searchingYear}`;
  }

  @Get(':id')
  getOne(@Param('id') movieId: string) {
    return `THis will one movie with the id ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    console.log(movieData);
    return movieData;
  }
  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  @Patch(':id')
  path(@Param('id') movieId: string, @Body() updateData) {
    return {
      updateMovie: movieId,
      ...updateData,
    };
  }
}
