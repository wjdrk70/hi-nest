import { Controller, Get } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'THis is return all moives';
  }

  @Get('/:id')
  getOne() {
    return 'THis will one movie';
  }
}
