import { Outlet, useNavigate, useRouter } from '@tanstack/react-router';
import { ManagementLayout, NavItems } from 'remote_pages/managementLayout';
import {
  IconAvatar,
  IconButton,
  // IconCollapse,
  IconDescriptions,
  IconTooltip,
} from '@douyinfe/semi-icons-lab';
import { useMemo } from 'react';

export const Index = () => {
  const navigate = useNavigate();
  const router = useRouter();
  const defaultSelectKey = useMemo(
    () => router.latestLocation.pathname.replace('/', ''),
    [router.latestLocation.pathname],
  );
  const items: NavItems = [
    {
      itemKey: 'contests',
      text: '比赛管理',
      icon: <IconDescriptions />,
      onClick: () => {
        navigate({ to: '/contests' });
      },
    },
    {
      itemKey: 'users',
      text: '用户管理',
      icon: <IconAvatar />,
      onClick: () => {
        navigate({ to: '/users' });
      },
    },
    {
      itemKey: 'problems',
      text: '问题管理',
      icon: <IconTooltip />,
      onClick: () => {
        navigate({ to: '/problems' });
      },
    },
    // TODO: test case router
    // {
    //   itemKey: 'Cases',
    //   text: '测试点管理',
    //   icon: <IconCollapse />,
    //   onClick: () => {
    //     // navigate({ to: '/cases' });
    //   },
    // },
    {
      itemKey: 'judge',
      text: '阅卷管理',
      icon: <IconButton />,
      onClick: () => {
        navigate({ to: '/judge' });
      },
    },
  ];

  return (
    <ManagementLayout navItems={items} defaultSelectKey={defaultSelectKey}>
      <Outlet />
    </ManagementLayout>
  );
};
