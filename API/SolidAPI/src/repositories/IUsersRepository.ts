import { User } from "../models/User";

export interface IUsersRepository {
    findUserByEmail(email: string): Promise<User>;
    saveUser(user: User): Promise<void>;
}