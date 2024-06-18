import { User } from "../../models/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserDTO } from "./ICreateUserDTO";

export class CreateUserUseCase {
    private usersRepository: IUsersRepository

    constructor(usersRepository: IUsersRepository){
        this.usersRepository = usersRepository
    }

    async execute(data: ICreateUserDTO) {
        const userAlreadyExists = await this.usersRepository.findUserByEmail(data.email);

        if(userAlreadyExists) {
            throw new Error('User already exists!');
        }

        const user = new User(data);

        await this.usersRepository.saveUser(user);
    }
}