import request from 'axios';
import {store} from '../store';
import {setError} from '../store/error-process/error-process';
import {clearErrorAction} from '../store/api-actions';
import {ErrorType} from '../types/types';
import {HttpCode} from '../const';

export const errorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const handleError = (message: string) => {
    store.dispatch(setError(message));
    store.dispatch(clearErrorAction());
  };

  const {response} = error;

  if (response) {
    switch (response.status) {
      case HttpCode.BadRequest:
        handleError(response.data.error);
        break;
      case HttpCode.Unauthorized:
        handleError(response.data.error);
        break;
      case HttpCode.MotFound:
        handleError(response.data.error);
        break;
    }
  }
};
