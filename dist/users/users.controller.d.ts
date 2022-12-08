import { UsersService } from './users.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UsersService);
    insertAlumno(nombre: string, apellido: string, correo: string, rut: string): {
        id: any;
    };
    getAllAlumnos(): Promise<void | import("./users.model").User[]>;
    getAlumno(id: string): Promise<import("./users.model").User>;
    updateAlumno(id: string, nombre: string, apellido: string, correo: string, rut: string): import("./users.model").User;
    deleteAlumno(id: string): string;
}
