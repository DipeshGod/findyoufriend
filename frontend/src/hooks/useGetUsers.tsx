import { useEffect, useState } from "react";
import { getUsersApi } from "../lib/services/user";

const useGetUsers = () => {
  const [users, setUsers] = useState<any[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getUsers() {
      try {
        setIsLoading(true);
        const res = await getUsersApi();
        setUsers(res.data);
        setIsLoading(false);
      } catch (e: any) {
        setError(e.message);
        setIsLoading(false);
      }
    }
    getUsers();
  }, []);

  return { users, isLoading, error };
};

export { useGetUsers };
