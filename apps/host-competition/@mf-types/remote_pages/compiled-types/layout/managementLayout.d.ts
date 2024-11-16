import { NavItems } from '@douyinfe/semi-ui/lib/es/navigation';
export type { NavItems };
export interface ManagementLayoutProps {
    navItems: NavItems;
    children: React.ReactNode;
    defaultSelectKey: string;
}
export declare function ManagementLayout({ children, navItems, defaultSelectKey, }: ManagementLayoutProps): import("react/jsx-runtime").JSX.Element;
