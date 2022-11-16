import { Reducer } from 'react';
import { EActionType, IAction, IActivity, IState, ITodo } from '../lib/types';

export const initialState: IState = {
  activities: [],
  activityId: undefined,
  todos: [],
};

export const reducer: Reducer<IState, IAction> = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case EActionType.SET_ACTIVITIES:
      return {
        ...state,
        activities: payload,
      };
    case EActionType.SET_ACTIVITY_ID:
      return {
        ...state,
        activityId: payload,
      };
    case EActionType.SET_TODOS:
      return {
        ...state,
        todos: payload,
      };
    case EActionType.ADD_ACTIVITY:
      return {
        ...state,
        activities: [payload, ...state.activities],
      };
    case EActionType.ADD_TODO:
      return {
        ...state,
        todos: [payload, ...state.todos],
      };
    case EActionType.UPDATE_ACTIVITY:
      const otherActivities = state.activities.filter(
        (activity) => activity.id !== payload.id,
      );
      return {
        ...state,
        activities: [payload, ...otherActivities],
      };
    case EActionType.UPDATE_TODO:
      const otherTodos = state.todos.filter((todo) => todo.id !== payload.id);
      return {
        ...state,
        todos: [payload, ...otherTodos],
      };
    case EActionType.DELETE_ACTIVITY:
      return {
        ...state,
        activities: state.activities.filter(
          (activity) => activity.id !== payload,
        ),
      };
    case EActionType.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };
    default:
      return state;
  }
};

export const setActivities = (activities: IActivity[]): IAction => {
  return {
    type: EActionType.SET_ACTIVITIES,
    payload: activities,
  };
};

export const setActivityId = (activityId: number): IAction => {
  return {
    type: EActionType.SET_ACTIVITY_ID,
    payload: activityId,
  };
};

export const setTodos = (todos: ITodo[]): IAction => {
  return {
    type: EActionType.SET_TODOS,
    payload: todos,
  };
};

export const addActivity = (activity: IActivity): IAction => {
  return {
    type: EActionType.ADD_ACTIVITY,
    payload: activity,
  };
};

export const addTodo = (todo: ITodo): IAction => {
  return {
    type: EActionType.ADD_TODO,
    payload: todo,
  };
};

export const updateActivity = (activity: IActivity): IAction => {
  return {
    type: EActionType.UPDATE_ACTIVITY,
    payload: activity,
  };
};

export const updateTodo = (todo: ITodo): IAction => {
  return {
    type: EActionType.UPDATE_TODO,
    payload: todo,
  };
};

export const deleteActivity = (activityId: number): IAction => {
  return {
    type: EActionType.DELETE_ACTIVITY,
    payload: activityId,
  };
};

export const deleteTodo = (todoId: number): IAction => {
  return {
    type: EActionType.DELETE_TODO,
    payload: todoId,
  };
};
