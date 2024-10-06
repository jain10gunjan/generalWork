import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("DB is connected Successfully");
  });
  await mongoose.connect('mongodb+srv://dileepcoder02:dileepcoder02@cluster0.gihtg.mongodb.net/testing');
};
export default connectDB;
