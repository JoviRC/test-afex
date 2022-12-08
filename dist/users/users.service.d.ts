import { User } from './users.model';
export declare class UsersService {
    private users;
    insertAlumno(nombre: string, apellido: string, correo: string, rut: string): any;
    getAlumnos(): Promise<void | User[]>;
    getAlumno(id: string): Promise<User>;
    updateAlumno(id: string, nombre: string, apellido: string, correo: string, rut: string): User;
    deleteAlumno(id: string): string;
}
