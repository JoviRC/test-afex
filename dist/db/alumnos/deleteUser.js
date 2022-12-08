"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const client_1 = __importDefault(require("../client"));
const DeleteUser = async (id) => {
    const scanAlumnoParams = {
        TableName: 'UsuariosTable',
        Key: {
            id: id,
        },
    };
    const command = new lib_dynamodb_1.DeleteCommand(scanAlumnoParams);
    return await client_1.default.send(command);
};
exports.default = DeleteUser;
//# sourceMappingURL=deleteUser.js.map