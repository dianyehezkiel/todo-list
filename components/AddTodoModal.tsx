import axios from 'axios';
import { useState } from 'react';
import { BASE_URL } from '../lib/constant';
import { EPriorityType, INewTodo } from '../lib/types';
import { useGlobalState } from '../reducer';
import { addTodo, updateTodo } from '../reducer/reducer';

interface AddTodoModalProps {
  defTitle?: string;
  defPriority?: string;
  show: boolean;
  onClose: () => void;
  activityId?: number;
  todoId?: number;
}

export default function AddTodoModal({
  defTitle,
  defPriority,
  show,
  onClose,
  activityId,
  todoId,
}: AddTodoModalProps) {
  const [title, setTitle] = useState(defTitle??"");
  const [priority, setPriority] = useState(defPriority??EPriorityType.VERY_HIGH.toString());
  const [, dispatch] = useGlobalState();

  const handleAddTodo = async () => {
    const body = {
      activity_group_id: activityId,
      title,
      priority,
    }

    const { data: newTodo, status } = await axios.post<INewTodo>(`${BASE_URL}/todo-items`, body);

    if (status === 201) {
      const { id, title, activity_group_id, is_active: isActive, priority } = newTodo;
      const is_active = isActive ? 1 : 0;
      dispatch(addTodo({ id, title, activity_group_id, is_active, priority }));
      onClose();
      setPriority("very-high");
      setTitle("")
    }
  };

  const handleUpdateTodo = async () => {
    const body = {
      title,
      priority,
    }

    const { data: updatedTodo, status } = await axios.patch<INewTodo>(`${BASE_URL}/todo-items/${todoId}`, body);

    if (status === 200) {
      const { id, title, activity_group_id, is_active: isActive, priority } = updatedTodo;
      const is_active = isActive ? 1 : 0;
      dispatch(updateTodo({ id, title, activity_group_id, is_active, priority }));
      onClose();
    }
  }

  return show ? (
    <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center p-4 z-20">
      <div
        data-cy="modal-add"
        className="w-full max-w-xs md:max-w-lg lg:max-w-[52rem] flex flex-col shadow-[0_6px_10px_0px_rgba(0,0,0,0.15)] bg-base-100 rounded-xl"
      >
        <div className="flex justify-between items-center p-6 md:p-7 border-b border-b-secondary-black">
          <p data-cy="modal-add-title" className="font-bold md:text-lg">
            Tambah List Item
          </p>
          <button
            onClick={onClose}
            data-cy="modal-add-close-button"
            className="btn btn-sm btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col w-full p-6 md:p-7 gap-3 md:gap-3.5">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold uppercase text-xs md:text-sm">Nama List Item</span>
            </label>
            <input
              data-cy='modal-add-name-input'
              defaultValue={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
          </div>
          
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold uppercase text-xs md:text-sm">Priority</span>
            </label>
            <div className="dropdown w-full max-w-xs">
            <label tabIndex={0} className="btn m-1 w-full max-w-xs justify-start btn-ghost border border-secondary-black">{priority}</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full max-w-xs">
              <li onClick={() => setPriority('very-high')}><a>Very-High</a></li>
              <li onClick={() => setPriority('high')}><a>High</a></li>
              <li onClick={() => setPriority('normal')}><a>Normal</a></li>
              <li onClick={() => setPriority('low')}><a>Low</a></li>
              <li onClick={() => setPriority('very-low')}><a>Very-Low</a></li>
            </ul>
          </div>
            {/* <select data-cy='modal-add-priority-dropdown' defaultValue={priority} onChange={(e) => setPriority(e.target.value)} className="select select-bordered">
              <option data-cy='modal-add-priority-item' value={EPriorityType.VERY_HIGH}>Very High</option>
              <option data-cy='modal-add-priority-item' value={EPriorityType.HIGH}>High</option>
              <option data-cy='modal-add-priority-item' value={EPriorityType.NORMAL}>Normal</option>
              <option data-cy='modal-add-priority-item' value={EPriorityType.LOW}>Low</option>
              <option data-cy='modal-add-priority-item' value={EPriorityType.VERY_LOW}>Very Low</option>
            </select> */}
          </div>
        </div>
        <div className="flex justify-end items-center px-6 md:px-7 py-4 border-t border-t-secondary-black">
          <button
            onClick={defTitle ? handleUpdateTodo : handleAddTodo}
            data-cy="modal-add-save-button"
            className="btn btn-primary"
            disabled={title ? false : true}
          >
            Simpan
          </button>
        </div>
      </div>
    </div>
  ) : null;
}
