import {
  Outlet,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';
import { Index } from '../pages';
import Login from '../pages/login';
import Contest from '../pages/contest';

export const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <Index />,
});

export const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: () => <Login />,
});

export const contestRoute = createRoute({
  getParentRoute: () => indexRoute,
  path: '/contests',
  component: () => <Contest />,
});

export const usersManagementRoute = createRoute({
  getParentRoute: () => indexRoute,
  path: '/users',
  component: () => <>User Management</>,
});

export const problemsManagementRoute = createRoute({
  getParentRoute: () => indexRoute,
  path: '/problems',
  component: () => <>Problem Management</>,
});

export const judgeRoute = createRoute({
  getParentRoute: () => indexRoute,
  path: '/judge',
  component: () => <>Judge Management</>,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  usersManagementRoute,
  contestRoute,
  problemsManagementRoute,
  judgeRoute,
]);

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  basepath: process.env.NODE_ENV === 'development' ? '' : '/dashboard',
});
