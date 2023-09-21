import { Todo } from '../types';
import { httpClient } from '../utils/httpClient';

export function getTodos(userId = 2) {
  return httpClient.get<Todo[]>(`/todos?userId=${userId}`);
}

export function postTodo(todo: Omit<Todo, 'id'>) {
  return httpClient.post<Todo>('/todos', todo);
}

export function deleteTodo(todoId: number) {
  return httpClient.delete(`/todos/${todoId}`);
}
