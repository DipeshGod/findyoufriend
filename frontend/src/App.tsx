import "./index.css";
import { UserInfo } from "./components/UserInfo";
import { useGetUsers } from "./hooks/useGetUsers";

const App = () => {
  const { users, isLoading, error } = useGetUsers();

  return (
    <>
      <h1>Data Fetching in React App</h1>
      <p>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          users?.data.map((user: any, index: number) => {
            return (
              <div key={index}>
                <UserInfo user={user} />
              </div>
            );
          })
        )}
      </p>
      {error ? <p>Something went Wrong!</p> : null}
    </>
  );
};

export default App;
