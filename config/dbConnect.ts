import mongoose, { ConnectOptions } from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI as string,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        strictQuery: true,
      } as ConnectOptions
    );
    console.log("Connect Mongo DB!");
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default dbConnect;
