import { ScanCommand } from '@aws-sdk/lib-dynamodb';
import { User } from '../../users/users.model';
import docClient from '../client';

const getUsers = () => {
  const scanAlumnoParams = {
    TableName: 'UsuariosTable',
  };
  const command = new ScanCommand(scanAlumnoParams);
  return docClient
    .send(command)
    .then((r) => {
      const items = r.Items;
      const users: User[] = [];
      items.forEach((item) => {
        const user = new User(
          item.id,
          item.nombre,
          item.apellido,
          item.correo,
          item.rut,
        );
        users.push(user);
      });
      return users;
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getUsers;
