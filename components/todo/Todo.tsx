import axios from 'axios';
import { useState } from 'react';
import { EPriorityType, INewTodo, ITodo } from '../../lib/types';
import { useGlobalState } from '../../reducer';
import { deleteTodo, updateTodo } from '../../reducer/reducer';
import AddTodoModal from '../AddTodoModal';
import DeleteModal from '../DeleteModal';

export default function Todo({ todo, onDelete }: { todo: ITodo, onDelete: () => void }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [isActive, setIsActive] = useState(todo.is_active ? true : false)
  const [,dispatch] = useGlobalState();

  const bgColor = (priority: EPriorityType) => {
    switch (priority) {
      case EPriorityType.VERY_HIGH:
        return 'bg-error';
      case EPriorityType.HIGH:
        return 'bg-warning';
      case EPriorityType.NORMAL:
        return 'bg-success';
      case EPriorityType.LOW:
        return 'bg-info';
      case EPriorityType.VERY_LOW:
        return 'bg-secondary';
      default:
        return 'bg-black';
    }
  };

  const handleDeleteTodo = async () => {
    const { status } = await axios.delete(`/api/todos/${todo.id}`);
    if (status === 200) {
      dispatch(deleteTodo(todo.id));
      setShowDeleteModal(false);
      onDelete();
    }
  };

  const handleUpdateActive = async () => {
    const body = {
      is_active: !isActive,
    }

    const { data: updatedTodo, status } = await axios.patch<INewTodo>(`/api/todos/${todo.id}`, body);

    if (status === 200) {
      const { id, title, activity_group_id, is_active: isActiveRes, priority } = updatedTodo;
      const is_active = isActiveRes ? 1 : 0;
      dispatch(updateTodo({ id, title, activity_group_id, is_active, priority }));
      setIsActive(isActiveRes ? true : false)
      setShowAddModal(false);
    }
  }

  return (
    <>
      <div data-cy='todo-item' className="w-full flex justify-start items-center gap-3 md:gap-4 shadow-[0_6px_10px_0px_rgba(0,0,0,0.15)] rounded-xl p-4">
        <input
          data-cy='todo-item-checkbox'
          onChange={() => handleUpdateActive()}
          checked={!isActive}
          type="checkbox"
          className="checkbox checkbox-primary border-primary-black peer"
        />
        <div className={`w-2 h-2 rounded-full ${bgColor(todo.priority)}`}></div>
        <p className="flex-grow text-sm md:text-base lg:text-lg font-bold peer-checked:text-secondary-black peer-checked:line-through leading-none">
          {todo.title}
        </p>
        <div className="flex gap-2 items-center">
          <button
            onClick={() => setShowAddModal(true)}
            data-cy="activity-item-delete-button"
            className="btn btn-square btn-sm btn-ghost hover:bg-info/75 text-secondary-black hover:text-info-content"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 md:w-5 md:h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </button>
          <button
            data-cy='todo-item-delete-button'
            onClick={() => setShowDeleteModal(true)}
            className="btn btn-square btn-sm btn-ghost hover:bg-error/75 text-secondary-black hover:text-error-content"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 md:w-5 md:h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
      <DeleteModal
        type="Todo"
        show={showDeleteModal}
        itemName={todo.title}
        onCancel={() => setShowDeleteModal(false)}
        onDelete={handleDeleteTodo}
      />
      <AddTodoModal
        todoId={todo.id}
        show={showAddModal}
        onClose={() => setShowAddModal(false)}
        defTitle={todo.title}
        defPriority={todo.priority}
        />
    </>
  );
}
