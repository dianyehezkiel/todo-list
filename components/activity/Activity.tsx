import axios from 'axios';
import { format } from 'date-fns';
import { useState } from 'react';
import { IActivity } from '../../lib/types';
import { useGlobalState } from '../../reducer';
import { deleteActivity } from '../../reducer/reducer';
import DeleteModal from '../DeleteModal';

export default function Activity({ activity }: { activity: IActivity }) {
  const [showModal, setShowModal] = useState(false);
  const [, dispatch] = useGlobalState();
  const handleDeleteActivity = async () => {
    const { status } = await axios.delete(`/api/activities/${activity.id}`);
    if (status === 200) {
      dispatch(deleteActivity(activity.id));
      setShowModal(false);
    }
  };
  return (
    <>
      <div
        data-cy="activity-item"
        className="card col-span-1 aspect-square p-4 md:p-6 justify-between shadow-[0_6px_10px_0px_rgba(0,0,0,0.15)] hover:cursor-pointer lg:transition-transform lg:hover:scale-105"
      >
        <p
          data-cy="activity-item-title"
          className="text-sm md:text-lg font-bold"
        >
          {activity.title}
        </p>
        <div className="w-full flex justify-between items-center">
          <p
            data-cy="activity-item-date"
            className="text-xs md:text-sm text-secondary-black"
          >
            {format(new Date(activity.created_at), 'dd MMMM yyyy')}
          </p>
          <button
            onClick={() => setShowModal(true)}
            data-cy="activity-item-delete-button"
            className="btn btn-square btn-xs md:btn-sm btn-ghost hover:bg-error/75 text-secondary-black hover:text-error-content"
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
        type="Activity"
        show={showModal}
        itemName={activity.title}
        onCancel={() => setShowModal(false)}
        onDelete={handleDeleteActivity}
      />
    </>
  );
}
