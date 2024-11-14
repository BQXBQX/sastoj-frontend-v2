import {
  Outlet,
  createRootRoute,
  createRoute,
  createRouter,
  redirect,
} from '@tanstack/react-router';
import { Index } from '../pages';
import Login from '../pages/login';

export const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

export const contestRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contest',
  component: () => <Index />,
});

export const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: () => <Login />,
});

export const contestDetailRoute = createRoute({
  getParentRoute: () => contestRoute,
  path: '/:contestID', // dynamic route
  component: ({ params }) => {
    const { contestID } = params;
    return <div>Contest ID: {contestID}</div>; // Display the dynamic contestId
  },
});

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  loader: () =>
    redirect({
      href: 'login',
      statusCode: 301,
    }),
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  contestRoute,
  contestDetailRoute,
]);

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  basepath: process.env.NODE_ENV === 'development' ? '' : '/dashboard',
});
