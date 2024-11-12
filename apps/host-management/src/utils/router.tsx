import {
  Outlet,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';
import Login from '../pages/login';
import Select from '../pages/select';
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

const selectRoute = createRoute({
  getParentRoute: () => indexRoute,
  path: '/select',
  component: () => <Select />,
});

const routeTree = rootRoute.addChildren([indexRoute, loginRoute, selectRoute]);

export const router = createRouter({ routeTree, defaultPreload: 'intent' });
