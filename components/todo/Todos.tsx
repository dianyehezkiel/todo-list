import { ESortType, ITodo } from '../../lib/types';
import { useGlobalState } from '../../reducer';
import Todo from './Todo';

export default function Todos({ todos, onDeleteTodo }: { todos: ITodo[], onDeleteTodo: () => void }) {
  const [{ sort }] = useGlobalState();
  const compareFns = (sortType: ESortType) => {
    switch (sortType) {
      case ESortType.NEWEST:
        return function (todoA: ITodo, todoB: ITodo) {
          return todoB.id - todoA.id;
        };
      case ESortType.OLDEST:
        return function (todoA: ITodo, todoB: ITodo) {
          return todoA.id - todoB.id;
        };
      case ESortType.AZ:
        return function (todoA: ITodo, todoB: ITodo) {
          return todoA.title.toLocaleLowerCase() > todoB.title.toLocaleLowerCase() ? 1 : -1;
        };
      case ESortType.ZA:
        return function (todoA: ITodo, todoB: ITodo) {
          return todoA.title.toLocaleLowerCase() > todoB.title.toLocaleLowerCase() ? -1 : 1;
        };
      default:
        return function (todoA: ITodo, todoB: ITodo) {
          return todoA.is_active > todoB.is_active ? -1 : 1;
        };
    }
  };

  const compareFn = compareFns(sort);

  const sortedTodos = todos.sort((a, b) => compareFn(a, b));

  return (
    <div className="w-full h-full grid grid-cols-1 gap-2.5">
      {sortedTodos.map((todo) => (
        <Todo onDelete={onDeleteTodo} key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
