import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './users.controller';
import { UsersService } from './users.service';
describe('UsersController', () => {
  let controller: UserController;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UserController>(UserController);
  });
  it('Debe estar definido el controlador', () => {
    expect(controller).toBeDefined();
  });

  it('Debe insertar un alumno y retornar la id', () => {
    const result = controller.insertAlumno(
      'nombre',
      'apellido',
      'correo',
      'rut',
    );
    expect(result).toEqual({ id: expect.any(String) });
  });

  it('Debe retornar un arreglo de User', () => {
    const result = controller.getAllAlumnos();
    expect(result).toEqual(expect.any(Object));
  });
  it('Debe enviar un alumno por id', () => {
    const result = controller.getAlumno('id');
    expect(result).toEqual(expect.any(Object));
  });
  it('Debe actualizar un alumno', () => {
    const result = controller.updateAlumno(
      'id',
      'nombre',
      'apellido',
      'correo',
      'rut',
    );
    expect(result).toEqual(expect.any(Object));
  });
  it('Debe eliminar un alumno', () => {
    const result = controller.deleteAlumno('id');
    expect(result).toEqual(expect.any(String));
  });
});
