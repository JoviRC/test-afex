import { User } from '../../users/users.model';
declare const getUser: (id: string) => Promise<User>;
export default getUser;
