import React, { memo, useContext, useState } from 'react';
import { Todo } from '../types';
import { TodoForm } from './TodoForm';
import { TodoUpdateContext } from './TodoConetxt';

type Props = {
  todo: Todo;
};

export const TodoCard: React.FC<Props> = memo(({ todo }) => {
  const [editing, setEditing] = useState(false);
  const { updateTodo, deleteTodo } = useContext(TodoUpdateContext);

  // eslint-disable-next-line no-console
  console.log('Render', todo.id);

  return (
    <article className="TodoCard">
      {editing ? (
        <TodoForm
          onSubmit={(updatedTodo) => {
            updateTodo(updatedTodo);
            setEditing(false);
          }}
          onReset={() => setEditing(false)}
          todo={todo}
        />
      ) : (
        <>
          <h3
            style={{ color: todo.completed ? 'green' : 'red' }}
            className="TodoCard__title"
          >
            {`${todo.title} #${todo.id}`}
          </h3>

          <button type="button" onClick={() => setEditing(true)}>
            edit
          </button>

          <button type="button" onClick={() => deleteTodo(todo.id)}>
            x
          </button>
        </>
      )}

    </article>
  );
});
