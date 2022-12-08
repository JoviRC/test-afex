"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const client_1 = __importDefault(require("../client"));
const putUser = (user) => {
    const putAlumnoParams = {
        TableName: 'UsuariosTable',
        Item: {
            id: user.id,
            nombre: user.nombre,
            apellido: user.apellido,
            correo: user.correo,
            rut: user.rut,
        },
    };
    const command = new lib_dynamodb_1.PutCommand(putAlumnoParams);
    return client_1.default.send(command);
};
exports.default = putUser;
//# sourceMappingURL=putUser.js.map