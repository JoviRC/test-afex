import { DeleteCommand } from '@aws-sdk/lib-dynamodb';
import { User } from 'src/users/users.model';
import docClient from '../client';

const DeleteUser = async (id: string) => {
  const scanAlumnoParams = {
    TableName: 'UsuariosTable',
    Key: {
      id: id,
    },
  };
  const command = new DeleteCommand(scanAlumnoParams);
  return await docClient.send(command);
};

export default DeleteUser;
