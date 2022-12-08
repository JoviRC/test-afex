"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const users_model_1 = require("./users.model");
const uuid_1 = require("uuid");
const putUser_1 = __importDefault(require("../db/alumnos/putUser"));
const getUsers_1 = __importDefault(require("../db/alumnos/getUsers"));
const getUser_1 = __importDefault(require("../db/alumnos/getUser"));
const deleteUser_1 = __importDefault(require("../db/alumnos/deleteUser"));
let UsersService = class UsersService {
    constructor() {
        this.users = [];
    }
    insertAlumno(nombre, apellido, correo, rut) {
        const id = (0, uuid_1.v4)();
        const newUser = new users_model_1.User(id, nombre, apellido, correo, rut);
        (0, putUser_1.default)(newUser);
        return id;
    }
    getAlumnos() {
        return (0, getUsers_1.default)();
    }
    getAlumno(id) {
        return (0, getUser_1.default)(id);
    }
    updateAlumno(id, nombre, apellido, correo, rut) {
        const newAlumno = new users_model_1.User(id, nombre, apellido, correo, rut);
        (0, putUser_1.default)(newAlumno);
        return newAlumno;
    }
    deleteAlumno(id) {
        (0, deleteUser_1.default)(id);
        return id;
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map