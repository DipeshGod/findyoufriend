// import "./index.css";
// import { UserInfo } from "./components/UserInfo";
// import { useGetUsers } from "./hooks/useGetUsers";
// import { CircularProgress, Typography } from "@mui/material";

// const App = () => {
//   const { users, isLoading, error } = useGetUsers();

//   return (
//     <>
//       <Typography variant="h3">Data Fetching in React App</Typography>
//       <p>
//         {isLoading ? (
//           <CircularProgress />
//         ) : (
//           users?.data.map((user: any, index: number) => {
//             return (
//               <div key={index}>
//                 <UserInfo user={user} />
//               </div>
//             );
//           })
//         )}
//       </p>
//       {error ? (
//         <Typography variant="h4" className="text-red-600">
//           Something went Wrong!
//         </Typography>
//       ) : null}
//     </>
//   );
// };

// export default App;

import "./index.css";
import { CoinRanking } from "./miniApps/CoinRanking";
// import { MoviesApp } from "./miniApps/MoviesApp";
import { MoviesApp } from "./miniApps/MoviesApp";

const App = () => {
  return (
    <>
      {/* <MoviesApp /> */}
      <CoinRanking />
    </>
  );
};

export default App;
