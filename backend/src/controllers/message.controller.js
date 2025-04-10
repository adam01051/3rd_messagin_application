import User from "../models/user.model.js";
import Message from "../models/message.model.js";


export const getUsersForSidebar = async (req, res) =>
{
    try {
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
        res.status(200).json(filteredUsers);
    } catch (error) {
        console.log("error  in  findinng  user  ");
        res.status(500).json({ error: "internal server error" });
    }
}

export const getMessages = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const myId = req.user._id;
        

        const messages = await Message.find({
					$or: [
						{ senderId: myId, receiverId: userToChatId },
						{ senderId: userToChatId, receiverId: myId },
					],
				});


		res.status(200).json(filteredUsers);
	} catch (error) {
		console.log("error message controller  ");
		res.status(500).json({ error: "internal server error" });
	}
};


export const sendMessages = async (req, res) => {
	try {
		const { id: userToChatId } = req.params;
		const myId = req.user._id;

		const messages = await Message.find({
			$or: [
				{ senderId: myId, receiverId: userToChatId },
				{ senderId: userToChatId, receiverId: myId },
			],
		});

		res.status(200).json(filteredUsers);
	} catch (error) {
		console.log("error message controller  ");
		res.status(500).json({ error: "internal server error" });
	}
};