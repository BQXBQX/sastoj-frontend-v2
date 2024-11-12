import {
  Outlet,
  createRootRoute,
  createRoute,
  createRouter,
} from '@tanstack/react-router';
import Login from '../pages/login';
import Select from '../pages/select';

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: function Index() {
    return (
      <div className="p-2">
        <h3>Welcome Home!</h3>
      </div>
    );
  },
});

const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/login',
  component: () => <Login />,
});

const selectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/select',
  component: () => <Select />,
});

const routeTree = rootRoute.addChildren([indexRoute, loginRoute, selectRoute]);

export const router = createRouter({ routeTree, defaultPreload: 'intent' });
