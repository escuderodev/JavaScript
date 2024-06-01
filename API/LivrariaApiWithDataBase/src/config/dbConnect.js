import mongoose, { mongo } from "mongoose"

async function conectaDB() {
    mongoose.connect("mongodb+srv://escuderodev:1403@escuderodev.gaumr0y.mongodb.net/livraria?retryWrites=true&w=majority&appName=escuderodev");

    return mongoose.connection;
}

export default conectaDB;