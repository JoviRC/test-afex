"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const users_model_1 = require("../../users/users.model");
const client_1 = __importDefault(require("../client"));
const getUser = async (id) => {
    const scanAlumnoParams = {
        TableName: 'UsuariosTable',
        Key: {
            id: id,
        },
    };
    const command = new lib_dynamodb_1.GetCommand(scanAlumnoParams);
    return await client_1.default.send(command).then((response) => {
        const item = response.Item;
        const user = new users_model_1.User(item.id, item.nombre, item.apellido, item.correo, item.rut);
        return user;
    });
};
exports.default = getUser;
//# sourceMappingURL=getUser.js.map