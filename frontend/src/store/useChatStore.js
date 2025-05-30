import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";


export const useChatStore = create((set) => ({
  messages: [],
  users: [],
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

  //todo: optimize this one later
  setSelectedUser: (selectedUser) => set({ selectedUser }),
}));
