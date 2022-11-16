import { IActivity, ITodo } from './responses';

export interface IState {
  activities: IActivity[];
  activityId?: number;
  todos: ITodo[];
}

export enum EActionType {
  SET_ACTIVITIES = 'SET_ACTIVITIES',
  SET_ACTIVITY_ID = 'SET_ACTIVITY_ID',
  SET_TODOS = 'SET_TODOS',
  ADD_ACTIVITY = 'ADD_ACTIVITY',
  ADD_TODO = 'ADD_TODO',
  UPDATE_ACTIVITY = 'UPDATE_ACTIVITY',
  UPDATE_TODO = 'UPDATE_TODO',
  DELETE_ACTIVITY = 'DELETE_ACTIVITY',
  DELETE_TODO = 'DELETE_TODO',
}

export type IAction =
  | {
      type: EActionType.SET_ACTIVITIES;
      payload: IActivity[];
    }
  | {
      type: EActionType.SET_ACTIVITY_ID;
      payload: number;
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
    };
