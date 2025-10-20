import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    console.log("Logout button clicked..."); // For debugging
    authService
      .logout()
      .then(() => {
        console.log("Logout successful!"); // For debugging
        dispatch(logout());
      })
      .catch((error) => {
        // This will show you the error in the console
        console.error("Logout Failed:", error);
      });
  };

  return (
    <button
      className="inline-block text-2xl px-4 py-2 duration-200 rounded-md !bg-transparent text-[#646cff] hover:text-[#535bf2]"
      onClick={logoutHandler}
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
