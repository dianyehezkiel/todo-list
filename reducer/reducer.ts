import { Reducer } from 'react';
import { EActionType, ESortType, IAction, IActivity, IState, ITodo } from '../lib/types';

export const initialState: IState = {
  activities: [],
  activityTitle: undefined,
  todos: [],
  sort: ESortType.ACTIVE,
};

export const reducer: Reducer<IState, IAction> = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case EActionType.SET_ACTIVITIES:
      return {
        ...state,
        activities: payload,
      };
    case EActionType.SET_ACTIVITY_TITLE:
      return {
        ...state,
        activityTitle: payload,
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
    case EActionType.REMOVE_ACTIVITY_TITLE:
      return {
        ...state,
        activityTitle: undefined,
      }
    case EActionType.SET_SORT:
      return {
        ...state,
        sort: payload
      }
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

export const setActivityTitle = (activityTitle: string): IAction => {
  return {
    type: EActionType.SET_ACTIVITY_TITLE,
    payload: activityTitle,
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

export const removeActivityTitle = (): IAction => {
  return {
    type: EActionType.REMOVE_ACTIVITY_TITLE,
    payload: undefined
  }
}

export const setSort = (sortType: ESortType): IAction => {
  return {
    type: EActionType.SET_SORT,
    payload: sortType,
  }
}
