import mongoose, { mongo } from "mongoose"

async function conectaDB() {
    mongoose.connect(process.env.DB_STRING_CONNECTION);

    return mongoose.connection;
}

export default conectaDB;