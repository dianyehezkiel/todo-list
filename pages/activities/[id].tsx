import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AddButton from '../../components/AddButton';
import AddTodoModal from '../../components/AddTodoModal';
import Alert from '../../components/Alert';
import EditableText from '../../components/EditableText';
import SortButton from '../../components/SortButton';
import TodoEmptyState from '../../components/todo/TodoEmptyState';
import Todos from '../../components/todo/Todos';
import { BASE_URL } from '../../lib/constant';
import {
  IActivityTodos,
  ITodo,
} from '../../lib/types';
import { useGlobalState } from '../../reducer';
import { setActivityTitle, setTodos } from '../../reducer/reducer';

export default function ActivityDetail() {
  const [{ todos, activityTitle }, dispatch] = useGlobalState();
  const [showAddModal, setShowAddModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const fetchData =async () => {
      const { id } = router.query;

      const { data: activity } = await axios.get<IActivityTodos>(
        `${BASE_URL}/activity-groups/${id}`,
      );
      dispatch(setTodos(activity.todo_items));
      dispatch(setActivityTitle(activity.title));
    }

    fetchData();
  }, [dispatch, router])

  return (
    <>
      <div className="todo-container min-h-[calc(100vh-4rem)] flex flex-col items-center gap-5">
        <div className="w-full flex justify-between items-center gap-2">
          <div className="flex flex-grow items-center">
            <button
              data-cy='todo-back-button'
              onClick={() => router.push('/')}
              className="hidden md:inline-flex btn btn-sm btn-square btn-ghost -ml-2 mr-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <EditableText text={activityTitle??(router.query.title as string)} activityId={Number(router.query.id as string)} />
          </div>
          <div className='flex gap-2 items-center'>
          <SortButton />
          <AddButton dataCy='todo-add-button' onClick={() => setShowAddModal(true)} />
          </div>
        </div>
        <div className="w-full min-h-full flex-grow flex flex-col items-center">
          {todos.length === 0 ? <TodoEmptyState /> : <Todos onDeleteTodo={() => {
            setShowAlert(true);
            setTimeout(() => {
              setShowAlert(false)
            }, 3000);
          }} todos={todos} />}
        </div>
      </div>
      <AddTodoModal
        activityId={Number(router.query.id as string)}
        defTitle={undefined}
        defPriority={undefined}
        show={showAddModal}
        onClose={() => setShowAddModal(false)}
      />
      <Alert text='List item berhasil dihapus' show={showAlert} />
    </>
  );
}
