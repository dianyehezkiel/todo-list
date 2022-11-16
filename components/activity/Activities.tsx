import { IActivity } from "../../lib/types";
import Activity from "./Activity";

export default function Activities({ activities }: { activities: IActivity[] }) {
  return (
    <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {activities.map((activity) => (
        <Activity key={activity.id} activity={activity} />
      ))}
    </div>
  )
}