import { Injectable } from '@nestjs/common';
import { User } from './users.model';
import { v4 as uuidv4 } from 'uuid';
import putUser from '../db/alumnos/putUser';
import getUsers from '../db/alumnos/getUsers';
import getUser from '../db/alumnos/getUser';
import DeleteUser from '../db/alumnos/deleteUser';

@Injectable()
export class UsersService {
  private users: User[] = [];

  insertAlumno(nombre: string, apellido: string, correo: string, rut: string) {
    const id = uuidv4();
    const newUser = new User(id, nombre, apellido, correo, rut);
    putUser(newUser);
    return id;
  }

  getAlumnos() {
    return getUsers();
  }

  getAlumno(id: string) {
    return getUser(id);
  }

  updateAlumno(
    id: string,
    nombre: string,
    apellido: string,
    correo: string,
    rut: string,
  ) {
    const newAlumno = new User(id, nombre, apellido, correo, rut);
    putUser(newAlumno);
    return newAlumno;
  }

  deleteAlumno(id: string) {
    DeleteUser(id);
    return id;
  }
}
