import { PutCommandInput, PutCommand } from '@aws-sdk/lib-dynamodb';
import docClient from '../client';
import { User } from '../../users/users.model';

const putUser = (user: User) => {
  const putAlumnoParams: PutCommandInput = {
    TableName: 'UsuariosTable',
    Item: {
      id: user.id,
      nombre: user.nombre,
      apellido: user.apellido,
      correo: user.correo,
      rut: user.rut,
    },
  };
  const command = new PutCommand(putAlumnoParams);
  return docClient.send(command);
};

export default putUser;
