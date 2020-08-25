import { ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { dashboardReducer, IDashboard } from './dashboard/dashboard.reducer';
import { environment } from '../../../../environments/environment';


// Dashboard reducers should be define here
export interface IDashboardState {
  dashboard: IDashboard;
}

// all new reducers should be define here
export const reducers: ActionReducerMap<IDashboardState> = {
  dashboard: dashboardReducer,
};

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<IDashboardState>[] = !environment.production ? [storeFreeze] : [];

export const getDashboardStates = createFeatureSelector<IDashboardState>('dashboard');

export const getDashboardState = createSelector(
  getDashboardStates,
  (state: IDashboardState) => (state && state.hasOwnProperty('dashboard')) ? state.dashboard : {}
);
