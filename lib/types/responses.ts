export interface IActivity {
  id: number;
  title: string;
  created_at: string;
}

export interface INewActivity extends IActivity {
  updated_at: string;
  email: string;
}

export interface IActivities {
  total: number;
  limit: number;
  skip: number;
  data: IActivity[];
}

export interface ITodo {
  id: number,
  title: string,
  activity_group_id: number,
  is_active: number,
  priority: "very-high" | "high" | "normal" | "low" | "very-low"
}

export interface INewTodo extends Omit<ITodo, 'is_active'> {
  is_active: boolean,
  created_at: "2022-11-16T15:07:34.438Z",
  updated_at: "2022-11-16T15:07:34.438Z",
}
