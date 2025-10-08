import { useUser } from "../context/UserContext";

function Profile() {
  const { user } = useUser();

  if (!user)
    return <div className="text-gray-500">Please login to see profile</div>;

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold">Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default Profile;
