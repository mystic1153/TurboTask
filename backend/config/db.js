import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://yug35287:Yug2153@cluster0.s1y31ht.mongodb.net/taskflow')
    .then (() => console.log('DB CONNECTED'));
}