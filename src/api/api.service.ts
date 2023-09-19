import { Todo, User } from './api.model';

class ApiService {
  // eslint-disable-next-line class-methods-use-this
  async fetchUsers(): Promise<User[]> {
    const response = await fetch('http://localhost:3000/users');
    const usersFromServer = (await response.json()) as User[];

    return usersFromServer;
  }

  async fetchTodos(): Promise<Todo[]> {
    const users = await this.fetchUsers();

    const response = await fetch('http://localhost:3000/todos');
    const todosFromServer = (await response.json()) as Todo[];

    return todosFromServer.map((v) => ({
      ...v,
      user: users.find((user) => user.id === v.userId) || null,
    }));
  }
}

export const apiService = new ApiService();
