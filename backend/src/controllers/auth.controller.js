import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import cloudinary from "../lib/cloudinary.js";

export const signup = async (req, res) => {
	const { fullName, email, password } = req.body;
	try {
		if (!password || !email || !fullName) {
			return res.status(400).json({ message: "All  filds are required" });
		}
		if (password.length < 6) {
			return res
				.status(400)
				.json({ message: "password  should be at least 6 characters." });
		}
 
		const user = await User.findOne({ email });
		if (user) return res.status(400).json({ message: "User alredy exists" });

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);
		const newUser = new User({
			fullName,
			email,
			password: hashedPassword,
		});
		if (newUser) {
			generateToken(newUser._id, res);
			await newUser.save();
			res.status(201).json({
				_id: newUser.id,
				fullName: newUser.fullName,
				email: newUser.email,
				profilePic: newUser.profilePic,
			});
		} else {
			res.status(400).json({ message: "invalid user data" });
		}
	} catch (error) {
		console.log("error in signing ", err);
		res.status(500).json({ message: "Something is wrong" });
	}
};

export const login = async (req, res) => {
	const { fullName, email, password } = req.body;

	try {
		if (!password || !email || !fullName) {
			return res.status(400).json({ message: "All  filds are required" });
		}

		const user = await User.findOne({ email: email });

		if (user) {
			const match = await bcrypt.compare(password, user.password);
			console.log(match, " -----  chekcing");
			if (match) {
				console.log("Login successful");
				generateToken(user._id, res);
				res.status(200).json({
					_id: user.id,
					fullName: user.fullName,
					email: user.email,
					profilePic: user.profilePic,
				});
			} else {
				return res.status(400).json({ message: "Invalid credentials" });
			}
		}
	} catch (error) {
		console.log("error in signing ", error);
		res.status(500).json({ message: "Something is wrong" });
	}
};

export const logout = (req, res) => {
	try {
		res.cookie("jwt", "", { maxAge: 0 });
		res.status(200).json({ message: "logout successfully" });
	} catch (error) {
		console.log("error in signing ", error);
		res.status(500).json({ message: "Something is wrong" });
	}
};



export const updateProfile = async (req, res) => {
	try {
		const { profilePic } = req.body;
		const userId = req.user._id;

		if (!profilePic) {
			return res.status(400).json({ message: "pic is reuired" });
		}
		const uploadResponce = await cloudinary.uploaded.upload(profilePic);
		const updatedUser = await User.findByIdAndUpdate(
			userId,
			{ profilePic: uploadResponce.secure_url },
			{
				new: true,
			}
		);
		res.status(200).json(updatedUser);
	} catch (error) {
		console.log("error  in uploadign ", error);
		return res.status(500).json({ message: "internal error" });
	}
};

export const checkAuth = async (req, res) => {
	try {

		res.status(200).json(req.user);
	} catch (error) {
		console.log("error in checkauth ", error);
		return res.status(500).json({ message: "internal error" });
	}
};
