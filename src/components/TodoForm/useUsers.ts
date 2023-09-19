import { useEffect, useState } from 'react';
import { apiService } from '../../api/api.service';
import { User } from '../../api/api.model';

export const useUsers = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(async () => {
      const data = await apiService.fetchUsers();

      setUsers(data);
      setIsLoading(false);
    }, 10000);
  }, []);

  return { users, isLoading };
};
