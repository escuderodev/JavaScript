const dbInMemory = [
    {
        name: "Eduardo Escudero",
        fone: "11955005284",
        email: "escuderodev@gmail.com",
        restriction: "Intolerância a Lactose"
    },
];

export class ClientService {

    findAll = () => {
        return dbInMemory;
    }

    create = (name: string, fone: string, email: string, restriction: string) => {
        const client = {
            name: name,
            fone: fone,
            email: email,
            restriction: restriction
        }
        dbInMemory.push(client);
        console.log('DB atualizado!', dbInMemory);
    }
};