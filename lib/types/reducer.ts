import { IActivity, ITodo } from './responses';

export enum ESortType {
  NEWEST,
  OLDEST,
  AZ,
  ZA,
  ACTIVE,
}

export interface IState {
  activities: IActivity[];
  activityTitle?: string;
  todos: ITodo[];
  sort: ESortType
}

export enum EActionType {
  SET_ACTIVITIES = 'SET_ACTIVITIES',
  SET_ACTIVITY_TITLE = 'SET_ACTIVITY_TITLE',
  SET_TODOS = 'SET_TODOS',
  SET_SORT = 'SET_SORT',
  ADD_ACTIVITY = 'ADD_ACTIVITY',
  ADD_TODO = 'ADD_TODO',
  UPDATE_ACTIVITY = 'UPDATE_ACTIVITY',
  UPDATE_TODO = 'UPDATE_TODO',
  DELETE_ACTIVITY = 'DELETE_ACTIVITY',
  DELETE_TODO = 'DELETE_TODO',
  REMOVE_ACTIVITY_TITLE = 'REMOVE_ACTIVITY_TITLE',
}

export type IAction =
  | {
      type: EActionType.SET_ACTIVITIES;
      payload: IActivity[];
    }
  | {
      type: EActionType.SET_ACTIVITY_TITLE;
      payload: string;
    }
  | {
      type: EActionType.SET_TODOS;
      payload: ITodo[];
    }
  | {
      type: EActionType.ADD_ACTIVITY;
      payload: IActivity;
    }
  | {
      type: EActionType.ADD_TODO;
      payload: ITodo;
    }
  | {
      type: EActionType.UPDATE_ACTIVITY;
      payload: IActivity;
    }
  | {
      type: EActionType.UPDATE_TODO;
      payload: ITodo;
    }
  | {
      type: EActionType.DELETE_ACTIVITY;
      payload: number;
    }
  | {
      type: EActionType.DELETE_TODO;
      payload: number;
    }
  | {
      type: EActionType.REMOVE_ACTIVITY_TITLE;
      payload: undefined;
    }
  | {
    type: EActionType.SET_SORT;
    payload: ESortType
  };
