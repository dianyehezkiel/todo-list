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

export enum EPriorityType {
  VERY_HIGH = 'very-high',
  HIGH = 'high',
  NORMAL = 'normal',
  LOW = 'low',
  VERY_LOW = 'very-low',
}

export interface ITodo {
  id: number;
  title: string;
  activity_group_id: number;
  is_active: number;
  priority: EPriorityType;
}

export interface INewTodo extends Omit<ITodo, 'is_active'> {
  is_active: boolean;
  created_at: '2022-11-16T15:07:34.438Z';
  updated_at: '2022-11-16T15:07:34.438Z';
}

export interface ITodos {
  total: number;
  limit: number;
  skip: number;
  data: ITodo[];
}

export interface IActivityTodos extends IActivity {
  todo_items: ITodo[];
}
