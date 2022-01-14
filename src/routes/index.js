import { lazy } from 'react';

const AuthView = lazy(() => import('views/AuthView/AuthView'));
const DayReportView = lazy(() => import('views/DayReportView/DayReportView'));
const MonthReportView = lazy(() =>
  import('views/MonthReportView/MonthReportView'),
);

const defaultPath = '/auth';

const requireAuthPages = [
  {
    key: 'day-view',
    path: '/day-report',
    Component: DayReportView,
    exact: true,
    redirectTo: '/home',
  },
  {
    key: 'report-view',
    path: '/month-report',
    Component: MonthReportView,
    exact: true,
    redirectTo: '/home',
  },
];

const requireNotAuthPages = [
  {
    key: 'auth-view',
    path: '/auth',
    Component: AuthView,
    exact: true,
    redirectTo: '/day-report',
  },
];

export { requireAuthPages, requireNotAuthPages, defaultPath };
export { default } from './Routes';
