import { User } from "../../models/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserDTO } from "./ICreateUserDTO";

export class CreateUserUseCase {
    private usersRepository: IUsersRepository
    private mailProvider: IMailProvider

    constructor(usersRepository: IUsersRepository, mailProvider: IMailProvider) {
        this.usersRepository = usersRepository
        this.mailProvider = mailProvider
    }

    async execute(data: ICreateUserDTO) {
        const userAlreadyExists = await this.usersRepository.findUserByEmail(data.email);

        if(userAlreadyExists) {
            throw new Error('User already exists!');
        }

        const user = new User(data);

        await this.usersRepository.saveUser(user);

        this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email
            },
            from: {
                name: 'My App',
                email: 'escuderodev@gmail.com'
            },
            subject: 'Bem vindo ao App!',
            body: '<p>Este é um teste de envio de email.</p>'
        })
    }
}