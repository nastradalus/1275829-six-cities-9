import {createAction} from '@reduxjs/toolkit';
import {City} from '../types/city';

export const changeCity = createAction<City>('changeCity');
