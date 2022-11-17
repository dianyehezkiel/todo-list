import { useRouter } from "next/router";
import { IActivity } from "../../lib/types";
import Activity from "./Activity";

export default function Activities({ activities, onDeleteActivity }: { activities: IActivity[], onDeleteActivity: () => void }) {
  const router = useRouter();

  const handleActivityClick = (id: number) => {
    const idStr = id.toString();
    router.push(`/activities/${idStr}`);
  }

  return (
    <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {activities.map((activity) => (
        <Activity onDelete={onDeleteActivity} key={activity.id} activity={activity} onClick={() => handleActivityClick(activity.id)} />
      ))}
    </div>
  )
}