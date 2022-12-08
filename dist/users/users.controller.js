"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const swagger_1 = require("@nestjs/swagger");
const swagger_2 = require("@nestjs/swagger");
const dist_1 = require("@nestjs/swagger/dist");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    insertAlumno(nombre, apellido, correo, rut) {
        const userId = this.userService.insertAlumno(nombre, apellido, correo, rut);
        return { id: userId };
    }
    getAllAlumnos() {
        return this.userService.getAlumnos();
    }
    getAlumno(id) {
        return this.userService.getAlumno(id);
    }
    updateAlumno(id, nombre, apellido, correo, rut) {
        return this.userService.updateAlumno(id, nombre, apellido, correo, rut);
    }
    deleteAlumno(id) {
        return this.userService.deleteAlumno(id);
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Alumno creado' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad Request' }),
    (0, swagger_2.ApiProperty)(),
    (0, dist_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                nombre: { type: 'string' },
                apellido: { type: 'string' },
                correo: { type: 'string' },
                rut: { type: 'string' },
            },
        },
    }),
    __param(0, (0, common_1.Body)('nombre')),
    __param(1, (0, common_1.Body)('apellido')),
    __param(2, (0, common_1.Body)('correo')),
    __param(3, (0, common_1.Body)('rut')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "insertAlumno", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOkResponse)({ description: 'Alumnos encontrados' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad Request' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getAllAlumnos", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getAlumno", null);
__decorate([
    (0, common_1.Put)('/update/:id'),
    (0, swagger_1.ApiOkResponse)({ description: 'Alumno actualizado' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad Request' }),
    (0, swagger_2.ApiProperty)(),
    (0, dist_1.ApiBody)({
        schema: {
            type: 'object',
            properties: {
                nombre: { type: 'string' },
                apellido: { type: 'string' },
                correo: { type: 'string' },
                rut: { type: 'string' },
            },
        },
    }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('nombre')),
    __param(2, (0, common_1.Body)('apellido')),
    __param(3, (0, common_1.Body)('correo')),
    __param(4, (0, common_1.Body)('rut')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "updateAlumno", null);
__decorate([
    (0, common_1.Delete)('/delete/:id'),
    (0, swagger_1.ApiOkResponse)({ description: 'Alumno eliminado' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Bad Request' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "deleteAlumno", null);
UserController = __decorate([
    (0, common_1.Controller)('alumnos'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=users.controller.js.map