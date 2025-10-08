import { useUser } from "../context/UserContext";

function Login() {
  const { setUser } = useUser();

  const handleLogin = () => {
    setUser({ name: "John Doe", email: "john@example.com" });
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="flex gap-4">
      <button
        onClick={handleLogin}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Login
      </button>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}

export default Login;
