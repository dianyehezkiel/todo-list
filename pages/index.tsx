import axios from 'axios';
import { GetServerSideProps } from 'next';
import { format } from 'date-fns';
import ActivityEmptyState from '../components/ActivityEmptyState';
import AddButton from '../components/AddButton';
import { IActivities, IActivity, INewActivity } from '../lib/types';
import Activities from '../components/activity/Activities';
import { useGlobalState } from '../reducer';
import { useEffect } from 'react';
import { addActivity, setActivities } from '../reducer/reducer';
import { BASE_URL, EMAIL, NEW_ACTIVITY } from '../lib/constant';

interface HomeProps {
  activitiesProps: IActivity[];
}

export const getServerSideProps: GetServerSideProps = async () => {
  const params = {
    email: EMAIL,
  };
  const { data: activities } = await axios.get<IActivities>(
    'https://todo.api.devcode.gethired.id/activity-groups',
    { params },
  );

  return {
    props: {
      activitiesProps: activities.data,
    },
  };
};

export default function Home({ activitiesProps }: HomeProps) {
  const [ { activities }, dispatch] = useGlobalState();
  useEffect(() => {
    dispatch(setActivities(activitiesProps));
  }, [dispatch, activitiesProps])

  const handleAddActivity = async () => {
    const body = {
      title: NEW_ACTIVITY,
      email: EMAIL,
    }

    const { data: newActivity, status } = await axios.post<INewActivity>('/api/activities', body);

    if (status === 200) {
      const { id, title, created_at } = newActivity;
      dispatch(addActivity({ id, title, created_at }));
    }
  }

  return (
    <div className="todo-container min-h-[calc(100vh-4rem)] flex flex-col items-center gap-5">
      <div className="w-full flex justify-between items-center">
        <h2 data-cy='activity-title' className="font-bold md:text-2xl lg:text-4xl">Activity</h2>
        <AddButton onClick={handleAddActivity} />
      </div>
      <div className="w-full min-h-full flex-grow flex flex-col items-center">
        {activities.length === 0 ? (
          <ActivityEmptyState />
        ) : (
          <Activities activities={activities} />
        )}
      </div>
    </div>
  );
}
