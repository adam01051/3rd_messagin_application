import User from "../models/user.model.js"
import bcrypt from "bcryptjs"

export const signup =  async(req, res) => {
	const { fullName, email, password } = req.body;
	try {
		if (!password || !email || !fullName) {
			return res.status(400).json({ message: "All  filds are required" });

		}
		if (password.length < 6) {
			return res.status(400).json({ message: "password  should be at least 6 characters." });
		}

		const user = await User.findOne({ email });
		if(user) return	 res.status(400).json({ message: "User alredy exists" });
		
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);
		const newUser = new User({
			fullName,
			email,
			password: hashedPassword,
		});
		if (newUser) {

			
		}
			
		
		

	} catch (error) {
		return res
			.status(400)
			.json({ message: "Something is wrong" });
	}


};


export const login = (req, res) => {
	res.send("login route");
};


export const logout = (req, res) => {
	res.send("logout route");
};
