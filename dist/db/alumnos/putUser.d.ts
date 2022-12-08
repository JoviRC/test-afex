import { User } from '../../users/users.model';
declare const putUser: (user: User) => Promise<import("@aws-sdk/lib-dynamodb").PutCommandOutput>;
export default putUser;
