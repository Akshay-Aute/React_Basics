import { useState } from "react";
import "./App.css";
import { UserContextProvider } from "./context/UserContext.jsx";
import Profile from "./components/Profile";
import Login from "./components/Login";

function App() {
  return (
    <UserContextProvider>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-8">React Context API Demo</h1>
        <div className="space-y-4">
          <Login />
          <Profile />
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
