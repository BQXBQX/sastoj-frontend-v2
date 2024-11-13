import {
  Outlet,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';
import Login from '../pages/login';
import Contest from '../pages/contest';
import { Index } from '../pages';

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: () => <Index />,
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: () => <Login />,
});

const contestRoute = createRoute({
  getParentRoute: () => indexRoute,
  path: '/contest',
  component: () => <Contest />,
});

const routeTree = rootRoute.addChildren([indexRoute, loginRoute, contestRoute]);

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  basepath: process.env.NODE_ENV === 'development' ? '' : '/dashboard',
});
