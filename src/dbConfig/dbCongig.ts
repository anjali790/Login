import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect("mongodb+srv://anjaliruby790:Anjali12345@cluster0.rl3ceeo.mongodb.net/");

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
