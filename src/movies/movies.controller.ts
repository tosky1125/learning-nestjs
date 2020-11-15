import { Controller, Delete, Get, Param, Post, Patch, Body } from '@nestjs/common';

@Controller('movies') // this is entry point
export class MoviesController {
  @Get() 
  getAll() : string {
    return "This will return all movies";
  };

  @Get("/:id")
  getOne(@Param("id") id: string) {
    return `This will return one movie with the id ${id}`;
  }

  @Post()
  create(@Body() movieData) {
    console.log(movieData);
    return movieData
  };

  @Delete("/id")
  remove(@Param('id') id :string) {
    return `This will delete movie with the id ${id}`;
  };

  @Patch("/:id") 
  patch(@Param('id') id : string, @Body() updatedData) {
    return {
      updatedMovie : id, 
      ...updatedData
    }
  }
}
