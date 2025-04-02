
import {create}  from "zustand"
import {axiosInstance} from "axios"
export const useAuthStore = create((set) => ({
	authUser: null,
	isCheckingAuth: true,
	isSigningUp: false,
	isLoginUp: false,
    isUpdatingProfile: false,
    

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/auth/check");
            set({ authUser: res.data });
        } catch (error) {
            console.log("error in  check: ", error);
            set({ authUser: null });
            set({ isCheckingAuth: false });
        }
    }
}));