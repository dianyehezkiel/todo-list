import axios from 'axios';
import { useState } from 'react';
import { INewActivity } from '../lib/types';
import { useGlobalState } from '../reducer';
import { updateActivity } from '../reducer/reducer';

export default function EditableText({
  text,
  activityId,
}: {
  text?: string;
  activityId: number;
}) {
  const [, dispatch] = useGlobalState();
  const [isFocus, setIsFocus] = useState(false);
  const [txtState, setTxtState] = useState(text);

  const handleUpdateActive = async () => {
    const body = {
      title: txtState,
    };

    const { data: updatedActivity, status } = await axios.patch<INewActivity>(
      `/api/activities/${activityId}`,
      body,
    );

    if (status === 200) {
      const { id, title, created_at } = updatedActivity;
      dispatch(updateActivity({ id, title, created_at }));
      setIsFocus(false);
    }
  };

  return (
    <div className="flex flex-grow items-center w-full gap-2">
      {isFocus ? (
        <input
          data-cy='todo-title'
          autoFocus={isFocus}
          onBlur={() => {
            if (txtState !== text) handleUpdateActive();
          }}
          className="input input-sm md:input-md w-full flex-grow p-0.5 text-base"
          type="text"
          value={txtState}
          onChange={(e) => setTxtState(e.target.value)}
        />
      ) : (
        <h2
          data-cy="todo-title"
          className="font-bold md:text-2xl lg:text-4xl w-full flex-grow"
        >
          {txtState}
        </h2>
      )}
      <button
        onClick={() => setIsFocus(true)}
        data-cy="todo-title-edit-button"
        className="btn btn-square btn-sm md:btn-md btn-ghost text-secondary-black"
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
    </div>
  );
}
