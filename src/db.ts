import mongoose from 'mongoose';

export const connectDb = async () => {
  mongoose
    .connect(process.env.MONGODB_URI!)
    .then((connection) => console.log(connection.connection.host));
};
