import { Todo, User } from './api.model';
import usersFromServer from './users';
import todosFromServer from './todos';

class ApiService {
  // eslint-disable-next-line class-methods-use-this
  fetchUsers(): User[] {
    return usersFromServer;
  }

  fetchTodos(): Todo[] {
    const users = this.fetchUsers();

    return todosFromServer.map((v) => ({
      ...v,
      user: users.find((user) => user.id === v.userId) || null,
    }));
  }
}

export const apiService = new ApiService();
