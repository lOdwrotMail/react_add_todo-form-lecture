import { useState } from 'react';
import './App.scss';
import { apiService } from './api/api.service';
import { TodoForm } from './components/TodoForm/TodoForm';
import { TodoList } from './components/TodoList';
import { Todo } from './api/api.model';

const todosFromServer = apiService.fetchTodos();

export const App = () => {
  const [todos, setTodos] = useState(todosFromServer);
  const [editedToDo, setEditedToDo] = useState<null | Todo>(null);

  return (
    <div className="App">
      <h1>Add todo form</h1>
      <TodoForm
        handleSubmit={(todo) => setTodos([...todos, todo])}
      />
      <TodoList
        todos={todos}
        onRemove={(todoId) => setTodos(todos.filter((v) => v.id !== todoId))}
        onEdit={setEditedToDo}
      />
      {editedToDo && (
        <TodoForm
          handleSubmit={(todo) => {
            const nextTodos = [...todos];
            const editedIndex = todos.findIndex(v => v.id === todo.id);

            nextTodos[editedIndex] = todo;
            setTodos(nextTodos);
          }}
          defaultValue={editedToDo}
        />
      )}
    </div>
  );
};
