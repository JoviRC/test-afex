"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const users_model_1 = require("../../users/users.model");
const client_1 = __importDefault(require("../client"));
const getUsers = () => {
    const scanAlumnoParams = {
        TableName: 'UsuariosTable',
    };
    const command = new lib_dynamodb_1.ScanCommand(scanAlumnoParams);
    return client_1.default
        .send(command)
        .then((r) => {
        const items = r.Items;
        const users = [];
        items.forEach((item) => {
            const user = new users_model_1.User(item.id, item.nombre, item.apellido, item.correo, item.rut);
            users.push(user);
        });
        return users;
    })
        .catch((err) => {
        console.log(err);
    });
};
exports.default = getUsers;
//# sourceMappingURL=getUsers.js.map