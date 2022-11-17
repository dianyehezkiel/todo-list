import axios from 'axios';
import ActivityEmptyState from '../components/activity/ActivityEmptyState';
import AddButton from '../components/AddButton';
import { IActivities, INewActivity } from '../lib/types';
import Activities from '../components/activity/Activities';
import { useGlobalState } from '../reducer';
import { useCallback, useEffect, useState } from 'react';
import {
  addActivity,
  removeActivityTitle,
  setActivities,
} from '../reducer/reducer';
import { BASE_URL, EMAIL, NEW_ACTIVITY } from '../lib/constant';
import Alert from '../components/Alert';

export default function Home() {
  const [{ activities }, dispatch] = useGlobalState();
  const [showAlert, setShowAlert] = useState(false);
  const fetchCallback = useCallback(async () => {
    const params = {
      email: EMAIL,
    };
    const { data: activities } = await axios.get<IActivities>(
      `${BASE_URL}/activity-groups`,
      { params },
    );

    dispatch(setActivities(activities.data));
  }, [dispatch]);

  useEffect(() => {
    fetchCallback();
  }, [fetchCallback]);

  useEffect(() => {
    dispatch(removeActivityTitle());
  }, [dispatch]);

  const handleAddActivity = async () => {
    const body = {
      title: NEW_ACTIVITY,
      email: EMAIL,
    };

    const { status } = await axios.post<INewActivity>(
      `${BASE_URL}/activity-groups`,
      body,
    );

    if (status === 201) {
      fetchCallback();
    }
  };

  return (
    <div className="h-[calc(100vh-4rem)] mx-auto relative overflow-y-auto">
      <div className="todo-container min-h-[calc(100vh-4rem)] flex flex-col items-center gap-5">
        <div className="w-full flex justify-between items-center">
          <h2
            data-cy="activity-title"
            className="font-bold md:text-2xl lg:text-4xl"
          >
            Activity
          </h2>
          <AddButton dataCy="activity-add-button" onClick={handleAddActivity} />
        </div>
        <div className="w-full min-h-full flex-grow flex flex-col items-center">
          {activities.length === 0 ? (
            <ActivityEmptyState />
          ) : (
            <Activities
              activities={activities}
              onDeleteActivity={() => {
                setShowAlert(true);
                setTimeout(() => {
                  setShowAlert(false);
                }, 3000);
              }}
            />
          )}
        </div>
      </div>
      <Alert text="Activity berhasil dihapus" show={showAlert} />
    </div>
  );
}
