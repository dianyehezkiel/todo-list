import { createContext, Dispatch, ReactNode, useContext, useReducer } from 'react';
import { IAction, IState } from '../lib/types';
import { initialState } from './reducer';

export const StateContext = createContext<[IState, Dispatch<IAction>]>([
  initialState,
  () => initialState,
]);

type StateProviderProps = {
  reducer: React.Reducer<IState, IAction>;
  children: ReactNode;
}

export default function StateProvider({ reducer, children }: StateProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  )
}

export const useGlobalState = () => useContext(StateContext);