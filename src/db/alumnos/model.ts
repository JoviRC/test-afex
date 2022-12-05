import { CreateTableCommand, CreateTableInput } from '@aws-sdk/client-dynamodb';
import docClient from '../client';

const alumnoTableParams: CreateTableInput = {
  TableName: 'UsuariosTable',
  KeySchema: [{ AttributeName: 'PK', KeyType: 'HASH' }],
  AttributeDefinitions: [{ AttributeName: 'PK', AttributeType: 'S' }],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
};

const command = new CreateTableCommand(alumnoTableParams);

docClient
  .send(command)
  .then((r) => {
    console.log(r);
  })
  .catch((err) => {
    console.log(err);
  });
