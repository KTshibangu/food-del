import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://roddy:krtholyrhyme1994@cluster0.ldxizom.mongodb.net/food-del')
    .then(() => console.log("DB Connected"));
}