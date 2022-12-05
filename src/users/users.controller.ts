import {
  Param,
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import {
  ApiCreatedResponse,
  ApiResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { ApiProperty } from '@nestjs/swagger';
import { ApiBody } from '@nestjs/swagger/dist';

@Controller('alumnos')
export class UserController {
  constructor(private readonly userService: UsersService) {}

  @Post('/create')
  @ApiCreatedResponse({ description: 'Alumno creado' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiProperty()
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        nombre: { type: 'string' },
        apellido: { type: 'string' },
        correo: { type: 'string' },
        rut: { type: 'string' },
      },
    },
  })
  insertAlumno(
    @Body('nombre') nombre: string,
    @Body('apellido') apellido: string,
    @Body('correo') correo: string,
    @Body('rut') rut: string,
  ) {
    const userId = this.userService.insertAlumno(nombre, apellido, correo, rut);
    return { id: userId };
  }

  @Get()
  @ApiOkResponse({ description: 'Alumnos encontrados' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  getAllAlumnos() {
    return this.userService.getAlumnos();
  }

  @Get(':id')
  getAlumno(@Param('id') id: string) {
    return this.userService.getAlumno(id);
  }

  @Put('/update/:id')
  @ApiOkResponse({ description: 'Alumno actualizado' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiProperty()
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        nombre: { type: 'string' },
        apellido: { type: 'string' },
        correo: { type: 'string' },
        rut: { type: 'string' },
      },
    },
  })
  updateAlumno(
    @Param('id') id: string,
    @Body('nombre') nombre: string,
    @Body('apellido') apellido: string,
    @Body('correo') correo: string,
    @Body('rut') rut: string,
  ) {
    return this.userService.updateAlumno(id, nombre, apellido, correo, rut);
  }

  @Delete('/delete/:id')
  @ApiOkResponse({ description: 'Alumno eliminado' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  deleteAlumno(@Param('id') id: string) {
    return this.userService.deleteAlumno(id);
  }
}
