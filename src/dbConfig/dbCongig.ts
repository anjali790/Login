import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("mongo db connected sucessfully");
    });

    connection.on("error", (err) => {
      console.log("error in connection", err);
    });
  } catch (error) {
    console.log("Something went wrong");
    console.log(error);
  }
}
