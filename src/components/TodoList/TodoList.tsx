import { Todo } from '../../api/api.model';
import { TodoInfo } from '../TodoInfo';

type TodoListProps = {
  todos: Todo[];
  onRemove: (todoId: number) => void;
  onEdit: (todo: Todo) => void;
};

export const TodoList = ({ todos, onRemove, onEdit }: TodoListProps) => {
  return (
    <section className="TodoList">
      {todos.map((todo) => (
        <TodoInfo
          key={todo.id}
          todo={todo}
          onRemove={() => onRemove(todo.id)}
          onEdit={() => onEdit(todo)}
        />
      ))}
    </section>
  );
};
