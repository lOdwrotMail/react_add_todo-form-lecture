import { TodoForm } from './TodoForm';
import { useAddTodo } from './TodoForm/useAddTodo';

export const AddTodoForm = () => {
  const { submitTodo, isLoading } = useAddTodo();

  if (isLoading) {
    return <div>Submitting...</div>;
  }

  return (
    <TodoForm onSubmit={submitTodo} />
  );
};
