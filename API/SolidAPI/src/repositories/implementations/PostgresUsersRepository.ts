import { User } from "../../models/User";
import { IUsersRepository } from "../IUsersRepository";

export class PostgresUsersRepository implements IUsersRepository {
    private users: User[] = [];

    async findUserByEmail(email: string): Promise<User> {
        const user = this.users.find(user => user.email === email);
        return user;
    }

    async saveUser(user: User): Promise<void> {
        this.users.push(user);
    }

}