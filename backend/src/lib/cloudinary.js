import { v2 as Cloudinary } from "cloudinary";

import { config } from "dotenv";
config();
Cloudinary.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_KEY,
	api_secret: process.env.CLOUDINARY_SECRET,
});
export default Cloudinary;
