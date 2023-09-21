import { useContext, useState } from 'react';
import { Todo } from '../../types';
import { postTodo } from '../../services/todo';
import { TodoUpdateContext } from '../TodoContext';

export const useAddTodo = () => {
  const { addTodo } = useContext(TodoUpdateContext);
  const [isLoading, setIsLoading] = useState(false);

  const submitTodo = (todo: Todo) => {
    const { id, ...newTodo } = todo;

    setIsLoading(true);
    postTodo(newTodo).then((data) => {
      addTodo(data);
      setIsLoading(false);
    });
  };

  return { submitTodo, isLoading };
};
