import cn from 'classnames';
import { Todo } from '../../api/api.model';
import { UserInfo } from '../UserInfo';

export type TodoInfoProps = {
  todo: Todo,
  onRemove: () => void,
  onEdit: () => void,
};

export const TodoInfo = ({ todo, onRemove, onEdit }: TodoInfoProps) => {
  return (
    <article
      data-id="1"
      className={cn('TodoInfo', {
        'TodoInfo--completed': todo.completed,
      })}
    >
      <button type="button" onClick={onRemove}>Delete</button>
      <button type="button" onClick={onEdit}>Edit</button>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};
