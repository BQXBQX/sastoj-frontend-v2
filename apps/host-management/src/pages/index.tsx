import { Outlet } from '@tanstack/react-router';
import { ManagementLayout } from 'remote_pages/managementLayout';

export const Index = () => {
  return (
    <ManagementLayout>
      <Outlet />
    </ManagementLayout>
  );
};
