import React, {useState, useLayoutEffect} from 'react';
import {Router} from 'react-router-dom';
import type {BrowserHistory} from 'history';
import {useAppDispatch} from '../../hooks';
import {setActivePoint} from '../../store/point-data/point-data';
import {DEFAULT_POINT_ID} from '../../const';

export interface HistoryRouterProps {
  history: BrowserHistory
  basename?: string
  children?: React.ReactNode
}

function HistoryRouter({
  basename,
  children,
  history,
}: HistoryRouterProps) {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });
  const dispatch = useAppDispatch();

  useLayoutEffect(() => history.listen((historyInfo) => {
    setState(historyInfo);
    dispatch(setActivePoint(DEFAULT_POINT_ID))
  }), [history]);

  return (
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
}

export default HistoryRouter;
