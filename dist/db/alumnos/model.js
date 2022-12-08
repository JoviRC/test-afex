"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const client_1 = __importDefault(require("../client"));
const alumnoTableParams = {
    TableName: 'UsuariosTable',
    KeySchema: [{ AttributeName: 'PK', KeyType: 'HASH' }],
    AttributeDefinitions: [{ AttributeName: 'PK', AttributeType: 'S' }],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1,
    },
};
const command = new client_dynamodb_1.CreateTableCommand(alumnoTableParams);
client_1.default
    .send(command)
    .then((r) => {
    console.log(r);
})
    .catch((err) => {
    console.log(err);
});
//# sourceMappingURL=model.js.map