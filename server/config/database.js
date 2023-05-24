import mongoose from "mongoose";
const connectDB = () => {
	mongoose.set("strictQuery", true);
	mongoose
		.connect(process.env.DB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then((data) => {
			console.log(`Mongodb connected with server: ${data.connection.host}`);
		});
};

export default connectDB;
