import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://Rojan:Password@onlinefood.mywuh4s.mongodb.net/FOOD_DELIVERY')
    .then(()=>console.log("DB CONNECTED"))
}