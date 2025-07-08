import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";


export const useChatStore = create((set, get) => ({
	messages: [],
	users: [],
	onlineUsers: {},
	selectedUser: null,
	isUsersLoading: false,
	isMessagesLoading: false,

	getUsers: async () => {
		set({ isUsersLoading: true });
		try {
			const res = await axiosInstance.get("/messages/user");

			set({ users: res.data });
		} catch (error) {
			toast.error(error.response.data.message);
			console.log("there was  problem getting users from database");
		} finally {
			set({ isUsersLoading: false });
		}
	},
	//check
	getMessages: async (userId) => {
		set({ isMessagesLoading: true });
		try {
			const res = await axiosInstance.get(`/messages/${userId}`);
			set({ messages: res.data });
			console.log(res.data);
		} catch (error) {
			toast.error(error.response?.data?.message || "Failed to load users");

			console.log("there was  problem getting messages from database");
		} finally {
			set({ isMessagesLoading: false });
		}
	},
	sendMessage: async (messageData) => {
		const { selectedUser, messages } = get();
		try {
			const res = await axiosInstance.post(
				`/messages/send/${selectedUser._id}`,
				messageData
			);
			set({ messages: [...messages, res.data] });
		} catch (error) {
			toast.error(error.response.data.message);
		}
	},

	//todo: optimize this one later
	setSelectedUser: (selectedUser) => set({ selectedUser }),
}));
