const UserInfo = ({ user }: any) => {
  return (
    <div className="m-6 bg-blue-200 text-sm text-gray-950">
      <p className="mt-6">User ID: {user._id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Password: {user.password}</p>
      <p>Location: {user.location.coordinates}</p>
    </div>
  );
};

export { UserInfo };
