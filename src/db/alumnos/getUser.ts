import { GetCommand } from '@aws-sdk/lib-dynamodb';
import { User } from '../../users/users.model';
import docClient from '../client';

const getUser = async (id: string) => {
  const scanAlumnoParams = {
    TableName: 'UsuariosTable',
    Key: {
      id: id,
    },
  };
  const command = new GetCommand(scanAlumnoParams);
  return await docClient.send(command).then((response) => {
    const item = response.Item;
    const user = new User(
      item.id,
      item.nombre,
      item.apellido,
      item.correo,
      item.rut,
    );
    return user;
  });
};

export default getUser;
