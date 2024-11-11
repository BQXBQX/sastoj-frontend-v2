import { RouterProvider } from '@tanstack/react-router';
import ReactDOM from 'react-dom/client';
import { router } from './utils/router';

const mount = ({ mountPoint }: { mountPoint: HTMLElement }) => {
  const root = ReactDOM.createRoot(mountPoint);
  root.render(<RouterProvider router={router}></RouterProvider>);

  return () => queueMicrotask(() => root.unmount());
};

export { mount };
