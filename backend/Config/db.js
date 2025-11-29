import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://roddy:password@cluster0.ldxizom.mongodb.net/food-del')
    .then(() => console.log("DB Connected"));
}